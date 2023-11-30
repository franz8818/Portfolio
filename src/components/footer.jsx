import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer">
            <div className="flex-container">
            <div className="nav-div">
                <div className="div-link">
                    <a className="foo-link" aria-current="page" href="#">
                        Proyectos
                    </a>
                </div>
                <div className="div-link">
                    <Link className="foo-link" to="/cv">
                        CV
                    </Link>
                </div>
                <div className="div-link">
                    <a
                        className="foo-link"
                        href="https://www.linkedin.com/in/franz8818/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                </div>
                <div className="div-link">
                    <a
                        className="foo-link"
                        href="https://github.com/franz8818"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
            Coded with ♥︎ by Franz Seidel 
                <div className="contact-div">
                <div><i className="cel fa-solid fa-mobile-screen-button"></i>+57 316 270 2385</div>
                <div><i className="mail fa-regular fa-envelope"></i>franz8818@gmail.com</div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
