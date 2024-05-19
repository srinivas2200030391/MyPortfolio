import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Grid from "@/components/ui/Grid";
import Image from "next/image";
import { FaHome } from "react-icons/fa";


export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 ">
      <div className="max-w-7pxl w-full">
        <FloatingNav navItems={[
          {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
        ]}/>
        <Hero />
        <Grid/>
    </div>
    </main>
  );
}
