// 导航栏滚动效果
const nav = document.getElementById('main-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('bg-light/95', 'backdrop-blur-sm', 'shadow-md');
        nav.classList.remove('bg-transparent');
    } else {
        nav.classList.remove('bg-light/95', 'backdrop-blur-sm', 'shadow-md');
        nav.classList.add('bg-transparent');
    }
});

// 移动端菜单切换
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    if (mobileMenu.classList.contains('hidden')) {
        menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
    } else {
        menuToggle.innerHTML = '<i class="fa fa-times"></i>';
    }
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // 关闭移动菜单
        if (!mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.add('hidden');
            menuToggle.innerHTML = '<i class="fa fa-bars"></i>';
        }

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 初始化页面
window.addEventListener('DOMContentLoaded', initCarousel);