import { useTranslation } from 'react-i18next';
import { Footer, Header } from '../components';
import './i18n';

const pricing = () => {
  const { t, i18n } = useTranslation();

  return <div>
    <title>Pricing | TheChecker</title>
    
    <Header />

    <main>
      <section id="integrations" className="section">
        <div className="container p-60px-t">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title text-center">
                <h2 className="theme-after-bg">{t('pricing')}</h2>
                <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                <p>We have the most cost-effective pricing in the whole industry.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 m-15px-tb text-center">
              <p>shdfjdgshfdshgjdshjds</p>
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

export default pricing;