<template>
    <!-- prevent позволяет не перезагружать форму -->
    <form class="form-inline" @submit.prevent="onSubmit()">
        <div class=" form-group group card-desk">
            <input class="form-control form-control-lg" type="text"
                   v-model="recTxt"
                   placeholder="Введите имя"
                   required
            />
        </div>
    </form>
</template>

<script>
    import {mapActions, mapMutations} from "vuex";
    export default {
        data(){
            return {
                recTxt: '',
            }
        },
        props: {
            index: Number
        },
        name: "AddLi",
        methods: {
            ...mapActions(['CREATE_RECORDS']),
            onSubmit(){
                if (this.recTxt.trim()){  //проверяем строку на пустоту и внятность
                    this.CREATE_RECORDS({
                        id: Date.now(),
                        indexCard: this.index,
                        post: this.recTxt
                    }, this.index);
                    this.recTxt="";
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
        margin-bottom: 1rem;
    }
    input[type=text]{
        width: 19.4rem;
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
