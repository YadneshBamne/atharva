'use client';
import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import Animation from "./Animation - 1723199716467.json";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import Head from "next/head";

const page = () => {
  return (
    <main>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap" rel="stylesheet"></link>
Outfit
      </Head>
      <div className="min-h-screen bg-purple-200 text-black">
        <div
          className="p-5 flex grid-cols-2 justify-center"
        ></div>
        <div className="flex justify-center items-center w-full h-52 my-12">
          <Lottie className="size-96" loop={true} animationData={Animation} />{" "}
          {/* for Lottle animation file and lottie functions*/}
        </div>

        <div className="flex justify-center w-full my-6 text-5xl">
          <h1>
            <span className="text-blue-500">Your</span> Home{" "}
            <span className="text-blue-500">Away</span> From
          </h1>
          <div className="w-[10px] h-[50px]"></div>
          <span className="text-blue-500">
            <Typewriter
              options={{
                strings: ["Home....", "Mom....", "Dad....", "Yourself...."],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </div>

        <div className="flex justify-center">
          <div className="flex gap-5 bg-slate-300 w-1/2 justify-center rounded-lg h-10 items-center">
            <button>
              <div>PG</div>
            </button>
            <button>
              <div>Hostel</div>
            </button>
            <button>
              <div>Rent a Home</div>
            </button>
          </div>
        </div>

        <div className=" flex justify-center align-center gap-5 mb-7 mt-10">
            <div class="min-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Thane
                  </h5>
                </a>

                <Link href={"/Thane"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Vasai
                  </h5>
                </a>

                <Link href={"/Vasai"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Santacruz
                  </h5>
                </a>

                <Link href={"/Santacruz"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Kalyan
                  </h5>
                </a>

                <Link href={"/Kalyan"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>

            <div class="max-w-sm h-48 bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-50 text-black dark:border-gray-700 ">
              <div class="p-8">
                <a href="#">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight text-black dark: flex justify-center items-center mb-7">
                    Malad
                  </h5>
                </a>

                <Link href={"/Malad"}>
                  <button
                    href="#"
                    class=" bg-yellow-50 text-black hover:bg-gray-900-800 focus:ring-4 focus:outline-none focus:ring-gray-900-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-gray-900-600 dark:hover:bg-gray-900-700 dark:focus:ring-gray-900-800  
              hover:before:bg-blue-500 border-blue-500 relative h-[32px] w-40 overflow-hidden border border-blue-600 px-3 -500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-blue-500 before:transition-all before:duration-500 hover:shadow-blue-500 hover:before:left-0 mx-4 hover: justify-center align-center items-center"
                  >
                    Explore more
                  </button>
                </Link>
              </div>
            </div>
          </div>

        <div className="flex justify-center space-x-10 items-center mt-10">
          <hr className="w-1/4 " />
          <div className="text-2xl">Why Use Holmes</div>
          <hr className="w-1/4 opacity-7 flex items-center" />
        </div>
        <div className="flex justify-around mt-10 ml-10">
          <div>
            <Image
              src={"/hand-shake.png"}
              width={80}
              height={80}
              className="mb-5"
            />
            <h1>Trusted PG's</h1>
          </div>

          <div>
            <Image
              src={"/add-friend.png"}
              width={80}
              height={80}
              className="mb-5 ml-4"
            />
            <h1>Verified Owners</h1>
          </div>

          <div>
            <Image
              src={"/bank.png"}
              width={80}
              height={80}
              className="mb-5 ml-9"
            />
            <h1>Authorized By Colleges</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
