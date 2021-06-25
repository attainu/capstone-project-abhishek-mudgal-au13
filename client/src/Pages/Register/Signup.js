import Header from "../../components/NavigationBars/Header";
import React, { useState } from "react";
import { LockClosedIcon } from "@heroicons/react/solid";

export default function Register(props) {
  const registerURL = "https://uno-link.herokuapp.com/api/register";
  const [registerForm, setRegisterFrom] = useState({
    userName: "",
    firstName: "",
    email: "",
    password: "",
  });

  const [validationError, setValidationError] = useState();

  const registerHandler = () => {
    fetch(registerURL, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(registerForm),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errors.length === 0) {
          props.history.push("/login");
        } else {
          setValidationError(...result.errors);
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
              Get started!
            </h2>
          </div>

          <div className="text-center text-red-500 font-bold">
            <div>{validationError && validationError.msg}</div>
          </div>

          <div className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="firstName" className="sr-only">
                  User Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="User Name"
                  onChange={(e) =>
                    setRegisterFrom({
                      ...registerForm,
                      userName: e.target.value,
                    })
                  }
                />
              </div>
              <div>
                <label htmlFor="firstName" className="sr-only">
                  First name
                </label>
                <input
                  id="firstName"
                  name="Name"
                  type="Name"
                  autoComplete="name"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Fist Name"
                  onChange={(e) =>
                    setRegisterFrom({ ...registerForm, firstName: e.target.value })
                  }
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={(e) =>
                    setRegisterFrom({ ...registerForm, email: e.target.value })
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
                    setRegisterFrom({
                      ...registerForm,
                      password: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div>
              <button
                onClick={registerHandler}
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Register!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
