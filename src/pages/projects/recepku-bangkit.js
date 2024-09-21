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

import proj1 from "/public/images/projects/recepku-v1.png";

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
          Recepku V1
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
            text="Recepku V1 - Bangkit Capstone Project"
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
                Recipe App | Android Development | Kotlin 
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

        <Layout className="pt-16">

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div
              className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8"
            >
              <h2 className="mb-4 text-2xl font-bold capitalize text-dark/75 dark:text-light/75">
                How this app work?
              </h2>
              <h3 className="mb-4 text-lg font-bold  text-lightGreen dark:text-primaryDark">
              Collaboration Between Android Applications, Machine Learning, and REST API
              </h3>
              <div classNname="w-full border-2 border-solid border-light bg-light"></div>
              <p className="">
              In this project, my role was to integrate a machine learning model with REST API data to create a seamless food recognition and recipe suggestion app.
              </p>
              <p className="my-4">
              Users can scan food items using the app's camera, and the locally deployed TensorFlow Lite (TFLite) model identifies the food instantly. Once the food is recognized, I integrated a REST API to fetch relevant recipes, providing users with suggestions based on the identified food.
              </p>
              <p className="my-4">
              By combining intuitive UI design with machine learning and API integration, this app delivers real-time food scanning and recipe discovery, offering both an offline ML experience and dynamic online recipe suggestions.
              </p>
              

              <div className="mt-2 flex items-center grid-cols-8 gap-4 sm:gap-8">
                <Link
                  className="rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold
             sm:px-4 sm:text-base rounded-lg border-2 border-solid bg-dark
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base"
                  aria-label="Visit Theme Demo"
                  href="https://github.com/CH2-PS014/Recepku-MD"
                  target={"_blank"}
                >
                  Visit Repository
                </Link>
                {/* <Link
                  href="https://github.com/lilxyzz/clay-theme"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <GithubIcon />
                </Link>
                <Link
                  href="https://dev.to/lilxyzz/clay-theme-unlocking-the-power-of-gatsby-v5-and-netlifycms-with-clay-theme-njn"
                  target={"_blank"}
                  className="w-10"
                  aria-label="github link"
                >
                  <DevIcon />
                </Link> */}
              </div>
            </div>
            <div className="relative col-span-4 flex justify-center items-center h-max rounded-2xl border-2 border-solid border-dark 
    bg-light p-0 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1">

  <div className="absolute top-0 -right-3 -z-10 h-[103%] w-[103%] rounded-[2rem] rounded-br-3xl 
      bg-dark dark:bg-light" />

  <video
    className="h-auto w-full max-w-md rounded-2xl" // Use max-width for the video
    src="/videos/vid1.mp4"
    alt="Recepku Video"
    controls
    autoPlay
    loop
    muted
  />
</div>
          </div>
        </Layout>

        
      </main>
    </>
  );
}
