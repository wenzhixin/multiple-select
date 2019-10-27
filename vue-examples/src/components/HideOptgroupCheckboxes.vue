<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Group Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :options="options"
        >
          <optgroup label="Group 1">
            <option value="1">
              1
            </option>
            <option value="2">
              2
            </option>
            <option value="3">
              3
            </option>
            <option value="4">
              4
            </option>
            <option value="5">
              5
            </option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="6">
              6
            </option>
            <option value="7">
              7
            </option>
            <option value="8">
              8
            </option>
            <option value="9">
              9
            </option>
            <option value="10">
              10
            </option>
          </optgroup>
          <optgroup label="Group 3">
            <option value="11">
              11
            </option>
            <option value="12">
              12
            </option>
            <option value="13">
              13
            </option>
            <option value="14">
              14
            </option>
            <option value="15">
              15
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
        multiple: true,
        hideOptgroupCheckboxes: true,
        multipleWidth: 60
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
