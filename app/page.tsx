import Image from "next/image";
import Header from "./components/Header";

export default function Home() {
  return (
    <div className="flex w-full items-center justify-center bg-[#2E5235] font-sans ">
      <main className="flex min-h-screen px-2 w-full max-w-7xl text-sky-500 flex-col items-center justify-between bg-[#F5F4EC]">
        <Header />
      </main>
    </div>
  );
}
