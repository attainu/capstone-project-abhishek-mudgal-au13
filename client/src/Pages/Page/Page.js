import "./Page.css";
import React, { useState, useEffect } from "react";
import iconImg from './1.png'

const Page = (props) => {
  const [data, setData] = useState();

  let pageUrl = `https://uno-link.herokuapp.com/api/user/${props.match.params.userName}`;

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
        } else {
          // props.history.push("/404");

        }
      })
      .catch((err) => console.log(err));
  };

  console.log(data)

  return (
    <div id={data && data.theme} className="testtest">
      <div className="links-profile-img">
        <img src={data ? data.profileImage : iconImg} alt="profile" />
      </div>

      <div className="text-center">
      <h1 className="leading-7 text-gray-900 sm:text-3xl font-bold">{data && data.name}</h1>
      </div>
      <div className="link_container ">
        {data && data.socials
          ? data.socials.map((link, i) => {
              return (
                <div className="links_array">
                  <a href={`${link.socialLink}`} target="_blank">
                    <div className="bg-indigo-400 text-center rounded  text-white py-2 mx-auto my-2">
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
