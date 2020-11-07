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
        mainInfoBox.src = "./資料擺放/01人員生產力分析.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02人員獲利力分析.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03人事費用率分析.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04附加價值率分析.html"
    }else if(element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05薪資報酬率分析.html"
    }else if(element.id === 'page6'){
        mainInfoBox.src = "./資料擺放/06教育訓練費用率分析a.html"
    }else if(element.id === 'page7'){
        mainInfoBox.src = "./資料擺放/07教育訓練費用率分析b.html"
    }
}