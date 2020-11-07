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
        mainInfoBox.src = "./資料擺放/02非技術性作業員男性.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03非技術性作業員女性.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04半技術性作業員男性.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05半技術性作業員女性.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06技術性作業員男性.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07技術性作業員女性.html"
    }else if(element.id === 'page8'){
        mainInfoBox.src = "./資料擺放/08技術員男性.html"
    }else if(element.id === 'page9'){
        mainInfoBox.src = "./資料擺放/09技術員女性.html"
    }else if(element.id === 'page10'){
        mainInfoBox.src = "./資料擺放/10品檢員男性.html"
    }else if(element.id === 'page11'){
        mainInfoBox.src = "./資料擺放/11品檢員女性.html"
    }
}