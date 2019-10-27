<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :data="data"
          :options="options"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const data = []
    for (let i = 0; i < 10000; i++) {
      data.push(i)
    }
    return {
      data,
      options: {
        filter: true
      }
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
