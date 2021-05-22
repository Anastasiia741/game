import React from 'react';
class ChildComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            random: ''
        };
    };
    render() {
        const min = 5;
        const max = 36;
        const n = 5;
        var res = [];
        while (res.length < n) {
            let number = Math.floor(Math.random() * (max - min + 1)) + min;
            if (res.includes(number)) {

            } else {
                res.push(number)
            }
        }
        const listItems = res.map((number) =>
            <div className={"numberItem"} key={number.toString()}>
                {number}
            </div>
        );
        this.state = {
            random: listItems
        };
        return (
            <div>
                <button className="btn btn-primary" onClick={() => { this.props.updateData(this.state.random)}}>выбрать числа</button>
            </div>
        )
    }
}
export default ChildComponent;