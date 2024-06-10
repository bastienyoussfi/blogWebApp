import { Link } from "react-router-dom"

export default function Header() {
    return (
        <header className="flex justify-between mb-20 mt-10 items-center">
        <Link to="/" className="no-underline font-bold text-2xl">Blogger</Link>
        <nav className="flex gap-[15px]">
          <Link to="/login" className="no-underline">Login</Link>
          <Link to="/register" className="no-underline">Register</Link>
        </nav>
      </header>
    )
}