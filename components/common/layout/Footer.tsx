const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-7xl px-4 py-6 text-sm text-gray-600">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} ALX Listing. All rights reserved.</p>
          <nav className="flex gap-4">
            <a className="hover:underline" href="#">
              Terms
            </a>
            <a className="hover:underline" href="#">
              Privacy
            </a>
            <a className="hover:underline" href="#">
              Support
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
