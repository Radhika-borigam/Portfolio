import Image from "next/image";
import RenderModel from "@/components/RenderModel";
// import HatModel from "@/components/models/HatModel";
import AboutDetails from "@/components/about";
import dynamic from "next/dynamic";

const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});
const Wizard = dynamic(() => import("@/components/models/Wizard2"));

export const metadata = {
  title: "About",
};

export default function Home() {
const bg = "../../../../public/background/about-background.png";
  return (
    <>
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <div className="w-full h-3/5 xs:h-3/4 sm:h-screen absolute top-1/2 -translate-y-1/2 left-0">
        <RenderModel>
          <Wizard />
        </RenderModel>
      </div>
      <div className="relative w-full h-screen flex flex-col items-center justify-end">
        <div className="absolute flex flex-col items-center text-center bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2">
          <h5 className="font-bold text-4xl xs:text-5xl sm:text-6xl lg:text-7xl text-accent">
            Radhika_Borigam
          </h5>
          <p className="font-light text-foreground text-lg"></p>
        </div>
      </div>

      <AboutDetails />
    </>
  );
}
