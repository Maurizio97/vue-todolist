// Rifare l’esercizio della to do list:
// - stampare in pagina un item per ogni elemento contenuto in un array
// - ogni item ha una “x” associata: cliccando su di essa, l’item viene rimosso dalla lista
// - predisporre un input per aggiungere un nuovo item alla lista: digitando il tasto invio oppure ciccando su un pulsante, il testo digitato viene aggiunto alla lista
// Mi comunicano ora dalla regia che lo variamo un attimo,
// la vostra variante sarà che:
// il vostro array nei data non avrà delle semplici stringhe, ma sarà un array di oggetti;
// gli oggetti avranno questo formato:
// { text: 'Fare la spesa', done: true }, 
// { text: 'Fare il bucato', done: false }
// etc. etc..
// quindi nell’elenco di output ciò che sara “done” sarà barrato, il resto invece con testo normale.
// Nella richiesta base mi limito al fatto che quel “done” nei task inseriti dall’utente sarà sempre false,
// gli unici true saranno alcuni nei dati di partenza.



// creo l'istanza vue 
// inserisco l'array con dentro gli oggetti
// 
var toDoList = new Vue({
    el: "#todolist",
    data: {
        textNewTask: "",
        tasks: [
            {
                "text": "fare la spesa","done": false
            },
            {
                "text": "Portare a spasso il cane","done": false
            },
            {
                "text": "Programmare","done": true
            },
            {
                "text": "Allenamento","done": false
            },            
        ]
    },
    methods: {
        deleteTask(index){
            this.tasks.splice(index, 1);
        },
        taskDone(index){
            if(!this.tasks[index].done){
                this.tasks[index].done = true;
            } else {
                this.tasks[index].done = false;
            }
        },
        addTask(){
            newTask = {
                "text": this.textNewTask,
                "done": false
            };
            this.tasks.push(newTask);
            this.textNewTask = "";
        }

    },

});