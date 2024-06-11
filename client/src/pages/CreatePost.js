import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
import {useState} from "react";
import {Navigate} from "react-router-dom";

export default function CreatePost() {
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    async function createNewPost(ev) {
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
        const response = await fetch('http://localhost:4000/post', {
        method: 'POST',
        body: data,
        credentials: 'include',
        });
        if (response.ok) {
        setRedirect(true);
        }
    }

    if (redirect) {
        return <Navigate to="/"/>
    }
    
    return (
        <form onSubmit={ createNewPost } className="w-full max-w-[400px] mt-48 mx-[auto] my-[0] font-mono flex flex-col gap-4">
            <input className="max-w-50 rounded text-gray-700 bg-[#8f8c58] border border-white placeholder-gray-700 shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" 
            type="title" 
            placeholder={"Title"}
            value={ title }
            onChange={ (e) => setTitle(e.target.value)}
            />
            <input className="self-center max-w-50 rounded text-gray-700 bg-[#8f8c58] border border-white placeholder-gray-700 shadow appearance-none w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline" 
            type="title" 
            placeholder={"Summary"} 
            value={ summary }
            onChange={ (e) => setSummary(e.target.value)}
            />
            <input className="bg-black text-white" type="file" onChange={(e)=>setFiles(e.target.files)} name="file"/>
            <ReactQuill 
            value={ content } 
            onChange={ (newValue) => setContent(newValue) }
            className="text-white mb-4"/>
            <button className="text-white hover:underline mt-2">Create post</button>
        </form>
    )
}