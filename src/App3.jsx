import React, {Component} from 'react';

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
    }
    // state = {
    //     num: 1
    // }
    render() {
        return (
            <div>
                <h2>数字为: {this.state.num}</h2>
                {/*<button onClick={ () => this.setState({num:2}) }>累加</button>*/}
                <button onClick={ () => this.setState({num: this.state.num + 1}) }>累加</button>
            </div>
        );
    }
}

export default App3;

/*
* state -> setState
* data -> setData
*/