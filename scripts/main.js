function Portfolio(state){
    this.root = document.querySelector('#root');    
    this.state = state
}

Portfolio.prototype.pushPage = function(){

}

Portfolio.prototype.urlPathFinder = function(){
    //modify pageIndex number
    if(this.state.pageIndex === 0){
        return "../views/title_tmp.html"
    }else if (this.state.pageIndex === 1){
        return "../views/EOD_tmp.html";
    }else{
           
    }
}

Portfolio.prototype.loadTemplate = function(){
    fetch(this.urlPathFinder()).then(res => {
        if (res.ok) {
            res.text().then(output => {
                main.root.innerHTML = output;
            })
        }
    },e => {
        console.log(e);
    });
}

var state = {
    pageIndex : 0,
    pageArray : []
};

var main = new Portfolio(state);
main.loadTemplate();
