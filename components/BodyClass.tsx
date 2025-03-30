"use client";

import { useEffect } from "react";

function BodyClass({ className }: { className: string }) {
  useEffect(() => {
    document.body.classList.add(className);
    return () => {
      document.body.classList.remove(className);
    };
  }, [className]);

  return null; // This component doesn't render anything
}

export default BodyClass;
