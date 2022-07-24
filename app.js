

Vue.createApp({
    data() {
        return {
            todos: [],
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
                localStorage.setItem("todos", JSON.stringify({todos:this.todos}))
            }
        },
        deleteTodo(event) {
            let id = event.target.id
            this.todos = this.todos.filter((e) => {
                return (e.key) != (id);
            })
            localStorage.setItem("todos", JSON.stringify({todos:this.todos}));
        },
        onSubmit(e){
            e.preventDefault()
            this.createNewTodo(this.inputTodo)
            this.inputTodo = ""
        },
        onLoadFunc(){
            let data = localStorage.getItem("todos");
            if(data){
                this.todos = JSON.parse(data).todos
            }
        }
    },
    created(){
        this.onLoadFunc()
    }
}).mount('#app')

let uuid = crypto.randomUUID();
console.log(uuid)