<script setup>
import Todo from './components/Todo.vue'
import Header from './components/Header.vue'

</script>

<template>
  <div class="back">
    <div class="container">
      <Header />
      <div class="row">
        <div class="d-flex flex-wrap justify-content-center overflowY-auto  col-12 col-12">
          <Todo class="col-12 col-xl-5" v-for="item in data" :key="item.id" :id="item.id" :title="item.title"
            :status="item.status" :time="item.time" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>


export default {
  data() {
    return {
      data: []
    }
  },
  computed: {

  },
  methods: {
    addTodo() {
      if (this.title === '' || this.time === null) {
        return false
      }
      this.axios.post('http://127.0.0.1:5000/api/addTodo', {
        title: this.title,
        status: this.status,
        time: this.time
      }).then((response) => {
        console.log(response)
      }).then(this.getList())
    },

    getList() {
      this.axios.get('http://127.0.0.1:5000/api/todos').then((response) => {
        this.data = response.data
      })
    }
  },
  mounted() {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
$pyrple: rgb(132, 24, 187);

.back {
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background: rgb(8, 2, 15);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px
}

label {
  font-size: 1.2em;
  color: $pyrple
}

input {
  color: $pyrple;
  border: 1px solid $pyrple
}

button {
  background: $pyrple;
  margin-top: 20px
}

form {
  width: 100%;
  margin-top: 50px;
}
</style>
