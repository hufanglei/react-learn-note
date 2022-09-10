// console.log('hello world')
import ReactDOM from 'react-dom'
import App from "./App4";
import App3 from "./App3";

//ReactDOM.render(组件名称，要注入的元素)
ReactDOM.render(
    <App/>,
    document.getElementById('root')
)
//
// setTimeout(() => {
//     ReactDOM.render(
//         <input type="text"/>,
//         document.getElementById('root')
//     )
// }, 3000)