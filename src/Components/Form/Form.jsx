import React, { useEffect, useRef, useState } from 'react'
import Draw from "@arcgis/core/views/draw/Draw.js";
import Graphic from "@arcgis/core/Graphic.js";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer.js";
import Field from "@arcgis/core/layers/support/Field.js";

export default function Form({ view }) {

    //I gave a ref to each input in the form, so I can deal with it.
    let pointRef = useRef(null);
    let nameRef = useRef(null);
    let phoneRef = useRef(null);
    let emailRef = useRef(null);
    let typeRef = useRef(null);
    let messageRef = useRef(null);
    const [clicked, setClicked] = useState(false)
    let xy = [];
    let graphs = []  //some global variables so I can deal with them in more than 1 function
    var layer;
    var hints = [];
    const draw = new Draw({
        view: view
    });

    //drawPoint is used to put a point on the map, It gives back some attributes like vertices which I can use to show a graph in this place 
    function drawPoint() {
        nameRef.current.value="",
        phoneRef.current.value="",
        emailRef.current.value="",
        typeRef.current.value="Complain",
        messageRef.current.value="",
        view.surface.style.cursor = "crosshair";
        let pointAction = draw.create("point");
        pointAction.on("draw-complete", (e) => {
            xy = e.vertices[0];
            view.graphics.removeAll();
            let point = {
                type: "point",
                x: xy[0],
                y: xy[1],
                spatialReference: view.spatialReference,
            };

            //adding a graphic (Point), depending on the cordinates of drawn point.
            let graphic = new Graphic({
                geometry: point,
                symbol: {
                    type: "simple-marker",
                    color: [244, 67, 54],
                    path:
                        "M12,2C8.13,2 5,5.13 5,9c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zM12,11.5c-1.38,0 -2.5,-1.12 -2.5,-2.5s1.12,-2.5 2.5,-2.5 2.5,1.12 2.5,2.5 -1.12,2.5 -2.5,2.5z",
                    size: 32,
                    yoffset: 16,
                    outline: {
                        width: 0,
                    },
                },
            });

            //adding the created graphic to the map and Opening the form to start writing the hint.
            view.graphics.add(graphic);
            view.popup.close();
            openForm();
        })
    }

    //open form function turns the d-none form to an appearing form and change mouse shape.
    function openForm() {
        if (pointRef.current) {
            pointRef.current.classList.remove('d-none');
            view.surface.style.cursor = "context-menu";
        }
    }

    function closeForm() {
        if (pointRef.current) {
            pointRef.current.classList.add('d-none');
        }
    }

    //this is the function that send the data from user to be saved in the local storage, and back a toasty message.
    function sendHint() {
        view.map.remove(layer);
        setClicked(!clicked)
        closeForm()
        view.graphics.removeAll();
        const date = new Date();
        let hintMessage = {
            name: nameRef.current.value,
            phone: phoneRef.current.value,
            email: emailRef.current.value,
            type: typeRef.current.value,
            message: messageRef.current.value,
            x: xy[0],
            y: xy[1],
            date: date.toDateString(),
        }
        hints = JSON.parse(localStorage.getItem("messages"));

        localStorage.setItem("messages", JSON.stringify(hints ? [...hints, hintMessage] : [hintMessage]));
        toast("Your Hint was sent Successfully!", {
            position: "top-center",
            type: "success",
            style: { background: "black", color: "white" }
        });
    }

    //Now Local Storage has data saved in it, this function responsible to get this data and create graphic from each record in it, then create a feature layer based on graphic array.
    function GetAllMessage() {
        view.graphics.removeAll();
        graphs = [];
        hints = JSON.parse(localStorage.getItem("messages"));
        if (!hints) return;
        const popupTemplate = {
            title: "{name} - {type}",
            content: [{
                type: "fields",
                fieldInfos: [
                    {
                        fieldName: "name",
                        label: "Name"
                    },
                    {
                        fieldName: "phone",
                        label: "Phone Number"
                    },
                    {
                        fieldName: "email",
                        label: "Email"
                    },
                    {
                        fieldName: "type",
                        label: "Type of Hint"
                    },
                    {
                        fieldName: "message",
                        label: "Message"
                    },
                    {
                        fieldName: "date",
                        label: "Sent at"
                    },
                ]
            }]
        }
        console.log(hints);
        hints.map((hint) => {
            const graph = new Graphic({
                geometry: {
                    type: "point",
                    x: hint.x,
                    y: hint.y,
                    spatialReference: view.spatialReference,
                },
                symbol: {
                    type: "simple-marker",
                    color: "red",
                },
                attributes: hint,
                popupTemplate: popupTemplate,
            })
            graphs.push(graph)
        });
        const fields = [
            new Field({
                name: "ObjectID",
                alias: "ObjectID",
                type: "oid",
            }),
            new Field({
                name: "name",
                alias: "name",
                type: "string",
            }),
            new Field({
                name: "phone",
                alias: "phone",
                type: "string",
            }),

            new Field({
                name: "email",
                alias: "email",
                type: "string",
            }),
            new Field({
                name: "type",
                alias: "type",
                type: "string",
            }),
            new Field({
                name: "message",
                alias: "message",
                type: "string",
            }),
        ];

        var renderer = {
            type: "unique-value",
            legendOptions: {
                title: "Complains and Suggestions",
            },
            field: "type",
            uniqueValueInfos: [
                {
                    value: "Complain",
                    symbol: {
                        type: "simple-marker",
                        color: "red",
                        outline: null,
                    },
                    label: "Complains",
                },
                {
                    value: "Request Information",
                    symbol: {
                        type: "simple-marker",
                        color: "blue",
                        outline: null,
                    },
                    label: "Request Information",
                },
                {
                    value: "Missed Services",
                    symbol: {
                        type: "simple-marker",
                        color: "gold",
                        outline: null,
                    },
                    label: "Missed Services",
                },
                {
                    value: "Add Information",
                    symbol: {
                        type: "simple-marker",
                        color: "green",
                        outline: null,
                    },
                    label: "Add Information",
                },
                {
                    value: "Other",
                    symbol: {
                        type: "simple-marker",
                        color: "dark",
                        outline: null,
                    },
                    label: "Other",
                },
            ],
        };

        layer = new FeatureLayer({
            source: graphs,
            objectIdField: "ObjectID",
            fields,
            renderer,
            popupTemplate,
        });

        view.map.add(layer);
    }

    //after graphics are ready as a feature layer, Its time to display it to the user when he click on list-button 
    function displayMessages() {
        view.map.removeAll();
        GetAllMessage();
        if (hints) {
            view.popup.open({
                features: graphs,
                featureMenuOpen: true,

            })
        } else {
            toast("No Messages", {
                position: "top-center",
                type: "info",
                style: { background: "black", color: "white" }
            });
        }
    }

    //more than a function to be excuted when the user try to send a hint, so a function contains all the desired actions and be fired when the user send a hint.
    function excute() {
        sendHint();
        view.map.removeAll();
        displayMessages();
        view.popup.close();
    }

    //A button that helps the user to remove all the hints saved in local storage and display the map without these hints
    function removeAll() {
        view.popup.close();
        localStorage.removeItem("messages");
        toast("All Your Hints were Removed!", {
            position: "top-center",
            type: "error",
            style: { background: "black", color: "white" }
        });
        view.map.removeAll();
        GetAllMessage();
        if (hints) {
            view.popup.open({
                features: graphs,
                featureMenuOpen: true,

            })
        }
    }


    return (
        <>
            <div id='hint-form' className="p-3 d-none bg-dark rounded-3 text-white esri-widget" ref={pointRef}>
                <div className="title d-flex justify-content-between align-items-center pt-3">
                    <i onClick={closeForm} className="fa-solid fa-xmark fa-2x"></i>
                    <h4>Give a hint!</h4>
                    <hr />
                </div>
                <div className="form-inputs">
                    <input ref={nameRef} type="text" placeholder='Your Name' className='my-3 form-control esri-input' />
                    <input ref={phoneRef} type="text" placeholder='Your Phone' className='my-3 form-control esri-input' />
                    <input ref={emailRef} type="email" placeholder='Your Email' className='my-3 form-control esri-input' />
                    <select ref={typeRef} className="form-control esri-input">
                        <option value="Complain">Complain</option>
                        <option value="Request Information">Request Information</option>
                        <option value="Missed Services">Missed Services</option>
                        <option value="Add Information">Add Information</option>
                        <option value="Other">Other</option>
                    </select>
                    <textarea ref={messageRef} name="message" id="message" rows="5" placeholder='Enter Your Message Here Please...' className='form-control esri-input my-3'></textarea>
                    <button onClick={excute} className='btn btn-warning w-100'>Send Hint!</button>
                </div>
            </div>
            <div onClick={drawPoint} id="pin-button" className="esri-widget esri-widget--button esri-interactive" title="Add a Hint">
                <span className="esri-icon-plus-circled"></span>
            </div>
            <div onClick={displayMessages} id="list-button" className="esri-widget esri-widget--button esri-interactive" title="Hints List">
                <span className="esri-icon-comment"></span>
            </div>
            <div onClick={removeAll} id="remove-button" className="esri-widget esri-widget--button esri-interactive" title="Remove All Hints">
                <span className="esri-icon-erase"></span>
            </div>
            <ToastContainer />
        </>
    )
}
