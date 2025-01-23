
import Image from 'next/image'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer-wrapper footer-layout1">
            <div className="footer-top">
                <div className="logo-bg"></div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-3">
                            <div className="footer-logo footer-logo-sub">
                                <Link className="icon-masking" href="/home">
                                    <Image src="/assets/img/Workcleverly_png2.png" alt="Work Cleverly" width={180} height={46} />
                                </Link>
                            </div>
                        </div>
                        <div className="col-xl-9">
                            <div className="footer-contact-wrap">
                                <div className="footer-contact">
                                    <div className="footer-contact_icon">
                                        <i className="fas fa-phone"></i>
                                    </div>
                                    <div className="media-body">
                                        <span className="footer-contact_text">Quick Call Us:</span>
                                        <a href="tel:+19088000393" className="footer-contact_link"
                                        >+852 69004844</a>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="footer-contact_icon">
                                        <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="media-body">
                                        <span className="footer-contact_text">Mail Us On:</span>
                                        <a
                                            href="mailto:info@webteck.com"
                                            className="footer-contact_link"
                                        >info@workcleverly.ai</a>
                                    </div>
                                </div>
                                <div className="footer-contact">
                                    <div className="footer-contact_icon">
                                        <i className="fas fa-location-dot"></i>
                                    </div>
                                    <div className="media-body">
                                        <span className="footer-contact_text">Global Headquarters:</span>
                                        <a
                                            href="https://www.google.com/maps"
                                            className="footer-contact_link"
                                        >Hong Kong</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="widget-area">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-md-6 col-xxl-3 col-xl-4">
                            <div className="widget footer-widget">
                                <h3 className="widget_title">About Company</h3>
                                <div className="th-widget-about">
                                    <p className="about-text">
                                        WorkCleverly Tech Limited is a global technology solutions provider, specializing in Data Analytics, Artificial Intelligence, Cloud Infrastructure, and Enterprise Modernization.
                                    </p>
                                    <div className="th-social">
                                        <a href="https://www.facebook.com/"
                                        ><i className="fab fa-facebook-f"></i></a>
                                        <a href="https://www.twitter.com/"
                                        ><i className="fab fa-twitter"></i></a>
                                        <a href="https://www.linkedin.com/"
                                        ><i className="fab fa-linkedin-in"></i></a>
                                        {/* <a href="https://www.whatsapp.com/"
                                        ><i className="fab fa-whatsapp"></i></a>
                                        <a href="https://www.youtube.com/"
                                        ><i className="fab fa-youtube"></i></a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">IT SERVICES</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><Link href="/services">Data Analytics</Link></li>
                                        <li>
                                            <Link href="/services">Artificial Intelligence & <br/> Machine Learning</Link>
                                        </li>
                                        <li>
                                            <Link href="/services">Digital Business Intelligence <br/>(BI) Solutions marketing</Link>
                                        </li>
                                        <li><Link href="/services">AI-Powered Chatbots</Link></li>
                                        <li><Link href="/services">Cloud Infrastructure<br/> & Modernization</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><a href="about.html">Home</a></li>
                                        <li><a href="team.html">About Us</a></li>
                                        <li><a href="project.html">Services</a></li>
                                        <li><a href="faq.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-4 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">IT SERVICES</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><Link href="/services">ERP Integration<br/> & Optimization</Link></li>
                                        <li><Link href="/services">Data Platform Migration<br/> & Modernization</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><a href="about.html">Home</a></li>
                                        <li><a href="team.html">About Us</a></li>
                                        <li><a href="project.html">Services</a></li>
                                        <li><a href="faq.html">Contact</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            {/* <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">IT SERVICES</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><a href="service-details.html">Web Development</a></li>
                                        <li>
                                            <a href="service-details.html">Business Development</a>
                                        </li>
                                        <li>
                                            <a href="service-details.html">Product Management</a>
                                        </li>
                                        <li><a href="service-details.html">UI/UX Design</a></li>
                                        <li><a href="service-details.html">Cloud services</a></li>
                                    </ul>
                                </div>
                            </div> */}
                        </div>
                        <div className="col-md-6 col-xl-auto">
                            <div className="widget widget_nav_menu footer-widget">
                                <h3 className="widget_title">Quick Links</h3>
                                <div className="menu-all-pages-container">
                                    <ul className="menu">
                                        <li><Link href="/home">Home</Link></li>
                                        <li><Link href={{ pathname: '/about', query: { reload: 'true' } }}>About Us</Link></li>
                                        <li><Link href="/services">Services</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="widget footer-widget">
                                <h3 className="widget_title">Recent Posts</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <a href="blog-details.html"
                                            ><Image
                                                    src="/assets/img/blog/recent-post-2-1.jpg"
                                                    alt="Blog Image" width={80} height={80}
                                                /></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <a className="text-inherit" href="blog-details.html"
                                                >Unsatiable entreaties may collecting Power.</a>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <a href="blog.html"
                                                ><i className="fal fa-calendar-days"></i>21 June, 2024</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="media-img">
                                            <a href="blog-details.html"
                                            ><Image
                                                    src="/assets/img/blog/recent-post-2-2.jpg"
                                                    alt="Blog Image" width={80} height={80}
                                                /></a>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <a className="text-inherit" href="blog-details.html"
                                                >Regional Manager limited time management.</a>
                                            </h4>
                                            <div className="recent-post-meta">
                                                <a href="blog.html"
                                                ><i className="fal fa-calendar-days"></i>22 June, 2024</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-wrap bg-title">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-6">
                            <p className="copyright-text">
                                Copyright <i className="fal fa-copyright"></i> 2025
                                <a href="https://themeforest.net/user/themeholy"> WorkCleverly Tech Limited</a>.
                                All Rights Reserved.
                            </p>
                        </div>
                        <div className="col-lg-6 text-end d-none d-lg-block">
                            {/* <div className="footer-links">
                                <ul>
                                    <li><a href="about.html">Terms & Condition</a></li>
                                    <li><a href="about.html">Careers</a></li>
                                    <li><a href="about.html">Privacy Policy</a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <div className="shape-left">
                <Image src="/assets/img/shape/footer_shape_2.svg" alt="shape" width={920} height={716} />
            </div>
            <div className="shape-right">
                <div className="particle-1" id="particle-5"></div>
            </div>
        </footer>
    );
};