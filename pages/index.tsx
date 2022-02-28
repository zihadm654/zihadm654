import Head from "next/head";
import About from "../src/layouts/About";
import Describe from "../src/layouts/Describe";
import Hero from "../src/layouts/Hero";
import Progress from "../src/layouts/Progress";
import Projects from "../src/layouts/Projects";
import Skills from "../src/layouts/Skills";
import { motion } from "framer-motion";

export default function Home({ posts }) {
  return (
    <motion.div exit={{ opacity: 0 }}>
      <div className="container">
        <Head>
          <title>HomePage || Abdul Malik</title>
          <meta name="description" content="Home page created with nextjs" />
        </Head>
        <main>
          <Hero />
          <Describe />
          <Projects posts={posts} />
          <Progress />
          <Skills />
          <About />
        </main>
      </div>
    </motion.div>
  );
}
