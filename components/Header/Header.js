import React, { Component } from 'react';
import Link from 'next/link';

const Header = (props) => {
  return <header>
    <nav className="navbar header-nav fixed-top navbar-expand-lg header-nav-light">
      <div className="container">
        <Link href='/'>
          <a className="navbar-brand">
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
              <Link href='/#why'>
                <a className="nav-link">Why TheChecker</a>
              </Link>
            </li>
            <li>
              <Link href='/#features'>
                <a className="nav-link">Features</a>
              </Link>
            </li>
            <li>
              <Link href='/integrations'>
                <a className="nav-link">{props.integrations}</a>
              </Link>
            </li>
            <li>
              <Link href='/#reviews'>
                <a className="nav-link">Reviews</a>
              </Link>
            </li>
            <li>
              <Link href='/pricing'>
                <a className="nav-link" href="pricing.html">{props.pricing}</a>
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Resources</a>
              <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-angle-down"></i></span>
              <div className="sub-menu mega-menu" aria-labelledby="navbarDropdown">
                <div className="container">
                  <div className="row">
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                        <li>
                          <span className="mega-menu-title">Solutions</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">Digital Agency</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">E-commerce</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">Sales Resp.</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">SaaS Platform</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                        <li>
                          <span className="mega-menu-title">About</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">
                            <Link href="/faqs">
                              <a>FAQ</a>
                            </Link>
                          </span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">Affiliates</span>
                        </li>
                        <li className="mega-menu-link">
                          <span className="nav-link mega-menu-link">
                            <Link href="https://blog.thechecker.co">
                              <a className="nav-link" target="blank">Blog</a>
                            </Link>
                          </span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <ul className="nav flex-column">
                        <li>
                          <span className="mega-menu-title">Developers</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">API</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">Widget</span>
                        </li>
                        <li>
                          <span className="nav-link mega-menu-link">Server status</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <Link href='/'>
                <a className="nav-link">Login</a>
              </Link>
            </li>
            <li>
              <Link href='/'>
                <a className="nav-btn nav-link">Try For Free</a>
              </Link>
            </li>
            <li className='flag'>



              <a className="nav-link" href="javascript:;">

                {props.activelang}

              </a>
              <span className="sub-menu-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="ti-angle-down"></i></span>



              <ul className="sub-menu">
                <li>
                  <button onClick={props.en}>
                    <span className='nav-link mega-menu-link'>English</span>
                  </button>
                </li>
                <li>
                  <button onClick={props.pt}>
                    <span className='nav-link mega-menu-link'>Português</span>
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
}

export default Header;