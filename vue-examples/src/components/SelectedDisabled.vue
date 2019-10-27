<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect multiple>
          <option
            value="1"
            selected="selected"
          >
            January
          </option>
          <option
            value="2"
            disabled="disabled"
          >
            February
          </option>
          <option
            value="3"
            selected="selected"
            disabled="disabled"
          >
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
        Group Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect multiple>
          <optgroup
            label="Group 1"
            disabled="disabled"
          >
            <option
              value="1"
              selected
            >
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
            <option
              value="5"
              selected
            >
              Option 5
            </option>
            <option value="6">
              Option 6
            </option>
          </optgroup>
          <optgroup label="Group 3">
            <option
              value="7"
              disabled="disabled"
            >
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

<style scoped>
select {
  width: 100%;
}
</style>
