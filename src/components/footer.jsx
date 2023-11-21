import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                <div className="col">
                <Link className="navbar-brand" to="/">Franz Seidel</Link>
                </div>
                    <div className="col">
                        <a className="nav-link" aria-current="page" href="#">
                            Proyectos
                        </a>
                    </div>
                    <div className="col">
                        <Link className="nav-link" to="/cv">
                            CV
                        </Link>
                    </div>
                    <div className="col">
                        <a
                            className="nav-link"
                            href="https://www.linkedin.com/in/franz8818/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Linkedin
                        </a>
                    </div>
                    <div className="col">
                        <a
                            className="nav-link"
                            href="https://github.com/franz8818"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
