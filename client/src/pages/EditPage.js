import { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import Editor from '../Editor';

export default function EditPost() {
    const {id} = useParams();
    const [title,setTitle] = useState('');
    const [summary,setSummary] = useState('');
    const [content,setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect,setRedirect] = useState(false);
    const [deleteRedirect, setDeleteRedirect] = useState(false);
  
    useEffect(() => {
      fetch('http://localhost:4000/post/'+id)
        .then(response => {
          response.json().then(postInfo => {
            setTitle(postInfo.title);
            setContent(postInfo.content);
            setSummary(postInfo.summary);
          });
        });
    }, []);
  
    async function updatePost(ev) {
      ev.preventDefault();
      const data = new FormData();
      data.set('title', title);
      data.set('summary', summary);
      data.set('content', content);
      data.set('id', id);
      if (files?.[0]) {
        data.set('file', files?.[0]);
      }
      const response = await fetch('http://localhost:4000/post', {
        method: 'PUT',
        body: data,
        credentials: 'include',
      });
      if (response.ok) {
        setRedirect(true);
      }
    }

    async function handleDelete() {
        const response = await fetch('http://localhost:4000/post/'+id, {
            method: 'DELETE',
            credentials: 'include',
        });
        if (response.ok) {
            setDeleteRedirect(true);
        }
    }

    if (deleteRedirect) {
        return <Navigate to={'/'} />
    }
  
    if (redirect) {
      return <Navigate to={'/post/'+id} />
    }

    return (
        <form onSubmit={ updatePost } className="w-full max-w-[400px] mt-48 mx-[auto] my-[0] font-mono flex flex-col gap-4">
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
            <Editor value={content} onChange={setContent}/>
            <button className="text-white hover:underline mt-2">Edit post</button>
            <button onClick={handleDelete} className="text-white hover:underline mt-2">Delete post</button>
        </form>
    )
}