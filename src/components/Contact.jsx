import React from "react";
import { HiPhone, HiMail } from "react-icons/hi";

class Contact extends React.Component {
  render() {
    return (
      <div className="space-y-10 flex flex-col justify-center items-center">
        <h3 className="top-24 uppercase tracking-[18px] text-2xl">
          Contact
        </h3>
        <div className="">
          <h1 className="text-3xl font-bold text-gray-900">
            If have any question...{" "}
            <span className="underline">Contact to me</span>
          </h1>

          <div className="flex items-center space-x-5 justify-center p-9">
            <a
              href="https://wa.me/50687778715"
              target={"_blank"}
              rel="noreferrer"
            >
              <div className="flex items-center space-x-5 justify-center cursor-pointer">
                <HiPhone className="h-7 w-7 flex-shrink-0 hover:animate-pulse" />
                <p className="ml-2 text-xl sm:text-2xl">+506-87-77-87-15</p>
              </div>
            </a>
          </div>
          <div className="flex items-center space-x-5 justify-center pb-16">
            <div className="flex items-center space-x-5 justify-center p-9">
              <a class="font-semibold" href="mailto:rt026000@gmail.com">
                <div className="flex items-center space-x-5 justify-center cursor-pointer">
                  <HiMail className="h-7 w-7 flex-shrink-0 hover:animate-pulse" />
                  <p className="ml-2 text-xl sm:text-2xl">rt026000@gmail.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
