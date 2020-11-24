import React from 'react';
import ReactDOM from 'react-dom';

// 函数组件
/* function Clock(props) {
    return(
        <div>
            <h2>It is {props.date.toLocaleTimeString()}.</h2>
        </div>
    )
} */

// 将函数组件转换成class组件
/* class Clock extends React.Component {  // 第一步 创建同名class，继承自React.Component
    render() {  // 第二步 空第render函数
        return (  // 第三步  函数体移过来   第四步 props前加this
            <div>
                <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
} */

// 向class组件添加局部的state
class Clock extends React.Component {
    // 第二步 添加class构造函数，为this.state赋初值
    constructor(props) { // 将props传递到父类的构造函数中
        super(props); // 使用super关键字调用一个父类的构造函数
        this.state = { date: new Date() };
    }
    render() {
        return (
            // 第一步 this.props 改为 this.state
            <div>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Clock date={new Date()}/>
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
