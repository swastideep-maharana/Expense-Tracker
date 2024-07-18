import Image from "next/image";
import Header from "./_components/Header";
import Hero from "./_components/Hero";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_DATABASE_URL);
  return (
    <div>
      <Header />
      <Hero />
    </div>
  );
}
