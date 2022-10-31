<template>
    <div class="miniContainer">
        <div class="container">
            <div class="row">
                    <div class="col-11">
                        <div class="row d-flex justify-content-start  align-items-start ">
                            <span class="col-1 nameOfValue">Title:</span>
                            <span class="col-11  value">{{ title }}</span>
                        </div>
                        
                        <div class="row d-flex flex-wrap justify-content-start">
                            <span class="col-1 nameOfValue">Time:</span>
                            <span class="col-11 value">{{ time }}</span>
                        </div>

                        <div class="row d-flex justify-content-start">
                            <span class="col-1 nameOfValue">Status:</span>
                            <span class="col-11 value"> {{ status ? 'Завершено' : 'В процессе' }} </span>
                        </div>
                    </div>
                    <div class="col-1 d-flex flex-column justify-content-around">
                        <i @click="deleteTheTodo" class="bi bi-x-square-fill "></i>
                        <i v-if="status" class="bi bi-toggle-on"  @click="changeStatus"></i>
                        <i v-if="!status" class="bi bi-toggle-off"  @click="changeStatus"></i>
                    </div>
                    
                
            </div>
            
        </div>
        
        
    </div>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css'
export default {
    props: ['id', 'title', 'status', 'time'],
    methods: {
        deleteTheTodo() {
            console.log(this.id)
            this.axios.post('http://127.0.0.1:5000/api/deleteTodo', { id: this.id }).then((response) => {
                () => console.log("удалено")
            })
        },
        changeStatus() {
            console.log(this.id)
            this.axios.post('http://127.0.0.1:5000/api/changeStatus', { id: this.id }).then((response) => {
                () => console.log("удалено")
            })
        }
    }
}

</script>


<style lang="scss" scoped>
$pyrple: rgb(132, 24, 187);

.miniContainer {
    background: rgb(80, 69, 83);
    border: 3px solid $pyrple;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 5px 0;
    margin: 20px 20px;
    font-size:14px;
    font-weight:500;
    &span {
        color: black
    }
}

.nameOfValue{
    color:$pyrple
}

.value{
    color:white
}

i:hover {
    color: $pyrple;
}
</style>