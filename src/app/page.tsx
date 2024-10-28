"use client";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import Ripple from "@/components/ui/ripple";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-8 relative">
        <div className="text-2xl font-bold">mnmlst.</div>
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li><a href="#" className="hover:opacity-70">HOME</a></li>
            <li><a href="#" className="hover:opacity-70">PRODUCT</a></li>
            <li><a href="#" className="hover:opacity-70">STORE</a></li>
            <li><a href="#" className="hover:opacity-70">ABOUT US</a></li>
          </ul>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="space-y-2">
            <span className={`block w-8 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-8 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
          </div>
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-white z-10 md:hidden
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}>
          <div className="flex flex-col items-center justify-center h-full">
            <ul className="flex flex-col gap-8 text-center text-xl">
              <li><a href="#" className="hover:opacity-70">HOME</a></li>
              <li><a href="#" className="hover:opacity-70">PRODUCT</a></li>
              <li><a href="#" className="hover:opacity-70">STORE</a></li>
              <li><a href="#" className="hover:opacity-70">ABOUT US</a></li>
            </ul>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 grid grid-cols-1 md:grid-cols-3 items-center px-8 md:px-16 gap-8 max-w-7xl mx-auto">
        {/* Left content */}
        <div className="max-w-md order-3 md:order-none flex flex-col items-center md:items-start md:pl-0 md:justify-self-start">
          <p className="mb-6 text-lg text-center md:text-left">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Vestibulum ultrices fi......
          </p>
          <RainbowButton>
            Read More
          </RainbowButton>
        </div>

        {/* Center content - Yellow circle and profile */}
        <div className="relative w-full aspect-square order-1 md:order-none">
          {/* Yellow circle background */}
          <div className="absolute left-[55%] top-1/2 -translate-x-1/2 -translate-y-1/2 w-[42%] aspect-square">
            <div className="w-full h-full  rounded-full relative">
              <Ripple 
                
                mainCircleOpacity={.3}
                numCircles={2}
                className="[mask-image:none]"
              />
            </div>
          </div>
          
          {/* Profile image */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] md:w-[400px]">
            <Image
              src="/profile.png"
              alt="Profile"
              width={800}
              height={1600}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </div>

        {/* Right content - Slogan */}
        <div className="flex items-center justify-center order-2 md:order-none md:justify-self-end">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center md:text-right">
            less is<br />more.
          </h1>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex justify-between items-center p-8">
        <div className="flex gap-4">
          <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80">
            <FaInstagram size={18} />
          </a>
          <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80">
            <FaTwitter size={18} />
          </a>
          <a href="#" className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:opacity-80">
            <FaWhatsapp size={18} />
          </a>
        </div>
        <div>Arlington Heights, IL</div>
      </footer>
    </div>
  );
}
