<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Animate
      </label>

      <div class="col-sm-10">
        <div class="radio">
          <label>
            <input
              v-model="options.animate"
              type="radio"
              name="animate"
              value="undefined"
            >
            <code>undefined</code>
          </label>
        </div>
        <div class="radio">
          <label>
            <input
              v-model="options.animate"
              type="radio"
              name="animate"
              value="fade"
            >
            <code>'fade'</code>
          </label>
        </div>
        <div class="radio">
          <label>
            <input
              v-model="options.animate"
              type="radio"
              name="animate"
              value="slide"
            >
            <code>'slide'</code>
          </label>
        </div>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Select
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
        animate: undefined
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
