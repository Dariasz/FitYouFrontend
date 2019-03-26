<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-subheader class="pa-0">Pick new exercise</v-subheader>
        <v-autocomplete
          v-model="newExercise"
          :items="availableExercises"
        ></v-autocomplete>
      </v-card-text>

      <v-card v-if="newExercise">
        <v-card-title>
          <h1>Series</h1>
          <v-layout row justify-center>
            <v-flex xs12 sm6 md3>
              <v-text-field
                v-model="newSeries.repetitions"
                label="Repetitions"
                solo
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md3>
              <v-text-field
                v-model="newSeries.weight"
                label="Weight"
                solo
              ></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout column align-end>
            <v-icon @click="addSeries">add</v-icon>
            <v-icon @click="addExercise" large  color="green">done</v-icon>
          </v-layout>
        </v-card-title>
      </v-card>
    </v-card>
    <br />

    <span v-for="(exercise, index) in exerciseList" v-bind:key="exercise.id">
      <v-card v-if="exercise">
        <v-card-title primary-title>
          <span v-for="(series, idx) in exercise.series" v-bind:key="series.repetitions">
          <v-card>
            {{idx}} {{series.repetitions}} {{series.weight}} {{series.time}}
          </v-card>
          </span>
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
      newSeries: {
        repetitions: '',
        weight: '',
        time: Date.now()
      },
      newSeriesArray: [],
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
                    series: this.newSeriesArray,
                    quantity: this.exerciseProps.quantity,
                    rating: this.exerciseProps.rating });
        } else {
          list.push({id: this.setId(),
                    name: this.newExercise,
                    editing: false,
                    series: this.newSeriesArray,
                    quantity: this.exerciseProps.quantity,
                    rating: this.exerciseProps.rating });
        }
      }
      this.newExercise = ''
      this.newSeriesArray = [];
      this.exerciseProps = { quantity: '', rating: '' }
    },
    deleteExercise(index) {
      let list = this.exerciseList;
      list.splice(index, 1, '');
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
    setSeriesId() {
      return this.newSeriesArray[this.newSeriesArray.length - 1].id + 1;
    },
    exerciseExists(item) {
      return this.availableExercises.includes(item);
    },
    addSeries() {
      this.newSeriesArray.push(this.newSeries);
      this.newSeries = {
        repetitions: '',
        weight: '',
        time: Date.now()
      }
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


