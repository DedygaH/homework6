// Напишіть скріпт, який за допомогою засобів DOM створить для порожньої
// HTML-сторінки таку структуру з тегів і їх атрибутів.
// <body>
//   main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
// </body>
// <script>

//===================================================

// Створюємо головний елемент
let main = document.createElement("main");
main.className = "mainClass check item";

// Створюємо блок div
let div = document.createElement("div");
div.id = "myDiv";

// Створюємо параграф
let p = document.createElement("p");
p.textContent = "First paragraph";

// Додаємо блок div до головного елемента
main.appendChild(div);

// Додаємо параграф до блоку div
div.appendChild(p);

// Додаємо головний елемент до тіла сторінки
document.body.appendChild(main);