import "./GoToTopBtn.scss";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

function GoToTopBtn() {
    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    return (
        <div className="goToTopBtn" onClick={topFunction}>
            <FontAwesomeIcon icon={faArrowUp} className="upArrow" />
        </div>
    );
}

export default GoToTopBtn;
