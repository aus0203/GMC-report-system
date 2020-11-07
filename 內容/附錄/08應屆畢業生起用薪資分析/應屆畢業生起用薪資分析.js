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
        mainInfoBox.src = "./資料擺放/01應屆畢業生功能別薪資分析(月薪).html"
    }else if(element.id === 'page2'){
        mainInfoBox.src = "./資料擺放/02應屆畢業生歷年功能別薪資分析(月薪).html"
    }else if(element.id === 'page3'){
        mainInfoBox.src = "./資料擺放/03應屆畢業生歷年學歷別薪資分析(月薪).html"
    }else if(element.id === 'page4'){
        mainInfoBox.src = "./資料擺放/04應屆畢業生歷年薪資成長率分析.html"
    }
}