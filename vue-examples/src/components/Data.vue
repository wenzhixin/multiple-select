<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Basic Select
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
        Group Select
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
      title: 'The Data',
      desc: 'Use <code>data</code> as data source.',
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
