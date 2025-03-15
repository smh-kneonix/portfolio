import React from "react";
import RightTop from "./right-top";
import RightBottom from "./right-bottom";

const Right = () => {
    return (
        <div className="col-11 col-lg-8 second-col mt-1">
            <div className="row align-items-center justify-content-center mt-2">
                <div className="col-11">
                    <h3>Seyed Mohamad Hasan Mahmodian</h3>
                    <p className="text-secondary mt-1">AKA Kneonix</p>
                </div>
                <RightTop />
                <div className="col-11 mt-5">
                    <h3>My Experience</h3>
                    <p className="text-secondary marg-cs mt-1 mb-2 mt-2">
                        more about me
                    </p>
                    <hr
                        className="border border-secondary w-25 marg-cs"
                        dir="ltr"
                    />
                </div>
                <RightBottom />
            </div>
        </div>
    );
};

export default Right;
