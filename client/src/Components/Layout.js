import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
    return (
        <main className="p-[10px] max-w-[960px] mx-[auto] my-[0] text-slate-900">
            <Header />
            <Outlet />
        </main>
    )
}