<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-3 checkbox">
        <input
          v-model="caseSensitive"
          type="checkbox"
        > Case Sensitive
      </label>

      <div class="col-sm-9">
        <MultipleSelect
          multiple
          :options="options"
        >
          <option value="1">
            abc
          </option>
          <option value="2">
            bcd
          </option>
          <option value="3">
            cde
          </option>
          <option value="4">
            def
          </option>
          <option value="5">
            efg
          </option>
          <option value="6">
            fgh
          </option>
          <option value="7">
            ghi
          </option>
          <option value="8">
            hij
          </option>
          <option value="9">
            ijk
          </option>
          <option value="10">
            jkl
          </option>
          <option value="11">
            klm
          </option>
          <option value="12">
            lmn
          </option>
          <option value="13">
            mno
          </option>
          <option value="14">
            nop
          </option>
          <option value="15">
            opq
          </option>
          <option value="16">
            pqr
          </option>
          <option value="17">
            qrs
          </option>
          <option value="18">
            rst
          </option>
          <option value="19">
            stu
          </option>
          <option value="20">
            tuv
          </option>
          <option value="21">
            uvw
          </option>
          <option value="22">
            vwx
          </option>
          <option value="23">
            wxy
          </option>
          <option value="24">
            xyz
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
      caseSensitive: false,
      options: {
        filter: true,
        customFilter: (label, text, originalLabel, originalText) => {
          if (this.caseSensitive) {
            return originalLabel.indexOf(originalText) === 0
          }
          return label.indexOf(text) === 0
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
