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
          <td class="text-lg">{{ 'x' + cart.qul }}</td>
          <td class="text-lg">{{ cart.price * cart.qul }}</td>
        </tr>
        <tr>
          <td></td>
          <th>Discount</th>
          <td class="text-lg">{{ discount || 0 }}</td>
        </tr>
        <tr>
          <td></td>
          <th>Net</th>
          <td class="text-lg">{{ totalSum - discount || 0 }}</td>
        </tr>
      </tbody>
    </table>
    <div class="container text-center text-2xl">
      {{ 'Changes is ' + changes }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    changes: { type: Number, default: 0 },
    totalSum: { type: Number, default: 0 },
    discount: { type: Number, default: 0 },
    carts: { type: Array, default: null },
  },
}
</script>

<style></style>
