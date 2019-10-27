<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Single Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
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
          <option value="25">
            123
          </option>
          <option value="26">
            234
          </option>
          <option value="27">
            345
          </option>
          <option value="28">
            456
          </option>
          <option value="29">
            567
          </option>
          <option value="30">
            678
          </option>
          <option value="31">
            789
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
          <option value="25">
            123
          </option>
          <option value="26">
            234
          </option>
          <option value="27">
            345
          </option>
          <option value="28">
            456
          </option>
          <option value="29">
            567
          </option>
          <option value="30">
            678
          </option>
          <option value="31">
            789
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
        filterAcceptOnEnter: true
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
