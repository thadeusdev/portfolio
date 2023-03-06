import React from 'react'
import './about.css'
import Code from '../../img/code.jpg'
import Cert from '../../img/award.png'
import Sd from '../../img/sd-certificate.png'

const About = () => {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Code} alt="" className="a-img" />
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            Full-Stack software Engineer with experience in building and deploying web applications.
            </p>
            <p className="a-desc">
            Skilled in developing and maintaining the front-end and back-end components of web applications using technologies such as JavaScript, React, Ruby and Ruby On Rails. 
            </p>
            <p className="a-desc">
            Strong knowledge of database design and management using SQL and NoSQL databases. 
            </p>
            <p className="a-desc">
            Experienced in Agile development methodologies and familiar with DevOps tools and practices. 
            </p>
            <p className="a-desc">
            Strong problem-solving and analytical skills with a passion for high-quality, user-friendly software.
            </p>
            <div className="a-award">
                <img src={Cert} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">
                    Project Management Foundations (2019)
                    </h4>
                    <p className="a-award-desc">
                    Certificate of Completion.
                    </p>
                </div>
            </div>
            <div className="a-award">
                <img src={Sd} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">
                    Software Engineering
                    </h4>
                    <p className="a-award-desc">
                    Certificate of Completion.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About