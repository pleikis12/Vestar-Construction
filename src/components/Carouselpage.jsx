import Carousel from "react-bootstrap/Carousel";
import {
  Nightclub1,
  Nightclub2,
  Nightclub3,
  Nightclub4,
  nightclub5,
  nightclub6,
  nightclub7,
  nightclub8,
  nightclub9,
} from "../assets";

const Carouselpage = () => {
  return (
    <div className="pt-4 data-pause-hover">
      <Carousel slide={false}>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={Nightclub1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={Nightclub2}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={Nightclub3}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={Nightclub4}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={nightclub5}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={nightclub6}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={nightclub7}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={nightclub8}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={5500}>
          <img
            className="h-[40rem] w-[60rem]"
            src={nightclub9}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carouselpage;
