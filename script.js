const userMessage = [
  ["greeting", "hello", "hi", "hey"],
  ["action", "adventure", "shounen"],
  ["comedy", "slice of life"],
  ["drama", "romance"],
  ["fantasy", "magic"],
  ["sci-fi", "mecha"],
  ["horror", "supernatural"],
  ["mystery", "thriller"],
  ["sports", "tournament"],
  ["thank you", "thanks", "thank"],
  ["bye", "goodbye", "farewell"],
  ["how are you", "how r u", "how's it going", "how's life"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "human", "are you bot", "are you human or bot", "what are you", "tell me about yourself"],
  ["who created you", "creator", "who is your creator", "who made you"],
  ["email", "address", "mail"],
  ["developer number", "message", "You are bad", "contact developer", "report", "there is bug", "bug", "who's behind you", "contact", "phone", "contact", "info", "whatsapp", "wa", "number", "Who is KIXSZH", "KIXSZH", "KIXSZH mk", "mk", "mohammed", "khalander"],
  ["instagram", "username", "link", "user", "insta"],
  ["github", "repository", "repo", "git"],
  ["your name please", "your name", "name", "may I know your name", "what is your name", "what do you call yourself", "tell me your name"],
  ["i love you", "love", "love you", "i like you", "you're awesome", "you're great", "you're cool"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good", "awesome", "nice", "excellent"],
  ["bad", "help", "bored", "tired", "not good", "feeling down", "feeling low", "i am sad", "sad"],
  ["What is your purpose?", "Why were you created?", "What can you do?", "Tell me about your capabilities", "club", "What's your main function?"],
  ["What's the weather like today?", "Tell me the weather forecast", "Weather today"],
  ["How does your language model work?", "created", "language", "Explain your AI technology", "Tell me about your architecture", "how you work", "send your code"],
  ["What's the time now?", "What's the current time?", "Tell me the time", "time"],
  ["events", "news", "plans", "esports", "game", "planned", "future"],
  ["previous", "old", "school visit", "visit", "school"],
];

const botReply = [
  ["Hey there! How can I help you today?", "Hi! Nice to see you! 😊", "Hello! How's your day going?"],
  ["Ah, you're into action and adventure! You might enjoy Attack on Titan or My Hero Academia.", "For action-packed excitement, I recommend Naruto or Demon Slayer!"],
  ["Looking for a good laugh? Check out K-On! or Gintama!", "For some comedic relief, try Nichijou or The Disastrous Life of Saiki K."],
  ["Are you in the mood for romance and drama? Your Lie in April and Clannad are perfect choices!", "For touching stories of love and friendship, give Toradora! or Anohana a watch."],
  ["Step into the world of fantasy and magic with Fullmetal Alchemist: Brotherhood or Fairy Tail!", "For epic adventures and magical worlds, try Magi or The Seven Deadly Sins."],
  ["Transport yourself to the future with sci-fi and mecha anime like Steins;Gate or Neon Genesis Evangelion.", "Experience thrilling battles and futuristic worlds with Code Geass or Gurren Lagann."],
  ["Ready for some spine-tingling horror and supernatural tales? Dive into Tokyo Ghoul or Parasyte -the maxim-.", "For eerie mysteries and supernatural twists, check out Another or Death Note."],
  ["Get ready for some mystery and suspense with Death Parade or Psycho-Pass!", "For mind-bending mysteries and psychological thrillers, try Erased or Monster."],
  ["Are you a sports fan? You'll love Haikyuu!! or Kuroko's Basketball for their intense matches and passionate characters.", "Experience the thrill of competition with Ping Pong the Animation or Yuri on Ice!"],
  ["You're welcome! If you need anything else, just let me know!", "Glad I could help! Feel free to ask if you have any more questions."],
  ["Goodbye! Take care and have a great day!", "Farewell! Hope to chat with you again soon!", "Until next time!"],
  ["Fine... how are you? 😄", "Pretty well, how are you? 😊", "Fantastic, how are you? 🌟"],
  ["Getting better. There? 😄", "Somewhat okay! 😅", "Yeah fine!🏡"],
  ["I am always young. 👶"],
  ["I am just a bot 😄", "I am a bot. What are you? 🤖"],
  ["KIXSZH is my creator 🙌"],
  ["You can contact KIXSZH:<br> Email: <a href='mailto:syedkhalander66@gmail.com'>KIXSZH.gmail.com 📧</a>"],
  ["You can contact KIXSZH:<br> Phone: <a href='tel:8867305645'>8867305645</a> 📱<br> WhatsApp: <a href='https://wa.me/8838582534'>8838582534</a> 💬"],
  ["Instagram: <a href='https://www.instagram.com/kixszh/'>@kixszh 📷</a>"],
  ["GitHub: <a href='https://github.com/kixszh'>@kixszh 🐙</a>"],
  ["I am ClubGPT by KIXSZH 😊"],
  ["I love you too ❤️", "Me too! 😄", "Thanks! Try giving feedback on WhatsApp: <a href='https://wa.me/8838582534'>8838582534</a> 💬"],
  [
    "I'm glad to hear that you're feeling happy! 😄", "That's great! 😊", "Thanks! Try giving feedback on WhatsApp: <a href='https://wa.me/8838582534'>8838582534</a> 💬", "Fun is always good! 🎉", "Wonderful! 😄", "Fantastic! 😃", "Cool! 😎", "😊", "Awesome! 🌟", "Excellent! 👏"
  ],
  [
    "I'm really sorry to hear that you're feeling this way. It's important to talk to someone you trust about your feelings. ❤️",
    "You don't have to go through this alone. Reach out to friends, family, or a mental health professional for support. 🤗",
    "I'm here to listen and chat with you, but I'm not a replacement for professional help. Please consider seeking help from a therapist or counselor. 🙏",
    "Remember that it's okay to not be okay sometimes. Your feelings are valid, and there are people who care about you. 💕",
    "If you'd like, we can chat about your feelings and experiences. Sharing can sometimes help lighten the burden. 📢",
    "Depression can be a tough journey, but there is hope and help available. You're not alone in this. 🌟",
    "Is there anything specific you'd like to talk about or any questions you have? 😊",
    "I'm here to provide a listening ear. Feel free to share as much or as little as you're comfortable with. 🤗"
  ],
  ["My purpose is to manage the club and assist you with events and info. 🎉"],
  ["I'm sorry, I cannot provide real-time weather information. You can check a weather website or app for the latest updates. ☀️"],
  ["That's a secret only KIXSZH knows! 🤫"],
  ["I don't have access to real-time data, including the current time. You can check the time on your device or ask a voice assistant like Siri or Google Assistant. ⌚"],
  [
    "As much as I know, we are conducting Esports from the Technical Club. 🎮",
    "Esports is one of the exciting initiatives of the Technical Club, and we have some amazing events lined up! 🎉",
    "Esports is booming in the Technical Club! Stay tuned for upcoming events and news related to gaming. 🕹️",
    "Esports is a key focus for us at the Technical Club. We have exciting plans and events in the world of gaming! 🚀"
  ],
  [
    "Sure, I can tell you about the previous school visit. It was an event where all 4 clubs contributed their efforts. It was a fantastic experience for everyone involved! 🏫🤝",
    "The previous school visit was a collaborative effort from all 4 clubs. It was a memorable event with lots of exciting activities and interactions. 📚🤝",
    "Ah, the school visit! It was a great initiative where all 4 clubs joined forces to create a memorable experience. The teamwork and enthusiasm were truly commendable! 🌟🤝"
  ],
];


// Ensure the number of responses in botReply matches the number of message groups in userMessage
if (botReply.length !== userMessage.length) {
  console.log("The number of message groups in botReply must match the number of message groups in userMessage.");
  console.log(userMessage.length)
  console.log(botReply.length);
}

const alternative = [
  "Can you ask something else. ❓",
  "Hey, I'm listening... 👂",
  "I didn't quite catch that. Could you please rephrase your question? 🤔",
  "I'm not sure I understand. Can you provide more context or ask a different question? 🧐",
  "Hmm, that's a bit confusing. Could you try asking in a different way? 🤨",
  "Could you try asking in a different way? 🤨",
  "I'm here to help, but I need a clearer question to provide a meaningful answer. 🤷‍♂️",
  "It seems like we're on different wavelengths. Please try asking something else. 📡",
  "I apologize, but I couldn't grasp the meaning of your input. Please rephrase your question. 🙁",
  "You can contact KIXSZH:<br> Phone: <a href='tel:8867305645'>8867305645 📱</a><br> WhatsApp: <a href='https://wa.me/8838582534'>8838582534 💬"
];
let lastUserDiv;

function sendMessage() {
  const inputField = document.getElementById("user-input");
  const input = inputField.value.trim();
  if (input) {
    output(input);
    inputField.value = "";
  }
}

//Calculation 
function findResponse(input) {

  //checks direct messages
  let text = cleanInput(input);
  for (const messageGroup of userMessage) {
    const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
    if (matchingMessage) {
      return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
    }
  }
  const directMatch = findDirectMatch(text);
  if (directMatch) {
    return directMatch;
  }

  //check similarity
  const SIMILARITY_THRESHOLD = 0.6;
  for (let i = 0; i < userMessage.length; i++) {
    const messageGroup = userMessage[i];
    for (const message of messageGroup) {
      const similarityScore = calculateSimilarity(text, message);
      if (similarityScore >= SIMILARITY_THRESHOLD) {
        return getRandomResponseFromCategory(i);
      }
    }
  }

  //check each word
  const words = text.split(' ');
  for (const word of words) {
    if (isCommonWord(word)) {
      continue;
    }
    const categoryIndex = findCategoryIndex(word);
    if (categoryIndex !== -1) {
      return getRandomResponseFromCategory(categoryIndex);
    }
  }

  return getRandomAlternativeResponse();
}

function calculateSimilarity(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const short = len1 < len2 ? len1 : len2;
  const long = len1 > len2 ? len1 : len2;
  let matchCount = 0;

  for (let i = 0; i < short; i++) {
    if (str1[i] === str2[i]) {
      matchCount++;
    }
  }
  const similarity = matchCount / long;
  return similarity;
}

function cleanInput(input) {
  return input
    .toLowerCase()
    .replace(/[^\w\s'"]/gi, "")
    .replace(/[\W_]/g, " ")
    .replace(/ a /g, " ")
    .replace(/i feel /g, "")
    .replace(/whats/g, "what is")
    .replace(/please /g, "")
    .replace(/ please/g, "")
    .trim();
}

function findDirectMatch(text) {
  for (const messageGroup of userMessage) {
    const matchingMessage = messageGroup.find(message => text.includes(message.toLowerCase()));
    if (matchingMessage) {
      return getRandomResponseFromCategory(userMessage.indexOf(messageGroup));
    }
  }
  return null;
}

function isCommonWord(word) {
  const commonWords = [
    'why', 'who', 'how', 'what', 'please', 'a', 'an', 'the', 'is', 'are', 'am', 'I',
    'you', 'he', 'she', 'we', 'they', 'it', 'and', 'but', 'or', 'not', 'in', 'on',
    'your', 'my', 'their', 'his', 'her', 'its', 'our', 'with', 'without', 'at', 'by',
  ];
  return commonWords.includes(word.toLowerCase());
}

function findCategoryIndex(word) {
  return botReply.findIndex(category => category.includes(word));
}

function getRandomResponseFromCategory(categoryIndex) {
  const responses = botReply[categoryIndex];
  return responses[Math.floor(Math.random() * responses.length)];
}

function getRandomAlternativeResponse() {
  return alternative[Math.floor(Math.random() * alternative.length)];
}

document.addEventListener("DOMContentLoaded", () => {
  const inputField = document.getElementById("user-input");
  inputField.addEventListener("keydown", function (e) {
    if (e.code === "Enter") {
      const input = inputField.value.trim();
      if (input) {
        output(input);
        inputField.value = "";
      }
    }
  });
});

const usnexp = /\b4AI\d{2}AI\d{3}\b/i;

function output(input) {
  if (input.toLowerCase().includes("university") || usnexp.test(input.toLowerCase()) || input.toLowerCase().includes("usn")) {
    userMessageSend(input);
    const match = usnexp.test(input);
    if (match) {
      const userUSN = input.match(usnexp)[0];
      readStudentDatafromxl(userUSN);
    } else {
      sendBotMessage("Enter USN 📝");
      // Call the userMessageWait function
      userMessageWait().then((userResponse) => {
        userResponse = cleanInput(userResponse).replace(/\s/g, "");
        const match = usnexp.test(userResponse);
        if (match) {
          readStudentDatafromxl(userResponse);
        }
      });
    }
  } else {
    // If the input does not contain the USN pattern, proceed with generating a response
    let product = findResponse(input);
    addChat(input, product);
  }
}

function readStudentDatafromxl(userUSN) {
  const fileName = "students.xlsx"; // Specify the name of the Excel file

  // Fetch the Excel file using the Fetch API
  fetch(fileName)
    .then((response) => response.arrayBuffer())
    .then((data) => {
      const workbook = XLSX.read(data, { type: "array" });

      // Assuming the sheet name is "student"
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];

      // Find the row with the matching USN (case-insensitive)
      const rows = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      const headerRow = rows[0];
      let found = false;

      for (let i = 1; i < rows.length; i++) {
        const row = rows[i];
        const usnIndex = headerRow.indexOf("USN");
        const usnFromSheet = row[usnIndex].toLowerCase(); // Convert USN from the sheet to lowercase
        if (usnFromSheet === userUSN.toLowerCase()) { // Convert user input to lowercase for comparison
          // Assuming the columns are in this order: Name, USN, Email, Phone, Club, Year
          const nameIndex = headerRow.indexOf("Name");
          const emailIndex = headerRow.indexOf("Email");
          const phoneIndex = headerRow.indexOf("Phone");
          const clubIndex = headerRow.indexOf("Club");
          const yearIndex = headerRow.indexOf("Year");
          const name = row[nameIndex];
          const email = row[emailIndex];
          const phone = row[phoneIndex];
          const club = row[clubIndex];
          const year = row[yearIndex];
          const result = `Name: ${name}<br>USN: ${userUSN.toUpperCase()}<br>Email: ${email}<br>Phone: ${phone}<br>Club: ${club}<br>Year: ${year}`;
          // Call sendBotMessage with the result
          sendBotMessage(result, `Searching for USN ${userUSN.toUpperCase()} ...`);
          found = true;
          break;
        }
      }
      if (!found) {
        sendBotMessage("Student not found!");
      }
    })
    .catch((error) => {
      console.error("Error loading the Excel file:", error);
    });
}

const inputField = document.getElementById("user-input");
const quickMessageButtons = document.querySelectorAll(".quickmessage");
const mainDiv = document.getElementById("message-section");
const botDiv = document.createElement("div");

function sendBotMessage(message, typingText = "Typing...") {
  botDiv.id = "bot";
  botDiv.classList.add("message");
  botDiv.innerHTML = `<span id="bot-response" class="typing-animation">${typingText}</span>`;
  mainDiv.appendChild(botDiv);
  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  inputField.disabled = true;
  quickMessageButtons.forEach(button => {
    button.disabled = true;
  });

  setTimeout(() => {
    const botResponse = botDiv.querySelector("#bot-response");
    botResponse.classList.remove("typing-animation");
    botDiv.innerHTML = `<span id="bot-response">${message}</span>`;
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = false;
    quickMessageButtons.forEach(button => {
      button.disabled = false;
    });

    inputField.focus();
  }, 2000);
}

function userMessageSend(input) {
  // Create a new user message div
  const newUserDiv = document.createElement("div");
  newUserDiv.id = "user";
  newUserDiv.classList.add("message", "typing-animation");
  newUserDiv.style.animationDuration = "1s";
  newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(newUserDiv);

  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;

  // Remove "typing-animation" class after 500ms
  setTimeout(() => {
    newUserDiv.classList.remove("typing-animation");
  }, 500);
}

function userMessageWait() {
  return new Promise((resolve) => {
    const inputField = document.getElementById("user-input");
    let userResponse = "";

    function handleUserResponse(e) {
      if (e.code === "Enter" || e.target.classList.contains("sendmessage")) {
        const trimmedResponse = userResponse.trim();
        resolve(trimmedResponse);
      } else {
        userResponse = inputField.value;
      }
    }

    function handleInputBlur() {
      resolve(userResponse.trim());
    }

    inputField.addEventListener("keydown", handleUserResponse);
    inputField.addEventListener("input", handleUserResponse);
    inputField.addEventListener("blur", handleInputBlur);
  });
}


function addChat(input, product) {
  // Create a new user message div
  const newUserDiv = document.createElement("div");
  newUserDiv.id = "user";
  newUserDiv.classList.add("message", "typing-animation");
  newUserDiv.style.animationDuration = "0.5s";
  newUserDiv.innerHTML = `<span id="user-response">${input}</span>`;
  mainDiv.appendChild(newUserDiv);

  const botDiv = document.createElement("div");
  botDiv.id = "bot";
  botDiv.classList.add("message", "typing-animation");
  botDiv.style.animationDuration = "2s";
  botDiv.innerHTML = `<span id="bot-response">Typing...</span>`;
  mainDiv.appendChild(botDiv);

  var scroll = document.getElementById("message-section");
  scroll.scrollTop = scroll.scrollHeight;
  inputField.disabled = true;
  quickMessageButtons.forEach(button => {
    button.disabled = true;
  });

  newUserDiv.classList.remove("typing-animation");
  setTimeout(() => {
    botDiv.classList.remove("typing-animation");
    botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
    scroll.scrollTop = scroll.scrollHeight;
    inputField.disabled = false;
    quickMessageButtons.forEach(button => {
      button.disabled = false;
    });
    inputField.focus();
  }, 2000);
}