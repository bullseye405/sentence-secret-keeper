
import React from 'react';
import { Progress } from "@/components/ui/progress";
import { Shield, ShieldAlert, ShieldCheck, ShieldX } from 'lucide-react';

interface PasswordStrength {
  score: number;
  label: string;
  color: string;
}

interface PasswordStrengthIndicatorProps {
  strength: PasswordStrength;
}

const PasswordStrengthIndicator = ({ strength }: PasswordStrengthIndicatorProps) => {
  const getIcon = () => {
    switch (strength.score) {
      case 0:
      case 1:
        return <ShieldX className="h-5 w-5 text-red-500" />;
      case 2:
        return <ShieldAlert className="h-5 w-5 text-orange-500" />;
      case 3:
        return <Shield className="h-5 w-5 text-yellow-500" />;
      case 4:
      case 5:
        return <ShieldCheck className="h-5 w-5 text-green-500" />;
      default:
        return <Shield className="h-5 w-5 text-gray-400" />;
    }
  };

  const getProgressColor = () => {
    switch (strength.score) {
      case 0:
      case 1:
        return 'bg-red-500';
      case 2:
        return 'bg-orange-500';
      case 3:
        return 'bg-yellow-500';
      case 4:
      case 5:
        return 'bg-green-500';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Password Strength</span>
        <div className="flex items-center space-x-2">
          {getIcon()}
          <span className={`text-sm font-semibold ${strength.color}`}>
            {strength.label}
          </span>
        </div>
      </div>
      <div className="relative">
        <Progress 
          value={(strength.score / 5) * 100} 
          className="h-2 bg-gray-200 dark:bg-gray-700"
        />
        <div 
          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-500 ${getProgressColor()}`}
          style={{ width: `${(strength.score / 5) * 100}%` }}
        />
      </div>
    </div>
  );
};

export default PasswordStrengthIndicator;
