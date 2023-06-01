import React from "react";
import { lenguajes, framewokrs, tools, databases } from "./ImgList";

function Skills() {
  return (
    <div className="py-20 bg-gray-dark">
      <h3 className="top-24 uppercase tracking-[18px] text-2xl text-center">
        Skills
      </h3>

      <h2 className="top-24 uppercase tracking-[18px] text-2xl text-center p-5">
        Lenguajes
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex flex-row p-5 m-5 h-42 space-x-5 justify-center">
          {lenguajes.map((lenguaje) => (
            <div className="sm:w-16 md:w-28 lg:w-32 aspect-w-1 aspect-h-1 rounded hover:animate-rounding hover:rounded-full overflow-hidden shadow-lg hover:shadow-white transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 hover:bg-transparent duration-700 group/name">
              <div className="group/image">
                <img
                  src={lenguaje.path}
                  alt={lenguaje.name}
                  className="group-hover/image:animate-pulse"
                />
                <div className="relative flex items-center justify-center group/name -translate-y-21">
                  <p className="text-white text-sm font-bold bg-black bg-opacity-80 rounded p-2 opacity-0 group-hover/name:opacity-100 transition-opacity duration-300">
                    {lenguaje.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="top-24 uppercase tracking-[18px] text-2xl text-center p-5">
        Databases
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex flex-row p-5 m-5 h-42 space-x-5 justify-center">
          {databases.map((databases) => (
            <div className="sm:w-16 md:w-28 lg:w-32 aspect-w-1 aspect-h-1 rounded hover:animate-rounding hover:rounded-full overflow-hidden shadow-lg hover:shadow-white transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 hover:bg-transparent duration-700 group/name">
              <div className="group/image">
                <img
                  src={databases.path}
                  alt={databases.name}
                  className="group-hover/image:animate-pulse"
                />
                <div className="relative flex items-center justify-center group/name -translate-y-21">
                  <p className="text-white text-sm font-bold bg-black bg-opacity-80 rounded p-2 opacity-0 group-hover/name:opacity-100 transition-opacity duration-300">
                    {databases.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="top-24 uppercase tracking-[18px] text-2xl text-center p-5">
        Framewokrs
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex flex-row p-5 m-5 h-42 space-x-5 justify-center">
          {framewokrs.map((framewokrs) => (
            <div className="sm:w-16 md:w-28 lg:w-32 aspect-w-1 aspect-h-1 rounded hover:animate-rounding hover:rounded-full overflow-hidden shadow-lg hover:shadow-white transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 hover:bg-transparent duration-700 group/name">
              <div className="group/image">
                <img
                  src={framewokrs.path}
                  alt={framewokrs.name}
                  className="group-hover/image:animate-pulse"
                />
                <div className="relative flex items-center justify-center group/name -translate-y-21">
                  <p className="text-white text-sm font-bold bg-black bg-opacity-80 rounded p-2 opacity-0 group-hover/name:opacity-100 transition-opacity duration-300">
                    {framewokrs.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <h2 className="top-24 uppercase tracking-[18px] text-2xl text-center p-5">
        Tools
      </h2>
      <div className="flex items-center justify-center">
        <div className="flex flex-row p-5 m-5 h-42 space-x-5 justify-center">
          {tools.map((tools) => (
            <div className="sm:w-16 md:w-28 lg:w-32 aspect-w-1 aspect-h-1 rounded hover:animate-rounding hover:rounded-full overflow-hidden shadow-lg hover:shadow-white transition ease-in-out delay-150 hover:-translate-y-5 hover:scale-110 hover:bg-transparent duration-700 group/name">
              <div className="group/image">
                <img
                  src={tools.path}
                  alt={tools.name}
                  className="group-hover/image:animate-pulse"
                />
                <div className="relative flex items-center justify-center group/name -translate-y-21">
                  <p className="text-white text-sm font-bold bg-black bg-opacity-80 rounded p-2 opacity-0 group-hover/name:opacity-100 transition-opacity duration-300">
                    {tools.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
