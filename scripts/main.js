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

    this.loadTemplate();
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

Portfolio.prototype.loadTemplate = function(){
    //pageArray에서 index 찾기
    console.log(this.state.pageIndex);
    console.log(this.state.pageArray);
    
    //고치기...Index 읽고 pageIndex로 변환 
    fetch(this.urlPathFinder()).then(res => {
        if (res.ok) {
            res.text().then(output => {
                if(this.state.pageIndex === 0){
                    output = output.replace('${name}',this.state.pageArray[0].pageWriter)
                }else if(this.state.pageIndex === 1){
                    output = output.replace('${titleIdx}',this.state.pageArray[1].titleIdx)
                                    .replace('${title}',this.state.pageArray[1].title)
                                    .replace('${date}',this.state.pageArray[1].date)
                                    .replace('${content}',this.state.pageArray[1].description)
                                    .replace('${url}',this.state.pageArray[1].leftContent)
                                    .replace('${part}',this.state.pageArray[1].rightContent)
                
                    this.state.pageArray[1].img.forEach((element,idx) => {
                        let img = "${img" + idx + "}";
                        output = output.replace(img,element);
                    });
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

var state = {
    pageIndex : 0,
    pageArray : [
        {
            type : -1,
            pageWriter : "송명진"
        },
        {
            type : 0,
            titleIdx : '01',
            title : '두더지를 잡아라',
            date : '2017년 05월',
            description : '두더지를 잡아라는 C++ 기반 오픈소스 라이브러리로 개발된 게임입니다. 시간에 따라 두더지와 토끼, 폭탄 두더지 등 다양한 게임요소들의 등장으로 단순함을 탈피하고 Microsoft Azure와의 연동으로 랭킹제를 제작했습니다.',
            img : [
                './resources/01/01.png','./resources/01/01.png','./resources/01/01.png'
            ],
            leftContent : 'https://github.com/RumbleKAT/Catch_Mouse',
            rightContent : '역할 : 게임 클라이언트 개발자 \n 백엔드 개발자 \n 그래픽 디자이너'
        },
        {
            type : 1
        },
        {
            type : 2
        },
        {
            type : 3
        },
        {
            type : 4
        }
    ]
};

var main = new Portfolio(state);
main.loadTemplate();
main.btnEvtTrigger();
