const n=`<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Methods
      </label>

      <div class="col-sm-10">
        <button
          class="btn btn-secondary"
          @click="open"
        >
          Open
        </button>
        <button
          class="btn btn-secondary"
          @click="close"
        >
          Close
        </button>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          ref="select"
          multiple
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
</template>

<script>
export default {
  methods: {
    open () {
      setTimeout(() => {
        this.$refs.select.open()
      }, 100)
    },

    close () {
      this.$refs.select.close()
    }
  }
}
<\/script>

<style scoped>
select {
  width: 100%;
}
</style>
`;export{n as default};
