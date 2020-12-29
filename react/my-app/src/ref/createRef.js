import React, { createRef, useRef } from 'react'

// 点击按钮获取焦点
/* const FocusInput = () => {
    // const inputElement = createRef()
    const inputElement = useRef()
    const handleClick = () => {
        inputElement.current.focus()
    }
    return(
        <>
            <input ref={inputElement} type='text'/>
            <button onClick={handleClick}>获取焦点</button>
        </>
    )
}

export default FocusInput */

// useRef 和 createRef 的区别
const Test = () => {
    const [renderIndex, setRenderIndex] = React.useState(1)
    const handleClick = () => {
        setRenderIndex(prev => prev + 1)
    }
    const useElement = useRef() // useRef 每次都会返回相同的引用
    const createElement =  createRef() // createRef 每次渲染都会返回一个新的引用

    if(!useElement.current) useElement.current = renderIndex  // useElement.current 一直存在，所以它的值不会变化
    if(!createElement.current) createElement.current = renderIndex
    return (
        <>
            <p>当前renderIndex值：{renderIndex}</p>
            <button onClick={handleClick}>改变renderIndex值</button>
            <p>useRef:{useElement.current}</p>
            <p>createRef:{createElement.current}</p>
        </>
    )
}

export default Test