<script setup>
import { ref , watch} from 'vue'

//these props are sent from the parent component
defineProps({
  question:String,
  answer1:String,
  answer2:String
})

//this event will send the selected answer back to the parent
const emit=defineEmits([
  'answer-selected'
])

//this holds the user's selected answer
const choice = ref(null)

//function choiceMade() {
  //emit ('answer-selected',choice.value)
//}

// whenever the user selects a radio button, emit the answer back to the parent
watch(choice,()=>{
  emit('answer-selected',choice.value)

})
</script>
<template>

  <div id="wyr">
    <h2>Make your choice!</h2>
      <div id="question">
        {{ question }}
      </div>
      <div id="answers">
        <input type="radio" id="answer-1" v-model="choice" v-bind:value="answer1" v-on:change="choiceMade">
        <label for="answer-1"> {{ answer1 }} </label>
        <input type="radio" id="answer-2" v-model="choice" v-bind:value="answer2" v-on:change="choiceMade">
        <label for="answer-2"> {{ answer2 }} </label>
      </div>
    </div>
</template>



<style scoped>
#wyr{
  background-color:hotpink;
}
p{
  font-family: fantasy;
}
</style>
