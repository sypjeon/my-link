export default function Home() {
  return (
    <div className="min-h-screen font-sans bg-transparent">
      {/* 1. Navbar / Top Banner */}
      <nav className="w-full border-b-4 border-black bg-white px-6 py-4 flex justify-between items-center shadow-[0_4px_0_0_#000000]">
        <div className="font-black text-2xl md:text-3xl uppercase tracking-tighter">SY.Portfolio</div>
        <a href="#contact" className="hidden sm:block border-4 border-black bg-yellow-200 px-6 py-2 font-bold shadow-[4px_4px_0_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
          Say Hello
        </a>
      </nav>

      {/* 2. Hero Section (Screen height split) */}
      <header className="w-full min-h-[calc(100vh-80px)] flex flex-col lg:flex-row border-b-4 border-black">
        {/* Left: Typography Focus */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 sm:p-12 lg:p-20 border-b-4 lg:border-b-0 lg:border-r-4 border-black bg-white">
          <div className="inline-block w-max bg-pink-300 border-4 border-black px-4 py-2 text-sm sm:text-base font-black uppercase tracking-widest shadow-[4px_4px_0px_#000000] rotate-2 mb-8">
            Student Developer
          </div>
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter text-black uppercase leading-none mb-6">
            전수엽<br />
            <span className="text-gray-300">IS</span><br />
            CODING
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold font-mono text-black leading-relaxed max-w-lg">
            안녕하세요! <br />
            <span className="bg-yellow-200 px-2 flex-inline items-center border-4 border-black shadow-[4px_4px_0_#000000] -rotate-1 mt-3 sm:mt-2 mb-2">바이브 코딩</span>
            을 배우고 있는 대학생입니다. 멈추지 않는 성장을 추구합니다.
          </p>
        </div>
        
        {/* Right: Graphic / Visual Space */}
        <div className="w-full lg:w-1/2 bg-sky-300 flex items-center justify-center p-12 relative overflow-hidden bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+CjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0ibm9uZSI+PC9yZWN0Pgo8Y2lyY2xlIGN4PSIyIiBjeT0iMiIgcj0iMSIgZmlsbD0iIzAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPjwvY2lyY2xlPgo8L3N2Zz4=')] min-h-[400px] lg:min-h-full">
            <div className="bg-white border-4 border-black w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center shadow-[16px_16px_0_#000000] animate-[spin_10s_linear_infinite]">
              <span className="text-6xl sm:text-8xl">👾</span>
            </div>
            
            {/* Floating ornamental boxes */}
            <div className="absolute top-10 left-10 lg:top-20 lg:left-20 bg-green-300 border-4 border-black px-6 py-3 font-black text-2xl shadow-[6px_6px_0_#000000] -rotate-12">
              CREATIVE
            </div>
            <div className="absolute bottom-20 right-10 lg:bottom-40 lg:right-20 bg-pink-400 border-4 border-black p-4 font-black text-4xl shadow-[8px_8px_0_#000000] rotate-12">
              🔥
            </div>
        </div>
      </header>

      {/* 3. Skills Grid Section */}
      <section className="w-full p-8 sm:p-12 lg:p-24 bg-white border-b-4 border-black">
        <h2 className="text-5xl sm:text-6xl md:text-7xl font-black uppercase mb-12 flex flex-wrap items-center gap-4">
          <span className="bg-black text-white p-3 shadow-[6px_6px_0_#000000]">MY</span> 
          <span>SKILLS</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Skill Card 1 */}
          <div className="bg-yellow-200 border-4 border-black p-8 sm:p-10 shadow-[8px_8px_0_#000000] hover:-translate-y-2 hover:shadow-[12px_12px_0_#000000] transition-all">
            <div className="text-5xl mb-6">💻</div>
            <h3 className="text-3xl font-black mb-4">Frontend</h3>
            <p className="font-bold text-lg leading-relaxed text-black/80">Next.js, React, 그리고 Tailwind CSS를 활용한 빠르고 트렌디한 모던 웹 개발을 사랑합니다.</p>
          </div>
          {/* Skill Card 2 */}
          <div className="bg-pink-300 border-4 border-black p-8 sm:p-10 shadow-[8px_8px_0_#000000] hover:-translate-y-2 hover:shadow-[12px_12px_0_#000000] transition-all">
            <div className="text-5xl mb-6">🧠</div>
            <h3 className="text-3xl font-black mb-4">Vibe Coding</h3>
            <p className="font-bold text-lg leading-relaxed text-black/80">단순한 타이핑이 아닌 기획과 감각적 타이밍, 그리고 다양한 AI 툴을 융합하여 혁신적인 결과물을 뽑아냅니다.</p>
          </div>
          {/* Skill Card 3 */}
          <div className="bg-emerald-300 border-4 border-black p-8 sm:p-10 shadow-[8px_8px_0_#000000] hover:-translate-y-2 hover:shadow-[12px_12px_0_#000000] transition-all md:col-span-2 lg:col-span-1">
            <div className="text-5xl mb-6">🎨</div>
            <h3 className="text-3xl font-black mb-4">Design</h3>
            <p className="font-bold text-lg leading-relaxed text-black/80">Neobrutalism처럼 사람들의 뇌리에 강렬하게 남는 대담하고 파격적인 UI/UX 구성에 관심이 많습니다.</p>
          </div>
        </div>
      </section>

      {/* 4. Giant Call to Action (Contact/Portfolio) */}
      <section id="contact" className="w-full bg-black text-white flex flex-col items-center justify-center py-24 sm:py-32 px-6 lg:px-20 text-center relative overflow-hidden">
        <h2 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black uppercase mb-12 z-10 leading-none">
          Ready to <br className="hidden sm:block"/> <span className="text-yellow-300">Collaborate?</span>
        </h2>
        <div className="flex flex-col sm:flex-row gap-6 z-10 w-full max-w-4xl px-4">
          <a
            href="#"
            className="flex-1 bg-white text-black border-4 border-white py-5 sm:py-8 text-2xl sm:text-3xl font-black uppercase shadow-[8px_8px_0_#FDE047] hover:translate-x-2 hover:translate-y-2 hover:shadow-[0_0_0_#FDE047] transition-all text-center"
          >
            Email Me
          </a>
          <a
            href="#"
            className="flex-1 bg-transparent text-white border-4 border-white py-5 sm:py-8 text-2xl sm:text-3xl font-black uppercase hover:bg-white hover:text-black hover:shadow-[8px_8px_0_#fff] transition-all duration-300 text-center"
          >
            View GitHub
          </a>
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="w-full bg-white px-8 py-10 sm:py-16 flex flex-col sm:flex-row justify-between items-center border-t-8 border-black gap-6 font-mono font-bold text-sm sm:text-base uppercase text-center sm:text-left">
        <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
          <a href="#" className="hover:underline hover:text-pink-500 transition-colors">Twitter(X)</a>
          <a href="#" className="hover:underline hover:text-blue-500 transition-colors">LinkedIn</a>
          <a href="https://github.com/sypjeon" target="_blank" rel="noreferrer" className="hover:underline hover:text-green-500 transition-colors">GitHub</a>
        </div>
        <div>
          © {new Date().getFullYear()} Jun Su-yeob.<br className="sm:hidden" /> All rights reserved.
        </div>
      </footer>
    </div>
  );
}
