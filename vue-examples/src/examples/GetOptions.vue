<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Methods
      </label>

      <div class="col-sm-10">
        <button
          class="btn btn-secondary"
          @click="getOptions"
        >
          getOptions
        </button>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          ref="select"
          multiple
        >
          <option value="text1">
            text1
          </option>
          <option value="text2">
            text2
          </option>
          <option value="text3">
            text3
          </option>
        </MultipleSelect>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: {
        filter: true
      }
    }
  },
  methods: {
    getOptions () {
      alert(JSON.stringify(this.$refs.select.getOptions(), null, 4))
      console.log(this.$refs.select.getOptions())
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
