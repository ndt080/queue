<template>
    <!-- prevent позволяет не перезагружать форму -->
    <form class="form-inline" @submit.prevent="onSubmit()">
        <div class=" form-group group card-desk">
            <input class="form-control form-control-lg" type="text"
                   v-model="title"
                   placeholder="Введите название"
                   required
            />
            <input class="form-control form-control-lg" type="date"
                   min="2020-01-01"
                   v-model="date"
                   required
            />
        </div>
        <button class="btn btn-5">&#10010;</button>

    </form>
</template>

<script>
    import {mapActions, mapMutations} from "vuex";
    export default {
        data(){
            return {
                title: '',
                date: '',
            }
        },
        name: "AddCard",
        methods: {
            ...mapActions(['CREATE_CARDS']),
            onSubmit(){
                if (this.title.trim()){  //проверяем строку на пустоту и внятность
                    this.CREATE_CARDS({
                        id: Date.now(),
                        title: this.title,
                        date: this.date,
                        completed: false
                    });
                    this.title="";
                }
            }
        }
    }
</script>

<style scoped>
    .group{
        position:relative;

    }
    input{
        font-size:18px;
        padding:10px 10px 10px 5px;
        display:block;
        border:none;
        border-bottom: 2px solid #757575;

    }
    input:first-child{
        margin-right: 1.6rem;
    }
    input:focus{ outline:none; }
    .btn-5 {
        border: 1px solid;
        margin-left: 1.6rem;
    }
    .btn-5:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(232, 232, 247, 0.5), 0 0 50px rgba(232, 232, 247, 1);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
    }

</style>
