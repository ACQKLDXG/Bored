// index.js
// 获取所有页面元素
const pages = document.querySelectorAll('.page');
// 当前页面索引
let currentPageIndex = 0;
  
// 函数：滚动到指定页面
function scrollToPage(index) {
    pages[index].scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到指定页面
}

// 监听滚轮事件
document.addEventListener('wheel', function(event) {
    // 向下滚动则翻到下一页，向上滚动则翻到上一页
    if (event.deltaY > 0) {
        currentPageIndex = Math.min(currentPageIndex + 1, pages.length - 1); // 确保不超出页面范围
    } else {
        currentPageIndex = Math.max(currentPageIndex - 1, 0); // 确保不超出页面范围
    }
    scrollToPage(currentPageIndex); // 滚动到当前页面
});
