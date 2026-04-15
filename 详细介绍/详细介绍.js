// 轮播图功能变量定义
let currentSlide = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const carouselDots = document.querySelectorAll('.carousel-dot');

// 显示指定幻灯片
function showSlide(index) {
    // 隐藏所有幻灯片
    carouselItems.forEach(item => {
        item.classList.remove('active');
    });

    // 显示当前幻灯片
    carouselItems[index].classList.add('active');

    // 更新当前索引
    currentSlide = index;

    // 更新指示器
    updateIndicators();
}

// 更新指示器
function updateIndicators() {
    carouselDots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
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
if (prevBtn && nextBtn && carouselDots.length > 0) {
    prevBtn.addEventListener('click', () => {
        clearInterval(carouselInterval);
        prevSlide();
        carouselInterval = setInterval(nextSlide, 5000);
    });

    nextBtn.addEventListener('click', () => {
        clearInterval(carouselInterval);
        nextSlide();
        carouselInterval = setInterval(nextSlide, 5000);
    });

    carouselDots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(carouselInterval);
            showSlide(index);
            carouselInterval = setInterval(nextSlide, 5000);
        });
    });
}

// 皮影角色交互
const characterBtns = document.querySelectorAll('.puppet-character');
const characterImage = document.getElementById('character-image');
const characterInfo = document.getElementById('character-info');

// 角色数据
const characters = {
    hero: {
        image: '../图片素材/第三部分/英雄.jpg',
        title: '英雄角色',
        description: '英雄角色是湖湘皮影戏中最常见的角色类型之一，多表现为勇敢、正义、忠诚的人物形象。造型上通常身材魁梧，服饰华丽，面部表情刚毅。常见的英雄角色有岳飞、关羽、武松等历史或文学作品中的英雄人物。在表演中，英雄角色的动作刚劲有力，体现出英勇无畏的气质。'
    },
    princess: {
        image: '../图片素材/第三部分/公主.jpg',
        title: '公主角色',
        description: '公主角色多表现为美丽、善良的女性形象，是湖湘皮影戏中重要的角色类型。造型上通常头戴凤冠，身穿华丽长裙，面容娇美。常见的公主角色有《西游记》中的百花羞公主、《白蛇传》中的小青等。在表演中，公主角色的动作轻柔优美，体现出女性的温柔和典雅。'
    },
    villain: {
        image: '../图片素材/第三部分/反派.jpg',
        title: '反派角色',
        description: '反派角色是湖湘皮影戏中用于制造冲突、推动剧情发展的重要角色。造型上通常比较夸张，面部表情狰狞，服饰色彩对比强烈。常见的反派角色有《封神演义》中的纣王、《西游记》中的白骨精等。在表演中，反派角色的动作往往比较夸张、粗鲁，体现出其邪恶的本性。'
    },
    god: {
        image: '../图片素材/第三部分/神仙.jpg',
        title: '神仙角色',
        description: '神仙角色在湖湘皮影戏中占有重要地位，多表现为具有超凡能力的天界人物。造型上通常身穿飘逸的长袍，头戴仙冠，手持法器，有时还会有祥云等装饰。常见的神仙角色有玉皇大帝、观音菩萨、太上老君等。在表演中，神仙角色的动作往往比较缓慢、庄重，体现出其超凡脱俗的气质。'
    },
    clown: {
        image: '../图片素材/第三部分/丑角.jpg',
        title: '丑角角色',
        description: '丑角是湖湘皮影戏中用于制造喜剧效果的角色，深受观众喜爱。造型上通常比较滑稽，面部表情夸张，服饰色彩鲜艳。丑角的表演往往幽默风趣，动作夸张，语言诙谐，能够给观众带来欢乐。常见的丑角角色有《刘海砍樵》中的狐仙弟弟、《西游记》中的猪八戒等。'
    }
};

if (characterBtns.length > 0 && characterImage && characterInfo) {
    characterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 移除所有按钮的活跃状态
            characterBtns.forEach(b => {
                b.classList.remove('border-primary');
                b.classList.add('border-gray-300');
            });

            // 添加当前按钮的活跃状态
            btn.classList.remove('border-gray-300');
            btn.classList.add('border-primary');

            // 获取角色数据
            const character = btn.getAttribute('data-character');
            const data = characters[character];

            // 更新角色展示
            characterImage.style.opacity = '0';
            setTimeout(() => {
                characterImage.src = data.image;
                characterImage.alt = data.title;
                characterImage.style.opacity = '1';

                characterInfo.innerHTML = `
                            <h4 class="font-title text-xl text-primary mb-2">${data.title}</h4>
                            <p class="leading-relaxed">${data.description}</p>
                        `;
            }, 300);
        });
    });
}

// 更多作品页面 - 修复了滚动问题
const moreWorksBtn = document.getElementById('more-works-btn');
const moreWorksModal = document.getElementById('more-works-modal');
const closeMoreWorks = document.getElementById('close-more-works');
const modalBackdrop = document.getElementById('modal-backdrop');

// 打开更多作品页面
if (moreWorksBtn && moreWorksModal) {
    moreWorksBtn.addEventListener('click', () => {
        moreWorksModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });
}

// 关闭更多作品页面
function closeMoreWorksModal() {
    if (moreWorksModal) {
        moreWorksModal.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

if (closeMoreWorks) {
    closeMoreWorks.addEventListener('click', closeMoreWorksModal);
}

if (modalBackdrop) {
    modalBackdrop.addEventListener('click', closeMoreWorksModal);
}

// 支持ESC键关闭
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && moreWorksModal && !moreWorksModal.classList.contains('hidden')) {
        closeMoreWorksModal();
    }
});

// 剧目类型分布图表
const ctx = document.getElementById('works-chart');
if (ctx) {
    const worksChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['历史故事', '神话传说', '民间故事', '现代题材', '革命题材'],
            datasets: [{
                data: [35, 25, 20, 10, 10],
                backgroundColor: [
                    '#A62928',
                    '#D4AF37',
                    '#8B4513',
                    '#556B2F',
                    '#2F4F4F'
                ],
                borderColor: '#F5F0E6',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        font: {
                            family: '"ZCOOL XiaoWei", serif',
                            size: 14
                        },
                        padding: 20
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function (context) {
                            return `${context.label}: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}

// 皮影制作绘图功能
const canvas = document.getElementById('drawing-canvas');
if (canvas) {
    const ctxCanvas = canvas.getContext('2d');
    const canvasPlaceholder = document.getElementById('canvas-placeholder');
    const pencilBtn = document.getElementById('pencil-btn');
    const eraserBtn = document.getElementById('eraser-btn');
    const clearBtn = document.getElementById('clear-btn');
    const saveBtn = document.getElementById('save-btn');

    // 设置画布样式
    ctxCanvas.fillStyle = '#F5F0E6';
    ctxCanvas.fillRect(0, 0, canvas.width, canvas.height);
    ctxCanvas.lineWidth = 3;
    ctxCanvas.lineCap = 'round';
    ctxCanvas.lineJoin = 'round';
    ctxCanvas.strokeStyle = '#2D2320';

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;
    let currentTool = 'pencil';

    // 设置初始工具状态
    if (pencilBtn) {
        pencilBtn.classList.add('active');
    }

    // 开始绘制
    function startDrawing(e) {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
        if (canvasPlaceholder) {
            canvasPlaceholder.style.display = 'none';
        }
    }

    // 绘制过程
    function draw(e) {
        if (!isDrawing) return;

        ctxCanvas.beginPath();
        ctxCanvas.moveTo(lastX, lastY);
        ctxCanvas.lineTo(e.offsetX, e.offsetY);
        ctxCanvas.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    // 结束绘制
    function stopDrawing() {
        isDrawing = false;
    }

    // 设置工具
    function setTool(tool) {
        currentTool = tool;

        // 更新按钮状态
        const toolBtns = document.querySelectorAll('.tool-btn');
        toolBtns.forEach(btn => btn.classList.remove('active'));

        if (tool === 'pencil') {
            if (pencilBtn) pencilBtn.classList.add('active');
            ctxCanvas.strokeStyle = '#2D2320';
            ctxCanvas.globalCompositeOperation = 'source-over';
        } else if (tool === 'eraser') {
            if (eraserBtn) eraserBtn.classList.add('active');
            ctxCanvas.strokeStyle = '#F5F0E6';
            ctxCanvas.globalCompositeOperation = 'destination-out';
        }
    }

    // 清除画布
    function clearCanvas() {
        ctxCanvas.fillStyle = '#F5F0E6';
        ctxCanvas.fillRect(0, 0, canvas.width, canvas.height);
        if (canvasPlaceholder) {
            canvasPlaceholder.style.display = 'flex';
        }
    }

    // 保存设计
    function saveDesign() {
        // 检查画布是否有绘制内容（可选）
        const isCanvasEmpty = ctxCanvas.getImageData(0, 0, canvas.width, canvas.height).data.every(value => value === 0);
        if (isCanvasEmpty) {
            alert('画布为空，无需保存！');
            return;
        }

        // 将画布内容转换为图片数据URL（PNG格式）
        const dataURL = canvas.toDataURL('image/png');

        // 创建一个隐藏的下载链接
        const downloadLink = document.createElement('a');
        downloadLink.href = dataURL;

        // 设置文件名（可自定义，例如如加入时间戳避免重名）
        const timestamp = new Date().getTime();
        downloadLink.download = `皮影设计_${timestamp}.png`;

        // 触发点击下载
        document.body.appendChild(downloadLink);
        downloadLink.click();

        // 清理临时元素
        document.body.removeChild(downloadLink);

        // 提示用户保存成功
        alert('皮影设计已保存为PNG图片！');
    }

    // 事件监听
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mouseout', stopDrawing);

    // 触摸事件支持
    canvas.addEventListener('touchstart', (e) => {
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousedown', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
        e.preventDefault();
    });

    canvas.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        const mouseEvent = new MouseEvent('mousemove', {
            clientX: touch.clientX,
            clientY: touch.clientY
        });
        canvas.dispatchEvent(mouseEvent);
        e.preventDefault();
    });

    canvas.addEventListener('touchend', () => {
        const mouseEvent = new MouseEvent('mouseup', {});
        canvas.dispatchEvent(mouseEvent);
    });

    // 工具按钮事件
    if (pencilBtn) {
        pencilBtn.addEventListener('click', () => setTool('pencil'));
    }

    if (eraserBtn) {
        eraserBtn.addEventListener('click', () => setTool('eraser'));
    }

    if (clearBtn) {
        clearBtn.addEventListener('click', clearCanvas);
    }

    if (saveBtn) {
        saveBtn.addEventListener('click', saveDesign);
    }
}

// 作品数据
const artworks = [
    {
        title: "三打白骨精",
        image: "../图片素材/代表作品/西游记.jpg",
        description: "经典神话故事《西游记》中的著名情节"
    },
    {
        title: "哪吒",
        image: "../图片素材/代表作品/哪吒.jpg",
        description: "中国古代神话中的少年英雄"
    },
    {
        title: "嫦娥奔月",
        image: "../图片素材/代表作品/嫦娥奔月.jpg",
        description: "中国传统神话故事"
    },
    {
        title: "武松打虎",
        image: "../图片素材/代表作品/武松打虎·.jpg",
        description: "《水浒传》中的经典故事"
    },
    {
        title: "白蛇传",
        image: "../图片素材/代表作品/白蛇传.jpg",
        description: "中国四大民间传说之一"
    }
];

// 轮播图功能
let currentIndex = 0;
let isPlaying = true;
let direction = 1; // 1: 正向(左到右), -1: 反向(右到左)
let interval;

// 初始化轮播
function initCarousel() {
    const carouselContainer = document.getElementById('carousel');
    const indicatorsContainer = document.getElementById('indicators-container');

    if (!carouselContainer || !indicatorsContainer) return;

    // 创建轮播项目
    artworks.forEach((artwork, index) => {
        const item = document.createElement('div');
        item.className = `carousel-item absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-700`;
        item.dataset.index = index;

        // 设置初始样式
        updateItemStyle(item, index);

        item.innerHTML = `
            <div class="art-card w-full h-full">
                <img src="${artwork.image}" alt="${artwork.title}" class="w-full h-full object-cover rounded-lg">
                <div class="art-title">
                    <h3 class="text-xl font-bold">${artwork.title}</h3>
                    <p class="text-sm">${artwork.description}</p>
                </div>
            </div>
        `;

        carouselContainer.appendChild(item);

        // 创建指示器
        const indicator = document.createElement('div');
        indicator.className = `indicator w-3 h-3 rounded-full bg-primary/40 cursor-pointer transition-all duration-300`;
        indicator.dataset.index = index;
        indicator.addEventListener('click', () => {
            goToIndex(index);
            resetAutoPlay();
        });
        indicatorsContainer.appendChild(indicator);
    });

    // 设置初始指示器状态
    updateIndicators();

    // 开始自动播放
    startAutoPlay();

    // 事件监听
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const togglePlayBtn = document.getElementById('toggle-play');

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            move(-1);
            resetAutoPlay();
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            move(1);
            resetAutoPlay();
        });
    }

    if (togglePlayBtn) {
        togglePlayBtn.addEventListener('click', togglePlay);
    }

    // 窗口大小改变时重新计算样式
    window.addEventListener('resize', updateAllItemsStyle);
}

// 更新单个项目样式
function updateItemStyle(item, index) {
    const distance = Math.abs(index - currentIndex);
    let scale, zIndex, opacity, left;

    // 计算每个项目的样式，中间项目最大
    if (distance === 0) {
        // 中间项目
        scale = 1;
        zIndex = 5;
        opacity = 1;
        left = '50%';
    } else if (distance === 1 || distance === artworks.length - 1) {
        // 相邻项目
        scale = 0.8;
        zIndex = 4;
        opacity = 0.7;
        if (index < currentIndex || (currentIndex === 0 && index === artworks.length - 1)) {
            left = '25%';
        } else {
            left = '75%';
        }
    } else if (distance === 2 || distance === artworks.length - 2) {
        // 次相邻项目
        scale = 0.6;
        zIndex = 3;
        opacity = 0.5;
        if (index < currentIndex || (currentIndex <= 1 && index >= artworks.length - 2)) {
            left = '10%';
        } else {
            left = '90%';
        }
    } else {
        // 其他项目隐藏
        scale = 0;
        zIndex = 1;
        opacity = 0;
        left = '50%';
    }

    // 应用样式
    item.style.transform = `translate(-50%, -50%) scale(${scale})`;
    item.style.zIndex = zIndex;
    item.style.opacity = opacity;
    item.style.left = left;
    item.style.width = distance === 0 ? '400px' : distance === 1 ? '300px' : '200px';
    item.style.height = distance === 0 ? '300px' : distance === 1 ? '225px' : '150px';
}

// 更新所有项目样式
function updateAllItemsStyle() {
    const items = document.querySelectorAll('#carousel .carousel-item');
    items.forEach((item, index) => {
        updateItemStyle(item, index);
    });
}

// 移动轮播
function move(step) {
    currentIndex = (currentIndex + step + artworks.length) % artworks.length;
    updateAllItemsStyle();
    updateIndicators();

    // 检查是否需要改变方向
    if (currentIndex === 0 && direction === -1) {
        direction = 1;
    } else if (currentIndex === artworks.length - 1 && direction === 1) {
        direction = -1;
    }
}

// 直接跳转到指定索引
function goToIndex(index) {
    currentIndex = index;
    updateAllItemsStyle();
    updateIndicators();

    // 更新方向
    direction = index > currentIndex ? 1 : -1;
}

// 更新指示器状态
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
            indicator.classList.add('bg-primary', 'w-8');
            indicator.classList.remove('bg-primary/40', 'w-3');
        } else {
            indicator.classList.add('bg-primary/40', 'w-3');
            indicator.classList.remove('bg-primary', 'w-8');
        }
    });
}

// 开始自动播放
function startAutoPlay() {
    interval = setInterval(() => {
        move(direction);
    }, 3000); // 每3秒切换一次
}

// 停止自动播放
function stopAutoPlay() {
    clearInterval(interval);
}

// 重置自动播放计时器
function resetAutoPlay() {
    if (isPlaying) {
        stopAutoPlay();
        startAutoPlay();
    }
}

// 切换播放/暂停状态
function togglePlay() {
    isPlaying = !isPlaying;
    const togglePlayBtn = document.getElementById('toggle-play');
    if (isPlaying) {
        startAutoPlay();
        togglePlayBtn.innerHTML = '<i class="fa fa-pause mr-2"></i><span>暂停播放</span>';
    } else {
        stopAutoPlay();
        togglePlayBtn.innerHTML = '<i class="fa fa-play mr-2"></i><span>开始播放</span>';
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

    // 初始化轮播图
    initCarousel();
});

// 添加卡片交互效果
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        // 添加鼠标悬停效果
        card.addEventListener('mouseenter', function () {
            this.style.transform = 'translateY(-10px)';
        });

        // 添加鼠标离开效果
        card.addEventListener('mouseleave', function () {
            this.style.transform = 'translateY(0)';
        });
    });
});