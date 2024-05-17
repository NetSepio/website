import { how_we_help } from "@/utils/data";
import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className='pt-[14vh]'>
      <section class='pt-4'>
        <div class='px-5 mx-auto rounded-xl'>
          <div class='lg:flex md:flex gap-20'>
            <div class='lg:w-1/2 md:w-1/2 w-full'>
              <img
                src='/about1.png'
                alt='netsepio logo'
                class='lg:w-full md:w-full lg:mt-0 md:mt-20 mt-10'
              />
            </div>
            <div class='lg:w-1/2 md:w-1/2 w-full my-auto'>
              <div class='text-6xl text-white font-bold py-14'>Our Mission</div>
              <div class='text-lg text-gray-300 w-4/5'>
                Our mission to transform the Web3 ecosystem into a safer and
                more reliable space. We strive to empower users with secure,
                decentralized internet access while fostering trust and
                transparency.
              </div>
              <br></br>
              <div class='text-lg text-gray-300 w-4/5'>
                By leveraging advanced technologies and user-driven networks, we
                ensure everyone can navigate the digital world with confidence.
              </div>
            </div>
          </div>

          <div class='p-20'>
            <div class=''>
              <div class='text-5xl text-white font-bold py-10 text-center'>
                How We Help
              </div>
              <div class='text-md text-gray-300 w-2/5 mx-auto text-center'>
                Our plateform supports your journey in the crypto world, from
                scam prevention to informed investing and asset protection.
              </div>
            </div>
            <div className='flex mt-[111px] mb-[200px]  justify-between'>
              {how_we_help.map((item, index) => {
                return (
                  <div
                    key={index.toString()}
                    className='bg-white flex items-start pt-[6%] justify-center w-[387px] h-[435px] relative rounded-[20px]'
                  >
                    <Image
                      src={`/images/${item.img}`}
                      alt='bg'
                      width={387}
                      className='absolute -top-1 -left-1'
                      height={435}
                    />
                    <div className='z-20  pl-[33px] pr-[12px]'>
                      <h4 className='text-[28px] font-semibold mb-[35px] text-white'>
                        {item.title}
                      </h4>
                      <p className='text-lg capitalize text-white font-light'>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div
            class='px-20 py-40'
            style={{ backgroundImage: "url(/about5.png)" }}
          >
            <div class='text-5xl text-white font-bold py-10'>Who We Help</div>
            <div class='text-lg text-gray-300 w-2/5'>
              We make a difference for our dedicated community members and
              innovative project owners
            </div>
            <div className='text-4xl flex text-white mt-20 font-semibold'>
              <li className='w-1/2'>Enterprises</li>
              <li className='w-1/2'>Community members</li>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
