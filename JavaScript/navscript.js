function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("show");
}
/*Pitäisi vaihtaa buttonin väriä kun se on valittu, mutta tällä hetkellä ei toimi*/
document.addEventListener("DOMContentLoaded", () => {
  // Get all the buttons
  const buttons = document.querySelectorAll('.button-9');

  // Loop through the buttons and add an event listener to each one
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove the "selected" class from all buttons
      buttons.forEach(button => {
        button.classList.remove('selected');
      });

      // Add the "selected" class to the clicked button
      button.classList.add('selected');
      console.log(buttons);
    });
  });
});
