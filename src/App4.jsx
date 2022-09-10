import React, {Component} from 'react';
import "./App4.css"

class App4 extends Component {
    render() {
        return (
            // <div  style={{
            //     width:'200px',
            //     height:'200px',
            //     background:'pink'
            // }}>
             <div className='box'>
                <button onClick={this.btnClick.bind(this,1)}>按钮1</button>
                <button onClick={this.btnClick.bind(this,2)}>按钮2</button>
            </div>
        )
    }

    btnClick(num){
        console.log(num)
    }
}

export default App4;