import Image from "next/image";
export default function Home() {
    return (
        // app/page.tsx (Next.js App Router entry)
        <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-6">
            <h1 className="text-5xl font-bold text-gray-900 mb-2">Readloom</h1>
            <p className="text-lg text-gray-600 mb-6">
                Track your reads. Discover insights. Read better.
            </p>
            <button className="bg-gray-800 text-white px-6 py-3 rounded shadow hover:bg-gray-700">
                Sign In to Start
            </button>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded mb-2" />
                    <p className="text-sm text-gray-700">Log your books</p>
                </div>
                <div className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded mb-2" />
                    <p className="text-sm text-gray-700">Take notes</p>
                </div>
                <div className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded mb-2" />
                    <p className="text-sm text-gray-700">View reading stats</p>
                </div>
                <div className="flex flex-col items-center text-center transition-transform duration-200 hover:scale-105 hover:bg-gray-100 p-4 rounded-lg">
                    <div className="w-12 h-12 bg-gray-200 rounded mb-2" />
                    <p className="text-sm text-gray-700">Track progress</p>
                </div>
            </div>

            <div className="mt-12 p-2 border-2 border-dashed border-gray-300 rounded-lg inline-block bg-gray-100 group relative w-[700px] h-[700px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-700 group-hover:opacity-0 group-hover:rotate-[360deg]">
                    <Image
                        src="/assets/image.png"
                        alt="Book"
                        width={700}
                        height={700}
                        className="object-contain"
                    />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                    <p className="text-xl text-gray-700 text-center px-4">
                        “The shore gives way to the sea. And the sea, my
                        friends, Does not dream of you.”
                    </p>
                </div>
            </div>

            <footer className="mt-12 text-sm text-gray-500 flex gap-4">
                <a href="#" className="hover:underline">
                    About
                </a>
                <a href="#" className="hover:underline">
                    Privacy
                </a>
                <a href="#" className="hover:underline">
                    GitHub
                </a>
                <a href="#" className="hover:underline">
                    Contact
                </a>
            </footer>
        </main>
    );
}
