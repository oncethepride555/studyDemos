import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import PropTypes from 'prop-types';

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

function UserGreeting(props) {
    return (
        <h1>Welcom back!</h1>
    )
}

function GuestGreeting(props) {
    return (
        <h1>Please sign in.</h1>
    )
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />
    }
    return <GuestGreeting />

}

// 元素变量

// 注销和登录按钮
function LoginButton(props) {
    return (
        <button onClick={props.onClick}>Login</button>
    )
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>Logout</button>
    )
}

class LoginControl extends React.Component { // 有状态的组件 LoginControl，根据当前的状态来渲染 LoginButton 或者 LogoutButton 
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) { // 使用 button 变量来存储元素，有条件地渲染组件的一部分
            button = <LogoutButton onClick={this.handleLogoutClick} />
        } else {
            button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
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
function MailBox(props) {
    const unreadMessage = props.unreadMessage;
    return (
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

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }))
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

// 用 key 提取组件
function ListItem(props) {
    return (
        <li>{props.value}</li>
    )
}

// 基础列表组件
function NumberList(props) {
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
    return (
        <ul>
            {numbers.map((number) =>
                <ListItem key={number.toString()} value={number} />
            )}
        </ul>
    )
}

// 受控组件
class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value })
    }

    handleSubmit(event) {
        alert('提交的名字：' + this.state.value);
        event.preventDefault(); // 阻止默认行为
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type='text' value={this.state.value} onChange={this.handleChange} />
                    {/* 由于 handlechange 在每次按键时都会执行并更新 React 的 state，因此显示的值将随着用户输入而更新 */}
                </label>
                <input type='submit' value='提交' />
            </form>
        );
    }
}

// textarea标签
class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'aaaa' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('提交的文章：' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    文章：
                    <textarea value={this.state.value} onChange={this.handleChange} />
                    {/* 与 input 十分类似 */}
                </label>
            </form>
        )
    }
}

// select标签
class FruitForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'apple' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('你选择的是：' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的水果：
                {/* 根 select 中的 value 属性表示选中的元素 */}
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value='apple'>苹果</option>
                        <option value='orange'>橙子</option>
                        <option value='banana'>香蕉</option>
                    </select>
                </label>
                <input type='submit' value='提交' />
            </form>
        )
    }
}

// 处理多个输入
// 给 input 添加 name 属性，根据 event.target.name 执行不同的操作
class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = name === 'isGoing' ? target.checked : target.value;

        this.setState({
            [name]: value
        });
        // [name] 计算属性名称，中括号中是表达式，计算结果作为属性名
    }

    render() {
        return (
            <form>
                <label>
                    参与：
                    <input name='isGoing' type='checkbox' checked={this.state.isGoing} onChange={this.handleInputChange} />
                </label>
                <br />
                <label>
                    来宾人数：
                    <input name='numberOfGuests' type='number' value={this.state.numberOfGuests} onChange={this.handleInputChange} />
                </label>
            </form>
        )
    }
}

// 状态提升
// 将 TemperatureInput 组件中的 state 移动到 Calculator 组件中
function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>boiling</p>
    } else {
        return <p>not boiling</p>
    }
}

const scaleNames = {
    c: '摄氏度',
    f: '华氏度'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        // this.setState({temperature:event.target.value})
        this.props.onTemperatureChange(event.target.value);
    }

    render() {
        // 将 this.state 改为 this.props
        // this.props.temperature 需要从 Calculator 组件传入
        // props 是只读的，temperature 是由父组件传入的 prop，因此 TemperatureInput 组件不能修改它，解决这个问题要用到 受控组件
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>输入{scaleNames[scale]}温度：</legend>
                <input value={temperature} onChange={this.handleChange} />
                <BoilingVerdict celsius={temperature} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { scale: 'c', temperature: '' };
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }

    handleCelsiusChange(temperature) {
        this.setState({ scale: 'c', temperature });
    }

    handleFahrenheitChange(temperature) {
        this.setState({ scale: 'f', temperature });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
        return (
            <div>
                <TemperatureInput scale='c' temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
                <TemperatureInput scale='f' temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
            </div>
        )
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature); // 将输入的温度转换为浮点数
    if (Number.isNaN(input)) { // 输入的温度为NaN，无效，返回空字符串
        return '';
    }
    const output = convert(input); // 输入的温度有效，进行转换
    const rounded = Math.round(output * 1000) / 1000; // 将转换后的温度四舍五入保留三位小数
    return rounded.toString(); // 转换为字符串返回
}

// 组合
// 包含关系  特例关系
function Border(props) {
    return (
        <div className={'border-' + props.color}>
            {props.children}
            {props.left}
        </div>
    )
}

function Left() {
    return (
        <div>left</div>
    )
}

function Dialog(props) {
    return (
        <div>
            <Border color='red' left={<Left />}>
                <h1>welcom</h1>
                <p>welcom red</p>
                {props.title}
            </Border>
            <Border color='blue'>
                <h1>welcom</h1>
                <p>welcom blue</p>
            </Border>
        </div>
    )
}

// WelcomDialog 是 Dialog 的一个特殊实例
function WelcomDialog() {
    return (
        <Dialog title='我是特殊实例' />
    )
}

// 无障碍
// tabIndex 属性
function SimpleControl() {
    return (
        // 没有tabIndex 属性的话, 这些 <span> 元素不会被键盘focus中
        <div>
            <div>
                <span role="checkbox" aria-checked="true" tabIndex="0">
                    <img src="checked.gif" role="presentation" alt="" />
                    Include decorative fruit basket
                </span>
            </div>
            <div>
                <span role="checkbox" aria-checked="true" tabIndex="0">
                    <img src="checked.gif" role="presentation" alt="" />
                    Include singing telegram
                </span>
            </div>
            <div>
                <span role="checkbox" aria-checked="false" tabIndex="0">
                    <img src="unchecked.gif" role="presentation" alt="" />
                    Require payment before delivery
                </span>
            </div>
        </div>
    )
}

function GroupingControls() {
    return (
        <div>
            <ul id="mb1" tabIndex="0">
                <li id="mb1_menu1"> Font
                    <ul id="fontMenu" title="Font" tabIndex="-1">
                        <li id="sans-serif" tabIndex="-1">Sans-serif</li>
                        <li id="serif" tabIndex="-1">Serif</li>
                        <li id="monospace" tabIndex="-1">Monospace</li>
                        <li id="fantasy" tabIndex="-1">Fantasy</li>
                    </ul>
                </li>
                <li id="mb1_menu2" tabIndex="-1"> Style
                    <ul id="styleMenu" title="Style" tabIndex="-1">
                        <li id="italic" tabIndex="-1">Italics</li>
                        <li id="bold" tabIndex="-1">Bold</li>
                        <li id="underline" tabIndex="-1">Underlined</li>
                    </ul>
                </li>
                <li id="mb1_menu3" tabIndex="-1"> Justification
                    <ul id="justificationMenu" title="Justication" tabIndex="-1">
                        <li id="left" tabIndex="-1">Left</li>
                        <li id="center" tabIndex="-1">Centered</li>
                        <li id="right" tabIndex="-1">Right</li>
                        <li id="justify" tabIndex="-1">Justify</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

// refs 访问 DOM 节点
class CustomTextInput extends React.Component {
    constructor(props) {
        super(props);
        // 创建一个 ref 来存储 textInput 的 DOM 元素
        this.textInput = React.createRef();
        this.focusTextInput = this.focusTextInput.bind(this);
    }

    focusTextInput() {
        // 直接使用原生 API 使 text 输入框获得焦点
        // 注意：我们通过 "current" 来访问 DOM 节点
        this.textInput.current.focus();
    }

    render() {
        // 告诉 React 我们想把 <input> ref 关联到
        // 构造器里创建的 `textInput` 上
        return (
            <div>
                <input
                    type="text"
                    ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={this.focusTextInput}
                />
            </div>
        );
    }
}

class AutoFocusTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    // 生命周期钩子 挂载后
    componentDidMount() {
        // 挂载后立即被点击
        this.textInput.current.focusTextInput();
    }

    render() {
        return (
            <CustomTextInput ref={this.textInput} />
        );
    }
}

class MyTitle extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.name}</h2>
                <h3>{this.props.type}</h3>
            </div>
        )
    }
}

// propTypes 进行类型检查
MyTitle.propTypes = {
    // 声明 title 属性是必须的，并且数据类型要为字符串，相当于是规范化的接口文档
    title: PropTypes.string.isRequired
}

// 设置 prop 默认值
MyTitle.defaultProps = {
    name: 'wss'
}

var data = '123';

const messages = ['react', 're:react', 're:re:react'];

const numbers = [1, 2, 3, 4, 5, 6, 7];

function App() {
    return (
        <div>
            <Clock />
            <ActionLink />
            <Toggle />
            <LoginControl />
            <MailBox unreadMessage={messages} />
            <Page />
            <NumberList numbers={numbers} />
            <NameForm />
            <EssayForm />
            <FruitForm />
            <Reservation />
            <Calculator />
            <Dialog />
            <WelcomDialog />
            <SimpleControl />
            <GroupingControls />
            {/* <CustomTextInput /> */}
            <AutoFocusTextInput />
            <MyTitle title={data} type={true}/>
        </div>
    )
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

export default App