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
        mainInfoBox.src = "./資料擺放/01禮金給付.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02員工旅遊.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03子女教育補助.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04全身健康檢查.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05其他福利.html"
    }
}