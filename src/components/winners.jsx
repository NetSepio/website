import React from 'react';

const WinnersPage = () => {
  const achievements = [
    { logo: '/Solana.svg', name: 'Solana', prize: 'Grand Prize at Solana Radar Hackathon, Malaysia', link: 'https://arena.colosseum.org/projects/explore/netsepio?previous=L3Byb2plY3RzL2V4cGxvcmU_c2VlZD1iNGI0ZTYwYzViNGE0NzkwJnNlYXJjaD1uZXRzZXA' },
    { logo: '/ivs.png', name: 'IVS CRYPTO', prize: 'Grand Prize at IVS Crypto Demoday, Japan', link: '#' },
    { logo: 'aptos.png', name: 'APTOS', prize: 'Grand Prize at Aptos Hackathon, Singapore', link: '#' },
    { logo: 'soonami.png', name: 'soonami.io', prize: 'On the Fast Track Prize at Soonami Venthuron', link: '#' },
    { logo: 'akindo.png', name: 'AKINDO', prize: 'Several Prizes at Akindo WaveHack', link: '#' },
    { logo: 'filecoin.png', name: 'Filecoin', prize: 'Grand Prize at Filecoin Browsers 3000 Hackathon', link: '#' },
  ];

  const positions = [
    { top: '0%', left: '50%', width: '190px', height: '120px' },
    { top: '15%', left: '10%', width: '120px', height: '80px' },
    { top: '30%', left: '50%', width: '170px', height: '80px' },
    { top: '50%', left: '10%', width: '180px', height: '55px' },
    { top: '70%', left: '55%', width: '130px', height: '40px' },
    { top: '75%', left: '5%', width: '160px', height: '80px' },
    
  ];

  return (
    <div className="bg-[#040A20] text-white w-full py-20 px-4 md:py-40">
      <h1 className="text-3xl md:text-4xl lg:text-5xl text-center mb-10 md:mb-20">
        Join the Winners!
      </h1>
      
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8">
        {/* Desktop/Tablet Logo Display */}
        <div 
          className="w-full max-w-[320px] md:max-w-[420px] relative h-[320px] md:h-[400px] rounded-2xl hidden md:block"
          style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFFFFF)' }}
        >
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="absolute transition-transform hover:scale-110"
              style={{
                top: positions[index % positions.length].top,
                left: positions[index % positions.length].left,
                width: positions[index % positions.length].width,
                height: positions[index % positions.length].height,
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

        {/* Achievement Links */}
        <div className="w-full  space-y-4 md:space-y-6 text-center md:text-start">
          {achievements.map((item, index) => (
            <a 
              key={index} 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block hover:text-blue-300 text-white font-normal transition-colors duration-300 
                       text-sm sm:text-base md:text-lg lg:text-2xl xl:text-[30px]
                       md:ml-8 lg:ml-12"
            >
              {item.prize}<span className="text-[#13D9C6]">↗</span>
            </a>
          ))}
        </div>

        {/* Mobile Display */}
        <div 
          className="w-full max-w-[280px] relative h-[280px] rounded-2xl md:hidden mt-8"
          style={{ background: 'linear-gradient(to bottom, #FFFFFF, #FFFFFF)' }}
        >
          {achievements.map((item, index) => (
            <div 
              key={index} 
              className="absolute transition-transform hover:scale-110"
              style={{
                top: positions[index % positions.length].top,
                left: positions[index % positions.length].left,
                width: `${parseInt(positions[index % positions.length].width) * 0.7}px`,
                height: `${parseInt(positions[index % positions.length].height) * 0.7}px`,
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