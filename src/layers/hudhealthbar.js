import * as React from "react";


export default class HealthBar extends React.Component {
    health = 0.00;


    render() {
        return (
            <section className="HealthBar_Root">
                <section
                    className="HealthBar_Element0"
                    style={{width: this.health}}
                    onClick={() => {
                        if(this.health > 0.00) {
                            this.setState({width: this.health -= 25.00})
                        } else {
                            this.setState({width: this.health = 0.00})
                        }

                    }

                }>
                    <h1>Health</h1>


                </section>


            </section>
        );

    }


    constructor(props) {
        super(props);
        this.health = 520.00;


        this.state = {
            width: this.health
        };
    }

}
