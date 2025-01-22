import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {

    const router = useRouter()

    useEffect(() => {
        if (router.query.reload === 'true') {
            router.reload();
        }
    }, [router.query]);

    useEffect(() => {

        const tabs = document.querySelectorAll('.nav-link');
        let currentIndex = 0;

        const switchTab = () => {
            tabs[currentIndex].classList.remove('active'); // Remove active class from current tab
            const targetId = tabs[currentIndex].getAttribute('data-bs-target');

            // Check if the element exists before removing classes
            const currentTabContent = document.querySelector(targetId);
            if (currentTabContent) {
                currentTabContent.classList.remove('show', 'active');
            }

            currentIndex = (currentIndex + 1) % tabs.length; // Move to next tab, loop back to 0 if at end

            tabs[currentIndex].classList.add('active'); // Add active class to new tab
            const newTargetId = tabs[currentIndex].getAttribute('data-bs-target');

            // Check if the new element exists before adding classes
            const newTabContent = document.querySelector(newTargetId);
            if (newTabContent) {
                newTabContent.classList.add('show', 'active');
            }
        };

        const interval = setInterval(switchTab, 2000); // Change tab every 3 seconds

        router.push('/about', undefined, { shallow: true });

        return () => clearInterval(interval); // Cleanup on component unmount


    }, [router.query.counter]);



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
            <div className="overflow-hidden space" id="about-sec">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 mb-30 mb-xl-0">
                            <div className="img-box1">
                                <div className="img1">
                                    <Image src="/assets/img/normal/about_1_1.png" alt="About" width={530} height={530} />
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

            <section className="bg-auto space space-sub" data-bg-src="/assets/img/bg/testi_bg_2.png">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="swiper-slide">
                                <div className="testi-box">
                                    <div className="testi-box_img">
                                        <Image
                                            src="/assets/img/mission_vission/our_mission.jpg"
                                            alt="Avatar"
                                            width={180}
                                            height={180}
                                        />
                                        <div className="testi-box_quote">
                                            <Image
                                                src="/assets/img/icon/quote_left_2.svg"
                                                alt="quote"
                                                width={26}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                    <div className="testi-box_content">
                                        <h3 className="box-title box-title-sub">Our Mission</h3>
                                        <p className="testi-box_text">
                                            To empower businesses with intelligent, data-driven solutions that
                                            accelerate growth, optimize operations, and create a sustainable
                                            competitive edge.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="swiper-slide">
                                <div className="testi-box">
                                    <div className="testi-box_img">
                                        <Image
                                            src="/assets/img/mission_vission/our_vision.jpg"
                                            alt="Avatar"
                                            width={180}
                                            height={180}
                                        />
                                        <div className="testi-box_quote">
                                            <Image
                                                src="/assets/img/icon/quote_left_2.svg"
                                                alt="quote"
                                                width={26}
                                                height={20}
                                            />
                                        </div>
                                    </div>
                                    <div className="testi-box_content">
                                        <h3 className="box-title box-title-sub">Our Vision</h3>
                                        <p className="testi-box_text">
                                            To be the most trusted global partner for digital transformation and AI-driven innovation, enabling businesses to achieve extraordinary success.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="process-area5 process-area5-sub"
                id="process-sec"
                data-pos-for="cta-area7"
                data-sec-pos="top-half"
                data-bg-src="/assets/img/bg/process_bg_2.jpg"
            >
                <div className="container th-container4">
                    <div className="title-area text-center">
                        <span className="sub-title sub-title3">CORE VALUES</span>
                        <h2 className="sec-title">Our Core Values</h2>
                    </div>
                    <div className="process-tabs-wrapper process-tabs-wrapper-sub">
                        <div
                            className="nav nav-tabs process-tabs-tabs"
                            id="nav-tab"
                            role="tablist"
                        >
                            <button
                                className="nav-link active"
                                id="nav-step1-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-step1"
                                type="button"
                            >
                                <span className="step">1</span>
                                <span className="title">Innovation</span>
                            </button>
                            <button
                                className="nav-link"
                                id="nav-step2-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-step2"
                                type="button"
                            >
                                <span className="step">2</span>
                                <span className="title">Customer Centricity</span>
                            </button>
                            <button
                                className="nav-link"
                                id="nav-step3-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-step3"
                                type="button"
                            >
                                <span className="step">3</span>
                                <span className="title">Integrity</span>
                            </button>
                            <button
                                className="nav-link"
                                id="nav-step4-tab"
                                data-bs-toggle="tab"
                                data-bs-target="#nav-step4"
                                type="button"
                            >
                                <span className="step">4</span>
                                <span className="title">Excellence</span>
                            </button>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="nav-step1"
                                role="tabpanel"
                            >
                                <div className="process-wrapper">
                                    <div className="process-content">
                                        <div className="title-area mb-15">
                                            <h5 className="box-title">Innovation</h5>
                                            <p className="box-text">
                                                We constantly push the boundaries of technology to deliver cutting-edge solutions.
                                            </p>
                                        </div>
                                        <div className="checklist">
                                            {/* <ul>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Best
                                                    Service for You
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Keeping
                                                    Your Team Productive
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Predictable
                                                    Costs 24/
                                                </li>
                                            </ul> */}
                                        </div>
                                        {/* <a href="contact.html" className="th-btn style-radius"
                                        >Get Started</a> */}
                                    </div>
                                    <div className="process-image th-anim">
                                        <Image src="/assets/img/normal/innovation.jpg" alt="" width={344} height={300} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-step2" role="tabpanel">
                                <div className="process-wrapper">
                                    <div className="process-content">
                                        <div className="title-area mb-15">
                                            <h5 className="box-title">Customer Centricity</h5>
                                            <p className="box-text">
                                                Our clients’ success is our top priority.
                                            </p>
                                        </div>
                                        <div className="checklist">
                                            {/* <ul>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Best
                                                    Service for You
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Keeping
                                                    Your Team Productive
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Predictable
                                                    Costs 24/
                                                </li>
                                            </ul> */}
                                        </div>
                                        {/* <a href="contact.html" className="th-btn style-radius"
                                        >Get Started</a> */}
                                    </div>
                                    <div className="process-image th-anim">
                                        <Image src="/assets/img/normal/customer_centricity.jpg" alt="" width={344} height={300} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-step3" role="tabpanel">
                                <div className="process-wrapper">
                                    <div className="process-content">
                                        <div className="title-area mb-15">
                                            <h5 className="box-title">Integrity</h5>
                                            <p className="box-text">
                                                We operate with transparency, accountability, and trust.
                                            </p>
                                        </div>
                                        <div className="checklist">
                                            {/* <ul>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Best
                                                    Service for You
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Keeping
                                                    Your Team Productive
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Predictable
                                                    Costs 24/
                                                </li>
                                            </ul> */}
                                        </div>
                                        {/* <a href="contact.html" className="th-btn style-radius"
                                        >Get Started</a> */}
                                    </div>
                                    <div className="process-image th-anim">
                                        <Image src="/assets/img/normal/Integrity.jpg" alt="" width={344} height={300} />
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="nav-step4" role="tabpanel">
                                <div className="process-wrapper">
                                    <div className="process-content">
                                        <div className="title-area mb-15">
                                            <h5 className="box-title">Excellence</h5>
                                            <p className="box-text">
                                                We are committed to delivering world-class quality in every project.
                                            </p>
                                        </div>
                                        <div className="checklist">
                                            {/* <ul>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Best
                                                    Service for You
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Keeping
                                                    Your Team Productive
                                                </li>
                                                <li>
                                                    <i className="far fa-check-circle text-body"></i>Predictable
                                                    Costs 24/
                                                </li>
                                            </ul> */}
                                        </div>
                                        {/* <a href="contact.html" className="th-btn style-radius"
                                        >Get Started</a> */}
                                    </div>
                                    <div className="process-image th-anim">
                                        <Image src="/assets/img/normal/excellence.jpeg" alt="" width={344} height={300} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="shape-mockup d-none d-xxl-block"
                            data-top="-8%"
                            data-right="29.5%"
                        >
                            <Image src="/assets/img/shape/star-1.png" alt="shape" width={100} height={82} />
                        </div>
                        <div
                            className="shape-mockup d-none d-xxl-block"
                            data-bottom="-12%"
                            data-right="29.5%"
                        >
                            <Image src="/assets/img/shape/star-2.png" alt="shape" width={100} height={100} />
                        </div>
                        <div
                            className="shape-mockup z-index-3 d-none d-xl-block"
                            data-top="13%"
                            data-left="35.5%"
                        >
                            <Image src="/assets/img/shape/line-3.png" alt="shape" width={80} height={58} />
                        </div>
                    </div>
                </div>
            </section>

            <div className="overflow-hidden space">
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
                                    <Image src="/assets/img/normal/feature-img-12-1.jpg" alt="img" width={561} height={432} />
                                </div>
                                <div className="feature-thumb14-2 jump">
                                    <Image src="/assets/img/normal/feature-img-12-2.jpg" alt="img" width={209} height={173} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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