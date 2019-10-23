<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Disabled Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          disabled
        >
          <option
            value="1"
            selected
          >
            January
          </option>
          <option value="2">
            February
          </option>
          <option
            value="3"
            selected
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
  </div>
</template>

<style scoped>
select {
  width: 100%;
}
</style>
