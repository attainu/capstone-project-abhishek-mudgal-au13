import { Link } from "react-router-dom";

function SideBar(props) {
  return (
    <aside className="flex flex-col items-center bg-indigo-600 text-gray-700 shadow h-full">
      <div className="h-16 flex items-center w-full">
        <a className="h-6 w-6 mx-auto" href="http://localhost:3000/register">
          <img className="h-6 w-6 mx-auto" src="/1.png" alt="Uno Link Logo" />
        </a>
      </div>
      <ul>
        <li className="hover:bg-gray-100">
          <Link
            to="/dashboard"
            className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link
            to="/charts"
            className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </li>
        <li className="hover:bg-gray-100">
          <Link
            to="/profile"
            className="h-16 px-6 flex flex justify-center items-center w-full focus:text-orange-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </Link>
        </li>
      </ul>
      <div className="mt-auto h-16 flex items-center w-full">
        <button className="h-16 w-10 mx-auto flex flex justify-center items-center w-full focus:text-orange-500 hover:bg-red-200 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
}

export default SideBar;
