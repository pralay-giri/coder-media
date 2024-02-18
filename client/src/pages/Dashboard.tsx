import { FC } from "react";
import Sidebar from "../components/Sidebar";
import Communitybar from "../components/Communitybar";
import Post from "../components/Post";

const Dashboard: FC = () => {
  return (
    <div className="w-full h-full grid grid-cols-4 place-items-center bg-slate-100">
      <Sidebar/>
      <div className="w-full h-full col-span-2 grid place-items-center p-10 overflow-scroll space-y-10">
        <Post postUrl="images/pst-1.png"/>
        <Post postUrl="images/pst-2.png"/>
      </div>
      <Communitybar />
    </div>
  );
};

export default Dashboard;
