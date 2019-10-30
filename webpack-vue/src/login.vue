<template>
    <div>
        <h1>这是登录模块 --- {{ msg }}</h1>
    </div>
</template>

<script>
export default { // 导出一个对象
    data(){ // 组件中的 data 必须是个 function
        return {
            msg: '123'
        }
    },
    methods: {
        show(){
            console.log('调用了 login.vue 中的 show 方法')
        }
    }
}
</script>

<style lang="">
    
</style>