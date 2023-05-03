<template>
  <v-card v-if="getPassengers.length > 0">
    <v-card-title>
      Passangers
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="getPassengers" :search="search">
      <template v-slot:item="{ item }">
        <tr>
          <td>{{ item.columns.pickUpPointOrder }}</td>
          <td>{{ item.columns.name }}</td>
          <td>{{ `${item.columns.tripDuration} Minute` }}</td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'PassengersTable',
  computed: {
    ...mapGetters(['getPassengers']),
  },
  data() {
    return {
      search: '',
      headers: [
        {
          align: 'center',
          key: 'pickUpPointOrder',
          sortable: true,
          title: 'Pickup Order',
        },
        {
          align: 'center',
          key: 'name',
          sortable: true,
          title: 'Passenger Name',
        },
        {
          align: 'center',
          key: 'tripDuration',
          sortable: true,
          title: 'Trip Duration',
        },
      ],
    }
  },
}
</script>
