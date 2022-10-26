import * as React from "react";


import HUDMenu from "./hudmenu";


import HealthBar from "./hudhealthbar";
import ManaBar from "./hudmanabar";
import StaminaBar from "./hudstaminabar";


export default class HUD_Root extends React.Component {
    render() {
        return (
            <section className="AppHUD_Root">
                <HUDMenu />
                <HealthBar />
                <ManaBar />
                <StaminaBar />

            </section>
        );

    }

}
