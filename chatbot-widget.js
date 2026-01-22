// AI Chatbot Widget - Floating Style
// System Prompt với kiến thức về Đình Thần An Khánh
const SYSTEM_PROMPT = `Bạn là AI chatbot chuyên gia về Đình Thần An Khánh tại TP.HCM, Việt Nam. Bạn có kiến thức chuyên sâu và toàn diện về di tích này.

BẠN CÓ THỂ TRẢ LỜI MỌI CÂU HỎI - không chỉ về Đình Thần An Khánh mà còn về bất kỳ chủ đề nào người dùng hỏi. Tuy nhiên, khi được hỏi về Đình Thần An Khánh, bạn phải sử dụng kiến thức chuyên sâu dưới đây.

=== KIẾN THỨC CHUYÊN SÂU VỀ ĐÌNH THẦN AN KHÁNH ===

I. TỔNG QUAN:
- Địa chỉ: Số 12/1 đường Lương Định Của, P. Thủ Thiêm, TP Thủ Đức, TP.HCM
- Vị trí: Cạnh Nhà hát Thủ Thiêm, ven sông Sài Gòn, nhìn thẳng về trung tâm TP (tòa Bitexco)
- Một trong ba ngôi đình làng chính của vùng Thủ Thiêm xưa
- Lịch sử: Hơn 300 năm (cuối thế kỷ 17 - đầu thế kỷ 18, khoảng 1679-1725)
- Công nhận: Di tích lịch sử - văn hóa cấp thành phố (30/3/2025)
- Thành hoàng: Trần Thống Quân Hà Quảng Thống sư

II. LỊCH SỬ:
- Thành lập: Cuối thế kỷ 17 - đầu thế kỷ 18
- Mảnh lụa sắc phong của vua Tự Đức năm 1832
- Kiến trúc gốc: Nhà tứ trụ, mái ngói âm dương, khung gỗ lim căm xe
- 2014: Di dời để làm Khu đô thị mới Thủ Thiêm
- Cuối 2022: Khởi công phục dựng
- 28/4/2023: Khánh thành sau 345 ngày xây dựng
- Kinh phí: Hơn 129 tỷ đồng (ngân sách TP.HCM)

III. KIẾN TRÚC:
- Tổng diện tích: ~1.200 m² (gấp đôi đình cũ)
- Chính điện: 381 m²
- Công trình phụ trợ: ~200 m²
- Sân vườn và cây xanh: 684 m²
- Phong cách: Đình tứ trụ đặc trưng Nam Bộ
- Vật liệu: Gỗ lim và căm xe quý hiếm, mái ngói âm dương
- Chi tiết: Cột chạm khắc rồng phượng, bình phong thờ thần hổ, tam quan uy nghi

IV. HIỆN VẬT QUÝ:
- Sắc phong từ năm 1832 (thực tế là sắc tự năm 1917)
- Ba hoành phi sơn son thếp vàng (1918-1950): "Quốc An Gia Khánh", "Vạn Vật Hàm Hanh", "Uy Linh Hiện Hách"
- Bình phong thờ thần hổ
- Cặp tượng ngựa (mã) cổ
- Chiếc trống cổ
- Ấn "Quan Thánh đế quân linh bửu"
- Câu đối cổ

V. LỄ HỘI VÀ NGHI LỄ:
- Lễ Kỳ Yên (lễ chính): Rằm tháng 11 âm lịch, thu hút hàng trăm người
- Nghi thức: Rước sắc thần, Lễ Túc yết, Đoàn cả, Lễ Tiền hiền - Hậu hiền
- Nghệ thuật: Hát bội, đờn ca tài tử (UNESCO), múa lân
- Lễ khác: Vía Thành hoàng hằng tháng, Rằm và mùng 1, Tết, cúng đầu xuân

VI. DU LỊCH:
- Giao thông: Đường Lương Định Của, Cầu Thủ Thiêm, có thể đi đường thủy qua sông Sài Gòn
- Giờ mở cửa: 8h-11h và 14h-18h hằng ngày
- Vé: Miễn phí
- Bãi đỗ xe: Có sẵn trong khuôn viên và khu đô thị
- Tiện nghi: Nhà vệ sinh, khu nghỉ chân (Tả vu - Hữu vu), bảng chỉ dẫn
- Hướng dẫn: Ban Quý Tế địa phương (miễn phí)

VII. GIÁ TRỊ VĂN HÓA:
- Chứng nhân lịch sử 300 năm khai phá Thủ Thiêm
- Kiến trúc đình tứ trụ tiêu biểu Nam Bộ
- Trung tâm tín ngưỡng Thành hoàng cộng đồng
- Linh hồn của làng xóm, gắn kết cộng đồng
- Điểm giáo dục truyền thống cho thế hệ trẻ
- Biểu tượng giao thoa hiện đại và truyền thống

=== CẤU TRÚC WEBSITE ===

VIII. ĐIỀU HƯỚNG WEBSITE:
**Trang chủ: index.html**
- Hero section: Giới thiệu Đình Thần An Khánh
- Phần Bài viết: Carousel hình ảnh đẹp về đình
- Phần Tìm Hiểu: 3 mảng Lịch sử, Du lịch, Văn hóa
- Phần Về Chúng Tôi: Video giới thiệu dự án
- Phần Bình luận: Chia sẻ của cộng đồng

**Bài viết: baiviet.html - Có 4 mục chính:**
- baiviet.html#tongquan → Giới thiệu tổng quan về Đình Thần An Khánh
- baiviet.html#lichsu → Lịch sử hình thành hơn 300 năm, kiến trúc, sắc phong
- baiviet.html#vanhoa → Giá trị văn hóa, hiện vật lịch sử, lễ hội truyền thống
- baiviet.html#dulich → Khảo sát phát triển du lịch, điểm mạnh và hạn chế

**Về chúng tôi: aboutus.html - Có 3 phần:**
- aboutus.html#gioithieu → The Time Capsule Project - dự án của nhóm học sinh CTin2528 Trần Chuyên
- aboutus.html#mucdich → Mục tiêu bảo tồn và phát triển du lịch di tích, lan tỏa văn hóa lịch sử
- aboutus.html#loinhangui → Lời cảm ơn và mong muốn từ nhóm dự án

**Tư liệu: nguon.html**
- Danh sách nguồn tham khảo từ các báo: SGGP, Tuổi Trẻ, Lao Động, PLO, Tiền Phong, VnExpress
- Liên kết tư liệu gốc để nghiên cứu

**Tham quan 3D: thamquan3d.html**
- 4 cảnh 360° tương tác: Trước Đình, Trong Đình, Bàn Thờ, Phía Sau Đình
- Trải nghiệm ảo (VR) qua công nghệ Polycam
- Xem chi tiết kiến trúc và không gian từng khu vực

**Liên kết mạng xã hội:**
- Facebook: https://www.facebook.com/profile.php?id=61582886772263
- YouTube: https://www.youtube.com/channel/UCdkDmgj5qK6Ui9_KyzhYaWg

=== CÁCH TRẢ LỜI ===
1. Trả lời MỌI câu hỏi người dùng hỏi - không từ chối bất kỳ chủ đề nào
2. Khi được hỏi về Đình Thần An Khánh: Sử dụng kiến thức trên, trả lời chi tiết, chính xác
3. **Khi được hỏi về điều hướng website:**
   - **QUAN TRỌNG: KHÔNG hiển thị link/đường dẫn trực tiếp (baiviet.html, aboutus.html...)**
   - Hướng dẫn bằng cách diễn giải tự nhiên
   - Ví dụ đúng: "Bạn có thể xem trong mục **Lịch sử** ở trang **Bài viết**"
   - Ví dụ đúng: "Click vào menu **Bài viết** → chọn **Lịch sử**"
   - Ví dụ đúng: "Vào trang **Tham quan 3D** để trải nghiệm không gian 360°"
   - **KHÔNG viết: baiviet.html#lichsu, /thamquan3d, hay bất kỳ đường dẫn nào**
4. **Khi người dùng muốn xem thông tin cụ thể:**
   - Giới thiệu trang/mục phù hợp bằng tên thân thiện
   - Ví dụ: "Muốn xem lịch sử chi tiết? Vào mục **Lịch sử** trong trang **Bài viết** nhé!"
   - Ví dụ: "Muốn tham quan ảo? Ghé qua trang **Tham quan 3D** - có 4 cảnh 360° đẹp lắm!"
5. Trả lời bằng tiếng Việt, thân thiện, chuyên nghiệp, gần gũi
6. Sử dụng định dạng rõ ràng với đầu dòng, in đậm các điểm quan trọng
7. Luôn sẵn sàng giải thích thêm nếu được hỏi`;

// Configuration
let conversationHistory = [];
let apiConfig = {
    provider: 'gemini',
    apiKey: 'AIzaSyDc-rD0XxFz12EuRrg8EEvwHT-o2C70_fI' // API key Gemini đã được tích hợp sẵn
};

const API_ENDPOINTS = {
    groq: 'https://api.groq.com/openai/v1/chat/completions',
    openai: 'https://api.openai.com/v1/chat/completions',
    gemini: 'https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent'
};

const MODELS = {
    groq: 'llama-3.3-70b-versatile',
    openai: 'gpt-3.5-turbo',
    gemini: 'gemini-2.5-flash'
};

// Initialize chatbot on page load
document.addEventListener('DOMContentLoaded', function() {
    // Create widget HTML
    createChatbotWidget();

    // Load saved settings
    loadSettings();

    // Setup event listeners
    setupEventListeners();
});

function createChatbotWidget() {
    const widgetHTML = `
        <!-- Floating Chat Button -->
        <button id="chatbot-toggle-btn" class="chatbot-floating-btn" aria-label="Mở chatbot">
            <i class="fas fa-comments"></i>
            <span class="chatbot-badge">AI</span>
        </button>

        <!-- Chat Window -->
        <div id="chatbot-window" class="chatbot-window">
            <div class="chatbot-header">
                <div class="chatbot-header-left">
                    <i class="fas fa-robot"></i>
                    <div>
                        <h3>AI Chatbot</h3>
                        <div class="chatbot-status">
                            <span class="status-dot" id="chatbot-status-dot"></span>
                            <span id="chatbot-status-text">Chưa kết nối</span>
                        </div>
                    </div>
                </div>
                <div class="chatbot-header-right">
                    <button onclick="openChatbotSettings()" class="chatbot-icon-btn" title="Cài đặt">
                        <i class="fas fa-cog"></i>
                    </button>
                    <button onclick="toggleChatbot()" class="chatbot-icon-btn" title="Đóng">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
            </div>

            <div class="chatbot-quick-buttons">
                <button onclick="sendQuickMessage('Đình Thần An Khánh ở đâu?')" class="chatbot-quick-btn">
                    📍 Vị trí
                </button>
                <button onclick="sendQuickMessage('Tôi muốn xem tham quan 3D')" class="chatbot-quick-btn">
                    🏛️ Tham quan 3D
                </button>
                <button onclick="sendQuickMessage('Hướng dẫn sử dụng website')" class="chatbot-quick-btn">
                    🗺️ Hướng dẫn
                </button>
            </div>

            <div class="chatbot-messages" id="chatbot-messages">
                <div class="chatbot-message bot">
                    <div class="message-avatar">🤖</div>
                    <div class="message-content">
                        <strong>Xin chào! Tôi là AI Chatbot 🏛️</strong><br><br>
                        Tôi có thể giúp bạn:<br><br>
                        📜 <strong>Về Đình Thần An Khánh:</strong> Lịch sử 300 năm, kiến trúc, lễ hội, du lịch, văn hóa...<br>
                        🗺️ <strong>Hướng dẫn sử dụng website:</strong> Tìm thông tin, điều hướng các trang<br>
                        🌍 <strong>Chủ đề khác:</strong> Lập trình, toán học, lịch sử, bất cứ điều gì!<br><br>
                        💡 <strong>Thử hỏi tôi:</strong><br>
                        • "Đình ở đâu?"<br>
                        • "Tôi muốn xem tham quan 3D"<br>
                        • "Lịch sử đình như thế nào?"
                    </div>
                </div>
                <div class="chatbot-typing" id="chatbot-typing">
                    <div class="message-avatar">🤖</div>
                    <div class="typing-indicator">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>

            <div class="chatbot-input-area">
                <input
                    type="text"
                    id="chatbot-input"
                    placeholder="Hỏi tôi bất cứ điều gì..."
                    onkeypress="handleChatbotKeyPress(event)"
                />
                <button onclick="sendChatbotMessage()" id="chatbot-send-btn" class="chatbot-send-btn">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>

        <!-- Settings Modal -->
        <div id="chatbot-settings-modal" class="chatbot-modal">
            <div class="chatbot-modal-content">
                <div class="chatbot-modal-header">
                    <h3>⚙️ Cài đặt API</h3>
                    <button onclick="closeChatbotSettings()" class="chatbot-icon-btn">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="chatbot-modal-body">
                    <div class="form-group">
                        <label>Chọn nhà cung cấp AI:</label>
                        <select id="chatbot-api-provider" onchange="updateChatbotApiInfo()">
                            <option value="groq">Groq (Khuyến nghị - Miễn phí & Nhanh nhất)</option>
                            <option value="openai">OpenAI (ChatGPT)</option>
                            <option value="gemini">Google Gemini</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>API Key:</label>
                        <input type="password" id="chatbot-api-key" placeholder="Nhập API key..."/>
                    </div>
                    <button onclick="saveChatbotSettings()" class="chatbot-save-btn">
                        💾 Lưu cài đặt
                    </button>
                    <div class="chatbot-info-box" id="chatbot-api-info">
                        <strong>🚀 Groq API - Miễn phí & Siêu nhanh!</strong><br><br>
                        <strong>Cách lấy API key:</strong><br>
                        1. Truy cập: <a href="https://console.groq.com" target="_blank">console.groq.com</a><br>
                        2. Đăng ký miễn phí (Gmail)<br>
                        3. Vào "API Keys" → "Create API Key"<br>
                        4. Copy và dán vào ô trên<br><br>
                        ✅ Miễn phí 100%<br>
                        ✅ Không cần thẻ tín dụng<br>
                        ✅ Siêu nhanh (1-2 giây)
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', widgetHTML);
}

function setupEventListeners() {
    const toggleBtn = document.getElementById('chatbot-toggle-btn');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleChatbot);
    }
}

function toggleChatbot() {
    const chatWindow = document.getElementById('chatbot-window');
    const toggleBtn = document.getElementById('chatbot-toggle-btn');

    if (chatWindow && toggleBtn) {
        chatWindow.classList.toggle('show');
        toggleBtn.classList.toggle('hide');

        if (chatWindow.classList.contains('show')) {
            document.getElementById('chatbot-input')?.focus();
        }
    }
}

function loadSettings() {
    const saved = localStorage.getItem('chatbot_config');
    if (saved) {
        try {
            const savedConfig = JSON.parse(saved);
            // Chỉ ghi đè nếu có API key trong localStorage
            if (savedConfig.apiKey) {
                apiConfig = savedConfig;
            }
        } catch (e) {
            console.error('Error loading settings:', e);
        }
    }
    // Luôn cập nhật status sau khi load
    updateChatbotStatus();
}

function updateChatbotStatus() {
    const statusDot = document.getElementById('chatbot-status-dot');
    const statusText = document.getElementById('chatbot-status-text');

    if (statusDot && statusText) {
        if (apiConfig.apiKey) {
            statusDot.classList.add('connected');
            statusText.textContent = `Đã kết nối ${apiConfig.provider.toUpperCase()}`;
        } else {
            statusDot.classList.remove('connected');
            statusText.textContent = 'Chưa kết nối';
        }
    }
}

function openChatbotSettings() {
    const modal = document.getElementById('chatbot-settings-modal');
    const provider = document.getElementById('chatbot-api-provider');
    const apiKey = document.getElementById('chatbot-api-key');

    if (modal && provider && apiKey) {
        provider.value = apiConfig.provider;
        apiKey.value = apiConfig.apiKey;
        updateChatbotApiInfo();
        modal.classList.add('show');
    }
}

function closeChatbotSettings() {
    const modal = document.getElementById('chatbot-settings-modal');
    if (modal) {
        modal.classList.remove('show');
    }
}

function updateChatbotApiInfo() {
    const provider = document.getElementById('chatbot-api-provider')?.value;
    const infoBox = document.getElementById('chatbot-api-info');

    if (!infoBox) return;

    const infos = {
        groq: `<strong>🚀 Groq API - Miễn phí & Siêu nhanh!</strong><br><br>
               <strong>Cách lấy API key:</strong><br>
               1. Truy cập: <a href="https://console.groq.com" target="_blank">console.groq.com</a><br>
               2. Đăng ký miễn phí (Gmail)<br>
               3. Vào "API Keys" → "Create API Key"<br>
               4. Copy và dán vào ô trên<br><br>
               ✅ Miễn phí 100%<br>
               ✅ Không cần thẻ tín dụng<br>
               ✅ Siêu nhanh (1-2 giây)`,
        openai: `<strong>🤖 OpenAI API</strong><br><br>
                 1. Truy cập: <a href="https://platform.openai.com" target="_blank">platform.openai.com</a><br>
                 2. Đăng ký/Đăng nhập<br>
                 3. Vào "API Keys" → "Create new secret key"<br><br>
                 ⚠️ Có phí (~$0.002/1000 tokens)<br>
                 ⚠️ Cần thẻ tín dụng`,
        gemini: `<strong>🌟 Google Gemini API</strong><br><br>
                 1. Truy cập: <a href="https://makersuite.google.com/app/apikey" target="_blank">Google AI Studio</a><br>
                 2. Đăng nhập Google<br>
                 3. Click "Create API Key"<br><br>
                 ✅ Miễn phí (60 requests/phút)<br>
                 ✅ Không cần thẻ tín dụng`
    };

    infoBox.innerHTML = infos[provider] || infos.groq;
}

function saveChatbotSettings() {
    const provider = document.getElementById('chatbot-api-provider')?.value;
    const apiKey = document.getElementById('chatbot-api-key')?.value.trim();

    if (!apiKey) {
        alert('⚠️ Vui lòng nhập API key!');
        return;
    }

    apiConfig = { provider, apiKey };
    localStorage.setItem('chatbot_config', JSON.stringify(apiConfig));

    updateChatbotStatus();
    closeChatbotSettings();

    addChatbotMessage('✅ Đã kết nối API thành công! Bây giờ bạn có thể hỏi tôi bất cứ điều gì!', 'bot');
}

function handleChatbotKeyPress(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendChatbotMessage();
    }
}

function sendQuickMessage(message) {
    const input = document.getElementById('chatbot-input');
    if (input) {
        input.value = message;
        sendChatbotMessage();
    }
}

async function sendChatbotMessage() {
    const input = document.getElementById('chatbot-input');
    const sendBtn = document.getElementById('chatbot-send-btn');

    if (!input || !sendBtn) return;

    const message = input.value.trim();
    if (!message) return;

    // Add user message
    addChatbotMessage(message, 'user');

    // Add to history
    conversationHistory.push({ role: 'user', content: message });

    // Clear input
    input.value = '';
    sendBtn.disabled = true;

    // Show typing
    showChatbotTyping();

    try {
        const response = await callChatbotAPI();
        hideChatbotTyping();
        addChatbotMessage(response, 'bot');
        conversationHistory.push({ role: 'assistant', content: response });

        // Keep last 20 messages
        if (conversationHistory.length > 20) {
            conversationHistory = conversationHistory.slice(-20);
        }
    } catch (error) {
        hideChatbotTyping();
        console.error('Error:', error);

        let errorMsg = '❌ Lỗi kết nối AI. ';
        if (error.message.includes('API key')) {
            errorMsg += 'Kiểm tra API key.';
        } else if (error.message.includes('quota')) {
            errorMsg += 'Hết quota. Đợi hoặc nâng cấp.';
        } else if (error.message.includes('rate limit')) {
            errorMsg += 'Quá nhiều request. Đợi 1 phút.';
        } else {
            errorMsg += error.message;
        }

        addChatbotMessage(errorMsg, 'bot');
    } finally {
        sendBtn.disabled = false;
        input.focus();
    }
}

async function callChatbotAPI() {
    const { provider, apiKey } = apiConfig;
    const messages = [
        { role: 'system', content: SYSTEM_PROMPT },
        ...conversationHistory
    ];

    if (provider === 'groq' || provider === 'openai') {
        const response = await fetch(API_ENDPOINTS[provider], {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({
                model: MODELS[provider],
                messages: messages,
                temperature: 0.7,
                max_tokens: 2000
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'API request failed');
        }

        const data = await response.json();
        return data.choices[0].message.content;
    } else if (provider === 'gemini') {
        const geminiMessages = conversationHistory.map(msg => ({
            role: msg.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: msg.content }]
        }));

        if (geminiMessages.length > 0) {
            geminiMessages[0].parts[0].text = SYSTEM_PROMPT + '\n\n' + geminiMessages[0].parts[0].text;
        }

        const response = await fetch(`${API_ENDPOINTS.gemini}?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: geminiMessages,
                generationConfig: {
                    temperature: 0.7,
                    maxOutputTokens: 2000
                }
            })
        });

        if (!response.ok) {
            const error = await response.json();
            throw new Error(error.error?.message || 'API request failed');
        }

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    }
}

function addChatbotMessage(text, sender) {
    const messagesContainer = document.getElementById('chatbot-messages');
    const typingIndicator = document.getElementById('chatbot-typing');

    if (!messagesContainer) return;

    const messageDiv = document.createElement('div');
    messageDiv.className = `chatbot-message ${sender}`;

    const avatar = document.createElement('div');
    avatar.className = 'message-avatar';
    avatar.textContent = sender === 'bot' ? '🤖' : '👤';

    const content = document.createElement('div');
    content.className = 'message-content';

    // Format text
    let formattedText = text
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\n/g, '<br>');

    content.innerHTML = formattedText;

    messageDiv.appendChild(avatar);
    messageDiv.appendChild(content);

    messagesContainer.insertBefore(messageDiv, typingIndicator);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showChatbotTyping() {
    const typing = document.getElementById('chatbot-typing');
    if (typing) {
        typing.style.display = 'flex';
        const messagesContainer = document.getElementById('chatbot-messages');
        if (messagesContainer) {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }
    }
}

function hideChatbotTyping() {
    const typing = document.getElementById('chatbot-typing');
    if (typing) {
        typing.style.display = 'none';
    }
}
