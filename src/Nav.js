import "./Nav.css";
function Nav() {
  return (
    <nav className="nav">
      <div className="links">
        <ul class="nav-links">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Contacts</li>
          <li className="nav-item">
            <h6>Landie</h6>
          </li>
          <li className="nav-item">
            <button className="buy-btn">Buy Now!</button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Nav;
