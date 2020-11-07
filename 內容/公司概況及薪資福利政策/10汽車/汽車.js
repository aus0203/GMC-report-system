/*Main info box*/
/*tab shift*/
/*Main info box*/
const pageTabs = document.querySelectorAll(".page-tab");
const mainInfoBox = document.querySelector('.main-info-box')
 
function mainTabshift(element){
    pageTabs.forEach(x=>{
        x.classList.remove('page-click');
    });
    element.classList.add('page-click');
    if(element.id === 'page1'){
        mainInfoBox.src = "./資料擺放/01私人車輛.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02私人司機.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03停車位.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04汽車油料補助對象.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05汽車油料補助方式.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06汽車津貼.html"
    }
}