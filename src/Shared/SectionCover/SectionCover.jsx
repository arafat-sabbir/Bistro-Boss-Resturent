import { Parallax } from "react-parallax";

const SectionCover = ({ img, title,subtitle }) => {
  return (
    <div>
      <Parallax className="rounded-xl"
        blur={{ min: -70, max: 70 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-20 "></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" bg-black p-20 bg-opacity-50">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">
               {subtitle}
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default SectionCover;
