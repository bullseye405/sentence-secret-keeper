
export interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

export const calculatePasswordStrength = (password: string): PasswordStrength => {
  if (!password) {
    return { score: 0, label: '', color: '' };
  }

  let score = 0;
  const checks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    numbers: /\d/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),
  };

  // Basic length check
  if (checks.length) score += 1;
  if (password.length >= 12) score += 1;

  // Character variety checks
  if (checks.lowercase) score += 1;
  if (checks.uppercase) score += 1;
  if (checks.numbers) score += 1;
  if (checks.special) score += 1;

  // Bonus for good length
  if (password.length >= 16) score += 1;

  // Cap the score at 5
  score = Math.min(score, 5);

  // Determine label and color based on score
  let label = '';
  let color = '';

  switch (score) {
    case 0:
    case 1:
      label = 'Very Weak';
      color = 'text-red-600';
      break;
    case 2:
      label = 'Weak';
      color = 'text-orange-600';
      break;
    case 3:
      label = 'Fair';
      color = 'text-yellow-600';
      break;
    case 4:
      label = 'Good';
      color = 'text-blue-600';
      break;
    case 5:
      label = 'Strong';
      color = 'text-green-600';
      break;
    default:
      label = 'Unknown';
      color = 'text-gray-600';
  }

  return { score, label, color };
};
