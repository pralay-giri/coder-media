
export default function Sidebar() {
  return (
    <div className="w-[75%] rounded-lg shadow-md p-3 col-span-1 border border-slate-200 mx-auto mb-44 bg-white">
      <div className="flex items-center space-x-2">
        <div className="ml-2">
          <img src="./public/images/avater.jpg" alt="avater" className="w-14 h-14 rounded-full outline outline-2 outline-blue-500 m-1" />
        </div>
        <div>
          <h3 className="font-semibold">W.R.Middya</h3>
          <p className="text-xs">wrmiddya24@gmail.com</p>
        </div>
      </div>
      <div>
        <div></div>
        <div className="space-y-3 my-10">
          <div className="flex justify-center">
            <input type="text" className="border-2 border-slate-200 focus:outline-1 focus:outline-blue-500 rounded-md  px-2" placeholder="Title"/>
          </div>
          <div className="flex justify-center">
            <textarea name="post" id="" cols={24} rows={4} className="block resize-none p-2 border-2 border-slate-200 rounded-lg text-sm focus:outline-1 focus:outline-blue-500" placeholder="Write your thoughts..."></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 font-semibold py-1 px-6 text-white rounded-md">Post</button>
          </div>
        </div>
      </div>
    </div>
  );
}
