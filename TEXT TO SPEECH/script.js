const textarea = document.querySelector("#textarea");
const selecttag = document.querySelector("#selecttag");
const btn = document.querySelector("#btn");

let languages = [
  { name: "English US", value: "en-US" },
  { name: "English GB", value: "en-GB" },
  { name: "English UK", value: "en-UK" },
  { name: "Hindi", value: "hi-IN" },
  { name: "Malayalam", value: "ml-IN" },
  { name: "Arabic", value: "ar-XA" },
  { name: "Bengali", value: "bn-IN" },
  { name: "Chinese", value: "yue-HK" },
  { name: "Danish", value: "da-DK" },
  { name: "Dutch", value: "nl-BE" },
  { name: "English Australia", value: "en-AU" },
  { name: "French", value: "fr-CA" },
  { name: "German", value: "de-DE" },
  { name: "Greek", value: "el-GR" },
  { name: "Gujarati", value: "gu-IN" },
  { name: "Italian", value: "it-IT" },
  { name: "Japanese", value: "ja-JP" },
  { name: "Kannada", value: "kn-IN" },
  { name: "Korean", value: "ko-KR" },
  { name: "Marathi", value: "mr-IN" },
  { name: "Portuguese", value: "pt-BR" },
  { name: "Punjabi", value: "pa-IN" },
  { name: "Russian", value: "ru-RU" },
  { name: "Spanish", value: "es-ES" },
  { name: "Tamil", value: "ta-IN" },
  { name: "Telugu", value: "te-IN" }
];

// Add languages to dropdown
languages.forEach(language => {
  const option = document.createElement("option");
  option.text = language.name;
  option.value = language.value;
  selecttag.appendChild(option);
});

let speech = new SpeechSynthesisUtterance();
speech.volume = 1;
speech.rate = 0.9;
speech.pitch = 1;

selecttag.addEventListener("change", () => {
  speech.lang = selecttag.value;
});

btn.addEventListener("click", () => {
  speech.text = textarea.value;
  window.speechSynthesis.speak(speech);
});
