window.addEventListener('DOMContentLoaded', () => {
  const texts = ["Web Developer", "Computer Science Student"];
  const element = document.querySelector(".role");
  let textIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeLoop() {
    const currentText = texts[textIndex];

    if (!deleting) {
      element.textContent += currentText.charAt(charIndex);
      charIndex++;
      if (charIndex === currentText.length) {
        deleting = true;
        setTimeout(typeLoop, 1500); 
        return;
      }
    } else {
      element.textContent = currentText.substring(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        deleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    setTimeout(typeLoop, 100); 
  }

  typeLoop();
});
