import React from "react";
import bg from "../assets/back.png";
function Landing() {
  return (
    <div className="main-surround bg-[#FCFCFC] w-full h-screen flex items-center justify-center">
      <div className="inner-container w-[98%] h-[96%] absolute ">
        <div className="bg-img h-[100%] w-[100%] bg-center bg-cover z-0 absolute right-[1px] flex items-end flex-row rounded-xl "style={{ backgroundImage: `url(${bg})` }}>


          <div className='text-container  font-["mona"] z-[2] w-[50%]  h-[40%] font-["mona"] '>
            <svg width="25" height="25">
              <path d="M0,0 L0,25 L25,25 A25,25 0 0,1 0,0 Z" fill="white" />
            </svg>

            <div className=" flex flex-row items-end" >

            <div className="text-1 w-[50%] h-[40%] bg-[#FCFCFC] flex flex-row items-center gap-4 rounded-tr-3xl text-4xl w-[40%] pt-1  px-4">
              <div className="button rounded-[50px] border-2  flex justify-center w-[30%] border-blue-200 text-sm p-[0.5vw]">Medical</div>
              <div className="text text-sm"><p>Stay Healthy with MediId</p></div>
            </div>
            
            <svg width="25" height="25">
  <path d="M0,0 L0,25 L25,25 A25,25 0 0,1 0,0 Z" fill="white" />
            </svg>
            </div>

        <div className=" h-[40%] flex flex-row items-end ">
            <div className="text-1  px-4 text-[6vw] w-[65%] bg-[#FCFCFC] rounded-tr-3xl  h-[100%]">
              Meditation
            </div>
            <div>
            <svg width="25" height="25">
  <path d="M0,0 L0,25 L25,25 A25,25 0 0,1 0,0 Z" fill="white" />
            </svg>
            
  </div>
        </div>
            
        <div className=" h-[40%] flex flex-row items-end">
            <div className="text-1  px-4 text-[6vw] w-[85%] bg-[#FCFCFC] rounded-tr-3xl  h-[100%]">
              and Medicine
            </div>
            <div>
            <svg width="30" height="30">
  <path d="M0,0 L0,25 L25,25 A25,25 0 0,1 0,0 Z" fill="white" />
            </svg>
            
  </div>
        </div>
            
          </div>


          <div className="w-[50%] absolute flex justify-end items-end font-[mona] right-0 z-2 h-[100%]"> 
            <div className="w-[40%] rounded-xl px-4 py-4 border-2 mr-[4vw] backdrop-blur-sm mb-[2vw] h-[40%]">
                <div className="head h-[30%] w-[80%] font-bold text-lg"><h2>Revolutionise Healthcare with MediID</h2></div>
                <div className="para"><p>Securely access and share your complete medical history in one unified platform. Improve patient care, streamline communication, and take control of your health with MediID. Your health, your data, one place.</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
