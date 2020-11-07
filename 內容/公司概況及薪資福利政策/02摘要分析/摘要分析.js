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
        mainInfoBox.src = "./資料擺放/01重要指數.html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02一般經濟環境分析.html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03新進人員薪資分析.html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04調薪幅度.html"
    }else if (element.id === 'page5'){
        mainInfoBox.src = "./資料擺放/05員工離職率及流動率.html"
    }
}