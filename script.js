function showSection(id) {
  let sections = document.querySelectorAll(".section");
  sections.forEach(sec => sec.classList.remove("active"));

  document.getElementById(id).classList.add("active");
}

function searchFood(value) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (card.innerText.toLowerCase().includes(value.toLowerCase())) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

function filterFood(category) {
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (category === "all" || card.dataset.category === category) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
