import footerLogo from "../assets/logo-text.png";
import "../index.css";
const Footer = () => {
  return (
    <div className="container mx-auto">
      <footer className="footer sm:footer-horizontal text-base-content my-4 lg:my-12 px-4 pt-4 lg:pt-12">
        <aside>
          <img src={footerLogo} alt="" />
          <p className="text-primary-text mt-4">
            Curated tools, technologies, and resources for developers building
            <br />
            modern software.
          </p>
          <div className="flex gap-4 mt-4 text-primary-text font-semibold">
            <a href="">Github</a>
            <a href="">Twitter</a>
            <a href="">LinkedIn</a>
          </div>
        </aside>
        <nav className="space-y-2">
          <h6 className="text-footer-nav-title font-bold lg:mb-4">PRODUCT</h6>
          <a className="link link-hover text-primary-text text-sm">Home</a>
          <a className="link link-hover text-primary-text text-sm">
            Technologies
          </a>
          <a className="link link-hover text-primary-text text-sm">Projects</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="text-footer-nav-title font-bold lg:mb-4">COMPANY</h6>
          <a className="link link-hover text-primary-text text-sm">About</a>
          <a className="link link-hover text-primary-text text-sm">Contact</a>
          <a className="link link-hover text-primary-text text-sm">Careers</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="text-footer-nav-title font-bold lg:mb-4">LEGAL</h6>
          <a className="link link-hover text-primary-text text-sm">
            Privacy Policy
          </a>
          <a className="link link-hover text-primary-text text-sm">
            Terms of Service
          </a>
        </nav>
      </footer>
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-100 to-transparent"></div>
      <div className="flex justify-between items-center px-4 pt-4 lg:pb-8 text-footer-rights text-sm">
        <p>© 2026 Dev Stack. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="">Privacy</a>
          <a href="">Terms</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
