
import { FlipWords } from "./ui/flip-words";

export function FlipWordsDemo() {
  const words = ["save", "share", "print", "beautiful", "modern"];

  return (
    (<div className="h-[10rem] flex justify-center items-center px-4">
      <div
        id="curriculum"
        className="text-2xl sm:text-4xl mx-auto text-center font-bold text-neutral-600 dark:text-neutral-400">
        My resume
        <FlipWords words={words} /> <br />
        Find out more about my skills
      </div>
    </div>)
  );
}
