<template>
    <ul class="list-group">
        <AddLi v-bind:index="index"
        />
        <!-- v-for на каждой интерации создается переменная note, хранящая наш объект  -->
        <!-- v-bind передаем в дочерний элемент -->
        <Record
                v-if="rec.indexCard === index"
                v-for="(rec, i) of recList"
                v-bind:key="rec.id"
                v-bind:indexCard="rec.indexCard"
                v-bind:post="rec.post"
                v-bind:rec="rec"
        />
    </ul>
</template>

<script>
    import Record from "./Record";
    import AddLi from "./AddLi";
    import {mapGetters, mapActions, mapMutations} from "vuex";
    export default {
        props: {
            recList: null,
            index: Number
        },
        name: "RecordsList",
        components: {
            Record, AddLi
        }
    }
</script>

<style scoped>

</style>
