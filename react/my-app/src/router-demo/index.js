import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Mine from './components/Mine'
import News from './components/News'

const App = () => {
    const mineObj = {
        pathname: '/mine', // 跳转的路径 props.location.pathname
        search: '?username=me', // get请求参数 props.location.search
        hash: '#123', // 设置HASH值 props.location.hash
        state: { msg: 'hello' } // 传入组件的数据 props.location.state
    }
    return (
        <>
            <Router>
                {/* to 的值可以是 字符串，也可以是 对象 */}
                <Link to='/'>首页</Link>
                <Link to={mineObj}>我的</Link>
                <Link to='/news/123'>新闻页</Link>
                {/* exact 路径完全匹配时才展示对应组件 */}
                <Route path='/' exact component={Home}></Route>
                <Route path='/mine' component={Mine}></Route>
                {/* 动态路由 */}
                <Route path='/news/:id' component={News}></Route>
            </Router>
        </>
    )
}

export default App