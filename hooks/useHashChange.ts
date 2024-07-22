import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { NAVIGATIONS } from "@/configs/common";
import { usePathname } from "next/navigation";

const useHashChange = () => {
  const [locationHash, setLocationHash] = useState("");
  const pathname = usePathname();

  const params = useParams();

  const updateHashOnScroll = () => {
    try {
      if (window.scrollY < 20) {
        history.replaceState("", document.title, window.location.pathname);
        setLocationHash("");
        return;
      }
      NAVIGATIONS.forEach((z) => {
        try {
          const dom = document.getElementById(z.id);
          if (dom) {
            const rect = dom?.getBoundingClientRect() as any;
            const top = z.id === "contact" ? window.innerHeight - 350 : 120;
            if (rect.top > 0 && rect.top < top) {
              history.replaceState(undefined, "", `#${z.id}`);
              setLocationHash(`/${z.id}`);
            }
          }
        } catch (e) {
          // console.error(e)
        }
      });
    } catch (e) {
      // console.error(e);
    }
  };

  useEffect(() => {
    setLocationHash(`/${window.location.hash}`);
  }, [params]);

  // useEffect(() => {
  //   window.addEventListener("scroll", updateHashOnScroll);
  //   return () => {
  //     window.removeEventListener("scroll", updateHashOnScroll);
  //   };
  // }, [pathname]);

  return locationHash;
};

export default useHashChange;
