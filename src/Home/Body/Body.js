import React from 'react'
import logo from '../../Assert/images/logo.png';
import logo2 from '../../Assert/images/logo2.png';
import serviceIcon01 from '../../Assert/images/service-icon-01.png'
import serviceIcon02 from '../../Assert/images/service-icon-02.png'
import serviceIcon03 from '../../Assert/images/service-icon-03.png'
import aboutLeftImage from '../../Assert/images/about-left-image.png'
import contactDec from '../../Assert/images/contact-dec.png';
import contactLeftDec from '../../Assert/images/contact-left-dec.png'
import tablesLeftDec from '../../Assert/images/tables-left-dec.png'
import tablesRightDec from '../../Assert/images/tables-right-dec.png'
import footerDec from '../../Assert/images/footer-dec.png';
import '../../Assert/css/templatemo-onix-digital.css';

const body = () => {
  return (
    <div>
       <div>
        {/* <div id="js-preloader" className="js-preloader">
            <div className="preloader-inner">
            <span className="dot"></span>
            <div className="dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
            </div>
        </div> */}
  
  <header className="header-area header-sticky wow slideInDown" data-wow-duration="0.75s" data-wow-delay="0s">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <nav className="main-nav">
            <a href="index.html" className="logo">
              <img src={logo} alt=""/>
            </a>
            
            <ul className="nav">
              <li className="scroll-to-section"><a href="#top" className="active">Home</a></li>
              {/* <li className="scroll-to-section"><a href="#services">Services</a></li> */}
              <li className="scroll-to-section"><a href="#about">About</a></li>
              {/* <li className="scroll-to-section"><a href="#portfolio">Portfolio</a></li>
              <li className="scroll-to-section"><a href="#video">Videos</a></li>  */}
              <li className="scroll-to-section"><a href="#contact">Contact Us</a></li> 
              <li className="scroll-to-section"><div className="main-red-button-hover"><a href="/login">Login</a></div></li> 
            </ul>        
            <a href="#top" className='menu-trigger'>
                <span>Menu</span>
            </a>
          </nav>
        </div>
      </div>
    </div>
  </header>

  <div id="about" className="about-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="left-image">
            <img src={aboutLeftImage} alt="Two Girls working together" />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="section-heading">
            <h2>Grow your website with our <em>SEO Tools</em> &amp; <span>Project</span> Management</h2>
            <p>You can browse free HTML templates on Too CSS website. Visit the website and explore latest website templates for your projects.</p>
            <div className="row">
              <div className="col-lg-4">
                <div className="fact-item">
                  <div className="count-area-content">
                    <div className="icon">
                      <img src={serviceIcon01} alt="" />
                    </div>
                    <div className="count-digit">320</div>
                    <div className="count-title">SEO Projects</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fact-item">
                  <div className="count-area-content">
                    <div className="icon">
                      <img src={serviceIcon02} alt="" />
                    </div>
                    <div className="count-digit">640</div>
                    <div className="count-title">Websites</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="fact-item">
                  <div className="count-area-content">
                    <div className="icon">
                      <img src={serviceIcon03} alt="" />
                    </div>
                    <div className="count-digit">120</div>
                    <div className="count-title">Satisfied Clients</div>
                    <p>Lorem ipsum dolor sitti amet, consectetur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  

  <div id="pricing" className="pricing-tables">
    <div className="tables-left-dec">
      <img src={tablesLeftDec} alt="" />
    </div>
    <div className="tables-right-dec">
      <img src={tablesRightDec} alt="" />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 offset-lg-3">
          <div className="section-heading">
            <h2>Select a suitable <em>plan</em> for your next <span>projects</span></h2>
            <span>Our Plans</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <div className="item first-item">
            <h4>Starter Plan</h4>
            <em>$160/mo</em>
            <span>$140</span>
            <ul>
              <li>10 Projects</li>
              <li>100 GB space</li>
              <li>20 SEO checkups</li>
              <li>Basic Support</li>
            </ul>
            <div className="main-blue-button-hover">
              <a href="#top">Get Started</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item second-item">
            <h4>Standard Plan</h4>
            <em>$240/mo</em>
            <span>$200</span>
            <ul>
              <li>20 Projects</li>
              <li>200 GB space</li>
              <li>50 SEO checkups</li>
              <li>Pro Support</li>
            </ul>
            <div className="main-blue-button-hover">
              <a href="#top">Get it Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="item third-item">
            <h4>Advanced Plan</h4>
            <em>$360/mo</em>
            <span>$280</span>
            <ul>
              <li>30 Projects</li>
              <li>300 GB space</li>
              <li>100 SEO checkups</li>
              <li>Best Support</li>
            </ul>
            <div className="main-blue-button-hover">
              <a href="#top">Buy Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="contact" className="contact-us section">
    <div className="container">
      <div className="row">
        <div className="col-lg-7">
          <div className="section-heading">
            <h2>Feel free to <em>Contact</em> us via the <span>HTML form</span></h2>
            <div id="map">
              {/* <iframe src="https://maps.google.com/maps?q=Av.+L%C3%BAcio+Costa,+Rio+de+Janeiro+-+RJ,+Brazil&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="360px" frameborder="0" style={{border:"0"}} allowfullscreen=""></iframe> */}
            </div>
            <div className="info">
              <span><i className="bi bi-telephone-fill"></i> <a href="#top">010-020-0340<br/>090-080-0760</a></span>
              <span><i className="bi bi-envelope-fill"></i> <a href="#top">info@company.com<br/>mail@company.com</a></span>
            </div>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <form id="contact" action="" method="get">
            <div className="row">
              <div className="col-lg-12">
                <fieldset>
                  <input type="name" name="name" id="name" placeholder="Name" autocomplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="surname" name="surname" id="surname" placeholder="Surname" autocomplete="on" required />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <input type="text" name="website" id="website" placeholder="Your Website URL" required="" />
                </fieldset>
              </div>
              <div className="col-lg-12">
                <fieldset>
                  <button type="submit" id="form-submit" className="main-button">Submit Request</button>
                </fieldset>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <div className="contact-dec">
      <img src={contactDec} alt="" />
    </div>
    <div className="contact-left-dec">
      <img src={contactLeftDec} alt="" />
    </div>
  </div>

  <div className="footer-dec">
    <img src={footerDec} alt="" />
  </div>

  <footer>
    <div className="container">
      <div className="row">
        <div className="col-lg-3">
          <div className="about footer-item">
            <div className="logo">
              <a href="#top"><img src={logo2} alt="Onix Digital TemplateMo" /></a>
            </div>
            <a href="#top">info@company.com</a>
            <ul>
              <li><a href="#top"><i className="bi bi-facebook"></i></a></li>
              <li><a href="#top"><i className="bi bi-twitter"></i></a></li>
              <li><a href="#top"><i className="bi bi-instagram"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="services footer-item">
            <h4>Services</h4>
            <ul>
              <li><a href="#top">SEO Development</a></li>
              <li><a href="#top">Business Growth</a></li>
              <li><a href="#top">Social Media Managment</a></li>
              <li><a href="#top">Website Optimization</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="community footer-item">
            <h4>Community</h4>
            <ul>
              <li><a href="#top">Digital Marketing</a></li>
              <li><a href="#top">Business Ideas</a></li>
              <li><a href="#top">Website Checkup</a></li>
              <li><a href="#top">Page Speed Test</a></li>
            </ul>
          </div>
        </div>
        {/* <div className="col-lg-3">
          <div className="subscribe-newsletters footer-item">
            <h4>Subscribe Newsletters</h4>
            <p>Get our latest news and ideas to your inbox</p>
            <form action="#" method="get">
              <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
              <button type="submit" id="form-submit" className="main-button "><i className="fa fa-paper-plane-o"></i></button>
            </form>
          </div>
        </div> */}
        <div className="col-lg-12">
          <div className="copyright">
            <p>Copyright © 2023 CacheTechnology Private Limited. All Rights Reserved. 
            <br />
            Designed by <a rel="nofollow" href="https://templatemo.com" title="free CSS templates">TemplateMo</a></p>
          </div>
        </div>
      </div>
    </div>
  </footer>



    </div>
    </div>
  )
}

export default body
