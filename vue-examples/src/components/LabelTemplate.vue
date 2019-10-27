<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :options="options"
        >
          <optgroup label="Group 1">
            <option value="1">
              Option 1
            </option>
            <option value="2">
              Option 2
            </option>
            <option value="3">
              Option 3
            </option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="4">
              Option 4
            </option>
            <option value="5">
              Option 5
            </option>
            <option value="6">
              Option 6
            </option>
          </optgroup>
          <optgroup label="Group 3">
            <option value="7">
              Option 7
            </option>
            <option value="8">
              Option 8
            </option>
            <option value="9">
              Option 9
            </option>
          </optgroup>
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
        labelTemplate ($el) {
          return '<i class="fa fa-star"></i>' + $el.attr('label')
        }
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
