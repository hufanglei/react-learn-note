import React, {useState,useRef} from 'react';

const App6 = () => {
    const [value,setValue] = useState("asd")
    const element = useRef(null)

    // const inputChange = (e) => {
    //     console.log(e.target.value)
    //     setValue(e.target.value)
    // }

    const inputChange = (e) => setValue(e.target.value)

    const clickFn = () => console.log(value)

    return (
        <div>
            <h3>受控组件</h3>
            <input type="text" value={value} onChange={inputChange}/>
            {/*<button onClick={clickFn}>获取input的值</button>*/}
            <button onClick={() => console.log(value)}>获取input的值</button>
             <hr/>
            <h3>不受控组件</h3>
            <input type="text" ref={element}/>
            <button onClick={()=>console.log(element.current.value)}>获取input的值</button>
        </div>
    );
};

export default App6;

/**
 * 受控组件 和 不受控组件:
 * 受控组件和不受控组件只存在于表单元素
 * 所谓的受控组件就是表单元素的value需要通过state（或useState）来定义
 * 不受控组件意味着表单元素的value无法通过state获取，只能使用ref或useRef获取
 */