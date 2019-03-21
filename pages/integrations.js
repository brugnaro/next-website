import { useTranslation } from 'react-i18next';
import { Footer, Header } from '../components';
import './i18n';
import { Link, Router } from '../routes';

const integrations = () => {

  integrations.getInitialProps = (props) => {
    return {}
  }

  const { t, i18n } = useTranslation();

  return <div>
    <title>Integrations With Email Marketing Tools | TheChecker</title>

    <Header />

    <main>
      <section id="integrations" className="section">
        <div className="container p-60px-t">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title text-center">
                <h2 className="theme-after-bg">{t('integrations')}</h2>
                <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                <p>Connect with your favorite tools to ensure you always reach real prospects.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/zapier.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">Zapier</a></h4>
                  <p>Connect the apps you use everyday to automate your work.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/mailchimp.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">MailChimp</a></h4>
                  <p>Marketing Automation Platform for Small Businesses.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/sendgrid.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">SendGrid</a></h4>
                  <p>Cloud-based email infrastructure and delivery service.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/campaign_monitor.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">Campaign Monitor</a></h4>
                  <p>Email Marketing & Marketing Automation for Your Business.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/mailerlite.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">Mailerlite</a></h4>
                  <p>Email Marketing & Automation made easy for Small Businesses.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/activecampaign.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">ActiveCampaign</a></h4>
                  <p>Integrated email marketing, automation, and SMBs CRM.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/sparkpost.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">SparkPost</a></h4>
                  <p>Email Delivery Service for Developers and Enterprises.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/drip.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">Drip</a></h4>
                  <p>The first Ecommerce CRM built to drive sales, not sales teams.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/hubspot.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">HubSpot</a></h4>
                  <p>Full platform of marketing, sales, customer service, and CRM.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/verticalresponse.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">VerticalResponse</a></h4>
                  <p>Quickly build and manage powerful marketing campaigns.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/sendloop.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">SendLoop</a></h4>
                  <p>Manage and send beautiful email marketing campaigns.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 m-15px-tb">
              <div className="blog-item">
                <div className="img">
                  <img src="static/img/integrations/constantcontact.png" title="" alt="" />
                </div>
                <div className="blog-content">
                  <h4><a href="#">HubSpot</a></h4>
                  <p>Effective email marketing solution for small businesses.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="section">
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
                  <a href="https://www.g2crowd.com/products/thechecker-thechecker/reviews"><img src="static/img/picture.png" /></a>
                </div>
                <h4><a href="#"><b>4.7</b>/5</a></h4>
                <p className="large"><span>✮✮✮✮✮ </span></p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon">
                  <a href="https://www.capterra.com/p/173432/TheChecker/"><img src="static/img/picture.png" /></a>
                </div>
                <h4><a href="#"><b>4.9</b>/5</a></h4>
                <p className="large"><span>✮✮✮✮✮ </span></p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon">
                  <a href="https://www.trustpilot.com/review/thechecker.co"><img src="static/img/picture.png" /></a>
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
                <img src="static/img/picture.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/picture.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/picture.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/picture.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/picture.png" />
              </div>
            </div>
            <div className="col-4 col-md-4 col-lg-2">
              <div className="customers">
                <img src="static/img/picture.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
};

export default integrations;