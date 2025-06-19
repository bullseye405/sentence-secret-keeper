
export const generatePasswordFromSentence = (sentence: string): string => {
  if (!sentence.trim()) return '';

  // Split sentence into words and process them
  const words = sentence.toLowerCase().trim().split(/\s+/);
  
  let password = '';
  
  // Take first letter of each word and capitalize alternating letters
  words.forEach((word, index) => {
    if (word.length > 0) {
      const firstLetter = word[0];
      password += index % 2 === 0 ? firstLetter.toUpperCase() : firstLetter;
    }
  });
  
  // Add numbers from the sentence
  const numbers = sentence.match(/\d/g);
  if (numbers && numbers.length > 0) {
    password += numbers.join('');
  } else {
    // Add length of sentence as numbers if no numbers found
    password += sentence.length.toString();
  }
  
  // Add special characters based on punctuation in sentence
  const specialChars = sentence.match(/[!@#$%^&*(),.?":{}|<>]/g);
  if (specialChars && specialChars.length > 0) {
    // Use existing special characters
    password += specialChars.slice(0, 2).join('');
  } else {
    // Add default special characters based on sentence characteristics
    password += '!';
    if (sentence.includes(' ')) password += '@';
  }
  
  // Ensure minimum length by repeating pattern if needed
  while (password.length < 8) {
    password += password.slice(0, 3);
  }
  
  // Limit maximum length
  if (password.length > 20) {
    password = password.slice(0, 20);
  }
  
  return password;
};
