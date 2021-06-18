import SideBar from "../../components/NavigationBars/SideBar";

function Chart() {
  return (
    <div className="h-screen flex">
      <SideBar />
      <div className="bg-gray-100 flex-col flex md:w-full">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl  mt-8 ml-8 h-8 mb-4">
          View Data!
        </h2>
        <div className="flex h-full">
        </div>
      </div>
    </div>
  );
}

export default Chart;
