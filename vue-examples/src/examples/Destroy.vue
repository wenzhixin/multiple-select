<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Methods
      </label>

      <div class="col-sm-10">
        <button
          class="btn btn-danger"
          @click="destroy"
        >
          Destroy
        </button>
        <button
          class="btn btn-primary"
          @click="build"
        >
          Build
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
          <option value="1">
            January
          </option>
          <option value="2">
            February
          </option>
          <option value="3">
            March
          </option>
          <option value="4">
            April
          </option>
          <option value="5">
            May
          </option>
          <option value="6">
            June
          </option>
          <option value="7">
            July
          </option>
          <option value="8">
            August
          </option>
          <option value="9">
            September
          </option>
          <option value="10">
            October
          </option>
          <option value="11">
            November
          </option>
          <option value="12">
            December
          </option>
        </MultipleSelect>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    destroy () {
      this.$refs.select.destroy()
    },

    build () {
      this.$refs.select._initSelect()
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
