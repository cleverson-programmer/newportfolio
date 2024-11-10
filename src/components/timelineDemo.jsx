 
import { Timeline } from "./ui/timeline";
import VerifiedIcon from '@mui/icons-material/Verified';
import image1 from '../assets/SamsungProjectImages/iPad1.jpeg'
import image2 from '../assets/SamsungProjectImages/desktop.jpeg'
import image3 from '../assets/SamsungProjectImages/iphone14.jpeg'
import image4 from '../assets/SamsungProjectImages/iPad2.jpeg'
import image5 from '../assets/aestheticOfMan.png'
import image6 from '../assets/aestheticOfManDesktop.png'
import image7 from '../assets/NewsWorldImages/macbookPro.jpeg'
import image8 from '../assets/NewsWorldImages/aiPadAir.jpeg'
import image9 from '../assets/ShopPizza/menu.png'
import image10 from '../assets/ShopPizza/adicionar.png'
import image11 from '../assets/ShopPizza/carrinho.png'
import image12 from '../assets/ShopPizza/account.png'

export function TimelineDemo() {
  const data = [
    {
      title: "PROJECTS",
      content: (
        <div id="samsung" className=" bg-[#040E1E]">
          <p className="text-[#F0F6FC] dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
            Responsive page inspired by the Samsung website.
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image1}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image2}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image3}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image4}
              alt="startup template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2024",
      content: (
        <div id="aesthetic">
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
             Automotive aesthetics company landing page
          </p>
          <p className="text-white dark:text-neutral-200 text-xs md:text-sm font-normal mb-6">
          News website project that brings real news from around the world through an API. Provides information on the weather, date, and euro and dollar exchange rates
          </p>
          <div id="newsworld" className="grid grid-cols-2 gap-4">
            <img
              src={image5}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image6}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image7}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image8}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Technologies",
      content: (
        <div>
          <p className="font-bold text-neutral-500 dark:text-neutral-500 text-xs md:text-sm  mb-4">
          My main technologies
          </p>
          <div id="technologies" className="mb-8">
            <div className="flex gap-2 items-center text-[#F0F6FC] dark:text-neutral-300 text-xs md:text-sm">
              <VerifiedIcon
              sx={{
                color: 'green',
              }}
              /> Javascript and libraries
            </div>
            <div className="flex gap-2 items-center text-[#F0F6FC] dark:text-neutral-300 text-xs md:text-sm">
            <VerifiedIcon
              sx={{
                color: 'green',
              }}
              /> React with libraries and utilities like Jest, Material UI, Acertinity, Styled Components
            </div>
            <div className="flex gap-2 items-center text-[#F0F6FC] dark:text-neutral-300 text-xs md:text-sm">
            <VerifiedIcon
              sx={{
                color: 'green',
              }}
              /> Design and style with Figma, Sass, Tailwind, Bootstrap and CSS
            </div>
            <div className="flex gap-2 items-center text-[#F0F6FC] dark:text-neutral-300 text-xs md:text-sm">
            <VerifiedIcon
              sx={{
                color: 'green',
              }}
              /> Frontend database knowledge such as Firebase, MongoDB and MySQL
            </div>
            <div className="flex gap-2 items-center text-[#F0F6FC] dark:text-neutral-300 text-xs md:text-sm">
            <VerifiedIcon
              sx={{
                color: 'green',
              }}
              /> Code and package management tools like Git, GitHub, NPM, and YARN
            </div>

            <div className="flex gap-2 items-center pl-8 text-[#F0F6FC] dark:text-neutral-300 text-xs md:text-sm">
              More about my technologies and knowledge on my resume
            </div>

            <div id="nossapizza" className="flex gap-2 mt-10 items-center pl-8 text-[#F0F6FC] dark:text-neutral-300 text-xs md:text-sm">
              <p>Pizzeria virtual store project. With login flow, data registration and order selection.</p>
              <a className="text-blue-700" target="_blank" href="https://bdclients-5f740.web.app/">Visit the website</a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={image9}
              alt="hero template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image10}
              alt="feature template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image11}
              alt="bento template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
            <img
              src={image12}
              alt="cards template"
              width={500}
              height={500}
              className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}