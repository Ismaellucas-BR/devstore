import { api } from "@/data/api";
import Image from "next/image";
import  Link from "next/link";
import CamisetaNeverStopLearning from "../../../../public/assets/moletom-never-stop-learning.png"
import MoletomJava from "../../../../public/assets/moletom-java.png"
import CamisetaDoWhile from "../../../../public/assets/camiseta-dowhile.png"

async function getFeaturedProducts(){
  const response = await api('products/featured')

  const products= await response.json

  return products
}

export default async function Home() {

  const products= await getFeaturedProducts()
  console.log(products)

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link href='/' className="relative group flex justify-center items-end col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden">
        <Image
          className="group-hover:scale-105 transition-transform duration-150" 
          src={CamisetaNeverStopLearning} 
          width={920} 
          height={920}
          quality={100} 
          alt=""
        />
        <div className="flex items-center gap-2 max-w-[280px] rounded-full absolute bottom-28 right-28 h-12 border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate"> Camiseta Never Stop Learning</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold font-inter">R$150

          </span>
        </div>
      </Link>
      <Link href='/' className="relative group flex justify-center items-end col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden">
        <Image
          className="group-hover:scale-105 transition-transform duration-150" 
          src={MoletomJava} 
          width={920} 
          height={920}
          quality={100} 
          alt=""
        />
        <div className="flex items-center gap-2 max-w-[280px] rounded-full absolute bottom-10 right-10 h-12 border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate"> Moletom Java</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold font-inter">R$150

          </span>
        </div>
      </Link>
      <Link href='/' className="relative group flex justify-center items-end col-span-3 row-span-3 rounded-lg bg-zinc-900 overflow-hidden">
        <Image
          className="group-hover:scale-105 transition-transform duration-150" 
          src={CamisetaDoWhile} 
          width={920} 
          height={920}
          quality={100} 
          alt=""
        />
        <div className="flex items-center gap-2 max-w-[280px] rounded-full absolute bottom-10 right-10 h-12 border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate"> Camiseta do while</span>
          <span className="flex h-full items-center justify-center rounded-full bg-violet-500 px-4 font-semibold font-inter">R$150

          </span>
        </div>
      </Link>
    </div>
  );
}
