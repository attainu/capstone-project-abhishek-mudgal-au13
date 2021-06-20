import SideBar from "../../components/NavigationBars/SideBar";
import Chart from '../../components/Chart.js/Chart'

function Charts() {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="bg-gray-100 flex-col flex md:w-full">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  mt-8 ml-8 h-8 mb-4">
          View Data!
        </h2>
        <div className="flex h-full m-8">

          <div className="w-1/3  mx-8 my-4 shadow-xl md:items-center rounded flex flex-col justify-around">
            <h3 className=" leading-7 text-gray-900 sm:text-3xl">Browsers:</h3>
            <Chart />
          </div>

          <div className="w-1/3  mx-8 my-4 shadow-xl md:items-center rounded flex flex-col justify-around">
            <h3 className=" leading-7 text-gray-900 sm:text-3xl">OS Type:</h3>
            <Chart />
          </div>

          <div className="w-1/3  mx-8 my-4 shadow-xl md:items-center rounded flex flex-col justify-around">
            <h3 className=" leading-7 text-gray-900 sm:text-3xl">Device Type:</h3>
            <Chart />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Charts;
