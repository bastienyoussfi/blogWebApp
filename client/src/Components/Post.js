export default function Post() {
    return (
        <div className="grid grid-cols-[.9fr_1.1fr] gap-[50px] mb-8 bg-[#1d1d1d] p-5 rounded-lg font-mono">
        <div className="">
          <img className="rounded-lg ml-2 transition-all duration-300 cursor-pointer blur-sm hover:blur-none"
              src="welcome.jpg" alt="Nature"/>
        </div>
        <div className="flex flex-col text-white">
          <div className="font-bold text-2xl m-0">Title of my amazing post</div>
          <div className="text-sm text-gray-500 font-bold mt-2">
            <a href="" className="no-underline hover:text-white transition-all delay-100">Bastien Youssfi</a> 
            <time> | 2024-06-10 | 5 min read </time>
          </div>
          <div className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    )
}