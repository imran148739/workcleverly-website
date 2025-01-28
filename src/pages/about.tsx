import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {

    const router = useRouter();

    useEffect(() => {
        if (router.isReady && router.pathname !== "/about") {
          router.replace("/about");
        }
      }, [router.isReady, router.pathname]);

    // useEffect(() => {
    //     // Always do navigations after the first render
    //     router.push('/about', undefined, { shallow: true })
    // }, [router, router.query.counter]);

    // useEffect(() => {

    // const tabs = document.querySelectorAll('.nav-link');
    // let currentIndex = 0;

    // const switchTab = () => {
    //     tabs[currentIndex].classList.remove('active'); // Remove active class from current tab
    //     const targetId = tabs[currentIndex].getAttribute('data-bs-target');

    //     // Check if the element exists before removing classes
    //     const currentTabContent = document.querySelector(targetId);
    //     if (currentTabContent) {
    //         currentTabContent.classList.remove('show', 'active');
    //     }

    //     currentIndex = (currentIndex + 1) % tabs.length; // Move to next tab, loop back to 0 if at end

    //     tabs[currentIndex].classList.add('active'); // Add active class to new tab
    //     const newTargetId = tabs[currentIndex].getAttribute('data-bs-target');

    //     // Check if the new element exists before adding classes
    //     const newTabContent = document.querySelector(newTargetId);
    //     if (newTabContent) {
    //         newTabContent.classList.add('show', 'active');
    //     }
    // };

    // const interval = setInterval(switchTab, 2000); // Change tab every 3 seconds

    //     return () => clearInterval(interval); // Cleanup on component unmount


    // }, [router.query.counter]);



    return (
        <div>

            <div className="breadcumb-wrapper" style={{
                backgroundImage: 'url("/assets/img/bg/breadcumb-bg.jpg")'
            }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">About WorkCleverly Tech Limited</h1>
                        <ul className="breadcumb-menu">
                            <li><a href="index.html">Home</a></li>
                            <li>About Us</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden" id="about-sec" style={{ marginTop: '50px' }}>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 mb-30 mb-xl-0">
                            <div className="img-box1">
                                <div className="img1">
                                    <Image src="/assets/img/normal/who_we_are.jpeg" alt="About" width={530} height={530} />
                                </div>
                                <div className="shape1">
                                    <Image src="/assets/img/normal/about_shape_1.png" alt="shape" width={826} height={1169} />
                                </div>
                                {/* <div className="year-counter">
                                    <h3 className="year-counter_number">
                                        <span className="counter-number"></span>
                                    </h3>
                                    <p className="year-counter_text"></p>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="ps-xxl-4 ms-xl-3">
                                <div className="title-area mb-35">
                                    <span className="sub-title"
                                    ><div className="icon-masking me-2">
                                            {/* <span
                                                className="mask-icon"
                                                data-mask-src="/assets/img/theme-img/title_shape_1.svg"
                                            ></span> */}
                                            <Image
                                                src="/assets/img/theme-img/title_shape_1.svg"
                                                alt="shape" width={26} height={26}
                                            />
                                        </div>
                                        About WorkCleverly Tech Limited</span>
                                    <h2 className="sec-title">
                                        <span className="text-theme">Who We Are</span>

                                    </h2>
                                </div>
                                <p className="mt-n2 mb-25">
                                    WorkCleverly Tech Limited is a global technology solutions provider, specializing in Data Analytics, Artificial Intelligence, Cloud Infrastructure, and Enterprise Modernization. As a Hong Kong-registered company with a strong base in Chennai, we bring together the best of global innovation and local expertise to help businesses thrive in a rapidly evolving digital ecosystem.
                                </p>
                                <div className="about-feature-wrap">
                                    <div className="about-feature">
                                        <div className="about-feature_icon">
                                            <Image
                                                src="/assets/img/icon/about_feature_1_1.svg"
                                                alt="Icon" width={50} height={50}
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="about-feature_title">Global Expertise</h3>
                                            <p className="about-feature_text">
                                                Best Provide Skills Services
                                            </p>
                                        </div>
                                    </div>
                                    <div className="about-feature">
                                        <div className="about-feature_icon">
                                            <Image
                                                src="/assets/img/icon/about_feature_1_2.svg"
                                                alt="Icon" width={44} height={50}
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="about-feature_title">Local Commitment</h3>
                                            <p className="about-feature_text">100% Expert Team</p>
                                        </div>
                                    </div>
                                    <div className="about-feature">
                                        <div className="about-feature_icon">
                                            <Image
                                                src="/assets/img/icon/about_feature_2_1.svg"
                                                alt="Icon" width={44} height={50}
                                            />
                                        </div>
                                        <div className="media-body">
                                            <h3 className="about-feature_title">Intelligent Solutions</h3>
                                            <p className="about-feature_text">Smart, Adaptive, Efficient, Innovative</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="">

                <div className="row">
                    <div className="col">
                        <div className="shape-mockup">
                            <Image src="/assets/img/shape/square_1.png" alt="shape" width={534} height={849} />
                        </div>
                    </div>
                    <div className="col">
                        <div className="shape-mockup">
                            <Image src="/assets/img/shape/tech_shape_1.png" alt="shape" width={767} height={485} />
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="title-area text-center">
                        <span className="sub-title"><div className="icon-masking me-2">
                            <span
                                className="mask-icon" style={{
                                    backgroundImage: 'url("/assets/img/theme-img/title_shape_2.svg")'
                                }}></span>
                            {/* <Image src="/assets/img/theme-img/title_shape_2.svg" alt="shape" width={27} height={27} /> */}
                        </div></span>
                        <h2 className="sec-title"><span className="text-theme fw-normal"></span>
                        </h2>
                    </div>
                    <div className="row gy-4 justify-content-center">
                        <div className="col-xl-4 col-md-6">
                            <div className="price-card">
                                <div className="price-card_top">
                                    <h3 className="price-card_title">Mission</h3>
                                    <div className="particle">
                                        <div className="price-particle" id="price-p1"></div>
                                    </div>
                                </div>
                                <div className="price-card_content">
                                    <div className="checklist">
                                        <p className="">
                                            To empower businesses with intelligent, data-driven solutions that accelerate growth, optimize operations, and create a sustainable competitive edge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="price-card">
                                <div className="price-card_top">
                                    <h3 className="price-card_title">Vision</h3>
                                    <div className="particle">
                                        <div className="price-particle" id="price-p2"></div>
                                    </div>
                                </div>
                                <div className="price-card_content">
                                    <div className="checklist">
                                        <p className="">
                                            To empower businesses with intelligent, data-driven solutions that accelerate growth, optimize operations, and create a sustainable competitive edge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            {/* <section className="" id="service-sec">
                <div className="round-container gr-bg3 space">
                    <div className="container">

                        <div className="title-area text-center">
                            <span className="sub-title">CORE VALUES</span>
                            <h2 className="sec-title">Our Core Values</h2>
                        </div>

                    </div>

                    <div className="row">
                            <div className="col">
                                <div className="counter-card">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/counter_2_1.png" alt="Icon" width={86} height={80} />
                                    </div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number text-title">
                                            <span className="counter-number" style={{  fontSize: '28px' }}>Innovation</span>
                                        </h2>
                                        <p className="counter-card_text text-body">We constantly push boundaries to deliver cutting-edge solutions.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter-card">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/counter_2_2.png" alt="Icon" width={86} height={80} />
                                    </div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number text-title">
                                            <span className="counter-number" style={{  fontSize: '28px' }}>Centricity</span>
                                        </h2>
                                        <p className="counter-card_text text-body">Our clients’ success is our top priority.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter-card">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/counter_2_3.png" alt="Icon" width={86} height={80} />
                                    </div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number text-title">
                                            <span className="counter-number" style={{  fontSize: '28px' }}>Integrity</span>
                                        </h2>
                                        <p className="counter-card_text text-body">We operate with transparency, accountability, and trust.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="counter-card">
                                    <div className="icon">
                                        <Image src="/assets/img/icon/counter_2_4.png" alt="Icon" width={86} height={80} />
                                    </div>
                                    <div className="media-body">
                                        <h2 className="counter-card_number text-title">
                                            <span className="counter-number" style={{  fontSize: '28px' }}>Excellence</span>
                                        </h2>
                                        <p className="counter-card_text text-body">We deliver world-class quality in every project.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            </section> */}

            

            <div className="overflow-hidden" style={{ marginTop: '50px' }}>
                <div className="container th-container4">
                    <div
                        className="row justify-content-center justify-content-lg-between align-items-center"
                    >
                        <div className="col-xl-6">
                            <div className="title-area">
                                <span className="sub-title text-capitalize fs-20"
                                ><div className="icon-masking me-2">
                                        <span
                                            className="mask-icon"
                                            data-mask-src="/assets/img/theme-img/title_shape_5.svg"
                                        ></span>
                                        <Image
                                            src="/assets/img/theme-img/title_shape_5.svg"
                                            alt="shape" width={30} height={30}
                                        />
                                    </div>
                                    Our Journey</span>
                                <h2 className="sec-title">WorkCleverly Tech Limited</h2>
                                <p className="mb-25">
                                    Founded with a bold vision to simplify digital transformation, WorkCleverly Tech Limited has grown into a trusted partner for businesses across industries. From data analytics consulting to AI-powered automation, we’ve established ourselves as a leader in helping organizations leverage technology for competitive advantage.
                                </p>
                            </div>
                            {/* <div className="two-column mb-35">
                                <div className="checklist style12">
                                    <ul>
                                        <li>
                                            <Image src="/assets/img/icon/check_3.svg" alt="" width={20} height={30} />
                                            Client-Centric Partnership
                                        </li>
                                        <li>
                                            <Image src="/assets/img/icon/check_3.svg" alt="" width={20} height={20} />Expertise
                                            You Can Trust
                                        </li>
                                    </ul>
                                </div>
                                <div className="checklist style12">
                                    <ul>
                                        <li>
                                            <Image
                                                src="/assets/img/icon/check_3.svg"
                                                alt="" width={20} height={20}
                                            />Client-Centric Partnership
                                        </li>
                                        <li>
                                            <Image src="/assets/img/icon/check_3.svg" alt="" width={20} height={20} />24/7 Hour
                                            Support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="feature-wrap">
                                <div className="btn-wrap">
                                    <a href="about.html" className="th-btn style-radius text-capitalize"
                                    >Learn More</a>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-xl-6">
                            <div className="feature-thumb14_wrapp">
                                <div className="feature-thumb14-1">
                                    <Image src="/assets/img/normal/our_journeyy.jpg" alt="img" width={561} height={432} />
                                </div>
                                <div className="feature-thumb14-2 jump">
                                    <Image src="/assets/img/normal/our_journey.jpeg" alt="img" width={209} height={173} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section className="service-area12" id="service-sec" style={{ marginTop: '50px' }}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="title-area text-center me-xl-5 ms-xl-5">
                                <span className="sub-title sub-title3">CORE VALUES</span>
                                <h2 className="sec-title">
                                    Our Core Values
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="slider-area">
                        <div
                            className="has-shadow"
                            id="serviceSlider12">
                            <div className="row">
                                <div className="col">
                                    <div className="swiper-slide">
                                        <div className="service-item2 th-ani">
                                            <div className="service-item2_content service-item2_content-sub">
                                                <h3 className="box-title">
                                                    <a href="service-details.html" style={{ fontSize: '20px' }}>Innovation</a>
                                                </h3>
                                                <p className="service-item2_text">
                                                    We constantly push boundaries to deliver cutting-edge solutions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="swiper-slide">
                                        <div className="service-item2 th-ani">
                                            <div className="service-item2_content service-item2_content-sub">
                                                <h3 className="box-title">
                                                    <a href="service-details.html" style={{ fontSize: '20px' }}>Customer Centricity</a>
                                                </h3>
                                                <p className="service-item2_text">
                                                    Our clients’ success is our top priority.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="swiper-slide">
                                        <div className="service-item2 th-ani">
                                            <div className="service-item2_content service-item2_content-sub">
                                                <h3 className="box-title">
                                                    <a href="service-details.html" style={{ fontSize: '20px' }}>Integrity</a>
                                                </h3>
                                                <p className="service-item2_text">
                                                    We operate with transparency, accountability, and trust.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="swiper-slide">
                                        <div className="service-item2 th-ani">
                                            <div className="service-item2_content service-item2_content-sub">
                                                <h3 className="box-title">
                                                    <a href="service-details.html" style={{ fontSize: '20px' }}>Excellence</a>
                                                </h3>
                                                <p className="service-item2_text">
                                                    We deliver world-class quality in every project.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="space-top space-top-sub-team">
                <div className="container">
                    <div className="row gy-40 align-items-center">
                        <div className="col-xl-5">
                            <div className="team-featured-img">
                                <Image src="/assets/img/team/our_team.jpg" alt="Team" width={494} height={468} />
                            </div>
                        </div>
                        <div className="col-xl-7">
                            <div className="team-featured">
                                <h2 className="team-title">Our Team</h2>
                                {/* <p className="team-desig">CEO, of Webteck Company</p> */}
                                <p className="team-bio">
                                    Meet our team of visionaries, technologists, and innovators who are passionate about turning challenges into opportunities.
                                </p>
                                <div className="team-contact-wrap">
                                    <div className="team-contact">
                                        <div className="icon-btn"><i className="fa-solid fa-phone"></i></div>
                                        <div className="media-body">
                                            <h6 className="team-contact_label">Phone Number</h6>
                                            <a className="team-contact_link" href="tel:+19356542587"
                                            >+852 69004844</a>
                                        </div>
                                    </div>
                                    <div className="team-contact">
                                        <div className="icon-btn">
                                            <i className="fa-solid fa-envelope"></i>
                                        </div>
                                        <div className="media-body">
                                            <h6 className="team-contact_label">Email Address</h6>
                                            <a className="team-contact_link" href="mailto:info@rachna.com"
                                            >info@workcleverly.ai</a>
                                        </div>
                                    </div>
                                    {/* <div className="team-contact">
                                        <div className="icon-btn"><i className="fa-solid fa-phone"></i></div>
                                        <div className="media-body">
                                            <h6 className="team-contact_label">Phone Number</h6>
                                            <span className="team-contact_link">10:00AM - 4:00PM</span>
                                        </div>
                                    </div> */}
                                </div>
                                <Link href="/contact" className="th-btn"
                                >MAKE AN APPOINTMENT<i
                                    className="fa-regular fa-arrow-right ms-2"
                                ></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}