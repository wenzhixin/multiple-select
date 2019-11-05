<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Option text
      </label>
      <div class="col-sm-10">
        <input
          v-model="input"
          class="form-control"
          type="text"
          required="required"
          placeholder="Enter text"
        >
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Option attribute
      </label>
      <div class="col-sm-10">
        <label class="checkbox">
          <input
            v-model="selected"
            type="checkbox"
          > Selected
        </label>
        <label class="checkbox ml-3">
          <input
            v-model="disabled"
            type="checkbox"
          > Disabled
        </label>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2" />
      <div class="col-sm-10">
        <button
          class="btn btn-secondary"
          @click="refreshAdd"
        >
          Add + Refresh
        </button>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Data Select
      </label>
      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :data="data"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Option Select
      </label>
      <div class="col-sm-10">
        <MultipleSelect
          ref="select"
          multiple
        >
          <option
            v-for="item of data"
            :key="item.value"
            :value="item.value"
            :selected="item.selected"
            :disabled="item.disabled"
          >
            {{ item.text }}
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
      input: '',
      selected: false,
      disabled: false,
      data: [
        {
          value: 'text1',
          text: 'text1'
        },
        {
          value: 'text2',
          text: 'text2'
        },
        {
          value: 'text3',
          text: 'text3'
        }
      ]
    }
  },
  methods: {
    refreshAdd () {
      this.data.push({
        value: this.input,
        text: this.input,
        selected: this.selected,
        disabled: this.disabled
      })

      this.input = ''
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
