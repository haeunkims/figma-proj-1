import "./Nav.css";
function Nav() {
  return (
    <nav className="nav">
      <ul class="main-nav">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
      {/* <ul className="landie">
        <li>Landie</li>
      </ul> */}
      <a className="btn-buy" href="#">
        Buy Now!
      </a>
    </nav>
  );
}
export default Nav;
