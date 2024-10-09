import { useEffect, useState } from "react";

export default function useResizable() {
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return { width };
}
