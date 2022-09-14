import React from "react";
import Adsicon from "../assets/ads.png";
import tagicon from "../assets/tag.png";
import nft from "../assets/nfticon.png";
import sbt from "../assets/sbt.png";
import hwang from "../assets/hwang.png";
import gyeong from "../assets/gyeong.png";
import chan from "../assets/chan.jpeg";
import hoon from "../assets/hoon.png";
import gyu from "../assets/gyu.png";
import { Rectangle1, Rectangle2, Rectangle3, BGContainer, BGContainer_2, BGContainer_3, BGContainer_4, BGContainer_Icon, Team_Icon } from '../components/commons/BGContainer';
import { BGText, Business, TeamIntro, Businesstext, Ourexplain, Explaintext, Businessicon, Contacttext, TeamName } from '../components/commons/BGText';
import { Fade } from 'react-awesome-reveal';
import '../App.css';
import { FaGithub } from 'react-icons/fa';

const MainPage = () => {
    return (
        <div className="App">
            <BGContainer style={{ paddingLeft : "20%", paddingRight: "20%"}}>
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
                <Contacttext>
                    Team Info
                </Contacttext>
                <TeamIntro>
                    <Team_Icon  
                        src={gyeong} style={{ gridRow: "1/2",gridColumn: "1/2"}}
                        onClick={e => window.open('https://www.notion.so/J-G-Yeom-fc244e9b9bfd49aa86c824af05660c11', '_black')}
                    /> 
                    <TeamName>Jaegyeong Yeom</TeamName>
                    <Team_Icon  
                        src={chan} style={{ gridRow:"1/2"}}
                        onClick={e => window.open('https://www.notion.so/Chan-Kim-82275b2eedcc443295abfebcc14f1892', '_black')}
                    />
                    <TeamName>Chan Kim</TeamName>
                    <Team_Icon  
                        src={hoon} style={{ gridRow:"1/2"}}
                        onClick={e => window.open('https://www.notion.so/YoungHoon-Cha-2943d2681dc543f88c91012a24f1b9c6', '_black')}
                    />
                    <TeamName>YoungHoon Cha</TeamName>
                    <Team_Icon
                        src={hwang} style={{ gridRow: "3/4",gridColumn: "1/3"}}
                        onClick={e => window.open('https://www.notion.so/Jihwang-Kim-9d12ed713faf4373ae63b11112b625c5', '_black')}
                    />
                    <TeamName style={{ gridRow: "4/5", gridColumn: "1/3"}}>Jihwang Kim</TeamName>
                    <Team_Icon  
                        src={gyu} style={{gridRow: "3/4", gridColumn: "2/4"}}
                        onClick={e => window.open('https://www.notion.so/Mingyu-Song-5711e14d073a401cbf9eebcff51817a7', '_black')}
                    />
                    <TeamName style={{ gridRow: "4/5", gridColumn: "2/4"}}>Mingyu Song</TeamName>
                </TeamIntro>
            </BGContainer_3>
        </div>
    )
}
export default MainPage;