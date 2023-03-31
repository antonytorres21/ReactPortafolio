import React from "react";
import me from "../assets/Roig_Torres.png";

class AboutMe extends React.Component {
  render() {
    return (
      <div className="py-16 bg-gray-50">
        <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
          <h3 className="top-24 uppercase tracking-[18px] text-2xl text-center">
            about me
          </h3>
          <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
            <div className="md:5/12 lg:w-5/12">
              <img
                src={me}
                className="w-48 h-48 mx-auto object-cover rounded-full md:w-48 md:h-64 lg:w-58 lg:h-72"
                alt="Antony Torres"
                loading="lazy"
              />
            </div>
            <div className="md:7/12 lg:w-6/12">
              <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                Passion to develop
              </h2>
              <p className="mt-6 text-gray-600">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
                omnis voluptatem accusantium nemo perspiciatis delectus atque
                autem! Voluptatum tenetur beatae unde aperiam, repellat expedita
                consequatur! Officiis id consequatur atque doloremque!
              </p>
              <p className="mt-4 text-gray-600">
                {" "}
                Nobis minus voluptatibus pariatur dignissimos libero quaerat
                iure expedita at? Asperiores nemo possimus nesciunt dicta veniam
                aspernatur quam mollitia.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;

/**
 * <div className="py-16 bg-white">  
  <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div className="md:5/12 lg:w-5/12">
          <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="image" loading="lazy" width="" height="">
        </div>
        <div className="md:7/12 lg:w-6/12">
          <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">Nuxt development is carried out by passionate developers</h2>
          <p className="mt-6 text-gray-600">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!</p>
          <p className="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
</div>
 */
