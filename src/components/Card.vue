<template>
    <div class="card mb-3 border card-border card-section--content">
        <!-- v-bind добавление класса, если  note.completed === true -->
        <div class="card-header">
            <div class="text-left">
                <!-- v-on добавляет событие (мб и click)-->
                <!-- <input type="checkbox" v-on:change="note.completed = !note.completed" /> -->
                <p class="alert text-right" v-bind:class="{done: note.completed}">{{note.title | uppercase}}</p>
            </div>
            <div class="right-box text-right">
                <div class="text-left badge badge-light date-label-card">{{this.convertDate(note.date)}}</div>
                <button class="btn text-right close" v-on:click.prevent="deleteObject(note.id)">&times;</button>
            </div>
        </div>

        <div class="card-body card-body-text">
            <RecordsList
                    v-bind:recList="this.getList"
                    v-bind:cardID="note.id"
                    v-bind:index="index"
            />
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapActions, mapGetters} from "vuex";
    import RecordsList from "./RecordsList";
    import AddLi from "./AddLi";
    export default {
        props: {
          note: {
              type: Object,   //указываем тип передаваемого элемента
              required: true,  //делаем его обязательным
          },
          index: Number
        },
        name: "Card",
        filters: {
            uppercase (value){
                return value.toUpperCase()
            }
        },
        computed: {
            ...mapGetters(["getNotes"]),
            ...mapGetters(["getList"])
        },
        methods: {
            ...mapActions(['REMOVE_CARDS']),
            deleteObject: function(id) {
                return this.REMOVE_CARDS(id)
            },
            convertDate: function(date) {
                return date[8]+''+date[9]+'.'+date[5]+''+date[6]
            }
        },
        components:{
            RecordsList
        }
    }
</script>

<style scoped>
    .done{
        text-decoration: line-through;
    }
</style>
