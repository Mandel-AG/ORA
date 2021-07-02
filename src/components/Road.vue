<template>
    <div>
        <div class="road__formContainer">
            <search-route-form></search-route-form>
        </div>
        
        <main>
            <img src="https://images.unsplash.com/photo-1625111988773-8951494ce8ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="image">
        </main>
    </div>
</template>

<script>

import SearchRouteForm from '@/components/SearchRouteForm.vue';

    export default {
        data(){
            return {

            }
        },
        components:{
            SearchRouteForm   
        }
    }
</script>

<style lang="scss"  scoped>
    // @import'../styles/styles.css';


    #road__formContainer{
        form{
            color: red;
        }
    }

    img{
        width:100vw
    }
</style>