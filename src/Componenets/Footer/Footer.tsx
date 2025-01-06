import { Link } from 'react-router-dom';
import { FaYoutube, FaTwitch, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="columns">
                    {/* Quick Links Column */}
                    <div className="column is-4">
                        <h4 className="title is-4">Quick Links</h4>
                        <div className="content">
                            <ul className="is-unstyled">
                                <li><Link to="/" >Home</Link></li>
                                <li><Link to="/blogs" >Blog Posts</Link></li>
                                <li><Link to="/about_me" >About Me</Link></li>
                                <li><Link to="/contact_info" >Contact</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Social Media Column */}
                    <div className="column is-4">
                        <h4 className="title is-4">Connect With Me</h4>
                        <div className="social-icons">
                            {[
                                { Icon: FaYoutube, link: "https://youtube.com", color: "#FF0000" },
                                { Icon: FaTwitch, link: "https://twitch.tv", color: "#6441a5" },
                                { Icon: FaInstagram, link: "https://instagram.com", color: "#C13584" },
                                { Icon: FaLinkedin, link: "https://linkedin.com", color: "#0077B5" },
                                { Icon: FaEnvelope, link: "mailto:youremail@example.com", color: "#333" }
                            ].map(({ Icon, link, color }, index) => (
                                <a
                                    key={index}
                                    href={link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="icon is-large mr-3"
                                    style={{ color: color }}
                                >
                                    <Icon size={30} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Newsletter Column */}
                    <div className="column is-4">
                        <h4 className="title is-4">Newsletter</h4>
                        <div className="field has-addons">
                            <div className="control is-expanded">
                                <input
                                    className="input"
                                    type="email"
                                    placeholder="Enter your email"
                                    style={{
                                        border: '1px solid #e1e1e1',
                                        borderRadius: '4px'
                                    }}
                                />
                            </div>
                            <div className="control">
                                <button
                                    className="button is-primary"
                                    style={{
                                        backgroundColor: '#3273dc',
                                        color: 'white'
                                    }}
                                >
                                    Subscribe
                                </button>
                            </div>
                        </div>
                        <p className="help has-text-grey-dark mt-2">
                            Get the latest updates straight to your inbox!
                        </p>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="has-text-centered mt-5">
                    <p>
                        © {currentYear} Personal Blog. All Rights Reserved.
                        Crafted with ❤️ and a touch of creativity.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
