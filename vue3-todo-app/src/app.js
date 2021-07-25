import Form from "@/components/Form";
import TechnoList from "@/components/technoList/TechnoList.vue"
import { ref } from 'vue';

export default {
  name: 'App',
  components: {
    Form,
    TechnoList
  },

  setup() {
    let technos = ref([]);
    
    const saveTechno = function (data) {
      console.log("APP | saveTechno() | data", data); 
      technos.value = [...technos.value, {techno: data, id: Date.now() }];
      console.log("APP | saveTechno() | technos.value", technos.value);
    };

    const deleteTechno = function(data) {
      console.log('APP | deleteTechno() | tech', data);
      technos.value = technos.value.filter(t => t.id !== data.id);
    }

    const editTechno = function (data) {
      technos.value = technos.value.map(t => t.id !== data.id ? t : data);
    }

    return {saveTechno, technos, TechnoList, deleteTechno, editTechno}
  }
};