import React from "react"

const msg = "你好世界111"

const myStyle = {backgroundColor: 'skyblue'}
let flag = false;
let arr = ['刘备', '关羽', '张飞']
//类组件
class App1 extends React.Component {
    render() {
        return (
            <>
                <h2>{msg}</h2>
                {/* */}
                <input type="text"/>
                <hr/>
                <div className="box">盒子</div>
                <hr/>
                <div style={myStyle}>1111</div>
                <hr/>
                <div style={{backgroundColor: flag ? 'skyblue':'pink'}}>内容内容</div>
                <ul>
                    {
                        //React中的列表循环有且只有map可以使用
                        //只有map才有返回值，forEach没有
                        // arr.map((item,index)=>{
                        //     return <li key={index}>{item}</li>
                        // })
                        arr.map((item,index) =>  <li key={index}>{item}</li>)
                    }
                </ul>
            </>
        )
    }
}

export default App1

/**
 * 1.文件名可以是jsx或者js，不影响文件大小写
 * 2.组件名称必须大写
 * 3.js中出现（）代表其中想要写html
 * 4.html中出现{}。代表其中要写js
 * 5.其实export default也可以写到class前面
 */

