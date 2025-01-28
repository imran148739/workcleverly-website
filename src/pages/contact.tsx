import { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {

    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    // const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false); // Add loading state

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Set loading to true when submit is clicked

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();
            if (data.success) {
                // setStatus('Email sent successfully!');
                toast.success('✅ Email sent successfully!', { position: 'top-right' });
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                toast.error('❌ Failed to send email. Please try again.');
                // setStatus('Failed to send email. Please try again.');
            }
        } catch (error) {
            console.error(error);
            toast.error('❌ An error occurred. Please try again.');
        } finally {
            setLoading(false); // Reset loading state after the request is completed
        }
    };

    const router = useRouter()

    useEffect(() => {
        router.push('/contact', undefined, { shallow: true })
    }, [router, router.query.counter]);

    return (
        <div>

            <div className="breadcumb-wrapper" style={{
                backgroundImage: 'url("/assets/img/bg/breadcumb-bg.jpg")'
            }}>
                <div className="container">
                    <div className="breadcumb-content">
                        <h1 className="breadcumb-title">Contact Us</h1> <br />
                        <h6 style={{ color: '#abacaf' }}>Let’s Build the Future Together</h6>
                        <ul className="breadcumb-menu">
                            <li><a href="index.html">Home</a></li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="space">
                <div className="container">
                    <div className="row gy-4">
                        <h3 className="breadcumb-title d-flex justify-content-center" style={{ color: 'black' }}>WorkCleverly Tech Limited</h3> <br /><br />
                        <div className="col-xl-4 col-md-6">
                            <div className="contact-info">
                                <div className="contact-info_icon">
                                    <i className="fas fa-location-dot"></i>
                                </div>
                                <div className="media-body">
                                    <h4 className="box-title" style={{ fontSize: '16px' }}>Global Headquarters :<span className="contact-info_text"
                                        style={{ fontWeight: '100' }}>Hong Kong</span></h4>
                                    <h4 className="box-title" style={{ fontSize: '16px' }}>Regional Office :<span className="contact-info_text"
                                        style={{ fontWeight: '100' }}>Chennai</span></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="contact-info">
                                <div className="contact-info_icon"><i className="fas fa-phone"></i></div>
                                <div className="media-body">
                                    <h4 className="box-title">Call Us Anytime</h4>
                                    <span className="contact-info_text">
                                        <a href="tel:+65485965789">+852 69004844</a></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-6">
                            <div className="contact-info">
                                <div className="contact-info_icon">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="media-body">
                                    <h4 className="box-title">Send An Email</h4>
                                    <span className="contact-info_text">
                                        <a href="mailto:info@webteck.com">info@workcleverly.ai</a></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="bg-smoke space"
                style={{
                    backgroundImage: 'url("/assets/img/bg/contact_bg_1.png")'
                }}
                id="contact-sec"
            >
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="title-area mb-35 text-xl-start text-center">
                                <span className="sub-title"
                                ><div className="icon-masking me-2">
                                        <span
                                            className="mask-icon"
                                            data-mask-src="assets/img/theme-img/title_shape_2.svg"
                                        ></span>
                                        <Image
                                            src="/assets/img/theme-img/title_shape_2.svg" width={27} height={27}
                                            alt="shape"
                                        />
                                    </div>
                                    contact with us!</span>
                                <h2 className="sec-title">Have a project in mind?</h2>
                                <p className="sec-text">
                                    Let’s discuss how we can help you achieve your goals.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit} className="contact-form">
                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            id="name"
                                            placeholder="Your Name" value={formData.name} onChange={handleChange} required
                                        />
                                        <i className="fal fa-user"></i>
                                    </div>
                                    <div className="form-group col-md-6">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Email Address" value={formData.email} onChange={handleChange} required
                                        />
                                        <i className="fal fa-envelope"></i>
                                    </div>
                                    {/* <div className="form-group col-md-6">
                                        <select name="subject" id="subject" className="form-select">
                                            <option
                                                value=""
                                                disabled
                                                selected
                                                hidden
                                            >
                                                Select Subject
                                            </option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Brand Marketing">Brand Marketing</option>
                                            <option value="UI/UX Designing">UI/UX Designing</option>
                                            <option value="Digital Marketing">Digital Marketing</option>
                                        </select>
                                        <i className="fal fa-chevron-down"></i>
                                    </div> */}
                                    <div className="form-group col-md-6">
                                        <input
                                            type="number"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            inputMode="numeric"
                                            placeholder="Phone Number" value={formData.phone} onChange={handleChange} required
                                        />
                                        <i className="fal fa-phone"></i>
                                    </div>
                                    <div className="form-group col-12">
                                        <textarea
                                            name="message"
                                            id="message"
                                            cols={30}
                                            rows={3}
                                            className="form-control"
                                            placeholder="Your Message" value={formData.message} onChange={handleChange} required
                                        ></textarea>
                                        <i className="fal fa-comment"></i>
                                    </div>
                                    <div className="form-btn text-xl-start text-center col-12">
                                        <button
                                            className="th-btn"
                                            type="submit"
                                            disabled={loading} // Disable the button while loading
                                        >
                                            {loading ? 'Sending...' : 'Send Message'}
                                            <i className="fa-regular fa-arrow-right ms-2"></i>
                                        </button>
                                    </div>
                                </div>
                                <p className="form-messages mb-0 mt-3"></p>
                            </form>
                            <ToastContainer autoClose={3000} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="map-sec">
                {/* <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3644.7310056272386!2d89.2286059153658!3d24.00527418490799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe9b97badc6151%3A0x30b048c9fb2129bc!2sThemeholy!5e0!3m2!1sen!2sbd!4v1651028958211!5m2!1sen!2sbd"
                    allowFullScreen
                    loading="lazy"
                ></iframe> */}
            </div>

        </div>
    );

}
