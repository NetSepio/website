import React from 'react'

const Partners = () => {

    const greengradient = `
    linear-gradient(
      to bottom, 
      #E7E7EA 50%, 
      #11D9C5 100%
    )
  `;

  return (
    <div className=''>
        <div className='lg:text-5xl md:text-5xl text-3xl lg:mt-0 md:mt-0 mt-28 mb-20 text-center'>Partners and Supporters</div>
        <div className='py-20' 
        style={{
          background: greengradient,
        }}>
            <div className='flex justify-between items-center'>
            <img src="/soon.png" className="w-1/4 lg:px-24 md:px-10 px-2 py-4"/>
            <img src="/deanlist.png" className="w-1/5  lg:px-24 md:px-10 px-2 -mt-20 py-4"  />
            <img src="/denet.png" className="w-1/5 lg:px-24 md:px-10 px-2 mt-10 py-4"/>
            <img src="/eclipse_logo.png" className="w-1/5 lg:px-24 md:px-10 -mt-20 px-2 py-4"/> 
            </div>

            <div className='flex justify-between items-center'>
            <img src="/aptos.png" className="w-1/4 lg:px-24 md:px-10 px-2 py-4"/>
            <img src="/peaq.png" className="w-1/4 lg:px-24 md:px-10 px-2 -mt-20 py-4"/>
            <img src="/unilend.png" className="w-1/4 lg:px-24 md:px-10 px-2 mt-10 py-4"/>
            <img src="/manta.png" className="w-1/4 lg:px-24 md:px-10 px-2 py-4"/>
            </div>

            <div className='flex justify-between items-center'>
            <img src="/akindo.png" className="w-1/4 lg:px-24 md:px-10 px-2 py-4"/>
            <img src="/Numa.png" className="w-1/4 lg:px-24 md:px-10 px-2 -mt-40 lg:-ml-40 md:-ml-20 py-4"/>
            <img src="/Google.png" className="w-1/4 lg:px-24 md:px-10 px-2 lg:-ml-40 md:-ml-20 py-4"/>
            <img src="/ipfs.png" className="w-1/4 lg:px-24 md:px-10 px-2 mr-20 py-4"/>
            </div>

            <div className='flex justify-between items-center'>
            <img src="/foundance.png" className="w-1/4 lg:px-40 md:px-10 px-2 py-4"/>
            <img src="/filecoin.png" className="w-1/4 lg:px-20 md:px-10 px-2 -mt-20 py-4"/>
            <img src="/ivs.png" className="w-1/4 lg:px-24 md:px-10 px-2 py-4"/>
            <img src="/soonami.png" className="w-1/4 lg:px-24 md:px-10 px-2 -mt-20 py-4"/>
            </div>

            <div className='flex justify-center items-center'>
            <img src="/wootzapp.png" className="w-1/4 lg:px-24 md:px-10 px-2  py-4"/>
            <img src="/AlibabaCloudLogo.png" className="w-1/4 lg:px-20 md:px-10 px-2  py-4"/>
           
            </div>
        </div>
    </div>
  )
}

export default Partners;