import "./Page.css";
import React, { useState, useEffect } from "react";

const Page = (props) => {
  const [data, setData] = useState();

  let pageUrl = `http://localhost:5001/api/${props.match.params.userName}`;

  useEffect(() => {
    pageFetch();
  }, []);
  const pageFetch = () => {
    fetch(pageUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      //   body: JSON.stringify(loginForm),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.errors.length === 0) {
          setData(result.data);
          console.log(result);
        } else {
          //   setValidationError(...result.errors);
          console.log(result);
        }
      })
      .catch((err) => console.log(err));
  };
  console.log(data);

  return (
    <div id={data.theme} className="mx-auto w-1/2">
      <div className="profile-img">
        <img
          src={data.profileImage ? data.profileImage : "1.png"}
          alt="profile"
        />
      </div>
      <div className="iphone-link-content my-10 ">
        {data && data.socials
          ? data.socials.map((link, i) => {
              return (
                <div>
                  <a href={`${link.socialLink}`} target="_blank">
                    <div className="bg-indigo-600 text-center w-1/2 text-white py-2 mx-auto my-2">
                      <h2>{link.title}</h2>
                    </div>
                  </a>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

Page.propTypes = {};

export default Page;
