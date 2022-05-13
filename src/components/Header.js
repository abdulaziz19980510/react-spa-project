

function Header() {
    return (
        <nav className="header-color blue darken-1">
        <div className="nav-wrapper ">
          <a href="shop" className="brand-logo">React Shop</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            
            <li><a href="#">REPO</a></li>
          </ul>
        </div>
      </nav>
    )
}

export {Header};