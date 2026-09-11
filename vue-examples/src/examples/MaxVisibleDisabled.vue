<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          :options="options"
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
          <option value="5" disabled>
            May
          </option>
          <option value="6">
            June
          </option>
          <option value="7" disabled>
            July
          </option>
          <option value="8" disabled>
            August
          </option>
          <option value="9" disabled>
            September
          </option>
          <option value="10" disabled>
            October
          </option>
          <option value="11" disabled>
            November
          </option>
          <option value="12" disabled>
            December
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
        maxVisibleDisabled: 2
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
