import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import one from "./assets/images/img (1).jpg"
import two from "./assets/images/img (2).jpg"
import three from "./assets/images/img (3).jpg"
import four from "./assets/images/img (4).jpg"
import five from "./assets/images/img (5).jpg"


import "./style.css"


const root = ReactDOM.createRoot(document.getElementById("root"))

function WhatsApp(props) {
    return (
        <div className="list__container">

            <div className="list">

                <div className="image__container" style={{ paddingLeft: "10px" }}>
                    <img src={props.image} alt={props.name} />
                </div>

                <div>
                    <h1>{props.name}</h1>
                    <p>{props.message}</p>
                </div>

                <div className="fav_container">
                    <p style={{color:"grey"}}>{props.time}</p>
                    <i className="fa-solid fa-star" style={{color: "#79d657"}}></i>
                </div>
            </div>
        </div>
    )
}

var person = [
    {
        img: one,
        name: "jessica Koel",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"11.08"
    },
    {
        img: two,
        name: "Komeial Bolger",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"10.55"
    },
    {
        img: three,
        name: "Tamaara Suiale",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"10.38"
    },
    {
        img: four,
        name: "Sam Nielson",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"8.40"
    },
    {
        img: five,
        name: "Caroline Nexon",
        msg: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        time:"7.20"
    },
]

root.render(
    <div>
        <App></App>
        {
            person.map(function (item) {

                return <WhatsApp name={item.name} message={item.msg} image={item.img} time={item.time}></WhatsApp>
            })
        }

    </div>
)


