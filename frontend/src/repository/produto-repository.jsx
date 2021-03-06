class ProdutoRepository{
    #list;
    #funclist;
    
    constructor(){
        this.#list = [];
        this.#funclist = [];
    }

    create(model){
        this.#list = [...this.#list, model];
        this.notifyAll();
    }   

    list(){
        return this.#list;
    }

    sub(func){
        let subs = [...this.#funclist, func]
        this.#funclist = subs;
    }

    unsub(func){
        this.#funclist.splice(this.#funclist.findIndex(l => l.func === func),1)
    }

    notifyAll(){
        this.#funclist.forEach(func =>{           
            func(this.#list)
        })
    }
}

export default ProdutoRepository;