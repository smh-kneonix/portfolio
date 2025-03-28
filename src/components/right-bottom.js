import React from "react";

const RightBottom = () => {
    return (
        <div className="col-11">
            <div className="row gx-2 justify-content-evenly align-items-center gy-2">
                <div className="col-12 col-md-5">
                    <h6 className="text-secondary">Experience</h6>
                    <div
                        className="row justify-content-start bg-card-hover rounded-2 shadow-sm pt-2 align-items-center d-flex"
                        style={{ minHeight: "6rem" }}
                    >
                        <p className="text-light col-11">
                            <span style={{ fontSize: "10px" }}>&#127765;</span>
                            <strong>
                                OverC | Backend developer | Remote 2024-03 to
                                2024-09
                            </strong>
                            <br />
                            Iranian-Canadian company with an international
                            presence, operating in multiple countries
                        </p>
                    </div>
                </div>
                <div className="col-12 col-md-5">
                    <h6 className="text-secondary">Education</h6>
                    <div
                        className="bg-card-hover rounded-2 shadow-sm pt-2 row justify-content-center"
                        style={{ minHeight: "6rem" }}
                    >
                        <div className="col-11 align-items-center d-flex">
                            <p className="text-light">
                                <i className="bi bi-mortarboard-fill text-warning"></i>
                                <strong> Bachelor Software Engineer</strong>
                                <br />
                                Bachelor of Software Engineering
                                <br />
                                Azad university 2021 to 2025
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightBottom;
