import React from "react";
import { HiPhone, HiMail } from "react-icons/hi";
import { socialMedia } from "./ImgList";

function Contact() {
  return (
    <div className="space-y-10 flex flex-col justify-center items-center bg-gray-dark ">
      <h3 className="top-24 uppercase text-white tracking-[18px] text-2xl">
        Contact
      </h3>
      <div className="">
        <h1 className="text-3xl font-bold text-white">
          If have any question...{" "}
          <span className="underline">Contact to me</span>
        </h1>

        <div className="flex items-center space-x-5 justify-center p-9">
          <a
            href="https://wa.me/50687778715"
            target={"_blank"}
            rel="noreferrer"
          >
            <div className="flex items-center space-x-5 justify-center cursor-pointer group">
              <HiPhone className="h-10 w-10 text-white flex-shrink-0 group-hover:animate-pulse" />
              <p className="ml-2 text-xl sm:text-2xl text-white">
                +506-87-77-87-15
              </p>
            </div>
          </a>
        </div>
        <div className="flex items-center space-x-5 justify-center pb-16 group">
          <div className="flex items-center space-x-5 justify-center p-9">
            <a className="font-semibold" href="mailto:rt026000@gmail.com">
              <div className="flex items-center space-x-5 justify-center cursor-pointer">
                <HiMail className="h-10 w-10 flex-shrink-0 text-white group-hover:animate-pulse" />
                <p className="ml-2 text-xl sm:text-2xl text-white">
                  rt026000@gmail.com
                </p>
              </div>
            </a>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-white text-center">
          Or go to my ... <span className="underline">social media</span>
        </h1>
        <div className="flex items-center justify-center">
          <div className="flex flex-row p-5 m-5 h-42 space-x-5 justify-center">
            {socialMedia.map((socialMedia) => (
              <div className="sm:w-16 md:w-28 lg:w-32 aspect-w-1 aspect-h-1 rounded hover:animate-rounding hover:rounded-full overflow-hidden shadow-lg hover:shadow-white transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 hover:bg-transparent duration-700 group/name">
                <div className="group/image">
                  <a
                    href={socialMedia.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {" "}
                    <img
                      src={socialMedia.path}
                      alt={socialMedia.name}
                      className="group-hover/image:animate-pulse"
                    />
                    <div className="relative flex items-center justify-center group/name -translate-y-21">
                      <p className="text-white text-sm font-bold bg-black bg-opacity-80 rounded p-2 opacity-0 group-hover/name:opacity-100 transition-opacity duration-300">
                        {socialMedia.name}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
/**
 * <div className="flex items-center space-x-5 space-y-5 justify-center p-9">
          <a href="./Resume Roig Antony Torres.pdf" download={' '}>
            <h3>Download Resume</h3>
          </a>
        </div>
 */
