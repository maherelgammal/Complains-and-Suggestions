import React, { useEffect, useRef, useState } from 'react'
import Map from "@arcgis/core/Map"; //I used ES modules via NPM to import different moodules
import MapView from "@arcgis/core/views/MapView";
import { Widgets } from '../Widgets/Widgets';
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer"
import Form from '../Form/Form';
import { ToastContainer } from 'react-toastify';
export default function MapViewer() {
    const mapRef = useRef(null); 

//Adding the mapview, map, and some of its properties.
    const [view, setView] = useState(null)

    useEffect(() => {
        new MapView({
            container: mapRef.current,
            map: new Map({
                basemap: "satellite",
            }),
            center: [31.3, 30.05],
            zoom: 12,
            popup: {
                dockEnabled: true,
                dockOptions: {
                    breakpoint: false,
                    buttonEnabled: false,
                    position: "top-right",
                }
            }
        }).when((view) => {
            setView(view);

        })

    }, [])


    return (
        <>
            <div ref={mapRef} className='vh-100 vw-100'>
                {view && <Widgets view={view}/>}
                <Form view={view} />
            </div>

        </>
    )
}
