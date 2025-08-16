import React from "react";

const Footer = () => {
  return (
    <div
      className="bg-cover bg-center text-white py-16"
      style={{ backgroundImage: "url('/images/Footer.png')" }}
    >
      <div className="container mx-auto px-36 grid grid-cols-1 md:grid-cols-5 gap-8">
        <div className="space-y-6 text-left">
          <div className="flex items-center gap-0">
            <img src="/images/Logo.png" alt="NetSepio Logo" className="h-16" />
            <img
              src="/assets/NetSepio.svg"
              alt="NetSepio Logo"
              className="h-8"
            />
          </div>
          <p className="text-md leading-relaxed pl-6">
            NetSepio delivers private, secure, and censorship-free internet with
            an AI coordination layer, shaping an agentic future.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 pl-16">About</h2>
          <div className="space-y-3 pl-16">
            {["Mission", "Privacy Policy", "Terms of Use", "FAQ"].map(
              (item, index) => (
                <a
                  key={index}
                  href={
                    item === "Privacy Policy"
                      ? "/privacy.html"
                      : item === "Terms of Use"
                      ? "/terms.html"
                      : `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="block text-lg hover:text-gray-300 transition flex items-center"
                >
                  <span className="flex items-center">
                    {item}
                    <img
                      src="/images/arrow.png"
                      alt="arrow"
                      className="h-4 w-4 ml-1"
                    />
                  </span>
                </a>
              )
            )}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Products</h2>
          <div className="space-y-3">
            {[
              { name: "Erebrus", url: "https://erebrus.io/" },
              { name: "Cyrene AI", url: "https://www.cyreneai.com/" },
              {
                name: "Browser Extension",
                url: "https://chromewebstore.google.com/detail/netsepio/bbkfclgnbddljhepbfpongcollhocghd",
              },
            ].map((product, index) => (
              <a
                key={index}
                href={product.url}
                target="_blank"
                rel="noreferrer"
                className="block text-lg hover:text-gray-300 transition flex items-center"
              >
                <span className="flex items-center">
                  {product.name}
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    className="h-4 w-4 ml-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Docs</h2>
          <div className="space-y-3">
            {[
              {
                name: "NetSepio Docs",
                url: "https://docs.netsepio.com/latest",
              },
              {
                name: "Erebrus Docs",
                url: "https://docs.netsepio.com/latest/erebrus",
              },
              {
                name: "CyreneAI Docs",
                url: "https://docs.netsepio.com/latest/cyreneai",
              },
            ].map((doc, index) => (
              <a
                key={index}
                href={doc.url}
                target="_blank"
                rel="noreferrer"
                className="block text-lg hover:text-gray-300 transition flex items-center"
              >
                <span className="flex items-center">
                  {doc.name}
                  <img
                    src="/images/arrow.png"
                    alt="arrow"
                    className="h-4 w-4 ml-1"
                  />
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="md:pl-4">
          <h2 className="text-2xl font-bold mb-6 ">Connect</h2>
          <div className="flex space-x-4">
            {[
              {
                name: "Telegram",
                url: "https://t.me/NetSepio",
                img: "Telegram.png",
              },
              {
                name: "Github",
                url: "https://github.com/Netsepio",
                img: "Github.png",
              },
              {
                name: "Discord",
                url: "https://discordapp.com/invite/5uaFhNpRF6",
                img: "Discord.png",
              },
              {
                name: "Linkedin",
                url: "https://www.linkedin.com/company/netsepio/",
                img: "Linkedin.png",
              },
              { name: "X", url: "https://x.com/netsepio", img: "X.png" },
            ].map((social, index) => (
              <a key={index} href={social.url} target="_blank" rel="noreferrer">
                <img
                  src={`/images/${social.img}`}
                  alt={social.name}
                  className="h-8 w-8 hover:scale-110 transition transform"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-12 pt-8 text-center">
        <div className="w-[1200px] mx-auto h-[1px] bg-[#11D9C5] rounded-full mb-4"></div>
        <p className="text-lg text-[#11D9C5]">
          © 2025 - NetSepio. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
