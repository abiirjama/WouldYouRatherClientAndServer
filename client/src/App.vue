<script setup>
import {ref,onMounted}from 'vue'
import WouldYouRather from './components/WouldYouRather.vue'
import wyrService from './services/wyrService.js'

//this stores the question we want to show
const wyrQuestion=ref("") 
//these store the two possible answers
const wyrAnswer1=ref("")
const wyrAnswer2=ref("")

//this will store the user's answer once they made a choice 
const userSelection=ref('')

// When component is loaded, this callback function will be called
onMounted(() => {
  //get a random question from the api
  wyrService.getRandomWYR().then((myData) => {

    // myData will look like this:
    // {
    //   "question": "Live in a house shaped like a triangle or a house shaped like a circle?",
    //   "answer1": "Triangle house",
    //   "answer2": "Circle house"
    // }

  

    wyrQuestion.value = myData.question
    wyrAnswer1.value = myData.answer1
    wyrAnswer2.value = myData.answer2
  })
})

//this function runs when the child component emits an answer
function updateUserSelection(userChoice){
  userSelection.value=`Thanks! you chose ${userChoice}`
}

</script>

<template>
  <div id="app-component">

  <h1>Would You Rather?</h1>
  
  <WouldYouRather 
  v-bind:question="wyrQuestion"
  v-bind:answer1="wyrAnswer1"
  v-bind:answer2="wyrAnswer2"
  v-on:answer-selected="updateUserSelection"
  />
  <!--show the user's choice -->
  {{ userSelection }}
  </div>
</template>

<style scoped>
#app-component{

/* font-size: 3em;*/
  background-color: aqua;
  padding: 40px;
}
p{
  font-family: 'Courier New', Courier, monospace;
}
</style>
