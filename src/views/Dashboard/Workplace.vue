<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(true)

const created = () => {
  console.log('micro-app元素被创建')
}
const beforemount = () => {
  console.log('即将被渲染')
}
const mounted = () => {
  console.log('已经渲染完成')
}
const unmount = () => {
  console.log('已经卸载')
}
const error = () => {
  console.log('渲染出错')
}

const handleDataChange = (e: CustomEvent) => {
  console.log('来自子应用的全部数据: ', e)
  const {
    detail: { data }
  } = e
  console.log('详细数据: ', data)
}
</script>

<template>
  <div class="micro">
    <micro-app
      class="micro-content"
      name="my-app"
      @created="created"
      @beforemount="beforemount"
      @mounted="mounted"
      @unmount="unmount"
      @error="error"
      @datachange="handleDataChange"
      :data="{ name: '基座数据micro' }"
      url="http://localhost:8080/"
    />
  </div>
</template>
<style lang="less" scoped>
.micro {
  height: calc(100vh - 130px);
  background: rgb(16, 102, 222);
  &-content {
    height: 100%;
  }
}
</style>
