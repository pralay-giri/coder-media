
interface PostProps {
    postUrl: string
}

function Post({postUrl}:PostProps) {
  return (
    <div className='w-[90%] bg-white border border-slate-200 rounded'>
        <div className="flex ml-3 my-4 space-x-4">
            <img src="/images/avater.jpg" alt="avater" className="w-12 h-12 rounded-full outline outline-blue-500"/>
            <div>
                <p className="font-semibold">W.R.Middya</p>
                <p className="text-xs text-slate-500">13m ago</p>
            </div>
        </div>
        <div>
            <img src={postUrl} alt="post" className="w-[95%] mx-auto" />
            <p className="py-5 px-1 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita neque mollitia atque. Velit consequatur officia distinctio rem atque. Ut adipisci eos sed amet doloremque sint harum cupiditate aperiam officia molestiae!</p>
        </div>
        <div>
            <ul className="text-xl flex w-full justify-evenly border-t border-slate-300">
                <li className="w-full cursor-pointer hover:bg-slate-200 text-center p-1">👍</li>
                <li className="w-full cursor-pointer hover:bg-slate-200 text-center p-1">💬</li>
                <li className="w-full cursor-pointer hover:bg-slate-200 text-center p-1">🌐</li>
            </ul>
        </div>
    </div>
  )
}

export default Post