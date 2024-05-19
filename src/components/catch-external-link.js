document.addEventListener("DOMContentLoaded", () => {
  const link = document.getElementById("external-link");

  if (link) {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const url = link.getAttribute("href");
      shell.openExternal(url);
    });
  }
});
