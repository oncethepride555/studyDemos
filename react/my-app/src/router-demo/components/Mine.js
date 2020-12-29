import React from 'react'
// import { withRouter } from 'react-router-dom'

const Mine = (props) => {
    console.log(props);
    const onClick = () => {
        // 跳转：push
        props.history.push('/'); // 因为在 App 中写了路由匹配规则 <Route path='/' exact component={Home}></Route>，所以会跳转到首页
        // 替换：replace
        // this.props.history.replace('/', { msg: '这是从子组件传递过来的数据' })
        // 前进（两种）go/goForward
        // this.props.history.go(1);
        // this.props.history.goForward();
        // 后退（两种）go/goBack
        // this.props.history.go(-1);
        // this.props.history.goBack();
    }
    return (
        <div>
            <h1>我的</h1>
            <button onClick={onClick}>点我返回首页</button>
        </div>
    )

}

export default Mine // 将 Mine 组件用 Route 包裹，react-router 的三个对象 history、location、match 就会被放进这个组件的 props 属性中，就可以通过 props.history.push() 进行页面的跳转