// 초기화
document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드 완료");
});

// 언어별 번역 데이터
const translations = {
  ko: {
    welcomeMessage: "안녕하세요! 무엇을 도와드릴까요?",
    btnguide: "사용 방법 💡",
    btnprep: "이민준비 ✔️",
    btnLease: "임대차 계약 🏠",
    btnInsurance: "4대 보험 ⚖️",
    btnLaborLaw: "노동법 💼",
    btnsend: "전송",
    btnanswer: "질문을 입력해주세요 !",
    btnword: "용어",
    btnmain: "메인",
  },
  en: {
    welcomeMessage: "Hello! How can I assist you?",
    btnguide: "How to use💡",
    btnprep: "PREP for immigrate✔️",
    btnLease: "Lease Agreement 🏠",
    btnInsurance: "4 Major Insurances ⚖️",
    btnLaborLaw: "Labor Law 💼",
    btnsend: "Send",
    btnanswer: "Please enter your answer!",
    btnword: "Word",
    btnmain: "Main",
  },
  hi: {
    welcomeMessage: "नमस्ते! मैं आपकी किस प्रकार मदद कर सकता हूँ?",
    btnguide: " उपयोग विधि 💡",
    btnprep: "प्रवासन तैयारी ✔️",
    btnLease: "पट्टा समझौता 🏠",
    btnInsurance: "4 प्रमुख बीमा ⚖️",
    btnLaborLaw: "श्रम कानून 💼",
    btnsend: "भेजना",
    btnanswer: "कृपया अपना प्रश्न दर्ज करें!",
    btnword: "शब्दावली",
    btnmain: "मुख्य",
  },
  vi: {
    welcomeMessage: "Xin chào! Tôi có thể giúp gì cho bạn?",
    btnguide: "Cách sử dụng 💡",
    btnprep: "Chuẩn bị nhập cư ✔️",
    btnLease: "Hợp đồng thuê nhà 🏠",
    btnInsurance: "4 Bảo hiểm chính ⚖️",
    btnLaborLaw: "Luật lao động 💼",
    btnsend: "gửi",
    btnanswer: "Vui lòng nhập câu hỏi của bạn!",
    btnword: "từ",
    btnmain: "chủ yếu",
  },
  ru: {
    welcomeMessage: "Здравствуйте! Как я могу помочь вам?",
    btnguide: "Способ использования 💡",
    btnprep: "Подготовка к иммиграции ✔️",
    btnLease: "Договор аренды 🏠",
    btnInsurance: "4 основных страхования ⚖️",
    btnLaborLaw: "Трудовое законодательство 💼",
    btnsend: "отправлять",
    btnanswer: "Пожалуйста, введите свой ответ!",
    btnword: "слово",
    btnmain: "основной",
  },
  zh: {
    welcomeMessage: "你好！我能为你做些什么？",
    btnguide: "使用方法 💡",
    btnprep: "移民准备 ✔️",
    btnLease: "租赁协议 🏠",
    btnInsurance: "四大保险 ⚖️",
    btnLaborLaw: "劳动法 💼",
    btnsend: "发送",
    btnanswer: "请输入您的答案!",
    btnword: "单词",
    btnmain: "主要的",
  },
  th: {
    welcomeMessage: "สวัสดี! ฉันช่วยอะไรคุณได้บ้าง?",
    btnguide: "วิธีการใช้งาน💡",
    btnprep: "เตรียมตัวสำหรับการย้าย✔️",
    btnLease: "สัญญาเช่า 🏠",
    btnInsurance: "ประกันหลัก 4 อย่าง ⚖️",
    btnLaborLaw: "กฎหมายแรงงาน 💼",
    btnsend: "ส่ง",
    btnanswer: "กรุณาป้อนคำตอบของคุณ!",
    btnword: "คำ",
    btnmain: "หน้าหลัก",
  },
  uz: {
    welcomeMessage: "Salom! Qanday yordam bera olaman?",
    btnguide: "Qanday foydalanish💡",
    btnprep: "Immigratsiya uchun tayyorgarlik✔️",
    btnLease: "Ijara shartnomasi 🏠",
    btnInsurance: "4 Asosiy sug'urta ⚖️",
    btnLaborLaw: "Mehnat qonuni 💼",
    btnsend: "Yuborish",
    btnanswer: "Iltimos, javobingizni kiriting!",
    btnword: "So'z",
    btnmain: "Asosiy",
  },
  tl: {
    welcomeMessage: "Kamusta! Paano kita matutulungan?",
    btnguide: "Paano gamitin💡",
    btnprep: "Maghanda para sa paglipat✔️",
    btnLease: "Kasunduan sa Pag-upa 🏠",
    btnInsurance: "4 Pangunahing Insurance ⚖️",
    btnLaborLaw: "Batas sa Paggawa 💼",
    btnsend: "Ipadala",
    btnanswer: "Pakilagay ang iyong sagot!",
    btnword: "Salita",
    btnmain: "Pangunahing",
  },
  ja: {
    welcomeMessage: "こんにちは！どのようにお手伝いできますか？",
    btnguide: "使い方💡",
    btnprep: "移住準備✔️",
    btnLease: "賃貸契約 🏠",
    btnInsurance: "主要な4つの保険 ⚖️",
    btnLaborLaw: "労働法 💼",
    btnsend: "送信",
    btnanswer: "回答を入力してください！",
    btnword: "単語",
    btnmain: "メイン",
  },
};
// 현재 언어
let currentLanguage = "ko";

// 언어모달 관련 DOM 요소 가져오기
const languageModal = document.getElementById("languageModal");
const closeModalButton = document.getElementById("closeModal");
const langgeButton = document.getElementById("lang-btn");
const languageList = document.getElementById("languageList");

// 페이지 로드 시 모달 초기화 (숨김 상태로 설정)
document.addEventListener("DOMContentLoaded", () => {
  languageModal.style.display = "none"; // 모달 숨김
});

// 모달 열기 버튼 이벤트
langgeButton.addEventListener("click", () => {
  if (languageModal) {
    languageModal.style.display = "flex"; // 모달 표시
  } else {
    console.error("모달 요소를 찾을 수 없습니다.");
  }
});

// 모달 닫기 버튼 이벤트
closeModalButton.addEventListener("click", () => {
  if (languageModal) {
    languageModal.style.display = "none"; // 모달 숨김
  } else {
    console.error("모달 요소를 찾을 수 없습니다.");
  }
});

// 언어 선택 이벤트
languageList.addEventListener("click", (event) => {
  const selectedLang = event.target.getAttribute("data-lang");
  if (selectedLang) {
    currentLanguage = selectedLang;
    updateLanguage(); // 화면 언어 업데이트
    languageModal.style.display = "none"; // 모달 닫기
  }
});

// 화면 언어 업데이트 함수
function updateLanguage() {
  const langData = translations[currentLanguage];
  addMessage(langData.welcomeMessage, "bot");

  // 각 요소의 텍스트를 업데이트

  document.getElementById("btnGuide").textContent = langData.btnguide;
  document.getElementById("btnPrep").textContent = langData.btnprep;
  document.getElementById("btnLease").textContent = langData.btnLease;
  document.getElementById("btnInsurance").textContent = langData.btnInsurance;
  document.getElementById("btnLaborLaw").textContent = langData.btnLaborLaw;
  document.getElementById("btnmain").textContent = langData.btnmain;
  document.getElementById("sendButton").textContent = langData.btnsend;
  document.getElementById("btnword").textContent = langData.btnword;
}

// 언어 선택 변경 이벤트
function addMessage(text, type) {
  const messageBox = document.createElement("div");
  messageBox.classList.add("chat-message");
  if (type === "bot") {
    messageBox.classList.add("bot");
  }

  messageBox.textContent = text;

  // 채팅 영역에 추가
  const chatContainer = document.getElementById("chatContainer");
  chatContainer.appendChild(messageBox);
}
document.getElementById("languageList").addEventListener("click", (event) => {
  const selectedLang = event.target.getAttribute("data-lang");
  if (selectedLang) {
    currentLanguage = selectedLang;
    addMessage(`${event.target.textContent}`, "bot");
  }
});

// 언어별 답변 데이터
const responses = {
  사용방법: {
    ko: `Law Bot 사용 방법 안내 입니다.
    
    ▶챗봇에 접속
    웹사이트 또는 모바일 앱에서 접속하여 간단한 회원가입 후 이용 가능.
    
    ▶질문 입력
    궁금한 내용을 자유롭게 입력하세요. 
    예시: "E-7 비자 신청 요건은 무엇인가요?", "전세 계약 시 주의할 점은?",
    "고용주가 임금을 지급하지 않을 때 어떻게 해야 하나요?"
    
    ▶맞춤형 답변 받기
    챗봇이 간단하고 실질적인 답변을 제공하며, 필요한 경우 관련 기관의 링크를 안내합니다.
    
    ▶다국어 지원 활성화
    원하는 언어를 선택하면 해당 언어로 답변이 제공됩니다.`,

    en: `How to Use the Law Bot
    
    ▶ Access the Chatbot
    Access the chatbot through the website or mobile app. Simply register for an account to start using it.
    
    ▶ Enter Your Questions
    Feel free to type in any questions you have.
    Examples:"What are the requirements for an E-7 visa application?", 
    "What should I watch out for in a jeonse (key money) rental contract?",
    "What should I do if my employer does not pay my wages?"
    
    ▶ Receive Customized Answers
    The chatbot will provide simple and practical answers to your questions. If necessary, it will also guide you to relevant organization links.
    
    ▶ Activate Multilingual Support
    Select your preferred language to receive responses in that language.`,

    hi: `Law Bot उपयोग करने का तरीका
    
    ▶ चैटबॉट तक पहुँचें
    वेबसाइट या मोबाइल ऐप के माध्यम से चैटबॉट तक पहुँचें। एक सरल पंजीकरण प्रक्रिया के बाद इसका उपयोग शुरू करें।
    
    ▶ प्रश्न दर्ज करें
    आप अपने सवाल स्वतंत्र रूप से दर्ज कर सकते हैं।
    उदाहरण: "E-7 वीज़ा आवेदन के लिए आवश्यकताएँ क्या हैं?",
    "जियोन्से (बड़ी जमा राशि वाले किराए) अनुबंध में क्या सावधानियां बरतनी चाहिए?",
    "अगर मेरा नियोक्ता मेरी मजदूरी का भुगतान नहीं करता है तो मुझे क्या करना चाहिए?"
    
    ▶ कस्टमाइज्ड उत्तर प्राप्त करें
    चैटबॉट आपके सवालों के सरल और व्यावहारिक उत्तर प्रदान करेगा। आवश्यकता पड़ने पर यह आपको संबंधित संगठनों के लिंक भी प्रदान करेगा।
    
    ▶ बहुभाषी समर्थन सक्रिय करेंअपनी पसंदीदा भाषा का चयन करें और उसी भाषा में उत्तर प्राप्त करें।

`,

    vi: `Hướng dẫn sử dụng Law Bot
    
    ▶ Truy cập Chatbot
    Truy cập chatbot qua website hoặc ứng dụng di động. Đăng ký tài khoản một cách đơn giản để bắt đầu sử dụng.
    
    ▶ Nhập câu hỏi
    
    Hãy thoải mái nhập bất kỳ câu hỏi nào bạn có.
    Ví dụ: "Điều kiện để xin visa E-7 là gì?",
    "Những điều cần lưu ý khi ký hợp đồng thuê nhà jeonse?",
    "Tôi nên làm gì nếu chủ lao động không trả lương?"
    
    ▶ Nhận câu trả lời tùy chỉnh
    Chatbot sẽ cung cấp câu trả lời đơn giản và thực tế. Nếu cần, nó sẽ hướng dẫn bạn đến các liên kết của cơ quan liên quan.
    
    ▶ Kích hoạt hỗ trợ đa ngôn ngữ
    Chọn ngôn ngữ mà bạn mong muốn và nhận câu trả lời bằng ngôn ngữ đó.`,

    ru: `Инструкция по использованию Law Bot
    
    ▶ Доступ к чат-боту
    Откройте чат-бот через веб-сайт или мобильное приложение. Зарегистрируйтесь, чтобы начать использование.
    
    ▶ Введите свои вопросы
    Задавайте любые вопросы, которые вас интересуют.
    Примеры: "Какие требования для получения визы E-7?",
    "На что следует обратить внимание при аренде жилья по системе jeonse?",
    "Что делать, если работодатель не выплачивает заработную плату?"
    
    ▶ Получите персонализированные ответы
    Чат-бот предоставит простые и практичные ответы на ваши вопросы. При необходимости он предложит ссылки на соответствующие организации.
    
    ▶ Активация многоязычной поддержки
    Выберите предпочитаемый язык, чтобы получать ответы на этом языке.`,

    zh: `Law Bot 使用指南
    
    ▶ 访问聊天机器人
    通过网站或移动应用访问聊天机器人。简单注册账户后即可开始使用。
    
    ▶ 输入问题
    随时输入您想了解的问题。
    例如： “E-7 签证的申请条件是什么？”, “签订押金租赁合同时需要注意什么？”,
    “如果雇主不支付工资，我该怎么办？”
    
    ▶ 获取定制化回答
    聊天机器人会提供简单实用的答案。如有需要，还会引导您访问相关机构的链接。
    
    ▶ 启用多语言支持
    选择您偏好的语言，以该语言接收回答。`,
  },

  이민준비: {
    ko: `이민 준비를 위한 것들입니다.
    1. 필요한 준비
    1) 비자 준비
    취업 비자: E-비자 시리즈 (E-2 영어 강사, E-7 전문직 등).
    유학 비자: D-2(대학 및 대학원 과정), D-4(어학연수).
    결혼 이민 비자: F-6.
    사업 비자: D-8(투자 비자) 등.
    비자 발급을 위해 초청장, 재정 증빙, 학력/경력 서류 등을 준비해야 함.
    한국 대사관 또는 영사관에서 신청하며, 체류 목적에 따라 제출 서류가 다름.
    2) 한국어 능력
    TOPIK 시험(Test of Proficiency in Korean)을 준비하는 것이 유리, 일부 비자(예: D-2, E-7)는 TOPIK 성적이 요구되기도 함.
    3) 거주지 확보
    한국에서는 월세, 전세, 혹은 단기 렌트 옵션이 있음.
    한국의 부동산 계약은 보증금 제도가 독특하므로 이를 이해하는 것이 중요 -> 부동산 법
    4) 건강보험
    한국 도착 후에는 **국민건강보험(National Health Insurance)**에 가입해야 함. 체류 자격에 따라 자동 가입되거나 신청이 필요.
    5) 기타 서류 준비
    출생증명서, 범죄경력증명서, 학력 증명서 등을 준비, 한국어 번역과 공증이 필요한 경우 다수.

    2. 주요 이민 정책
    1) 체류 자격
    체류 외국인은 **외국인등록증(Alien Registration Card)**을 발급받아야 함. 90일 이상 체류하는 경우 필수입니다.
    체류 자격에 따라 취업, 학업, 가족 초청 등이 가능.
    2) F-6 결혼 이민 비자
    한국 국민과 결혼한 외국인에게 발급.
    초기에는 1년 유효기간의 비자를 받고, 갱신을 통해 장기 체류가 가능.
    한국어 능력, 재정 안정성, 결혼 진정성 심사 있음.
    3) 귀화 및 영주권
    영주권(F-5): 일정 기간 동안 합법적으로 체류하고 재정 능력과 한국어 능력을 입증하면 신청 가능.
    귀화: 일반귀화, 간이귀화, 특별귀화로 나뉘며, 한국 역사와 언어 시험(TOPIK)이 필요.
    4) 고용허가제(EPS)
    비숙련 외국인 근로자를 위한 정책으로, 제조업, 건설업 등 일부 산업에서 일할 수 있는 비자(E-9).
    고용주는 외국인 근로자를 고용하기 위해 정부 허가를 받아야 함.
    
    3. 문화적 적응
    한국은 예의를 중시하는 사회이며, 언어와 문화적 차이를 이해하는 것이 중요(나이에 따른 호칭 사용, 식사 문화, 사회적 규범 등)
    
    4. 도움 받을 수 있는 기관
    대한민국 출입국·외국인정책본부: 비자 및 체류 관련 정보를 제공.
    외국인 지원센터: 각 지역에 있으며, 한국 생활 적응을 돕는 프로그램과 법률 상담 등을 지원.`,

    en: `Preparation for Immigration to South Korea
    1. Necessary Preparations
    Visa Preparation
    Work Visa: E-series visas (e.g., E-2 for English teachers, E-7 for professionals).
    Student Visa: D-2 (university courses), D-4 (language training).
    Marriage Visa: F-6.
    Business Visa: D-8 (investment visa), etc.
    To apply for a visa, you need documents such as an invitation letter, financial proof, and academic/work records.
    Applications are made through a Korean embassy or consulate, with required documents differing based on the purpose of stay.
    Korean Language Proficiency
    Taking the TOPIK test (Test of Proficiency in Korean) is advantageous. Some visas (e.g., D-2, E-7) may require TOPIK scores.
    Securing Housing
    In Korea, options include jeonse (large deposit rental), wolse (monthly rental), and short-term leases.
    Korean real estate contracts are unique, so it’s essential to understand the system.
    Health Insurance
    After arriving in Korea, you must register for National Health Insurance. Depending on your residency status, you may be automatically enrolled or need to apply.
    Other Documents
    Prepare birth certificates, criminal background checks, and academic qualifications. Some documents may need to be translated into Korean and notarized.

    2. Key Immigration Policies
    Residency Status
    Foreigners staying longer than 90 days must obtain an Alien Registration Card.
    Depending on residency status, you may be eligible for work, study, or family reunification.
    F-6 Marriage Visa
    Issued to foreigners married to a Korean citizen.
    Initially valid for 1 year, with the possibility of renewal for long-term residence.
    Evaluations include Korean language ability, financial stability, and the authenticity of the marriage.
    Naturalization and Permanent Residency
    Permanent Residency (F-5): Available after a period of lawful residence, with proof of financial stability and Korean language ability.
    Naturalization: General, simplified, and special naturalization options require passing Korean history and language exams (TOPIK).
    Employment Permit System (EPS)
    A system for low-skilled foreign workers, allowing work in industries like manufacturing and construction (E-9 visa).
    Employers must obtain government approval to hire foreign workers.
    
    3. Cultural Adaptation
    Korean society places a strong emphasis on respect. Understanding language and cultural differences (e.g., addressing by age, dining customs, social norms) is crucial.
    
    4. Support Organizations
    Korean Immigration Service: Provides visa and residency information.
    Foreigner Support Centers: Offer adaptation programs and legal consultation for living in Korea.`,

    hi: `दक्षिण कोरिया में प्रवास की तैयारी
    
    1. आवश्यक तैयारियाँ
    वीजा की तैयारी
    र्क वीजा: ई-सीरीज़ वीजा (जैसे, E-2 अंग्रेज़ी शिक्षक के लिए, E-7 पेशेवरों के लिए)।
    टूडेंट वीजा: D-2 (विश्वविद्यालय पाठ्यक्रम), D-4 (भाषा प्रशिक्षण)।
    शादी का वीजा: F-6।
    बिजनेस वीजा: D-8 (निवेश वीजा) और अन्य।
    वीजा आवेदन के लिए निमंत्रण पत्र, वित्तीय प्रमाण, शैक्षिक/अनुभव प्रमाणपत्र तैयार करने होंगे।
    वीजा आवेदन कोरियाई दूतावास या वाणिज्य दूतावास के माध्यम से किया जाता है। आवश्यक दस्तावेज़ आपके निवास के उद्देश्य के अनुसार भिन्न होते हैं।
    कोरियाई भाषा दक्षता
    TOPIK परीक्षा (Test of Proficiency in Korean) देना फायदेमंद है। कुछ वीजा (जैसे, D-2, E-7) के लिए TOPIK स्कोर की आवश्यकता होती है।
    आवास की व्यवस्था
    कोरिया में, जियोन्से (बड़ी जमा राशि), वोल्से (मासिक किराया) और अल्पकालिक पट्टे के विकल्प उपलब्ध हैं।
    कोरियाई संपत्ति पट्टा प्रणाली अनूठी है। इसे समझना आवश्यक है।
    सवास्थ्य बीमा
    कोरिया पहुँचने के बाद, राष्ट्रीय स्वास्थ्य बीमा (National Health Insurance) में पंजीकरण कराना अनिवार्य है। आपके निवास की स्थिति के आधार पर यह स्वचालित रूप से होता है या आवेदन करना पड़ता है।
    अन्य दस्तावेज़ों की तैयारी
    जन्म प्रमाण पत्र, पुलिस रिकॉर्ड और शैक्षिक प्रमाण पत्र तैयार करें। कुछ दस्तावेज़ों का कोरियाई में अनुवाद और नोटरीकृत होना आवश्यक है।
    
    2. प्रमुख आव्रजन नीतियाँ
    निवास स्थिति
    90 दिनों से अधिक समय तक रहने वाले विदेशियों को एलियन रजिस्ट्रेशन कार्ड प्राप्त करना आवश्यक है।
    निवास की स्थिति के आधार पर, काम, पढ़ाई या परिवार पुनर्मिलन की अनुमति हो सकती है।
    शादी का वीजा (F-6)
    कोरियाई नागरिक से शादी करने वाले विदेशियों को जारी किया जाता है।
    परारंभ में 1 वर्ष के लिए वैध, दीर्घकालिक निवास के लिए नवीनीकरण संभव है।
    कोरियाई भाषा कौशल, वित्तीय स्थिरता और विवाह की प्रामाणिकता की जाँच की जाती है।
    नागरिकता और स्थायी निवास
    सथायी निवास (F-5): एक निश्चित अवधि के लिए कानूनी रूप से रहने के बाद और वित्तीय स्थिरता तथा कोरियाई भाषा कौशल साबित करने पर उपलब्ध।
    नागरिकता: सामान्य, सरलीकृत और विशेष रूप से विभाजित। इसमें कोरियाई इतिहास और भाषा परीक्षा (TOPIK) उत्तीर्ण करना आवश्यक है।
    रोजगार परमिट प्रणाली (EPS)
    अल्प-कुशल विदेशी श्रमिकों के लिए नीति, जो निर्माण और विनिर्माण जैसे उद्योगों में काम करने की अनुमति देती है (E-9 वीजा)।
    नियोक्ता को विदेशी श्रमिकों को नियुक्त करने के लिए सरकार से अनुमति लेनी होती है।
    
    3. सांस्कृतिक अनुकूलन
    कोरियाई समाज सम्मान पर जोर देता है। भाषा और सांस्कृतिक अंतर (जैसे, उम्र के अनुसार संबोधन, भोजन रीति-रिवाज, सामाजिक मानदंड) को समझना महत्वपूर्ण है।
    
    4. सहायता प्रदान करने वाले संगठन
    कोरियाई आव्रजन सेवा: वीजा और निवास जानकारी प्रदान करती है।
    विदेशी सहायता केंद्र: कोरियाई जीवन के लिए अनुकूलन कार्यक्रम और कानूनी परामर्श प्रदान करते हैं।`,

    vi: `Chuẩn bị nhập cư Hàn Quốc
    1. Chuẩn bị cần thiết
    Chuẩn bị visa
    Visa lao động: Dòng visa E (ví dụ, E-2 dành cho giáo viên tiếng Anh, E-7 dành cho chuyên gia).
    Visa du học: D-2 (học đại học), D-4 (học tiếng).
    Visa kết hôn: F-6.
    Visa kinh doanh: D-8 (visa đầu tư), v.v.
    Để xin visa, cần chuẩn bị thư mời, giấy tờ chứng minh tài chính, bằng cấp hoặc giấy tờ kinh nghiệm làm việc.
    Đơn xin cấp visa nộp tại đại sứ quán hoặc lãnh sự quán Hàn Quốc, hồ sơ yêu cầu sẽ khác nhau tùy theo mục đích lưu trú.
    Năng lực tiếng Hàn
    Nên thi TOPIK (Test of Proficiency in Korean). Một số loại visa (như D-2, E-7) yêu cầu có điểm TOPIK.
    Tìm kiếm nơi ở
    Ở Hàn Quốc có các loại thuê nhà như jeonse (đặt cọc lớn), wolse (trả tiền hàng tháng) hoặc thuê ngắn hạn.
    Hệ thống thuê nhà ở Hàn Quốc khá đặc biệt, cần tìm hiểu kỹ.
    Bảo hiểm y tế
    Sau khi đến Hàn Quốc, cần đăng ký Bảo hiểm Y tế Quốc gia (National Health Insurance). Tùy thuộc vào tư cách cư trú, bảo hiểm sẽ tự động đăng ký hoặc cần nộp hồ sơ.
    Chuẩn bị giấy tờ khác
    Chuẩn bị giấy khai sinh, lý lịch tư pháp, bằng cấp. Một số giấy tờ cần được dịch sang tiếng Hàn và công chứng.
    
    2. Chính sách nhập cư chính
    Tư cách lưu trú
    Người nước ngoài lưu trú trên 90 ngày phải xin cấp Thẻ đăng ký người nước ngoài (Alien Registration Card).
    Tùy thuộc vào tư cách lưu trú, có thể làm việc, học tập hoặc đoàn tụ gia đình.
    Visa kết hôn F-6
    Cấp cho người nước ngoài kết hôn với công dân Hàn Quốc.
    Thời hạn ban đầu 1 năm, có thể gia hạn để ở lâu dài.
    Kiểm tra khả năng tiếng Hàn, khả năng tài chính và tính xác thực của hôn nhân.
    Nhập tịch và cư trú vĩnh viễn
    Cư trú vĩnh viễn (F-5): Có thể xin sau thời gian lưu trú hợp pháp, chứng minh tài chính và khả năng tiếng Hàn.
    Nhập tịch: Có ba dạng: nhập tịch thông thường, đơn giản hóa và đặc biệt. Yêu cầu vượt qua kỳ thi lịch sử và ngôn ngữ Hàn Quốc (TOPIK).
    Hệ thống cấp phép lao động (EPS)
    Chính sách dành cho lao động nước ngoài không có tay nghề, làm việc trong ngành sản xuất, xây dựng (visa E-9).
    Chủ lao động phải được chính phủ cấp phép để tuyển dụng lao động nước ngoài.
    
    3. Thích nghi văn hóa
    Xã hội Hàn Quốc rất coi trọng lễ nghi. Cần hiểu sự khác biệt về ngôn ngữ và văn hóa (như cách xưng hô theo tuổi tác, văn hóa ăn uống, quy tắc xã hội).
    
    4. Tổ chức hỗ trợ
    Cục Xuất nhập cảnh Hàn Quốc: Cung cấp thông tin về visa và cư trú.
    Trung tâm hỗ trợ người nước ngoài: Cung cấp chương trình thích nghi với cuộc sống tại Hàn và tư vấn pháp lý.`,

    ru: `Подготовка к иммиграции в Южную Корею
    1. Необходимые приготовления
    Подготовка визы
    Рабочие визы: Серия E (например, E-2 для преподавателей английского языка, E-7 для профессионалов).
    Учебные визы: D-2 (для учебы в университетах), D-4 (для языковых курсов).
    Виза для брака: F-6.
    Бизнес-виза: D-8 (виза инвестора) и др.
    Для получения визы необходимо подготовить приглашение, финансовые документы, документы об образовании/опыте работы.
    Подача заявки осуществляется через корейское посольство или консульство, в зависимости от цели пребывания список необходимых документов может отличаться.
    Уровень корейского языка
    Рекомендуется сдать тест TOPIK (Test of Proficiency in Korean). Для некоторых виз (например, D-2, E-7) требуется сертификат TOPIK.
    Поиск жилья
    В Корее доступны аренда с крупным депозитом (전세), ежемесячная аренда (월세) или краткосрочная аренда.
    Система аренды в Корее уникальна, рекомендуется изучить основы корейского законодательства об аренде.
    Медицинское страхование
    После прибытия в Корею необходимо зарегистрироваться в системе Национального медицинского страхования (National Health Insurance). Регистрация происходит автоматически или по заявлению, в зависимости от вашего статуса проживания.
    Подготовка документов
    Подготовьте свидетельство о рождении, справку о несудимости, дипломы и другие документы. В некоторых случаях требуется перевод на корейский язык с нотариальным заверением.
    
    2. Основные иммиграционные политики
    Статус проживания
    Иностранцы, проживающие в Корее более 90 дней, должны получить удостоверение иностранца (Alien Registration Card).
    В зависимости от статуса проживания возможны работа, учеба или воссоединение с семьей.
    Виза для брака F-6
    Выдается иностранцам, вступившим в брак с гражданином Кореи.
    Первоначально выдается на 1 год, с возможностью продления для долгосрочного проживания.
    Проверяются знание корейского языка, финансовая стабильность и подлинность брака.
    Гражданство и постоянное проживание
    Постоянное проживание (F-5): Доступно после законного пребывания в течение определенного времени, при наличии финансовой стабильности и знания корейского языка.
    Гражданство: Доступно через общую, упрощенную или специальную натурализацию. Требуется сдача экзамена по истории Кореи и корейскому языку (TOPIK).
    Система разрешения на работу (EPS)
    Политика для иностранных работников низкой квалификации, предоставляющая возможность работать в таких отраслях, как производство и строительство (виза E-9).
    Работодатель должен получить разрешение от правительства для найма иностранных сотрудников.
    
    3. Культурная адаптация
    Корейское общество акцентирует внимание на уважении. Понимание языковых и культурных различий (например, обращение по возрасту, обычаи во время еды и социальные нормы) имеет важное значение.
    
    4. Организации, предоставляющие помощь
    Иммиграционная служба Республики Корея: Предоставляет информацию о визах и проживании.
    Центры поддержки иностранцев: Помогают адаптироваться к жизни в Корее, предоставляют программы обучения и юридические консультации.`,

    zh: `移民韩国的准备事项
    
    1. 必要准备
    签证准备
    工作签证: E签证系列 (如E-2英语教师, E-7专业人士等)。
    学生签证: D-2(大学及研究生课程), D-4(语言学习)。
    结婚移民签证: F-6。
    商务签证: D-8(投资签证)等。
    申请签证需准备邀请函、财务证明、学历/工作经历文件等材料。
    签证需通过韩国大使馆或领事馆申请，具体提交材料根据居留目的不同而有所差异。
    韩语能力
    建议参加TOPIK考试(Test of Proficiency in Korean)。部分签证(如D-2, E-7)可能需要TOPIK成绩。
    居住安排
    韩国的租房方式有押金制(전세)、月租制(월세)以及短期租赁。
    韩国的租赁制度独具特色，建议提前了解相关法律规定。
    健康保险
    抵达韩国后需加入国民健康保险(National Health Insurance)。根据居留身份，保险会自动加入或需个人申请。
    其他材料准备
    准备出生证明、无犯罪记录证明、学历证明等材料。部分文件可能需翻译成韩语并进行公证。
    
    2. 主要移民政策
    居留资格
    外国人居留超过90天需办理外国人登记证(Alien Registration Card)。
    根据居留资格，可从事工作、学习或申请家庭团聚。
    结婚移民签证F-6
    颁发给与韩国公民结婚的外国人。
    初次签发为1年有效，可通过续签长期居留。
    审核内容包括韩语能力、经济能力及婚姻真实性。
    归化及永久居留
    永久居留(F-5): 在韩国合法居留一段时间并满足经济能力及韩语能力条件后可申请。
    归化: 分为普通归化、简易归化及特别归化。需通过韩国历史及语言考试(TOPIK)。
    雇佣许可制度(EPS)
    针对低技能劳工的政策，可在制造业、建筑业等领域工作(E-9签证)。
    雇主需获得政府许可后才能聘用外国劳工。
    
    3. 文化适应
    韩国是一个非常注重礼仪的社会，了解语言及文化差异非常重要(如年龄称谓、用餐文化及社会规范)。
    
    4. 支援机构
    韩国出入境与外国人政策本部: 提供签证及居留相关信息。
    外国人支援中心: 提供韩国生活适应培训及法律咨询服务。`,
  },

  임대차계약: {
    ko: `임대차계약에 대한 정보입니다. 
      1 전세(보증금제도)
      ■전세란 집주인에게 일정 금액을 보증금 형태로 맡기고 1~2년 임대차 계약 후 사용하는제도. 계약 시 전세금액의 10%를 계약금으로 지불하고, 입주 시 잔금을 지불합니다.
      ■입주자는 임차기간 동안 입주 당시의 주택 상태를 유지해야 하며, 내부 인테리어 공사를 하고자 할 경우 반드시 집주인의 동의를 구해야 합니다.
      ■계약 종료 후, 집주인은 입주자에게 전세금 전액을 돌려주어야 합니다. 
      
      2 월세 
      ■월세란 1~2년의 임대차 계약 후, 소정의 보증금을 지불하고 매월 사용료(월세)를 지불하는 제도.  보증금은 보통 다달이 내는 월세의 10~20배 정도입니다. 
      ■통상적으로 보증금의 10%를 계약금으로 내며 입주 시, 잔액을 완납합니다. 
      단, 계약자가 중도에 계약을 해지하는 경우 계약금을 돌려 받을 수 없으며, 집주인이 계약을 파기한 경우에는 계약금의 2배를 계약자에게 지급해야 합니다. 
      ■보증금은 계약 종료 후 전액 돌려받는 것이 원칙이나, 월세 또는 공과금이 밀리는 등특수상황이 발생할 경우, 그 금액만큼 보증금에서 제하고 돌려받을 수 있습니다.
      ■중개수수료는 주거형태, 면적, 거래금액에 따라 차이가 있습니다. 

      외국어 가능 부동산(주로 영,중, 일) 리스트는 서울시가 운영하는 서울부동산정보광장(http://land.seoul.go.kr )에서 확인할 수 있습니다.`,

    en: `This is information about lease agreements.
      Lease Contracts
      1 Deposit-based lease (jeonse)
      ■ A deposit-based lease is one type of way to lease a house. 
      The lessee makes a lump-sum deposit on a rental space to the property owner and uses the house for a period of one or two years, according to the lease contract. 
      The lessee shall pay 10% of the security deposit for the lease as a down payment when concluding the contract, and settle the balance when moving in.
      ■ The lessee shall maintain the original house conditions during the term of the lease. 
      If he/she wants interior work done, he/she shall obtain consent from the property owner in advance.
      ■ The property owner shall return the full amount of the security deposit to the lessee at the end of the lease.
      
      2 Monthly lease
      ■ Under a monthly lease contract with a term of one or two years, the lessee may use the house by paying a deposit up front and rent every month. 
      The amount of the deposit is generally 10 to 20 times the monthly rent.
      ■ The lessee shall pay 10% of the security deposit for the lease as a down payment and settle the balance when moving in. 
      If the lessee cancels the lease during the term of the contract, the down payment shall not be returned. 
      If the property owner cancels the contract, he/she shall pay twice the amount of the down payment to the lessee.
      ■ In principle, the full amount of the security deposit is returned after termination of the contract. 
      In special cases, such as arrears of monthly rent or utility charges, these expenditures are deducted from the security deposit, and the remaining amount is returned.
      ■ Real estate agent commissions vary depending on the type of residence and area, as well as the transaction amount.
      
      You can find real estate agencies that provide services in foreign languages (mainly English, Chinese, and Japanese) via the Seoul Metropolitan Government’s Real Estate Information Center website (http://land.seoul.go.kr ).`,

    hi: `यह पट्टा समझौते की जानकारी है।.
      किरायेदारी अनुबंध (Lease Agreement)
      
      जियोन्से (Jeonse - बड़ी जमा राशि पर किराया)
      जियोन्से एक ऐसी प्रणाली है जिसमें किरायेदार मकान मालिक को बड़ी राशि जमा करता है और 1~2 साल के लिए मकान का उपयोग करता है।
      अनुबंध के समय, किरायेदार कुल जमा राशि का 10% अग्रिम देता है और घर में प्रवेश करते समय शेष राशि का भुगतान करता है।
      किरायेदार को किरायेदारी की अवधि के दौरान घर की मौजूदा स्थिति को बनाए रखना चाहिए। यदि इंटीरियर में कोई परिवर्तन करना हो, तो मकान मालिक की अनुमति लेना आवश्यक है।
      अनुबंध समाप्त होने पर, मकान मालिक को पूरी जमा राशि किरायेदार को वापस करनी होगी।
      
      मासिक किराया (Wolse)
      मासिक किराया एक ऐसी प्रणाली है जिसमें किरायेदार एक छोटी जमा राशि देता है और हर महीने किराया अदा करता है। अनुबंध अवधि सामान्यतः 1~2 साल होती है।
      जमा राशि आमतौर पर मासिक किराये का 10~20 गुना होती है।
      अनुबंध के समय, किरायेदार जमा राशि का 10% अग्रिम देता है और घर में प्रवेश के समय शेष राशि का भुगतान करता है।
      यदि किरायेदार बीच में अनुबंध तोड़ता है, तो जमा राशि वापस नहीं की जाएगी।
      यदि मकान मालिक अनुबंध समाप्त करता है, तो उसे जमा राशि का दोगुना वापस करना होगा।
      अनुबंध समाप्त होने पर, जमा राशि पूरी तरह लौटाई जाती है, जब तक कि किरायेदार का किराया या बिल बकाया न हो।
      बरोकर कमीशन प्रॉपर्टी के प्रकार, क्षेत्रफल और कुल राशि के आधार पर अलग-अलग होता है।
      विदेशी भाषाओं (अंग्रेजी, चीनी, जापानी) में सहायता करने वाले दलालों की सूची Seoul Real Estate Information Plaza (http://land.seoul.go.kr ) पर उपलब्ध है।`,

    vi: `Đây là thông tin về hợp đồng thuê nhà.
      Hợp đồng thuê nhà
      Thuê nhà theo hình thức "Jeonse" (Đặt cọc lớn)
      Jeonse là hình thức thuê nhà trong đó người thuê đặt cọc một khoản tiền lớn cho chủ nhà và sử dụng nhà trong thời hạn hợp đồng 1~2 năm. Người thuê trả 10% tiền đặt cọc khi ký hợp đồng và thanh toán số tiền còn lại khi nhận nhà.
      Người thuê có trách nhiệm giữ nguyên trạng thái của căn nhà như lúc nhận ban đầu trong suốt thời gian thuê. Nếu muốn sửa chữa hoặc thay đổi nội thất, phải được sự đồng ý của chủ nhà.
      Sau khi hợp đồng kết thúc, chủ nhà phải hoàn trả toàn bộ số tiền đặt cọc cho người thuê.
      
      Thuê nhà theo hình thức trả tiền hàng tháng (Wolse)
      Wolse là hình thức thuê nhà trong đó người thuê trả một khoản tiền đặt cọc nhỏ và trả tiền thuê nhà hàng tháng theo hợp đồng 1~2 năm.
      Tiền đặt cọc thường gấp 10~20 lần tiền thuê hàng tháng.
      Người thuê trả 10% số tiền đặt cọc khi ký hợp đồng và thanh toán số còn lại khi nhận nhà. Tuy nhiên, nếu người thuê hủy hợp đồng giữa chừng, tiền đặt cọc không được hoàn trả. Ngược lại, nếu chủ nhà hủy hợp đồng, họ phải bồi thường gấp đôi số tiền đặt cọc.
      Số tiền đặt cọc sẽ được hoàn trả đầy đủ khi hợp đồng kết thúc, trừ khi người thuê chậm thanh toán tiền thuê hoặc các chi phí khác, thì số tiền đó sẽ được trừ vào tiền đặt cọc.
      Phí môi giới phụ thuộc vào loại hình nhà, diện tích, và giá trị giao dịch. Danh sách các công ty môi giới có khả năng hỗ trợ ngoại ngữ (Anh, Trung, Nhật) có thể tìm thấy tại Seoul Real Estate Information Plaza (http://land.seoul.go.kr ).`,

    ru: `Это информация о договоре аренды.
      Договоры аренды
      ﻿﻿Полная аренда (залоговая система)
      ﻿﻿П олная аренда (чонсе) - это система аренды, по которой арендатор отдает определенную сумму арендодателю в качестве залога и использует дом после заключения договора аренды в течение 1-2 лет. При подписании договора арендатор оплачивает 10% залогового депозита в качестве аванса, а при переезде оплачивается остаток суммы.
      ﻿А рендатор должен поддерживать дом в течение срока аренды в том же состоянии, в каком он былво время переезда. Для того чтобы сделать ремонт, необходимо согласие собственника.
      ﻿П осле окончания срока аренды арендодатель должен вернуть арендатору всю сумму залогового депозита. 
      2 Месячная арендная плата
      ﻿﻿Месячная арендная плата (волсе) - это система аренды сроком на 1 или 2 года, по которой выплачивается небольшой залог после заключения договора аренды, а затем каждый месяц выплачивается сумма за использование квартиры (квартплата). Залог обычно составляет в 10-20 раз больше, чем сумма месячной арендной платы.
      ﻿﻿Арендатор оплачивает 10% залогового депозита в качестве аванса, а при переезде оплачивается остаток суммы. В случае расторжения договора арендатором до переезда, аванс не возвращается, а в случае, расторжения договора арендодателем, он должен оплатить арендатору сумму в два раза больше аванса.
      ﻿﻿По общим правилам после расторжения договора сумма залога возвращается полностью, но когда возникает особый случай невыплаты арендной платы или расходов за коммунальные услуги, можно вернуть сумму залога с вычетом неуплаченной суммы.
      ﻿Комиссионные за агентские услуги различаются в зависимости от типа жилья, площади, суммы аренды. Список агентств по недвижимости, где консультируют на иностранных языках (в основном на английском, китайском, японском), можно найти на информационном сайте о недвижимости Сеула (http://land.seoul.go.kr).`,

    zh: `这是关于租赁协议的信息。
      1 传贳(保证金制度)
      ■传贳是指以保证金的形式，交付给房东一定金额并签订一至两年房屋租赁合同的制度。签订合同时，交付传贳款的10%作为合同预付款，入住时补齐剩余金额。
      ■房客在租赁期间需维持入住当时的住宅状态，如要进行内部装修，必须征得房东的 同意。
      ■合同到期后，房东须全额退还房客传贳款。
      
      2 月租
      ■月租是指签订一至两年租赁合同后，交付一定金额的保证金，并于每月支付月租的制度。保证金一般为每月交付月租的10至20倍。
      ■一般情况下，交付保证金的10%作为合同预付款，入住时补齐剩余金额。房客中途解除合同时，无法获还合同预付款，房东废除合同时，须向房客支付相当于预付款两倍 的违约金。
      ■原则上，合同到期后可全额收回保证金，但发生月租或公共费拖欠等特殊情况时，可扣除该部分金额后获还剩余保证金。
      ■中介手续费因居住类型、面积、交易金额而异。提供外国语服务的房地产(主要为英语、中文和日语)列表可登录由首尔市运营的首尔房地产信息广场(http://land.seoul.go.kr ) 进行查看。`,
  },

  "4대보험": {
    ko: `4대보험에 대한 정보입니다.
      ■국민연금 (National Pension) 목적: 노후에 안정적인 생활을 지원하기 위해 월별로 적립금을 모아 연금을 지급. 
      가입 대상: 만 18세~59세의 모든 근로자 및 사업자. 외국인도 한국에서 고용되어 있으면 국민연금에 가입해야 함. 
      보험료 부담:  근로자: 월 소득의 **4.5%**를 납부. 고용주: 근로자의 보험료와 동일하게 **4.5%**를 추가 납부. 
      ※외국인에게 유의할 점: 외국인 근로자가 귀국할 경우, 본인의 기여금을 일시금으로 반환받을 수 있음(해당 국가와 상호협정이 있는 경우만 가능). 협정 국가 예: 미국, 독일, 일본, 중국 등. 
      ■건강보험 (National Health Insurance) 목적: 질병이나 사고로 인한 의료비 부담을 줄여줌. 
      가입 대상: 모든 외국인 근로자는 입국 후 6개월 이상 체류 시 가입 의무화, 고용 형태에 따라 회사에서 자동 가입되거나 개인이 직접 가입. 
      보험료 부담:  근로자: 월 소득의 **3.675%**를 납부./ 고용주: 근로자의 보험료와 동일하게 **3.675%**를 추가 납부. 
      혜택: 병원, 약국, 치과 등에서 의료 서비스를 받을 때 보험 혜택을 적용 하고, 외국인도 내국인과 동일한 의료 혜택 제공합니다. 
      ■고용보험 (Employment Insurance) 목적: 실직 시 생계 지원과 재취업을 위한 교육, 훈련 제공. 
      가입 대상: 정규직, 계약직 등 대부분의 근로자. 단, 단시간 근로자(주 15시간 미만)나 일부 특수 직종은 가입 제외. 
      보험료 부담: 근로자: 월 소득의 **0.9%**를 납부. / 고용주: 근로자 소득의 0.9% + 추가 부담금 (기업 규모 및 고용 형태에 따라 상이). 
      외국인 혜택: 대부분 외국인 근로자는 실업급여와 고용보험 혜택을 받을 수 있음. 
      단, **고용허가제(E-9)**로 근무하는 외국인 근로자는 실업급여 대상이 아님. 
      ■산재보험 (Workers’ Compensation Insurance) 목적: 업무 중 사고나 질병으로 인해 발생한 의료비, 장애보상, 유족보상 등을 지원. 
      가입 대상: 모든 근로자 (외국인 포함), 고용 형태나 근무 시간과 관계없이 자동 가입. 
      보험료 부담: 전액 고용주 부담 (근로자는 보험료를 납부하지 않음). 
      혜택: 업무 중 부상, 질병 치료비 지원. 장애 발생 시 보상금 지급, 사망 시 유족 보상금 지급. 
      ※외국인 근로자에 대한 특이 사항 -보험 혜택 제한 여부: 고용 형태와 체류 자격에 따라 일부 보험(특히 고용보험)의 혜택이 제한될 수 있음. 
      
      -본국과의 사회보장 협정: 한국과 외국인 근로자 본국 간 사회보장 협정이 있는 경우, 국민연금 또는 건강보험의 가입과 반환금 수령이 조정될 수 있음. 
      -등록 및 관리: 외국인 등록증을 발급받으면 4대 보험 가입이 체계적으로 관리됩니다. 
      ☆4대 보험 가입의 절차 
      회사에서 처리: 대부분의 경우, 고용주는 직원의 4대 보험 가입을 의무적으로 처리. 
      직접 가입: 자영업자 또는 소득이 없는 경우, 본인이 직접 국민연금과 건강보험 가입 신청 가능. 한국에서 근무하며 안정적인 생활을 유지하기 위해 4대 보험 가입은 필수적입니다. 
      외국인 근로자로서 궁금한 점이 있다면, 고용주나 근로복지공단, 국민연금공단에 문의하세요😊`,

    en: `This is information about the 4 major insurances.
      ■National Pension Purpose: To provide financial stability during retirement through monthly contributions.
      Who must participate: All employees and business owners aged 18–59.
      Foreigners working in Korea are also required to join the National Pension system.
      Payment burden: Employee: Pays 4.5% of monthly income. / Employer: Contributes an additional 4.5% of the employee’s income.
      Important note for foreigners:
      Foreign workers can receive a lump-sum refund of their contributions upon returning to their home country, provided that Korea has a social security agreement with their country.
      Examples of countries with agreements: USA, Germany, Japan, China.
      
      ■National Health Insurance Purpose: To reduce the financial burden of medical expenses due to illness or accidents.
      Who must participate: All foreigners residing in Korea for over 6 months.
      Depending on employment type, the company may register employees, or individuals can register independently.
      Payment burden: Employee: Pays 3.675% of monthly income. / Employer: Pays an additional 3.675%.
      Benefits:Coverage for medical services at hospitals, pharmacies, dental clinics, etc.
      Foreigners receive the same benefits as Korean citizens.
      
      ■Employment Insurance Purpose: To support individuals financially during unemployment and provide retraining opportunities.
      Who must participate: Most employees with permanent or temporary contracts.
      Exceptions: Part-time workers (less than 15 hours/week) and some specific job categories.
      Payment burden: Employee: Pays 0.9% of monthly income. / Employer: Pays 0.9% + additional costs (depending on company size and employment type).
      Foreigners’ benefits:
      Most foreign workers are eligible for unemployment benefits. However, workers on an E-9 visa are not eligible for these benefits.
      
      ■Workers’ Compensation Insurance Purpose: To provide compensation for medical expenses, disabilities, or death resulting from work-related accidents or diseases.
      Who must participate: All employees, including foreigners.
      Automatically registered regardless of employment type or hours worked.
      Payment burden: Fully covered by the employer (employees do not contribute).
      Benefits: Covers treatment costs for work-related injuries or illnesses.Provides compensation for disabilities or death.
      
      ※Special Notes for Foreign Workers
      Restrictions on benefits: Depending on employment type and visa status, some insurance benefits (e.g., unemployment insurance) may be restricted.
      Social security agreements: If a foreign worker’s home country has a social security agreement with Korea, pension and health insurance payments and refunds may be adjusted.
      Registration and management: After obtaining an Alien Registration Card, all 4 insurances are systematically managed.
      
      ☆How to enroll in the 4 major insurances
      -Through the employer: In most cases, employers are responsible for registering employees for the 4 major insurances.
      -Self-registration: Self-employed individuals or those without income can independently register for the National Pension and Health Insurance. `,

    hi: `यह 4 प्रमुख बीमाओं के बारे में जानकारी है।
      दक्षिण कोरिया की 4 प्रमुख बीमा योजनाएँ (South Korea's 4 Major Insurances)
      ■नेशनल पेंशन (National Pension) उद्देश्य: सेवानिवृत्ति के बाद स्थिर जीवन यापन के लिए मासिक धनराशि का संग्रह।
      योग्यता: 18 से 59 वर्ष के सभी कर्मचारी और व्यवसायी।
      विदेशी नागरिक जो कोरिया में कार्यरत हैं, उन्हें भी पेंशन योजना में शामिल होना आवश्यक है।
      बीमा शुल्क भुगतान: कर्मचारी: मासिक वेतन का 4.5%। / नियोक्ता: कर्मचारी के बराबर 4.5% का योगदान।
      विदेशी नागरिकों के लिए ध्यान देने योग्य बात:
      यदि कोई विदेशी कर्मचारी अपने देश वापस जाता है और उसका देश कोरिया के साथ सामाजिक सुरक्षा समझौते में है, तो वह अपने योगदान की धनराशि एकमुश्त वापस प्राप्त कर सकता है।
      उदाहरण: अमेरिका, जर्मनी, जापान, चीन आदि।
      
      ■राष्ट्रीय स्वास्थ्य बीमा (National Health Insurance) उद्देश्य: बीमारियों या दुर्घटनाओं से होने वाले चिकित्सा खर्च को कम करना।
      योग्यता: सभी विदेशी कर्मचारी जो कोरिया में 6 महीने या उससे अधिक समय तक रहते हैं।
      कार्य के प्रकार के अनुसार कंपनी स्वचालित रूप से पंजीकरण करती है या व्यक्ति स्वयं पंजीकरण करता है।
      बीमा शुल्क भुगतान: कर्मचारी: मासिक वेतन का 3.675%। / नियोक्ता: कर्मचारी के बराबर 3.675% का भुगतान।
      लाभ:
      अस्पताल, फार्मेसी और दंत चिकित्सा सेवाओं में बीमा लाभ।
      विदेशी नागरिकों को स्थानीय निवासियों के समान चिकित्सा सेवाएँ मिलती हैं।
      
      ■रोजगार बीमा (Employment Insurance) उद्देश्य: बेरोजगारी की स्थिति में वित्तीय सहायता और पुन: रोजगार प्रशिक्षण प्रदान करना।
      योग्यता: अधिकांश नियमित और अनुबंधित कर्मचारी।
      लेकिन 15 घंटे प्रति सप्ताह से कम काम करने वाले या कुछ विशेष श्रेणियों के कर्मचारी बाहर हो सकते हैं।
      बीमा शुल्क भुगतान: कर्मचारी: मासिक वेतन का 0.9%। / नियोक्ता: 0.9% + अतिरिक्त शुल्क (कंपनी के आकार और रोजगार प्रकार पर निर्भर)।
      विदेशी कर्मचारियों के लिए लाभ:
      अधिकांश विदेशी कर्मचारी बेरोजगारी भत्ते और संबंधित लाभों के पात्र हैं।
      हालांकि, E-9 वीजा पर काम करने वाले विदेशी कर्मचारी बेरोजगारी भत्ते के पात्र नहीं हैं।
      
      ■कार्यस्थल दुर्घटना बीमा (Workers’ Compensation Insurance)
      उद्देश्य: कार्य से संबंधित दुर्घटनाओं या बीमारियों के कारण चिकित्सा खर्च, विकलांगता मुआवजा और परिवार को वित्तीय सहायता।
      योग्यता: सभी कर्मचारी (विदेशी नागरिक भी)।
      रोजगार के प्रकार और कार्य के घंटों की परवाह किए बिना स्वचालित रूप से पंजीकृत।
      बीमा शुल्क भुगतान: पूरा भुगतान नियोक्ता करता है (कर्मचारी को कोई भुगतान नहीं करना पड़ता)।
      लाभ:
      कार्यस्थल में चोट या बीमारी के उपचार के लिए चिकित्सा व्यय का भुगतान।
      विकलांगता मुआवजा और मृत्यु के मामले में परिवार को वित्तीय सहायता।
      विदेशी कर्मचारियों के लिए विशेष जानकारी
      
      ※बीमा लाभ सीमाएँ: रोजगार के प्रकार और वीजा की स्थिति के अनुसार कुछ बीमा लाभ सीमित हो सकते हैं।
      सामाजिक सुरक्षा समझौते: यदि विदेशी कर्मचारी के देश और कोरिया के बीच सामाजिक सुरक्षा समझौता है, तो पेंशन और स्वास्थ्य बीमा के योगदान और वापसी को समायोजित किया जा सकता है।
      पंजीकरण और प्रबंधन: विदेशी पंजीकरण कार्ड प्राप्त करने के बाद, सभी 4 बीमा योजनाओं को व्यवस्थित रूप से प्रबंधित किया जाएगा।
      
      ☆4 प्रमुख बीमा योजनाओं में पंजीकरण प्रक्रिया
      -कंपनी द्वारा प्रबंधन: अधिकांश मामलों में, नियोक्ता कर्मचारियों की बीमा पंजीकरण प्रक्रिया को संभालते हैं।
      -स्वयं पंजीकरण: स्व-रोजगार करने वाले या बिना आय वाले लोग स्वयं राष्ट्रीय पेंशन और स्वास्थ्य बीमा के लिए आवेदन कर सकते हैं।`,

    vi: `Đây là thông tin về 4 bảo hiểm chính.
      Bốn loại bảo hiểm ở Hàn Quốc
      
      ■Bảo hiểm hưu trí quốc gia (National Pension) Mục đích: Hỗ trợ cuộc sống ổn định sau khi nghỉ hưu bằng cách tích lũy hàng tháng.
      Đối tượng tham gia: Tất cả người lao động và chủ doanh nghiệp từ 18 đến 59 tuổi.
      Người nước ngoài làm việc tại Hàn Quốc cũng phải tham gia bảo hiểm hưu trí quốc gia.
      Gánh nặng phí bảo hiểm: Người lao động: Đóng 4,5% thu nhập hàng tháng. / Chủ doanh nghiệp: Đóng thêm 4,5% tương đương.
      Điểm cần chú ý đối với người nước ngoài:
      Người lao động nước ngoài khi về nước có thể nhận lại khoản tiền đã đóng dưới dạng một lần (chỉ áp dụng nếu quốc gia của họ có thỏa thuận bảo hiểm xã hội với Hàn Quốc).
      Ví dụ các quốc gia có thỏa thuận: Mỹ, Đức, Nhật Bản, Trung Quốc.
      
      ■Bảo hiểm y tế quốc gia (National Health Insurance) Mục đích: Giảm bớt gánh nặng chi phí y tế do bệnh tật hoặc tai nạn.
      Đối tượng tham gia: Tất cả người lao động nước ngoài cư trú từ 6 tháng trở lên.
      Tùy vào hình thức tuyển dụng, công ty tự động đăng ký hoặc cá nhân tự đăng ký.
      Gánh nặng phí bảo hiểm: Người lao động: Đóng 3,675% thu nhập hàng tháng. / Chủ doanh nghiệp: Đóng 3,675% tương đương.
      Quyền lợi: Hưởng các dịch vụ y tế tại bệnh viện, nhà thuốc, nha khoa, v.v.
      Người nước ngoài được hưởng quyền lợi như người dân Hàn Quốc.
      
      ■Bảo hiểm việc làm (Employment Insurance) Mục đích: Hỗ trợ sinh hoạt khi thất nghiệp và cung cấp đào tạo tái tuyển dụng.
      Đối tượng tham gia: Chủ yếu là nhân viên chính thức và hợp đồng.
      Trừ một số ngành nghề đặc biệt hoặc lao động ngắn hạn (dưới 15 giờ/tuần).
      Gánh nặng phí bảo hiểm: Người lao động: Đóng 0,9% thu nhập hàng tháng. / Chủ doanh nghiệp: Đóng 0,9% + phụ phí bổ sung (phụ thuộc vào quy mô doanh nghiệp và loại hình lao động).
      Quyền lợi cho người nước ngoài:
      Hầu hết người lao động nước ngoài được hưởng trợ cấp thất nghiệp và phúc lợi liên quan.
      Tuy nhiên, lao động nước ngoài làm việc theo chế độ cấp phép (E-9) không thuộc diện trợ cấp thất nghiệp.
      
      ■Bảo hiểm tai nạn lao động (Workers’ Compensation Insurance) Mục đích: Hỗ trợ chi phí y tế, bồi thường thương tật và trợ cấp gia đình do tai nạn lao động hoặc bệnh nghề nghiệp.
      Đối tượng tham gia: Tất cả người lao động (bao gồm người nước ngoài).
      Tự động tham gia bất kể hình thức tuyển dụng hay thời gian làm việc.
      Gánh nặng phí bảo hiểm: Chủ doanh nghiệp đóng toàn bộ (người lao động không phải đóng).
      Quyền lợi: Chi trả phí điều trị, bồi thường thương tật, trợ cấp tử tuất khi xảy ra tai nạn lao động hoặc bệnh nghề nghiệp.
      
      ※Lưu ý cho lao động nước ngoài
      Hạn chế quyền lợi bảo hiểm: Tùy thuộc vào hình thức lao động và tình trạng cư trú, quyền lợi một số loại bảo hiểm (như bảo hiểm việc làm) có thể bị hạn chế.
      Thỏa thuận bảo hiểm xã hội: Nếu quốc gia của người lao động nước ngoài có thỏa thuận bảo hiểm xã hội với Hàn Quốc, việc đóng và nhận lại tiền bảo hiểm có thể được điều chỉnh.
      Đăng ký và quản lý: Sau khi nhận được thẻ đăng ký người nước ngoài, việc tham gia 4 loại bảo hiểm sẽ được quản lý hệ thống.
      
      ☆Quy trình tham gia 4 loại bảo hiểm
      -Do công ty xử lý: Phần lớn trường hợp, chủ doanh nghiệp có nghĩa vụ xử lý việc đăng ký bảo hiểm cho nhân viên.
      -Tự đăng ký: Người kinh doanh cá nhân hoặc không có thu nhập có thể tự đăng ký bảo hiểm hưu trí và bảo hiểm y tế.`,

    ru: `Это информация о 4 основных страхованиях.
      4 основные страховки Южной Кореи
      
      ■Национальная пенсионная система (National Pension) Цель: Обеспечение стабильной жизни на пенсии за счёт ежемесячных взносов.
      Кто должен участвовать: Все трудоустроенные лица и работодатели в возрасте от 18 до 59 лет.
      Иностранцы, работающие в Корее, также обязаны участвовать в пенсионной системе.
      Обязанность по оплате:
      Работник: вносит 4.5% от месячного дохода. / Работодатель: вносит дополнительно 4.5% от дохода работника.
      Особенности для иностранцев:
      Если иностранный работник возвращается в свою страну, он может получить свои взносы в виде единовременной выплаты, при условии, что страна заключила соглашение о социальном обеспечении с Южной Кореей.
      Примеры стран: США, Германия, Япония, Китай.
      
      ■Национальное медицинское страхование (National Health Insurance) Цель: Снижение финансовой нагрузки при заболеваниях или несчастных случаях.
      Кто должен участвовать: Все иностранцы, проживающие в Корее более 6 месяцев.
      В зависимости от типа работы, страхование может быть оформлено работодателем или работником самостоятельно.
      Обязанность по оплате: Работник: вносит 3.675% от месячного дохода. / Работодатель: вносит дополнительно 3.675%.
      Преимущества:
      Страховые выплаты покрывают медицинские услуги в больницах, аптеках, стоматологиях и т.д.
      Иностранцы получают медицинское обслуживание наравне с гражданами Кореи.
      
      ■Страхование от безработицы (Employment Insurance) Цель: Поддержка в случае потери работы, обучение и переобучение.
      Кто должен участвовать: Большинство сотрудников с постоянным и временным трудовым договором.
      Исключение составляют сотрудники, работающие менее 15 часов в неделю, или некоторые категории работников.
      Обязанность по оплате: Работник: вносит 0.9% от месячного дохода. / Работодатель: вносит 0.9% + дополнительные расходы (в зависимости от размера компании и типа трудоустройства).
      Особенности для иностранцев:
      Большинство иностранных работников имеют право на получение пособия по безработице.
      Однако иностранцы, работающие по визе E-9, не имеют права на пособие.
      
      ■Страхование от производственных травм (Workers’ Compensation Insurance) Цель: Выплата компенсаций за лечение, инвалидность или смерть, связанных с несчастными случаями на работе или профессиональными заболеваниями.
      Кто должен участвовать: Все сотрудники, включая иностранцев.
      Не зависит от типа работы или количества часов, страхование оформляется автоматически.
      Обязанность по оплате: Работодатель оплачивает взносы в полном объёме (работники не платят).
      Преимущества:
      Покрытие расходов на лечение травм, инвалидности или заболеваний, связанных с работой.
      Выплаты компенсации в случае инвалидности или смерти.
      Особенности для иностранных работников

      ※Ограничения по страховым выплатам: В зависимости от типа трудоустройства и статуса визы, некоторые виды выплат могут быть недоступны (например, пособия по безработице).
      Соглашения о социальном обеспечении: Если страна иностранного работника имеет соглашение с Кореей, порядок выплат по пенсионному и медицинскому страхованию может быть изменён.
      Регистрация и управление: После получения удостоверения иностранца, все 4 страховки регулируются автоматически.
      Как оформить страховку
      
      ☆Через работодателя: В большинстве случаев работодатель обязан зарегистрировать сотрудника в системе 4 страховок.
      - Самостоятельная регистрация: Индивидуальные предприниматели или лица без дохода могут - 
      - самостоятельно зарегистрироваться в национальной пенсионной и медицинской системах.`,

    zh: `这是关于4种主要保险的信息。
      ■国民年金 (National Pension) 目的：通过每月累积金额，为退休后的生活提供稳定保障。
      加入对象：18至59岁的所有劳动者和雇主。
      外国人在韩国被雇佣时也需加入国民年金。
      保险费负担：劳动者：支付月收入的4.5%。/ 雇主：与劳动者同等支付4.5%。
      外国人需注意事项：
      外国劳动者回国时，如果本国与韩国有社会保障协议，可一次性领取个人缴纳的金额。
      协议国家例：美国、德国、日本、中国等。
      
      ■健康保险 (National Health Insurance) 目的：减少因疾病或事故导致的医疗费用负担。
      加入对象：所有外国劳动者在入境后满6个月需强制加入。
      根据雇佣形式，由公司自动加入或个人直接加入。
      保险费负担：劳动者：支付月收入的3.675%。/ 雇主：支付与劳动者相同的3.675%。
      福利：在医院、药店、牙科等处就医时，可享受保险福利。外国人享有与韩国人相同的医疗福利。
      
      ■雇佣保险 (Employment Insurance) 目的：在失业时提供生活保障，并支持再就业培训。
      加入对象：大部分正式员工和合同工。
      但每周工作时间少于15小时的短期工或部分特殊职业除外。
      保险费负担：
      劳动者：支付月收入的0.9%。/ 雇主：根据企业规模和雇佣形式支付0.9% + 额外费用。
      外国人福利：大多数外国劳动者可享受失业补助和相关福利。
      但通过**雇佣许可制(E-9)**工作的外国劳动者无法领取失业补助。
      
      ■工伤保险 (Workers’ Compensation Insurance) 目的：因工作事故或职业病造成的医疗费用、残疾赔偿及遗属补偿等提供支持。
      加入对象：所有劳动者（包括外国人）。
      无论雇佣形式或工作时间，自动加入。
      保险费负担：雇主全额负担（劳动者无需缴纳保险费）。
      福利：治疗工作中的受伤、职业病或事故，支付医疗费、伤残赔偿、死亡赔偿金等。
      
      ※外国劳动者的特别事项
      保险福利限制：根据雇佣形式和居留资格，部分保险（特别是雇佣保险）可能有限制。
      本国与韩国的社会保障协议：如果韩国与外国劳动者本国签署了社会保障协议，国民年金或健康保险的缴费及退款可能会有所调整。
      登记与管理：领取外国人登记证后，四大保险的加入将被系统管理。
      
      ☆四大保险的加入程序
      -由公司处理：大多数情况下，雇主有义务为员工处理四大保险的加入。
      -自行加入：个体经营者或无收入者可自行申请加入国民年金及健康保险。
`,
  },

  노동법: {
    ko: `노동법에 대한 정보입니다.
      한국에 사는 외국인 근로자들은 한국인 근로자와 동일한 노동법의 보호를 받는다. 노동법에 관한 더 많은 정보는 고용노동부(http://www.moel.go.kr  [한, 영])에서 얻을 수 있습니다.
      1 근로시간
      ■법정근로시간은 휴식시간을 제외한 하루 8시간, 일주일 총 40시간입니다.
      ■산후 1년이 경과하지 않은 여성은 하루 2시간, 1주간 6시간, 1년 150시간을 넘는 연장근무를 할 수 없으며, 임신 중인 여성 근로자는 연장근무를 할 수 없습니니다.
      ■18세 이상의 여성에게 야간근로(22시~익일 6시), 휴일근무를 시키는 경우 근로자의 동의가 필요합니다.
      ■연장근무, 야간근로, 휴일근로에 대해서는 각 통상 임금의 50%를 가산하여 지급합니다.
      ■4시간 근로 시 30분, 8시간 근로 시 1시간의 휴식시간이 부여됩니다.
      
      2 임금
      ■2024년 최저임금은 9,860원(시급)입니다.
      ■고용주는 노동자의 임금을 수표나 현금으로 지급해야 합니다. 또, 노동자가 지급일자 전 미리 임금지급을 청구하는 경우 이미 노동한 임금에 대해서 지급해야 합니다.
      ■미수령 임금은 지방노동관서에 고소하거나 민사절차를 통해 해결할 수 있습니다.
      
      3 휴가
      ■1년 이상 근속, 80% 이상 출근한 노동자에게는 15일의 유급 휴가가 부여됩니다.
      ■근로 연수가 1년 미만인 근로자에게는 1달간 개근 시 1일의 유급 휴가가 부여됩니다.
      ■업무상의 부상, 병으로 인한 휴업, 산전·산후휴가, 유산·사상휴가로 쉰 기간은 출근으로 인정됩니다.
      ■여성 노동자는 월 1일, 생리휴가(무급)를 청구할 수 있습니다.

`,
    en: `This is information about labor laws.
      Foreign workers living in the Republic of Korea are protected under the labor laws in the same manner as Korean workers. Visit the Ministry of Employment and Labor website (http://www.moel.go.kr 
      [Korean and English]) for further information on the labor laws. 
      1 Per 1 hour of work
      ■ The maximum work hours are 8 hours per day, and 40 hours per week.
      ■ In the case of women for whom one year has not passed after childbirth, they shall not do overtime work exceeding 2 hours per day, 6 hours per week, or 150 hours per year.
      Pregnant female workers shall not be permitted to do overtime work.
      ■ In cases where an employer intends to have women of 18 years or older work during the night (10 pm - 6 am the following day) or on holidays, he/she shall be required to obtain the worker’s consent.
      ■ An employer shall, in addition to ordinary wages, pay 50% thereof for extended work, night work, or holiday work.
      ■ An employer shall allow workers a recess of not less than 30 minutes in cases of working for four hours, or a recess of not less than one hour in cases of working for eight hours, during work hours.
      
      2 Wages
      ■ The minimum hourly wage rate is 9,860 won in 2024.
      ■ An employer shall pay workers’ wages by check or in cash. 
      If a worker demands to be paid wages before the date of payment, the employer shall pay the wages corresponding to the work already done by the worker.
      ■ If a worker does not receive a portion of wages owed, he/she may file a suit with a regional labor authority or bring a civil suit.
      
      3 Vacation
      ■  An employer shall grant any worker who has worked not less than 80% of one year a paid leave of 15 days.
      ■ An employer shall grant any worker who has worked for less than one year one paid-leave day for each month during which he/she has continuously worked.
      ■ Periods during which a worker takes time off due to any injury or sickness arising out of performance of work duties, or takes maternity leave or miscarriage/stillbirth leave, shall be deemed as periods of attendance at work.
      ■ A female worker may file a claim for one day of (unpaid) menstrual leave per month.`,

    hi: `यह श्रम कानूनों के बारे में जानकारी है।
      श्रम कानून (Labor Law)
      दक्षिण कोरिया में विदेशी श्रमिकों को श्रम कानून के तहत कोरियाई नागरिकों के समान अधिकार मिलते हैं। अधिक जानकारी के लिए Ministry of Employment and Labor (http://www.moel.go.kr ) पर जाएं। कार्य समय
      कानूनी कार्य समय: 8 घंटे/दिन और 40 घंटे/सप्ताह (आराम का समय शामिल नहीं)।
      परसव के बाद 1 वर्ष तक महिलाएं 2 घंटे/दिन, 6 घंटे/सप्ताह और 150 घंटे/साल से अधिक काम नहीं कर सकतीं।
      गर्भवती महिलाओं को अतिरिक्त कार्य की अनुमति नहीं है।
      18 वर्ष से अधिक आयु की महिलाओं को रात में (22:00~06:00) या छुट्टी के दिन काम करने के लिए उनकी सहमति आवश्यक है। 
      अतिरिक्त काम, रात का काम और छुट्टी के दिन का काम करने पर 50% अतिरिक्त वेतन दिया जाता है।
      4 घंटे काम करने पर 30 मिनट का आराम और 8 घंटे काम करने पर 1 घंटे का आराम दिया जाता है।
      वेतन
      2024 के लिए न्यूनतम वेतन: 9,860 KRW/घंटा।
      नियोक्ता श्रमिक को वेतन नकद या बैंक ट्रांसफर के माध्यम से दे।
      यदि श्रमिक भुगतान की तारीख से पहले वेतन का अनुरोध करता है, तो पहले से किए गए काम का भुगतान करना अनिवार्य है।
      लंबित वेतन के लिए श्रमिक स्थानीय श्रम कार्यालय में शिकायत कर सकता है या सिविल प्रक्रिया के माध्यम से समाधान कर सकता है। 
      अवकाश 1 वर्ष से अधिक कार्यरत और 80% से अधिक उपस्थिति वाले श्रमिकों को 15 दिन का भुगतान अवकाश दिया जाता है।
      1 वर्ष से कम कार्यरत श्रमिकों को हर महीने 1 दिन का भुगतान अवकाश मिलता है यदि वे लगातार काम करते हैं।
      कार्य के दौरान चोट, बीमारी, प्रसव पूर्व और प्रसवोत्तर अवकाश, गर्भपात के कारण ली गई छुट्टियां उपस्थिति में गिनी जाती हैं।
      महिलाएं प्रति माह 1 दिन का अवैतनिक अवकाश (मासिक धर्म अवकाश) ले सकती हैं।`,

    vi: `Đây là thông tin về luật lao động.
      Luật Lao Động
      Người lao động nước ngoài tại Hàn Quốc được bảo vệ theo Luật lao động giống như người Hàn Quốc. Thông tin chi tiết có thể tìm thấy trên trang web Bộ Lao động Hàn Quốc (http://www.moel.go.kr ).
  
      Thời gian làm việc
      Thời gian làm việc tiêu chuẩn là 8 giờ/ngày, 40 giờ/tuần, không bao gồm giờ nghỉ.
      Phụ nữ trong vòng 1 năm sau sinh không được làm thêm quá 2 giờ/ngày, 6 giờ/tuần, và 150 giờ/năm.
      Phụ nữ mang thai không được làm thêm giờ.
      Nếu phụ nữ trên 18 tuổi làm việc ban đêm (22h~6h hôm sau) hoặc vào ngày nghỉ, phải có sự đồng ý của người lao động.
      Làm thêm giờ, làm việc ban đêm, hoặc vào ngày nghỉ sẽ được trả thêm 50% tiền lương cơ bản.
      Nghỉ 30 phút khi làm việc 4 giờ, và nghỉ 1 giờ khi làm việc 8 giờ.
      
      Tiền lương
      Mức lương tối thiểu năm 2024 là 9,860 KRW/giờ.
      Người sử dụng lao động phải trả lương bằng tiền mặt hoặc chuyển khoản ngân hàng.
      Nếu người lao động yêu cầu, người sử dụng lao động phải trả tiền lương cho công việc đã hoàn thành trước ngày trả lương chính thức.
      Trường hợp không nhận được lương, người lao động có thể khiếu nại tại Văn phòng Lao động địa phương hoặc giải quyết qua thủ tục dân sự.
      
      Ngày nghỉ
      Người lao động làm việc liên tục trên 1 năm và có tỷ lệ đi làm trên 80% sẽ được hưởng 15 ngày nghỉ có lương.
      Người lao động làm việc dưới 1 năm sẽ được 1 ngày nghỉ có lương cho mỗi tháng làm việc đủ.
      Thời gian nghỉ do bị thương, ốm đau liên quan đến công việc, nghỉ thai sản, sảy thai hoặc lưu sản đều được tính vào số ngày làm việc.
      Phụ nữ được phép xin nghỉ 1 ngày không lương mỗi tháng (nghỉ kinh nguyệt).
      `,

    ru: `Это информация о трудовом законодательстве.
      Трудовой кодекс
      Иностранные работники, проживающие в Республике Корея, защищены тем же трудовым законодательством, что и корейские работники. Более подробную информацию о трудовом законодательстве можно получить в Министерстве занятости и труда (http://www.moel.go.kr  (языки: корейский, англ.).
      • ﻿﻿Часы работы 
      « Максимальное время работы - 8 часов в день за исключением времени перерывов, 40 часов в неделю.
      «Женщины, у которых не истек год после родов, не должны работать сверхурочно больше двух часов в день, шести часов в неделю или 150 часов в год, а беременные женщины не должны работать сверхурочно вообще.
      Если работодатель планирует привлекать к работе в ночную смену (с 22 часов до 6 часов утра следующего дня) и по праздникам женщин от 18 лет и старше, необходимо получить их согласие.
      «Для сверхурочной работы, ночной работы и праздничной работы необходимо добавить оплату в 50% от обычной заработной платы.
      • ﻿﻿Работодатель обеспечивает работникам перерыв не менее 30 минут в случае работы в течение 4 часов и не менее часа в случае работы в течение 8 часов.
      • ﻿﻿Заработная плата
      • ﻿Минимальная заработная плата в 2024 году составляет 9860 вон в час и будет увеличена до.
      Работодатель должен платить зарплату работникам чеком или наличными. Кроме того, если работник просит оплатить зарплату до даты оплаты, работодатель должен выплатить зарплату за уже проделанную работу.
      • ﻿Невыплаченная заработная плата может быть запрошена при подаче жалобы в местное бюро по трудоустройству или через судебную процедуру по гражданскому делу.
      © Отпуск
      • ﻿﻿Работники, которые проработали не менее одного года и выходили на работу более 80% в этот период, имеют право на оплачиваемый отпуск продолжительностью 15 дней.
      • ﻿Работник, проработавший менее года, получает однодневный оплачиваемый отпуск за каждый месяц работы.
      • ﻿Выходом на работу признается время отдыха из-за травмы, полученной на работе, болезней, отпуска по беременности и родам, отпуска по выкидышу и мертворождению.
      • ﻿﻿Женщина может потребовать однодневный физиологический отпуск (без оплаты) каждый месяц.`,

    zh: `这是关于劳动法的信息。
      在韩外籍劳动者与韩国人劳动者受相同劳动法的保护。有关于劳动法的更多信息可登录 雇用劳动部网站(http://www.moel.go.kr  [韩、英])获取。
      1 劳动时间
      ■ 法定劳动时间为一天八小时、一周共计40小时，不包括休息时间。
      ■ 产后未满一年的女性加班时间不得超过一天2小时、一周6小时、一年150小时，妊娠女性劳动者不得加班。
      ■ 令18周岁以上女性夜间劳动(22点至次日6点)或休息日劳动时，须征得劳动者同意。
      ■ 对于加班、夜间劳动或休息日劳动的劳动者，加算标准工资的50%进行支付。
      ■ 劳动4小时赋予30分钟、劳动8小时赋予1小时的休息时间。
      
      2 工资
      ■2024年最低小时工资为9,860韩元。
      ■ 雇主应以支票或现金形式支付劳动者工资。
      劳动者提出工资发放日前提前发放工资时，至少须支付已劳动部分的工资。
      ■ 未领取到工资的情况下，可通过上诉至地方 劳动官署或申请民事流程的方式解决。
      
      3 休假
      ■ 连续工作一年以上、出勤率达80%以上的劳 动者享有15天的带薪休假权利。
      ■ 劳动时间未满一年的劳动者满勤一个月时，享有一天的带薪休假权利。
      ■ 因工作原因导致的伤病休息、产前产后休假、流产或死产休息情况认定为出勤。
      ■ 女性劳动者可申请每月一次的生理期休假(无薪)。`,
  },
};

// 자동 응답 버튼 클릭 이벤트
document.querySelectorAll(".quick-reply").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.getAttribute("data-topic");
    const userMessage = button.textContent;
    const botReply = responses[topic][currentLanguage];

    addMessage(userMessage, "user"); // 버튼 제목을 사용자 메시지로 추가
    addMessage(botReply, "bot"); // 선택된 언어에 맞는 답변 추가
  });
});

//과거 대화 AI 요약 및 저장 기능을 추가한..
// 메시지 추가 함수
function addMessage(message, sender) {
  const chatbox = document.getElementById("chatbox");
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);
  chatbox.scrollTop = chatbox.scrollHeight; // 최신 메시지로 스크롤 이동
}

// 메시지 전송 이벤트
document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

async function getBotResponse(userMessage) {
  const response = await fetch('https://your-backend-or-openai-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ prompt: userMessage })
  });
  const data = await response.json();
  return data.answer; // 응답 JSON 형식에 따라 변경
}

// 메시지 전송 함수
function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userMessage = inputField.value.trim();

  if (userMessage === "") return;

  // 사용자 메시지 추가
  addMessage(userMessage, "user");

  // OpenAI API를 통한 응답 생성
  getBotResponse(userMessage).then((botMessage) => {
    addMessage(botMessage, "bot");

    // 대화 히스토리에 저장
    saveConversationAndSummarize(userMessage, botMessage);
  });

  inputField.value = ""; // 입력 필드 초기화
}
// 대화 저장 및 요약
function saveConversationAndSummarize(userMessage, botMessage) {
  const newConversation = {
    date: new Date().toLocaleString("ko-KR", {
      dateStyle: "short",
      timeStyle: "short",
    }),
    userMessage: userMessage,
    botMessage: botMessage,
  };

  conversationHistory.push(newConversation);

  // 로컬 스토리지에 저장
  saveHistoryToLocalStorage();
}

// 로컬 스토리지에 히스토리 저장
function saveHistoryToLocalStorage() {
  localStorage.setItem(
    "conversationHistory",
    JSON.stringify(conversationHistory)
  );
}

// 로컬 스토리지에서 히스토리 불러오기
function loadHistoryFromLocalStorage() {
  const savedHistory = localStorage.getItem("conversationHistory");
  if (savedHistory) {
    conversationHistory.push(...JSON.parse(savedHistory));
  }
}

// 페이지 로드 시 히스토리 불러오기
document.addEventListener("DOMContentLoaded", () => {
  loadHistoryFromLocalStorage();
});

// 음성 인식
if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
  alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
}

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "ko-KR";

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  addMessage(transcript, "user");

  // 봇 응답 처리
  getBotResponse(transcript).then((botMessage) => {
    addMessage(botMessage, "bot");
  });
};

recognition.onerror = (event) => {
  console.error("음성 인식 에러:", event.error);
  if (event.error === "no-speech") {
    alert("음성이 인식되지 않았습니다. 다시 시도해주세요.");
  }
};

// 음성 인식 한 번 실행 후 종료
document.getElementById("voiceButton").addEventListener("click", () => {
  recognition.start();
});

//------------- 원하는 대화 저장 기능 --------------//
const chatbox = document.getElementById("chatbox");
const logBtn = document.querySelector(".log-btn");
const inputContainer = document.querySelector(".input-container");
const mainContainer = document.querySelector(".main-container");
const choiceContainer = document.querySelector(".choice-container");

let selectedMessages = [];

// 메시지 선택 이벤트 핸들러
function enableMessageSelection() {
  chatbox.addEventListener("click", messageSelectionHandler);
}

// 메시지 선택 이벤트 핸들러 함수
function messageSelectionHandler(event) {
  if (event.target.classList.contains("chat-message")) {
    const msg = event.target;
    msg.classList.toggle("selected");

    const messageText = msg.textContent.trim();
    if (msg.classList.contains("selected")) {
      selectedMessages.push({
        text: messageText,
        sender: msg.classList.contains("user") ? "user" : "bot", // sender 정보 추가
      });
    } else {
      selectedMessages = selectedMessages.filter(
        (message) => message.text !== messageText // 선택 해제 시 제거
      );
    }
  }
}

// 선택된 메시지 저장 함수
function saveMessages(title) {
  if (selectedMessages.length === 0) {
    alert("저장할 메시지를 선택해주세요.");
    return;
  }

  const savedMessages = selectedMessages.slice(); // 메시지 복사

  // 저장 후 선택된 메시지 초기화
  selectedMessages = [];
  const allMessages = document.querySelectorAll(".chat-message");
  allMessages.forEach((msg) => msg.classList.remove("selected"));
  alert("메시지가 저장되었습니다.");

  // 제목에 해당하는 버튼 생성
  const createdButton = document.createElement("button");
  createdButton.textContent = title;
  createdButton.className = "generated-button";
  choiceContainer.appendChild(createdButton);

  // 생성된 버튼 클릭 시 저장된 메시지 표시
  createdButton.addEventListener("click", () => {
    displaySavedMessages(savedMessages);
  });
}

// 저장된 메시지 화면에 표시 함수
function displaySavedMessages(savedMessages) {
  // 이전에 표시된 메시지들 제거
  const existingMessagesContainer = document.querySelector(
    ".saved-messages-container"
  );
  if (existingMessagesContainer) {
    existingMessagesContainer.remove();
  }

  // 새로운 컨테이너 생성
  const messagesContainer = document.createElement("div");
  messagesContainer.className = "chat-container";

  // 높이를 설정
  messagesContainer.style.height = "88vh"; // 80% 화면 높이로 설정

  // LawBot 로고 추가
  const logoDiv = document.createElement("div");
  logoDiv.className = "logo";
  logoDiv.textContent = "LawBot";
  messagesContainer.appendChild(logoDiv);
  // 닫기 버튼 추가
  const closeButton = document.createElement("button");
  closeButton.className = "close-btn"; // CSS 클래스를 지정
  closeButton.textContent = "🔙";
  messagesContainer.appendChild(closeButton);
  // list-btn 숨기기
  const listBtn = document.querySelector(".list-btn");
  if (listBtn) {
    listBtn.style.display = "none"; // messagesContainer가 표시되면 list-btn 숨기기
  }

  // 새로운 chat-box 생성
  const chatBox = document.createElement("div");
  chatBox.className = "chat-box";
  chatBox.style.height = "69vh";

  // 저장된 메시지들을 화면에 추가
  savedMessages.forEach((message) => {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("chat-message");

    // 메시지가 'user'일 경우 user 스타일 적용, 아니면 bot 스타일
    if (message.sender === "user") {
      messageDiv.classList.add("user");
    } else if (message.sender === "bot") {
      messageDiv.classList.add("bot");
    }

    messageDiv.textContent = message.text;
    chatBox.appendChild(messageDiv);
  });

  // chat-box를 chat-container에 추가
  messagesContainer.appendChild(chatBox);

  // 메시지 컨테이너를 화면에 추가
  mainContainer.appendChild(messagesContainer); // 닫기 버튼 클릭 시 동작 정의
  closeButton.addEventListener("click", () => {
    // log-btn을 클릭하기 전 상태로 돌아가도록 설정
    inputContainer.style.display = "block"; // 입력창을 다시 보이게
    messagesContainer.remove(); // chat-container를 삭제하여 화면에서 제거
    listBtn.style.display = "block"; // list-btn 다시 보이기
  });
}
// ------------------- + 버튼 관련 이벤트 -------------//
logBtn.addEventListener("click", () => {
  inputContainer.style.display = "none"; // 대화 입력창 숨기기

  // 기존 log-container가 있으면 제거
  const existingLogContainer = document.querySelector(".log-container");
  if (existingLogContainer) {
    existingLogContainer.remove();
  }

  // 새로운 log-container 생성
  const logContainer = document.createElement("div");
  logContainer.className = "log-container";

  const instructionText = document.createElement("div");
  instructionText.textContent =
    "저장하고 싶은 대화를 선택하고 하단에 제목을 입력해주세요. 우측의 확인 버튼을 클릭 시 응답이 저장됩니다.";
  instructionText.className = "instruction-text";
  logContainer.appendChild(instructionText);

  // 입력 필드와 확인 버튼 추가
  const inputButtonContainer = document.createElement("div");
  inputButtonContainer.className = "input-button-container";

  const inputField2 = document.createElement("input");
  inputField2.type = "text";
  inputField2.placeholder = "제목을 입력하세요";
  inputButtonContainer.appendChild(inputField2);

  const confirmBtn = document.createElement("button");
  confirmBtn.textContent = "확인";
  inputButtonContainer.appendChild(confirmBtn);

  // 'closeButton' 추가
  const closeButton = document.createElement("button");
  closeButton.className = "close-btn";
  closeButton.textContent = "🔙";
  logContainer.appendChild(closeButton);

  const listBtn = document.querySelector(".list-btn");
  if (listBtn) {
    listBtn.style.display = "none"; // messagesContainer가 표시되면 list-btn 숨기기
  }
  mainContainer.appendChild(logContainer);
  logContainer.appendChild(inputButtonContainer);

  // closeButton 클릭 시 원래 상태로 돌아가기
  closeButton.addEventListener("click", () => {
    logContainer.remove(); // log-container를 삭제하여 화면에서 제거
    inputContainer.style.display = "block"; // 입력창을 다시 보이게
  });

  // confirmBtn 클릭 시 제목 입력 및 메시지 저장
  confirmBtn.addEventListener("click", () => {
    const title = inputField2.value.trim(); // 제목을 inputField2에서 가져옴
    if (title) {
      // 선택된 메시지를 저장
      saveMessages(title);

      // 메시지 저장 후 input-container 다시 보이기
      logContainer.remove(); // logContainer 삭제
      inputContainer.style.display = "block"; // input-container 다시 보이기
    } else {
      alert("제목을 입력해주세요.");
    }
  });

  // 메시지 선택 활성화 (log-btn 클릭 시에만)
  enableMessageSelection();
});
