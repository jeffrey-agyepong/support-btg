class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<header>
<div class="navbar-fixed">
    <nav class="nav-center" role="navigation" id="header">
      <div class="nav-wrapper container">
        <a href="https://beyondthegravemusic.com" class="logo">BEYOND THE GRAVE</a>

        <ul class="right hide-on-med-and-down header-li">
          <li> <a href="index.html">Bands</a></li>
          <li><a href="https://www.beyondthegravemusic.com/tag/Interviews/">Interviews</a></li>
          <li><a href="https://www.beyondthegravemusic.com/tag/Reviews/">Reviews</a></li>
          <li><a href="https://www.beyondthegravemusic.com/tag/News/">News</a></li>
          <!--<li><a href="https://store.beyondthegravemusic.com">Store</a></li>-->
          <li><a href="https://www.beyondthegravemusic.com/submit/">Contact</a></li>
        <li><a href="hhttps://bands.beyondthegravemusic.com/support.html">Support</a></li>
          <li><a href="https://www.hire.beyondthegravemusic.com">Hire</a></li>
        </ul>

        <ul id="nav-mobile" class="sidenav black center header-li">
          <li><a href="index.html" class="white-text">Bands</a></li>
          <li><a href="https://www.beyondthegravemusic.com/tag/Interviews/" class="white-text">Interviews</a></li>
          <li><a href="https://www.beyondthegravemusic.com/tag/Reviews/" class="white-text">Reviews</a></li>
          <li><a href="https://www.beyondthegravemusic.com/tag/News/" class="white-text">News</a></li>
            <!--<li><a href="https://store.beyondthegravemusic.com" class="white-text">Store</a></li>-->
          <li><a href="https://www.beyondthegravemusic.com/submit/" class="white-text">Contact</a></li>
          <li><a href="https://bands.beyondthegravemusic.com/support.html" class="white-text">Support</a></li>
          <li><a href="https://www.hire.beyondthegravemusic.com" class="white-text">Hire</a></li>
        </ul>
        <a href="#" data-target="nav-mobile" class="sidenav-trigger header_toggle">
          <span></span>
          <span></span>
          <span></span>
        </a>
      </div>
    </nav>
  </div>
</header>
`;
  }
}

customElements.define("header-component", Header);
