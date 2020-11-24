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
/* class Clock extends React.Component {
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
} */

// 数据向下流动 02
// FormattedDate组件在其props中接收参数date
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>
}

// 将生命周期方法添加到class中
class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() }; // 构造函数是唯一可以给this.state赋值的地方
    }

    // 生命周期方法
    // 组件已经被渲染到DOM中后运行，比如在这里设置计时器
    componentDidMount() {
        this.timerID = setInterval(() => {
            this.tick();
        }, 1000);
    }

    // 清除计时器
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() { // 使用this.setState来时刻更新组件state
        this.setState({ date: new Date() });
    }

    render() {
        return (
            <div>
                {/* 数据向下流动 01 */}
                {/* Clock组件将它的state作为props向下传递到自组件FormattedDate */}
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

function ActionLink() {
    function handleClick(e) {
        e.preventDefault(); // 阻止默认行为
        console.log('The link was clicked.');
    }

    return (
        <a href="http://www.baidu.com" onClick={handleClick}>
            Click me
        </a>
    );
}

// 事件处理
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        // 这个绑定必不可少，为了在回调中使用this
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

function App() {
    return (
        <div>
            <Clock />
            <ActionLink />
            <Toggle />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
