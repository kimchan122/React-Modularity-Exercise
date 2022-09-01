import React from "react";
import Adsicon from "../assets/ads.png";
import tagicon from "../assets/tag.png";
import { Rectangle1, Rectangle2, Rectangle3, BGContainer, BGContainer_2, BGContainer_3, BGContainer_4, BGContainer_Icon } from '../components/commons/BGContainer';
import { BGText, BGText2, BGTextContainer, Businesstext, Ourexplain, Explaintext, Businessicon, Contacttext } from '../components/commons/BGText';
import { Fade } from 'react-awesome-reveal';
import '../App.css';
import { FaGithub } from 'react-icons/fa';

const MainPage = () => {
    return (
        <div className="App">
            <BGContainer>
                    <Rectangle1 style={{ background: '#efefef' }} />
                    <Rectangle2 style={{ background: '#c1c1c1' }} />
                    <Rectangle3 style={{ background: '#afafaf' }} />
                    <BGText>
                    <Fade duration="3000" triggerOnce={true}>
                        Privacy is the power
                    </Fade >
                    <Fade duration="4000" triggerOnce={true}>
                        to selectively reveal oneself
                    </Fade>
                    <Fade duration="5000" triggerOnce={true}>
                        to the world.
                    </Fade>
                    </BGText>
            </BGContainer>
            <BGContainer_2>
                <Ourexplain style={{ fontWeight: "800" }}>
                    WHAT WE DO
                </Ourexplain>
                <Explaintext>
                    <h2 style={{ fontWeight: "500" }}>THE IMPORTANT OF SSI</h2>
                    Currently, our personal data is stored centrally, so we have lost the sovereignty of our personal data. This leads to serious social problems such as leakage of personal data.
                    We are aiming for web3 where the sovereignty of personal data resides.
                    For such a web3, we are going one step further towards SSI by developing various personal data-related services.
                </Explaintext>
                <Ourexplain style={{ fontWeight: "800", paddingTop: "8%" }}>
                    OUR SOLUTIONS
                </Ourexplain>
                <Explaintext>
                    We devised a way to utilize users' personal data without storing it.
                    This technology improves security while protecting the integrity of data.
                    In addition, using DID, individuals can have sovereignty of personal information on web3.
                </Explaintext>
                <Explaintext>
                    Through this technology, it enables a user to selective disclosure only necessary data rather than revealing all of personal data.
                    In addition, the problem of personal information leakage is solved by minimizing disclosure of information
                    (e.g., do not disclose your age and tell you if you are an adult or not.)
                </Explaintext>
            </BGContainer_2>
            <BGContainer_3>
                <Businessicon style={{ fontWeight: "800" }}>
                    OUR BUSINESS
                </Businessicon>
                <Businessicon style={{ paddingLeft: "0", justifyContent: "start", display: "inline-flex" }}>
                    <BGContainer_Icon src={Adsicon} style={{marginLeft: "10%"}} />
                    <Businesstext >
                        <Businesstext style={{marginLeft: "0", fontSize: "2rem"}}>D-Ad</Businesstext>
                        Using ZKP, users are shown targeted advertisements their interests while minimizing data leakage, and rewarded accordingly.
                    </Businesstext>
                    <BGContainer_Icon src={tagicon} />
                    <Businesstext>
                    <Businesstext style={{marginLeft: "0", fontSize: "2rem"}}>Soul Tag</Businesstext>
                        Ticket to ensure anonymity and authenticate yourself using sbt.
                    </Businesstext>
                </Businessicon>
            </BGContainer_3>
            <BGContainer_4>
                <Contacttext>
                    <FaGithub onClick={e=>window.open('https://github.com/kimchan122/D-Ad-MVP', '_black')} size="50" style={{lineHeight: "10vh",height:"10vh", alignItems: "center"}}/>
                </Contacttext>
            </BGContainer_4>
        </div>
    )
}
export default MainPage;