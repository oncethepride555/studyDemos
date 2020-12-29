import React from 'react'

const News = (props) => {
    console.log(props)
    return (
        <div>
            <h1>新闻页的id为：{props.match.params.id}</h1>
        </div>
    )
}

export default News