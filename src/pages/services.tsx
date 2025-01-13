import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

export default function Services() {

    const router = useRouter()

    useEffect(() => {
        router.push('/services', undefined, { shallow: true })
    }, [router.query.counter]);

    return (
        <div>

            <div className="breadcumb-wrapper" style={{
                backgroundImage: 'url("/assets/img/bg/breadcumb-bg.jpg")'
            }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Our Services</h1><br />
                        <h6 style={{ color: '#abacaf' }}>Intelligent Solutions to Drive Your Success <br /> From Data to AI, We Deliver Scalable, Secure, and Impactful Technology Solutions.</h6>
                        <ul className="breadcumb-menu">
                            <li><a href="index.html">Home</a></li>
                            <li>Services</li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="space" id="service-sec">
                <div className="container">
                    <div className="row gy-4">
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card service-card-height">
                                <div className="service-card_number">01</div>
                                <div className="shape-icon">
                                    <Image src="/assets/img/icon/service_card_1.svg" alt="Icon" width={40} height={36} />
                                    <span className="dots"></span>
                                </div>
                                <h3 className="box-title">
                                    <a href="service-details.html">Data Analytics</a>
                                </h3>
                                <p className="service-card_text">
                                    Harness the power of your data with advanced analytics solutions. We help businesses transform raw data into actionable insights, enabling smarter decision-making and improved operational efficiency.
                                </p>
                                <h3 className="box-title">
                                    <a href="service-details.html">Our Expertise</a>
                                </h3>
                                <ul>
                                    <li>Predictive Analytics</li>
                                    <li>Real-Time Data Processing</li>
                                    <li>Data Visualization Tools (Tableau, Power BI)</li>
                                    <li>Big Data Solutions (Hadoop, Spark)</li>
                                </ul>
                                <h3 className="box-title">
                                    <a href="service-details.html">Business Impact</a>
                                </h3>
                                <ul>
                                    <li>Optimize supply chain management.</li>
                                    <li>Identify growth opportunities through customer behavior analysis.</li>
                                    <li>Data Visualization Tools (Tableau, Power BI).</li>
                                    <li>Enhance operational efficiency with real-time insights.</li>
                                </ul>
                                {/* <a href="service-details.html" className="th-btn"
                                >Read More<i className="fa-regular fa-arrow-right ms-2"></i></a> */}
                                <div className="bg-shape">
                                    <Image src="/assets/img/bg/service_card_bg.png" alt="bg" width={391} height={293} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card service-card-height">
                                <div className="service-card_number">02</div>
                                <div className="shape-icon">
                                    <Image src="/assets/img/icon/service_card_2.svg" alt="Icon" width={40} height={40} />
                                    <span className="dots"></span>
                                </div>
                                <h3 className="box-title">
                                    <a href="service-details.html">Artificial Intelligence & Machine Learning</a>
                                </h3>
                                <p className="service-card_text">
                                    Leverage AI and ML to automate tasks, predict trends, and create personalized customer experiences. From chatbots to advanced predictive models, our solutions are built to drive innovation.
                                </p>
                                <h3 className="box-title">
                                    <a href="service-details.html">Our Expertise</a>
                                </h3>
                                <ul>
                                    <li>Natural Language Processing (NLP)</li>
                                    <li>Image Recognition and Computer Vision</li>
                                    <li>Predictive Modeling</li>
                                    <li>Recommendation Engines</li>
                                </ul>
                                <h3 className="box-title">
                                    <a href="service-details.html">Business Impact</a>
                                </h3>
                                <ul>
                                    <li>Reduce operational costs with intelligent automation.</li>
                                    <li>Increase customer retention with personalized experiences.</li>
                                </ul>
                                {/* <a href="service-details.html" className="th-btn"
                                >Read More<i className="fa-regular fa-arrow-right ms-2"></i></a> */}
                                <div className="bg-shape">
                                    <Image src="/assets/img/bg/service_card_bg.png" alt="bg" width={391} height={293} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card service-card-height">
                                <div className="service-card_number">03</div>
                                <div className="shape-icon">
                                    <Image src="/assets/img/icon/service_card_3.svg" alt="Icon" width={40} height={40} />
                                    <span className="dots"></span>
                                </div>
                                <h3 className="box-title">
                                    <a href="service-details.html">Digital MBusiness Intelligence (BI) Solutionsarketing</a>
                                </h3>
                                <p className="service-card_text">
                                    Simplify decision-making with interactive dashboards and analytics tools. Our BI solutions provide real-time insights into key performance metrics to help businesses stay agile.
                                </p>
                                <h3 className="box-title">
                                    <a href="service-details.html">Our Expertise</a>
                                </h3>
                                <ul>
                                    <li>Custom BI Dashboards</li>
                                    <li>Data Warehousing</li>
                                    <li>Integration with Legacy Systems</li>
                                </ul>
                                <h3 className="box-title">
                                    <a href="service-details.html">Business Impact</a>
                                </h3>
                                <ul>
                                    <li>Enable faster, data-driven decisions.</li>
                                    <li>Monitor KPIs in real-time for improved performance.</li>
                                </ul>
                                {/* <a href="service-details.html" className="th-btn"
                                >Read More<i className="fa-regular fa-arrow-right ms-2"></i></a> */}
                                <div className="bg-shape">
                                    <Image src="/assets/img/bg/service_card_bg.png" alt="bg" width={391} height={293} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card service-card-height">
                                <div className="service-card_number">04</div>
                                <div className="shape-icon">
                                    <Image src="/assets/img/icon/service_card_4.svg" alt="Icon" width={40} height={40} />
                                    <span className="dots"></span>
                                </div>
                                <h3 className="box-title">
                                    <a href="service-details.html">AI-Powered Chatbots</a>
                                </h3>
                                <p className="service-card_text">
                                    Automate customer interactions with intelligent, multilingual chatbots. Our AI-powered bots deliver seamless experiences across platforms, reducing response time and improving satisfaction.
                                </p>
                                <h3 className="box-title">
                                    <a href="service-details.html">Our Expertise</a>
                                </h3>
                                <ul>
                                    <li>Custom Bot Development</li>
                                    <li>CRM and ERP Integrations</li>
                                    <li>Voice and Text-Based Interfaces</li>
                                </ul>
                                <h3 className="box-title">
                                    <a href="service-details.html">Business Impact</a>
                                </h3>
                                <ul>
                                    <li>Enhance customer support with 24/7 assistance.</li>
                                    <li>Free up human resources for high-value tasks.</li>
                                </ul>
                                {/* <a href="service-details.html" className="th-btn"
                                >Read More<i className="fa-regular fa-arrow-right ms-2"></i></a> */}
                                <div className="bg-shape">
                                    <Image src="/assets/img/bg/service_card_bg.png" alt="bg" width={391} height={293} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card service-card-height">
                                <div className="service-card_number">05</div>
                                <div className="shape-icon">
                                    <Image src="/assets/img/icon/service_card_5.svg" alt="Icon" width={40} height={40} />
                                    <span className="dots"></span>
                                </div>
                                <h3 className="box-title">
                                    <a href="service-details.html">Cloud Infrastructure & Modernization</a>
                                </h3>
                                <p className="service-card_text">
                                    Modernize your business with scalable, secure, and efficient cloud infrastructure. Whether you’re migrating to the cloud or optimizing existing systems, we deliver solutions tailored to your needs.
                                </p>
                                <h3 className="box-title">
                                    <a href="service-details.html">Our Expertise</a>
                                </h3>
                                <ul>
                                    <li>Cloud Migration (AWS, Azure, Google Cloud)</li>
                                    <li>DevOps Automation</li>
                                    <li>Cloud Security and Compliance</li>
                                </ul>
                                <h3 className="box-title">
                                    <a href="service-details.html">Business Impact</a>
                                </h3>
                                <ul>
                                    <li>Reduce infrastructure costs.</li>
                                    <li>Improve scalability and business agility.</li>
                                </ul>
                                {/* <a href="service-details.html" className="th-btn"
                                >Read More<i className="fa-regular fa-arrow-right ms-2"></i></a> */}
                                <div className="bg-shape">
                                    <Image src="/assets/img/bg/service_card_bg.png" alt="bg" width={391} height={293} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card service-card-height">
                                <div className="service-card_number">06</div>
                                <div className="shape-icon">
                                    <Image src="/assets/img/icon/service_card_6.svg" alt="Icon" width={40} height={40} />
                                    <span className="dots"></span>
                                </div>
                                <h3 className="box-title">
                                    <a href="service-details.html">ERP Integration & Optimization</a>
                                </h3>
                                <p className="service-card_text">
                                    Streamline your business processes with ERP solutions customized to your operations. Our ERP services ensure seamless integration and optimization of enterprise functions.
                                </p>
                                <h3 className="box-title">
                                    <a href="service-details.html">Our Expertise</a>
                                </h3>
                                <ul>
                                    <li>ERP Customization</li>
                                    <li>Cloud-Based ERP Solutions</li>
                                    <li>Process Automation</li>
                                </ul>
                                <h3 className="box-title">
                                    <a href="service-details.html">Business Impact</a>
                                </h3>
                                <ul>
                                    <li>Increase operational efficiency.</li>
                                    <li>Reduce manual workloads and errors.</li>
                                </ul>
                                {/* <a href="service-details.html" className="th-btn"
                                >Read More<i className="fa-regular fa-arrow-right ms-2"></i></a> */}
                                <div className="bg-shape">
                                    <Image src="/assets/img/bg/service_card_bg.png" alt="bg" width={391} height={293} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-4">
                            <div className="service-card service-card-height">
                                <div className="service-card_number">07</div>
                                <div className="shape-icon">
                                    <Image src="/assets/img/icon/service_card_7.svg" alt="Icon" width={40} height={40} />
                                    <span className="dots"></span>
                                </div>
                                <h3 className="box-title">
                                    <a href="service-details.html">Data Platform Migration & Modernization</a>
                                </h3>
                                <p className="service-card_text">
                                    Upgrade your legacy systems to modern data platforms for improved performance, scalability, and security.
                                </p>
                                <h3 className="box-title">
                                    <a href="service-details.html">Our Expertise</a>
                                </h3>
                                <ul>
                                    <li>Legacy System Migration</li>
                                    <li>Data Lake and Data Warehouse Solutions</li>
                                    <li>Real-Time Data Integration</li>
                                </ul>
                                <h3 className="box-title">
                                    <a href="service-details.html">Business Impact</a>
                                </h3>
                                <ul>
                                    <li>Future-proof your data architecture.</li>
                                    <li>Improve data accessibility and insights.</li>
                                </ul>
                                {/* <a href="service-details.html" className="th-btn"
                                >Read More<i className="fa-regular fa-arrow-right ms-2"></i></a> */}
                                <div className="bg-shape">
                                    <Image src="/assets/img/bg/service_card_bg.png" alt="bg" width={391} height={293} />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section className="position-relative space">
                <div className="th-bg-img" data-bg-src="assets/img/bg/cta_bg_2.jpg">
                    <Image src="/assets/img/bg/bg_overlay_1.png" alt="overlay" width={40} height={36} />
                </div>
                <div className="container z-index-common">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-7 col-md-9 text-center">
                            <div className="title-area mb-35">
                                <span className="sub-title"
                                ><div className="icon-masking me-2">
                                        <span
                                            className="mask-icon"
                                            data-mask-src="assets/img/theme-img/title_shape_2.svg"
                                        ></span>
                                        <Image
                                            src="/assets/img/theme-img/title_shape_2.svg"
                                            alt="shape" width={27} height={27}
                                        />
                                    </div>
                                    CONTACT US</span>
                                <h2 className="sec-title text-white">
                                    Need Any Kind Of IT Solution For
                                    <span className="text-theme fw-normal">Your Business?</span>
                                </h2>
                            </div>
                            <Link href="/contact" className="th-btn style3">Get In Touch</Link>
                        </div>
                    </div>
                </div>
            </section>

            <section
                className="bg-smoke"
                id="process-sec"
                data-bg-src="assets/img/bg/process_bg_1.png"
            >
                <div className="container space">
                    <div className="title-area text-center">
                        <span className="sub-title"
                        ><div className="icon-masking me-2">
                                <span
                                    className="mask-icon"
                                    data-mask-src="assets/img/theme-img/title_shape_2.svg"
                                ></span>
                                <Image src="assets/img/theme-img/title_shape_2.svg" alt="shape" width={27} height={27} />
                            </div>
                            WORK PROCESS</span>
                        <h2 className="sec-title">
                            How to work <span className="text-theme">it!</span>
                        </h2>
                    </div>
                    <div className="process-card-area">
                        <div className="process-line">
                            <Image src="assets/img/bg/process_line.svg" alt="line" width={963} height={90} />
                        </div>
                        <div className="row gy-40">
                            <div className="col-sm-6 col-xl-3 process-card-wrap">
                                <div className="process-card">
                                    <div className="process-card_number">01</div>
                                    <div className="process-card_icon">
                                        <Image src="assets/img/icon/process_card_1.svg" alt="icon" width={36} height={40} />
                                    </div>
                                    <h2 className="box-title">Select a project</h2>
                                    <p className="process-card_text">
                                        Continua scale empowered metrics with cost effective
                                        innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 process-card-wrap">
                                <div className="process-card">
                                    <div className="process-card_number">02</div>
                                    <div className="process-card_icon">
                                        <Image src="assets/img/icon/process_card_2.svg" alt="icon" width={36} height={40} />
                                    </div>
                                    <h2 className="box-title">Project analysis</h2>
                                    <p className="process-card_text">
                                        Continua scale empowered metrics with cost effective
                                        innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 process-card-wrap">
                                <div className="process-card">
                                    <div className="process-card_number">03</div>
                                    <div className="process-card_icon">
                                        <Image src="assets/img/icon/process_card_3.svg" alt="icon" width={36} height={40} />
                                    </div>
                                    <h2 className="box-title">Plan Execute</h2>
                                    <p className="process-card_text">
                                        Continua scale empowered metrics with cost effective
                                        innovation.
                                    </p>
                                </div>
                            </div>
                            <div className="col-sm-6 col-xl-3 process-card-wrap">
                                <div className="process-card">
                                    <div className="process-card_number">04</div>
                                    <div className="process-card_icon">
                                        <Image src="assets/img/icon/process_card_4.svg" alt="icon" width={40} height={40} />
                                    </div>
                                    <h2 className="box-title">Deliver result</h2>
                                    <p className="process-card_text">
                                        Continua scale empowered metrics with cost effective
                                        innovation.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}