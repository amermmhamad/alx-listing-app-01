import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4">
        <Link href="/" className="font-semibold text-xl tracking-tight">
          alx<span className="text-indigo-600">Listing</span>
        </Link>

        <div className="hidden md:flex w-full max-w-xl mx-6">
          <input
            placeholder="Search destinations, villas, cities..."
            className="w-full rounded-full border px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="flex item-center gap-3">
          <button className="rounded-full border px-4 py-1 text-sm hover:bg-gray-50">
            Sign In
          </button>
          <button className="rounded-full bg-indigo-600 px-4 py-1 text-sm text-white hover:bg-indigo-700">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
