import { useEffect, useRef, useState } from "react";

function useParentProps<T extends HTMLElement>() {
  const parentRef = useRef<any>(null);
  const [parentProps, setParentProps] = useState<{
    width: number;
    height: number;
    top: number;
    right: number;
    left: number;
    bottom: number;
  }>({
    right: 0,
    width: 0,
    height: 0,
    top: 0,
    left: 0,
    bottom: 0,
  });
  useEffect(() => {
    function handleResize() {
      if (!parentRef || !parentRef.current) return;
      setParentProps({
        width: parentRef.current.offsetWidth,
        height: parentRef.current.offsetHeight,
        top: parentRef.current.offsetTop,
        right: parentRef.current.offsetLeft + parentRef.current.offsetWidth,
        left: parentRef.current.offsetLeft,
        bottom: parentRef.current.offsetHeight + parentRef.current.offsetTop,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, [parentRef]); // Empty array ensures that effect is only run on mount

  return { ref: parentRef, parentProps };
}

export default useParentProps;
