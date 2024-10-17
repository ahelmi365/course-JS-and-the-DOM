document.addEventListener("DOMContentLoaded", () => {
  const listNanodegrees =
    document.querySelector(".list-nanodegrees").firstElementChild;

  listNanodegrees.addEventListener("click", handleNanodegreeClick);

  const allCardTitles = listNanodegrees.querySelectorAll(
    ".card--nanodegree__title"
  );
  allCardTitles.forEach((title) => {
    createFavoriteBtn(title);
  });

  //   ========== functions ==========
  function handleNanodegreeClick(event) {
    if (event.target.nodeName === "BUTTON") {
      preventBtnClickNavigation(event);
      toggleBtnTextAndStars(event);
    }
  }
  function preventBtnClickNavigation(event) {
    event.preventDefault();
  }
  function toggleBtnTextAndStars(event) {
    const btn = event.target;
    if (btn.textContent === "Add to Favorite") {
      btn.textContent = "Remove from Favorite";
      createStars(event.target);
    } else {
      btn.textContent = "Add to Favorite";
      btn.nextSibling.remove();
    }
  }
  function createFavoriteBtn(element) {
    const btn = document.createElement("button");
    btn.textContent = "Add to Favorite";
    btn.classList.add("button", "button--primary");
    btn.style.marginTop = "0.5rem";
    btn.type = "button";
    element.appendChild(btn);
  }
  function createStars(element) {
    const div = document.createElement("div");
    div.textContent = "⭐⭐⭐";
    div.classList.add("star");
    div.style.marginTop = "0.5rem";
    element.insertAdjacentElement("afterend", div);
  }
});
