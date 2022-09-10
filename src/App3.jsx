import React, {Component} from 'react';

class App3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.addNum = this.addNum.bind(this)
    }
    // state = {
    //     num: 1
    // }
    render() {
        return (
            <div>
                <h2>数字为: {this.state.num}</h2>
                {/*<button onClick={ () => this.setState({num:2}) }>累加</button>*/}
                <button onClick={ () => this.setState({num: this.state.num + 1}) }>按钮 - 累加1</button>
                {/*//this传递方式1*/}
                <button onClick={this.addNum.bind(this) }>按钮累加2</button>
                {/*神操作，不推荐*/}
                <button onClick={this.addNum }>按钮 - 累加2</button>
                {/*//this传递方式3*/}
                <button onClick={() => this.addNum()}>按钮 - 累加3</button>

            </div>
        );
    }

    addNum(){
        console.log(this)
        console.log(this.state.num)
        this.setState({num: this.state.num+1})
    }
}

export default App3;

/*
* state -> setState
* data -> setData
*/