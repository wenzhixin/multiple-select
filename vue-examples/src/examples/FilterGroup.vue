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
          <optgroup label="Group A">
            <option value="1">
              000
            </option>
            <option value="2">
              111
            </option>
            <option value="3">
              222
            </option>
            <option value="4">
              333
            </option>
            <option value="5">
              444
            </option>
          </optgroup>
          <optgroup label="Group B">
            <option value="6">
              555
            </option>
            <option value="7">
              666
            </option>
            <option value="8">
              777
            </option>
            <option value="9">
              888
            </option>
            <option value="10">
              999
            </option>
          </optgroup>
          <optgroup label="Group C">
            <option value="20">
              012
            </option>
            <option value="21">
              123
            </option>
            <option value="22">
              234
            </option>
            <option value="23">
              345
            </option>
          </optgroup>
          <optgroup label="Group D">
            <option value="20">
              456
            </option>
            <option value="21">
              567
            </option>
            <option value="22">
              678
            </option>
            <option value="23">
              789
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
        filter: true,
        filterGroup: true
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
