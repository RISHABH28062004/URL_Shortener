import Image from "next/image";
import { Poppins } from "next/font/google";
import Link from "next/link";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['800'], // ExtraBold
  display: 'swap',
  variable: "--font-poppins"
});

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
            The best and user friendly URL shortening service.
          </p>
          <p className="px-39 text-center">
            We are most straightforward URL shortener in the world. We have a simple and easy to use interface for our users. Our service is free of charge, so you can start using it right now!
          </p>
          <div className='flex gap-3 justify-start'>
            <Link href="/shorten">
              <button className='bg-purple-500 shadow-lg p-3 text-white rounded-xl py-1 font-bold hover:bg-purple-400 cursor-pointer'>Try Now</button>
            </Link>

            <Link href="/github">
              <button className='bg-purple-500 shadow-lg p-3 text-white rounded-xl py-1 font-bold hover:bg-purple-400 cursor-pointer'>GitHub</button>
            </Link>
          </div>
        </div>
        <div className="flex justify-start relative">
          <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>
      </section>
    </main>
  );
}
