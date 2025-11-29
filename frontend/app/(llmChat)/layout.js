import './globals.css'

export const metadata = {
  title: "Chat Iframe",
};

// ❗ DO NOT return <html> or <body> inside a nested layout.
// ❗ It causes hydration errors and breaks RootLayout logic.

export default function IframeLayout({ children }) {
    return (
    <html>
      <body style={{ margin: 0, padding: 0 }}>
        {children}
      </body>
    </html>
  );
}
