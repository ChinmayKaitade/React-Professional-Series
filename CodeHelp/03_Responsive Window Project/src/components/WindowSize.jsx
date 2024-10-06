import { useEffect, useState } from "react";

const WindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-8 text-5xl uppercase text-orange-400">Window Size</h1>
      <p className="mt-4 text-2xl text-stone-300">Width:{windowSize.width}px</p>
      <p className="mt-2 text-2xl text-stone-300">
        Height:{windowSize.height}px
      </p>
    </div>
  );
};

export default WindowSize;
