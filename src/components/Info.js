import React from "react"
import image from "../images/card-image.png"
import mailLogo from '../images/Mail.png'
import linkedinLogo from '../images/linkedin.png'
import facebookLogo from '../images/Facebook Icon.png'
import instaLogo from '../images/Instagram Icon.png'
import linkedIn from '../images/Linkedin Icon.png'
import githubLogo from '../images/GitHub Icon.png'

export default function Info() {
    return(
        <div className="container" >
            <div className="info-container">
                <img src={image} alt="Card image" className="info--img"/>
                <h1 className="info--name">Faizah Ahsan</h1>
                <h3 className="info--title">Frontend Developer</h3>
                <h3 className="info--website"><a href="https://faizah1992.github.io/Portfolio/">Portfolio</a></h3>
                <button className="email--btn" ><img src={mailLogo} alt="mail logo"></img><a href="mailto:faizah1992@gmail.com">Email Me</a></button>
                <button className="linkedin--btn" ><img src={linkedinLogo}></img><a href="https://www.linkedin.com/in/faizah-ahsan-540aa65b/">LinkedIn</a></button>
                <h2 className="info--about--title">About</h2>
                <p className="info--about">I am a passionate Software Engineer with experience in HTML, CSS, Ruby on Rails, React and JavaScript framework, and a background in Supply Chain Management & Finance. I am highly skilled in pair-programming, analytical research and time management.
                Graduated from Flatiron School as Full Stack Developer with knowledge in various software competencies. </p>
            <footer>
                <a href="https://www.facebook.com/blushingmauve"><img className="facebook--logo" src={facebookLogo} alt="facebook logo"></img></a>
                <a href="https://www.instagram.com/blushingmauve/"><img className="insta--logo" src={instaLogo} alt="instagran logo"></img></a>
                <a href="https://www.linkedin.com/in/faizah-ahsan-540aa65b/"><img className="linkedin--logo" src={linkedIn} alt="linkedin logo"></img></a>
                <a href="https://github.com/faizah1992"><img className="github--logo" src={githubLogo} alt="github logo"></img></a>
            </footer>
            </div>

        </div>
    )
}