import Nav from "./Nav";
import "./Hero.css";
import group from "./IMGS/Group.png";
function Hero() {
  return (
    <div className="Hero-page">
      <Nav />
      <div className="Hero-content">
        <div className="Hero-context">
          <h3>Introduce Your Product Quickly and Effectively </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>
        </div>
        <button className="purchase-btn">Purchase UI Kit</button>
        <button className="learn-btn">Learn More</button>
      </div>
      <div className="path">
        <div className="group">
          <img src={group} />
        </div>
      </div>
    </div>
  );
}
export default Hero;
