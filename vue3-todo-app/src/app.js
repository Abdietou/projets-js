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
    }
    return {saveTechno, technos, TechnoList}
  }
};