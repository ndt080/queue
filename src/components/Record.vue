<template>
    <li class="list-group-item">
        {{rec.post}}
        <button class="btn text-right close" v-on:click.prevent="deleteObject(rec.id)">&times;</button>
    </li>
</template>

<script>
    import {mapMutations, mapActions, mapGetters} from "vuex";
    export default {
        props: {
            rec: {
                type: Object,   //указываем тип передаваемого элемента
                required: true,  //делаем его обязательным
            },
            index: Number
        },
        name: "Record",
        methods: {
            ...mapActions(['REMOVE_RECORD']),
            deleteObject: function (id) {
                return this.REMOVE_RECORD(id)
            }
        }

    }
</script>

<style scoped>
 li{
     border-radius: 0.5rem;
     background: rgba(0,0,0,0);
 }
    li:hover{
        background: rgba(255,255,255,0.55);
    }
</style>
