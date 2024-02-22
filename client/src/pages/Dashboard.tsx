import { FC, useLayoutEffect } from "react";
import Sidebar from "../components/Sidebar";
import Communitybar from "../components/Communitybar";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toggleModalState } from "../store/slices/userSlice";

const Dashboard: FC = () => {
    const navigator = useNavigate();
    const dispatch = useDispatch();
    const isUserOuthenticated = useSelector(
        (state: any) => state.userSlice.isUserOuthenticated
    );

    useLayoutEffect(() => {
        if (!isUserOuthenticated) {
            dispatch(toggleModalState(true));
            navigator("/");
        }
    }, [isUserOuthenticated]);

    return (
        <div className="w-full h-full grid grid-cols-4 place-items-center bg-slate-100 dark:bg-[#2a2a2a]">
            <Sidebar />
            <div className="w-full h-full col-span-2 grid place-items-center py-10 overflow-scroll space-y-10">
                <Post postUrl="images/pst-1.png" />
                <Post postUrl="images/pst-2.png" />
            </div>
            <Communitybar />
        </div>
    );
};

export default Dashboard;
