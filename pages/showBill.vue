<template>
  <div class="container">
    <div class="font-black text-center text-green-500 text-6xl">
      The Payment is successfully
    </div>
    <table class="table">
      <thead>
        <th>Title</th>
        <th>Quantity</th>
        <th>Price</th>
      </thead>
      <tbody>
        <tr v-for="cart in carts" :key="cart.id">
          <td class="text-lg">
            {{ cart.title }}
          </td>
          <td class="text-lg">{{ "x" + cart.qul }}</td>
          <td class="text-lg">{{ cart.price * cart.qul }}</td>
        </tr>
        <tr>
          <td></td>
          <th>Discount</th>
          <td class="text-lg">{{ changes.discount || 0 }}</td>
        </tr>
        <tr>
          <td></td>
          <th>Net</th>
          <td class="text-lg">{{ changes.totalSum - changes.discount || 0 }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container text-center text-2xl">
      {{ "Changes is " + changes.changes }}
    </div>
  </div>
</template>

<script>
// import CreateBill from "../components/createBill";
export default {
  // components: { CreateBill },
  computed: {
    changes() {
      return this.$store.state.calData;
    },
    carts() {
      return this.$store.state.carts;
    }
  }
};
</script>

<style></style>
