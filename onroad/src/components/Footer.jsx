import { pageLinks, socialLinks } from "../data";
import PageLink from "./PageLink";
import SocialLink from "./SocialLink";
function Footer() {
  return (
    <footer class="section footer">
      <ul class="footer-links">
        {pageLinks.map((page) => {
          return <PageLink {...page} className="footer-link"/>;
        })}
      </ul>
      <ul class="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink {...link} />;
        })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
  );
}

export default Footer;
