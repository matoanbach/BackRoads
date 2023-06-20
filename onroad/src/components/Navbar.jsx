import logo from "../images/logo.svg";
import {pageLinks, socialLinks} from "../data";
import SocialLink from "./SocialLink";
import PageLink from "./PageLink";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="nav-center">
        <div class="nav-header">
          <img src={logo} class="nav-logo" alt="backroads" />
          <button type="button" class="nav-toggle" id="nav-toggle">
            <i class="fas fa-bars"></i>
          </button>
        </div>
        <ul class="nav-links" id="nav-links">
          {pageLinks.map((page) => {
            return <PageLink {...page}/>
          })}
        </ul>

        <ul class="nav-icons">
          {
            socialLinks.map((link) => {
              return <SocialLink {...link}/>
            })
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
