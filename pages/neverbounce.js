import { Footer, Header, Icon } from '../components';
import { useTranslation, getInitialProps } from 'react-i18next';
import './i18n';
import ScrollAnimation from 'react-animate-on-scroll';

const neverbounce = () => {
  const { t, i18n } = useTranslation();

  return <div>

    <title>NeverBounce | TheChecker Email Verifier</title>

    <Header />

    <main>

      <section id="integrations" className="section">
        <div className="container p-60px-t">
          <div className="row justify-content-center m-45px-b md-m-25px-b">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <div className="section-title text-center">
                <h2 className="theme-after-bg">The Best NeverBounce Alternative</h2>
                <div className="title-border"><span className="lg"></span><span className="md"></span><span className="sm"></span></div>
                <p>An fast, proven accurate and affordable solution for email verification: TheChecker</p>
              </div>
            </div>
          </div>

          <div className="row">

            <div className="col-md-12 m-15px-tb text-center">

              <p>Meet TheChecker, the most cost-effective email verification and email list cleaning service you can use! See why 1,000's of professionals from 120+ countries have been switching from solutions like NeverBounce to TheChecker.</p>

              <table className="table p-60px-t neverbounce-table">

                <thead>
                  <tr>
                    <th><img src="static/img/email-verification-service-logo-thechecker.png" className="css-ky8ddw" /></th>
                    <th className="text-center"></th>
                    <th className="text-center"></th>
                  </tr>
                </thead>

                <tbody>

                  <tr>
                    <td>Price for 10k verifications</td>
                    <td className="text-center">
                      <p>$9.00</p>
                      <p className="text-center text-primary neverbounce-td">(save $41,00)</p>
                    </td>
                    <td className="text-center">$50.00</td>
                  </tr>

                  <tr>
                    <td>Price for 100k verifications</td>
                    <td className="text-center">
                      <p>$69.00</p>
                      <p className="text-center text-primary neverbounce-td">(save $331,00)</p>
                    </td>
                    <td className="text-center">$400.00</td>
                  </tr>

                  <tr>
                    <td>Price for 1M verifications</td>
                    <td className="text-center"><p className="text-primary neverbounce-td"></p></td>
                    <td className="text-center">$2,500.00</td>
                  </tr>

                  <tr>
                    <td>Deliverability guarantee</td>
                    <td className="text-center">99%+</td><td className="text-center text-warning"></td>
                  </tr>

                  <tr>
                    <td>Spam trap removal</td><td className="text-center text-primary">YES</td>
                    <td className="text-center text-primary"></td>
                  </tr>

                  <tr>
                    <td>Javascript Widget</td>
                    <td className="text-center text-primary">YES</td>
                    <td className="text-center text-danger"></td>
                  </tr>

                  <tr>
                    <td>3 API verification methods</td>
                    <td className="text-center text-primary">YES</td>
                    <td className="text-center text-danger"></td>
                  </tr>

                  <tr>
                    <td>Chat support</td>
                    <td className="text-center text-primary">YES</td>
                    <td className="text-center text-primary"></td>
                  </tr>

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </section>

      <section id="carousel" className="section">
        <div className="container">

          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div className="row justify-content-center m-60px-b md-m-40px-b">
              <div className="col-md-10 col-lg-8 col-xl-7">
                <div className="section-title text-center">
                  <label>Testimonial</label>
                  <h2 className="theme-after-bg">What Our Customers Say?</h2>
                  <div className="title-border">
                    <span className="lg"></span>
                    <span className="md"></span>
                    <span className="sm"></span>
                  </div>
                  <p>World-class teams in 130+ countries choose TheChecker.</p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          <div id="carousel2" className="carousel slide" data-ride="carousel" data-interval="3500" data-pause="hover">

            <ul className="carousel-indicators">
              <li data-target="#carousel2" data-slide-to="0" className="active"></li>
              <li data-target="#carousel2" data-slide-to="1"></li>
              <li data-target="#carousel2" data-slide-to="2"></li>
            </ul>

            <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
              <div className="carousel-inner">

                <div className="carousel-item active text-center">

                  <div className="row">

                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/leadlovers.png" />
                        <p>Here at LeadLovers we’re always looking for smart tools that help us to improve our email deliverability even more. By integrating TheChecker in the lead acquisition flow we got amazing results in the prevention of sending reputation issues.</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="https://f6s-public.s3.amazonaws.com/profiles/1860904_original.jpg" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Fernando Milek</span>
                          <label>CTO</label>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/actualsales.png" />
                        <p>An excellent e-mail checker. The accuracy of the e-mail checking, it's very reliable. It has been a pretty good experience using it.</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="https://cdn0.capterra-static.com/profile-images/linkedin/cef5f5eabca48a40d1ff45a6bacc9dfc.jpeg" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Aristóteles de Oliveira</span>
                          <label>Digital Marketing and Sales Manager</label>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

                <div className="carousel-item">
                  <div className="row">
                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/advertisepurple.png" />
                        <p>Using TheChecker has been the most efficient and user-friendly email checker for our company to validate or go on email marketing campaigns. There has been no need to use any other site since!</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="https://media.licdn.com/dms/image/C5603AQFBRCGJZ0nBCA/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=nUoisc8_XcXYRLB_NPTi5haqMhLMYGEtQU1MeKv46g0" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Michael Lee</span>
                          <label>Inside Sales Representative</label>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/inboxhero.png" />
                        <p>Good and practical tool. Easy to use API, great web form widget and simple user interface make this tool a great find - and it's really well priced too!</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="https://inboxhero.co.uk/wp-content/uploads/2018/10/ProfilePic-e1540224793147.jpg" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Jon Mae</span>
                          <label>Email Marketing Expert</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/rockcontent.png" />
                        <p>I didn’t know how many leads I missed due to bad email lists and sending reputation problems. TheChecker has made it very quick and easy to dramatically improve the quality of the campaigns and to generate new sales opportunities through email. I strongly recommend it!</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="data:image/jpeg;base64,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" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Ivan Nunes de Castro</span>
                          <label>Senior Sales Manager</label>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/fi.png" />
                        <p>We made the switch to TheChecker in 2017 - we needed to ensure our clients marketing campaigns achieved the highest deliverability rates. Having used many services with varying results, we have found TheChecker to be the best - fast, accurate and easy to use.</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="static/img/testimonials/paul.png" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Paul McGuire</span>
                          <label>Director</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row">
                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/mediapost.png" />
                        <p>In addition to the attention and commitment of TheChecker’s team to help us in the beginning of our partnership, the tool is much easier to use than the one we used previously (BriteVerify) and the results are excellent. It will certainly be a very long lasting partnership!</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="https://media.licdn.com/dms/image/C4D03AQHDUX4HSQifLw/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=7fTOFnJbj5BIe2jaItQxI_L3VKee22zCq9FzSARxdpI" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Ademir Diniz</span>
                          <label>Product Manager</label>
                        </div>
                      </div>
                    </div>
                    <div className="testimonial-col col-sm-12 col-md-5 col-lg-5 col-xl-5">
                      <i className="ti-quote-left"></i>
                      <div className="say">
                        <img src="static/img/testimonials/eivos.png" />
                        <p>The best! It's easy to use, the results are great. All works perfect. We reduce all our email marketing complaints and fake registers.</p>
                      </div>
                      <div className="user">
                        <div className="img">
                          <img src="https://media.licdn.com/dms/image/C4D03AQGsLEE38cNysQ/profile-displayphoto-shrink_800_800/0?e=1556755200&v=beta&t=ixSYs4ZI5HAXv0QDZ-nWIBtjgtOZRGPnA1-yeRMxB7Y" alt="" title="" />
                        </div>
                        <div className="name">
                          <span>Julián Pérez</span>
                          <label>Director</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <div className="owl-dots">
              <a className="left slide-control" href="#carousel2" role="button" data-slide="prev"><i className="fa fa-chevron-left"></i></a>
              <a className="right slide-control" href="#carousel2" role="button" data-slide="next"><i className="fa fa-chevron-right"></i></a>
            </div>
          </div>
        </div>
      </section>

    </main>

    <Footer />
    
  </div>

}

export default neverbounce;
