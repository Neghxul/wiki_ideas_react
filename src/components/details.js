import React from "react";
import { imageUrlResult, titleResult, descriptionResult } from "./search_bar";

function Details ( /*{onResult}*/ ) {
    const handleButtonClick = () => {
        //onResult(imageUrlResult, titleResult, descriptionResult);
        console.log(imageUrlResult);
        console.log(titleResult);
    };

    return (
        <button onClick={handleButtonClick}>Agragar Articulo</button>
    );
}

export default Details;