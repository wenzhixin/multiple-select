<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Hide Select All
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :options="options"
        >
          <option value="1">
            First
          </option>
          <option value="2">
            Second
          </option>
          <option value="3">
            Third
          </option>
          <option value="4">
            Fourth
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
        selectAll: false
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
