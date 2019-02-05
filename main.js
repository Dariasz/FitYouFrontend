var app = new Vue({
    el: '#app',
    data: {
      newExercise: '',
      exerciseList: [],
      exerciseEditInput: false,
      exerciseEdited: ''
    },

    methods: {
      addExercise() {
        this.exerciseList.push({id: this.setId(), name: this.newExercise});
        this.newExercise = ''
      },

      updateExercise(id) {
        console.log(id);
        console.log(this.exerciseList[id])
        this.exerciseList[id].name = this.exerciseEdited;
        this.exerciseEditInput = false;
      },

      deleteExercise(id) {
        let list = this.exerciseList;
        list.splice(list.indexOf(list[id]), 1, "");
      },

      showExerciseEdit() {
        this.exerciseEditInput = true;
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