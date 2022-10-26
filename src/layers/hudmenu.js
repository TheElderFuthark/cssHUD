import * as React from "react";


const HUD_MAX = "80.00px";
const HUD_MIN = "-1000.00px";


export default class HUDMenu extends React.Component {
    inventory = HUD_MIN;
    abilities = HUD_MIN;
    quests = HUD_MIN;


    render() {
        return (
            <section className="AppHUD_Menu">
                <button className="Button_AppHUD_Menu_Inventory" onClick={() => {
                    if(this.inventory === HUD_MIN) {
                        this.inventory = HUD_MAX;
                    } else {
                        this.inventory = HUD_MIN;
                    }


                    this.setState({inventoryOpen: this.inventory});
                }}>
                    <p>Inventory</p>


                </button>


                <section
                    className="AppHUD_Menu_Inventory"
                    style={
                        {height: this.state.inventoryOpen},
                        {bottom: this.state.inventoryOpen}
                    }>
                    <section
                        className="Menu_AppHUD_Menu_Inventory"
                        style={
                                {height: this.state.inventoryOpen},
                                {bottom: this.state.inventoryOpen}
                        }>
                    <section>
                        <p>Items</p>
                        <ul className="Menu_AppHUD_Menu_Inventory_Column">
                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                        </ul>


                        <ul className="Menu_AppHUD_Menu_Inventory_Column">
                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                        </ul>


                        <ul className="Menu_AppHUD_Menu_Inventory_Column">
                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                            <li className="Menu_AppHUD_Menu_Inventory_Slot"></li>
                                <p>Name: N/A</p>
                                <p>Durability: N/A</p>
                                <p>Lvl: N/A</p>


                        </ul>


                        <section className="Menu_AppHUD_Menu_Inventory_Character">
                            <section className="Menu_AppHUD_Menu_Inventory_Character_Head">
                                <p>Head</p>


                            </section>


                            <section className="Menu_AppHUD_Menu_Inventory_Character_Torso">
                                <p>Torso</p>


                            </section>


                            <section className="Menu_AppHUD_Menu_Inventory_Character_Legs">
                                <p>Legs</p>


                            </section>


                        </section>


                    </section>

                </section>


            </section>


            <button className="Button_AppHUD_Menu_Abilities" onClick={() => {
                if(this.abilities === HUD_MIN) {
                    this.abilities = HUD_MAX;
                } else {
                    this.abilities = HUD_MIN;
                }


                this.setState({abilitiesOpen: this.abilities});
            }}>
                <p>Abilities</p>


            </button>


            <section
                className="AppHUD_Menu_Abilities"
                style={ {height: this.state.abilitiesOpen},
                        {bottom: this.state.abilitiesOpen}
                }>
                <section
                    className="Menu_AppHUD_Menu_Abilities"
                    style={ {height: this.state.abilitiesOpen},
                            {bottom: this.state.abilitiesOpen}
                    }>
                    <section>
                        <p>Abilities</p>
                        <section className="Menu_AppHUD_Menu_Inventory_Character_Spec">
                            <p>Lvl: N/A</p>
                            <p>XP: N/A</p>
                            <p>Dmg: N/A</p>
                            <p>Mana: N/A</p>
                            <p>Health: N/A</p>


                        </section>

                    </section>


                </section>


            </section>


            <button className="Button_AppHUD_Menu_Quests" onClick={() => {
                if(this.quests === HUD_MIN) {
                    this.quests = HUD_MAX;
                } else {
                    this.quests = HUD_MIN;
                }


                this.setState({questsOpen: this.quests});
            }}>
                <p>Quests</p>


            </button>


            <section
                className="AppHUD_Menu_Quests"
                style={
                    {height: this.state.questsOpen},
                    {bottom: this.state.questsOpen}
                }>
                <section
                    className="Menu_AppHUD_Menu_Quests"
                    style={ {height: this.state.questsOpen},
                            {bottom: this.state.questsOpen}
                    }>


                    <section>
                        <p>Quests</p>
                        <section className="Menu_AppHUD_Menu_Quests_List">
                            <section className="Menu_AppHUD_Menu_Quests_List_Quest">
                                <p>Quest: Title</p>
                                <p>Difficulty: N/A</p>
                                <p>Required Lvl: N/A</p>


                            </section>


                            <section className="Menu_AppHUD_Menu_Quests_List_Quest">
                                <p>Quest: Title</p>
                                <p>Difficulty: N/A</p>
                                <p>Required Lvl: N/A</p>


                            </section>


                            <section className="Menu_AppHUD_Menu_Quests_List_Quest">
                                <p>Quest: Title</p>
                                <p>Difficulty: N/A</p>
                                <p>Required Lvl: N/A</p>


                            </section>


                            <section className="Menu_AppHUD_Menu_Quests_List_Quest">
                                <p>Quest: Title</p>
                                <p>Difficulty: N/A</p>
                                <p>Required Lvl: N/A</p>


                            </section>


                        </section>


                        <section className="Menu_AppHUD_Menu_Quests_List_Quest_Details">
                            <p>Quest: Title</p>
                            <p>Difficulty: N/A</p>
                            <p>Required Lvl: N/A</p>


                        </section>


                        <section className="Menu_AppHUD_Menu_Quests_List_Quest_Details_Confirm">
                            <section className="Menu_AppHUD_Menu_Quests_List_Quest_Details_Confirm_Tank"><p>Tank</p></section>
                            <section className="Menu_AppHUD_Menu_Quests_List_Quest_Details_Confirm_DPS"><p>Dmg</p></section>
                            <section className="Menu_AppHUD_Menu_Quests_List_Quest_Details_Confirm_Healer"><p>Heal</p></section>
                            <section className="Menu_AppHUD_Menu_Quests_List_Quest_Details_Confirm_Go"><p>Go!</p></section>


                        </section>


                    </section>


                </section>


            </section>


        </section>
        );

    }


    constructor(props) {
        super(props)
        this.state = {
            inventoryOpen: this.inventory,
            abilitiesOpen: this.abilities,
            questsOpen: this.quests
        };

    }

}
