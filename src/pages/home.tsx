import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
// import PWAInstallPrompt from "../pages/pwa_install_prompt";

export default function Home() {

  const router = useRouter()

  useEffect(() => {
    // Always do navigations after the first render
    router.push('/home', undefined, { shallow: true })
  }, [router, router.query.counter]);

  return (
    <div>

      {/* <PWAInstallPrompt /> */}

      <div className="th-hero-wrapper hero-4" id="hero">
        <div className="body-particle" id="body-particle"></div>
        <div className="hero-img tilt-active">
          {/* <Image src="/../../public/assets/img/hero/hero_img_4_1.png" alt="Hero Image" width={75} height={75}/> */}
          <Image
            src="/assets/img/hero/hero_img_4_1.png"
            alt="Hero Image"
            width={712}
            height={734}
          />
          {/* <Image src="/assets/img/hero/hero_img_4_1.png" alt="Hero Image" /> */}
        </div>
        <div className="container">
          <div className="hero-style4">
            <div className="ripple-shape">
              <span className="ripple-1"></span><span className="ripple-2"></span><span className="ripple-3"></span><span className="ripple-4"></span><span className="ripple-5"></span><span className="ripple-6"></span>
            </div>
            <span className="hero-subtitle">Intelligence Meets Innovation</span>
            <h1 className="hero-title">Your Digital Transformation Partner</h1>
            <p className="hero-text">
              At WorkCleverly Tech Limited, we empower businesses to unlock their true potential through cutting-edge solutions
              in Data Analytics, Artificial Intelligence, Cloud Infrastructure, ERP Modernization, and more. With a global presence
              in Hong Kong and Chennai, we deliver tailored solutions that drive success, efficiency, and growth.
            </p>
            <div className="btn-group">
              <Link href="/services" className="th-btn">
                Discover Our Solutions
                <i className="fa-regular fa-arrow-right ms-2">
                </i>
              </Link>
              <div className="btn-group">
                <Link href="/contact" className="th-btn">
                  Schedule a Free Consultation
                  <i className="fa-regular fa-arrow-right ms-2">
                  </i>
                </Link>
                {/* <a href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                  className="play-btn popup-video">
                  <i className="fas fa-play">
                  </i>
                </a>
                <div className="media-body">
                  <a
                    href="https://www.youtube.com/watch?v=_sI_Ps7JSEk"
                    className="btn-title popup-video"
                  >Watch Our Story
                  </a>
                  <span className="btn-text">Subscribe Now</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="triangle-1"></div>
        <div className="triangle-2"></div>
        <div className="hero-shape2">
          <Image src="/assets/img/hero/hero_shape_2_2.png" alt="shape" width={240} height={147} />
        </div>
        <div className="hero-shape3">
          <Image src="/assets/img/hero/hero_shape_2_3.png" alt="shape" width={272} height={198} />
        </div>
      </div>

      <section className="space space-sub-home" id="process-sec">
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title">Our Expertise</span>
            <h2 className="sec-title">
              Services <span className="text-theme">Overview</span>
            </h2>
          </div>
          <div className="process-card-area">
            <div className="process-line position-top">
              <Image src="/assets/img/bg/process_line_2.svg" alt="line" width={985} height={72} />
            </div>
            <div className="row gy-40 justify-content-between">
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse"></div>
                  <div className="process-card_icon">
                    <Image src="/assets/img/icon/data-analytics.png" alt="icon" width={76} height={66} />
                  </div>
                  <h2 className="box-title">Data Analytics</h2>
                  <p className="process-card_text">
                    Transform complex data into actionable insights for smarter decisions.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse"></div>
                  <div className="process-card_icon">
                    <Image src="/assets/img/icon/artificial_intelligence.png" alt="icon" width={72} height={66} />
                  </div>
                  <h2 className="box-title">Artificial Intelligence & Machine Learning</h2>
                  <p className="process-card_text">
                    Build intelligent systems that automate and accelerate outcomes.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse"></div>
                  <div className="process-card_icon">
                    <Image src="/assets/img/icon/business_intelligence_solutions.png" alt="icon" width={90} height={66} />
                  </div>
                  <h2 className="box-title">Business Intelligence Solutions</h2>
                  <p className="process-card_text">
                    Interactive dashboards for real-time decision-making.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse"></div>
                  <div className="process-card_icon">
                    <Image src="/assets/img/icon/ai_powered_chatbots.png" alt="icon" width={57} height={66} />
                  </div>
                  <h2 className="box-title">AI-Powered Chatbots</h2>
                  <p className="process-card_text">
                    Enhance customer experience with intelligent automation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="process-card-area" style={{ marginTop: '40px' }}>
            <div className="process-line position-top">
              <Image src="/assets/img/bg/process_line_2.svg" alt="line" width={985} height={72} />
            </div>
            <div className="row gy-40">
              <div className="col-sm-6 col-xl-auto process-card-wrap" style={{ marginRight: "67px" }}>
                <div className="process-card">
                  <div className="pulse"></div>
                  <div className="process-card_icon">
                    <Image src="/assets/img/icon/cloud_infrastructure_modernization.png" alt="icon" width={76} height={66} />
                  </div>
                  <h2 className="box-title">Cloud Infrastructure & Modernization</h2>
                  <p className="process-card_text">
                    Scalable, secure, and future-ready cloud solutions.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap" style={{ marginRight: "67px" }}>
                <div className="process-card">
                  <div className="pulse"></div>
                  <div className="process-card_icon">
                    <Image src="/assets/img/icon/erp_integration_optimization.png" alt="icon" width={72} height={66} />
                  </div>
                  <h2 className="box-title">ERP Integration & Optimization</h2>
                  <p className="process-card_text">
                    Streamline and unify business processes with tailored ERP solutions.
                  </p>
                </div>
              </div>
              <div className="col-sm-6 col-xl-auto process-card-wrap">
                <div className="process-card">
                  <div className="pulse"></div>
                  <div className="process-card_icon">
                    <Image src="/assets/img/icon/data_platform_migration_modernization.png" alt="icon" width={90} height={66} />
                  </div>
                  <h2 className="box-title">Data Platform Migration & Modernization</h2>
                  <p className="process-card_text">
                    Upgrade legacy systems to modern platforms for agility and efficiency.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <div className="why-sec-v2" data-bg-src="/assets/img/bg/why_bg_2.jpg">
        <div className="container space">
          <div className="row align-items-center flex-row-reverse">
            <div className="col-xl-6 mb-30 mb-xl-0">
              <div className="img-box5">
                <Image
                  className="tilt-active"
                  src="/assets/img/normal/why_choose_us.jpg"
                  alt="Why" width={490} height={564}
                />
                {/* <div className="year-counter">
                  <h3 className="year-counter_number">
                    <span className="counter-number"></span>
                  </h3>
                  <p className="year-counter_text"></p>
                </div> */}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="title-area mb-35">
                <div className="shadow-title color3">Choose US</div>
                <span className="sub-title"
                ><div className="icon-masking me-2">
                    <span
                      className="mask-icon"
                      data-mask-src="/assets/img/theme-img/title_shape_2.svg"
                    ></span>
                    <Image
                      src="/assets/img/theme-img/title_shape_2.svg"
                      alt="shape" width={27} height={27}
                    />
                  </div>
                  WHY CHOOSE US</span>
                <h2 className="sec-title">
                  Why WorkCleverly Tech Limited?
                  {/* <span className="text-theme">IT Services</span> */}
                </h2>
              </div>
              {/* <p className="mt-n2 mb-30">
                Collaboratively envisioneer user friendly supply chains and cross
                unit imperative. Authoritativel fabricate competitive resource and
                holistic. Holisticly restore real time resources whereas
                standardized networks.
              </p> */}
              <div className="feature-circle-wrap">
                <div className="feature-circle">
                  {/* <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent="100">
                      <div className="circle-num"></div>
                    </div>
                  </div> */}  
                  <div className="media-body">
                    <h3 className="feature-circle_title">Global Reach</h3>
                    <p className="feature-circle_text">
                      With headquarters in Hong Kong and a strategic base in Chennai, we serve enterprises worldwide.
                    </p>
                  </div>
                </div>
                <div className="feature-circle">
                  {/* <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent="100">
                      <div className="circle-num"></div>
                    </div>
                  </div> */}
                  <div className="media-body">
                    <h3 className="feature-circle_title">Innovative Expertise</h3>
                    <p className="feature-circle_text">
                      A team of highly skilled data scientists, engineers, and AI specialists delivering world-class solutions.
                    </p>
                  </div>
                </div>
              </div>
              <div className="feature-circle-wrap">
                <div className="feature-circle">
                  {/* <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent="100">
                      <div className="circle-num"></div>
                    </div>
                  </div> */}
                  <div className="media-body">
                    <h3 className="feature-circle_title">Tailored Solutions</h3>
                    <p className="feature-circle_text">
                      Every solution is customized to address your unique challenges and goals.
                    </p>
                  </div>
                </div>
                <div className="feature-circle">
                  {/* <div className="progressbar" data-path-color="#684DF4">
                    <div className="circle" data-percent="100">
                      <div className="circle-num"></div>
                    </div>
                  </div> */}
                  <div className="media-body">
                    <h3 className="feature-circle_title">Proven Track Record</h3>
                    <p className="feature-circle_text">
                      Trusted by leading businesses to deliver measurable outcomes and sustainable growth.
                    </p>
                  </div>
                </div>
              </div>
              {/* <a href="about.html" className="th-btn">
                LEARN MORE
                <i className="fa-regular fa-arrow-right ms-2">
                </i>
              </a> */}
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}