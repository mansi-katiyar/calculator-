const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let input = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      // Clear all input
      input = '';
      display.textContent = '0';

    } else if (value === 'DEL') {
      // Delete last character
      input = input.slice(0, -1);
      display.textContent = input || '0';

    } else if (value === '=') {
      // Evaluate the expression
      try {
        const result = eval(input); // Caution: eval is unsafe for complex apps
        display.textContent = result;
        input = result.toString();
      } catch {
        display.textContent = 'Error';
        input = '';
      }

    } else {
      // Append input and update display
      input += value;
      display.textContent = input;
    }
  });
});
