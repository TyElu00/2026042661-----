// Unity体验功能
const launchBtn = document.getElementById('launch-experience-btn');
const startBtn = document.getElementById('start-experience-btn');
const loadingScreen = document.getElementById('unity-loading');
const loadingBar = document.getElementById('loading-bar');
const loadingText = document.getElementById('loading-text');
const unityContent = document.getElementById('unity-content');
const unityPlaceholder = document.querySelector('.unity-placeholder');

function startUnityExperience() {
    // 隐藏占位符，显示加载屏幕
    unityPlaceholder.style.display = 'none';
    loadingScreen.style.display = 'flex';

    // 模拟加载过程
    let progress = 0;
    const interval = setInterval(() => {
        progress += Math.random() * 10;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);

            // 加载完成后显示内容
            setTimeout(() => {
                loadingScreen.style.display = 'none';
                unityContent.style.display = 'flex';
            }, 500);
        }

        loadingBar.style.width = progress + '%';

        // 更新加载文本
        if (progress < 30) {
            loadingText.textContent = "初始化环境...";
        } else if (progress < 60) {
            loadingText.textContent = "加载资源...";
        } else if (progress < 90) {
            loadingText.textContent = "编译脚本...";
        } else {
            loadingText.textContent = "准备就绪...";
        }
    }, 300);
}

function simulateAction(action) {
    alert(`执行操作: ${action}`);
    // 在实际应用中，这里会调用Unity中的方法
}

function exitExperience() {
    unityContent.style.display = 'none';
    unityPlaceholder.style.display = 'flex';
}

// 添加事件监听器
launchBtn.addEventListener('click', startUnityExperience);
startBtn.addEventListener('click', startUnityExperience);