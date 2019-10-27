<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Methods
      </label>

      <div class="col-sm-10">
        <button
          class="btn btn-secondary"
          @click="check"
        >
          Check
        </button>
        <button
          class="btn btn-secondary"
          @click="uncheck"
        >
          Uncheck
        </button>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Single Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          ref="single"
        >
          <option value="1">
            Value 1
          </option>
          <option value="2">
            Value 2
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
          ref="multiple"
          multiple
        >
          <option
            value="1"
            selected
          >
            Value 1
          </option>
          <option value="2">
            Value 2
          </option>
        </MultipleSelect>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Group Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          ref="group"
          multiple
        >
          <optgroup label="Group 1">
            <option
              value="1"
              selected
            >
              Value 1
            </option>
            <option value="2">
              Value 2
            </option>
          </optgroup>
          <optgroup label="Group 2">
            <option
              value="3"
              selected
            >
              Value 3
            </option>
            <option value="4">
              Value 4
            </option>
          </optgroup>
        </MultipleSelect>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    check () {
      this.$refs.single.check(2)
      this.$refs.multiple.check(2)
      this.$refs.group.check(2)
    },

    uncheck () {
      this.$refs.single.uncheck(2)
      this.$refs.multiple.uncheck(2)
      this.$refs.group.uncheck(2)
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
