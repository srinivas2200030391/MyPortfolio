import { HERO } from "../constants";
import srinivasImg from "../assets/Srinivas.jpg";
import { motion} from "framer-motion";
export default function Hero() {
  return (
    <section className="flex min-h-screen flex-wrap items-center">
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}>
        <h2 className="my-8 p-2 text-4xl font-bold md:text-5xl lg-text-[7rem]">
          {HERO.name}
        </h2>
        <p className="p-2 text-3xl tracking-tighter lg:text-4xl">
          {HERO.greet}
        </p>
        <p className="mb-8 p-2 text-xl">{HERO.description}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="flex justify-center md:translate-x-20 md:-translate-y-1">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          src={srinivasImg}
          width={430}
         
          alt="Srinivas Kommirisetty"
          className="rounded-3xl"
        />
      </motion.div>
    </section>
  );
}
