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
        mainInfoBox.src = "./資料擺放/01參加公司名單.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02行業別分類.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03地區別分類.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04外商公司.html"
    }
}