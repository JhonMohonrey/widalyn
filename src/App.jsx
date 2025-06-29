import React from 'react';
import Header from './Header';
import tools from './assets/298718717.png'
import MainContainer from './MainContainer';
import Contact from './Contact';
import { Analytics } from '@vercel/analytics/react';

function App(props) {
  const warning = () => {
    return (
      <div className='border-2 flex items-center justify-center border-black h-[340px] bg-blue-400 flex-col'>
        <p className='font-bold text-2xl text-center text-white'>This section is currently under development</p>
        <img className=' className="w-full max-w-[100px] sm:max-w-[120px] md:max-w-[120px] lg:max-w-[120px] xl:max-w-[120px] object-contain my-2"
  src={tools}
  alt="tools"' src={tools} alt="tools" />
        <p className="text-white my-2 text-sm sm:text-base font-medium tracking-wide">Developer: <span className="text-white font-semibold">Jhon Ramos</span>
        </p>
        <span className="text-white font-semibold text-center text-[18px] block mt-1">
            This Website is made in React.js 
        </span>
      </div>
    )
  }
  return (
    <div className="scroll-smooth">
      <Header />
      <MainContainer id="main" />
      {warning()}
      {warning()}
      {warning()}
      {warning()}
      <Contact id="contact" />
      {warning()}
      {warning()}
      {warning()}
      <Analytics />
    </div>
  );
}

export default App;