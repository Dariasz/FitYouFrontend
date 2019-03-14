<template>
   <v-container>
      <v-flex xs12 sm6 md3>
         <v-text-field
            v-model="newExercise"
            append-icon="done" 
            @click:append="addExercise"
            @keyup.enter="addExercise"
            label="Exercise name"
            outline
         >
         </v-text-field>
      </v-flex>

      <h1>Your exercise list: </h1>

      <div v-for="(exercise, index) in exerciseList" v-bind:key="exercise.id">
         <v-card v-if="exercise">

            <v-card-title primary-title>
               <h3 class="headline mb-0" v-if="!exercise.editing">{{exercise.name}}</h3>
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
         exerciseEdited: '',
         exerciseList: []
      }
    },

    methods: {
      addExercise() {
         let list = this.exerciseList;

      if(this.newExercise.trim() !== '') {
         if(list.length === 0) {
            list.push({id: 0, name: this.newExercise, editing: false});
         } else {
            list.push({id: this.setId(), name: this.newExercise, editing: false});
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
      }
    }
}
</script>

<style scoped>

</style>


