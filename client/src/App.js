function App() {
  return (
    <main className="p-[10px] max-w-[960px] mx-[auto] my-[0] text-slate-900">
      <header className="flex justify-between mb-20 mt-10 items-center">
        <a href="" className="no-underline font-bold text-2xl">Blogger</a>
        <nav className="flex gap-[15px]">
          <a href="" className="no-underline">Login</a>
          <a href="" className="no-underline">Register</a>
        </nav>
      </header>

      <div className="grid grid-cols-[.9fr_1.1fr] gap-[20px] mb-8">
        <div className="">
          <img src="https://img.lemde.fr/2024/06/09/0/0/5899/3933/968/645/75/0/73184f7_1717975205794-jmug240609007.jpg" alt="Nature" className="" />
        </div>
        <div className="flex flex-col">
          <div className="font-bold text-2xl m-0">Macron dissout l'assemblée et mes fesses en même temps</div>
          <div className="text-sm text-gray-500 font-bold mt-2">
            <a href="" className="no-underline text-black hover:text-blue-800 transition-all delay-100">Bastien Youssfi</a> 
            <time> | 2024-06-10 | 5 min read </time>
          </div>
          <div className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
