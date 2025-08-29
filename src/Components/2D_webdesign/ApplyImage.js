import { useEffect, useState } from "react";

export function NavLogo() {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark-mode")
  );

  useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark-mode"));
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    update(); // ensure state sync immediately
    return () => observer.disconnect();
  }, []);

  const logoSrc = isDark
    ? "./images/userAsset/NavLogo_inverted.jpg"
    : "./images/userAsset/NavLogo.jpg";

  return <img src={logoSrc} alt="logo" className="nav-logo" />;
}

export function Profile({ Width , Height }) {
    const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark-mode")
  );

    useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark-mode"));
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    update(); // ensure state sync immediately
    return () => observer.disconnect();
  }, []);

  const imgSrc = isDark ? "./images/userAsset/Profile_DARK.png" : "./images/userAsset/Profile_LIGHT.png";
  return <div className="user-image"><img src={imgSrc} alt="profile" width={Width} height={Height}/></div>;
}

export function Blob() {
    const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark-mode")
  );

    useEffect(() => {
    const update = () => setIsDark(document.documentElement.classList.contains("dark-mode"));
    const observer = new MutationObserver(update);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    update(); // ensure state sync immediately
    return () => observer.disconnect();
  }, []);
  
  const imgSrc = isDark ? "./images/userAsset/blob_vector_dark.png" : "./images/userAsset/blob vector.png";
  return <img src={imgSrc} className="blob-style" alt="" />;
}