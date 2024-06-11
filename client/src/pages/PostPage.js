import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { format } from 'date-fns';

export default function PostPage() {
    const [postInfo,setPostInfo] = useState(null);
    const {id} = useParams();
    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
        .then(response => {
            response.json().then(postInfo => {
            setPostInfo(postInfo);
            });
        });
    }, [id]);

    if (!postInfo) return '';

    return (
        <div className="text-white font-mono">
            <div className="flex justify-between mb-10">
                <div>
                    <div className="text-5xl font-bold mb-2">{postInfo.title}</div>
                    <div className="text-2xl mb-2">{postInfo.summary}</div>
                    <a href="/" className=" text-gray-500 hover:text-white transition-all delay-100 cursor-pointer">from Bastien Youssfi</a>
                </div>
                <div className="text-gray-500">
                    <time>{format(new Date(postInfo.createdAt), 'MMM d, yyyy')}</time>
                </div>
            </div>
            <div className="">
                <img className="rounded-lg max-h-[400px] object-cover w-full transition-all duration-300 cursor-pointer grayscale hover:grayscale-0" src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
            </div>
            <div className="mt-8 text-white" dangerouslySetInnerHTML={{__html:postInfo.content}} />
        </div>
    )
}