// 获取所有页面元素
const pages = document.querySelectorAll('.page');
// 当前页面索引
let currentPageIndex = 0;

// 函数：滚动到指定页面
function scrollToPage(index) {
    pages[index].scrollIntoView({ behavior: 'smooth' }); // 平滑滚动到指定页面
}

// 监听滚轮事件，用于在电脑上翻页
document.addEventListener('wheel', function(event) {
    // 向下滚动则翻到下一页，向上滚动则翻到上一页
    if (event.deltaY > 0) {
        currentPageIndex = Math.min(currentPageIndex + 1, pages.length - 1); // 确保不超出页面范围
    } else {
        currentPageIndex = Math.max(currentPageIndex - 1, 0); // 确保不超出页面范围
    }
    scrollToPage(currentPageIndex); // 滚动到当前页面
});

// 监听点击事件，用于在手机上翻页
document.addEventListener('click', function(event) {
    const windowHeight = window.innerHeight;
    const clickY = event.clientY;

    // 如果点击位置在屏幕上半部分，则向上翻页，否则向下翻页
    if (clickY < windowHeight / 2) {
        currentPageIndex = Math.max(currentPageIndex - 1, 0); // 确保不超出页面范围
    } else {
        currentPageIndex = Math.min(currentPageIndex + 1, pages.length - 1); // 确保不超出页面范围
    }

    scrollToPage(currentPageIndex); // 滚动到当前页面
});
