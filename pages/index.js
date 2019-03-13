import { useTranslation } from 'react-i18next';
import { Header } from '../components';
import './i18n';

export default () => {
  const { t, i18n } = useTranslation();

  return <div>
    <Header
      contactus={t('contactus')}
      en={() => i18n.changeLanguage('en')}
      pt={() => i18n.changeLanguage('pt')}
      integrations={t('integrations')}
      pricing={t('pricing')}
    />
    <main>
      <section id="home" className="home-banner-01">
        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col col-md-12 col-lg-6 col-xl-6 p-80px-tb md-p-30px-b sm-p-60px-t m-100px-t">
              <div className="home-text-center p-50px-r md-p-0px-r">
                <h1 className="font-alt">{t('themost')}</h1>
                <p>
                  Get rid of email bounces and bad email addresses with our proven high-quality yet affordable<b> email verification </b>
                  and<b> email list cleaning</b> solutions that improve your data quality and email marketing ROI.
                </p>
                <p>Trusted and rated <span>✮✮✮✮✮ </span> <b>4.8</b>/5 based on <a href="#reviews">200+ reviews</a>.</p>
                <a href="#" className="m-btn m-btn-theme2nd">Try For Free</a>
                <a href="#why" className="m-btn m-btn-white" data-text="Free Trial">Learn More</a>
              </div>
            </div>
            <div className="col-md-12 col-lg-6 col-xl-6 home-right m-50px-t md-m-0px-t">
              <div className="home-right-inner">
                <img src="static/img/email-verification-service-thechecker-screen.png" title="" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-12 col-xl-12">
                <div className="section-title">
                  <p><u>Trusted by 1,000's</u> of smart teams in <u>130+ countries</u></p>
                </div>
              </div>
              <div className="row">
                <div className="col-4 col-md-4 col-lg-2">
                  <div className="customers">
                    <img src="static/img/customers/email-verification-service-thechecker-customers-plesk.png" />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  <div className="customers">
                    <img src="static/img/customers/email-verification-service-thechecker-customers-spendesk.png" />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  <div className="customers">
                    <img src="static/img/customers/email-verification-service-thechecker-customers-glint.png" />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  <div className="customers">
                    <img src="static/img/customers/email-verification-service-thechecker-customers-ebanx.png" />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  <div className="customers">
                    <img src="static/img/customers/email-verification-service-thechecker-customers-wework.png" />
                  </div>
                </div>
                <div className="col-4 col-md-4 col-lg-2">
                  <div className="customers">
                    <img src="static/img/customers/email-verification-service-thechecker-customers-sage.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="why" className="section">
        <div className="container">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title">
                <h2 className="theme-after-bg">Why To Use Email Verification</h2>
                <p>Based on the last <u>100 million emails</u> we verified in 2018, <u>23,51% would bounce</u>.<br />Have you used an email list cleaning service recently?</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-shield"></i>
                </div>
                <h3 className="font-alt">Protect Sender Reputation</h3>
                <p>1 out of 5 emails is not delivered due to reputation problems related to IP and domains. Get protected by using the best email list cleaning service.</p>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-check"></i>
                </div>
                <h3 className="font-alt">Avoid Blockages by ESPs</h3>
                <p>A tiny ~5% bounce rate can get you blocked by the ESPs. Our single and bulk email list cleaning tool gets you protected to improve inbox deliverability.</p>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-bar-chart"></i>
                </div>
                <h3 className="font-alt">Increase Campaigns ROI</h3>
                <p>Emails validated through TheChecker`s email address checker promote superior deliverability to the inbox, convert more sales, and increase your campaigns ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-effect right p-40px-b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="feature-box-02">
                <label className="theme2nd-color">In-forms real-time email validation</label>
                <h3 className="m-20px-b font-alt">Get rid of the bad emails before they enter your list</h3>
                <p>Don't let misspelled and bad email addresses ruin your list quality and your sender reputation. Add our real-time email verification tool to any form on your website by just copying and pasting one line of code. It takes only a few seconds and requires no technical skills.</p>
                <a href="#">Install to verify email address online <i className="ti-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-md-6 sm-m-30px-t real-email">
              <img src="static/img/features/template.png" title="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-effect left p-40px-b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 sm-m-30px-t order-last order-md-first">
              <img src="static/img/features/email-verification-service-feature-2.png" title="" alt="" />
            </div>
            <div className="col-md-6">
              <div className="feature-box-02">
                <label className="theme2nd-color">Seamless integrations</label>
                <h3 className="m-20px-b font-alt">Connect with your favorite email marketing tool</h3>
                <p>TheChecker's email verification tool comes with powerful integrations that fit into your existing workflow. Import and export your lists with ease and consistently keep them clean.</p>
                <a href="#">Explore all integrations <i className="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-effect right p-40px-b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <div className="feature-box-02">
                <label className="theme2nd-color">Bulk email list verification</label>
                <h3 className="m-20px-b font-alt">Easily clean your current email lists and databases</h3>
                <p>If only 10% of the emails are bad, less than 44% will be delivered. Don't let bad emails ruin your inbox deliverability and your campaigns ROI.</p>
                <p>Use our online bulk email verifier to verify your current email lists by simply uploading a TXT, CSV, XLS, or XLSX file. It's quick and easy!</p>
                <a href="#">Verify email list now <i className="ti-arrow-right"></i></a>
              </div>
            </div>
            <div className="col-md-6 sm-m-30px-t">
              <img src="static/img/features/email-verification-service-feature-3.png" title="" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className="section section-effect left p-40px-b">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 sm-m-30px-t order-last order-md-first">
              <img src="static/img/features/email-verification-service-feature-4.png" title="" alt="" />
            </div>
            <div className="col-md-6">
              <div className="feature-box-02">
                <label className="theme2nd-color">Seamless integrations</label>
                <h3 className="m-20px-b font-alt">Add an email validation tool to any website or app</h3>
                <p>Use our API to run bulk or single email verification straight on your web and mobile application or develop a white-label version of our email verification web app.</p>
                <a href="#">See API docs <i className="ti-arrow-right"></i></a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="section">
        <div className="container">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title">
                <h2 className="theme-after-bg">About Our Email Validation Service</h2>
                <p>Email marketing databases naturally degrade by about 22.5% every year. A 5% bounce rate can get you blocked. You don't have to worry when using TheChecker.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-apple"></i>
                </div>
                <h3 className="font-alt">99%+ Accuracy</h3>
                <p>Our emails marked as "Valid" are covered by our deliverability guarantee.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-microsoft"></i>
                </div>
                <h3 className="font-alt">Fast Email Verification</h3>
                <p>Verifying 10,000 emails takes, on average, only around 2-5 min. Get things done faster!</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-html5"></i>
                </div>
                <h3 className="font-alt">Affordable Prices</h3>
                <p>We are (by far) the most cost-effective solution (accurate, fast and affordable).</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-css3"></i>
                </div>
                <h3 className="font-alt">Filetypes Compatibility</h3>
                <p>We offer a wide file type compatibility. Upload CSV, TXT, XLS or XLSX files.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-wordpress"></i>
                </div>
                <h3 className="font-alt">Email Bounce Checker</h3>
                <p>Identifies and tells you which emails will bounce and thus are not safe to send.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-wordpress"></i>
                </div>
                <h3 className="font-alt">Global Accuracy</h3>
                <p>We validate emails of all types and all major providers from anywhere in the world.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-wordpress"></i>
                </div>
                <h3 className="font-alt">Catch-all Checker</h3>
                <p>Checks for domains that are catch-all, which return valid for all emails.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-wordpress"></i>
                </div>
                <h3 className="font-alt">Email Typo Correction</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-wordpress"></i>
                </div>
                <h3 className="font-alt">Syntax Validation</h3>
                <p>Fully cleans your email list from email addresses with syntax errors.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-wordpress"></i>
                </div>
                <h3 className="font-alt">Domain Validation</h3>
                <p>Marks all the emails containing inactive or invalid domains.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-wordpress"></i>
                </div>
                <h3 className="font-alt">Mailbox Checker</h3>
                <p>Validates the existence of MX records for every email address.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-stack-overflow"></i>
                </div>
                <h3 className="font-alt">Risk Validation</h3>
                <p>Identifies and marks all the emails which domain accepts any email in their domain.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-stack-overflow"></i>
                </div>
                <h3 className="font-alt">Free De-duplication</h3>
                <p>TheCheckers email checker tool removes all records containing duplicate emails.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-stack-overflow"></i>
                </div>
                <h3 className="font-alt">Spam Trap Remover</h3>
                <p>Our email verifier tool removes all address identified as a spam trap.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-stack-overflow"></i>
                </div>
                <h3 className="font-alt">Disposables Checker</h3>
                <p>Checks against our frequently updated temporary email database.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box">
                <div className="icon">
                  <i className="ti-stack-overflow"></i>
                </div>
                <h3 className="font-alt">Pay Only For Results</h3>
                <p>If we can't verify a certain email at any moment, we refund you the credits.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="reviews" className="section">
        <div className="container">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title">
                <h2 className="theme-after-bg">The Highest Rated Email Verifier</h2>
                <p>TheChecker is the <b>#1 email verification software</b> based on independent reviews.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon">
                  <a href="https://www.g2crowd.com/products/thechecker-thechecker/reviews"><img src="static/img/thechecker-reviews-g2crowd.png" /></a>
                </div>
                <h4><a href="#"><b>4.7</b>/5</a></h4>
                <p className="large"><span>✮✮✮✮✮ </span></p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon">
                  <a href="https://www.capterra.com/p/173432/TheChecker/"><img src="static/img/thechecker-reviews-capterra.png" /></a>
                </div>
                <h4><a href="#"><b>4.9</b>/5</a></h4>
                <p className="large"><span>✮✮✮✮✮ </span></p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon">
                  <a href="https://www.trustpilot.com/review/thechecker.co"><img src="static/img/thechecker-reviews-trustpilot.png" /></a>
                </div>
                <h4><a href="#"><b>4.6</b>/5</a></h4>
                <p className="large"><span>✮✮✮✮✮ </span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cta" className="section gray-bg text-center">
        <div className="container">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title text-center">
                <h2 className="theme-after-bg">Join the Smartest</h2>
                <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                <p>Try the best bulk email address checker for FREE and see the accurate results!</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center m-60px-b md-m-25px-b">
            <div className="col-12 col-md-12 col-lg-12">
              <div className="cta">
                <a href="#" className="m-btn m-btn-theme2nd">Try For Free</a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/customers/email-verification-service-thechecker-customers-saleshandy.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/customers/email-verification-service-thechecker-customers-vindi.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/customers/email-verification-service-thechecker-customers-wyssinstitute.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/customers/email-verification-service-thechecker-customers-growbots.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/customers/email-verification-service-thechecker-customers-university-of-toronto.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/customers/email-verification-service-thechecker-customers-leadcrunch.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
};

