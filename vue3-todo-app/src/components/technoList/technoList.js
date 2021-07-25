import { ref } from 'vue';

export default {
    emits: ["delete-techno", "edit-techno"],
    props: {  
        technos : {
            type: Array,
            require: true
        }
    },

    setup(props, {emit}) {
        let technoToEdit = ref(null);

        let deleteTechno = function (data) {
            emit('delete-techno', data);
        };

        let editTechno = function (data) {
            technoToEdit.value = data;
        }

        let save = function () {
            emit('edit-techno', technoToEdit.value);
            technoToEdit.value = null;
        }

        return {
            deleteTechno,
            editTechno,
            save,
            technoToEdit
        };
    },
};