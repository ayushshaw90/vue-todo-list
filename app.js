

Vue.createApp({
    data(){
        return{
            todos: [{
                todo: "Lets do it",
                key: "656131323svsvs"
            }],
            inputTodo: ""
        }
    },
    methods: {
        generateId(){
            return crypto.randomUUID()
        },
        createNewTodo(todo){
            let id=this.generateId()
            this.todos.push({
                todo: todo,
                key: id
            })
        },
        deleteTodo(event){
            let id=event.target.id
            this.todos = this.todos.filter((e)=>{
                return (e.key)!=(id);
            })
        }
    }
}).mount('#app')

let uuid = crypto.randomUUID();
console.log(uuid)