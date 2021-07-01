import React from "react";

const About = (props) => {
    return (
        <aside>
            <img src= {props.image ? <p>{props.image}</p> : "https://via.placeholder.com/215"} alt="blog logo" />
            <p> {props.about}</p>
        </aside>
    )

}


export default About