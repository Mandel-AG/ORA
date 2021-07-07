<template>
    <div class="home">

        <Video
            :mp4="require(`@/assets/background.mp4`)"
        />

        <section>
            <header class="viewport-header">
                <h1>
                    Partez à l'aventure et découvrez de nouveaux itinéraires à partager avec vos proches
                </h1>
            </header>

            <main>
                <div class="input-group input-group-sm mb-3">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Recherchez votre itinéraire" 
                        aria-label="Recipient's username" 
                        aria-describedby="button-addon2">
                    <button class="btn btn-secondary" type="button" id="button-addon2">OK</button>
                </div>
            </main>
        </section>
    </div>
</template>

<script>
    import Video from '@/components/Video.vue';
    import Header from '@/components/Header.vue';
    
    const Home = {
        data: function() {
            return {
            }
        },
        components: {
            Video,
            Header
        }
    }
    export default Home;
</script>

<style scoped>
    @import '../styles/style.css';
</style>
