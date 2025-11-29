from pathlib import Path
import json
from typing import List, Dict

MEMORY_DIR = Path("./memory")
MEMORY_DIR.mkdir(exist_ok=True)

def save_conversation(session_id: str, new_messages: List[Dict]):
    file_path = MEMORY_DIR / f"{session_id}.json"

    # Load existing messages (if any)
    if file_path.exists():
        with open(file_path, "r", encoding="utf-8") as f:
            try:
                all_messages = json.load(f)
            except json.JSONDecodeError:
                all_messages = []
    else:
        all_messages = []

    # Add new messages
    all_messages.extend(new_messages)

    # Write back to file (overwrite with valid JSON)
    with open(file_path, "w", encoding="utf-8") as f:
        json.dump(all_messages, f, indent=2, ensure_ascii=False)

