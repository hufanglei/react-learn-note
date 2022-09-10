import React,{useState} from 'react';

//子组件
function Child(props){
    return (
        <>
            <h2>子组件 - {props.num}</h2>
            <button onClick={()=> props.setNum(789)}>修改num</button>
        </>
    )
}

//父组件
function Father(props){
    console.log(props.num)
    return <Child num={props.num} setNum={props.setNum} />
}

//顶级组件
const App3 = () => {
    const[num,setNum] = useState(123)
    //提供给子组件用来修改num的函数
    // const changeNumFn = () => setNum(456)
    // const changeNumFn = (arg) => console.log(arg)
    // const changeNumFn = (arg) => setNum(arg)

    return (
        <div>
            {/*<Father num={num} changeNumFn={changeNumFn}></Father>*/}
            <Father num={num} setNum={setNum}></Father>
        </div>
    );
};

export default App3;

/**
 * 无论是 vue 小程序 还是 react，所谓的子传父，
 * 真实的在干活的是 父组件
 *
 */