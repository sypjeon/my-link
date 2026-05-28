import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-2rem)] p-8 font-sans transition-colors duration-500">
      <main className="flex flex-col items-center gap-8 max-w-2xl text-center">
        {/* Profile Avatar Placeholder */}
        <div className="w-32 h-32 rounded-full bg-linear-to-br from-blue-500 to-purple-600 shadow-lg mb-4 flex items-center justify-center text-white text-4xl font-bold border-4 border-white dark:border-zinc-800">
          SY
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            전수엽
          </h1>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
            안녕하세요! <span className="font-semibold text-zinc-900 dark:text-zinc-100">바이브 코딩</span>을 배우고 있는 대학생입니다.
          </p>
        </div>

        <div className="flex gap-4 mt-8">
          <a
            href="#"
            className="px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-medium transition-transform hover:scale-105 active:scale-95 shadow-md"
          >
            Contact Me
          </a>
          <a
            href="#"
            className="px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 font-medium transition-all hover:bg-zinc-50 dark:hover:bg-zinc-900 shadow-sm"
          >
            Portfolio
          </a>
        </div>
      </main>

      <footer className="mt-20 text-zinc-400 dark:text-zinc-600 text-sm">
        © {new Date().getFullYear()} Jun Su-yeob. All rights reserved.
      </footer>
    </div>
  );
}
