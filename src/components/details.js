import React from "react";

function Details ( /*{onResult}*/ ) {
    const handleButtonClick = () => {
        //onResult(imageUrlResult, titleResult, descriptionResult);
        //console.log(imageUrlResult);
        //console.log(titleResult);
    };

    return (
        <button onClick={handleButtonClick}>Agragar Articulo</button>
    );
}

export default Details;