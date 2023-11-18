import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus
            sapiente qui vero necessitatibus, reprehenderit quos alias soluta
            vitae perferendis eius aspernatur officiis delectus eaque odit,
            omnis quisquam repellat quibusdam at?
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="herobg" className="img" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
