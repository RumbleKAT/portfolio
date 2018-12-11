function Portfolio(state){
    this.root = document.querySelector('#middle');    
    this.state = state
}

Portfolio.prototype.btnEvtTrigger = function(){
    
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
                if(this.state.pageIndex === 0){
                    output = output.replace('${name}', this.state.pageWriter)
                }
                main.root.innerHTML = output;
            })
        }
    },e => {
        console.log(e);
    });
}

var state = {
    pageIndex : 0,
    pageWriter : "송명진",
    pageArray : []
};

var main = new Portfolio(state);
main.loadTemplate();
