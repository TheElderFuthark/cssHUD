import * as React from "react";


export default class StaminaBar extends React.Component {
    stamina = 0.00;


    render() {
        return (
            <section className="StaminaBar_Root">
                <section
                    className="StaminaBar_Element0"
                    style={{width: this.stamina}}
                    onClick={() => {
                        if(this.stamina > 0.00) {
                            this.setState({width: this.stamina -= 25.00})
                        } else {
                            this.setState({width: this.stamina = 0.00})
                        }

                    }

                }>
                    <h1>Stamina</h1>


                </section>


            </section>
        );

    }


    constructor(props) {
        super(props);
        this.stamina = 520.00;


        this.state = {
            width: this.stamina
        };

    }

}
