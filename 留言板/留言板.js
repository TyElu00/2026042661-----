// 留言板功能
const messageForm = document.getElementById('message-form');
const messagesContainer = document.getElementById('messages-container');

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;

    if (username && message) {
        // 创建新的留言卡片
        const messageCard = document.createElement('div');
        messageCard.className = 'message-card';

        // 获取当前时间
        const now = new Date();
        const timestamp = `${now.getFullYear()}年${now.getMonth() + 1}月${now.getDate()}日`;

        messageCard.innerHTML = `
                    <h4>${username}</h4>
                    <p>${message}</p>
                    <p class="timestamp">${timestamp}</p>
                `;

        // 添加到留言展示区（置顶）
        messagesContainer.insertBefore(messageCard, messagesContainer.firstChild);

        // 清空表单
        messageForm.reset();

        // 滚动到新留言
        messageCard.scrollIntoView({ behavior: 'smooth' });
    }
});