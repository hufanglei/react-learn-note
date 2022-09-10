import React,{useState, memo} from 'react';

// function Child(){
//     console.log(123)
//     return <div>子组件</div>
// }

const Child = memo(() => {
    console.log(123)
    return <div>子组件</div>
})

const App7 = () => {
    const [num, setNum] = useState(1)
    return (
        <div>
            <h3>数字为： {num}</h3>
            <button onClick={()=>setNum(num+1)}>累加</button>
            <hr/>
            <Child />
        </div>
    );
};

export default App7;