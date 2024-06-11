import { format } from 'date-fns';
import { Link } from 'react-router-dom';

export default function Post({ _id, title, summary, content, cover, createdAt }) {
    return (
        <div className="grid grid-cols-[.9fr_1.1fr] gap-[50px] mb-8 bg-[#1d1d1d] p-5 rounded-lg font-mono">
        <div className="">
          <Link to={`/post/${_id}`}>
          <img className="rounded-lg ml-2 max-h-[200px] object-cover w-full transition-all duration-300 cursor-pointer grayscale hover:grayscale-0"
              src={ "http://localhost:4000/" + cover } alt="Nature"/>
            </Link>
        </div>
        <div className="flex flex-col text-white">
          <Link to={`/post/${_id}`}>
          <div className="font-bold text-2xl m-0">{ title }</div>
          </Link>
          <div className="text-sm text-gray-500 font-bold mt-2">
            <a href="http://linkedin.com/in/bastienyoussfi" className="no-underline hover:text-white transition-all delay-100">Bastien Youssfi</a> 
            <time> | {format(new Date(createdAt), 'MMM d, yyyy')} | 5 min read</time>
          </div>
          <div className="mt-4">{ summary }</div>
        </div>
      </div>
    )
}