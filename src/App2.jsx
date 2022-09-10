import React, {useEffect,useState,useRef } from 'react';

function App2() {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);

    //模拟mounted，一般在这个位置写ajax
    // useEffect(()=>{
    //     console.log('---挂载---')
    // },[num1,num2]);

    //检测数据更新，检测那个数据更新，就把这个变量填写到数组中
    //当要检测的是页面所有的变量，你有两个选择，一是把所有的变量都填写到数组中，
    //二是直接删掉数组
    useEffect(()=>{
        console.log('---挂载---')
    });
   //当不想检测页面中的任何数据更新，可以直接给个空数组
    useEffect(()=>{
        console.log('---挂载---')
    },[]);


    return (
        <>
            <h2>数字为1: {num1}</h2>
            <button onClick={() => setNum1(num1+1)}>累加1</button>
            <h2>数字为1: {num2}</h2>
            <button onClick={() => setNum2(num2+1)}>累加2</button>
        </>
    );
};

export default App2;

/**
 * 函数式组件没有生命周期
 * vue组件:
 * mounted updated beforeDestroy
 *
 * 数据请求  检测数据更新  垃圾回收
 *
 * useEffect
 *
 */