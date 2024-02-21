function Communitybar() {
    const communities = [
        {
            id: 1,
            cname: "Javascript",
            members: 25,
            avater: "images/icon1.png",
        },
        {
            id: 2,
            cname: "CSS",
            members: 17,
            avater: "images/icon2.png",
        },
        {
            id: 3,
            cname: "HTML",
            members: 31,
            avater: "images/icon3.png",
        },
        {
            id: 4,
            cname: "Javascript",
            members: 25,
            avater: "images/icon1.png",
        },
        {
            id: 5,
            cname: "CSS",
            members: 17,
            avater: "images/icon2.png",
        },
        {
            id: 6,
            cname: "HTML",
            members: 31,
            avater: "images/icon3.png",
        },
    ];

    return (
        <div className="w-[75%] h-[400px] rounded-lg shadow-md p-5 col-span-1 border border-slate-200 mx-auto mb-32 bg-white dark:bg-[#191919] dark:*:text-white dark:border-gray-600 grid">
            <div className="">
                <input
                    type="search"
                    placeholder="Search groups..."
                    className="w-full outline outline-1 broder-none rounded-lg p-2 focus-visible:outline-blue-400 focus-visible:shadow-sm focus-visible:shadow-blue-400 dark:bg-transparent"
                />
            </div>
            <div className="w-full h-full mt-2 rounded-lg overflow-auto">
                <ul className="flex flex-col py-4 gap-2">
                    {communities.map((e) => (
                        <li
                            key={e.id}
                            className="flex gap-2 px-2 py-3 items-center cursor-pointer rounded-lg bg-gray-200 hover:bg-slate-300 dark:bg-gray-700 dark:hover:bg-gray-800 transition-all"
                        >
                            <img
                                src={e.avater}
                                alt="icon"
                                className="w-8 h-8 rounded-full"
                            />
                            <div>
                                <p className="text-sm">{e.cname}</p>
                                <p className="text-xs text-slate-400">
                                    members{" "}
                                    <span className="text-[10px]">
                                        {e.members}
                                    </span>
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Communitybar;
