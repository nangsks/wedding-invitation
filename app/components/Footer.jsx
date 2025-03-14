import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";

const Footer = ({ isDarkMode, setIsDarkMode }) => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image
          src={isDarkMode ? assets.logo_dark : assets.logo}
          alt="logo-footer"
          className="w-36 mx-auto mb-2 cursor-pointer"
        />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt="email"
            className="w-6"
          />
          nangtech.dev@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-8 py-6">
        <p>
          &copy; {year}
          <span className="font-Outfit font-bold text-gray-600 cursor-pointer dark:text-white dark:bg-transparent">
            {" "}
            Nang Tech
          </span>
          . All rights reserved.
        </p>
        <ul className="flex items-center gap-4 justify-center mt-4 sm:mt-0">
          <li className="flex cursor-pointer">
            <a target="_blank" href="https://github.com/nangsks" />
            <Image
              src={isDarkMode ? assets.github_dark : assets.github}
              alt="GitHub"
              width={30}
              height={30}
            />
          </li>
          <li className="flex cursor-pointer">
            <a target="_blank" href="https://www.facebook.com/sam.nang333" />
            <Image
              src={isDarkMode ? assets.facebook_dark : assets.facebook}
              alt="Facebook"
              width={30}
              height={30}
            />
          </li>
          <li className="flex cursor-pointer">
            <a target="_blank" href="https://www.yourwebsite.com" />
            <Image
              src={isDarkMode ? assets.x_dark : assets.x_logo}
              alt="X-Logo"
              width={30}
              height={30}
            />
          </li>
          <li className="flex cursor-pointer">
            <a target="_blank" href="https://www.yourwebsite.com" />
            <Image
              src={isDarkMode ? assets.telegram_dark : assets.telegram}
              alt="Telegram-Logo"
              width={30}
              height={30}
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
