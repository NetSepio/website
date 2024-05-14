import React from 'react'

const page = () => {
  return (
    <div>
        <section class="pt-4">
    <div class="px-5 mx-auto rounded-xl">
      <div class="lg:flex md:flex gap-20">
        <div class="lg:w-1/2 md:w-1/2 w-full">
          <img src="/about1.png" alt="netsepio logo" class="lg:w-full md:w-full lg:mt-0 md:mt-20 mt-10"/>
        </div>
        <div class="lg:w-1/2 md:w-1/2 w-full my-auto">
          <div class="text-6xl text-white font-bold py-14">Our Mission</div>
          <div class="text-lg text-gray-300 w-4/5">Our mission to transform the Web3 ecosystem into a safer 
and more reliable space. 
We strive to empower users with secure, decentralized 
internet access while fostering trust and transparency. 
</div>
              <br></br>
              <div class="text-lg text-gray-300 w-4/5">By leveraging advanced technologies and user-driven 
networks, we ensure everyone can navigate the digital 
world with confidence.</div>
        </div>
      </div>

        <div class="p-20">
          
          <div class="">
            <div class="text-5xl text-white font-bold py-10 text-center">How We Help</div>
            <div class="text-md text-gray-300 w-2/5 mx-auto text-center">
              Our plateform supports your journey in the crypto world, from scam prevention to informed investing and asset protection.
          </div>
          </div>
          <div class="lg:flex md:flex mt-10 gap-8">
          <div class="lg:w-1/3 md:w-1/3 w-full rounded-xl">
              <div class="p-10">
              <div style={{ position: 'relative' }}>
              <img src="/about2.png" alt="netsepio logo"  style={{ zIndex: 1 }} className='absolute right-2 bottom-2'/>
                <img src="/white_frame.png" alt="netsepio logo" style={{ zIndex: 0 }} />
            </div>
            </div>

          </div>
          <div class="lg:w-1/3 md:w-1/3 w-full rounded-xl lg:mt-0 md:mt-0 mt-4">
              <div class="p-10">
              <div style={{ position: 'relative' }}>
              <img src="/about2.png" alt="netsepio logo"  style={{ zIndex: 1 }} className='absolute right-2 bottom-2'/>
                <img src="/white_frame.png" alt="netsepio logo" style={{ zIndex: 0 }} />
            </div>
              </div>
          </div>
          <div class="lg:w-1/3 md:w-1/3 w-full rounded-xl lg:mt-0 md:mt-0 mt-4">
              <div class="p-10">
              <div style={{ position: 'relative' }}>
              <img src="/about2.png" alt="netsepio logo"  style={{ zIndex: 1 }} className='absolute right-2 bottom-2'/>
                <img src="/white_frame.png" alt="netsepio logo" style={{ zIndex: 0 }} />
            </div>
              </div>
          </div>
      </div>
        </div>

        <div class="px-20 py-40" style={{backgroundImage:'url(/about5.png)'}} >
          
            <div class="text-5xl text-white font-bold py-10">Who We Help</div>
            <div class="text-lg text-gray-300 w-2/5">
              We make a difference for our dedicated community members and innovative project owners
          </div>
          <div className="text-4xl flex mt-20 font-semibold">
            <li className="w-1/2">Project Owners</li>
            <li className='w-1/2'>Community members</li>
          </div>
        </div>

    </div>
</section>
</div>
  )
}

export default page