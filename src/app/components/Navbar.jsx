import Link from "next/link";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 border-b border-gray-400">
      <div>
        <h1 className="text-lg font-bold">Recipe Generator</h1>
      </div>
      <div className="md:flex items-center gap-4 hidden">
        <Link href="/" className="text-gray-600 hover:underline">
          Home
        </Link>
        <Link href="" className="ml-4 text-gray-600 hover:underline">
          Recipes
        </Link>
        <Link href="/about" className="ml-4 text-gray-600 hover:underline">
          About
        </Link>
        <button className="w-20 text-sm font-semibold py-1.5 rounded border border-gray-600">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
