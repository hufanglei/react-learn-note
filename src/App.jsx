import React from "react"

const msg = "你好世界111"

const myStyle = {backgroundColor: 'skyblue'}

//类组件
class App extends React.Component {
    render() {
        return (
            <div>
                <h2>{msg}</h2>
                <input type="text"/>
                <hr/>
                <div className="box">盒子</div>
                <hr/>
                <div style={myStyle}>内容内容</div>
            </div>
        )
    }
}

export default App

/**
 * 1.文件名可以是jsx或者js，不影响文件大小写
 * 2.组件名称必须大写
 * 3.js中出现（）代表其中想要写html
 * 4.html中出现{}。代表其中要写js
 * 5.其实export default也可以写到class前面
 */