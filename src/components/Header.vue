<template>
    <div class="row d-flex  justify-content-center">
        <div class="col-sm-12 col-md-5  d-flex flex-column">
            <label for="title" class="form-label fw-bold fs-3">Название</label>
            <input id="title" type="text" placeholder="title" v-model="title">
        </div>
        <div class="col-sm-12 col-md-5  d-flex flex-column">
            <label for="time" class="form-label fw-bold fs-3">Время</label>
            <input id="time" type="datetime-local" :min="new Date().toJSON().slice(0, 19)" v-model="time">
        </div>
        <button class="col-md-10  " @click.prevent="addTodo">Добавить</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '',
            status: false,
            time: null,
        }
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
            })
        }
    }
}
</script>

<style lang="scss" scoped>
$pyrple: rgb(132, 24, 187);

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
</style>