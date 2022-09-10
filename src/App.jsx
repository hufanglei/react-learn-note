// import React, {Component} from 'react';
//
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 APP组件
//             </div>
//         );
//     }
// }
//
// export default App;

// export  default function App() {
//     return <h2>App</h2>
// }

//es5写法
//  function App() {
//     return <h2>App</h2>
// }

//es6写法
const App = () => {
    console.log(this)
    return <h2>App</h2>
}
export default App;

/**
 * 1. 函数式组件没有生命周期
 * 2. 函数式组件没有this
 * 3. 函数式组件没有state状态
 *
 * Hooks （钩子 - 生命周期函数）
 *        - React官方提供的hook
 *        - 开发人员自定义的hook
 */