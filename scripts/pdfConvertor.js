import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

class pdfConvertor{
    constructor(filename){
        this.filename = filename
    }

    static exportFile(element){
        html2canvas(document.querySelector(element),{scale : quality}).then(canvas =>{
            let pdf = new jsPDF('p',"mm","a4")
            pdf.addImage(canvas.toDataURL('image/png'),'PNG',0,0,211,298)
            pdf.save(this.filename);
            console.log("file saved!");
        })
    }
}