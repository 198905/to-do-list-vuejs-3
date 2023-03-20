Vue.createApp ({
data(){
    return{
        header:'TO DO LIST',
        toDo:[],
        newValue:'',
        done:false
    }
},
methods: {
    add:function() {
        this.toDo.push({index:this.toDo.length+1,label:this.newValue});
        this.newValue="";
        
        },
    pop:function(item) {
        this.toDo=this.toDo.filter(i=>i !==item)
        },
    }
})
.mount('#app');