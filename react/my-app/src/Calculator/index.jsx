// 状态提升：
// 多个组件反应相同变化数据，将共享状态提升到最近公共父组件

// 需求：创建一个温度计算器，判断水在该温度下是否会沸腾
// 会有两种温度（摄氏度、华氏度）的输入框，在其中一个输入，另一个也相应呈现，并显示是否沸腾
import React from 'react'

// 判断水是否沸腾
function BoilingCheck(props) {
    if (props.temperature >= 100) {
        return (
            <p>水沸腾了</p>
        )
    } else {
        return (
            <p>水不会沸腾</p>
        )
    }
}

const typeItems = {
    'she': '摄氏度',
    'hua': '华氏度'
}

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onTemperatureChange(e.target.value)
    }

    render() {
        // temperature 由 Calculator 组件通过 props 传入，props 是只读的，不可以修改
        const temperature = this.props.temperature;
        // 由父组件传过来的是摄氏度还是华氏度
        const type = this.props.type;
        return (
            <fieldset>
                <legend>输入{typeItems[type]}温度：</legend>
                <input value={temperature} type='text' onChange={this.handleChange} />
                <BoilingCheck temperature={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '', type: '' }; // 摄氏度组件和华氏度组件均用到【温度】，将其【状态提升】到父组件 Calculator 中
        this.handleSheChange = this.handleSheChange.bind(this);
        this.handleHuaChange = this.handleHuaChange.bind(this);
    }

    handleSheChange(temperature) {
        this.setState({ temperature , type: 'she'});
    }

    handleHuaChange(temperature) {
        this.setState({ temperature ,type: 'hua'});
    }

    render() {
        const temperature = this.state.temperature;
        // 根据温度类型显示对应的温度值
        const type = this.state.type;
        const she = type === 'she' ? temperature : toTrans(temperature, toShe); // type 为 she 时，she = temperature
        const hua = type === 'hua' ? temperature : toTrans(temperature, toHua); // type 为 she 时，hua = toTrans(temperature, toHua)
        return (
            <>
                <TemperatureInput type='she' temperature={she} onTemperatureChange={this.handleSheChange} />
                <TemperatureInput type='hua' temperature={hua} onTemperatureChange={this.handleHuaChange} />
            </>
        )
    }
}

// 摄氏度和华氏度转换
function toShe(hua) {
    return (hua - 32) * 5 / 9;
}

function toHua(she) {
    return (she * 9 / 5) + 32;
}

function toTrans(tem, trans) {
    const input = parseFloat(tem);
    if (Number.isNaN(input)) {
        return ''
    }
    const res = trans(input);
    return (Math.round(res * 1000) / 1000).toString();
}

export default Calculator