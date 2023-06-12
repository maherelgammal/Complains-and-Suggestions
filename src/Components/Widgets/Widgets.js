import React, { useEffect } from 'react'
import Home from "@arcgis/core/widgets/Home"
import ScaleBar from "@arcgis/core/widgets/ScaleBar"
import Compass from "@arcgis/core/widgets/Compass"
import BasemapToggle from "@arcgis/core/widgets/BasemapToggle.js";
import Legend from "@arcgis/core/widgets/Legend.js";


export function Widgets({ view }) {
    //Adding different widgets, and assigning them in specific positions from view.ui
    useEffect(function () {
        view.ui.add(
            new Home({
                view: view,
            }),
            "top-left"
        );
        view.ui.add(
            new ScaleBar({
                view: view,
            }),
            "bottom-left"
        );

        view.ui.move("zoom",
            "top-left"
        );
        view.ui.add(
            new Compass({
                view: view,
            }),
            "top-left"
        );
        view.ui.add(
            new Legend({
                view: view,
            }),
            "bottom-left"
        );
        view.ui.add(
            new BasemapToggle({
                view: view,
                nextBasemap: "dark-gray",
            }),
            "bottom-right"
        );
        view.ui.add("pin-button", "top-left");
        view.ui.add("list-button", "top-left");
        view.ui.add("hint-form", "top-right");
        view.ui.add("remove-button", "top-left");
    }, [view]);
    return null;
};
