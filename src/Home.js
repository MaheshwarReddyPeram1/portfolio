import React from "react";
import "./Home.css";
import "./index";
import gsap from "gsap";
import AOS from "aos";
import profile from "./images/mahi.jpg";
import profile1 from "./images/mahi1.PNG";
import work from "./images/work1.jpg";
import amazon from "./images/amazon.PNG"
import connect from "./images/connect.PNG"
import coderrange from "./images/coderrange.PNG"
import emailjs from "emailjs-com";
import { useAlert } from "react-alert";
import Typed from "react-typed";


// import './js/slider'
// import Glide from "@glidejs/glide"
import { useEffect } from "react";
const Home = () => {
  
    

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7f4e33j",
        "template_yw1523m",
        e.target,
        "user_ZVE6kaaWoren7oRSg7S3c"
      )
      .then(
        (result) => {
          alert.success("Sent Successfully");
          console.log("mahireddy", result.text);
        },
        (error) => {
          console.log("email.js errors", error.text);
        }
      );
  }

  const alert = useAlert();
  useEffect(() => {
    // const typed=new Typed(".typing", {
    //   strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    //   typeSpeed: 100,
    //   backSpeed: 60,
    //   loop: true,

    // }
    // );
    const navOpen = document.querySelector(".hamburger");
    const navContainer = document.querySelector(".nav-menu");
    const navList = document.querySelector(".nav-list");
    // console.log(navContainer);
    // Open and Close Navbar
    navOpen.addEventListener("click", () => {
      const listHeight = navList.getBoundingClientRect().height;
      const containerHeight = navContainer.getBoundingClientRect().height;
      if (containerHeight === 0) {
        navContainer.style.height = `${listHeight}px`;
      } else {
        navContainer.style.height = "0px";
      }
    });

    // Fix Navbar
    const navBar = document.querySelector(".navigation");
    const topLink = document.querySelector(".goto-top");
    window.addEventListener("scroll", () => {
      const navHeight = navBar.getBoundingClientRect().height;
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        navBar.classList.add("fix-nav");
      } else {
        navBar.classList.remove("fix-nav");
      }

      // if (scrollHeight > 500) {
      //   topLink.classList.add("show");
      // } else {
      //   topLink.classList.remove("show");
      // }
    });

    // Smooth Scroll
    const links = document.querySelectorAll(".scroll-link");
    const linksContainer = document.querySelector(".nav-list");

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Prevent Default
        e.preventDefault();
        // Scroll to a specific spot
        const id = e.currentTarget.getAttribute("href").slice(1);
        const el = document.getElementById(id);

        const navHeight = navBar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixNav = navBar.classList.contains("fix-nav");
        let position = el.offsetTop - navHeight;

        if (navHeight > 82) {
          position = position + containerHeight;
        } else if (!fixNav) {
          position = position + navHeight + navHeight;
        }

        window.scrollTo({
          left: 0,
          top: position,
        });

        navContainer.style.height = "0";
      });
    });

    gsap.from(".logo", { opacity: 0, duration: 1, delay: 0.5, y: -10 });
    gsap.from(".hamburger", { opacity: 0, duration: 1, delay: 1, x: 20 });
    gsap.from(".hero h1", { opacity: 0, duration: 1, delay: 1.5, y: -100 });
    gsap.from(".hero p", { opacity: 0, duration: 1, delay: 2, x: -100 });
    gsap.from(".hero .btn1", { opacity: 0, duration: 1, delay: 2.5, x: -20 });
    gsap.from(".hero .btn2", { opacity: 0, duration: 1, delay: 2.5, x: 20 });
    gsap.from(".nav-item", {
      opacity: 0,
      duration: 1,
      delay: 1.2,
      y: 30,
      stagger: 0.2,
    });
    AOS.init();
    // $(document).ready(function(){

    // var typed = new Typed(".typing-2", {
    //   strings: ["YouTuber", "Developer", "Blogger", "Designer", "Freelancer"],
    //   typeSpeed: 100,
    //   backSpeed: 60,
    //   loop: true,
    // });
    // });
  }, []);
  const Home_jsx = () => {
    return (
      <div className="home">
        <header id="header" className="header">
          <div className="navigation">
            <nav className="nav d-flex container">
              <div className="nav-header d-flex">
                <div className="logo">
                  <h1>
                    MA<span>H</span>I
                  </h1>
                </div>
                <div className="hamburger">
                  <i className="fas fa-bars"></i>
                </div>
              </div>

              <div className="nav-menu d-flex">
                <ul className="nav-list d-flex">
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      Home
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#about" className="nav-link scroll-link">
                      About
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#services" className="nav-link scroll-link">
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#portfolio" className="nav-link scroll-link">
                      Portfolio
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#blog" className="nav-link scroll-link">
                      Blog
                    </a>
                  </li>

                  <li className="nav-item">
                    <a href="#contact" className="nav-link scroll-link">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>

          <div className="row w-100">
            <div
              className="col-lg-6 col-md-4 col-sm-4 pl-5  offset-md-1 headercontent"
              // style={{ marginLeft: "160px" }}
            >
              <div className="hero container">
                <div>
                  <h1>
                    Hello,I'm <span>M</span>ahi,<br />
                    {/* <div class="text-3"> */}
                    And, I'm a{" "}
                    <Typed
                      strings={[
                        "",
                        "",
                        "FULLSTACK web developer at jvt.",
                        "Blogger.",
                        "Freelancer.",
                        "web developer."
                      ]}
                      typeSpeed={100}
                    />
                    {/* </div> */}
                  </h1>
                  <p>
                    I design & develop a website using the latest technologies.
                    Our design is unique, also the code is valid. I do
                    everything with a professional touch.
                  </p>
                </div>

                <div className="btn-group">
                  <a href="#contact" className="btn btn1">
                    CONTACT ME
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-5 col-md-4 pr-5 pt-5 "
              style={{ marginTop: "100px" }}
            >
              <div>
                <img
                  className="bannerimg"
                  data-aos="fade-left"
                  data-aos-duration="2000"
                  src={profile1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </header>

        <section className="section about" id="about">
          <div className="about-center container">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <div className="subtitle">Warm welcome!</div>
              <h2 className="title">About Mahi</h2>
              <p>
                I'm working as a Fullstack developer at JVT. I use my time
                to make some creative things & really proud of that. Mostly,
                I do web design & development work based on ReactJs and Django.
              </p>
              <p className="top">
                
              </p>

              <div className="count">
              
                <div className="count-2">
                  <span>1</span>
                  <p>Award</p>
                </div>
                <div className="count-3">
                  <span>640+</span>
                  <p>Hours worked</p>
                </div>
              </div>
            </div>
            <div
              className="right"
              data-aos="fade-left"
              data-aos-duration="2000"
            >
              <img
                src={profile}
                style={{ width: "450px", height: "450px"}}
              />
            </div>
          </div>
        </section>

        <section className="section services" id="services">
          <div className="services-center container">
            <div className="top">
              <div className="subtitle">What I love to Do!</div>
              <h2 className="title">My Skills</h2>
              <p>
                I have a lot of specialty, but what I love
                to do most of the time Is a real question! Here are the things I
                really love to do!
              </p>
            </div>

            <div className="glide" id="glide1">
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__glide__slides">
                  <li className="glide__slide">
                    <div classname="glide__service">
                      <span>
                        <i className="fas fa-mobile-alt"></i>
                        {/* <h3>ReactJs,Django</h3> */}
                      </span>
                     
                      <p>
                        I build ReactJs websites, maintaining all the ReactJs rules &
                        standard, which is 100% valid.
                      </p>
                    </div>
                  </li>
                  <div className="row">
                    <div className="col-lg-3 col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-paint-brush"></i>
                          </span>
                          <h3>HTML</h3>
                          <p>
                            Slicing HTML with proper way is a very
                            important thing & I do it most efficient way.
                          </p>
                        </div>
                      </li>
                    </div>

                    <div className="col-lg-3 col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="far fa-heart"></i>
                          </span>
                          <h3>Javascript</h3>
                          <p>
                            Javascript is the #1 programming language at this
                            moment & I know it very well.
                          </p>
                        </div>
                      </li>
                    </div>

                    <div className="col-lg-3 col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="far fa-image"></i>
                          </span>
                          <h3>Python</h3>
                          <p>
                            Python is the #1 programming language at this
                            moment & I know it very well.
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="col-lg-3 col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-pencil-alt"></i>
                          </span>
                          <h3>ReactJs</h3>
                          <p>
                            ReactJs is our love & I can build awesome custom
                            made website using this #1.
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="col-lg-3 col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                          <i className="far fa-heart"></i>
                          </span>
                          <h3>Django</h3>
                          <p>
                            Django is a one of the top framework at this
                            moment & I know it very well.
                          </p>
                        </div>
                      </li>
                    </div>
                    <div className="col-lg-3 col-md-4 pb-4">
                      <li className="glide__slide">
                        <div className="service">
                          <span>
                            <i className="fas fa-pencil-alt"></i>
                          </span>
                          <h3>PostgreSQL</h3>
                          <p>
                            PostgreSQL is a one of the top DB at this
                            moment & I know it very well.
                          </p>
                        </div>
                      </li>
                    </div>
                  </div>
                </ul>
              </div>

              <div className="glide__bullets" data-glide-el="controls[nav]">
                <button className="glide__bullet" data-glide-dir="<<"></button>
                <button className="glide__bullet" data-glide-dir=">>"></button>
              </div>
            </div>
          </div>
        </section>

        <section class="section portfolio" id="portfolio">
          <div class="portfolio-center container">
            <div class="top">
              <div class="subtitle">Work I Completed</div>
              <h2 class="title">My Portfolio</h2>
              <p>
              I have a lot of specialty, but what I love
                to do most of the time Is a real question! Here are the things I
                really love to do!
              </p>
            </div>

            <div class="portfolio-container">
              <div class="single" data-aos="fade-down" data-aos-duration="2000">
                <img src={amazon} alt="" />
                <div class="overlay">
                  <div class="details">
                    <h3>Amazon clone</h3>
                    <div class="btn-group">
                      <a href="">
                        <i class="fas fa-plus"></i>
                      </a>
                      <a href="https://clone-d382a.web.app/">
                        <i class="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                class="single"
                data-aos="fade-right"
                data-aos-duration="2000"
              >
                <img src={connect} alt="" />
                <div class="overlay">
                  <div class="details">
                    <h3>Company connect</h3>
                    <div class="btn-group">
                      <a href="">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="https://jvtconnect.herokuapp.com/">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="single"
                data-aos="fade-left"
                data-aos-duration="2000"
              >
                <img src={coderrange} alt="" />
                <div className="overlay">
                  <div className="details">
                    <h3>CoderRange(Company work)</h3>
                    <div className="btn-group">
                      <a href="">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="https://coderrange.herokuapp.com/">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div
                className="single"
                data-aos="flip-up"
                data-aos-duration="2000"
              >
                <img src={work} alt="" />
                <div className="overlay">
                  <div className="details">
                    <h3>Coming soon..</h3>
                    <div className="btn-group">
                      <a href="">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="single"
                data-aos="flip-right"
                data-aos-duration="2000"
              >
                <img src={work} alt="" />
                <div className="overlay">
                  <div className="details">
                    <h3>Coming soon..</h3>
                    <div className="btn-group">
                      <a href="">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="single" data-aos="flip-up" data-aos-duration="2000">
                <img src={work} alt="" />
                <div className="overlay">
                  <div className="details">
                    <h3>Coming soon..</h3>
                    <div className="btn-group">
                      <a href="">
                        <i className="fas fa-plus"></i>
                      </a>
                      <a href="">
                        <i className="fas fa-link"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>*/}
            </div> 
          </div>
        </section>

        <section class="section contact" id="contact">
          <div class="contact-center container">
            <div
              class="left"
              data-aos="fade-down-right"
              data-aos-duration="2000"
            >
              <h2>Contact ME</h2>
              <p>
                Send your requirement using the form & our support team will get
                back to you as soon as possible. Please describe briefly
                everything you need & possibly send some example you like.
              </p>
              <p>
                Note:I hate to send spam messages to our valuable clients.
              </p>
              <div class="bottom">
                <div>
                  <span>
                    <i class="fas fa-map-marked-alt"></i>
                  </span>
                  <h4>Location</h4>
                  <small>Andhra Pradesh,India</small>
                </div>
                <div>
                  <span>
                    <i class="far fa-envelope-open"></i>
                  </span>
                  <h4>Email</h4>
                  <small>maheswarreddyperam@gmail.com</small>
                </div>
              </div>
            </div>

            <div class="right" data-aos="fade-up-left" data-aos-duration="2000">
              <div class="contacts">
                Message Me
                <form onSubmit={sendEmail}>
                  <div class="fields">
                    <div class="field name">
                      <input
                        type="text"
                        placeholder="Your Name"
                        required
                        name="name"
                      />
                    </div>
                    <div class="field email">
                      <input
                        type="email"
                        placeholder="Your Email"
                        required
                        name="email"
                      />
                    </div>
                  </div>
                  <div class="field">
                    <input
                      type="text"
                      placeholder="Subject"
                      required
                      name="subject"
                    />
                  </div>
                  <div class="field textarea">
                    <textarea
                      cols="30"
                      rows="10"
                      placeholder="Message.."
                      name="message"
                      required
                    ></textarea>
                  </div>
                  <div class="button">
                    <button type="submit">Send message</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        

        {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/Glide.js/3.4.1/glide.min.js"></script> */}
        {/* <script src="./js/slider.js"></script>
<script src="./js/index.js"></script> */}
      </div>
    );
  };

  return <div>{Home_jsx()}</div>;
};

export default Home;
