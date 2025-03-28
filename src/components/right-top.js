import React from "react";

const RightTop = () => {
    return (
        <div className="col-11">
            <div
                className="row row-cols-1 gy-2 row-cols-md-3 justify-content-start align-items-baseline bg-card rounded p-2"
                style={{ minHeight: "195px" }}
            >
                <div
                    className="col border-start border-secondary"
                    style={{ fontSize: "14px" }}
                >
                    <span>&#127765;</span>
                    <strong className="text-white">Contact</strong>
                    <div className="mb-2 mt-2">
                        <i className="text-light bi bi-geo-alt"> </i>
                        <a
                            className="text-light text-decoration-none"
                            href="https://www.google.com/maps/place/Tehran,+Tehran+Province"
                        >
                            iran tehran
                        </a>
                    </div>
                    <div className="mb-2">
                        <i className="text-light bi bi-envelope"> </i>
                        <a
                            className="text-light text-decoration-none"
                            href="mailto:s.m.h.mahmodian@gmail.com"
                        >
                            s.m.h.mahmodian
                        </a>
                    </div>
                    <div className="mb-2">
                        <i className="text-light bi bi-linkedin"> </i>
                        <a
                            className="text-light text-decoration-none"
                            href="https://www.linkedin.com/in/s-m-h-mahmodian-03a90a216"
                        >
                            smh-kneonix
                        </a>
                    </div>

                    <a href="https://github.com/smh-kneonix" >
                        <i className="text-warning m-1 fs-4 bi bi-github"></i>
                    </a>
                    <a
                        href="https://www.instagram.com/smh_kneonix?igsh=MWl3c3pyY3BocnEzeA=="
                    >
                        <i className="text-warning m-1 fs-4 bi bi-instagram"></i>
                    </a>
                    <a href="https://t.me/smh-kneonix">
                        <i className="text-warning m-1 fs-4 bi bi-telegram"></i>
                    </a>
                    <br />
                    <br />
                    <br />
                </div>

                <div
                    className="col border-start border-secondary"
                    style={{ fontSize: "14px", height: "195px" }}
                >
                    <span>&#127765;</span>
                    <strong className="text-white">Projects</strong>
                    <div className="mb-2 mt-3 row">
                        <a
                            className="col-8 text-white link-underline link-underline-opacity-0"
                            href="https://github.com/smh-kneonix/Knixless-Bot"
                        >
                            Discord bot
                        </a>
                        <br />
                        <a
                            className="col-8 mt-2 text-white link-underline link-underline-opacity-0"
                            href="https://github.com/smh-kneonix/nasa-project"
                        >
                            Nasa exo planet
                        </a>
                        <br />
                        <a
                            className="col-8 mt-2 text-white link-underline link-underline-opacity-0"
                            href="https://github.com/smh-kneonix/simple-typescript-todolist"
                        >
                            Todolist webapp
                        </a>
                        <br />
                        <a
                            className="col-11 mt-2 text-white link-underline link-underline-opacity-0"
                            href="https://github.com/smh-kneonix/user-management-system"
                        >
                            User management system
                        </a>
                        <br />
                    </div>
                </div>

                <div
                    className="col border-start border-secondary"
                    style={{ fontSize: "14px", height: "195px" }}
                >
                    <span>&#127765;</span>
                    <strong className="text-white">Favorite Tools</strong>
                    <div className="mb-2 mt-2">
                        <p className="text-light fs-6 mb-1">vim</p>
                        <p className="text-light fs-6 mb-1">notion</p>
                        <p className="text-light fs-6 mb-1">vscode</p>
                        <p className="text-light fs-6 mb-1">kubernetes</p>
                        <p className="text-light fs-6 mb-1">postman</p>
                    </div>
                </div>
            </div>

            <hr className="border border-secondary" />
        </div>
    );
};

export default RightTop;
