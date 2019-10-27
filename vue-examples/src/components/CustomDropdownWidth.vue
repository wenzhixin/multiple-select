<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          width="500"
          multiple
          :options="options"
        >
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          <option value="4">
            4
          </option>
          <option value="5">
            5
          </option>
          <option value="6">
            6
          </option>
          <option value="7">
            7
          </option>
          <option value="8">
            8
          </option>
          <option value="9">
            9
          </option>
          <option value="10">
            10
          </option>
          <option value="11">
            11
          </option>
          <option value="12">
            12
          </option>
          <option value="13">
            13
          </option>
          <option value="14">
            14
          </option>
          <option value="15">
            15
          </option>
          <option value="16">
            16
          </option>
          <option value="17">
            17
          </option>
          <option value="18">
            18
          </option>
          <option value="19">
            19
          </option>
          <option value="20">
            20
          </option>
          <option value="21">
            21
          </option>
          <option value="22">
            22
          </option>
          <option value="23">
            23
          </option>
          <option value="24">
            24
          </option>
          <option value="25">
            25
          </option>
          <option value="26">
            26
          </option>
          <option value="27">
            27
          </option>
          <option value="28">
            28
          </option>
          <option value="29">
            29
          </option>
          <option value="30">
            30
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
        multiple: true,
        multipleWidth: 70,
        dropWidth: 580
      }
    }
  }
}
</script>
