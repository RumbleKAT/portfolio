function Portfolio(state){
    this.root = document.querySelector('#middle');    
    this.state = state
}

Portfolio.prototype.btnEvtTrigger = function(){
    let btnPrev = document.getElementById('prev')
    let btnNext = document.getElementById('next')
    
    btnPrev.addEventListener('click',()=>{
        console.log(this.state);
        if(this.state.pageIndex <= 0){
            this.state.pageIndex = 0;
        }else{
            this.state.pageIndex -= 1;
        }
    });

    btnNext.addEventListener('click',()=>{
        console.log(this.state);
        if (this.state.pageIndex >= this.state.pageArray.length) {
            this.state.pageIndex = this.state.pageArray.length;
        } else {
            this.state.pageIndex += 1;
        }
    });

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
                console.log("Rendering OK!")
            })
        }
    },e => {
        console.log(e);
    }).then(()=>{
        console.log("After Rendering...");
        this.btnEvtTrigger();
    })
}

var state = {
    pageIndex : 0,
    pageWriter : "송명진",
    pageArray : []
};

var main = new Portfolio(state);
main.loadTemplate();
