import React from "react";
import Adsicon from "../assets/ads.png";
import tagicon from "../assets/tag.png";
import nft from "../assets/nfticon.png";
import sbt from "../assets/sbt.png";
import { Rectangle1, Rectangle2, Rectangle3, BGContainer, BGContainer_2, BGContainer_3, BGContainer_4, BGContainer_Icon } from '../components/commons/BGContainer';
import { BGText, Business, BGTextContainer, Businesstext, Ourexplain, Explaintext, Businessicon, Contacttext } from '../components/commons/BGText';
import { Fade } from 'react-awesome-reveal';
import { FaGithub } from 'react-icons/fa';

const MainPage = () => {
    return (
        <div className="App">
            <div className="MainPageContainer01">
                <Fade duration="1000" delay="30" triggerOnce={true}>
                    <div className="Rectangle01"></div>
                </Fade>
                <Fade duration="1000" delay="60" triggerOnce={true}>
                    <div className="Rectangle02"></div>
                </Fade>
                <Fade duration="1000" delay="90" triggerOnce={true}>
                    <div className="Rectangle03"></div>
                </Fade>
                <div className="MainPageText">
                    <Fade duration="3000" triggerOnce={true}>
                        Privacy is the power
                    </Fade >
                    <Fade duration="4000" triggerOnce={true}>
                        to selectively reveal oneself
                    </Fade>
                    <Fade duration="5000" triggerOnce={true}>
                        to the world.
                    </Fade>
                </div>
            </div>
            <BGContainer style={{ paddingLeft: "20%", paddingRight: "20%" }}>
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
                    PROJECT
                </Businessicon>
                <Business >
                    <BGContainer_Icon src={Adsicon} style={{ justifyContent: "left" }} />
                    <Businesstext style={{ gridColumn: "2/3", justifyContent: "space-between" }}>D-Ad
                        <FaGithub onClick={e => window.open('https://github.com/kimchan122/D-Ad-MVP', '_black')} size="50" style={{ marginLeft: "30px", lineHeight: "10vh", height: "10vh" }} />
                    </Businesstext>
                    <Businesstext style={{ gridColumn: "2/3" }}>
                        Use zkp to targeted advertisement the user's personal data without worrying about leakage, and reward the user.
                    </Businesstext>
                </Business>
                <Business>
                    <BGContainer_Icon src={tagicon} style={{ justifyContent: "left" }} />
                    <Businesstext style={{ gridColumn: "2/3", justifyContent: "space-between" }}>
                        Soul Tag
                        <FaGithub onClick={e => window.open('https://github.com/Unchain-ETHSeoul', '_black')} size="50" style={{ marginLeft: "30px", lineHeight: "10vh", height: "10vh", alignItems: "center" }} />
                    </Businesstext>
                    <Businesstext style={{ gridRow: "2/3", gridColumn: "2/3" }}>
                        Ticket to ensure anonymity and authenticate yourself using sbt.
                    </Businesstext>
                    <BGContainer_Icon style={{ justifyContent: "left" }} />
                </Business>
                <Business>
                    <BGContainer_Icon src={sbt} style={{ justifyContent: "left" }} />
                    <Businesstext style={{ gridColumn: "2/3", justifyContent: "space-between" }}>
                        ZK-SBT
                        <FaGithub onClick={e => window.open('https://github.com/Unchain68/ZK-SBT', '_black')} size="50" style={{ marginLeft: "30px", lineHeight: "10vh", height: "10vh", alignItems: "center" }} />
                    </Businesstext>
                    <Businesstext style={{ gridRow: "3/4", gridColumn: "2/3" }}>
                        developers are provided with the tooling to issue zero-knowledge proof soul bound tokens (ZK SBTs) and verify them on-chain.
                    </Businesstext>
                </Business>
                <Business>
                    <BGContainer_Icon src={nft} style={{ justifyContent: "left" }} />
                    <Businesstext style={{ gridColumn: "2/3", justifyContent: "space-between" }}>
                        PSP 34 NFT
                        <FaGithub onClick={e => window.open('https://github.com/Unchain68/psp34_contract', '_black')} size="50" style={{ marginLeft: "30px", lineHeight: "10vh", height: "10vh", alignItems: "center" }} />
                    </Businesstext>
                    <Businesstext style={{ gridRow: "3/4", gridColumn: "2/3" }}>
                        Enables users to create and deploy NFT in PSP34 standard.
                    </Businesstext>
                </Business>
            </BGContainer_3>
            <BGContainer_4>
                <Contacttext>
                    {/* <FaGithub onClick={e => window.open('https://github.com/kimchan122/D-Ad-MVP', '_black')} size="50" style={{ lineHeight: "10vh", height: "10vh", alignItems: "center" }} /> */}
                </Contacttext>
            </BGContainer_4>
        </div>
    )
}
export default MainPage;