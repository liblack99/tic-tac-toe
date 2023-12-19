import React, { useEffect } from "react";

const TizaCursor = () => {
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const light = document.querySelector(".light");
      const mouseX = e.pageX;
      const mouseY = e.pageY;

      if (light) {
        light.style.left = mouseX + "px";
        light.style.top = mouseY + "px";
        light.style.opacity = 1;
      }
    });
  }, []);

  return <div class="light"></div>;
};

export default TizaCursor;
