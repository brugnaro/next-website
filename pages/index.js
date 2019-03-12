import Link from 'next/link';
import NextHead from 'next/head';
import { useTranslation } from 'react-i18next';
import './i18n';

export default () => {

  const { t, i18n } = useTranslation();

  return <div>
    <NextHead>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta name="description" content="10,000+ users in 130+ countries trust TheChecker for their real-time email verification and email list cleaning services. Try it FREE today!" />

      <title>#1 Email Verification & List Cleaning Service | TheChecker Email Verifier</title>

      <link href="../static/plugin/font-awesome/css/fontawesome-all.min.css" rel="stylesheet" />
      <link href="../static/plugin/themify-icons/themify-icons.css" rel="stylesheet" />
      <link href="../static/plugin/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
      <link href="../static/plugin/owl-carousel/css/owl.carousel.min.css" rel="stylesheet" />
      <link href="../static/plugin/magnific/magnific-popup.css" rel="stylesheet" />
      <link href="../static/css/styles.css" rel="stylesheet" />
      <link href="../static/css/color/default.css" rel="stylesheet" id="color_theme" />

      <link rel="apple-touch-icon" sizes="57x57" href="../static/favicon/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="../static/favicon/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="../static/favicon/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="../static/favicon/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="../static/favicon/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="../static/favicon/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="../static/favicon/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="../static/favicon/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="../static/favicon/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="../static/favicon/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="../static/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="../static/favicon/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="../static/favicon/favicon-16x16.png" />

      <link rel="manifest" href="../static/favicon/manifest.json" />

      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="../static/favicon/ms-icon-144x144.png" />
      <meta name="theme-color" content="#ffffff" />
    </NextHead>

    <div id="loading">
      <div className="load-circle"><span className="one"></span></div>
    </div>

    <header>
      <nav className="navbar header-nav fixed-top navbar-expand-lg header-nav-light">

        <div className="container">

          <Link href='/'>
            <a className="navbar-brand" >
              <img src="static/img/email-verification-service-logo-thechecker.png" />
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
                <Link href='#home'>
                  <a className="nav-link" href="index.html#why">Why TheChecker</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-link" href="index.html#features">Features</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-link" href="integrations.html">Integrations</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-link">Reviews</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-link" href="pricing.html">Pricing</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-link" href="javascript:;">Resources</a>
                </Link>

                <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-angle-down"></i></span>

                <ul className="sub-menu">
                  <li>
                    <Link href='/'>
                      <a href="about.html">Blog</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a href="price.html">Price</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a href="faq.html">Faq's</a>
                    </Link>
                  </li>
                  <li>
                    <Link href='/'>
                      <a href="contatus.html">Contact us</a>
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-link" href="#contatus">Login</a>
                </Link>
              </li>
              <li>
                <Link href='/'>
                  <a className="nav-btn nav-link" href="#">Try For Free</a>
                </Link>
              </li>
            </ul>
          </div>

        </div>

      </nav>

    </header>

    <main>

      <section id="home" className="home-banner-01">

        <div className="container">
          <div className="row full-screen align-items-center">
            <div className="col col-md-12 col-lg-6 col-xl-6 p-80px-tb md-p-30px-b sm-p-60px-t m-100px-t">
              <div className="home-text-center p-50px-r md-p-0px-r">
                <h1 className="font-alt">The most cost-effective email verification service</h1>
                <p>Get rid of email bounces and bad email addresses with our proven high-quality yet affordable <strong>email verification</strong> and <strong>email list cleaning</strong> solutions that improve your data quality and email marketing ROI.</p>
                <p>Trusted and rated <span>✮✮✮✮✮ </span> <strong>4.8</strong>/5 based on <a href="#reviews">200+ reviews</a>.</p>
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

    </main>





    <script src="../static/js/jquery-3.2.1.min.js"></script>
    <script src="../static/js/jquery-migrate-3.0.0.min.js"></script>

    <script src="../static/plugin/bootstrap/js/popper.min.js"></script>
    <script src="../static/plugin/bootstrap/js/bootstrap.min.js"></script>
    <script src="../static/plugin/owl-carousel/js/owl.carousel.min.js"></script>
    <script src="../static/plugin/magnific/jquery.magnific-popup.min.js"></script>

    <script src="../static/js/custom.js"></script>

    <script src="../static/js/data-layer.js"></script>
    <script src="../static/js/crisp-website.js"></script>
    <script type="text/javascript" async="" src="https://cdn.heapanalytics.com/js/heap-564543941.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-92603538-1"></script>

  </div>
};