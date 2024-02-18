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
    
  ];

  return (
    <div className="w-[75%] h-[400px] rounded-lg shadow-md p-5 col-span-1 border border-slate-200 mx-auto mb-32 bg-white">
      <div>
        <input
          type="search"
          placeholder="🔍 Search..."
          className="p-[1px] border-2 border-slate-200 rounded-md focus:outline focus:outline-blue-400 w-full"
        />
      </div>
      <div className="w-full h-full">
        <ul className="py-4 divide-y divide-slate-200">
          {communities.map((e) => (
            <li key={e.id} className="flex space-x-2 py-3 hover:bg-slate-100 p-1 cursor-pointer rounded-sm">
              <img src={e.avater} alt="icon" className="w-8 h-8 rounded-full"/>
              <div>
                <p className="text-sm">{e.cname}</p>
                <p className="text-xs text-slate-400">members <span className="text-[10px]">{e.members}</span></p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Communitybar;
