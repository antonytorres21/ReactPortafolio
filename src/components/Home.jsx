import React from "react";
import me from "../assets/Yo2.jpg";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div class="py-20 bg-gray-50">
          <div class="container mx-auto px-6 md:px-12 xl:px-32">
            <div class="mb-16 text-center">
              <h2 class="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
                Roig Antony Torres
              </h2>
              <p class="text-gray-600 lg:w-8/12 lg:mx-auto">
                Hi, i'm a Flutter and Web developer. Desing, Develop, Test and
                Deliver
              </p>
            </div>
            <div class="gap-5 items-center md:grid-cols-1 content-center">
              <div class="space-y-4 text-center">
                <img
                  class="w-48 h-48 mx-auto object-cover rounded-full md:w-48 md:h-64 lg:w-58 lg:h-72"
                  src={me}
                  alt="Roig Antony Torres"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 class="text-2xl">Roig Antony Torres</h4>
                  <span class="block text-sm text-gray-500">Developer</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
