import { Link } from "react-router-dom"
import { useEffect, useContext } from "react";
import { UserContext } from "../UserContext";

export default function Header() {
    const {setUserInfo,userInfo} = useContext(UserContext);
    useEffect(() => {
      fetch('http://localhost:4000/profile', {
        credentials: 'include',
      }).then(response => {
        if (!response.ok) {
          return;
        }
        response.json().then(userInfo => {
          setUserInfo(userInfo);
        });
      });
    }, [setUserInfo]);

    function logout() {
      fetch('http://localhost:4000/logout', {
        credentials: 'include',
        method: 'POST',
      });
      setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header className="flex justify-between mb-20 mt-10 items-center text-white font-mono">
          <Link to="/" className="no-underline font-bold text-2xl">BY'</Link>
          <nav className="flex gap-[30px]">
            {username ? (
              <>
                <Link to="/create" className="no-underline hover:border">Create new post</Link>
                <a onClick={ logout } className="no-underline">Logout</a>
              </>
            ) : (
            <>
              <Link to="/login" className="no-underline hover:underline cursor-pointer">Login</Link>
              <Link to="/register" className="no-underline hover:underline cursor-pointer">Register</Link>
            </>
            )}          
          </nav>
        </header>
    )
}