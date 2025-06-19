import React from 'react';
import { Key, Shield, Zap, Lock } from 'lucide-react';
import PasswordGenerator from '@/components/PasswordGenerator';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="relative bg-blue-500 p-4 rounded-full">
                <Key className="h-12 w-12 text-white" />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">PhraseLock</span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform any memorable sentence into a secure, unique password. 
            Easy to remember, impossible to crack.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="flex items-center space-x-2 text-gray-700">
              <Shield className="h-5 w-5 text-green-500" />
              <span>Military-Grade Security</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
              <Zap className="h-5 w-5 text-yellow-500" />
              <span>Instant Generation</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-700">
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
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Secure by Design</h3>
            <p className="text-gray-600">
              Our algorithm creates passwords that meet all security standards while remaining memorable.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
            <p className="text-gray-600">
              Generate strong passwords instantly as you type. No waiting, no delays.
            </p>
          </div>
          
          <div className="text-center p-6 rounded-lg bg-white/50 backdrop-blur-sm border border-white/20 hover:bg-white/70 transition-all duration-300 hover:scale-105">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Privacy Protected</h3>
            <p className="text-gray-600">
              Everything happens in your browser. Your sentences and passwords never leave your device.
            </p>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">1</div>
              <h4 className="font-semibold mb-2">Think of a Sentence</h4>
              <p className="text-gray-600 text-sm">Use something memorable to you</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">2</div>
              <h4 className="font-semibold mb-2">Type It In</h4>
              <p className="text-gray-600 text-sm">Enter your sentence in the field above</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">3</div>
              <h4 className="font-semibold mb-2">Watch the Magic</h4>
              <p className="text-gray-600 text-sm">See your strong password appear instantly</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold mb-4">4</div>
              <h4 className="font-semibold mb-2">Copy & Use</h4>
              <p className="text-gray-600 text-sm">Copy your password and use it anywhere</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm">
          <p>Your privacy is our priority. All password generation happens locally in your browser.</p>
        </div>
      </div>
    </div>
  );
};

export default Index;
