import React from "react";
import SideBar from "../../components/NavigationBars/SideBar";
import PropTypes from "prop-types";
import GetInButton from "../../components/Buttons/GetInButton";


function Profile(props) {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="bg-gray-100 flex-col flex md:w-full">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  mt-8 ml-8 h-8 mb-4">
          Hello! {props.userName || "user"}
        </h2>
        <div className="flex  m-8 justify-center">
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="New password"
            />
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Confirm Password"
            />
          </div>
          <GetInButton text="Update Password!"/>
          </form>
        </div>
      </div>
    </div>
  );
}

Profile.propTypes = {
  userName: PropTypes.string,
};

export default Profile;
