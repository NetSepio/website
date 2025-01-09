import Image from "next/image";
import React from "react";

const Mobile = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:mt-32 px-4 lg:px-0 mt-32">
      <h2 className="text-3xl py-6 font-light mb-6 lg:hidden">
        Blockchain VPN app for your privacy and online security
      </h2>
      <div className="w-full lg:w-1/2 flex justify-center items-center mb-8 lg:mb-0">
        <Image
          src="/images/mobile/mobile1.png"
          width={500}
          height={500}
          alt="mobile"
          className="w-full h-auto max-w-md lg:max-w-none lg:h-[50vw] object-cover"
        />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className="max-w-md lg:max-w-xl md:mx-10">
          <h2 className="hidden lg:block text-3xl lg:text-5xl xl:text-6xl font-light mb-6 lg:mb-10">
            Blockchain VPN app for your privacy and online security
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-10 font-light">
            Empower your online activity with our Erebrus mobile app for secure,
            private and accessible network. We utilize NFTs for robust privacy
            and decentralization.
          </p>
          <div className="flex flex-row justify-between gap-4 mb-4">
            {/* Android Button */}
            <a
              href="https://play.google.com/store/apps/details?id=com.erebrus.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-black hover:opacity-90 text-white px-4 py-3 rounded-lg shadow-md transition-all duration-300 w-1/2"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3128/3128279.png"
                alt="Google Play"
                width={24}
                height={24}
                className="mr-2"
              />
              <div className="text-left">
                <p className="text-xs font-light">GET IT ON</p>
                <p className="text-sm font-semibold">Google Play</p>
              </div>
            </a>
            {/* iOS Button */}
            <a
              href="https://testflight.apple.com/join/BvdARC75"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-black hover:opacity-90 text-white px-4 py-3 rounded-lg shadow-md transition-all duration-300 w-1/2"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/5969/5969046.png"
                alt="App Store"
                width={28}
                height={28}
                className="mr-2"
              />
              <div className="text-left">
                <p className="text-xs font-light">Available on the</p>
                <p className="text-sm font-semibold">App Store</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
