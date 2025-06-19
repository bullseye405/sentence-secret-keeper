export const specialCharacter = [
  '!',
  '@',
  '#',
  '$',
  '%',
  '^',
  '&',
  '*',
  '(',
  ')',
  '-',
  '_',
  '=',
  '+',
  '[',
  ']',
  '{',
  '}',
  '|',
  '\\',
  ':',
  ';',
  '"',
  "'",
  '<',
  '>',
  ',',
  '.',
  '?',
  '/',
  '`',
  '~',
];

export const handlePasswordGenerate = (sentence: string): string => {
  if (typeof sentence !== 'string' || sentence.trim() === '') {
    return '';
  }

  const words = sentence.trim().split(/\s+/);
  const passwordParts: string[] = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (!word) continue;

    const firstLetter = word[0];
    const middleLetter = word[Math.ceil(word.length / 2) - 1];
    const lastLetter =
      i % 2 === 0 ? word[word.length - 1] : word[word.length - 1].toUpperCase();

    if (word.length < 3) {
      passwordParts.push(firstLetter);
    } else if (word.length < 5) {
      passwordParts.push(lastLetter + firstLetter);
    } else {
      passwordParts.push(lastLetter + middleLetter + firstLetter);
    }

    passwordParts.push(specialCharacter[i % specialCharacter.length]);
  }

  return passwordParts.join('');
};
