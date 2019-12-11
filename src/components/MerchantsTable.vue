<template>
  <div class="container">
    <v-client-table
      :data="tableData"
      :columns="columns"
      :options="options"
      slots="slots"
    >
    </v-client-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      columns: ["description", "points", "value"],
      tableData: [],
      options: {
        headings: {
          name: "Merchant's Name",
          amount: "Loyalty Awards",
          value: "Money Value"
        },
        sortable: ["description", "value"],
        filterable: ["description", "value"]
      }
    };
  },
  mounted () {
    let user = this.$store.getters.profile;
    user.memberships.forEach(m => {
      user.services.forEach(s => {
        if (m.service === s.id) {
          m.description = s.description;
        }
      });
    });
    this.tableData = user.memberships;
    this.tableData.forEach(i => {
      i.points = parseFloat(i.points).toFixed(2);
      i.value = "₦" + parseInt(i.points) * parseInt(i.rate);
    });
  }
};
</script>

<style>
.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: "+";
}

.VueTables__child-row-toggler--open::before {
  content: "-";
}
.table-striped tbody tr:nth-of-type(odd) {
  background: none !important;
}
</style>
