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
        mainInfoBox.src = "./資料擺放/01私人司機-汽車平均車價.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02汽車平均車價歷年分析.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03私人司機歷年分析.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04停車位.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05汽車油料補助對象.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06汽車油料補助方式.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07汽車津貼.html"
    }else if(element.id === 'page8'){
        mainInfoBox.src = "./資料擺放/08禮金給付.html"
    }else if(element.id === 'page9'){
        mainInfoBox.src = "./資料擺放/09子女教育補助金.html"
    }else if(element.id === 'page10'){
        mainInfoBox.src = "./資料擺放/10其他福利.html"
    }
}