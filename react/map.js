const state = [
    {
        id:0,
        completed:false,
        text:'aaa'
    },{
        id:1,
        completed:false,
        text:'bbb'
    },{
        id:2,
        completed:true,
        text:'ccc'
    }
]

const res = state.map(todo => {
    // return { ...todo, completed: true } // 是将每一项的 completed 属性值都改为了 true
    return { ...todo, completed: !todo.completed } // 将每一项的 completed 属性值 取非
})

console.log(res)

const todos = state.filter( t => t.completed) // 返回 元素的 completed 属性值 为 true 的元素组成的新数组

// console.log(todos)