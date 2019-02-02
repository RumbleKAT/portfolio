let html2canvas = require('html2canvas');
let jsPDF = require('jspdf');

class pdfConvertor{
    filename;
    constructor(filename){
        this.filename = filename
    }

    exportFile(element){
        html2canvas(document.querySelector(element),{scale : quality}).then(canvas =>{
            let pdf = new jsPDF('p',"mm","a4")
            pdf.addImage(canvas.toDataURL('image/png'),'PNG',0,0,211,298)
            pdf.save(this.filename);
        })
    }
}