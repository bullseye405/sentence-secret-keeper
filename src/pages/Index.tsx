
import React from 'react';
import { Key, Shield, Zap, Lock } from 'lucide-react';
import PasswordGenerator from '@/components/PasswordGenerator';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Header />
      
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="relative bg-blue-500 p-4 rounded-full">
                <Key className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in">
            Turn Any Sentence Into a <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Strong Password</span>
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            No more forgetting. Type a sentence—get a secure password instantly.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Military-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
              <Lock className="h-5 w-5 text-blue-500" />
              <span>Privacy First</span>
            </div>
          </div>
        </div>

        {/* Password Generator Section */}
        <div className="mb-16">
          <PasswordGenerator />
        </div>

        {/* Features Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <div className="bg-blue-100 dark:bg-blue-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Secure by Design</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Our algorithm creates passwords that meet all security standards while remaining memorable.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <div className="bg-green-100 dark:bg-green-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Generate strong passwords instantly as you type. No waiting, no delays.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-700/20 hover:bg-white/70 dark:hover:bg-gray-800/70 transition-all duration-300 hover:scale-105">
            <div className="bg-purple-100 dark:bg-purple-900/50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Privacy Protected</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Everything happens in your browser. Your sentences and passwords never leave your device.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Think of a Sentence</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Use something memorable to you</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Type It In</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Enter your sentence in the field above</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Watch the Magic</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">See your strong password appear instantly</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">4</div>
              <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Copy & Use</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">Copy your password and use it anywhere</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 dark:text-gray-400 text-sm">
          <p>Your privacy is our priority. All password generation happens locally in your browser.</p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
