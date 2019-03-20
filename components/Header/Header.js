import { useTranslation, getInitialProps } from 'react-i18next';
import '../../pages/i18n';
import Link from 'next/link';

const Header = () => {
  const { t, i18n } = useTranslation();

  return <header>
    <nav className="navbar header-nav fixed-top navbar-expand-lg header-nav-light">
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand">
            <img src="static/img/email-verification-service-logo-thechecker.png" alt="TheChecker" />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbar">
          <ul className="navbar-nav ml-auto">
            <li>
              <Link href='/#why'>
                <a className="nav-link">{t("headerWhyTheChecker")}</a>
              </Link>
            </li>
            <li>
              <Link href='/#features'>
                <a className="nav-link">{t('headerFeatures')}</a>
              </Link>
            </li>
            <li>
              <Link href='/integrations'>
                <a className="nav-link">{t('headerIntegrations')}</a>
              </Link>
            </li>
            <li>
              <Link href='/#reviews'>
                <a className="nav-link">{t('headerReviews')}</a>
              </Link>
            </li>
            <li>
              <Link href='/pricing'>
                <a className="nav-link">{t('headerPricing')}</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">{t('headerResources')}</a>
              <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-angle-down"></i></span>
              <div className="sub-menu mega-menu" aria-labelledby="navbarDropdown">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                        <li>
                          <span className="mega-menu-title">{t('headerSolutions')}</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerDigitalAgency')}</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerEcommerce')}</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerSalesResp')}.</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerSaaSPlatform')}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                        <li>
                          <span className="mega-menu-title">{t('headerAbout')}</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">
                            <Link href="/faqs">
                              <a>{t('headerFaq')}</a>
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerAffiliates')}</span>
                        </li>
                        <li className="mega-menu-link">
                          <span className="nav-link mega-menu-link">
                            <Link href="https://blog.thechecker.co">
                              <a className="nav-link" target="blank">{t('headerBlog')}</a>
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                        <li>
                          <span className="mega-menu-title">{t('headerDevelopers')}</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerApi')}</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerWidget')}</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">{t('headerServerStatus')}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href='/'>
                <a className="nav-link">{t('headerLogin')}</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className="nav-btn nav-link">{t('headerTryForFree')}</a>
              </Link>
            </li>
            <li className='flag'>

              <img src='./../../static/img/global.png' />

              <a className="nav-link" href="javascript:;">
                {i18n.language === 'en' ? 'EN' : 'PT'}
              </a>
              <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-angle-down"></i></span>

              <ul className="sub-menu">
                <li>
                  <button onClick={() => i18n.changeLanguage('en')}>
                    <span className='nav-link mega-menu-link'>{t('headerEnglish')}</span>
                  </button>
                </li>
                <li>
                  <button onClick={() => i18n.changeLanguage('pt')}>
                    <span className='nav-link mega-menu-link'>{t('headerPortugues')}</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
};

export default Header;