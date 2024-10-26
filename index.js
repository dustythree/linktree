let myTexts = [
  'Eu sou alérgico a pó.', 
  'Eu sou do sul... <i>Bah tchê!</i>', 
  'Risoto é basicamente arroz.', 
  'Two, one!', 
  'Hey, fala sério! Eu sou da igreja', 
  'Dont you want me like i want you baby?', 
  'NÃO FALE MAL DO MEU ROBLOX', 
  'For Cryin Out Loud',
  'Me chame de lorde',
  'Recarregue a página, o texto muda.'
];

const elemento = document.getElementById("texto")
let texts = myTexts[Math.floor(Math.random() * myTexts.length)];
elemento.innerHTML = texts;