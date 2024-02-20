export default function Sidebar() {
    return (
        <div className="w-[75%] rounded-lg shadow-md px-3 py-5 col-span-1 border border-slate-200 mx-auto mb-44 bg-white dark:bg-[#191919] dark:*:text-white dark:border-gray-600 ">
            <div className="flex items-center space-x-2">
                <div className="ml-2">
                    <img
                        src="./public/images/avater.jpg"
                        alt="avater"
                        className="w-14 h-14 rounded-full outline outline-2 outline-blue-500 m-1"
                    />
                </div>
                <div>
                    <h3 className="font-semibold">W.R.Middya</h3>
                    <p className="text-xs">wrmiddya24@gmail.com</p>
                </div>
            </div>
            <div>
                <div></div>
                <div className="space-y-3 mx-2 my-5">
                    <div className="flex justify-center">
                        <input
                            type="text"
                            className="w-full focus-visible:outline-1 focus-visible:outline-blue-400 focus-visible:shadow-sm focus-visible:shadow-blue-400 rounded-md  dark:bg-transparent px-2 py-1 outline outline-black dark:outline-white outline-1 transition-all"
                            placeholder="Title"
                        />
                    </div>
                    <div className="flex justify-center">
                        <textarea
                            name="post"
                            id=""
                            cols={24}
                            rows={4}
                            className="w-full resize-none focus-visible:outline-1 focus-visible:outline-blue-400 focus-visible:shadow-sm focus-visible:shadow-blue-400 rounded-md  dark:bg-transparent px-2 py-1 outline outline-balc dark:outline-white outline-1 transition-all"
                            placeholder="Write your thoughts..."
                        ></textarea>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-purple-600 hover:bg-purple-700 font-semibold py-1 px-6 text-white rounded-md w-full">
                            Post
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
