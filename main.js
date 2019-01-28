var app = new Vue({
    el: '#app',
    data: {
      newExercise: '',
      exerciseList: []
    },
    methods: {
      addExercise() {
        this.exerciseList.push({name: this.newExercise});
        this.newExercise = ''
      }
    }
  })