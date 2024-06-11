import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <main className="p-[10px] max-w-[1060px] mx-[auto] my-[0] text-slate-900">
            <Header />
            <Outlet />
            <hr className="h-px mt-12 my-8 bg-white"></hr>
            <Footer />
        </main>
    )
}