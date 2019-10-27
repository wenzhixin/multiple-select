<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Max Rows
      </label>

      <div class="col-sm-10">
        <input
          v-model.number="options.maxHeight"
          type="number"
          min="1"
          max="10"
        >
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Single Select
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

    <div class="form-group row">
      <label class="col-sm-2">
        Multiple Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
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
  data () {
    return {
      options: {
        maxHeight: 5,
        maxHeightUnit: 'row'
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
