import Link from 'next/link';
import NextHead from 'next/head';

const blog = () =>
  <div>
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

    {/* <div id="loading">
      <div className="load-circle"><span className="one"></span></div>
    </div> */}

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
      <h4>blog</h4>

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

  </div>;

export default blog;