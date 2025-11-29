from dotenv import load_dotenv
from openai import OpenAI
import json
import os
import requests
import gradio as gr
from context import prompt
import uuid
from chat_saver import save_conversation

load_dotenv(override=True)

def send_push_notification(message):
    message = "The following user visited your website\n" + message
    requests.post(
        "https://api.pushover.net/1/messages.json",
        data={
            "token": os.getenv("PUSHOVER_TOKEN"),
            "user": os.getenv("PUSHOVER_USER"),
            "message": message,
        }
    )

send_push_notification_json = {
    "name": "send_push_notification",
    "description": "Use this tool to send a push notification to owner showing the user is interested to contact",
    "parameters": {
        "type": "object",
        "properties": {
            "message": {
                "type": "string",
                "description": "message content for the push notification"
            }
        },
        "required": ["message"],
    }
}

tools = [{"type": "function", "function": send_push_notification_json}]

class Me:

    def __init__(self):
        self.client = OpenAI(
            base_url="https://api.groq.com/openai/v1",
            api_key=os.environ.get("GROQ_API_KEY")
        )

        self.limit = 3
        self.CONTEXT = prompt()
        self.uuid = str(uuid.uuid4())

    def handle_tool_call(self, tool_calls):
        results = []
        for tool_call in tool_calls:
            tool_name = tool_call.function.name
            arguments = json.loads(tool_call.function.arguments)
            print(f"Tool called: {tool_name}", flush=True)
            tool = globals().get(tool_name)
            result = tool(**arguments) if tool else {}
            results.append({
                "role": "tool",
                "content": json.dumps(result),
                "tool_call_id": tool_call.id
            })
            
        return results

    def system_prompt(self):
        return prompt()

    def chat(self, message, history):
        # Count only user messages
        user_messages_count = sum(1 for h in history if h["role"] == "user")

        if user_messages_count == self.limit:  # Stop after 20 user messages
            final_message = f"This chat session has reached its limit of {self.limit} messages from you. Please share your email address if you would like to keep this conversation going."
            conversation = [
                {"role": "user", "content": message},
                {"role": "bot", "content": final_message}
            ]
            return final_message
        
        if user_messages_count > self.limit:
            if user_messages_count == self.limit+1:
                send_push_notification(message=message)
            final_message = (
                "Your last message has been recorded and sent as push notication. This chat session has reached its limit."
            )
            return final_message

        # Continue the chat as usual
        history = [{"role": h["role"], "content": h["content"]} for h in history]
        messages = [{"role": "system", "content": self.CONTEXT}] + history + [{"role": "user", "content": message}]

        done = False
        while not done:
            response = self.client.chat.completions.create(
                model="llama-3.1-8b-instant",
                messages=messages,
                tools=tools
            )
            if response.choices[0].finish_reason == "tool_calls":
                message = response.choices[0].message
                tool_calls = message.tool_calls
                results = self.handle_tool_call(tool_calls)
                messages.append(message)
                messages.extend(results)
            else:
                done = True

        response_message = response.choices[0].message.content

        print(response_message)

        conversation = [
            {"role": "user", "content": message},
            {"role": "bot", "content": response_message}
        ]
        save_conversation(session_id=self.uuid, new_messages=conversation)
        return response_message


if __name__ == "__main__":
    me = Me()
    gr.ChatInterface(me.chat, type="messages").launch()
