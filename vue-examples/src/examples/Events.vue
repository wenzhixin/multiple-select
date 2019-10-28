<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Events
      </label>

      <div class="col-sm-10">
        <textarea
          ref="log"
          v-model="log"
          class="form-control"
          readonly
          rows="10"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Group Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :options="options"
          @on-open="onOpen"
          @on-close="onClose"
          @on-check-all="onCheckAll"
          @on-uncheck-all="onUncheckAll"
          @on-focus="onFocus"
          @on-blur="onBlur"
          @on-optgroup-click="onOptgroupClick"
          @on-click="onClick"
          @on-filter="onFilter"
          @on-after-create="onAfterCreate"
        >
          <optgroup label="Group 1">
            <option value="1">
              Option 1
            </option>
            <option value="2">
              Option 2
            </option>
            <option value="3">
              Option 3
            </option>
          </optgroup>
          <optgroup label="Group 2">
            <option value="4">
              Option 4
            </option>
            <option value="5">
              Option 5
            </option>
            <option value="6">
              Option 6
            </option>
          </optgroup>
          <optgroup label="Group 3">
            <option value="7">
              Option 7
            </option>
            <option value="8">
              Option 8
            </option>
            <option value="9">
              Option 9
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
        filter: true
      },
      log: ''
    }
  },
  watch: {
    log () {
      const log = this.$refs.log
      log.scrollTop = log.scrollHeight - log.style.height
    }
  },
  methods: {
    onOpen () {
      this.log += 'onOpen event fire!\n'
    },
    onClose () {
      this.log += 'onClose event fire!\n'
    },
    onCheckAll () {
      this.log += 'onCheckAll event fire!\n'
    },
    onUncheckAll () {
      this.log += 'onUncheckAll event fire!\n'
    },
    onFocus () {
      this.log += 'onFocus event fire!\n'
    },
    onBlur () {
      this.log += 'onBlur event fire!\n'
    },
    onOptgroupClick (view) {
      this.log += 'onOptgroupClick event fire! view: ' + JSON.stringify(view) + '\n'
    },
    onClick (view) {
      this.log += 'onClick event fire! view: ' + JSON.stringify(view) + '\n'
    },
    onFilter (text) {
      this.log += 'onFilter event fire! text: ' + text + '\n'
    },
    onAfterCreate () {
      this.log += 'onAfterCreate event fire!\n'
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
