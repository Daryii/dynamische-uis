document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('container');
    const colors = ['green', 'red', 'blue'];
  
    colors.forEach(color => {
      const button = document.createElement('button');
      button.textContent = color;
      button.style.backgroundColor = color;
      button.addEventListener('click', function() {
        document.body.style.backgroundColor = color;
      });
      container.appendChild(button);
    });
  });
  