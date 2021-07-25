import { ref } from 'vue';

export default {
    setup(props, ctx) {
        let techToLearn = ref('');

        const addTechno = function () {
            console.log("From | addTechno() | techToLear", techToLearn.value);
            ctx.emit("add", techToLearn.value) ;
            // vider les champs texte
            techToLearn.value = '';
        }

        return {
            techToLearn,
            addTechno
        }
    }
}