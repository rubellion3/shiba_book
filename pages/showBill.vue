<template>
  <div>
    <create-bill
      :changes="changes.changes"
      :total-sum="changes.totalSum"
      :discount="changes.discount"
      :carts="carts"
    />
  </div>
</template>

<script>
import CreateBill from '~/components/createBill'
export default {
  components: { CreateBill },
  computed: {
    changes() {
      return this.$store.state.calData
    },
    carts() {
      return this.$store.state.carts
    },
  },
}
</script>

<style></style>
