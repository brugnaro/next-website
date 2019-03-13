import { useTranslation } from 'react-i18next';
import { Header } from '../components';
import Link from 'next/link';
import './i18n';

const blog = () => {
  const { t, i18n } = useTranslation();

  return <div>
    <title>Blog | TheChecker</title>
    <Header
      contactus={t('contactus')}
      en={() => i18n.changeLanguage('en')}
      pt={() => i18n.changeLanguage('pt')}
      integrations={t('integrations')}
      pricing={t('pricing')}
    />
    <main>
      <section className="section page-title-section theme-after bg-fixed bg-center-center bg-cover contact-section">
        <div className="container">
          <div className="page-title text-center">
            <h1>About AppWay</h1>
          </div>
          <ol className="breadcrumb justify-content-center">
            <li><Link href='/'><a>Home</a></Link></li>
            <li className="active">Blog</li>
          </ol>
        </div>
      </section>
      <section className="section gray-bg aboutus-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="feature-box-02">
                <label className="theme2nd-color">All in one place</label>
                <h3 className="m-20px-b font-alt">Learn Anytime From Anywhere</h3>
                <p className="large">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                <p className="m-25px-b">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <div className="help-text theme2nd-color">1000 Members Join</div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="video-box md-m-30px-t">
                <a className="popup-video" href="https://www.youtube.com/watch?v=Uoj0DpWz7bk">
                  <img src="static/img/550x500.jpg" title="" alt="" />
                  <i className="icon ti-control-play"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="p-50px-tb counter-section">
        <div className="container">
          <div className="counter-row">
            <div className="row">
              <div className="col-6 col-md-3 col-sm-6 m-15px-tb">
                <div className="counter-col">
                  <div className="counter-data" data-count="800">
                    <div className="count">800</div>
                    <h6>Happy Clients</h6>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 col-sm-6 m-15px-tb">
                <div className="counter-col">
                  <div className="counter-data" data-count="375">
                    <div className="count">375</div>
                    <h6>Datacenters</h6>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 col-sm-6 m-15px-tb">
                <div className="counter-col">
                  <div className="counter-data" data-count="550">
                    <div className="count">550</div>
                    <h6>Developers</h6>
                  </div>
                </div>
              </div>
              <div className="col-6 col-md-3 col-sm-6 m-15px-tb">
                <div className="counter-col">
                  <div className="counter-data" data-count="120">
                    <div className="count">120</div>
                    <h6>Countries</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8">
              <div className="section-title">
                <label>Features</label>
                <h2 className="theme-after-bg">Amazing Practical Features Included</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-comments"></i>
                </div>
                <h4><a href="#">Great Advices</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-crown"></i>
                </div>
                <h4><a href="#">24/7 Support</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-heart"></i>
                </div>
                <h4><a href="#">Optimal Choice</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-cup"></i>
                </div>
                <h4><a href="#">Clear Navigation</a></h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8">
              <div className="section-title">
                <label>Our Team</label>
                <h2 className="theme-after-bg">Leadership team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="our-team">
                <div className="img img-our-team">
                </div>
                <div className="info">
                  <h6>Ben Alomar</h6>
                  <label>Chief Executive Officer</label>
                </div>
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a className="google" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="our-team">
                <div className="img img-our-team">
                </div>
                <div className="info">
                  <h6>Ben Alomar</h6>
                  <label>Chief Executive Officer</label>
                </div>
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a className="google" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="our-team">
                <div className="img img-our-team">
                </div>
                <div className="info">
                  <h6>Ben Alomar</h6>
                  <label>Chief Executive Officer</label>
                </div>
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a className="google" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-lg-3 m-15px-tb">
              <div className="our-team">
                <div className="img img-our-team">
                </div>
                <div className="info">
                  <h6>Ben Alomar</h6>
                  <label>Chief Executive Officer</label>
                </div>
                <ul className="social-icons">
                  <li><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
                  <li><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
                  <li><a className="google" href="#"><i className="fab fa-google-plus-g"></i></a></li>
                  <li><a className="linkedin" href="#"><i className="fab fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section testimonial-section gray-bg">
        <div className="container">
          <div className="row justify-content-center m-60px-b md-m-40px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title text-center">
                <label>Testimonial</label>
                <h2 className="theme-after-bg">What People Say?</h2>
                <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div id="client-slider-single" className="owl-carousel">
                <div className="testimonial-col">
                  <i className="ti-quote-left"></i>
                  <div className="say">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="static/img/100x100.jpg" alt="" title="" />>
                      </div>
                    <div className="name">
                      <span>Jennifer Lutheran</span>
                      <label>CEO at AppWay</label>
                    </div>
                  </div>
                </div>
                <div className="testimonial-col">
                  <i className="ti-quote-left"></i>
                  <div className="say">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="static/img/100x100.jpg" alt="" title="" />
                    </div>
                    <div className="name">
                      <span>Salma Hayek</span>
                      <label>CEO at AppWay</label>
                    </div>
                  </div>
                </div>
                <div className="testimonial-col">
                  <i className="ti-quote-left"></i>
                  <div className="say">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="static/img/100x100.jpg" alt="" title="" />
                    </div>
                    <div className="name">
                      <span>Martin Lutheran</span>
                      <label>CEO at AppWay</label>
                    </div>
                  </div>
                </div>
                <div className="testimonial-col">
                  <i className="ti-quote-left"></i>
                  <div className="say">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="static/img/100x100.jpg" alt="" title="" />
                    </div>
                    <div className="name">
                      <span>Brad Pitt</span>
                      <label>CEO at AppWay</label>
                    </div>
                  </div>
                </div>
                <div className="testimonial-col">
                  <i className="ti-quote-left"></i>
                  <div className="say">
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                  </div>
                  <div className="user">
                    <div className="img">
                      <img src="static/img/100x100.jpg" alt="" title="" />
                    </div>
                    <div className="name">
                      <span>Jennifer</span>
                      <label>CEO at AppWay</label>
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

export default blog;