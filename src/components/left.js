import React from "react";
import profile from './pic/profile.jpg'

const Left = () => {
    return (
        <div className="col-11 col-lg-3 first-col mt-1 rounded-3 border-secondary border shadow">
            <div className="row justify-content-center gy-1 m-2">
                {/* image */}
                <img
                    className="rounded-circle col-5 col-md-7"
                    alt="profile-pic"
                    src={profile}
                />
                {/* summary text */}
                <div className="col-11 text-white" dir="ltr">
                    <span style={{fontSize: "10px"}}>&#127765;</span>
                    <strong>Summary</strong>
                    <p>
                        I'm a 22-year-old software engineer specializing in
                        Node.js backend development, with expertise in building
                        scalable systems, database design, and software
                        architecture. I focus on writing clean, efficient code
                        and leveraging automation tools to streamline
                        development and deployment. Passionate about performance
                        and maintainability, I create robust solutions that
                        scale seamlessly.
                    </p>
                    <hr className="border border-light" />
                </div>
                {/* skills */}
                <div className="col-11">
                    <strong className="text-light">
                        <span style={{fontSize: "10px"}}>&#127765;</span>
                        Skills
                    </strong>
                    <div className="text-white row row-cols-12 mt-1">
                        <p>
                            <strong>Frameworks & Languages: </strong>
                            JavaScript, Type Script, Node JS, Express JS, Nest
                            JS, Bootstrap
                        </p>
                        <p>
                            <strong>Databases & ORMs: </strong>
                            MongoDB, MySQL, Mongoose, Prisma, Redis, Type ORM,
                            Minio, S3
                        </p>
                        <p>
                            <strong>Automation: </strong>
                            Docker, CI (GitHub Action), Kubernetes
                        </p>
                        <p>
                            <strong>Architecture: </strong>
                            Microservice, Graph QL, Rest API, JWT, cookies
                            session, OAth2
                        </p>
                        <p>
                            <strong>Soft Skills: </strong>
                            Git, GitHub, Notion, Jira
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Left;
