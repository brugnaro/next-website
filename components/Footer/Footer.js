import { useTranslation, getInitialProps } from 'react-i18next';
import '../../pages/i18n';
import Link from 'next/link';

const Footer = () => {
  const { t, i18n } = useTranslation();

  return <footer className="footer-light">
    <section className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-4 sm-m-15px-tb md-m-30px-b">
            <h4 className="font-alt">{t('footerAboutUs')}</h4>
            <p className="footer-text">
              {t('footerTheCheckerIsAnAccurate')}
            </p><br />{t('footerPhoneNumber')}
            <ul className="social-icons">
              <li><a className="facebook" target='blank' href="https://www.facebook.com/thecheckerco/"><i className="fab fa-facebook-f"></i></a></li>
              <li><a className="twitter" target='blank' href="https://twitter.com/thecheckerco"><i className="fab fa-twitter"></i></a></li>
              <li><a className="linkedin" target='blank' href="https://www.linkedin.com/company/thechecker.co/"><i className="fab fa-linkedin-in"></i></a></li>
              <li><a className="github" target='blank' href="https://github.com/thecheckerco"><i className="fab fa-github"></i></a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 sm-m-15px-tb">
            <h4 className="font-alt">{t('footerProduct')}</h4>
            <ul className="fot-link">
              <li><Link href="/#features"><a>{t('footerFeatures')}</a></Link></li>
              <li><Link href="/integrations"><a>{t('footerIntegrations')}</a></Link></li>
              <li><Link href="/#reviews"><a>{t('footerReviews')}</a></Link></li>
              <li><a href="#">{t('footerAffiliates')}</a></li>
              <li><a href="#">{t('footerServerStatus')}</a></li>
              <li><a href="#">{t('footerAPIDocs')}</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 sm-m-15px-tb">
            <h4 className="font-alt">{t('footerLegal')}</h4>
            <ul className="fot-link">
              <li><a href="#">{t('footerPrivacyGDPR')}</a></li>
              <li><a href="#">{t('footerTermsOfUse')}</a></li>
              <li><a href="#">{t('footerDataProtection')}</a></li>
              <li><a href="#">{t('footerAntiSpam')}</a></li>
              <li><a href="#">{t('footerCookiePolicy')}</a></li>
              <li><a href="#">{t('footerTCGuarantee')}</a></li>
            </ul>
          </div>
          <div className="col-6 col-md-6 col-lg-2 sm-m-15px-tb">
            <h4 className="font-alt">{t('footerSolutions')}</h4>
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
  </footer>
};

export default Footer;