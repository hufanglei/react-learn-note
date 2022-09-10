import {useState} from 'react'

let msg = "你好世界"

//触发视图更新的东西 useState
function App1(){
    //Hook只能用在组件函数中的最顶层
    const [num,setNum] = useState(1)


    return (
        <>
          <h2>{num}</h2>
           <button onClick={() => setNum(num+1)}>累加</button>
        </>
    )
}

export default App1;