<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Single Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect>
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
          <option data-divider="true" />
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
          <option data-divider="true" />
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
        <MultipleSelect multiple="multiple">
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
          <option data-divider="true" />
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
          <option data-divider="true" />
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
        <MultipleSelect multiple="multiple">
          <option data-divider="true" />
          <optgroup label="Group 1">
            <option value="1">
              January
            </option>
            <option value="2">
              February
            </option>
            <option value="3">
              March
            </option>
            <option data-divider="true" />
            <option value="4">
              April
            </option>
            <option value="5">
              May
            </option>
            <option value="6">
              June
            </option>
          </optgroup>
          <option data-divider="true" />
          <optgroup label="Group 2">
            <option value="7">
              July
            </option>
            <option value="8">
              August
            </option>
            <option value="9">
              September
            </option>
            <option data-divider="true" />
            <option value="10">
              October
            </option>
            <option value="11">
              November
            </option>
            <option value="12">
              December
            </option>
          </optgroup>
        </MultipleSelect>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Data Select 1
      </label>

      <div class="col-sm-10">
        <MultipleSelect :data="data" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Data Select 2
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple="multiple"
          :data="data"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [
        {
          value: 1,
          text: 'Option 1'
        },
        {
          value: 2,
          text: 'Option 2'
        },
        {
          value: 3,
          text: 'Option 3'
        },
        {
          divider: true
        },
        {
          value: 4,
          text: 'Option 4'
        },
        {
          value: 5,
          text: 'Option 5'
        },
        {
          value: 6,
          text: 'Option 6'
        }
      ]
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
