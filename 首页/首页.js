// 首页悬停菜单功能
const homeMenu = document.querySelector('.home-menu');
if (homeMenu) {
    // 确保在移动设备上不显示此菜单
    if (window.innerWidth >= 768) {
        homeMenu.classList.remove('hidden');
        
        // 添加触摸设备支持
        const menuTrigger = homeMenu.querySelector('.group');
        const menuContent = homeMenu.querySelector('.absolute');
        
        // 鼠标悬停显示菜单
        menuTrigger.addEventListener('mouseenter', () => {
            menuContent.classList.remove('opacity-0', 'invisible');
            menuContent.classList.add('opacity-100', 'visible');
        });
        
        // 鼠标离开隐藏菜单
        menuTrigger.addEventListener('mouseleave', () => {
            menuContent.classList.remove('opacity-100', 'visible');
            menuContent.classList.add('opacity-0', 'invisible');
        });
        
        // 触摸设备支持
        menuTrigger.addEventListener('touchstart', (e) => {
            e.preventDefault();
            if (menuContent.classList.contains('opacity-0')) {
                menuContent.classList.remove('opacity-0', 'invisible');
                menuContent.classList.add('opacity-100', 'visible');
            } else {
                menuContent.classList.remove('opacity-100', 'visible');
                menuContent.classList.add('opacity-0', 'invisible');
            }
        });
    }
}

// 首页悬停菜单功能 - 已移除

// 图片轮播
const carousel = document.getElementById('intro-carousel');
if (carousel) {
    const carouselItems = carousel.querySelectorAll('.carousel-item');
    const carouselDots = carousel.querySelectorAll('.carousel-dot');
    const prevBtn = carousel.querySelector('.carousel-prev');
    const nextBtn = carousel.querySelector('.carousel-next');
    let currentSlide = 0;

    function showSlide(index) {
        // 隐藏所有幻灯片
        carouselItems.forEach(item => {
            item.classList.remove('active');
        });

        // 移除所有指示点的活跃状态
        carouselDots.forEach(dot => {
            dot.classList.remove('active', 'bg-white');
            dot.classList.add('bg-white/50');
        });

        // 显示当前幻灯片
        carouselItems[index].classList.add('active');

        // 激活当前指示点
        carouselDots[index].classList.add('active', 'bg-white');
        carouselDots[index].classList.remove('bg-white/50');

        currentSlide = index;
    }

    // 下一张幻灯片
    function nextSlide() {
        let newIndex = currentSlide + 1;
        if (newIndex >= carouselItems.length) {
            newIndex = 0;
        }
        showSlide(newIndex);
    }

    // 上一张幻灯片
    function prevSlide() {
        let newIndex = currentSlide - 1;
        if (newIndex < 0) {
            newIndex = carouselItems.length - 1;
        }
        showSlide(newIndex);
    }

    // 自动轮播
    let carouselInterval = setInterval(nextSlide, 5000);

    // 事件监听
    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(carouselInterval);
            prevSlide();
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(carouselInterval);
            nextSlide();
            carouselInterval = setInterval(nextSlide, 5000);
        });
    }

    if (carouselDots.length > 0) {
        carouselDots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(carouselInterval);
                showSlide(index);
                carouselInterval = setInterval(nextSlide, 5000);
            });
        });
    }
}

// 页面加载完成后的动画效果
document.addEventListener('DOMContentLoaded', () => {
    // 为各个部分添加淡入效果
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        setTimeout(() => {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, 100 + index * 100);
    });
});