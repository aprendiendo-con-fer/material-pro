document.addEventListener("DOMContentLoaded", function () {

  const header = document.createElement("div");
  header.innerHTML = `
    <div class="w-full bg-purple-600 text-white p-4 flex justify-between items-center shadow-lg">
      
      <button onclick="history.back()"
        class="bg-white text-purple-600 px-4 py-2 rounded-xl font-bold hover:scale-105 transition">
        ⬅ Volver
      </button>

<h1 class="font-bold text-lg">${document.title}</h1>

      <button onclick="window.location.href='index.html'"
        class="bg-gray-800 text-white px-4 py-2 rounded-xl font-bold hover:scale-105 transition">
        🏠 Menú
      </button>

    </div>
  `;

  document.body.prepend(header);

});
