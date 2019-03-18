import Link from 'next/link';

const Footer = () =>
  <footer className="footer-light">
    <section className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4 className="font-alt">About Us</h4>
            <p className="footer-text">
              TheChecker is an accurate, fast and affordable email verification service that helps you to get rid of email bounces and increase your email marketing campaigns ROI.
                </p><br />+1 (888) 964-2250
              <ul className="social-icons">
              <li><a className="facebook" target='blank' href="https://www.facebook.com/thecheckerco/"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="twitter" target='blank' href="https://twitter.com/thecheckerco"><i className="fab fa-twitter"></i></a></li>
              <li><a className="linkedin" target='blank' href="https://www.linkedin.com/company/thechecker.co/"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a className="github" target='blank' href="https://github.com/thecheckerco"><i className="fab fa-github"></i></a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 sm-m-15px-tb">
            <h4 className="font-alt">Product</h4>
            <ul className="fot-link">
              <li><Link href="/#features"><a>Features</a></Link></li>
              <li><Link href="/integrations"><a>Integrations</a></Link></li>
              <li><Link href="/#reviews"><a>Reviews</a></Link></li>
              <li><a href="#">Affiliates</a></li>
              <li><a href="#">Server Status</a></li>
              <li><a href="#">API Docs</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 sm-m-15px-tb">
            <h4 className="font-alt">Legal</h4>
            <ul className="fot-link">
              <li><a href="#">Privacy / GDPR</a></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Data Protection</a></li>
              <li><a href="#">Anti-Spam Policy</a></li>
              <li><a href="#">Cookie Policy</a></li>
              <li><a href="#">TC Guarantee</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 sm-m-15px-tb">
            <h4 className="font-alt">Solutions</h4>
            <ul className="fot-link">
              <li><a href="#">Enterprise</a></li>
              <li><a href="#">Sales Teams</a></li>
              <li><a href="#">Digital Agencies</a></li>
              <li><a href="#">E-commerces</a></li>
              <li><a href="#">SaaS Platforms</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 sm-m-15px-tb">
            <h4 className="font-alt">Compare</h4>
            <ul className="fot-link">
              <li><a href="#">TC vs. Neverbounce</a></li>
              <li><a href="#">TC vs. BriteVerify</a></li>
              <li><a href="#">TC vs. ZeroBounce</a></li>
              <li><a href="#">TC vs. Kickbox</a></li>
              <li><a href="#">TC vs. Bounceless.io</a></li>
              <li><a href="#">TC vs. EmailListVerify</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-copy">
          <div className="row">
            <div className="col-12">
              <p>1395 Brickell Ave. Suite 800, Miami, FL 33131</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </footer>;

export default Footer;