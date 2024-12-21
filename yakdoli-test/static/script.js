document.getElementById("btnword").addEventListener("click", () => {
  // Word.html 파일 열기
  window.location.href = "/word";
});

document.getElementById("btnmain").addEventListener("click", () => {
  // index.html 파일 열기
  window.location.href = "/";
});

//----------------------언어 변경 -------------------------//

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
languageModal.style.display = "none"; // 모달 숨김

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
  document.getElementById("sendButton").textContent = langData.btnsend;
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
    ko: `
LawBot 사용 방법 안내입니다.

•🌐 : 언어를 선택할 수 있습니다.

•🎤 : 음성으로 질문을 입력할 수 있습니다.

•✔️	: 이민 관련 법률에 대해 자주 문의하신 상위 4가지 주제로 입력창 상단에서 확인하실 수 있습니다.

      → 이민준비 ✔️ / 임대차 계약 🏠 / 4대 보험 ⚖️ / 노동법 💼 

•💭 : 하단 입력창에 법령에 관련하여 궁금하신 내용을 자유롭게 입력하고 Enter 키를 누르거나 전송 버튼을 클릭해 주세요.

      → “전세 계약 시 주의할 점은 무엇인가요?”

•📖 : 하단 입력창에 궁금한 용어를 자유롭게 입력하고 Enter 키를 누르거나 전송 버튼을 클릭해 주세요.

      → “근로기준법”

•📌 : 전체 대화 내용이 자동으로 저장되어 과거의 챗봇과의 대화 내용을 확인하실 수 있습니다.

•✏️ : 직접 설정한 이름으로 원하는 대화 내용만을 선택하고, 저장할 수 있습니다. 

`,

    en: `
Here is a guide on how to use LawBot.

•🌐: You can select a language.

•🎤: You can input your questions by voice.

•✔️: You can check the top 4 frequently asked topics about immigration laws at the top of the input window.

      →  Immigration Preparation ✔️ / Lease Agreement 🏠 / 4 Major Insurances ⚖️ / Labor Law 💼

•💭: Please freely enter any questions you have about the law in the input window below and press Enter or click the Send button.

      →  “What should I be careful of when signing a lease?”

•📖: Please freely enter any terms you are curious about in the input window below and press Enter or click the Send button.

      →  “Labor Standards Act”

•📌: The entire conversation is automatically saved, so you can check your past conversations with the chatbot.

•✏️: You can select and save only the desired conversations with a name you set yourself.

`,

    hi: `
यहां लॉबॉट का उपयोग करने के निर्देश दिए गए हैं।

•🌐: आप एक भाषा का चयन कर सकते हैं।

•🎤: आप आवाज से प्रश्न दर्ज कर सकते हैं।

•✔️: आप इनपुट विंडो के शीर्ष पर आव्रजन कानूनों के बारे में सबसे अधिक बार पूछे जाने वाले शीर्ष 4 विषयों की जांच कर सकते हैं।

      →  आप्रवासन तैयारी ✔️ / पट्टा अनुबंध 🏠 / चार प्रमुख बीमा ⚖️ / श्रम कानून 💼

•💭: कृपया बेझिझक नीचे दिए गए इनपुट बॉक्स में कानून के बारे में अपने कोई भी प्रश्न दर्ज करें और एंटर दबाएं या सबमिट बटन पर क्लिक करें।

      →  "पट्टे पर हस्ताक्षर करते समय मुझे क्या ध्यान देना चाहिए?"

•📖: कृपया नीचे इनपुट बॉक्स में वह शब्द स्वतंत्र रूप से दर्ज करें जिसके बारे में आप जानना चाहते हैं और एंटर दबाएं या सबमिट बटन पर क्लिक करें।

      →  "श्रम मानक अधिनियम"

•📌: पूरी बातचीत स्वचालित रूप से सहेजी जाती है, इसलिए आप चैटबॉट के साथ पिछली बातचीत की जांच कर सकते हैं।

•✏️: आप केवल उस वार्तालाप सामग्री को चुन सकते हैं और सहेज सकते हैं जिसे आप स्वयं सेट किए गए नाम से चाहते हैं।

`,

    vi: `
Dưới đây là hướng dẫn cách sử dụng LawBot.

•🌐: Bạn có thể chọn ngôn ngữ.

•🎤: Bạn có thể nhập câu hỏi bằng giọng nói.

• ✔️: Bạn có thể kiểm tra 4 chủ đề được hỏi thường xuyên nhất về luật nhập cư ở đầu cửa sổ nhập liệu.

      →  Chuẩn bị nhập cư ✔️ / Hợp đồng thuê nhà 🏠 / Bốn loại bảo hiểm chính ⚖️ / Luật lao động 💼

•💭: Vui lòng nhập bất kỳ câu hỏi nào của bạn về pháp luật vào hộp nhập ở phía dưới và nhấn Enter hoặc nhấp vào nút Gửi.

      →  “Tôi nên chú ý điều gì khi ký hợp đồng thuê nhà?”

•📖: Vui lòng nhập cụm từ bạn quan tâm vào ô nhập ở phía dưới và nhấn Enter hoặc nhấp vào nút Gửi.

      →  “Đạo luật tiêu chuẩn lao động”

•: Toàn bộ cuộc trò chuyện sẽ được lưu tự động nên bạn có thể kiểm tra các cuộc trò chuyện trước đây với chatbot.

•✏️: Bạn chỉ có thể chọn và lưu nội dung cuộc trò chuyện mà bạn muốn với tên do chính bạn đặt.

`,

    ru: `
Вот инструкции по использованию LawBot.

•🌐: Вы можете выбрать язык.

•🎤: Вы можете вводить вопросы голосом.

•✔️: Вы можете проверить 4 наиболее часто задаваемых темы об иммиграционном законодательстве в верхней части окна ввода.

      →  Подготовка к иммиграции✔️ / Договор аренды 🏠 / Четыре основные страховки ⚖️ / Трудовое право 💼

•💭: Пожалуйста, не стесняйтесь задавать любые вопросы о законе в поле ввода внизу и нажмите «Ввод» или нажмите кнопку «Отправить».

      →  «На что следует обратить внимание при заключении договора аренды?»

•📖: Пожалуйста, введите интересующий вас термин в поле ввода внизу и нажмите Enter или нажмите кнопку «Отправить».

      →  «Закон о трудовых стандартах»

•📌: весь разговор автоматически сохраняется, поэтому вы можете проверить прошлые разговоры с помощью чат-бота.

•✏️: вы можете выбрать и сохранить только то содержимое беседы, которое вам нужно, с именем, которое вы установили сами.

`,

    zh: `
以下是有关如何使用 LawBot 的说明。

•🌐：您可以选择一种语言。

•🎤：您可以通过语音输入问题。

•✔️：您可以在输入窗口顶部查看关于移民法最常见的 4 个主题。

      →  移民准备✔️/租赁合同🏠/四大保险⚖️/劳动法💼

•💭：请随时在底部输入框中输入您对法律的任何疑问，然后按回车键或点击提交按钮。

      → “签订租约时需要注意什么？”

•📖：请在底部输入框中自由输入您感兴趣的术语并按回车键或点击提交按钮。

      →  《劳动基准法》

•📌：整个对话会自动保存，因此您可以检查过去与聊天机器人的对话。

•✏️：您可以仅选择并保存您想要的对话内容，并使用您自己设置的名称。

`,
    ja: `
LawBotの使い方ガイドです。

•🌐：言語を選択できます。

•🎤：音声で質問を入力できます。

•✔️：移民関連の法律についてよく寄せられる上位4つのトピックで、入力ウィンドウの上部で確認できます。

      → 移民準備✔️/賃貸借契約🏠/4大保険⚖️/労働法💼

•💭：下の入力ウィンドウに法令に関して気になった内容を自由に入力してEnterキーを押すか、転送ボタンをクリックしてください。

      → 「貸切契約時の注意点は何ですか？」

•📖：下の入力ウィンドウに気になる用語を自由に入力してEnterキーを押すか、転送ボタンをクリックしてください。

      → 「労働基準法」

•📌：全体の会話内容が自動的に保存され、過去のチャットボットとの会話内容を確認できます。

•✏️：自分で設定した名前で希望の会話内容のみを選択して保存できます。

`,
    tl: `
Narito ang mga tagubilin kung paano gamitin ang LawBot.

•🌐: Maaari kang pumili ng wika.

•🎤: Maaari kang maglagay ng mga tanong sa pamamagitan ng boses.

•✔️: Maaari mong tingnan ang nangungunang 4 na paksa na pinakamadalas itanong tungkol sa mga batas sa imigrasyon sa itaas ng input window.

      → Paghahanda sa imigrasyon ✔️ / Kontrata sa pag-upa 🏠 / Apat na pangunahing insurance ⚖️ / Batas sa paggawa 💼

•💭: Mangyaring huwag mag-atubiling maglagay ng anumang mga tanong na mayroon ka tungkol sa batas sa kahon ng input sa ibaba at pindutin ang Enter o i-click ang button na Isumite.

      → "Ano ang dapat kong bigyang pansin kapag pumirma ng isang lease?"

•📖: Mangyaring malayang ilagay ang terminong gusto mong malaman sa kahon ng pag-input sa ibaba at pindutin ang Enter o i-click ang button na Isumite.

      → “Labor Standards Act”

•📌: Awtomatikong nase-save ang buong pag-uusap, para masuri mo ang mga nakaraang pag-uusap gamit ang chatbot.

•✏️: Maaari mong piliin at i-save lamang ang nilalaman ng pag-uusap na gusto mo gamit ang isang pangalan na ikaw mismo ang nagtakda.

`,
    uz: `
Bu erda LawBot-dan qanday foydalanish bo'yicha ko'rsatmalar mavjud.

•🌐: Siz tilni tanlashingiz mumkin.

•🎤: Savollarni ovozli kiritishingiz mumkin.

•✔️: Kirish oynasining yuqori qismida immigratsiya qonunlari haqida eng koʻp soʻraladigan 4 ta asosiy mavzuni tekshirishingiz mumkin.

      → Immigratsiyaga tayyorgarlik ✔️ / Lizing shartnomasi 🏠 / To'rtta asosiy sug'urta ⚖️ / Mehnat huquqi 💼

•💭: Qonun boʻyicha oʻzingizni qiziqtirgan savollaringizni pastdagi kiritish maydoniga yozib qoldiring va Enter tugmasini bosing yoki “Yuborish” tugmasini bosing.

      → "Ijara shartnomasini imzolashda nimalarga e'tibor berishim kerak?"

•📖: Iltimos, pastki qismidagi kiritish maydoniga qiziqqan atamani erkin kiriting va Enter tugmasini bosing yoki Yuborish tugmasini bosing.

      → "Mehnat standartlari to'g'risidagi qonun"

•📌: Barcha suhbat avtomatik tarzda saqlanadi, shuning uchun siz chatbot yordamida oldingi suhbatlarni tekshirishingiz mumkin.

•✏️: Siz oʻzingiz belgilagan nom bilan faqat kerakli suhbat mazmunini tanlashingiz va saqlashingiz mumkin.

`,
    th: `
คำแนะนำในการใช้ LawBot มีดังนี้

•🌐: คุณสามารถเลือกภาษาได้

•🎶: คุณสามารถป้อนคำถามด้วยเสียง

•✔️: คุณสามารถตรวจสอบหัวข้อ 4 อันดับแรกที่ถูกถามบ่อยที่สุดเกี่ยวกับกฎหมายคนเข้าเมืองได้ที่ด้านบนของหน้าต่างป้อนข้อมูล

 → การเตรียมตัวเข้าเมือง ✔️ / สัญญาเช่า 🏠 / ประกันหลักสี่ ⚖️ / กฎหมายแรงงาน 💼

•💭: โปรดป้อนคำถามที่คุณมีเกี่ยวกับกฎหมายในช่องป้อนข้อมูลด้านล่างแล้วกด Enter หรือคลิกปุ่มส่ง

 → “ฉันควรใส่ใจอะไรบ้างเมื่อเซ็นสัญญาเช่า”

•📖: โปรดป้อนคำที่คุณสงสัยในช่องป้อนข้อมูลด้านล่างได้อย่างอิสระแล้วกด Enter หรือคลิกปุ่มส่ง

 → “พระราชบัญญัติมาตรฐานแรงงาน”

•📌: การสนทนาทั้งหมดจะถูกบันทึกโดยอัตโนมัติ ดังนั้นคุณจึงสามารถตรวจสอบการสนทนาที่ผ่านมาด้วยแชทบอทได้

•✏️: คุณสามารถเลือกและบันทึกเฉพาะเนื้อหาการสนทนาที่คุณต้องการด้วยชื่อที่คุณตั้งเอง
`,
  },

  이민준비: {
    ko: `
이민 준비를 위한 필수 사항 ⭐️

  ⭐️ 비자 준비                                                                                                                              

      • 취업 비자(E 계열): E-2(영어강사), E-7(전문직) 등                            • 유학 비자(D 계열): D-2(대학·대학원 과정), D-4(어학연수)    

      • 결혼 이민 비자(F-6): 한국인 배우자와 결혼한 경우                           • 사업 비자(D-8): 투자 및 사업을 위한 비자

      → 발급 절차: 초청장, 재정증빙, 학력·경력 증빙서류 준비 후 한국 대사관·영사관에서 신청 (체류 목적에 따라 제출 서류 상이)

  ⭐️ 한국어 능력
      
      • 한국어 능력 향상이 취업, 학업, 생활 적응에 유리
      
      • TOPIK(Test of Proficiency in Korean) 성적이 요구되는 경우 있음(D-2, E-7 등)

  ⭐️ 거주지 확보

      • 계약 형태: 월세, 전세, 단기 렌트 등 다양

      • 부동산 거래 특이사항: 전세금, 보증금 제도 등 한국 부동산 법 이해 필요

  ⭐️ 건강보험 가입

      • 한국 도착 후 국민건강보험(National Health Insurance) 가입 필요

      → 체류 자격에 따라 자동 가입 또는 별도 신청

  ⭐️ 기타 서류 준비

      • 출생증명서, 범죄경력증명서, 학력 증명서 등 준비

      • 필요 시 한국어 번역 및 공증 절차 필수

  ------------------------------------------------------------------------------------------------------------------------

주요 이민 정책 ✈️ 

  ✈️ 체류 자격 및 외국인등록증

      • 90일 이상 체류하는 경우 외국인등록증(Alien Registration Card) 발급 필수

      • 체류 자격별로 취업, 학업, 가족 초청 등 활동 범위 결정

  ✈️ F-6 결혼 이민 비자

      • 한국인과 결혼한 외국인 대상

      • 초기 1년 유효기간, 갱신 통해 장기 체류 가능

      • 한국어 능력, 재정 안정성, 결혼 진정성 심사 실시
  
  ✈️ 영주권(F-5) 및 귀화

      • 영주권(F-5): 일정 기간 합법적 체류, 재정 능력·한국어 능력 충족 시 신청 가능

      • 귀화: 일반귀화, 간이귀화, 특별귀화로 구분. TOPIK 및 한국 역사·문화 시험 필요
  
  ✈️ 고용허가제(EPS) 및 E-9 비자

      • 비숙련 외국인 근로자를 대상으로 하는 고용허가제(EPS) 운영

      • 특정 산업(제조업, 건설업 등)에서 E-9 비자를 통해 취업 가능

      • 고용주는 정부 허가를 받아 외국인 근로자 채용 가능

  ------------------------------------------------------------------------------------------------------------------------

🇰🇷 문화적 적응

  • 예의와 존중을 중시하는 사회

  • 나이, 직급, 상황에 따른 언어(호칭) 사용법 숙지

  • 식사 예절, 사회적 규범, 문화 차이 이해 필요

------------------------------------------------------------------------------------------------------------------------

🎈 도움 받을 수 있는 기관

  • 대한민국 출입국·외국인정책본부: 비자 및 체류 관련 공식 정보 제공

  • 외국인 지원센터(각 지역): 생활 정보 제공, 한국 적응 프로그램, 법률 상담 지원
`,
    en: ``,

    hi: ``,

    vi: ``,

    ru: ``,

    zh: ``,

    ja: ``,

    th: ``,

    tl: ``,

    uz: ``,
  },

  임대차계약: {
    ko: `
1. 전세 (보증금제도)

  • 집주인에게 일정 금액을 보증금 형태로 맡기고 1~2년 임대차 계약 후 사용하는 제도. 
  
  • 계약 시 전세금액의 10%를 계약금으로 지불하고, 입주 시 잔금을 지불합니다.

  • 입주자는 임차기간 동안 입주 당시의 주택 상태를 유지해야 합니다.
  
        ※ 내부 인테리어 공사를 하고자 할 경우 반드시 집주인의 동의를 구해야 합니다.

  • 계약 종료 후, 집주인은 입주자에게 전세금 전액을 돌려주어야 합니다. 
      
2. 월세 

  • 1~2년의 임대차 계약 후, 소정의 보증금을 지불하고 매월 사용료(월세)를 지불하는 제도.
  
  • 보증금은 보통 다달이 내는 월세의 10~20배 정도입니다. 

  • 통상적으로 보증금의 10%를 계약금으로 내며 입주 시, 잔액을 완납합니다. 

       ※ 계약자가 중도에 계약을 해지하는 경우 계약금을 돌려 받을 수 없으며, 
       
           집주인이 계약을 파기한 경우에는 계약금의 2배를 계약자에게 지급해야 합니다. 

  • 보증금은 계약 종료 후 전액 돌려받는 것이 원칙입니다.

       ※ 월세 또는 공과금이 밀리는 등특수상황이 발생할 경우, 그 금액만큼 보증금에서 제외하고 돌려받을 수 있습니다.

  • 중개수수료는 주거형태, 면적, 거래금액에 따라 차이가 있습니다. 

       → 외국어 가능 부동산 목록은 서울시가 운영하는 서울부동산정보광장(http://land.seoul.go.kr)에서 확인할 수 있습니다.
`,
    en: ``,

    hi: ``,

    vi: ``,

    ru: ``,

    zh: ``,

    ja: ``,

    th: ``,

    tl: ``,

    uz: ``,
  },

  "4대보험": {
    ko: `
1. 국민연금 (National Pension) 

  • 목적: 노후에 안정적인 생활을 지원하기 위해 월별로 적립금을 모아 연금을 지급합니다.

  • 가입 대상: 만 18세 ~ 59세의 모든 근로자 및 사업자. 

                       ※ 외국인도 한국에서 고용되어 있으면 국민연금에 가입해야 합니다.

  • 보험료 부담 

        근로자 - 월 소득의 **4.5%**를 납부합니다. 

        고용주 - 근로자의 보험료와 동일하게 **4.5%**를 추가 납부합니다.

        ※ 외국인에게 유의할 점: 외국인 근로자가 귀국할 경우, 본인의 기여금을 일시금으로 반환받을 수 있습니다. 
        
                                              ↑ 해당 국가와 상호협정이 있는 경우만 가능

2. 건강보험 (National Health Insurance) 

  • 목적: 질병이나 사고로 인한 의료비 부담을 줄여줍니다.

  • 가입 대상: 모든 외국인 근로자는 입국 후 6개월 이상 체류 시 가입 의무화, 
  
                       ↑ 고용 형태에 따라 회사에서 자동 가입되거나 개인이 직접 가입해야 합니다.

  • 보험료 부담
  
        근로자 - 월 소득의 **3.675%**를 납부합니다.
  
        고용주 - 근로자의 보험료와 동일하게 **3.675%**를 추가 납부합니다.

  • 혜택: 병원, 약국, 치과 등에서 의료 서비스를 받을 때 보험 혜택을 적용하며, 외국인도 내국인과 동일한 의료 혜택을 제공합니다.

3. 고용보험 (Employment Insurance) 

  • 목적: 실직 시 생계 지원과 재취업을 위한 교육, 훈련을 제공합니다. 

  • 가입 대상: 정규직, 계약직 등 대부분의 근로자.

                       ↑ 단시간 근로자(주 15시간 미만)나 일부 특수 직종은 가입이 제외됩니다.

  • 보험료 부담 

        근로자 : 월 소득의 **0.9%**를 납부합니다.  
        
        고용주 : 근로자 소득의 0.9% + 추가 부담금 ← 기업 규모 및 고용 형태에 따라 상이합니다.

  • 외국인 혜택: 대부분 외국인 근로자는 실업급여와 고용보험 혜택을 받을 수 있음. 
        
      ※ 고용허가제(E-9)로 근무하는 외국인 근로자는 실업급여 대상이 아닙니다. 

4. 산재보험 (Workers’ Compensation Insurance) 

  • 목적: 업무 중 사고나 질병으로 인해 발생한 의료비, 장애보상, 유족보상 등을 지원합니다. 

  • 가입 대상: 모든 근로자 ← 고용 형태나 근무 시간과 관계없이 자동 가입해야 합니다. 

  • 보험료 부담: 전액 고용주 부담 ← 근로자는 보험료를 납부하지 않습니다.

  • 혜택: 업무 중 부상, 질병 치료비 지원. 장애 발생 시 보상금 지급, 사망 시 유족 보상금 지급합니다. 

      ※ 외국인 근로자에 대한 특이 사항 

            - 보험 혜택 제한 여부: 고용 형태와 체류 자격에 따라 일부 보험(특히 고용보험)의 혜택이 제한될 수 있습니다. 
      
            - 본국과의 사회보장 협정: 한국과 외국인 근로자 본국 간 사회보장 협정이 있는 경우,

                                                    국민연금 또는 건강보험의 가입과 반환금 수령이 조정될 수 있습니다. 

            - 등록 및 관리: 외국인 등록증을 발급받으면 4대 보험 가입이 체계적으로 관리됩니다. 

★ 4대 보험 가입의 절차 

  • 회사에서 처리: 대부분의 경우, 고용주는 직원의 4대 보험 가입을 의무적으로 처리합니다. 
  
  • 직접 가입: 자영업자 또는 소득이 없는 경우, 본인이 직접 국민연금과 건강보험 가입 신청 가능합니다. 
  
  • 한국에서 근무하며 안정적인 생활을 유지하기 위해 4대 보험 가입은 필수입니다. 
      
✓ 관련 기관 : 고용주 / 근로복지공단 / 국민연금공단
`,
    en: ``,

    hi: ``,

    vi: ``,

    ru: ``,

    zh: ``,

    ja: ``,

    th: ``,

    tl: ``,

    uz: ``,
  },

  노동법: {
    ko: `
★ 한국에 사는 외국인 근로자들은 한국인 근로자와 동일한 노동법의 보호를 받습니다. 

★ 노동법에 관한 더 많은 정보는 고용노동부(http://www.moel.go.kr)에서 얻을 수 있습니다.
          
    1. 근로시간

      • 법정근로시간은 휴식시간을 제외한 하루 8시간, 일주일 총 40시간입니다.

      • 산후 1년이 경과하지 않은 여성은 하루 2시간, 1주간 6시간, 1년 150시간을 넘는 연장근무를 할 수 없으며, 
      
          임신 중인 여성 근로자는 연장근무를 할 수 없습니다.

      • 18세 이상의 여성에게 야간근로(22시~익일 6시), 휴일근무를 시키는 경우 근로자의 동의가 필요합니다.

      • 연장근무, 야간근로, 휴일근로에 대해서는 각 통상 임금의 50%를 가산하여 지급합니다.

      • 4시간 근로 시 30분, 8시간 근로 시 1시간의 휴식시간이 부여됩니다.

    2. 임금

      • 2024년 최저임금은 9,860원(시급)입니다.

      • 고용주는 노동자의 임금을 수표나 현금으로 지급해야 합니다. 
      
      • 노동자가 지급일자 전 미리 임금지급을 청구하는 경우 이미 노동한 임금에 대해서 지급해야 합니다.

      • 미수령 임금은 지방노동관서에 고소하거나 민사절차를 통해 해결할 수 있습니다.

    3. 휴가

      • 1년 이상 근속, 80% 이상 출근한 노동자에게는 15일의 유급 휴가가 부여됩니다.

      • 근로 연수가 1년 미만인 근로자에게는 1달간 개근 시 1일의 유급 휴가가 부여됩니다.

      • 업무상의 부상, 병으로 인한 휴업, 산전·산후휴가, 유산·사상휴가로 쉰 기간은 출근으로 인정됩니다.
      
      • 여성 노동자는 월 1일, 생리휴가(무급)를 청구할 수 있습니다.
`,
    en: ``,

    hi: ``,

    vi: ``,

    ru: ``,

    zh: ``,

    ja: ``,

    th: ``,

    tl: ``,

    uz: ``,
  },
};
//---------------------------채팅--------------------/
// 자동 응답 버튼 클릭 이벤트
document.querySelectorAll(".quick-reply").forEach((button) => {
  button.addEventListener("click", () => {
    const topic = button.getAttribute("data-topic");
    const userMessage = button.textContent;
    const botReply = responses[topic][currentLanguage];

    addMessage(userMessage, "user"); // 버튼 제목을 사용자 메시지로 추가=
    addMessage(botReply, "bot"); // 선택된 언어에 맞는 답변 추가
  });
});

//과거 대화 AI 요약 및 저장 기능을 추가한..
// 메시지 추가 함수
function addMessage(message, sender) {
  const messageElement = document.createElement("div");
  messageElement.classList.add("chat-message", sender);
  messageElement.textContent = message;
  chatbox.appendChild(messageElement);

  chatbox.scrollTop = chatbox.scrollHeight; // 최신 메시지로 스크롤 이동
}

// // 메시지 전송 이벤트
document.getElementById("sendButton").addEventListener("click", sendMessage);
document.getElementById("userInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    sendMessage();
  }
});

// // 메시지 전송 함수
// function sendMessage() {
//   const inputField = document.getElementById("userInput");
//   const userMessage = inputField.value.trim(); // 사용자가 입력한 텍스트

//   if (userMessage === "") return; // 빈 입력 방지
//   console.log("User Message:", userMessage);
//   // 사용자 메시지를 채팅에 추가
//   addMessage(userMessage, "user");

//   // API를 통해 봇 응답 생성
//   getBotResponse(userMessage).then((botMessage) => {
//     console.log("Bot Message:", botMessage);
//     // 봇의 메시지를 채팅에 추가
//     addMessage(botMessage, "bot");

//     // 대화 기록 요약 및 저장 (선택적 기능)
//     saveConversationAndSummarize(userMessage, botMessage);
//   });

//   inputField.value = ""; // 입력 필드 초기화
// }

// // OpenAI API 호출 함수
// async function getBotResponse(userMessage) {
//   const url = "./ask/" + encodeURIComponent(userMessage);

//   try {
//     const response = await fetch(url, {
//       method: "GET", // POST를 사용하는 경우 JSON 데이터 설정 필요
//     });

//     // 응답 데이터 파싱
//     const data = await response.json();

//     // API 응답에서 answer 또는 reply 값을 반환
//     return (
//       data.answer || data.reply || "죄송합니다, 응답을 생성할 수 없습니다."
//     );
//   } catch (error) {
//     console.error("Error fetching bot response:", error);
//     return "서버와 통신 중 문제가 발생했습니다.";
//   }
// }
function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userMessage = inputField.value.trim(); // 사용자가 입력한 텍스트

  if (userMessage === "") return; // 빈 입력 방지

  console.log("User Message:", userMessage);
  const userMessageElement = addMessage(userMessage, "user");

  // 사용자 메시지를 화면에 표시
  userMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

    // Flask 서버로 POST 요청 전송
    fetch("/ask", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `userInput=${encodeURIComponent(userMessage)}`,
    })
      .then((response) => response.json())
      .then((data) => {
        const botMessage = data.answer;
        console.log("Bot Message:", botMessage);
        // 봇의 메시지를 약간의 지연 후에 추가
        setTimeout(() => {
          const botMessageElement = addMessage(botMessage, "bot");

          // 봇 메시지를 화면에 표시
          botMessageElement.scrollIntoView({ behavior: "smooth", block: "end" });

          // 대화 기록 요약 및 저장 (선택적 기능)
          // saveConversationAndSummarize(userMessage, botMessage);
        }, 500); // 0.5초 지연
      })
      .catch((error) => {
        console.error("Error fetching bot response:", error);
        addMessage("서버와 통신 중 문제가 발생했습니다.", "bot");
      });

  inputField.value = ""; // 입력 필드 초기화
}

// ------------예린님 압정 ! ---------------//
/*--------------------------------------------과거 대화 part-------------------------------------------------------------------------------------*/
// 과거 대화 모달 관련 DOM 요소

const historyModal = document.getElementById("historyModal");
const closeHistoryModal = document.getElementById("closeHistoryModal");
const btnList = document.getElementById("btnlist");
const historyList = document.getElementById("historyList");

// 대화 히스토리 저장소 (예제 데이터)
let conversationHistory = [
  {
    date: "2024-12-17",
    summary: "AI 챗봇 사용법 설명",
    keywords: ["챗봇", "사용법", "AI"],
    details: "오늘은 AI 챗봇의 사용법과 주요 기능에 대해 논의했습니다.",
  },
  {
    date: "2024-12-16",
    summary: "프로젝트 일정 논의",
    keywords: ["프로젝트", "일정", "계획"],
    details: "프로젝트 일정과 팀의 작업 분담에 대해 논의했습니다.",
  },
];

// 초기화: 로컬 스토리지에서 히스토리 불러오기
document.addEventListener("DOMContentLoaded", () => {
  const savedHistory = localStorage.getItem("conversationHistory");
  if (savedHistory) {
    conversationHistory = JSON.parse(savedHistory); // 저장된 히스토리 로드
  }
  historyModal.style.display = "none"; // 모달 숨김
  console.log("페이지 로드 완료");
});

// 모달 열기
btnList.addEventListener("click", () => {
  renderHistory(); // 대화 목록 렌더링
  historyModal.style.display = "block"; // 모달 표시
});

// 모달 닫기
closeHistoryModal.addEventListener("click", () => {
  historyModal.style.display = "none"; // 모달 숨김
});

// 대화 목록 렌더링 함수
function renderHistory() {
  if (!historyList) {
    console.error("historyList 요소를 찾을 수 없습니다.");
    return;
  }

  historyList.innerHTML = ""; // 기존 목록 초기화
  conversationHistory.forEach((item, index) => {
    const li = document.createElement("li");
    li.className = "history-item";
    li.dataset.index = index; // 인덱스 저장

    // 날짜 표시
    const date = document.createElement("div");
    date.className = "history-item-date";
    date.textContent = item.date;

    // 요약 표시
    const summary = document.createElement("div");
    summary.className = "history-item-summary";
    summary.textContent = item.summary;

    // 키워드 표시
    const keywords = document.createElement("div");
    keywords.className = "history-item-keywords";
    keywords.textContent = `키워드: ${item.keywords.join(", ")}`;

    // 항목 구성
    li.appendChild(date);
    li.appendChild(summary);
    li.appendChild(keywords);

    // 클릭 이벤트 추가 (세부 내용 보기)
    li.addEventListener("click", () => {
      showDetails(item);
    });

    historyList.appendChild(li);
  });
}

// 대화 세부 내용 표시 함수
function showDetails(item) {
  alert(
    `날짜: ${item.date}\n요약: ${item.summary}\n세부 내용: ${item.details}`
  );
}

// 히스토리 업데이트 및 저장 함수
function saveHistoryToLocalStorage() {
  localStorage.setItem(
    "conversationHistory",
    JSON.stringify(conversationHistory)
  );
}

// 새로운 대화 추가 예제
function addNewConversation(date, summary, keywords, details) {
  const newConversation = { date, summary, keywords, details };
  conversationHistory.push(newConversation); // 저장소에 추가
  saveHistoryToLocalStorage(); // 로컬 스토리지에 저장
}
// -------------------음성 인식-----------------//
if (!("SpeechRecognition" in window || "webkitSpeechRecognition" in window)) {
  alert("이 브라우저는 음성 인식을 지원하지 않습니다.");
}

const recognition = new (window.SpeechRecognition ||
  window.webkitSpeechRecognition)();
recognition.lang = "ko-KR";

// 음성 인식 부분 수정
recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  addMessage(transcript, "user");

  // Flask 서버로 POST 요청 전송
  fetch("/ask", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: `question=${encodeURIComponent(transcript)}`,
  })
    .then((response) => response.json())
    .then((data) => {
      const botMessage = data.answer;
      addMessage(botMessage, "bot");
    })
    .catch((error) => {
      console.error("Error fetching bot response:", error);
      addMessage("서버와 통신 중 문제가 발생했습니다.", "bot");
    });
};
//   // 봇 응답 처리
//   getBotResponse(transcript).then((botMessage) => {
//     addMessage(botMessage, "bot");
//   });
// };

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
  logoDiv.style.marginBottom = "30px";
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


// 로그인 MSAL 설정
const msalConfig = {
  auth: {
    clientId: "0632e983-5a3c-4913-9ce5-4c81c8c4f99d", // Azure AD B2C 애플리케이션(클라이언트) ID로 변경
    authority:
      "https://teamlawbot.b2clogin.com/teamlawbot.onmicrosoft.com/B2C_1_signup-signin", // Azure AD B2C 테넌트 및 사용자 흐름 이름으로 변경
      knownAuthorities: ["teamlawbot.b2clogin.com"] ,
      redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage", // 브라우저 저장소 사용
    storeAuthStateInCookie: false, // 쿠키 사용 안 함
  },
};

const msalInstance = new msal.PublicClientApplication(msalConfig);


// 로그인 버튼 클릭 이벤트 처리
document.querySelector(".login-btn").addEventListener("click", () => {
  msalInstance
    .loginPopup({     
      scopes: ["openid", "profile", "email"], // 필요한 범위 설정
    })
    .then((loginResponse) => {
      console.log("로그인 성공:", loginResponse);
      // 사용자 정보 표시 함수 호출
      displayUserInfo();
    })
    .catch((error) => {
      console.error("로그인 실패:", error);
    });
});


// 사용자 정보 표시 함수
function displayUserInfo() {
  const account = msalInstance.getAllAccounts()[0];
  if (account) {
    const eMail = account.email;
    alert(`로그인 성공! email: ${eMail}`);
    // 여기에 사용자가 로그인한 후 추가적인 동작을 구현할 수 있습니다.
  }
}

// 페이지 로드 시 로그인 상태 확인
function checkLoginStatus() {
  const accounts = msalInstance.getAllAccounts();
  if (accounts.length > 0) {
    console.log("이미 로그인된 사용자:", accounts[0]);
    displayUserInfo(); // 이미 로그인된 사용자 정보 표시
  }
}

checkLoginStatus(); // 페이지 로드 시 로그인 상태 확인