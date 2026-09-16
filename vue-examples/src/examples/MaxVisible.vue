<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          :options="options"
        >
          <option
            v-for="i in 1000"
            :key="i"
            :value="i"
          >
            Option {{ i }}
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
        maxVisible: 10
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
