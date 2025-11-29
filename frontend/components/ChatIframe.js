'use client';
import PropTypes from 'prop-types';

export default function ChatIframe({ src }) {
  return (
    <div className="card p-4 h-full min-h-[500px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">Chat (LLM)</div>
      </div>

      {/* Iframe fills remaining height */}
      <iframe
        src={src}
        title="LLM Chat"
        className="w-full flex-1 border rounded-md"
      />
    </div>
  );
}

ChatIframe.propTypes = { src: PropTypes.string };
