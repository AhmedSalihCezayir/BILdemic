<template>
  <div class="row justify-center">
    <q-field outlined style="width: 50%;" color="secondary">
      <div class="q-gutter-y-md q-px-md q-py-md full-width" >
        <q-tree
          :nodes="simple"
          node-key="label"
          no-connectors
        >
          <template v-slot:header-root="prop">
            <div class="row items-center">
              <div class="text-weight-bold text-h6 text-secondary">{{ prop.node.label }}</div>
            </div>
          </template>

          <template v-slot:header-branch="prop">
            <div class="row items-center">
              <div class="text-weight-bold text-secondary">{{ prop.node.label }}</div>
            </div>
          </template>

          <template v-slot:header-leaf="prop">
            <div class="row items-center">
              <q-icon :name="prop.node.icon" color="grey"/>
              <div>{{ prop.node.label }}</div>
            </div>
          </template>
        </q-tree>
      </div>
    </q-field>
  </div>
</template>

<script>

export default {
  name: "DailyMenu",
  computed: {
    simple () {
      return [
        {
          label: this.$t('DailyMenu'),
          header: 'root',
          children: [
          {
            label: this.$t('Lunch'),
            header: 'branch',
            children: [
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              }
            ]
          },
          {
            label: this.$t('Dinner'),
            header: 'branch',
            children: [
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              },
              {
                label: 'Good soup',
                icon: 'mdi-circle-small',
                header:'leaf'
              }
            ]
          }
          ]
        }
      ]
    },
  },
  setup() {  

    return {

    }
  },
}
</script>
