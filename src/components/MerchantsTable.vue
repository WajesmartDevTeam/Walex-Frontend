<template>
  <div class="container">
    <v-client-table
      style="text-align:left"
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
      results: {},
      columns: ["transaction", "amount", "merchant", "recipent", "created_at"],
      tableData: [],
      options: {

        headings: {
          transaction: "Transaction",
          amount: "Amount",
          merchant: "Merchant",
          recipent: "Recipient",
          created_at: "Date"
        },

        sortable: ["transaction", "value"],
        filterable: ["transaction", "value"]
      }
    };
  },
  mounted () {
    this.results = this.$store.getters.user;
    this.getLogs()

  },
  methods: {
    getLogs () {
      var req = {
        what: "user_log",
        params: {
          user_id: this.results.id
        }
      };
      this.$request
        .makeGetRequest(req)
        .then(response => {
          response.data.data.forEach(i => {
            let date = new Date(i.created_at);
            let dt = date.toDateString();
            i.created_at = dt.substring(0, 3) + "," + dt.substring(3, 10) + "," + dt.substring(10);

            i.amount = "₦" + Number(i.amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')
          })
          this.tableData = response.data.data;
        })
        .catch(error => {
          this.$swal.fire("Error", error, "error");
        });
    },
    // timeSince (time) {

    //   switch (typeof time) {
    //     case 'number':
    //       break;
    //     case 'string':
    //       time = +new Date(time);
    //       break;
    //     case 'object':
    //       if (time.constructor === Date) time = time.getTime();
    //       break;
    //     default:
    //       time = +new Date();
    //   }
    //   var time_formats = [
    //     [60, 'seconds', 1], // 60
    //     [120, '1 minute ago', '1 minute from now'], // 60*2
    //     [3600, 'minutes', 60], // 60*60, 60
    //     [7200, '1 hour ago', '1 hour from now'], // 60*60*2
    //     [86400, 'hours', 3600], // 60*60*24, 60*60
    //     [172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
    //     [604800, 'days', 86400], // 60*60*24*7, 60*60*24
    //     [1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
    //     [2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
    //     [4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
    //     [29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
    //     [58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
    //     [2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
    //     [5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
    //     [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    //   ];
    //   var seconds = (+new Date() - time) / 1000,
    //     token = 'ago',
    //     list_choice = 1;

    //   if (seconds == 0) {
    //     return 'Just now'
    //   }
    //   if (seconds < 0) {
    //     seconds = Math.abs(seconds);
    //     token = 'from now';
    //     list_choice = 2;
    //   }
    //   var i = 0,
    //     format;
    //   while (format = time_formats[i++])
    //     if (seconds < format[0]) {
    //       if (typeof format[2] == 'string')
    //         return format[list_choice];
    //       else
    //         return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
    //     }
    //   return time;
    // }
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
