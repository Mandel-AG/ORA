<template>
    <div>
        <div id="user">
            <h1>Profile </h1>
            <div id="photo">
                <img src="../assets/images/avatar.png" alt="photo">
            </div>
            <form >
                <label for="firstname">Prénom: </label>
                <label for="lastname">Nom: </label>
                <label for="age">Age: </label>
                <label for="town">Ville: </label>
                <label for="preference">Préférence</label>
                <select name="preference" id="">
                    <option value="velo"> Velo</option>
                    <option value="pieds"> A pieds</option>
                    <option value="quad">  Quad</option>
                </select>
            </form>
            <h2>Historique des itineraires</h2>
            <div id="historique">
                <div id="trajet">
                <p>Départ:</p> 
                <p>Arrivé:</p>
                </div>
                
                <p>Mode :</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    @import '../style/user.css';
</style>
