var app = new Vue({
    el: '#app',
    data: {
      newExercise: '',
      exerciseList: []
    },
    methods: {
      addExercise() {
        this.exerciseList.push({id: this.setId(), name: this.newExercise});
        this.newExercise = ''
      },

      updateExercise(id) {
        this.exerciseList[id].name = 'updated';
      },

      setId() {
        const exerciseLength = this.exerciseList.length;

        if(exerciseLength === 0) {
          return 0;
        } else {
          return this.exerciseList[exerciseLength - 1].id + 1;
        }
      }
    }
  })