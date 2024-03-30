import { useRef, useEffect } from "react";

function useScrollToEnd(refDependencies) {
  const ref = useRef(null);

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [refDependencies]);

  return ref;
}

export default useScrollToEnd;
