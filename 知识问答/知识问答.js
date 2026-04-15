// 知识问答功能
const questions = [
    {
        question: "中国皮影戏中，哪个地区的皮影以驴皮为主要制作材料？",
        options: [
            "河北唐山",
            "湖南长沙",
            "四川成都",
            "广东潮州"
        ],
        correct: "A",
        explanation: "河北唐山皮影戏以驴皮为主要制作材料，驴皮质地坚韧、透明度好，经过加工后能呈现细腻的色彩和纹理，是当地皮影的显著特色。"
    },
    {
        question: "中国皮影戏被列入第一批国家级非物质文化遗产名录是在哪一年？",
        options: [
            "2001年",
            "2006年",
            "2011年",
            "2016年"
        ],
        correct: "B",
        explanation: "2006年，皮影戏被列入第一批国家级非物质文化遗产名录，包括唐山皮影、陕西皮影、四川皮影等多个地方流派均被纳入保护范围。"
    },
    {
        question: "以下哪部作品是中国皮影戏的经典传统剧目？",
        options: [
            "《白蛇传》",
            "《茶馆》",
            "《雷雨》",
            "《白毛女》"
        ],
        correct: "A",
        explanation: "《白蛇传》是中国皮影戏广泛流传的经典剧目，各地皮影戏班多有演绎，通过光影艺术展现白娘子与许仙的爱情故事。"
    },
    {
        question: "皮影戏的表演形式核心是利用什么原理形成影像？",
        options: [
            "光的折射",
            "光的反射",
            "光的直线传播",
            "光的色散"
        ],
        correct: "C",
        explanation: "皮影戏利用光的直线传播原理，通过灯光照射影人，在幕布上形成投影来进行表演，这是其最核心的艺术表现方式。"
    },
    {
        question: "下列哪项不属于中国皮影戏的主要地域流派？",
        options: [
            "陕西华县皮影",
            "山西孝义皮影",
            "浙江昆曲皮影",
            "甘肃环县皮影"
        ],
        correct: "C",
        explanation: "昆曲是戏曲剧种，并非皮影戏流派。中国皮影戏主要地域流派包括陕西华县、山西孝义、甘肃环县、河北唐山、四川阆中等。"
    },
    {
        question: "皮影戏在不同历史时期有多种别称，下列哪项不是其别称？",
        options: [
            "灯影戏",
            "影戏",
            "纸影戏",
            "木偶戏"
        ],
        correct: "D",
        explanation: "木偶戏是通过操纵木偶进行表演的艺术形式，与皮影戏（通过光影投影）属于不同的民间艺术类别，其余三项均为皮影戏的历史别称。"
    },
    {
        question: "陕西皮影戏的唱腔主要受到哪种地方戏曲的影响？",
        options: [
            "秦腔",
            "越剧",
            "粤剧",
            "黄梅戏"
        ],
        correct: "A",
        explanation: "陕西皮影戏的唱腔深受秦腔影响，具有高亢激昂、节奏鲜明的特点，融合了当地民间音乐元素，形成了独特的艺术风格。"
    },
    {
        question: "传统皮影戏影人的雕刻工艺中，最具代表性的技法是？",
        options: [
            "镂空雕刻",
            "浮雕",
            "圆雕",
            "线刻"
        ],
        correct: "A",
        explanation: "镂空雕刻是皮影影人制作最具代表性的技法，通过在皮革上雕刻出各种镂空图案，使光影投射时能形成层次丰富的影像效果。"
    },
    {
        question: "下列哪项是皮影戏的传统伴奏乐器？",
        options: [
            "架子鼓",
            "三弦",
            "电子琴",
            "小提琴"
        ],
        correct: "B",
        explanation: "三弦是皮影戏常见的传统伴奏乐器之一，此外还有板胡、唢呐、锣鼓等民族乐器，架子鼓、电子琴、小提琴均为现代或西洋乐器。"
    },
    {
        question: "2011年，中国皮影戏被列入联合国教科文组织的哪项名录？",
        options: [
            "世界文化遗产",
            "人类非物质文化遗产代表作名录",
            "世界自然遗产",
            "濒危世界遗产名录"
        ],
        correct: "B",
        explanation: "2011年，中国皮影戏被列入联合国教科文组织'人类非物质文化遗产代表作名录'，成为全人类共同的文化财富。"
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];

const questionContainer = document.getElementById('question-container');
const feedbackContainer = document.getElementById('feedback-container');
const completedContainer = document.getElementById('completed-container');
const prevQuestionBtn = document.getElementById('prev-question');
const nextQuestionBtn = document.getElementById('next-question');
const continueBtn = document.getElementById('continue-btn');
const restartQuizBtn = document.getElementById('restart-quiz');
const quizProgress = document.getElementById('quiz-progress');
const currentQuestionText = document.getElementById('current-question');
const scoreText = document.getElementById('score');
const correctFeedback = document.getElementById('correct-feedback');
const incorrectFeedback = document.getElementById('incorrect-feedback');
const explanationText = document.getElementById('explanation');
const correctAnswerText = document.getElementById('correct-answer');
const confettiContainer = document.getElementById('confetti-container');
const cryContainer = document.getElementById('cry-container');

// 加载问题
function loadQuestion(index) {
    const question = questions[index];

    // 更新问题编号
    currentQuestionText.textContent = `第 ${index + 1} 题`;

    // 更新进度条
    quizProgress.style.width = `${(index + 1) / questions.length * 100}%`;

    // 清空之前的答案选择
    document.getElementById('answers').innerHTML = '';

    // 更新问题内容
    questionContainer.querySelector('h3').textContent = question.question;
    questionContainer.querySelector('.flex span').textContent = index + 1;

    // 添加选项
    question.options.forEach((option, i) => {
        const optionLetter = String.fromCharCode(65 + i);
        const optionElement = document.createElement('div');
        optionElement.className = 'answer-option p-4 border border-gray-300 rounded-lg hover:border-primary hover:bg-primary/5 transition-colors cursor-pointer';
        optionElement.innerHTML = `
                    <label class="flex items-center cursor-pointer">
                        <input type="radio" name="q${index}" value="${optionLetter}" class="mr-3">
                        <span>${option}</span>
                    </label>
                `;
        document.getElementById('answers').appendChild(optionElement);
    });

    // 更新按钮状态
    prevQuestionBtn.disabled = index === 0;

    if (index === questions.length - 1) {
        nextQuestionBtn.textContent = '提交答案';
        nextQuestionBtn.innerHTML = '提交答案 <i class="fa fa-check ml-2"></i>';
    } else {
        nextQuestionBtn.textContent = '下一题';
        nextQuestionBtn.innerHTML = '下一题 <i class="fa fa-chevron-right ml-2"></i>';
    }
}

// 检查答案
function checkAnswer() {
    const selectedOption = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (!selectedOption) {
        alert('请选择一个答案');
        return false;
    }

    const question = questions[currentQuestion];
    const isCorrect = selectedOption.value === question.correct;

    // 更新解释文本
    explanationText.textContent = question.explanation;
    correctAnswerText.innerHTML = `正确答案是：${question.options[question.correct.charCodeAt(0) - 65]}。${question.explanation}`;

    // 记录用户答案
    userAnswers[currentQuestion] = {
        selected: selectedOption.value,
        isCorrect: isCorrect
    };

    // 清除之前的特效
    confettiContainer.innerHTML = '';
    cryContainer.innerHTML = '';

    // 显示相应的反馈
    if (isCorrect) {
        correctFeedback.classList.remove('hidden');
        incorrectFeedback.classList.add('hidden');
        createConfetti();
        score++;
    } else {
        correctFeedback.classList.add('hidden');
        incorrectFeedback.classList.remove('hidden');
        createCryEmojis();
    }

    // 切换到反馈界面
    questionContainer.classList.add('hidden');
    feedbackContainer.classList.remove('hidden');

    return true;
}

// 创建彩带效果
function createConfetti() {
    // 创建100个彩带
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';

        // 随机颜色
        const colors = ['#A62928', '#D4AF37', '#8B4513', '#556B2F', '#2F4F4F', '#FFFFFF'];
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // 随机位置
        confetti.style.left = `${Math.random() * 100}vw`;

        // 随机大小
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;

        // 随机旋转
        confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

        // 随机动画延迟和持续时间
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        confetti.style.animationDuration = `${Math.random() * 3 + 2}s`;

        confettiContainer.appendChild(confetti);
    }
}

// 创建哭脸表情
function createCryEmojis() {
    // 创建10个哭脸表情
    for (let i = 0; i < 50; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'cry-emoji';
        emoji.textContent = '😢';

        // 随机位置
        emoji.style.left = `${Math.random() * 80 + 10}vw`;
        emoji.style.top = `${Math.random() * 30 + 20}vh`;

        // 随机大小
        const size = Math.random() * 16 + 16;
        emoji.style.fontSize = `${size}px`;

        // 随机动画延迟
        emoji.style.animationDelay = `${Math.random() * 1}s`;

        cryContainer.appendChild(emoji);
    }
}

// 下一题按钮事件
nextQuestionBtn.addEventListener('click', () => {
    if (currentQuestion < questions.length) {
        if (checkAnswer()) {
            // 答案已检查，无需额外操作
        }
    }
});

// 上一题按钮事件
prevQuestionBtn.addEventListener('click', () => {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
});

// 继续按钮事件
continueBtn.addEventListener('click', () => {
    // 隐藏反馈界面
    feedbackContainer.classList.add('hidden');
    correctFeedback.classList.add('hidden');
    incorrectFeedback.classList.add('hidden');

    currentQuestion++;

    if (currentQuestion < questions.length) {
        // 加载极题
        questionContainer.classList.remove('hidden');
        loadQuestion(currentQuestion);
    } else {
        // 所有问题完成
        scoreText.textContent = `${score}/${questions.length}`;
        completedContainer.classList.remove('hidden');
    }
});

// 重新开始按钮事件
restartQuizBtn.addEventListener('click', () => {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];

    completedContainer.classList.add('hidden');
    feedbackContainer.classList.add('hidden');
    questionContainer.classList.remove('hidden');

    loadQuestion(currentQuestion);
});

// 初始化问答
loadQuestion(currentQuestion);

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