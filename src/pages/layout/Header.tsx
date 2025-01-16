
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header>
            <div className="sidemenu-wrapper">
                <div className="sidemenu-content">
                    <button className="closeButton sideMenuCls">
                        <i className="far fa-times"></i>
                    </button>
                    <div className="widget woocommerce widget_shopping_cart">
                        <h3 className="widget_title">Shopping cart</h3>
                        <div className="widget_shopping_cart_content">
                            <ul className="woocommerce-mini-cart cart_list product_list_widget">
                                <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a href="#" className="remove remove_from_cart_button"
                                    ><i className="far fa-times"></i></a>
                                    <a href="#">
                                        <Image
                                            src="/assets/img/product/product_thumb_1_1.jpg"
                                            alt="Cart Image" width={75} height={75} />
                                        Gaming Computer
                                    </a>
                                    <span className="quantity"
                                    >1 ×
                                        <span className="woocommerce-Price-amount amount"
                                        ><span className="woocommerce-Price-currencySymbol">$</span>940.00</span></span>
                                </li>
                                <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a href="#" className="remove remove_from_cart_button"
                                    ><i className="far fa-times"></i></a>
                                    <a href="#"
                                    ><Image
                                            src="/assets/img/product/product_thumb_1_2.jpg"
                                            alt="Cart Image" width={75} height={75}
                                        />Smartphone Vivo V9</a>
                                    <span className="quantity"
                                    >1 ×
                                        <span className="woocommerce-Price-amount amount"
                                        ><span className="woocommerce-Price-currencySymbol">$</span>899.00</span></span>
                                </li>
                                <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a href="#" className="remove remove_from_cart_button"
                                    ><i className="far fa-times"></i></a>
                                    <a href="#"
                                    ><Image
                                            src="/assets/img/product/product_thumb_1_3.jpg"
                                            alt="Cart Image" width={75} height={75}
                                        />SanDisk Flash Drive</a>
                                    <span className="quantity"
                                    >1 ×
                                        <span className="woocommerce-Price-amount amount"
                                        ><span className="woocommerce-Price-currencySymbol">$</span>756.00</span></span>
                                </li>
                                <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a href="#" className="remove remove_from_cart_button"
                                    ><i className="far fa-times"></i></a>
                                    <a href="#"
                                    ><Image
                                            src="/assets/img/product/product_thumb_1_4.jpg"
                                            alt="Cart Image" width={75} height={75}
                                        />Smart Power Bank</a>
                                    <span className="quantity"
                                    >1 ×
                                        <span className="woocommerce-Price-amount amount"
                                        ><span className="woocommerce-Price-currencySymbol">$</span>723.00</span></span>
                                </li>
                                <li className="woocommerce-mini-cart-item mini_cart_item">
                                    <a href="#" className="remove remove_from_cart_button"
                                    ><i className="far fa-times"></i></a>
                                    <a href="#"
                                    ><Image
                                            src="/assets/img/product/product_thumb_1_5.jpg"
                                            alt="Cart Image" width={75} height={75}
                                        />Apple Smartwatch</a>
                                    <span className="quantity"
                                    >1 ×
                                        <span className="woocommerce-Price-amount amount"
                                        ><span className="woocommerce-Price-currencySymbol">$</span>1080.00</span></span>
                                </li>
                            </ul>
                            <p className="woocommerce-mini-cart__total total">
                                <strong>Subtotal:</strong>
                                <span className="woocommerce-Price-amount amount"
                                ><span className="woocommerce-Price-currencySymbol">$</span>4398.00</span>
                            </p>
                            <p className="woocommerce-mini-cart__buttons buttons btn-wrap">
                                <a href="cart.html" className="th-btn wc-forward">View cart</a>
                                <a href="checkout.html" className="th-btn checkout wc-forward"
                                >Checkout</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup-search-box d-none d-lg-block">
                <button className="searchClose"><i className="fal fa-times"></i></button>
                <form action="#">
                    <input type="text" placeholder="What are you looking for?" />
                    <button type="submit"><i className="fal fa-search"></i></button>
                </form>
            </div>
            <div className="th-menu-wrapper">
                <div className="th-menu-area text-center">
                    <button className="th-menu-toggle"><i className="fal fa-times"></i></button>
                    <div className="mobile-logo">
                        <Link className="icon-masking" href="/home">
                            {/* <Image src="/assets/img/logo.svg" alt="Work Cleverly" width={196} height={46} /> */}
                            <Image src="/assets/img/Workcleverly_png2.png" alt="Work Cleverly" width={180} height={46} />
                        </Link>
                    </div>
                    <div className="th-mobile-menu">
                        <ul>
                            <li className="mega-menu-wrap">
                                <Link href="/home">Home</Link>
                            </li>
                            <li><Link href="/about">About Us</Link></li>
                            <li className="">
                                <Link href="/services">Services</Link>
                            </li>
                            <li><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <header className="th-header header-layout2">
                <div className="header-top">
                    <div className="container">
                        <div
                            className="row justify-content-center justify-content-lg-between align-items-center gy-2"
                        >
                            <div className="col-auto d-none d-lg-block">
                                <div className="header-links">
                                    <ul>
                                        <li>
                                            <i className="fas fa-map-location"></i>Hong Kong & Chennai
                                        </li>
                                        <li>
                                            <i className="fas fa-phone"></i><a href="tel:+1539873657">+852 69004844</a>
                                        </li>
                                        <li>
                                            <i className="fas fa-envelope"></i><a href="mailto:info@webteck.com">info@workcleverly.ai</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="header-social">
                                    <span className="social-title">Follow Us On : </span><a href="https://www.facebook.com/"
                                    ><i className="fab fa-facebook-f"></i></a>
                                    <a href="https://www.twitter.com/"
                                    ><i className="fab fa-twitter"></i></a>
                                    <a href="https://www.linkedin.com/"
                                    ><i className="fab fa-linkedin-in"></i></a>
                                    <a href="https://www.instagram.com/"
                                    ><i className="fab fa-instagram"></i></a>
                                    <a href="https://www.youtube.com/"
                                    ><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sticky-wrapper">
                    <div className="menu-area">
                        <div className="container">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-auto">
                                    <div className="header-logo">
                                        <Link className="icon-masking" href="/home">
                                            <Image src="/assets/img/Workcleverly_png2.png" alt="Work Cleverly" width={180} height={46} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-auto">
                                    <nav className="main-menu d-none d-lg-inline-block">
                                        <ul>
                                            <li className="mega-menu-wrap">
                                                <Link href="/home">Home</Link>
                                            </li>
                                            <li><Link href={{ pathname: '/about', query: { reload: 'true' } }}>About Us</Link></li>
                                            <li className="">
                                                <Link href="/services">Services</Link>
                                            </li>
                                            <li><Link href="/contact">Contact</Link></li>
                                        </ul>
                                    </nav>
                                    <div className="header-button">
                                        {/* <button
                                            type="button"
                                            className="icon-btn sideMenuToggler d-inline-block d-lg-none"
                                        >
                                            <i className="far fa-shopping-cart"></i>
                                            <span className="badge">5</span>
                                        </button> */}
                                        <button
                                            type="button"
                                            className="th-menu-toggle d-inline-block d-lg-none"
                                        >
                                            <i className="far fa-bars"></i>
                                        </button>
                                    </div>
                                </div>
                                {/* <div className="col-auto d-none d-lg-block">
                                    <div className="header-button">
                                        <button type="button" className="icon-btn searchBoxToggler">
                                            <i className="far fa-search"></i>
                                        </button>
                                        <button type="button" className="icon-btn sideMenuToggler">
                                            <i className="far fa-shopping-cart"></i>
                                            <span className="badge">5</span>
                                        </button>
                                        <a href="contact.html" className="th-btn shadow-none"
                                        >Make Appointment<i className="fas fa-arrow-right ms-2"></i></a>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </header>
    );
};
