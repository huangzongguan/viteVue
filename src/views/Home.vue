<template>
  <div>首页</div>
</template>

<script lang="ts">
import {$axios} from '/@/http'
export default {
  setup(){
    console.log($axios);
    const res = $axios({
    })
  }
}
</script>

<style>

</style>