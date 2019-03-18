<template>
   <v-container>
      <v-card>
        <v-card-text>
          <v-subheader class="pa-0">Pick your exercise</v-subheader>
          <v-autocomplete
            v-model="newExercise"
            :items="availableExercises"
          >
          </v-autocomplete>
        </v-card-text>

        <v-layout row justify-center align-center v-if="exerciseExists(newExercise)">
         <v-text-field
            v-model="exerciseProps.quantity"
            label="Quantity"
            outline
         >
         </v-text-field>
         <v-text-field
            v-model="exerciseProps.rating"
            label="Rating"
            outline
         >
         </v-text-field>
          <v-btn color="info" @click="addExercise">Done</v-btn>
      </v-layout>
      </v-card>

      

      <h1>Your exercise list: </h1>

      <div v-for="(exercise, index) in exerciseList" v-bind:key="exercise.id">
         <v-card v-if="exercise">

            <v-card-title primary-title>
               <h3 class="headline mb-0" v-if="!exercise.editing">{{exercise.name}}</h3>
               <v-layout column justify-end align-end>
                 <v-flex xs12 sm6 md3>
                <h4 v-if="exercise.quantity">Quantity: {{exercise.quantity}}</h4>
                <h4 v-if="exercise.rating">Rating: {{exercise.rating}}</h4>
                 </v-flex>
               </v-layout>
               <span v-if="exercise.editing">
                  <v-text-field v-model="exercise.name" @keyup.enter="hideExerciseEdit(index)"
                     append-icon="done" 
                     @click:append="hideExerciseEdit(index)"
                     label="New exercise name"
                     outline
                  ></v-text-field>
               </span>
            </v-card-title>

            <v-card-actions>
               <v-btn flat color="blue" @click="showExerciseEdit(index)">
                  Update
               </v-btn>
               <v-btn flat color="red" @click="deleteExercise(index)">
                  Delete
               </v-btn>
            </v-card-actions>
         </v-card>
      </div>
   </v-container>
</template>

<script>
export default {
    data() {
      return {
        newExercise: '',
        exerciseProps: {
          quantity: '',
          rating: ''
        },
        exerciseEdited: '',
        exerciseList: [],
        availableExercises: [
          'Push-ups', 'Pull-ups', 'Squats', 'Lifting'
        ]
      }
    },

    methods: {
      addExercise() {
         let list = this.exerciseList;

         if(this.newExercise.trim() !== '') {
            if(list.length === 0) {
               list.push({id: 0,
                          name: this.newExercise,
                          editing: false,
                          quantity: this.exerciseProps.quantity,
                          rating: this.exerciseProps.rating });
            } else {
               list.push({id: this.setId(),
                          name: this.newExercise,
                          editing: false,
                          quantity: this.exerciseProps.quantity,
                          rating: this.exerciseProps.rating });
            }
         }
         this.newExercise = ''
      },

      deleteExercise(index) {
         let list = this.exerciseList;
         list.splice(index, 1, "");
      },

      showExerciseEdit(index) {
         this.exerciseList[index].editing = true;
      },

      hideExerciseEdit(index) {
         this.exerciseList[index].editing = false;
      },

      setId() {
         return this.exerciseList[this.exerciseList.length - 1].id + 1;
      },

      exerciseExists(item) {
        return this.availableExercises.includes(item);
      }
    }
}
</script>

<style scoped>
   
</style>


