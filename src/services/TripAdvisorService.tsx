import * as React from "react";

export const GetReviews = () => {
    return fetch("https://www.lunfardatravel.com/reviews", {
        "method": "GET"
    });
}

export const AddTripScript = () => {
    const script = document.createElement("script");

    script.src = "https://www.jscache.com/wejs?wtype=selfserveprop&amp;uniq=500&amp;locationId=18543609&amp;lang=en_US&amp;rating=true&amp;nreviews=3&amp;writereviewlink=true&amp;popIdx=true&amp;iswide=false&amp;border=true&amp;display_version=2"
    script.async = true;
    script.type = 'text/javascript'
    document.body.appendChild(script);
}