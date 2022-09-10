import React,{useState,createContext} from 'react';

//创建上下文空间(Provider提供器， Consumer消费者)
const NumContext = createContext()

//子组件
function Child(){
    return (
        <NumContext.Consumer>
            {
                ({num,setNum}) => (
                    <>
                        <h2>{num}</h2>
                        <button onClick={()=>setNum(456)}>修改num</button>
                    </>
                )
            }
        </NumContext.Consumer>
    )
}

//父组件
// function Father(){
//     return <Child  />
// }
const Father = () => <Child/>



//顶级组件
const App4 = () => {
    const[num,setNum] = useState(345)

    return (
        <NumContext.Provider value={{num,setNum}}>
            <Father />
        </NumContext.Provider>
    )
};

export default App4;

/**
 * 无论是 vue 小程序 还是 react，所谓的子传父，
 * 真实的在干活的是 父组件
 *
 */