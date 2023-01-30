import React from "react";

function Links({linkedin, github}) {
    return(
        <>
            <h3>Links</h3>
            <div>
                <a href={github}>{github}</a>
                <a href={linkedin}>{linkedin}</a>
            </div>
        </>
    )
}

export default Links;