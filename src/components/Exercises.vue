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
          <h2>Add series</h2>
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

        <v-layout column v-if="newSeriesArray">
          <v-card>
            <v-list three-line>
              <div v-for="(series, index) in newSeriesArray" v-bind:key="series.id">
                
                <v-list-tile>
                  <v-subheader>Series {{index + 1}}</v-subheader>

                  <v-list-tile-content row>
                    <v-list-tile-title>Repetitions: {{series.repetitions}}</v-list-tile-title>
                    <v-list-tile-title>Weight: {{series.weight}}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </div>
            </v-list>
          </v-card>
        </v-layout>
      </v-card>
    </v-card>
    <br />

    <span v-for="(exercise, index) in exerciseList" v-bind:key="exercise.id">
      <v-card v-if="exercise">
        <v-card-title primary-title>
          <h3 class="headline mb-0" @click="showExerciseEdit(index)">{{exercise.name}}</h3>
            <span v-for="(series, idx) in exercise.series" v-bind:key="series.id">
          <v-layout row justify-center align-center v-if="!exercise.editing">
              <v-card>
                <h4> {{idx + 1}}. 
                <span v-if="series.repetitions">Repetitions: {{series.repetitions}}</span>
                <span v-if="series.weight">Weight: {{series.weight}}</span>
                </h4>
              </v-card>
          </v-layout>
          <v-layout row wrap v-if="exercise.editing" class="edit-inputs">
            <v-flex xs12 sm6 md3>
              <v-text-field
                v-model="series.repetitions"
                label="Repetitions"
                solo
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md3>
              <v-text-field
                v-model="series.weight"
                label="Weight"
                solo
              ></v-text-field>
            </v-flex>
          </v-layout>
            </span>
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
        id: null,
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
      let arr = this.newSeriesArray;
      let id = this.newSeries.id;

      arr.length === 0 ? id = 0 : id = this.setSeriesId();
      arr.push(this.newSeries);

      this.newSeries = {
        id: null,
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


