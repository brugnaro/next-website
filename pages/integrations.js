import { useTranslation } from 'react-i18next';
import { Header } from '../components';
import './i18n';

const integrations = () => {
  const { t, i18n } = useTranslation();

  return <div>
    <Header pt={() => i18n.changeLanguage('pt')} en={() => i18n.changeLanguage('en')} />
    <main>
      <section id="why" className="section">
        <div className="container">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title">
                <h2 className="theme-after-bg">{t('integrations')}</h2>
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
    </main>
  </div>
};

export default integrations;