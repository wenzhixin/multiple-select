<template>
  <div ref="gg">
    <div id="gg" />
  </div>
</template>

<script>
export default {
  mounted () {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', 'https://gg.wenzhixin.net.cn/wenzhixin/gg.js')
    script.setAttribute('async', 'async')
    this.$refs.gg.appendChild(script)
  }
}
</script>

<style>
#carbonads {
  display: flex;
  justify-content: flex-end;
  position: static;
  display: block;
  max-width: 400px;
  padding: 15px 15px 15px 160px;
  margin: 0;
  overflow: hidden;
  font-size: 13px;
  line-height: 1.4;
  text-align: left;
  background-color: rgba(0, 0, 0, .05);
}

#carbonads a {
  color: #333;
  text-decoration: none;
}

.carbon-img {
  float: left;
  margin-left: -145px;
}

.carbon-poweredby {
  display: block;
  color: #777 !important;
}

#codefund {
  margin: 0 0 20px 0!important;
  display: flex;
  justify-content: flex-end;
}

#codefund .cf-wrapper {
  font-size: 13px!important;
}

#codefund .cf-powered-by {
  margin-top: 0!important;
}
</style>
