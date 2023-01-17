import React from "react";

function Details({views, date}){
    return(
        <p>{views} Views | Uploaded: {date}</p>
    )
}

export default Details;