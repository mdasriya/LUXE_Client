
import { useState } from 'react';
import { FiArrowLeft, FiEye, FiEyeOff } from 'react-icons/fi';

const Login = () => {

  const [passwordVisible, setPasswordVisible] = useState<boolean>(false)

  return (
    <div>
      <div className="bg-background-light dark:bg-background-dark text-primary dark:text-slate-100 h-screen overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full w-full">
          <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 z-10"></div>
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-1000 hover:scale-105"
              data-alt="High-end editorial fashion photography showing elegant model in luxury apparel"
              style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCjnrVoTc4rvniqvAKQRizV-x9aTGphil5FjLuoKWhGc71s5QSfzPy6VxGAsMfQrDLrKA1-0E2cM7Myjzx83Tt52WI-4SntQktX9nlta2bQ2sXpowzGHbdZbdoBuVkImS0U82knuYKicYkSzri5TCkGuNT7s0wiAdgfW-tkG-NMSM6Vacn1gHWnxAHuUTDh0bT8Tubgb8UJrz8pSDMLVWlkrhvxZ5uCGcSw4ql3ZaWemJf3EIxpxsrSA_H6ISNzXZ4xxChG1ahCgWo')"}}></div>
            <div className="absolute bottom-12 left-12 z-20 text-white max-w-md">
              <h1 className="font-serif text-5xl mb-4 italic">
                Defining Modern Elegance.
              </h1>
              <p className="text-sm uppercase tracking-[0.2em] font-light opacity-80">
                Autumn/Winter Collection 2024
              </p>
            </div>
          </div>
          <div className="flex-1 flex flex-col justify-center items-center p-4 md:p-6 lg:p-8 bg-background-light dark:bg-background-dark overflow-y-auto">
            <div className="w-full max-w-md flex justify-between items-center mb-8">
              <div className="flex items-center gap-2">
                <div className="size-6 text-primary dark:text-white">
                  <svg
                    fill="none"
                    viewBox="0 0 48 48"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </div>
                <span className="text-xl font-bold tracking-[0.15em]">
                  LUXE
                </span>
              </div>
              <a
                className="text-xs uppercase tracking-widest text-primary/60 hover:text-primary transition-colors flex items-center gap-2 font-medium"
                href="#"
              >
                <FiArrowLeft className="text-sm" />
                Back to Home
              </a>
            </div>
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-2">
                <h2 className="font-serif text-4xl text-primary dark:text-white">
                  Welcome Back
                </h2>
                <p className="text-primary/50 text-sm font-light">
                  Sign in to your private client account
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-4">
                  <div className="group">
                    <label
                      className="block text-xs uppercase tracking-widest text-primary/40 font-semibold mb-2 group-focus-within:text-accent transition-colors"
                     
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full bg-transparent border-0 border-b border-primary/10 focus:ring-0 outline-none p-0 pb-3 text-primary dark:text-white placeholder:text-primary/20 text-sm"
                      id="email"
                      placeholder="client@luxury.com"
                      type="email"
                    />
                  </div>
                  <div className="group relative">
                    <label
                      className="block text-xs uppercase tracking-widest text-primary/40 font-semibold mb-2 group-focus-within:text-accent transition-colors"
                      
                    >
                      Password
                    </label>
                    <div className="relative">
                      <input
                        className="w-full bg-transparent border-0 border-b border-primary/10 focus:ring-0 outline-none p-0 pb-3 text-primary dark:text-white placeholder:text-primary/20 text-sm"
                        id="password"
                        placeholder="••••••••"
                        type={passwordVisible ? "text" : "password"}
                      />
                      <button
                        className="absolute right-0 bottom-3 text-primary/40 hover:text-accent transition-colors"
                        type="button"
                        onClick={() => setPasswordVisible((prev) => !prev)}
                      >
                        {passwordVisible ? (
                          <FiEyeOff className="text-[20px]" />
                        ) : (
                          <FiEye className="text-[20px]" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-wider">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      className="w-4 h-4 rounded-none border-primary/20 text-primary focus:ring-accent focus:ring-offset-0 bg-transparent"
                      type="checkbox"
                      style={{ accentColor: 'var(--primary)' }}
                    />
                    <span className="text-primary/60 group-hover:text-primary transition-colors">
                      Remember Me
                    </span>
                  </label>
                  <a
                    className="text-accent hover:text-primary transition-colors font-semibold"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button className="w-full bg-primary text-white py-5 px-4 rounded-none text-xs uppercase tracking-[0.2em] font-bold hover:bg-primary/90 transition-all shadow-xl shadow-primary/10 active:scale-[0.98]">
                  Sign In
                </button>
              </form>
              <div className="space-y-4">
                <div className="relative flex items-center py-4">
                  <div className="flex-grow border-t border-primary/5"></div>
                  <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.3em] text-primary/30 font-bold">
                    Or continue with
                  </span>
                  <div className="flex-grow border-t border-primary/5"></div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <button className="flex items-center justify-center p-3 border border-primary/5 hover:border-accent hover:bg-white transition-all rounded-lg group">
                    <svg
                      className="w-5 h-5 opacity-60 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.26.81-.58z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 3.3-4.53z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center p-3 border border-primary/5 hover:border-accent hover:bg-white transition-all rounded-lg group">
                    <svg
                      className="w-5 h-5 opacity-60 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M17.05 20.28c-.96.95-2.12 1.94-3.66 1.94-1.51 0-1.99-.95-3.76-.95-1.78 0-2.32.93-3.73.95-1.42.02-2.73-1.1-3.76-2.58-2.11-3.04-2.11-7.85 0-10.9 1.05-1.52 2.61-2.48 4.31-2.5 1.3-.02 2.52.88 3.32.88.79 0 2.29-1.09 3.86-.93 1.66.07 3.16.67 4.14 2.1-3.37 2.03-2.83 6.32.53 8.23-.65 1.66-1.56 3.29-2.75 4.76zM12.03 7.25c-.02-2.24 1.84-4.11 4.04-4.14.02 2.24-1.84 4.11-4.04 4.14z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                  <button className="flex items-center justify-center p-3 border border-primary/5 hover:border-accent hover:bg-white transition-all rounded-lg group">
                    <svg
                      className="w-5 h-5 opacity-60 group-hover:opacity-100"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99H7.9V12h2.54V9.41c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99C18.34 21.12 22 16.99 22 12z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="text-center">
                <p className="text-xs uppercase tracking-widest text-primary/40">
                  Don't have an account?
                  <a
                    className="text-primary font-bold hover:text-accent transition-colors ml-1 underline decoration-accent/30 underline-offset-4"
                    href="#"
                  >
                    Create Account
                  </a>
                </p>
              </div>
            </div>
            <div className="mt-auto pt-4 text-[10px] uppercase tracking-[0.2em] text-primary/20">
              © 2024 Luxe Atelier. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
