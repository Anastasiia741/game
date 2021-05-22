import React from 'react';
import ChildComponent from "./LotteryButton";

class ParentComponent extends React.Component {
    state = {
        random: 'нажмите на кнопку что бы появились цифры'
    };
    updateData = (value) => {
        this.setState({ random: value })
    }
    render() {
        return (
            <div className="row">
                <h1 className="text-center">Лотерея 5 из 36</h1>
                <div className="card" style={{marginTop:"10px"}}>
                    <ChildComponent updateData={this.updateData} />
                    <div className="card-block">Ваши числа:<br/> {this.state.random}</div>
                </div>
            </div>
        )
    }
}

export default ParentComponent;