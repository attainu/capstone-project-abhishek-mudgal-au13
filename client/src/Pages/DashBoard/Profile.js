import React from "react";
import SideBar from "../../components/NavigationBars/SideBar";
import PropTypes from "prop-types";
import GetInButton from "../../components/Buttons/GetInButton";
import { useState } from "react";

function Profile(props) {
  const userUpdateUrl = "https://uno-link.herokuapp.com/api/update-user";
  const [updateForm, setUpdateForm] = useState({
    email: "",
    firstName: "",
  });

  const [validationError, setValidationError] = useState();

  const userUpdateHandler = () => {
    fetch(userUpdateUrl, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(updateForm),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errors.length === 0) {
          let profBtn = document.getElementById("updateBtn");
          profBtn.style.backgroundColor = "green"
          profBtn.innerText = "Details Updated Successfully!"
          // console.log(result);
        } else {
          setValidationError(...result.errors);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="bg-gray-100 flex-col flex md:w-full">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  mt-8 ml-8 h-8 mb-4">
          Hello! {props.userName || "user"}
        </h2>
        <div className="flex  m-8 justify-center">
          <div className="text-center text-red-500 font-bold">
            <div>{validationError && validationError.msg}</div>
          </div>
          <div className="mt-8 space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    email: e.target.value,
                  })
                }
              />
              <label htmlFor="firstName" className="sr-only">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="firstName"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
                onChange={(e) =>
                  setUpdateForm({
                    ...updateForm,
                    firstName: e.target.value,
                  })
                }
              />
            </div>

            <div>
              <button
                onClick={userUpdateHandler}
                id="updateBtn"
                type="button"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">

                </span>
                Update Details!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string,
};

export default Profile;
