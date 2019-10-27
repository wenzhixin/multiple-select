<template>
  <div class="hello">
    <MultipleSelect
      ref="select"
      v-model="months"
      multiple
      name="months"
      width="200"
      :options="options"
      @change="onChange"
      @onOpen="onOpen"
      @onClick="onClick"
    >
      <option value="1">January</option>
      <option value="2">February</option>
      <option value="3">March</option>
      <option value="4">April</option>
      <option value="5">May</option>
      <option value="6">June</option>
      <option value="7">July</option>
      <option value="8">August</option>
      <option value="9">September</option>
      <option value="10">October</option>
      <option value="11">November</option>
      <option value="12">December</option>
    </MultipleSelect>
  </div>
</template>

<script>
export default {
  data () {
    return {
      months: [],
      options: {
        filter: true
      }
    }
  },
  methods: {
    onChange () {
      console.log(this.months)
    },
    onOpen () {
      console.log(this.$refs.select.getOptions())
    },
    onClick (view) {
      console.log(view)
    }
  }
}
</script>
