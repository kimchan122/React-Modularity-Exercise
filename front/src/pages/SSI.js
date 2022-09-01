import React from "react";
import Navbar from "../components/Navbar/index";
import BgOne from "../assets/bg01.jpeg";
import styled from 'styled-components';
import { BGContainer, BGContainer_2, Web3text } from '../components/commons/BGContainer';
import { BGTextContainer, BGText, SSItext1, SSItext2, SSItext3 } from '../components/commons/BGText';

const SSI = () => {
    return (
        <div className="App" >
            <BGContainer style={{display:"block", height:"100%"}}>
                <SSItext1>
                    Web3.0 and SSI
                </SSItext1>

                <Web3text>
                    <SSItext2> What is Web3.0 </SSItext2>
                    <SSItext3>
                        Web 3.0 is literally the third version of the Internet. 
                        It is a next-generation network structure in which all data and information are decentralized.
                    </SSItext3>
                    <SSItext2> Web 1.0 </SSItext2>
                    <SSItext3>
                        In Web1.0, it is an environment made up of one-way communication where information can only be read (read-only). 
                        In the 1990s, the Internet just spread, and when web page publishers create content, other users can only read this static information. 
                        Dynamic information or interactions such as logging in and leaving comments were not possible as it is today.
                    </SSItext3>
                    <SSItext2>Web 2.0</SSItext2>
                    <SSItext3>
                        The web environment used from 2004 to today is Web2.0. 
                        It has changed to read-write and two-way communication made possible.
                    </SSItext3>

                    <SSItext2>Problems with Web2.0</SSItext2>
                    <SSItext3>
                        in the web2.0 communication process, data is centrally stored and managed on the server and sent or retrieved by the client. 
                        Every time we interact over the Internet, a copy of our data is sent to our service provider's servers,
                        and each time we do, we lose control of our data.
                        Can I trust those people and institutions that store and manage my data against any form of corruption 
                        – internally or externally, on purpose or by accident?
                    </SSItext3>
                    <SSItext3> Over time, IT companies collect our content and data to generate revenue. (advertisement). 
                        With most of the profits, centralized big tech companies were created and monopolized power.
                    </SSItext3>
                    <SSItext3>
                        Blockchain-based Web 3.0 has emerged as a way to solve the above problems. 
                        The blockchain does not hold the ledger containing transaction information by the transaction subject or a specific institution, 
                        but has a technical feature shared by all network participants. 
                        In Web 3.0, not only functions available in Web 2.0, but also income can be obtained through distribution of own tokens according to usage and development contribution.
                    </SSItext3>
                    <SSItext3>
                        In Web3.0, the overall industry structure will be transformed into the form of DAO in the future as not only platform companies but also all participants share profits fairly. 
                        What's important here is that digital identities, especially SSI, are key to enabling Web3.0.
                         It's important because it's all about decentralization and data privacy. More details will be explained later.
                    </SSItext3>

                </Web3text>


            </BGContainer>

        </div>
    )
}
export default SSI;