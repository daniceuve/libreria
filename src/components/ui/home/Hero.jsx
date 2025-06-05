import Button from 'react-bootstrap/Button';

const Hero = ({title}) => {
  return (
    <section className="hero d-flex flex-row justify-content-between position-relative" id="inicio">
      <div className="hero_content d-flex flex-column justify-content-center position-relative flex-grow-1 p-3 text-center">
        <h1 className="text-left position-relative mb-1">{title}</h1>
        <Button id="heroButton">Explorar</Button>
        <canvas id="circleCanvas"></canvas>
      </div>
    </section>
  );
};

export default Hero;
