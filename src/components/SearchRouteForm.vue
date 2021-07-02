<template>
        <form>
            <div>
                <label for="region"> Région</label>
                <input type="text" name="region" id='region'>
            </div>

            <div>
                <label for="ville"> Ville</label>
                <input type="text" name="ville" id='ville'>
            </div>

            <div>
                <label for="transport"> Transport</label>
                <input type="text" name="transport" id='transport'>
            </div>

            <input id="submitSearchRoadForm" type="submit">

        </form>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss"  scoped>

    @media (min-width: 300px) {
        form{
            display: flex;
            background-color: blue ;
            flex-direction: column;
            padding: 2em;
            margin: 1em 0;
            position: relative;
            
            div{
            margin: 0.3em;
            width: 100%;
            display: flex;
            min-height: 5vh;
            }

            label{
                margin-right: 1em;
            }

            input{
                height: 1.6em;
            }
        }
        #submitSearchRoadForm{
            position:absolute;
            bottom: 1em;
            right: 1em;
            margin-top: 1em ;
            height: 1.5em;
        }
    }




    @media (min-width: 768px) {
        form{
            flex-direction: row;
            position: relative;
        }

        #submitSearchRoadForm{
            position:absolute;
            bottom: 1em;
            right: 1em;
            margin-top: 1em ;
            height: 1.5em;
        }
    }


</style>