import React, {Component} from 'react';

class App2 extends Component {
    state = {
        num: 1
    }
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

export default App2;

/*
* state -> setState
* data -> setData
*/