<template>
  <div class="codefund">
    <div
      id="codefund"
      ref="codefund"
    />
  </div>
</template>

<script>
export default {
  data () {
    return {
      propertyId: 292,
      template: 'default',
      theme: 'light'
    }
  },
  mounted () {
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute(
      'src',
      `https://codefund.io/properties/${this.propertyId}/funder.js?template=${
        this.template
      }&theme=${this.theme}`
    )
    script.setAttribute('async', 'async')
    this.$refs.codefund.appendChild(script)
  }
}
</script>

<style scoped>
#codefund {
  margin: 0 0 20px 0!important;
  display: flex;
  justify-content: flex-end;
}

#codefund /deep/ .cf-wrapper {
  font-size: 13px!important;
}

#codefund /deep/ .cf-powered-by {
  margin-top: 0!important;
}
</style>
