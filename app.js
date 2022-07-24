

Vue.createApp({
    data() {
        return {
            todos: [{
                todo: "Lets do it",
                key: "656131323svsvs"
            }],
            inputTodo: ""
        }
    },
    methods: {
        generateId() {
            return crypto.randomUUID()
        },
        createNewTodo() {
            let id = this.generateId()
            if (!this.inputTodo) {
                console.error("Todo is empty")
            } else {
                this.todos.push({
                    todo: this.inputTodo,
                    key: id
                })
            }
        },
        deleteTodo(event) {
            let id = event.target.id
            this.todos = this.todos.filter((e) => {
                return (e.key) != (id);
            })
        },
        onSubmit(e){
            e.preventDefault()
            console.log(e)
            this.createNewTodo(this.inputTodo)
            this.inputTodo = ""
        }
    }
}).mount('#app')

let uuid = crypto.randomUUID();
console.log(uuid)