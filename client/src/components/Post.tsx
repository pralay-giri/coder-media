import { AiFillLike } from "react-icons/ai";
import { GoCommentDiscussion } from "react-icons/go";
import { IoEarth } from "react-icons/io5";

interface PostProps {
    postUrl: string;
}

function Post({ postUrl }: PostProps) {
    return (
        <div className="w-[90%] bg-white border border-slate-200 rounded dark:bg-[#191919] dark:border-gray-600 dark:*:text-white">
            <div className="flex ml-3 my-4 space-x-4">
                <img
                    src="/images/avater.jpg"
                    alt="avater"
                    className="w-12 h-12 rounded-full outline outline-blue-500"
                />
                <div>
                    <p className="font-semibold">W.R.Middya</p>
                    <p className="text-xs text-slate-500">13m ago</p>
                </div>
            </div>
            <div>
                <img
                    src={postUrl}
                    alt="post"
                    className="w-[95%] mx-auto rounded-lg"
                />
                <p className="p-5 text-sm">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Expedita neque mollitia atque. Velit consequatur officia
                    distinctio rem atque. Ut adipisci eos sed amet doloremque
                    sint harum cupiditate aperiam officia molestiae!
                </p>
            </div>
            <div>
                <ul className="text-xl flex w-full *:w-full *:p-1 *:cursor-pointer *:flex *:items-center *:justify-center *:text-center justify-evenly border-t border-slate-300 *:transition-all *:rounded-sm *:py-4 *:text-xl">
                    <li className=" hover:bg-slate-200 dark:hover:bg-gray-700">
                        <AiFillLike />
                    </li>
                    <li className="hover:bg-slate-200 dark:hover:bg-gray-700 text-green-500">
                        <GoCommentDiscussion />
                    </li>
                    <li className="hover:bg-slate-200 dark:hover:bg-gray-700 text-blue-400">
                        <IoEarth />
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Post;
