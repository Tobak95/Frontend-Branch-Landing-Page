import React from "react";
import course from "../assets/Course Website Landing Page Thumbnail 1.png";
import firstPhone from "../assets/first phone.png";
import secondPhone from "../assets/middle phone.png";
import lastPhone from "../assets/last phone.png";
import rectangleOne from "../assets/Rectangle.png";
import rectangleTwo from "../assets/Rectangle (1).png";
import mitochondria from "../assets/mitochondria.png";
import mitochondria2 from "../assets/mitochondria (2).png";
import vector1 from "../assets/Vector 135.png";
import vector2 from "../assets/Vector 137.png";
import vector3 from "../assets/Vector 139.png";
import vector4 from "../assets/Vector 140.png";

const MyRecentWorks = () => {
  //images for background
  const backgroundImages = [
    mitochondria,
    mitochondria2,
    vector1,
    vector2,
    vector3,
    vector4,
  ];

  // background pattern 
  const renderBackgroundPattern = () => {
    const cells = [];
    for (let i = 0; i < 144; i++) {
      const image = backgroundImages[i % backgroundImages.length];
      cells.push(
        <div
          key={i}
          className="flex items-center justify-center"
        >
          <img 
            src={image} 
            alt="" 
            className="w-5 h-5 object-contain"
          />
        </div>
      );
    }
    return cells;
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-8 h-full w-full p-8">
          {renderBackgroundPattern()}
        </div>
      </div>

      {/* content Container */}
      <div className="relative z-10 mx-auto w-11/12 container px-6 py-16">
        {/* Header */}
        <div className="text-start mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-8">
            My recent{" "}
            <span className="text-transparent bg-clip-text bg-[#00ADB5]">
              works
            </span>
          </h1>

          {/* filter Buttons*/}
          <div className="flex flex-wrap justify-start gap-4">
            <button className="px-6 py-3 rounded-full font-medium bg-[#00ADB5]">
              All
            </button>
            <button className="px-6 py-3 rounded-full font-medium bg-slate-800 text-gray-300">
              UI
            </button>
            <button className="px-6 py-3 rounded-full font-medium bg-slate-800 text-gray-300">
              UX
            </button>
            <button className="px-6 py-3 rounded-full font-medium bg-slate-800 text-gray-300">
              Web Design
            </button>
          </div>
        </div>

        {/* work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* work 1 */} 
          <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:scale-105">
            <div className="p-4 flex justify-center items-center h-64">
              <img 
                src={course} 
                alt="Course Website" 
                className="max-h-full max-w-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* work 2 */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:scale-105">
            <div className="p-4 flex flex-col justify-center items-center h-64 relative">
              <img 
                src={rectangleOne} 
                alt="Rectangle One" 
                className="max-h-40 max-w-full object-contain rounded-lg absolute top-20 left-0.5 z-10"
              />
              <img 
                src={rectangleTwo} 
                alt="Rectangle Two" 
                className="max-h-40 max-w-full object-contain rounded-lg absolute bottom-8"
              />
            </div>
          </div>

          {/* work 3 */}
          <div className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:transform hover:scale-105">
            <div className="p-4 flex justify-center items-center h-64 relative">
              <img 
                src={firstPhone} 
                alt="First Phone" 
                className="max-h-48 max-w-full object-contain absolute left-2 transform -rotate-6"
              />
              <img 
                src={secondPhone} 
                alt="Middle Phone" 
                className="max-h-52 max-w-full object-contain z-10"
              />
              <img 
                src={lastPhone} 
                alt="Last Phone" 
                className="max-h-48 max-w-full object-contain absolute right-2 transform rotate-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyRecentWorks;