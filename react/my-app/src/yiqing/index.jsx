import React from 'react';
import jsonData from './list-total.json'
import './index.css'

// console.log(jsonData.data.areaTree)

// 国家名为 countryObj 的 key 值
let countryObj = {
    // '中国':{
    //     confirm:0, // 确诊病例
    //     heal:0, // 治愈病例
    //     dead:0 //死亡病例
    // },
    // '丹麦':{
    //     confirm:0,
    //     heal:0,
    //     dead:0
    // }
};

jsonData.data.areaTree.forEach((item) => {
    // 如果是 null 的，初始化为 0
    item.today.confirm = item.today.confirm ? item.today.confirm : 0;
    item.today.heal = item.today.heal ? item.today.heal : 0;
    item.today.dead = item.today.dead ? item.today.dead : 0;
    countryObj[item.name] = {
        confirm: item.today.confirm,
        heal: item.today.heal,
        dead: item.today.dead
    }
});

// 将数据转化为数组
let countryList = [];
for (const key in countryObj) {
    countryObj[key].country = key; // 每一个对象里多一个 country 字段，值为 国家名
    countryList.push(countryObj[key])
}

// 按照确诊病例从多到少排列
let countryListSort = countryList.sort((a, b) => {
    if (a.confirm < b.confirm) {
        return 1;
    } else {
        return -1;
    }
});

console.log(countryListSort)

console.log(countryList)

console.log(countryObj)

class Bingli extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>地区</th>
                        <th>确诊病例</th>
                        <th>治愈</th>
                        <th>死亡</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.list.map((item, idex) => {
                            return (
                                <tr key={item.country}>
                                    <td>{item.country}</td>
                                    <td>{item.confirm}</td>
                                    <td>{item.heal}</td>
                                    <td>{item.dead}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

function App(){
    return(
        <Bingli list={countryListSort} />
    )
}

// ReactDOM.render(
//     <Bingli list={countryListSort} />,
//     document.getElementById('root')
// );

export default App