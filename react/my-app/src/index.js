import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

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

// 条件渲染

function UserGreeting(props){
    return(
        <h1>Welcom back!</h1>
    )
}

function GuestGreeting(props){
    return(
        <h1>Please sign in.</h1>
    )
}

function Greeting(props){
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />
    }
    return <GuestGreeting />

}

// 元素变量

// 注销和登录按钮
function LoginButton(props){
    return(
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props){
    return(
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginControl extends React.Component{ // 有状态的组件 LoginControl，根据当前的状态来渲染 LoginButton 或者 LogoutButton 
    constructor(props){
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick(){
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick(){
        this.setState({isLoggedIn: false});
    }

    render(){
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn){ // 使用 button 变量来存储元素，有条件地渲染组件的一部分
            button = <LogoutButton onClick={this.handleLogoutClick}/> 
        }else{
            button = <LoginButton onClick={this.handleLoginClick}/>
        }
        return(
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
                {/* 三目运算符 进行元素的条件渲染 */}
                <h3>the user is <b>{isLoggedIn ? 'currently' : 'not'}</b> logged in.</h3>
            </div>
        )
    }
}

// 与运算符 &&  进行元素的条件渲染
// 原理：true && expression 总是返回 expression； false && expression 总是返回 false
function MailBox(props){
    const unreadMessage = props.unreadMessage;
    return(
        <div>
            <h1>MailBox</h1>
            {unreadMessage.length > 0 && 
            <h2>
                You have {unreadMessage.length} unread messages.
            </h2>
            }
        </div>
    )
}

// 阻止组件的渲染
// <WarningBanner /> 会根据 prop 中 warn 的值来进行条件渲染。如果 warn 的值是 false，那么组件则不会渲染:

function WarningBanner(props){
    if(!props.warn){
        return null;
    }
    return(
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }

    render(){
        return(
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

// 用 key 提取组件
function ListItem(props){
    return(
        <li>{props.value}</li>
    )
}

// 基础列表组件
function NumberList(props){
    const numbers = props.numbers;
    /* const listItem = numbers.map((number) => 
        // 为每个列表元素分配一个 key 属性，可以解决出现到警告
        // <li key={number.toString()}>
        //     {number}
        // </li>
        // 这里的li可以提取为一个组件，但是key保留在这里
        <ListItem key={number.toString()} value={number}/>
    )
    return(
        <ul>{listItem}</ul>
    ) */

    // 在JSX中嵌入map()
    return(
        <ul>
            {numbers.map((number)=>
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>
    )
}

// 受控组件
class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert('提交的名字：' + this.state.value);
        event.preventDefault(); // 阻止默认行为
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type='text' value={this.state.value} onChange={this.handleChange}/>
                    {/* 由于 handlechange 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新 */}
                </label>
                <input type='submit' value='提交'/>
            </form>
        );
    }
}

const messages = ['react','re:react','re:re:react'];

const numbers = [1,2,3,4,5,6,7];

function App() {
    return (
        <div>
            <Clock />
            <ActionLink />
            <Toggle />
            <LoginControl />
            <MailBox unreadMessage={messages}/>
            <Page />
            <NumberList numbers={numbers}/>
            <NameForm />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
