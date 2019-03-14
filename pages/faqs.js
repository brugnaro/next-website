import { useTranslation } from 'react-i18next';
import { Header } from '../components';
import Link from 'next/link';
import './i18n';

const faqs = () => {
  const { t, i18n } = useTranslation();

  return <div>
    <title>Faq | TheChecker</title>
    <Header
      contactus={t('contactus')}
      toggleLanguage={i18n.language === 'en' ? () => i18n.changeLanguage('pt') : () => i18n.changeLanguage('en')}
      integrations={t('integrations')}
      activelang={i18n.language === 'en' ? 'EN' : 'PT'}
      lang={i18n.language === 'en' ? 'PT' : 'EN'}
      pricing={t('pricing')}
    />
    <main>
      <section className="section page-title-section theme-after bg-fixed bg-center-center bg-cover contact-section">
        <div className="container">
          <div className="page-title text-center">
            <h1>FAQ's</h1>
          </div>
          <ol className="breadcrumb justify-content-center">
            <li><Link href='/'><a>Home</a></Link></li>
            <li className="active">FAQ's</li>
          </ol>
        </div>
      </section>
      <section className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-10">
              <div className="faq-box" id="accordion">
                <div className="faq-row">
                  <div className="faq-header" id="faqa-1">
                    <h5 className="faq-title" data-toggle="collapse" data-target="#faqc-1" data-aria-expanded="true" data-aria-controls="faqc-1">
                      <span className="no theme-g-bg">1</span> How can I install/upgrade Dummy Content?
                  </h5>
                  </div>
                  <div id="faqc-1" className="collapse" aria-labelledby="faqa-1" data-parent="#accordion">
                    <div className="faq-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-row">
                  <div className="faq-header" id="faqa-2">
                    <h5 className="faq-title" data-toggle="collapse" data-target="#faqc-2" data-aria-expanded="true" data-aria-controls="faqc-2">
                      <span className="no theme-g-bg">2</span> Dummy Content won't install...
                  </h5>
                  </div>
                  <div id="faqc-2" className="collapse" aria-labelledby="faqa-2" data-parent="#accordion">
                    <div className="faq-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-row">
                  <div className="faq-header" id="faqa-3">
                    <h5 className="faq-title" data-toggle="collapse" data-target="#faqc-3" data-aria-expanded="true" data-aria-controls="faqc-3">
                      <span className="no theme-g-bg">3</span> How can I uninstall Dummy Content?
                  </h5>
                  </div>
                  <div id="faqc-3" className="collapse" aria-labelledby="faqa-3" data-parent="#accordion">
                    <div className="faq-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-row">
                  <div className="faq-header" id="faqa-4">
                    <h5 className="faq-title" data-toggle="collapse" data-target="#faqc-4" data-aria-expanded="true" data-aria-controls="faqc-4">
                      <span className="no theme-g-bg">4</span> What are the minimum requirements?
                  </h5>
                  </div>
                  <div id="faqc-4" className="collapse" aria-labelledby="faqa-4" data-parent="#accordion">
                    <div className="faq-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-row">
                  <div className="faq-header" id="faqa-5">
                    <h5 className="faq-title" data-toggle="collapse" data-target="#faqc-5" data-aria-expanded="true" data-aria-controls="faqc-5">
                      <span className="no theme-g-bg">5</span> Where can I download earlier versions?
                  </h5>
                  </div>
                  <div id="faqc-5" className="collapse" aria-labelledby="faqa-5" data-parent="#accordion">
                    <div className="faq-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-row">
                  <div className="faq-header" id="faqa-6">
                    <h5 className="faq-title" data-toggle="collapse" data-target="#faqc-6" data-aria-expanded="true" data-aria-controls="faqc-6">
                      <span className="no theme-g-bg">6</span> How can I downgrade to an earlier version of Dummy Content?
                  </h5>
                  </div>
                  <div id="faqc-6" className="collapse" aria-labelledby="faqa-6" data-parent="#accordion">
                    <div className="faq-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>

                <div className="faq-row">
                  <div className="faq-header" id="faqa-7">
                    <h5 className="faq-title" data-toggle="collapse" data-target="#faqc-8" data-aria-expanded="true" data-aria-controls="faqc-8">
                      <span className="no theme-g-bg">7</span> How can I upgrade from Joomla 2.5 to Joomla 3?
                  </h5>
                  </div>
                  <div id="faqc-8" className="collapse" aria-labelledby="faqa-7" data-parent="#accordion">
                    <div className="faq-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                     proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
};

export default faqs;