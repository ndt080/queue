<template>
    <div class="card-deck">
        <div class="card-section">
            <!-- v-for на каждой интерации создается переменная note, хранящая наш объект  -->
            <!-- v-bind передаем в дочерний элемент -->
            <Card
            v-for="(note, i) of notes"
            v-bind:key="note.id"
            v-bind:date="note.date"
            v-bind:note="note"
            v-bind:index="i"
            />
        </div>
    </div>
</template>

<script>
    import Card from "./Card";
    import {mapGetters, mapActions, mapMutations} from "vuex";
    export default {
        props: ['notes'],
        name: "NotesList",
        components: {
            Card
        }
    }
</script>

<style scoped>

</style>
