/* eslint-disable react/prop-types */
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../lib/utils";

import project1 from '../assets/SamsungProjectImages/ipad1.jpeg'
import project2 from '../assets/aestheticOfMan.png'
import project3 from '../assets/NewsWorldImages/macbookPro.jpeg'
import project4 from '../assets/ShopPizza/adicionar.png'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import ArticleIcon from '@mui/icons-material/Article';
import InfoIcon from '@mui/icons-material/Info';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';

export function NavbarDemo() {
  return (
    (<div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>)
  );
}

function Navbar({
  className
}) {
  const [active, setActive] = useState(null);
  return (
    (<div
      className={cn("fixed top-10 inset-x-0 mx-auto z-50 max-w-[370px] md:max-w-[672px] ", className)}>
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Contacts">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="https://wa.me/553399373400"><WhatsAppIcon/> Whatsapp</HoveredLink>
            <HoveredLink href="https://mail.google.com/mail/?view=cm&fs=1&to=cleverson.github@gmail.com"><EmailIcon/> Email</HoveredLink>
            <HoveredLink href="https://www.linkedin.com/in/cleverson-resende/"><LinkedInIcon/> Linkedin</HoveredLink>
            <HoveredLink href="https://github.com/cleverson-programmer"><GitHubIcon/> GitHub</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Projects">
          <div className="text-sm grid grid-cols-1 sm:grid-cols-2 gap-10 p-4 overflow-y-auto max-h-[400px]">
            <ProductItem
              title="Samsung"
              href="#samsung"
              src={project1}
              description="Inspired by the Samsung website" />
            <ProductItem
              title="Aesthetic of Man"
              href="#aesthetic"
              src={project2}
              description="Automotive aesthetics company landing page" />
            <ProductItem
              title="News World"
              href="#newsworld"
              src={project3}
              description="Real news website" />
            <ProductItem
              title="Nossa Pizza"
              href="#nossapizza"
              src={project4}
              description="Virtual pizzeria store with login and order flow" />
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Resume">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="#about"><InfoIcon/> About-me</HoveredLink>
            <HoveredLink href="#curriculum"><ArticleIcon/> Curriculum</HoveredLink>
            <HoveredLink href="#technologies"><LaptopChromebookIcon/> Technologies</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>)
  );
}
