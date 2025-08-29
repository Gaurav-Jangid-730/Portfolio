import { useEffect, useRef } from "react";
import Typed from "typed.js";

function RoleTyping() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Hacker",
        "Cybersecurity Expert",
        "Penetration Tester",
        "Bug Hunter",
        "Security Inspector",
        "Cybersecurity Analyst",
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    return () => {
      typed.destroy(); // cleanup
    };
  }, []);

  return <span ref={el} className="role"></span>;
}

export default RoleTyping;
