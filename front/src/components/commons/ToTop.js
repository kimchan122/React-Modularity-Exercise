import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Gotop } from "./BGContainer";
import Uparrow from "../../assets/up-arrow.png";
export default function ToTop() {
    const location = useLocation();

    function GoToTop(){
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return(
        <Gotop src={Uparrow} onClick={e => GoToTop()}/>
    )
};