import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { AiOutlineLinkedin } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-white w-full text-gray-700 py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="col-span-2 lg:col-span-1">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            Leftover Recipes
          </h3>
          <p className="text-sm text-gray-600">
            Transform your leftover ingredients into delicious meals with our
            AI-powered recipe generator.
          </p>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Popular Recipes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Connect With Us</h4>
          <div className="flex items-center gap-4 mt-2">
            <Link href="https://github.com/vikash58214" aria-label="GitHub">
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/vikash5821/"
              aria-label="LinkedIn"
            >
              <AiOutlineLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://www.instagram.com/vikash_5821"
              aria-label="Instagram"
            >
              <FaInstagram className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-5 border-t border-gray-300 py-4 text-center text-sm text-gray-500">
        <div className="text-center text-sm text-gray-500">
          Made with <span className="text-red-500">❤️</span> by{" "}
          <span className="font-medium text-gray-700">Vikash</span>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
