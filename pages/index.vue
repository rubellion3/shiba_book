<template>
  <div class="container">
    <div class="row">
      <div class="col-9">
        <table class="table">
          <thead>
            <!-- <th>Id</th> -->
            <th>Cover</th>
            <th>Title</th>
            <th>Price</th>
          </thead>
          <tbody>
            <tr v-for="(book, index) in books" :key="book.id">
              <!-- <td>{{ book.id }}</td> -->
              <td class="w-48"><img :src="book.cover" /></td>
              <td class="text-lg">{{ book.title }}</td>
              <td class="text-lg">{{ book.price }}</td>
              <td>
                <b-button pill variant="primary" @click="addBook(index)"
                  >Add</b-button
                >
                <b-button pill variant="danger" @click="delBook(index)"
                  >Remove</b-button
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-3">
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
              <td class="text-lg">{{ totalSum() - discount || 0 }}</td>
            </tr>
          </tbody>
        </table>
        <label for="" class="text-lg"><th>Input customer money</th> </label>
        <div class="text-right">
          <small v-if="error.money" class="text-red-700">{{
            '*' + error.money
          }}</small>
          <b-input v-model="income" class="my-2" type="text" />

          <b-button pill variant="danger" @click="getChange()"
            >Proceed Payment</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { mapMutations } from 'vuex'
// import Bill from '~/components/Bill1.vue'
export default {
  // components: { Bill },
  data() {
    return {
      error: { money: '' },
      books: [{ id: '', title: '', cover: '', price: '', qul: 1 }],
      carts: [],
      discount: 0,
      income: 0,
    }
  },

  computed: {},
  created() {
    this.getBooks()
  },
  mounted() {},
  methods: {
    async getBooks() {
      try {
        const res = await this.$axios.get(
          'https://api.jsonbin.io/b/5f3154b06f8e4e3faf2f99de?fbclid=IwAR2uMBCdw1067r7n9Pmd4Zbr4kttBmtuplfwtZqPuTNN0Bie81p4NbwTAW8'
        )
        if (res) {
          this.books = res.data.books
        }
      } catch (error) {}
    },
    delBook(index) {
      this.carts.splice(index, 1)
      this.discount = this.getDiscount()
    },
    getChange() {
      const calData = {
        changes: this.income - (this.totalSum() - this.discount),
        totalSum: this.totalSum(),
        discount: this.discount,
      }
      if (calData.changes > 0) {
        this.$store.commit('cal', calData)
        this.$store.commit('carts', this.carts)
        this.$router.push('showBill')
      } else {
        this.error.money = 'Need more money'
        // this.$forceUpdate()
      }
    },
    addBook(index) {
      const cIndex = this.carts.findIndex((x) => {
        return x.id === this.books[index].id
      })
      if (this.carts.includes(this.books[index])) {
        this.carts[cIndex].qul += 1
      } else {
        this.carts.push(this.books[index])
        this.books[index].qul = 1
      }
      this.discount = this.getDiscount()
      this.$forceUpdate()
    },
    totalSum() {
      let sum = 0
      this.carts.forEach((x) => {
        sum += parseInt(x.price) * parseInt(x.qul)
      })
      return sum
    },
    unique_checker(iterable) {
      const a = new Set(iterable)
      a.forEach((x, index) => {
        if (!x.title.includes('Harry')) {
          a.delete(x)
        }
      })
      return a.size
    },
    pair_checker() {
      const arr = []
      this.carts.forEach((x) => {
        if (x.title.includes('Harry')) {
          arr.push(x.qul)
        }
      })
      return Math.min(...arr)
    },
    getDiscount() {
      let sum = 0
      this.carts.forEach((x, index) => {
        if (
          x.title.includes('Harry') &&
          this.unique_checker(this.carts) === 2
        ) {
          sum += ((x.price * 10) / 100) * this.pair_checker()
        } else if (
          x.title.includes('Harry') &&
          this.unique_checker(this.carts) === 3
        ) {
          sum += ((x.price * 11) / 100) * this.pair_checker()
        } else if (
          x.title.includes('Harry') &&
          this.unique_checker(this.carts) === 4
        ) {
          sum += ((x.price * 12) / 100) * this.pair_checker()
        } else if (
          x.title.includes('Harry') &&
          this.unique_checker(this.carts) === 5
        ) {
          sum += ((x.price * 13) / 100) * this.pair_checker()
        } else if (
          x.title.includes('Harry') &&
          this.unique_checker(this.carts) === 6
        ) {
          sum += ((x.price * 14) / 100) * this.pair_checker()
        } else if (
          x.title.includes('Harry') &&
          this.unique_checker(this.carts) === 7
        ) {
          sum += ((x.price * 15) / 100) * this.pair_checker()
        }
      })
      return sum
    },
  },
}
</script>
<style>
img {
  margin: auto;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  /* font-weight: 300; */
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
