import Marquee from "react-fast-marquee";
import { Icon } from "@iconify/react";
import Products from "./Products";

export default function HomePage() {
  return (
    <>
     
      <div className=" flex h-[1000px] flex-col gap-10  py-20 ">
        <div
          style={{
            backgroundImage: "url(assets/pic-homepage.jpeg)",
            height: "100",
            backgroundSize: "auto",
            zIndex: "-10",
          }}
          className="flex flex-col items-center justify-right h-full w-[100vw] py-10"
        >
          <div className="">
            <h2 className="text-5xl text-center font-bold mb-4">
              Living in Heaven.
            </h2>
            <p className="text-gray-800 text-center max-w-[500px] text-xl mb-6 font-semibold">
              Explore a world of visual delight, intricate details, and
              harmonious compositions.
            </p>
          </div>
        </div>
        <Marquee
          gradientColor={["255, 255, 255"]}
          speed={200}
          className="text-3xl "
        >
          <Icon className="z-10" height={"100px"} icon="simple-icons:ikea" />
        </Marquee>
      </div>
      <Products />
      
      <footer className="bg-stone-300 py-20">
  <div className="container mx-auto px-4">
    <div className="flex justify-center items-center">
      <p className="text-gray-800 text-sm">
        &copy; 2022 My Website. All rights reserved.
      </p>
    </div>
  </div>
</footer>
  

    </>
  );
}
