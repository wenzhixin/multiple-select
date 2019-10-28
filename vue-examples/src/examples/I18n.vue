<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :options="options"
        >
          <option value="1">
            一月
          </option>
          <option value="2">
            二月
          </option>
          <option value="3">
            三月
          </option>
          <option value="4">
            四月
          </option>
          <option value="5">
            五月
          </option>
          <option value="6">
            六月
          </option>
          <option value="7">
            七月
          </option>
          <option value="8">
            八月
          </option>
          <option value="9">
            九月
          </option>
          <option value="10">
            十月
          </option>
          <option value="11">
            十一月
          </option>
          <option value="12">
            十二月
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
        filter: true,
        formatSelectAll () {
          return '[全选]'
        },
        formatAllSelected () {
          return '已选择所有记录'
        },
        formatCountSelected (count, total) {
          return '已从 ' + total + ' 中选择 ' + count + ' 条记录'
        },
        formatNoMatchesFound () {
          return '没有找到记录'
        }
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
