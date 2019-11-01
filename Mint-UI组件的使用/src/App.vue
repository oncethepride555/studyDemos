<template>
  <div>
    <mt-button type="primary" @click="show">default</mt-button>
    <mt-button size="small">small</mt-button>
    <mt-button disabled>disabled</mt-button>
    <mt-button plain>plain</mt-button>
    <mt-button icon="back">back</mt-button>
    <mt-button icon="more">更多</mt-button>
    <!-- mui 代码片段 -->
    <button type="button" class="mui-btn mui-btn-royal">紫色</button>

    <h1>这是App组件</h1>
    <router-link to="/account">account</router-link>
    <router-link to="/goodlist">goodlist</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      toastInstance: null
    };
  },
  methods: {
    getList() {
      // 模拟获取列表的方法
      this.show();
      setTimeout(() => {
        this.toastInstance.close();
      }, 3000); // 这里的时间就是假设的在向后端请求数据的时候
    },
    show() {
      this.toastInstance = Toast({
        message: "正在加载",
        position: "top",
        duration: -1,
        iconClass: "glyphicon glyphicon-heart",
        className: "myToast"
      });
    }
  },
  created() {
    // data 和 methods 初始化好后调用
    this.getList();
  }
};
</script>

<style>
</style>