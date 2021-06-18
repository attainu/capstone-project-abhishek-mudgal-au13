import React from "react";


const Tabs = ({ color }) => {
  const [openTab, setOpenTab] = React.useState(1);



  // const btnBg = [
  //   "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500",
  //   "bg-gradient-to-r from-green-300 via-blue-500 to-purple-600",
  //   "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
  //   "bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800",
  //   "bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900",
  //   "bg-gradient-to-b from-gray-900 to-gray-600",
  //   "bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800"
  // ]

  // buttonBg.map((btnBg) =>{

  // })

  // function bgColorApply(color){
  //   reactDom.findDOMNode(Iphone).getElementsByClassName('iphone-x').style.backgroundColor = "black"
  // }

  return (
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
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
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
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
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
                    ? "text-white bg-" + color + "-600"
                    : "text-" + color + "-600 bg-white")
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
                ></div>

                <div className={openTab === 2 ? "block" : "hidden"} id="link2">
                  <div className="flex justify-items-center space-x-4">
                    <button className="rounded-full h-12 w-12 items-center justify-center shadow-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
                    <button className="rounded-full h-12 w-12 items-center justify-center shadow-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
                    <button className="rounded-full h-12 w-12 items-center justify-center shadow-md bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
                    <button className="rounded-full h-12 w-12 items-center justify-center shadow-md bg-gradient-to-r from-purple-200 via-purple-400 to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
                    <button className="rounded-full h-12 w-12 items-center justify-center shadow-md bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
                    <button className="rounded-full h-12 w-12 items-center justify-center shadow-md bg-gradient-to-b from-gray-900 to-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
  

                    <button className="rounded-full h-12 w-12 items-center justify-center shadow-md bg-gradient-to-r from-purple-800 via-violet-900 to-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"></button>
                  </div>
                </div>
                <div className={openTab === 3 ? "block" : "hidden"} id="link3">
                  <p>
                    Efficiently unleash cross-media information without
                    cross-media value. Quickly maximize timely deliverables for
                    real-time schemas. <br /> <br /> Dramatically maintain
                    clicks-and-mortar solutions without functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default function TabsRender() {
  return (
    <div>
      <Tabs color="indigo" />
    </div>
  );
}
