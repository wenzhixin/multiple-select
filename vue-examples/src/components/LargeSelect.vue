<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
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
    for (let i = 0; i < 2000; i++) {
      data.push(i)
    }
    return {
      title: 'Large Select',
      desc: 'Large select with filter.',
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
