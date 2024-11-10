import { WobbleCard } from "./ui/wobble-card";
import imageScripts from "../assets/imagesScripts/imageScript1.png"
import javascriptcode2 from "../assets/imagesScripts/javascriptcode2.png"

export function WobbleCardDemo() {
  return (
    (<div
      className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full bg-purple-800 min-h-[500px] lg:min-h-[300px]"
        className="">
        <div className="max-w-xs">
          <h2
            className="text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            React with the use of hooks, libraries and states
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
          useState, useEffect, useContext, Redux and more...
          </p>
        </div>
        <img
          src={imageScripts}
          width={600}
          height={600}
          alt="linear demo image"
          className="absolute -right-4 lg:-right-[40%] grayscale filter -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
      <WobbleCard containerClassName="col-span-1 min-h-[300px]">
        <h2
          className="max-w-80  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
          Design and styling tools
        </h2>
        <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            Knowledge of UI and UX using design patterns
        </p>
      </WobbleCard>
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-3 bg-blue-900 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
        <div className="max-w-sm">
          <h2
            className="max-w-sm md:max-w-lg  text-left text-balance text-base md:text-xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
            Vanilla Javascript, with the new ECMA SCRIPT updates
          </h2>
          <p className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
            async/await, dinamyc import, nullish coalescing operator, logical or/and assignment, ternary operator,Immutable Array Methods and more...
          </p>
        </div>
        <img
          src={javascriptcode2 }
          width={600}
          height={600}
          alt="linear demo image"
          className="absolute -right-10 md:-right-[40%] lg:-right-[20%] -bottom-10 object-contain rounded-2xl" />
      </WobbleCard>
    </div>)
  );
}
