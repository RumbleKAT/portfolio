function Portfolio(state){
    this.root = document.querySelector('#middle');    
    this.state = state
}

Portfolio.prototype.btnEvtTrigger = function(){
    let btnPrev = document.getElementById('prev')
    let btnNext = document.getElementById('next')
    btnPrev.addEventListener('click',()=>{
        if(this.state.pageIndex <= 0){
            this.state.pageIndex = 0;
        }else{
            this.state.pageIndex -= 1;
        }
        this.checkPage();
    });

    btnNext.addEventListener('click',()=>{
        if (this.state.pageIndex >= this.state.pageArray.length-1) {
            this.state.pageIndex = this.state.pageIndex;
        } else {
            this.state.pageIndex += 1;
        }
        this.checkPage();
    });
}

Portfolio.prototype.checkPage = function(){
    console.log("checking page!!");
    console.log(this.state.pageIndex);
    try{
        this.loadTemplate();
    }catch(exception){
        console.log(exception);
    }
}

Portfolio.prototype.getTypePage = function(pageIndex){
    let currentPage = this.state.pageArray[pageIndex].type
    console.log("currentPage : ",currentPage)

    if(currentPage === -1){
        return "../views/title_tmp.html"
    }else if(currentPage === 0){
        return "../views/typeAtmp.html"
    }else if(currentPage === 1){
        return "../views/typeBtmp.html"
    }else if(currentPage === 2){
        return "../views/typeCtmp.html"
    }else if(currentPage === 3){
        return "../views/typeDtmp.html"
    }else if(currentPage === 4){
        return "../views/typeEtmp.html"
    }
}

Portfolio.prototype.urlPathFinder = function(){
    //modify pageIndex number
    return this.getTypePage(this.state.pageIndex);
}

Portfolio.prototype.matchContent = function(param){
    let result = "";
    param.forEach((element,idx) =>{
        result += '<h3>' + element.sub_title+ '</h3>';
        result += '<ul>';
        if(Array.isArray(element.sub_description)){
            element.sub_description.forEach(obj => {
                result += '<li>';
                result += obj;
                result += '</li>';
            });
        }else{
            result += '<li>' + element.sub_description + '</li>'
        }
        result += '</ul>';
    })
    return result;
}

Portfolio.prototype.loadTemplate = function(){
    //pageArray에서 index 찾기
    console.log(this.state.pageIndex);
    console.log(this.state.pageArray);
    
    fetch(this.urlPathFinder()).then(res => {
        if (res.ok) {
            res.text().then(output => {
                if(this.state.pageIndex === 0){
                    output = output.replace('${name}',this.state.pageArray[0].pageWriter)
                }else{
                    let idx = this.state.pageIndex
                    output = output.replace('${titleIdx}',this.state.pageArray[idx].titleIdx)
                                    .replace('${title}',this.state.pageArray[idx].title)
                                    .replace('${date}',this.state.pageArray[idx].date)
                                    .replace('${content}',this.state.pageArray[idx].description)
                    //left content replace
                    if(Array.isArray(this.state.pageArray[idx].leftBottomContent)){
                        output = output.replace('${leftBottomPart}',this.matchContent(this.state.pageArray[idx].leftBottomContent));
                    }else{
                        output = output.replace('${leftBottomPart}',this.state.pageArray[idx].leftContent);
                    }
                    //right content replace
                    if(Array.isArray(this.state.pageArray[idx].rightBottomContent)){
                        output = output.replace('${rightBottomPart}',this.matchContent(this.state.pageArray[idx].rightBottomContent));
                    }else{
                        output = output.replace('${rightBottomPart}',this.state.pageArray[idx].rightContent);
                    }

                    if(Array.isArray(this.state.pageArray[idx].img)){
                        this.state.pageArray[idx].img.forEach((element,idx) => {
                            let img = "${img" + idx + "}";
                            output = output.replace(img,element);
                        });
                    }
                }
                main.root.innerHTML = output;
                console.log("Rendering OK!")
            })
        }
    },e => {
        console.log(e);
    }).then(()=>{
        console.log("After Rendering...");
    })
}

var main = new Portfolio(state);
main.loadTemplate();
main.btnEvtTrigger();
