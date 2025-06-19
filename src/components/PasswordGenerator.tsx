
import React, { useState, useEffect } from 'react';
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Copy, Check } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import PasswordStrengthIndicator from './PasswordStrengthIndicator';
import { generatePasswordFromSentence } from '@/utils/passwordGenerator';
import { calculatePasswordStrength } from '@/utils/passwordStrength';

const PasswordGenerator = () => {
  const [sentence, setSentence] = useState('');
  const [generatedPassword, setGeneratedPassword] = useState('');
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: '', color: '' });
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (sentence.trim()) {
      const password = generatePasswordFromSentence(sentence);
      setGeneratedPassword(password);
      const strength = calculatePasswordStrength(password);
      setPasswordStrength(strength);
    } else {
      setGeneratedPassword('');
      setPasswordStrength({ score: 0, label: '', color: '' });
    }
  }, [sentence]);

  const copyToClipboard = async () => {
    if (generatedPassword) {
      try {
        await navigator.clipboard.writeText(generatedPassword);
        setCopied(true);
        toast({
          title: "Password copied!",
          description: "Your generated password has been copied to clipboard.",
        });
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        toast({
          title: "Failed to copy",
          description: "Please try again or copy manually.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6">
      <Card className="border-2 border-dashed border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-colors duration-300 bg-white dark:bg-gray-800">
        <CardContent className="p-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="sentence" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Enter your memorable sentence
              </label>
              <Input
                id="sentence"
                type="text"
                placeholder="e.g., I love coffee in the morning at 7am!"
                value={sentence}
                onChange={(e) => setSentence(e.target.value)}
                className="text-lg py-3 transition-all duration-300 focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
            
            {generatedPassword && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Generated Password
                  </label>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1 p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg font-mono text-lg break-all text-gray-900 dark:text-white">
                      {generatedPassword}
                    </div>
                    <Button
                      onClick={copyToClipboard}
                      variant="outline"
                      size="icon"
                      className="shrink-0 hover:bg-blue-50 dark:hover:bg-blue-900/50 transition-colors border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800"
                    >
                      {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4 text-gray-600 dark:text-gray-400" />}
                    </Button>
                  </div>
                </div>
                
                <PasswordStrengthIndicator strength={passwordStrength} />
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PasswordGenerator;
