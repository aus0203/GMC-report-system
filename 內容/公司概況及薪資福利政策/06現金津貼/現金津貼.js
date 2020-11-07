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
        mainInfoBox.src = "./資料擺放/01伙食津貼.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02伙食津貼提供方式.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03交通津貼.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04交通津貼提供方式.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05主管加給.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06其他現金津貼.html"
    }
}