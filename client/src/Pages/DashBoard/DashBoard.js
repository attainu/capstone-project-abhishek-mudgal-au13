import SideBar from "../../components/NavigationBars/SideBar";
import Iphone from "../../components/MockUp/Iphone";
import React, { useState, useEffect } from "react";

import "./Gradients.css";
import "./Dashboard.css";

function DashBoard(props) {
  const [openTab, setOpenTab] = React.useState(1);
  const [linksArray, setLinksArray] = useState([]);
  const [validationError, setValidationError] = useState();
  const [linkFormPut, setLinkFormPut] = useState({
    title: "",
    socialLink: "",

  });
  const [profileImage, setProfileImage] = useState(null);
  const [changeBg, setChangeBg] = useState({ data: "" });


  const [img, setImg] = useState()

  const changeBgClick = (colorBG) => {
    setChangeBg({ data: colorBG });
  };

  const postSocialLink = () => {
    console.log(postSocialLink);
    if (linkFormPut.title && linkFormPut.socialLink) {
      setLinksArray([...linksArray, linkFormPut]);
    }
  };

  const showInputModel = () => {
    let model = document.getElementById("input-model-id");
    if (model.style.display === "none") {
      model.style.display = "block";
    } else {
      model.style.display = "none";
    }
  };



  const previewFile = (profileImage) => {
    const data = new FormData();
    data.append("file", profileImage);
    data.append("upload_preset", "instagram-clone");
    data.append("cloud_name", "rakesh350");
    fetch("https://api.cloudinary.com/v1_1/rakesh350/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {  
        console.log(data.url);
        setImg(data.url) 
      })
      .catch((err) => {
        console.log(err.message);
      });
  };


  useEffect(() => {
    if(profileImage != null){
      previewFile(profileImage)
    }

  }, [profileImage])



  const createPageUrl = "http://localhost:5001/api/create-page";




  const createPage = () => {
    let data = {
      changeBg: changeBg,
      linksArray: linksArray,
      img: img
    }
    console.log(linksArray);
    fetch(createPageUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (!result) {
          localStorage.setItem("token", result.data.token);
          props.history.push("/charts");
          // console.log(result);
        } else {
          setValidationError(...result.errors);
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  };


  return (
    <div className="h-screen flex">
      <SideBar />

      <div className="flex-col flex md:w-full">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  mt-8 ml-8 h-8 mb-4">
          Create your own page!
        </h2>
        <div className="flex h-full">
          <div className="w-1/2  mx-8 my-4 shadow-xl md:items-center rounded flex flex-col justify-around">
            <h3 className=" leading-7 text-gray-900 sm:text-3xl">
              Add Links to you page
            </h3>

            <div className="image-picker">
              <label className="w-full h-full">
                <img src="/avatar.png" alt="profile" />
                <input
                  type="file"
                  className="hidden"
                  onChange={(e) => setProfileImage(e.target.files[0])}
                ></input>
              </label>
            </div>

            <div>
              <div className="flex flex-wrap">
                <div className="w-full">
                  <ul
                    className="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row"
                    role="tablist"
                  >
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a
                        className={
                          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                          (openTab === 1
                            ? "text-white bg-" + "indigo" + "-600"
                            : "text-" + "indigo" + "-600 bg-white")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(1);
                        }}
                        data-toggle="tab"
                        href="#link1"
                        role="tablist"
                      >
                        Profile
                      </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a
                        className={
                          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                          (openTab === 2
                            ? "text-white bg-" + "indigo" + "-600"
                            : "text-" + "indigo" + "-600 bg-white")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(2);
                        }}
                        data-toggle="tab"
                        href="#link2"
                        role="tablist"
                      >
                        Background
                      </a>
                    </li>
                    <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                      <a
                        className={
                          "text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal " +
                          (openTab === 3
                            ? "text-white bg-" + "indigo" + "-600"
                            : "text-" + "indigo" + "-600 bg-white")
                        }
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenTab(3);
                        }}
                        data-toggle="tab"
                        href="#link3"
                        role="tablist"
                      >
                        Options
                      </a>
                    </li>
                  </ul>
                  <div className="relative flex flex-col break-words bg-white w-full mb-6 shadow-lg rounded">
                    <div className="px-4 py-5 flex-auto ">
                      <div className="tab-content tab-space">
                        <div
                          className={openTab === 1 ? "block" : "hidden"}
                          id="link1"
                        >
                          <button
                            onClick={showInputModel}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              class="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                              />
                            </svg>
                            Add Link
                          </button>
                          <div
                            className="input-model  my-4"
                            id="input-model-id"
                          >
                            <label htmlFor="title" className="sr-only">
                              Title
                            </label>
                            <input
                              id="title"
                              name="title"
                              type="text"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="Title"
                              onChange={(e) =>
                                setLinkFormPut({
                                  ...linkFormPut,
                                  title: e.target.value,
                                })
                              }
                            />
                            <label htmlFor="link" className="sr-only">
                              Link
                            </label>
                            <input
                              id="link"
                              name="link"
                              type="url"
                              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                              placeholder="Social Link"
                              onChange={(e) =>
                                setLinkFormPut({
                                  ...linkFormPut,
                                  socialLink: e.target.value,
                                })
                              }
                            />
                            <div className="text-center my-2">
                              <button
                                onClick={postSocialLink}
                                className=" bg-indigo-600 px-4 py-1 rounded text-white"
                              >
                                Post
                              </button>
                            </div>
                          </div>
                        </div>

                        <div
                          className={openTab === 2 ? "block" : "hidden"}
                          id="link2"
                        >
                          <div className="flex justify-items-center space-x-4">
                            <button
                              onClick={() =>
                                changeBgClick("black-violet-theme")
                              }
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="black-violet-theme"
                            ></button>
                            <button
                              onClick={() =>
                                changeBgClick("green-yellow-theme")
                              }
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="green-yellow-theme"
                            ></button>
                            <button
                              onClick={() => changeBgClick("pink-yellow-theme")}
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="pink-yellow-theme"
                            ></button>
                            <button
                              onClick={() => changeBgClick("grey-white-theme")}
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="grey-white-theme"
                            ></button>
                            <button
                              onClick={() => changeBgClick("green-grey-theme")}
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="green-grey-theme"
                            ></button>
                            <button
                              onClick={() => changeBgClick("blue-pink-theme")}
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="blue-pink-theme"
                            ></button>

                            <button
                              onClick={() =>
                                changeBgClick("black-yellow-theme")
                              }
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="black-yellow-theme"
                            ></button>
                            <button
                              onClick={() => changeBgClick("pink-yellow-theme")}
                              className="rounded-full h-12 w-12 items-center justify-center shadow-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              id="pink-yellow-theme"
                            ></button>
                          </div>
                        </div>
                        <div
                          className={openTab === 3 ? "block" : "hidden"}
                          id="link3"
                        >
                          <button
                            onClick={createPage}
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                          >
                            Create Page!
                          </button>

                          <div className="text-center text-red-500 font-bold">
                            <div>{validationError && validationError.msg}</div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Iphone img={img} id={changeBg.data} data={linksArray} />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
