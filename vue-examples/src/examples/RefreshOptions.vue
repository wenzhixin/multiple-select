<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Methods
      </label>

      <div class="col-sm-10">
        <button
          class="btn btn-secondary"
          @click="refreshOptions"
        >
          refreshOptions
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
          :options="options"
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
    refreshOptions () {
      this.$refs.select.refreshOptions({
        filter: false
      })
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
