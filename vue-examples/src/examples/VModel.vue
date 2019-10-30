<template>
  <div>
    <div class="form-group row">
      <label class="col-sm-2">
        Number v-model
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          v-model="model1"
          :data="data"
          multiple
          @change="change1"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Object v-model
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          v-model="model2"
          @change="change2"
        >
          <option
            v-for="(row, i) in data"
            :key="i"
            :value="row"
          >
            {{ row.text }}
          </option>
        </MultipleSelect>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Object v-model
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          v-model="model3"
          :data="objectData"
          @change="change3"
        />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2">
        Group v-model
      </label>

      <div class="col-sm-10">
        <MultipleSelect
          v-model="group"
          :data="groupData"
          multiple
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const data = [
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
    ]

    const objectData = [
      {
        text: 'Object 1',
        value: {
          object: 1
        }
      },
      {
        text: 'Object 2',
        value: {
          object: 2
        }
      },
      {
        text: 'Object 3',
        value: {
          object: 3
        }
      }
    ]

    return {
      data,
      objectData,
      groupData: [
        {
          type: 'optgroup',
          label: 'Group 1',
          children: [
            {
              text: 'January',
              value: 1
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
            }
          ]
        }
      ],
      model1: [1],
      model2: data[0],
      model3: objectData[0].value,
      group: [1, 7]
    }
  },
  methods: {
    change1 () {
      console.log(typeof this.model1, this.model1)
    },
    change2 () {
      console.log(typeof this.model2, this.model2)
    },
    change3 () {
      console.log(typeof this.model3, this.model3)
    }
  }
}
</script>

<style scoped>
select {
  width: 100%;
}
</style>
