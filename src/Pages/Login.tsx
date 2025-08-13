import { Link } from 'react-router-dom';
import {
  Facebook,
  Lock,
  Mail,
  Eye,
  EyeOff,
  Shield,
  CheckCircle,
  Star,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);

    // Handle login logic here
    console.log('Login attempt', { email, password, rememberMe });
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField('');
  };

  const benefits = [
    {
      icon: Star,
      text: 'Access to exclusive deals and offers',
      color: 'text-yellow-500'
    },
    {
      icon: CheckCircle,
      text: 'Track your orders in real-time',
      color: 'text-green-500'
    },
    {
      icon: Shield,
      text: 'Secure Norton-verified transactions',
      color: 'text-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-200 opacity-20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-amber-200 opacity-20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-yellow-300 opacity-20 rounded-full animate-ping"></div>
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
          <div className="animate-fadeInUp">
            {/* Logo placeholder */}
            <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <span className="text-white font-bold text-2xl">U</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2">
              Welcome Back!
            </h2>
            <p className="text-lg text-gray-600 mb-2">
              Sign in to continue your shopping journey
            </p>
            <p className="text-sm text-gray-500">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-semibold text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
              >
                Create one now
              </Link>
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-10 px-6 shadow-2xl sm:rounded-3xl sm:px-12 border border-gray-100">
            {/* Benefits */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Why sign in?
              </h3>
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200"
                    style={{
                      animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                    }}
                  >
                    <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                    <span className="text-gray-700 text-sm">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail
                      className={`h-5 w-5 transition-colors duration-200 ${
                        focusedField === 'email'
                          ? 'text-yellow-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusedField === 'email'
                        ? 'border-yellow-500 bg-yellow-50 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock
                      className={`h-5 w-5 transition-colors duration-200 ${
                        focusedField === 'password'
                          ? 'text-yellow-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    onFocus={() => handleFocus('password')}
                    onBlur={handleBlur}
                    className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl transition-all duration-300 focus:outline-none ${
                      focusedField === 'password'
                        ? 'border-yellow-500 bg-yellow-50 shadow-lg transform scale-105'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400 hover:text-yellow-500 transition-colors" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400 hover:text-yellow-500 transition-colors" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                    className="h-4 w-4 text-yellow-600 focus:ring-yellow-500 border-gray-300 rounded transition-colors"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-700"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-yellow-600 hover:text-yellow-500 transition-colors duration-200"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>

              {/* Sign In Button */}
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-yellow-600 to-amber-500 hover:from-yellow-700 hover:to-amber-600 focus:outline-none focus:ring-4 focus:ring-yellow-300 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isLoading ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Signing In...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <span>Sign In</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </button>
              </div>
            </form>

            {/* Social Login */}
            <div className="mt-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {/* Facebook */}
                <button
                  type="button"
                  className="group w-full inline-flex justify-center items-center py-3 px-4 border-2 border-gray-200 rounded-xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="h-5 w-5 text-blue-600 mr-2" />
                  Facebook
                </button>

                {/* Google */}
                <button
                  type="button"
                  className="group w-full inline-flex justify-center items-center py-3 px-4 border-2 border-gray-200 rounded-xl shadow-sm bg-white text-sm font-semibold text-gray-700 hover:bg-red-50 hover:border-red-300 transition-all duration-300 transform hover:scale-105"
                >
                  <svg
                    className="h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#EA4335"
                      d="M24 9.5c3.5 0 6.2 1.5 7.6 2.7l5.6-5.6C33.7 3.4 29.2 1 24 1 14.8 1 7.1 6.6 3.6 14.5l6.9 5.3C12 14.3 17.4 9.5 24 9.5z"
                    />
                    <path
                      fill="#34A853"
                      d="M46.1 24.5c0-1.6-.1-2.8-.4-4.1H24v7.8h12.5c-.5 3-2.1 5.6-4.6 7.3l7.2 5.6c4.2-3.9 6.6-9.7 6.6-16.6z"
                    />
                    <path
                      fill="#4A90E2"
                      d="M10.5 28.8c-1.2-3.6-1.2-7.5 0-11.1l-6.9-5.3C1.2 16.1 0 20 0 24c0 4 1.2 7.9 3.6 11.6l6.9-5.3z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M24 48c6.5 0 12-2.1 16-5.8l-7.2-5.6c-2 1.4-4.5 2.2-8.8 2.2-6.6 0-12.1-4.8-14.1-11.3l-6.9 5.3C7.1 41.4 14.8 48 24 48z"
                    />
                  </svg>
                  Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
