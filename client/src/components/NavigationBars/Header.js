import { Link } from 'react-router-dom'

const Header = () => {
  return (
      <nav className="fixed flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
        <div className="mb-2 sm:mb-0 inner">
          <Link
            to="/"
            className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold"
          >
            UnoLink
          </Link>
          <br />
          <span className="text-xs text-grey-dark">Uno link for all!</span>
        </div>
        <div className="sm:mb-0 self-center">
          <Link
            to="/dashboard"
            className="text-md no-underline text-black hover:text-blue-dark ml-2 px-1"
          >
            Dashboard
          </Link>
          <a
            href="#"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            About
          </a>
          <a
            href="#"
            className="text-md no-underline text-grey-darker hover:text-blue-dark ml-2 px-1"
          >
            Features
          </a>

        </div>

        <div className="flex justify-between text-white">
        <Link to="/login">
        <button className="rounded h-12 w-20  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 text-black">Login</button>
        </Link>
        <Link to="/register">
        <button className="rounded h-12 w-20 bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
        </Link>
        </div>
      </nav>
  );
};

export default Header;
