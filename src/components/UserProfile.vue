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
