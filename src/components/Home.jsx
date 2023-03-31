import React from "react";
import me from "../assets/Yo2.jpg";
class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 md:px-12 xl:px-32">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
                Roig Antony Torres
              </h2>
              <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
                Hi, i'm a Flutter and Web developer. Desing, Develop, Test and
                Deliver
              </p>
            </div>
            <div className="gap-5 items-center md:grid-cols-1 content-center">
              <div className="space-y-4 text-center">
                <img
                  className="w-48 h-48 mx-auto object-cover rounded-full md:w-48 md:h-64 lg:w-58 lg:h-72"
                  src={me}
                  alt="Roig Antony Torres"
                  loading="lazy"
                  width="1000"
                  height="667"
                />
                <div>
                  <h4 className="text-2xl">Roig Antony Torres</h4>
                  <span className="block text-sm text-gray-500">Developer</span>
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
