<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        No container
      </label>

      <div class="col-sm-10">
        <div class="parent">
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

    <div class="form-group row">
      <label class="col-sm-2">
        With container
      </label>

      <div class="col-sm-10 container">
        <div class="parent">
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
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'The Container',
      desc: 'Use <code>container</code> option to solve the cut off problem for example parent node is <code>overflow: hidden</code>.',
      options: {
        container: '.container'
      }
    }
  }
}
</script>

<style scoped>
.parent {
  overflow: hidden;
}
select {
  width: 100%;
}
</style>
