<template>
  <div class="wrapper">
    <h1>这里是日期选择组件{{dateString}}</h1>
    <h1>这里是单选框{{singlePickerString}}</h1>
    <h3>This is my first custom component !</h3>
  </div>
</template>

<style scoped>
.wrapper {
  margin: 0 auto;
  text-align: center;
}
</style>

<script>
export default {
  data() {
  	return {
  		dateString: '2018/08/09',
  		singlePickerString: '2018'
  	}
  },
  mounted () {
    this.$on('pickerChange', (date) => {
    	// mip-picker-date 的参数是一个标准的日期对象
    	let year = date.getFullYear();
    	let month = date.getMonth() + 1;
    	let day = date.getDate();
    	this.dateString = year + '/' + month + '/' + day;
    });
    this.$on('singlePickerChange', (arr) => {
    	// mip-picker confirm返回的是个数组,这里根据你的配置来进行参数选择
    	this.singlePickerString = e;
    })
  }
}
</script>
