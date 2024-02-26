import React, { ReactNode, useEffect } from "react";
import { Link } from "react-router-dom";

type POST = {
    id: number | string;
    url: string;
};

type USER = {
    name: string;
    photoLink: string;
    isOnline: boolean;
    about: string;
    followers: number;
    posts: POST[];
    following: number;
};

// mock data
const data: USER = {
    name: "W.R.Middya",
    photoLink: "https://avatars.githubusercontent.com/u/104504639?v=4",
    isOnline: false,
    about: "hello i am a fullstack developer",
    followers: 1434,
    following: 334,
    posts: [
        {
            id: 1,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 2,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 3,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 4,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 5,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 6,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 7,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        {
            id: 8,
            url: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
    ],
};

interface ModalProps {
    closeModal: () => void;
    logout: () => void;
}

const ProfileCard: React.FC<ModalProps> = ({
    closeModal,
    logout,
}: ModalProps) => {
    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        return () => {
            document.documentElement.style.overflow = "auto";
        };
    }, []);
    return (
        <>
            <div className="text-white absolute  inset-0 flex flex-col items-center  top-0 z-10 ">
                <div className="m-10 p-10 w-7/12 h-[90vh] bg-neutral-700 bg-opacity-45 rounded-lg backdrop-blur-md flex flex-col items-center">
                    <div
                        className={` border-4 rounded-full${
                            data?.isOnline
                                ? " border-green-600 "
                                : " border-gray-700 "
                        }`}
                    >
                        <img
                            src={data?.photoLink}
                            alt={data?.name}
                            width={100}
                            className="object-cover object-center rounded-full"
                        />
                    </div>
                    <p className="name">{data?.name}</p>
                    <p className="about">{data?.about}</p>
                    <div className="flex gap-4 ">
                        {data?.posts.length > 1 ? (
                            <p>
                                <strong>{data?.posts.length}</strong> posts{" "}
                            </p>
                        ) : (
                            <p>
                                <strong>{data?.posts.length}</strong> post{" "}
                            </p>
                        )}
                        <p>
                            <strong>{data?.followers}</strong> followers
                        </p>
                        <p>
                            <strong>{data?.following}</strong> following
                        </p>
                    </div>
                    <span className="my-4 w-full h-[2px] bg-neutral-700"></span>
                    <div className=" grid grid-cols-3 overflow-scroll">
                        {data?.posts?.map((post): ReactNode => {
                            return (
                                <Link to="/" key={post.id} className="">
                                    <img
                                        src={post.url}
                                        alt=""
                                        className="hover:scale-95 hover:brightness-110 transform transition duration-300"
                                    />
                                </Link>
                            );
                        })}
                    </div>
                    <div className="buttons w-full *:rounded-lg *:my-1 *:p-2 *:text-md *:font-bold *:w-full *:bg-neutral-700">
                        <button
                            className="text-red-500 hover:bg-opacity-85"
                            onClick={logout}
                        >
                            logout
                        </button>
                        <button
                            className="text-white hover:bg-opacity-85"
                            onClick={closeModal}
                        >
                            close
                        </button>
                    </div>
                </div>
            </div>
            <div className="absolute inset-0 backdrop-blur-md"></div>
        </>
    );
};

export default ProfileCard;
