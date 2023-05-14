import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1>Rizzdolia</h1>
        <img src="julian.png" className="w-full max-h-32" alt="infinite" />
      </div>
    </main>
  );
}
