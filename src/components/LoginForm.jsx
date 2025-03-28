import { useState, useEffect } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [capsLockOn, setCapsLockOn] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  const handleKeyEvent = (e) => {
    setCapsLockOn(e.getModifierState('CapsLock'));
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyEvent);
    window.addEventListener('keyup', handleKeyEvent);

    return () => {
      window.removeEventListener('keydown', handleKeyEvent);
      window.removeEventListener('keyup', handleKeyEvent);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email, 'Password:', password);
  };

  return (
    <div className='flex justify-center items-center'>
      <form onSubmit={handleSubmit} className='w-70 space-y-6'>
        <h2 className='text-2xl font-bold text-center text-gray-800 mb-4'>
          Iniciar sesión
        </h2>

        {capsLockOn && inputFocused && (
          <div className='text-yellow-600 bg-yellow-50 px-4 py-2 rounded-lg text-sm mb-4 flex items-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5 mr-2'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z'
                clipRule='evenodd'
              />
            </svg>
            ¡Cuidado, tienes las mayúsculas activadas!
          </div>
        )}

        <div className='space-y-4'>
          <input
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setInputFocused(true)}
            onBlur={() => setInputFocused(false)}
            placeholder='Introduce tu nombre email'
            className='w-full p-3 bg-gray-50 border border-gray-200 rounded-lg 
                    shadow-sm focus:outline-none focus:border-blue-500 
                    focus:ring-1 focus:ring-blue-500 text-black
                    placeholder-gray-400 transition-all duration-200'
            required
          />
          <div className='relative'>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setInputFocused(true)}
              onBlur={() => setInputFocused(false)}
              placeholder='Introduce tu contraseña'
              className='w-full p-3 bg-gray-50 border border-gray-200 rounded-lg 
                      shadow-sm focus:outline-none focus:border-blue-500 
                      focus:ring-1 focus:ring-blue-500 text-black
                      placeholder-gray-400 transition-all duration-200'
              required
            />
            <button
              type='button'
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600'
            >
              {showPassword ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5 cursor-pointer'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
                  />
                </svg>
              ) : (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-5 h-5 cursor-pointer'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        <button
          type='submit'
          className='w-full bg-[#0063A6] text-white p-3 rounded-lg 
                  shadow-lg hover:bg-[#0074c4] transform hover:scale-[1.02] 
                  transition-all duration-200 focus:outline-none 
                  focus:ring-2 focus:ring-[#0063A6] focus:ring-opacity-50 cursor-pointer'
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
