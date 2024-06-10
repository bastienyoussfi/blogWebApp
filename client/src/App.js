import Header from './Components/Header';
import Post from './Components/Post';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Routes>
      <Route index element= {
        <main className="p-[10px] max-w-[960px] mx-[auto] my-[0] text-slate-900">
        <Header />
        <Post />
        <Post />
        <Post />
        </main>
      } />
      <Route path="/login" element= {
        <main className="p-[10px] max-w-[960px] mx-[auto] my-[0] text-slate-900">
          <Header />
          <div>
            <h1>Login</h1>
          </div>
        </main>
      } />
      <Route path="/register" element= {
        <main className="p-[10px] max-w-[960px] mx-[auto] my-[0] text-slate-900">
        <Header />
        <div>
          <h1>Register</h1>
        </div>
      </main>
      } />
    </Routes>
  );
}

export default App;
