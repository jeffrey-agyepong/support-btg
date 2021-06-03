class Footer extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
<footer class="page-footer">
<div class="container">
  <div class="grid-container-1">
    <div class="col l3 s12">
    <h5 class="white-text center">About</h5>
      <p style="font-size:1rem;"> Beyond the Grave is an online magazine that focuses <b>primarily</b> on promoting underground Christian metal/hardcore bands.</p>
        </div>
        <div class="col l3 s12">
          <h5 class="white-text center">Support</h5>
          <p class="grey-text text-lighten-4 center">
          <a href="support.html" target="_blank" rel="noopener noreferrer"> <img height="36" src="dist/img/kofi.webp" alt=""/></a>
          </p>
        </div>
    <div class="col l3  s12">
    <h5 class="white-text center-align">Connect</h5>
    <div class="flex icons center-align">

      <span class="span"><a href="https://web.facebook.com/Beyondthegrave777" class="icon brands fab fa-facebook fa-3x"><span
            class="label"></span></a></span>
      <span class="span"><a href="https://www.instagram.com/beyond.the.grave_/" class="icon brands fab fa-instagram fa-3x"><span
            class="label"></span></a></span>
      <span class="span"><a href="https://www.youtube.com/channel/UCCXafO-fbIZnTHNoRlx2QWg"
         class="icon brands fab fa-youtube fa-3x"><span class="label"></span></a></span>

    </div>
    </div>
  </div>
</div>
<div class="footer-copyright left-align">
  <div class="container">
  <div class="footer_links">
  <span class="grey-text text-lighten-4 center-align" > © 2021 Beyond The Grave</span>

   <a class="grey-text text-lighten-4 center-align" href="https://beyondthegravemusic.com/privacy-policy.html">Privacy Policy</a>
   <a class="grey-text text-lighten-4 center" href="https://cwd.beyondthegravemusic.com/">Concise Web Designs</a>

   </div>
  </div>
</div>
</footer>`;
  }
}

customElements.define("footer-component", Footer);
