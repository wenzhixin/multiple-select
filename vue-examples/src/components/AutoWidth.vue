<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-3">
        Auto width
      </label>

      <div class="col-sm-9">
        <MultipleSelect>
          <option value="1">
            First
          </option>
          <option value="2">
            Second
          </option>
          <option value="3">
            Third
          </option>
          <option value="4">
            Fourth
          </option>
        </MultipleSelect>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">
        Data width
      </label>

      <div class="col-sm-9">
        <MultipleSelect
          :data="data"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">
        Large width
      </label>

      <div class="col-sm-9">
        <MultipleSelect>
          <option value="1">
            This is the first option and value is 1
          </option>
          <option value="2">
            This is the second option and value is 2
          </option>
          <option value="3">
            This is the third option and value is 3
          </option>
          <option value="4">
            This is the fourth option and value is 4
          </option>
        </MultipleSelect>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">
        Dropdown width
      </label>

      <div class="col-sm-9">
        <MultipleSelect
          width="200"
        >
          <option value="1">
            This is the first option and value is 1
          </option>
          <option value="2">
            This is the second option and value is 2
          </option>
          <option value="3">
            This is the third option and value is 3
          </option>
          <option value="4">
            This is the fourth option and value is 4
          </option>
        </MultipleSelect>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-3">
        Group Select
      </label>

      <div class="col-sm-9">
        <MultipleSelect multiple>
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

    <div class="form-group row">
      <label class="col-sm-3">
        Large Group
      </label>

      <div class="col-sm-9">
        <MultipleSelect multiple>
          <optgroup label="This is group 1">
            <option value="1">
              This is option 1
            </option>
            <option value="2">
              This is option 2
            </option>
            <option value="3">
              This is option 3
            </option>
          </optgroup>
          <optgroup label="This is group 2">
            <option value="4">
              This is option 4
            </option>
            <option value="5">
              This is option 5
            </option>
            <option value="6">
              This is option 6
            </option>
          </optgroup>
          <optgroup label="This is group 3">
            <option value="7">
              This is option 7
            </option>
            <option value="8">
              This is option 8
            </option>
            <option value="9">
              This is option 9
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
      data: [
        {
          value: 1,
          text: 'Options 1',
          selected: true
        },
        {
          value: 2,
          text: 'Options 2'
        },
        {
          value: 3,
          text: 'Options 3'
        }
      ]
    }
  }
}
</script>
