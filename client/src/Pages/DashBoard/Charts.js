import SideBar from "../../components/NavigationBars/SideBar";
import Chart from "../../components/Chart.js/Chart";
import { useState, useEffect } from 'react';

function Charts() {

  const [data, setData] = useState();

  let pageUrl = `https://uno-link.herokuapp.com/api/get-data`;

  useEffect(() => {
    pageFetch();
  }, []);

  const pageFetch = () => {
    fetch(pageUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: localStorage.getItem("token"),
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


  return (
    <div className="h-screen flex main-chart ">
      <SideBar />
      <div className="bg-gray-100 flex-col flex md:w-full ">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  mt-8 ml-8 h-8 mb-4">
          View Data!
        </h2>
        <h3 className="text-l text-gray-600 sm:text-3xl  ml-8 h-8 ">
          Your page is getting clicks from following devices and browsers:
        </h3>
        <div className="flex h-full m-8 ">
          <div className="w-1/3  mx-8 my-4 shadow-xl md:items-center rounded flex flex-col justify-around glassy ">
            <h3 className=" leading-7 text-gray-900 sm:text-3xl">Browsers:</h3>
            <Chart labels={data && Object.keys(data.browserType)} data={data && Object.values(data.browserType)}/>
          </div>

          <div className="w-1/3  mx-8 my-4 shadow-xl md:items-center rounded flex flex-col justify-around glassy">
            <h3 className=" leading-7 text-gray-900 sm:text-3xl">OS Type:</h3>
            <Chart labels={data && Object.keys(data.OSType)} data={data && Object.values(data.OSType)}/>
          </div>

          <div className="w-1/3  mx-8 my-4 shadow-xl md:items-center rounded flex flex-col justify-around glassy">
            <h3 className=" leading-7 text-gray-900 sm:text-3xl">
              Device Type:
            </h3>
            <Chart labels={data && Object.keys(data.deviceType)} data={data && Object.values(data.deviceType)}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts;
