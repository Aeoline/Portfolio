import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";
import { GithubIcon } from "@/components/Icons";
import { DevIcon } from "@/components/Icons";

import proj1 from "/public/images/projects/recepku-v2.jpg";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref} />;
}

export default function About() {
  return (
    <>
      <Head>
        <link
          rel="canonical"
          href="https://travislord.xyz/projects/clay-gatsby-theme"
        ></link>
        <title>
          Recepku V2 - College Final Project
        </title>
        <meta
          name="description"
          content="I am thrilled to share Clay Theme with the web development community! I have recently launched Clay Theme, a cutting-edge Gatsby Framework Template."
        />
      </Head>

      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Recepku v2 - College Final Project"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                Recepku, your cooking companion
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
                Kotlin | Next.js | Express.js | JavaScript | TypeScript
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
              Recepku is an android application that is useful as a cooking assistant that can help everyone in cooking and knowing about various kinds of food, Recepku is here to answer solutions for everyone who wants to start learning to cook.
              </p>
              <h4 className="mt-4 text-lg font-800 capitalize text-dark/75 dark:text-light/75">
                Why we made this app?
              </h4>
              <p className="my-4">
              We realize that many people want to live a healthy life especially in choosing food, therefore Recepku will provide regular recipes and less calorie recipes to help people who want healthy food but can enjoy delicious food.
              </p>

              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Website"
                  href="https://web-recepku.vercel.app/"
                  target={"_blank"}
                >
                  Visit Website
                </Link>
                <Link
                  href="https://github.com/Aeoline/Recepku-MD"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href="https://github.com/Aeoline/BackEnd-Recepku-OOP"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href="https://github.com/Aeoline/Web-Recepku"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
              </div>

            </div>

            
            <div
              className="relative col-span-4 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            "
            >
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={proj1}
                alt="Recepku"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
          </div>
        </Layout>

        <Layout className="pt-14">
          <AnimatedText
            text="What's The Difference Between v1 and v2?"
            className="mb-16 !text-6xl !leading-tight lg:!text-4xl sm:!text-4xl xs:!text-2xl sm:mb-8"
          />

          <p>
            First of all, I updated the logo and the UI to make it more intuitive and user-friendly. The layout is cleaner, with improved navigation and a more modern design aesthetic. In addition to the visual overhaul, I've optimized the performance by refining the codebase, which reduces loading times and enhances overall responsiveness.
          </p>

          <div className="my-6 grid w-full grid-cols-8 gap-16 sm:gap-8">
            {/* V1 Section */}
            <div className="col-span-4 flex flex-col items-center justify-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="text-3xl font-bold mb-4 text-center">V1</h2> {/* V2 Label */}
              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <video
                  className="h-auto w-full max-w-md rounded-2xl"
                  src="/videos/vid1.mp4"
                  alt="V2 Video"
                  controls
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>

            {/* V2 Section */}
            <div className="col-span-4 flex flex-col items-center justify-center xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="text-3xl font-bold mb-4 text-center">V2</h2> {/* V2 Label */}
              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <video
                  className="h-auto w-full max-w-md rounded-2xl"
                  src="/videos/vid2.mp4"
                  alt="V2 Video"
                  controls
                  autoPlay
                  loop
                  muted
                />
              </div>
            </div>
          </div>

          <p className="mt-8">
            In addition to that, I developed a new backend using Express.js with an object-oriented programming (OOP) architecture, ensuring better scalability and maintainability. I also built a web-based admin panel using Next.js with TypeScript, providing a more robust and type-safe environment for handling admin functionalities.
          </p>

          <p className="mt-4">
            Now, the application features two roles: admin and user. The admin has the ability to perform CRUD (Create, Read, Update, Delete) operations on the food recipe data stored in the database, which is powered by Firebase Firestore. This setup allows for efficient data management and seamless updates to the recipe listings, enhancing the overall user experience.
          </p>

          <div className="flex justify-center my-8"> {/* Center the video with margin */}
            <video
              className="h-auto w-full max-w-2xl rounded-2xl" 
              src="/videos/vid3.mp4"
              alt="V3 Video"
              controls
              autoPlay
              loop
              muted
            />
          </div>


        </Layout>


        
      </main>
    </>
  );
}
