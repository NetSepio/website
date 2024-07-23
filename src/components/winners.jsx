import React from 'react';

const WinnersPage = () => {
  const achievements = [
    { logo: '/ivs.png', name: 'IVS CRYPTO', prize: 'Grand Prize at IVS Crypto Demoday, Japan' },
    { logo: 'aptos.png', name: 'APTOS', prize: 'Grand Prize at Aptos Hackathon, Singapore' },
    { logo: 'soonami.png', name: 'soonami.io', prize: 'On the Fast Track Prize at Soonami Venthuron' },
    { logo: 'akindo.png', name: 'AKINDO', prize: 'Several Prizes at Akindo WaveHack' },
    { logo: 'filecoin.png', name: 'Filecoin', prize: 'Grand Prize at Filecoin Browsers 3000 Hackathon' },
  ];

  const positions = [
    { top: '5%', left: '10%', width: '120px', height: '80px' },
    { top: '20%', left: '45%', width: '170px', height: '80px' },
    { top: '45%', left: '12%', width: '180px', height: '55px' },
    { top: '65%', left: '50%', width: '130px', height: '40px' },
    { top: '75%', left: '14%', width: '160px', height: '80px' },
  ];

  return (
    <div className="bg-[#040A20] text-white py-40">
      <h1 className="lg:text-5xl md:text-5xl text-3xl text-center mb-20">Join the Winners!</h1>
      <div className="w-full mx-auto flex lg:flex-row md:flex-row flex-col justify-center items-center">
        <div className="w-80 relative h-80 rounded-2xl lg:block md:block hidden"
        style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFFFFF)' }}>
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="absolute"
              style={{
                top: positions[index % positions.length].top,
                left: positions[index % positions.length].left,
                width: positions[index % positions.length].width,
                height: positions[index % positions.length].height,
                // filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 1)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.8))',
                // animation: 'glow 3s infinite alternate',
              }}
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
        <div className="lg:w-2/3 md:w-2/3 w-full space-y-6 px-4 lg:text-start md:text-start text-center lg:-mt-10 md:-mt-10 -mt-20">
          {achievements.map((item, index) => (
            <a 
              key={index} 
              href="#" 
              className="block hover:text-blue-300 text-white hover:text-blue-200 transition-colors duration-300 mt-10 lg:ml-20 md:ml-20 lg:text-xl md:text-xl text-sm"
            >
              {item.prize} <span className="text-blue-300">↗</span>
            </a>
          ))}
        </div>
        <div className="w-80 relative h-80 rounded-2xl lg:hidden md:hidden block mt-10 lg:mt-0 md:mt-0"
        style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFFFFF)' }}>
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="absolute"
              style={{
                top: positions[index % positions.length].top,
                left: positions[index % positions.length].left,
                width: positions[index % positions.length].width,
                height: positions[index % positions.length].height,
                // filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 1)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.8))',
                // animation: 'glow 3s infinite alternate',
              }}
            >
              <img 
                src={item.logo} 
                alt={item.name} 
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes glow {
          0% {
            filter: drop-shadow(0 0 40px rgba(255, 255, 255, 1)) drop-shadow(0 0 80px rgba(255, 255, 255, 0.8));
          }
          100% {
            filter: drop-shadow(0 0 60px rgba(255, 255, 255, 1)) drop-shadow(0 0 100px rgba(255, 255, 255, 0.8));
          }
        }
        .glow-effect {
          transition: filter 0.3s ease-in-out;
        }
        .glow-effect:hover {
          filter: drop-shadow(0 0 70px rgba(255, 255, 255, 1)) drop-shadow(0 0 120px rgba(255, 255, 255, 0.9)) !important;
        }
      `}</style>
    </div>
  );
};

export default WinnersPage;