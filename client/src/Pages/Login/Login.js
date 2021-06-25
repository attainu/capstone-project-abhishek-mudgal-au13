import GetInButton from "../../components/Buttons/GetInButton";
import Header from "../../components/NavigationBars/Header";
import { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

export default function Login(props) {
  const loginURL = "http://localhost:5001/api/login";
  const [loginForm, setLoginFrom] = useState({
    email: "",
    password: "",
  });

  const [validationError, setValidationError] = useState();

  const loginHandler = () => {
    fetch(loginURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginForm),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errors.length === 0) {
          localStorage.setItem('token', result.data.token)
          props.history.push("/dashboard");
          // console.log(result);
        } else {
          setValidationError(...result.errors);
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img className="mx-auto h-12 w-auto" src="/1.png" alt="Workflow" />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Signin to your Uno Link!
            </h2>
          </div>

          <div className="text-center text-red-500 font-bold">
            <div>{validationError && validationError.msg}</div>
          </div>

          <div className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setLoginFrom({
                      ...loginForm,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={(e) =>
                    setLoginFrom({
                      ...loginForm,
                      password: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div>
              <button
                onClick={loginHandler}
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Login!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
