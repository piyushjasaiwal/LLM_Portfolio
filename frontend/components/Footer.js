'use client';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full border-t bg-white py-0 shadow-md">
      <div className="mx-auto text-center text-sm text-gray-500 p-4">
  © {new Date().getFullYear()} Piyush — Built with ❤️
</div>

    </footer>
  );
}