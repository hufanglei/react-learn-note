import React from 'react';

//子组件
function Child(props){
    return <h2>子组件 - {props.num}</h2>
}

//父组件
function Father(props){
    console.log(props.num)
    return <Child num={props.num} />
}

//顶级组件
const App3 = () => {
    return (
        <div>
            <Father num={456}/>
        </div>
    );
};

export default App3;