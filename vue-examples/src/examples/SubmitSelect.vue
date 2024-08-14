<template>
  <div>
    <form
      ref="form"
      @submit.prevent="submit"
    >
      <div class="form-group row">
        <label class="col-sm-2">
          Single Select
        </label>

        <div class="col-sm-10">
          <MultipleSelect
            name="select1"
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

      <div class="form-group row">
        <label class="col-sm-2">
          Multiple Select
        </label>

        <div class="col-sm-10">
          <MultipleSelect
            name="select2"
            multiple
            required
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

      <div class="form-group row">
        <div class="col-sm-10 offset-sm-2">
          <button
            type="submit"
            class="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    submit () {
      const ret = {}
      this.$refs.form.querySelectorAll('[name]').forEach(item => {
        ret[item.name] = item.value
      })
      alert(JSON.stringify(ret, null, '    '))
      return false
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
