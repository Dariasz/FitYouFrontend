<template>
   <v-container>
      <v-card>
        <v-card-text>
          <v-subheader class="pa-0">Pick new exercise</v-subheader>
          <v-autocomplete
            v-model="newExercise"
            :items="availableExercises"
          >
          </v-autocomplete>
        </v-card-text>

        <v-layout row align-center v-if="exerciseExists(newExercise)">
          <v-flex xs12 sm6 md3>
            <v-text-field
                v-model="exerciseProps.quantity"
                label="Quantity"
                solo
            >
            </v-text-field>
          </v-flex>

          <v-flex xs12 sm6 md3>
            <v-text-field
                v-model="exerciseProps.rating"
                label="Rating"
                solo
            >
            </v-text-field>
          </v-flex>
          <v-layout justify-end>
            <v-icon large @click="addExercise">done_outline</v-icon>
          </v-layout>
      </v-layout>
      </v-card>
      <br />

      <span v-for="(exercise, index) in exerciseList" v-bind:key="exercise.id">
         <v-card v-if="exercise">

            <v-card-title primary-title>
               <h3 class="headline mb-0" @click="showExerciseEdit(index)">{{exercise.name}}</h3>
               <v-layout column justify-end align-end v-if="!exercise.editing">
                  <h4 v-if="exercise.quantity">Quantity: {{exercise.quantity}}</h4>
                  <h4 v-if="exercise.rating">Rating: {{exercise.rating}}</h4>
               </v-layout>
                <v-layout row wrap v-if="exercise.editing" class="edit-inputs">

                  <v-flex xs12 sm6 md3>
                    <v-text-field
                      v-model="exercise.quantity"
                      label="Quantity"
                      solo
                    ></v-text-field>
                  </v-flex>

                  <v-flex xs12 sm6 md3>
                    <v-text-field
                      v-model="exercise.rating"
                      label="Rating"
                      solo
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row wrap align-center justify-end v-if="exercise.editing">
                  <v-icon medium @click="hideExerciseEdit(index)">done</v-icon>
                  <v-icon medium @click="deleteExercise(index)">delete</v-icon>
                </v-layout>
            </v-card-title>
         </v-card>
      </span>
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
         this.exerciseProps = { quantity: '', rating: '' }
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
  .edit-inputs {
    display: inline-flex;
    margin-left: 10px;
    margin-top: 10px;
  }
</style>


