import {useState} from 'react'

let msg = "你好世界"

//触发视图更新的东西 useState
function App1(){
    //Hook只能用在组件函数中的最顶层
    const [msg,setMsg] = useState('你好世界')
    console.log(msg)
    const fn = () => {
        // msg = 'hello world'
        // console.log(msg)
        setMsg('hello world')
    }

    return (
        <>
        <h2>{msg}</h2>
        {/*<button onClick={()=>msg="hello world"}>修改</button>*/}
        <button onClick={fn}>修改</button>
        <button onClick={() => setMsg('hello world')}>修改msg2</button>
        </>
    )
}

export default App1;