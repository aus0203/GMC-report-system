/*Main info box*/
/*tab shift*/
const pageTabs = document.querySelectorAll(".page-tab");
const mainInfoBox = document.querySelector('.main-info-box')
 
function mainTabshift(element){
    pageTabs.forEach(x=>{
        x.classList.remove('page-click');
    });
    element.classList.add('page-click');
    if(element.id === 'page1'){
        mainInfoBox.src = "./資料擺放/01本薪分析.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02津貼分析.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03獎金分析.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04年總和分析.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05本薪分析-地區別.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06津貼分析-地區別.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07獎金分析-地區別.html"
    }else if(element.id === 'page8'){
        mainInfoBox.src = "./資料擺放/08年總和分析-地區別.html"
    }else if(element.id === 'page9'){
        mainInfoBox.src = "./資料擺放/09本薪分析-行業別.html"
    }else if(element.id === 'page10'){
        mainInfoBox.src = "./資料擺放/10津貼分析-行業別.html"
    }else if(element.id === 'page11'){
        mainInfoBox.src = "./資料擺放/11獎金分析-行業別.html"
    }else if(element.id === 'page12'){
        mainInfoBox.src = "./資料擺放/12年總和分析-行業別.html"
    }
}