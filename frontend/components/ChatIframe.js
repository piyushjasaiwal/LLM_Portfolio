'use client';
import PropTypes from 'prop-types';

export default function ChatIframe({ src }) {
  return (
    <div className="card p-4 h-full min-h-[500px] flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-sm font-medium">Chat (LLM)</div>
        <div className="text-xs text-gray-500">Connected</div>
      </div>

      {/* Iframe fills remaining height */}
      <iframe
        src={src}
        title="LLM Chat"
        className="w-full flex-1 border rounded-md"
      />

      {/* Footer */}
      <div className="mt-3 text-xs text-gray-500">
        Tip: replace the iframe src with your backend's embeddable chat route.
      </div>
    </div>
  );
}

ChatIframe.propTypes = { src: PropTypes.string };
