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
        <div className='text-5xl mb-20 text-center'>Partners and Supporters</div>
        <div className='py-20' 
        style={{
          background: greengradient,
        }}>
            <div className='flex justify-between items-center'>
            <img src="/aptos.png" className="w-1/4 px-24 py-4"/>
            <img src="/peaq.png" className="w-1/4 px-24 -mt-20 py-4"/>
            <img src="/unilend.png" className="w-1/4 px-24 mt-10 py-4"/>
            <img src="/manta.png" className="w-1/4 px-40 py-4"/>
            </div>

            <div className='flex justify-between items-center'>
            <img src="/akindo.png" className="w-1/4 px-24 py-4"/>
            <img src="/numa.png" className="w-1/4 px-24 -mt-40 -ml-40 py-4"/>
            <img src="/aptos.png" className="w-1/4 px-24 -ml-40 py-4"/>
            <img src="/ipfs.png" className="w-1/4 px-24 mr-20 py-4"/>
            </div>

            <div className='flex justify-between items-center'>
            <img src="/foundance.png" className="w-1/4 px-40 py-4"/>
            <img src="/filecoin.png" className="w-1/4 px-20 -mt-20 py-4"/>
            <img src="/ivs.png" className="w-1/4 px-24 py-4"/>
            <img src="/soonami.png" className="w-1/4 px-24 -mt-20 py-4"/>
            </div>
        </div>
    </div>
  )
}

export default Partners;