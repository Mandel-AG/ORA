<template>
    <div class>
        <video src="../assets/video.mp4" autoplay loop playsinline muted></video>

        <header class="viewport-header">
            <h1>
                Partez à l'aventure et découvrez de nouveaux itinéraires à partager avec vos proches
            </h1>
        </header>

        <main>
            <input type="text" placeholder="Recherchez votre itinéraire">
        </main>
    </div>
</template>

<script>
    const Home = {
        data: function() {
            return {
            }
        },
        methods: {
        }
    }
    export default Home;
</script>

<style scoped>
    @import '../styles/style.css';
</style>
