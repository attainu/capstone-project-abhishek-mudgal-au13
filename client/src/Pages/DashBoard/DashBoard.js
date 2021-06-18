import SideBar from "../../components/NavigationBars/SideBar";
import TabsRender from '../../components/MockUp/TabsRender'
import Iphone from "../../components/MockUp/Iphone";


function DashBoard() {
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
              <img src="/avatar.png" alt="Choose profile picture" />
            </div>

            <TabsRender />

          </div>
          <Iphone />
        </div>
      </div>
    </div>
  );
}


export default DashBoard;
