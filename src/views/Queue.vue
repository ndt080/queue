<template>
    <div>
        <TopNav />
        <h2>QUEUE Page</h2>
        <label>
            <!-- v-model связывает с элементами -->
            <select v-model="filter">
                <option value="all">Все</option>
                <option value="completed">Актуальные</option>
                <option value="no-completed">Старые</option>
            </select>
        </label>
        <Loader v-if="getLoading" />
        <!-- @ заменяет v-on -->
        <NotesList
                v-else-if="filteredCard.length"
                v-bind:notes="filteredCard"
        />
        <p v-else>No Card!</p>
    </div>
</template>

<script>
    import NotesList from "../components/NotesList";
    import Loader from "../components/Loader";
    import {mapGetters, mapActions, mapMutations} from "vuex";
    import TopNav from "../components/TopNav";

    export default {
        name: 'Queue',
        data() {
            return{
                filter: 'all',
            }
        },
        mounted() {
            this.GET_NOTES();
            this.GET_RECORDS();
        },
        //watch: {    //Следим за изменением поля filter
        //     filter(value) {
        //    }
        // },
        methods: {
            ...mapActions(['GET_NOTES']),
            ...mapActions(['GET_RECORDS'])
        },
        computed: {
            ...mapGetters(["getNotes"]),
            ...mapGetters(["getLoading"]),
            filteredCard(){
                if(this.filter === 'all'){
                    return this.getNotes
                }
                if(this.filter === 'completed'){
                    return this.getNotes.filter(t => t.completed)
                }
                if(this.filter === 'no-completed'){
                    return this.getNotes.filter(t => !t.completed)
                }
            }
        },
        components: {
            TopNav,
            NotesList,
            Loader
        }
    }
</script>


