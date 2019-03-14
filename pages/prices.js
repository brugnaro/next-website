import { useTranslation } from 'react-i18next';
import { Header } from '../components';
import Link from 'next/link';
import './i18n';

const prices = () => {
  const { t, i18n } = useTranslation();

  return <div>
    <title>Prices | TheChecker</title>
    <Header
      contactus={t('contactus')}
      toggleLanguage={i18n.language === 'en' ? () => i18n.changeLanguage('pt') : () => i18n.changeLanguage('en') }
      integrations={t('integrations')}
      activelang={i18n.language === 'en' ? 'EN' : 'PT'}
      lang={i18n.language === 'en' ? 'PT' : 'EN'}
      pricing={t('pricing')}
    />
    <main>
      <section className="section page-title-section theme-after bg-fixed bg-center-center bg-cover contact-section">
        <div className="container">
          <div className="page-title text-center">
            <h1>Our Plan</h1>
          </div>
          <ol className="breadcrumb justify-content-center">
            <li><Link href='/'><a>Home</a></Link></li>
            <li className="active">Price</li>
          </ol>
        </div>
      </section>
      <section id="price" className="section">
        <div className="container">
          <div className="tab-style-2">
            <ul className="nav justify-content-center m-15px-b" id="pills-tab" role="tablist">
              <li className="nav-item">
                <a className="nav-link active" id="pills-month-tab" data-toggle="pill" href="#pills-month" role="tab" aria-controls="pills-month" aria-selected="true">Monthly</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="pills-year-tab" data-toggle="pill" href="#pills-year" role="tab" aria-controls="pills-year" aria-selected="false">Yearly</a>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-month" role="tabpanel" aria-labelledby="pills-month-tab">
                <div className="row">
                  <div className="col-md-4 m-15px-tb">
                    <div className="price-table">
                      <div className="price-header">
                        <h4 className="price-title">Starter</h4>
                        <p>Entry you need get started without compromising</p>
                        <div className="price-price">
                          <div className="price-value theme2nd-color">
                            10.00 <sup>$</sup>
                          </div>
                          <small>Per active user/monthly</small>
                          <small className="text-warning">Save 25% on annually</small>
                        </div>
                      </div>
                      <div className="price-body">
                        <ul>
                          <li>Unlimited bug report</li>
                          <li>Unlimited team members</li>
                          <li>1 year data retention</li>
                          <li className="no">Offline bug reporting</li>
                          <li className="no">Slack integration</li>
                          <li className="no">Awesome screenshot</li>
                          <li className="no">Customize your bug report</li>
                          <li className="no">Free analytic tools</li>
                          <li className="no">Group subscriptions</li>
                          <li className="no">Migration assistance</li>
                        </ul>
                      </div>
                      <div className="price-footer">
                        <a href="#" className="m-btn m-btn-theme2nd">Start free trial</a>
                        <span className="d-block">30 days - no credit card</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 m-15px-tb">
                    <div className="price-table">
                      <div className="price-header">
                        <h4 className="price-title">Business</h4>
                        <p>Entry you need get started without compromising</p>
                        <div className="price-price">
                          <div className="price-value theme2nd-color">
                            30.00 <sup>$</sup>
                          </div>
                          <small>Per active user/monthly</small>
                          <small className="text-warning">Save 25% on annually</small>
                        </div>
                      </div>
                      <div className="price-body">
                        <ul>
                          <li>Unlimited bug report</li>
                          <li>Unlimited team members</li>
                          <li>1 year data retention</li>
                          <li>Offline bug reporting</li>
                          <li>Slack integration</li>
                          <li>Awesome screenshot</li>
                          <li>Customize your bug report</li>
                          <li className="no">Free analytic tools</li>
                          <li className="no">Group subscriptions</li>
                          <li className="no">Migration assistance</li>
                        </ul>
                      </div>
                      <div className="price-footer">
                        <a href="#" className="m-btn m-btn-theme2nd">Start free trial</a>
                        <span className="d-block">30 days - no credit card</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 m-15px-tb">
                    <div className="price-table">
                      <div className="price-header">
                        <h4 className="price-title">Organization</h4>
                        <p>Entry you need get started without compromising</p>
                        <div className="price-price">
                          <div className="price-value theme2nd-color">
                            45.00 <sup>$</sup>
                          </div>
                          <small>Per active user/monthly</small>
                          <small className="text-warning">Save 25% on annually</small>
                        </div>
                      </div>
                      <div className="price-body">
                        <ul>
                          <li>Unlimited bug report</li>
                          <li>Unlimited team members</li>
                          <li>1 year data retention</li>
                          <li>Offline bug reporting</li>
                          <li>Slack integration</li>
                          <li>Awesome screenshot</li>
                          <li>Customize your bug report</li>
                          <li>Free analytic tools</li>
                          <li>Group subscriptions</li>
                          <li>Migration assistance</li>
                        </ul>
                      </div>
                      <div className="price-footer">
                        <a href="#" className="m-btn m-btn-theme2nd">Start free trial</a>
                        <span className="d-block">30 days - no credit card</span>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
              <div className="tab-pane fade" id="pills-year" role="tabpanel" aria-labelledby="pills-year-tab">
                <div className="row">
                  <div className="col-md-4 m-15px-tb">
                    <div className="price-table">
                      <div className="price-header">
                        <h4 className="price-title">Starter</h4>
                        <p>Entry you need get started without compromising</p>
                        <div className="price-price">
                          <div className="price-value theme2nd-color">
                            20.00 <sup>$</sup>
                          </div>
                          <small>Per active user/monthly</small>
                          <small className="text-warning">Save 25% First Time</small>
                        </div>
                      </div>
                      <div className="price-body">
                        <ul>
                          <li>Unlimited bug report</li>
                          <li>Unlimited team members</li>
                          <li>1 year data retention</li>
                          <li className="no">Offline bug reporting</li>
                          <li className="no">Slack integration</li>
                          <li className="no">Awesome screenshot</li>
                          <li className="no">Customize your bug report</li>
                          <li className="no">Free analytic tools</li>
                          <li className="no">Group subscriptions</li>
                          <li className="no">Migration assistance</li>
                        </ul>
                      </div>
                      <div className="price-footer">
                        <a href="#" className="m-btn m-btn-theme">Start free trial</a>
                        <span className="d-block">30 days - no credit card</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 m-15px-tb">
                    <div className="price-table">
                      <div className="price-header">
                        <h4 className="price-title">Business</h4>
                        <p>Entry you need get started without compromising</p>
                        <div className="price-price">
                          <div className="price-value theme2nd-color">
                            60.00 <sup>$</sup>
                          </div>
                          <small>Per active user/monthly</small>
                          <small className="text-warning">Save 25% First Time</small>
                        </div>
                      </div>
                      <div className="price-body">
                        <ul>
                          <li>Unlimited bug report</li>
                          <li>Unlimited team members</li>
                          <li>1 year data retention</li>
                          <li>Offline bug reporting</li>
                          <li>Slack integration</li>
                          <li>Awesome screenshot</li>
                          <li>Customize your bug report</li>
                          <li className="no">Free analytic tools</li>
                          <li className="no">Group subscriptions</li>
                          <li className="no">Migration assistance</li>
                        </ul>
                      </div>
                      <div className="price-footer">
                        <a href="#" className="m-btn m-btn-theme">Start free trial</a>
                        <span className="d-block">30 days - no credit card</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 m-15px-tb">
                    <div className="price-table">
                      <div className="price-header">
                        <h4 className="price-title">Organization</h4>
                        <p>Entry you need get started without compromising</p>
                        <div className="price-price">
                          <div className="price-value theme2nd-color">
                            90.00 <sup>$</sup>
                          </div>
                          <small>Per active user/monthly</small>
                          <small className="text-warning">Save 25% First Time</small>
                        </div>
                      </div>
                      <div className="price-body">
                        <ul>
                          <li>Unlimited bug report</li>
                          <li>Unlimited team members</li>
                          <li>1 year data retention</li>
                          <li>Offline bug reporting</li>
                          <li>Slack integration</li>
                          <li>Awesome screenshot</li>
                          <li>Customize your bug report</li>
                          <li>Free analytic tools</li>
                          <li>Group subscriptions</li>
                          <li>Migration assistance</li>
                        </ul>
                      </div>
                      <div className="price-footer">
                        <a href="#" className="m-btn m-btn-theme">Start free trial</a>
                        <span className="d-block">30 days - no credit card</span>
                      </div>
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

export default prices;