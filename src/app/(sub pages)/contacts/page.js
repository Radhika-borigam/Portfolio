"use client";
import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Form";
import { useTypewriter } from "react-simple-typewriter";

export default function Contact() {
  const [text] = useTypewriter({
    words: [
      "Hey techMinds Let's connect",
      "<<Hey techMinds Let's connect....!>>",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <>
      <Image
        src={bg}
        alt="Next.js Portfolio website's contact page background image"
        priority
        sizes="100vw"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-25"
      />

      <article className="relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className="text-accent font-semibold text-center text-4xl capitalize">
            <span className="text-yellow-500">{text}</span>
          </h1>
          <p className="text-center font-light text-sm xs:text-base">
            As a student passionate about tech and innovation, I’m eager to
            collaborate, share ideas, and grow together. Whether you’re a
            peer, mentor, or enthusiast, let’s build, learn, and inspire each
            other! 🚀
          </p>
        </div>
        <Form />
      </article>
    </>
  );
}
