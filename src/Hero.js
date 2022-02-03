import Nav from "./Nav";
import "./Hero.css";
import group from "./IMGS/Group.png";
function Hero() {
  return (
    <div className="Hero">
      <Nav />
      <header className="row">
        <div className="column">
          <div className="Hero-context">
            <div className="Hero-para">
              <h3>Introduce Your Product Quickly and Effectively </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim.
              </p>
            </div>
            <div className="context-btn">
              <a className="btn btn-full" href="#">
                Purchase UI Kit
              </a>
              <a className="btn btn-ghost" href="#">
                Learn More
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <img className="group" src={group} />
        </div>
      </header>
    </div>
  );
}
export default Hero;
