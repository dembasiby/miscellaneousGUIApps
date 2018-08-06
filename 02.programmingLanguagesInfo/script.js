window.addEventListener('DOMContentLoaded', () => {
  const p = document.querySelectorAll('p');

  for (let i = 0; i < p.length; i += 1) {
    let initialText = p[i].textContent;
    let truncatedText = p[i].textContent.slice(0, 120) + ' ...';
    let buttons = document.querySelectorAll('button');
    let button = buttons[i];
    button.style.display = 'block';

    if (initialText.length > 120) {
      p[i].textContent = truncatedText;
    } else {
      button.style.display = 'none';
    }
    
    button.addEventListener('click', () => {
      if (button.textContent === 'Show more') {
        button.textContent = 'Show less';
        p[i].textContent = initialText;
      } else {
        button.textContent = 'Show more';
        p[i].textContent = truncatedText;
      }
    }); 
  } 
});