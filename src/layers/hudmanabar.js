import * as React from "react";


export default class ManaBar extends React.Component {
    mana = 0.00;


    render() {
        return (
            <section className="ManaBar_Root">
                <section
                    className="ManaBar_Element0"
                    style={{width: this.mana}}
                    onClick={() => {
                        if(this.mana > 0.00) {
                            this.setState({width: this.mana -= 25.00})
                        } else {
                            this.setState({width: this.mana = 0.00})
                        }

                    }

                }>
                    <h1>Mana</h1>


                </section>


            </section>
        );

    }


    constructor(props) {
        super(props);
        this.mana = 520.00;


        this.state = {
            width: this.mana
        };

    }

}
