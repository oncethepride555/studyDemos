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

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = { temperature: '' };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState(
            {temperature: e.target.value}
        )
    }

    render() {
        const temperature = this.state.temperature;
        return (
            <fieldset>
                <legend>输入摄氏度温度：</legend>
                <input value={temperature} type='text' onChange={this.handleChange} />
                <BoilingCheck temperature={parseFloat(temperature)} />
            </fieldset>
        )
    }
}

export default Calculator