import React,{useState, memo,useCallback, useMemo} from 'react';

// function Child(){
//     console.log(123)
//     return <div>子组件</div>
// }

const Child = memo((props) => {
    console.log(123)
    // return <button onClick={()=> props.setNum(props.num+1)}>累加</button>
    return <button onClick={()=> props.doSth()}>累加</button>
})

const App7 = () => {
    const [num, setNum] = useState(1)

    /**
     * setNum(newValue) 使用新只强行覆盖初始值
     * setNum((num)=>num+1)  不断使用新值覆盖旧值
     * @type {function(): void}
     */

    //[] 代表不检测更新
    // const doSth = useCallback(() =>{
    //         setNum(num => num+1)
    //     },[])

    //函数中返回函数：高阶函数
    const doSth = useMemo(() =>{
       return () => setNum(num => num+1)
    },[])

    return (
        <div>
            <h3>数字为： {num}</h3>
            {/*<button onClick={()=>setNum(num+1)}>累加</button>*/}
            {/*<hr/>*/}
            {/*<Child setNum={setNum} num={num}/>*/}
            <Child doSth={doSth} />
        </div>
    );
};

export default App7;