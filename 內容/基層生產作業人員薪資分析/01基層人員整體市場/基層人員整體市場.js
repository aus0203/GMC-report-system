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
        mainInfoBox.src = "./資料擺放/01參加公司名單.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02總機-接待員男性.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03總機-接待員女性.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04清潔員男性.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05清潔員女性.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06警衛男性.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07客車駕駛男性.html"
    }else if(element.id === 'page8'){
        mainInfoBox.src = "./資料擺放/08小型貨車駕駛男性.html"
    }else if(element.id === 'page9'){
        mainInfoBox.src = "./資料擺放/09大型貨車駕駛男性.html"
    }
}