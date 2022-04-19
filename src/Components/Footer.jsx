import React from 'react'
import { AiFillGithub } from 'react-icons/ai';
import { DiNpm } from 'react-icons/di';
import { SiNetlify } from 'react-icons/si';
import { SiGmail } from 'react-icons/si';

const Footer = () => {
    return (
        <div>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>Links</h3>
                    <p className="footer-links">
                    <a href="">Homepage</a><br/>
                    <a href="https://github.com/lgrave264">MyHub</a><br/>
                    <a href="https://github.com/lgrave264/portfolio"><AiFillGithub size={30} color={'white'}/></a><br/>
                    <a href="https://app.netlify.com/teams/lpgra256/overview"><SiNetlify size={30} color={'white'}/></a>
                    </p>
                </div>
                <div  className="footer-center">
                    <h3>About West-mec</h3>
                    <p id="aboutBox">Western Maricopa Education Center (West-MEC) is a public school district that provides industry-standard career training programs for both high school and adult students in Phoenix, Arizona. West-MEC focuses solely on innovative career and technical education programs that prepare students with the advanced skills necessary to enter the workforce and pursue continuing education at our education center.</p>
                </div>
                <div id="rightfoot" className="footer-right">
                    <h3>Social</h3>
                    <p className="footer-company-about">
                        
                        <a href="https://github.com/lgrave264"><AiFillGithub size={30} color={'white'}/></a><br/>
                        <a href="https://www.npmjs.com/~lpgra256"><DiNpm size={30} color={'white'}/></a><br/>
                        <a href="https://app.netlify.com/teams/lpgra256/overview"><SiNetlify size={30} color={'white'}/></a><br/>
                        <a href="mailto: lpgra256@gmail.com"><SiGmail size={30} color={'white'}/></a><br/>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
