import { useTranslation } from 'react-i18next';
import { Footer, Header } from '../components';
import Link from 'next/link';
import './i18n';

const contactus = () => {
  const { t, i18n } = useTranslation();

  return <div>
    <title>Contact us | TheChecker</title>

    <Header />

    <main>
      <section className="section page-title-section theme-after bg-fixed bg-center-center bg-cover contact-section">
        <div className="container">
          <div className="page-title text-center">
            <h1>Get in touch</h1>
          </div>
          <ol className="breadcrumb justify-content-center">
            <li><Link href='/'><a>Home</a></Link></li>
            <li className="active">Contact us</li>
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-location-pin"></i>
                </div>
                <h4>Visit Our Office</h4>
                <p>401 Broadway, 24th Floor<br /> New York, NY 10013</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-mobile"></i>
                </div>
                <h4>Let's Talk</h4>
                <p>401 Broadway, 24th Floor<br /> New York, NY 10013</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-email"></i>
                </div>
                <h4>E-mail Us</h4>
                <p>401 Broadway, 24th Floor<br /> New York, NY 10013</p>
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-3 m-15px-tb">
              <div className="feature-box-01">
                <div className="icon theme-g-bg">
                  <i className="ti-announcement"></i>
                </div>
                <h4>Customer Services</h4>
                <p>401 Broadway, 24th Floor<br /> New York, NY 10013</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section gray-bg">
        <div className="container">
          <div className="row justify-content-center m-60px-b  md-m-40px-b">
            <div className="col-12 col-md-10 col-lg-7">
              <div className="section-title text-center">
                <label>Contact</label>
                <h2 className="theme-after-bg">Get In touch</h2>
                <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-10 col-lg-8">
              <div className="contact-form md-m-30px-b">
                <h2>Say Something</h2>
                <form>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input name="Phone" placeholder="Name" className="form-control" type="text" />
                        <span className="input-focus-effect"></span>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input name="Email" placeholder="Emaile" className="form-control" type="email" />
                        <span className="input-focus-effect"></span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <input name="Subject" placeholder="Subject" className="form-control" type="text" />
                        <span className="input-focus-effect"></span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <textarea name="comment" placeholder="Describe your project" rows="3" className="form-control"></textarea>
                        <span className="input-focus-effect"></span>
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="send">
                        <button className="m-btn m-btn-theme"><i className="fa fa-envelope-o" aria-hidden="true"></i>Send</button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="contact-map">
                <div className="embed-responsive embed-responsive-16by9 h-100">
                  <iframe className="embed-responsive-item" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3151.840107317064!2d144.955925!3d-37.817214!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sin!4v1520156366883"></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
};

export default contactus;