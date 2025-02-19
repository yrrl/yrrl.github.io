import background from './background.jpg'

function Hero() {
  return (
    <div 
      className="h-screen flex items-center justify-center bg-cover bg-center"
      style={{ 
        backgroundImage: `url(${background})`,
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        backgroundBlendMode: 'overlay'
      }}
    >
      <div className="text-center text-white z-10">
        <h1 className="text-6xl font-bold mb-4 text-blue-400">John Lerry Fule</h1>
        <h2 className="text-2xl mb-6 text-gray-300">
          <span className="typewriter">Intern at QRIO IT Solutions</span>
        </h2>
        <style jsx>{`
          .typewriter {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 0.15em solid orange;
            animation: typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0; }
            to { width: 65%; }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent; }
            50% { border-color: orange; }
          }
        `}</style>
        
      </div>
    </div>
  )
}

export default Hero 