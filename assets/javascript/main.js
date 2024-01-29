const { createApp } = Vue

  createApp({
    data() {
      return {
        date: new Date(),
        newTodo : {
            text: "",
            done: false
        },
        todos: [
            { 
                text: "Fare la spesa",
                done: false 
            },

            {
                text: "Studiare per l'esame",
                done: false 
            },

            { 
                text: "Andare in palestra",
                done: false 
            }
        ]
      }
    },
    methods: {
        addTodo(){
            if(this.newTodo.text !== ""){
                this.todos.push({ ...this.newTodo })
            }
            this.newTodo.text = "";
            this.newTodo.done = false;
        },
        doCheck(todo){
            todo.done = !todo.done;
        },
        remove(index){
            this.todos.splice(index, 1);
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' };
            return new Date(date).toLocaleDateString(undefined, options);
          }
    },
  }).mount('#app')