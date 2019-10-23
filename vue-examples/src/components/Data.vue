<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Array
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :data="basicData"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Basic Object
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :data="objectData"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        String Array
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :data="stringData"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Number Array
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :data="numberData"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Group Array
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          multiple
          :data="groupData"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      basicData: [
        {
          text: 'January',
          value: 1
        },
        {
          text: 'February',
          value: 2
        },
        {
          text: 'March',
          value: 3
        },
        {
          text: 'April',
          value: 4
        },
        {
          text: 'May',
          value: 5
        },
        {
          text: 'June',
          value: 6
        },
        {
          text: 'July',
          value: 7
        },
        {
          text: 'August',
          value: 8
        },
        {
          text: 'September',
          value: 9
        },
        {
          text: 'October',
          value: 10
        },
        {
          text: 'November',
          value: 11
        },
        {
          text: 'December',
          value: 12
        }
      ],
      objectData: {
        1: 'January',
        2: 'February',
        3: 'March',
        4: 'April',
        5: 'May',
        6: 'June',
        7: 'July',
        8: 'August',
        9: 'September',
        10: 'October',
        11: 'November',
        12: 'December'
      },
      stringData: [
        'January', 'February', 'March'
      ],
      numberData: [
        1, 2, 3
      ],
      groupData: [
        {
          type: 'optgroup',
          label: 'Group 1',
          children: [
            {
              text: 'January',
              value: 1,
              selected: true
            },
            {
              text: 'February',
              value: 2,
              disabled: true
            },
            {
              text: 'March',
              value: 3
            },
            {
              text: 'April',
              value: 4
            },
            {
              text: 'May',
              value: 5
            },
            {
              text: 'June',
              value: 6
            }
          ]
        },
        {
          type: 'optgroup',
          label: 'Group 2',
          children: [
            {
              text: 'July',
              value: 7
            },
            {
              text: 'August',
              value: 8
            },
            {
              text: 'September',
              value: 9
            },
            {
              text: 'October',
              value: 10
            },
            {
              text: 'November',
              value: 11
            },
            {
              text: 'December',
              value: 12
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
