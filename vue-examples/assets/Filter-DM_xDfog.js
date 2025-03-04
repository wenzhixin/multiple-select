const n=`<template>
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
        Single Group
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          :options="options"
        >
          <optgroup label="Group 10">
            <option value="1">
              000
            </option>
            <option value="2">
              111
            </option>
            <option value="3">
              222
            </option>
          </optgroup>
          <optgroup label="Group 11">
            <option value="4">
              333
            </option>
            <option value="5">
              444
            </option>
            <option value="6">
              555
            </option>
          </optgroup>
          <optgroup label="Group 12">
            <option value="7">
              666
            </option>
            <option value="8">
              777
            </option>
            <option value="9">
              888
            </option>
            <option value="10">
              999
            </option>
          </optgroup>
          <optgroup label="Group 20">
            <option value="11">
              210
            </option>
            <option value="12">
              321
            </option>
            <option value="13">
              432
            </option>
          </optgroup>
          <optgroup label="Group 21">
            <option value="14">
              543
            </option>
            <option value="15">
              654
            </option>
            <option value="16">
              765
            </option>
          </optgroup>
          <optgroup label="Group 22">
            <option value="17">
              876
            </option>
            <option value="18">
              987
            </option>
            <option value="19">
              098
            </option>
          </optgroup>
          <optgroup label="Group 30">
            <option value="20">
              012
            </option>
            <option value="21">
              123
            </option>
            <option value="22">
              234
            </option>
          </optgroup>
          <optgroup label="Group 31">
            <option value="23">
              345
            </option>
            <option value="24">
              456
            </option>
            <option value="25">
              567
            </option>
          </optgroup>
          <optgroup label="Group 32">
            <option value="26">
              678
            </option>
            <option value="27">
              789
            </option>
            <option value="28">
              890
            </option>
          </optgroup>
        </MultipleSelect>
      </div>
    </div>

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
        Group Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :options="options"
        >
          <optgroup label="Group 10">
            <option value="1">
              000
            </option>
            <option value="2">
              111
            </option>
            <option value="3">
              222
            </option>
          </optgroup>
          <optgroup label="Group 11">
            <option value="4">
              333
            </option>
            <option value="5">
              444
            </option>
            <option value="6">
              555
            </option>
          </optgroup>
          <optgroup label="Group 12">
            <option value="7">
              666
            </option>
            <option value="8">
              777
            </option>
            <option value="9">
              888
            </option>
            <option value="10">
              999
            </option>
          </optgroup>
          <optgroup label="Group 20">
            <option value="11">
              210
            </option>
            <option value="12">
              321
            </option>
            <option value="13">
              432
            </option>
          </optgroup>
          <optgroup label="Group 21">
            <option value="14">
              543
            </option>
            <option value="15">
              654
            </option>
            <option value="16">
              765
            </option>
          </optgroup>
          <optgroup label="Group 22">
            <option value="17">
              876
            </option>
            <option value="18">
              987
            </option>
            <option value="19">
              098
            </option>
          </optgroup>
          <optgroup label="Group 30">
            <option value="20">
              012
            </option>
            <option value="21">
              123
            </option>
            <option value="22">
              234
            </option>
          </optgroup>
          <optgroup label="Group 31">
            <option value="23">
              345
            </option>
            <option value="24">
              456
            </option>
            <option value="25">
              567
            </option>
          </optgroup>
          <optgroup label="Group 32">
            <option value="26">
              678
            </option>
            <option value="27">
              789
            </option>
            <option value="28">
              890
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
      }
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
