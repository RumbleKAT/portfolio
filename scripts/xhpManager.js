function xhpManager(url){
    fetch(url).then(output =>{
        return output.body;
    }).catch(e =>{
        console.log(e);
        console.log("There is Error...");
    })
}

