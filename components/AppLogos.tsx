import { getImageProps } from "next/image";

// The products' app icons on a neutral backdrop, in a light and a dark version that follow the
// visitor's appearance, the way the rest of the site does.
export default function AppLogos() {
  const common = {
    alt: "App icons of Kobe's products: Mochi, Director, LidLogic, Architecture Trainer and Ensemble",
    width: 720,
    height: 720,
    sizes: "(max-width: 860px) 26rem, 18rem",
    priority: true,
  };
  const {
    props: { srcSet: dark },
  } = getImageProps({ ...common, src: "/images/app-logos-dark.webp" });
  const { props: light } = getImageProps({ ...common, src: "/images/app-logos-light.webp" });

  return (
    <picture>
      <source media="(prefers-color-scheme: dark)" srcSet={dark} sizes={common.sizes} />
      {/* alt comes from getImageProps */}
      <img {...light} />
    </picture>
  );
}
