'use client';
import { useState, FormEvent } from 'react';
import Image from 'next/image';

interface Props {
  onLogin: () => void;
}

export default function LoginScreen({ onLogin }: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (username.trim() === 'admin' && password.trim() === 'admin123') {
      onLogin();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3000);
    }
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-logo">
          <Image src="/images/logo.png" alt="Mohammad Air International Travels" width={60} height={60} style={{ margin: '0 auto 12px' }} />
          <h2>Mohammad Air International Travels Admin</h2>
          <p>Sign in to access your dashboard</p>
        </div>

        <div className="login-hint">
          Demo credentials: <span>admin</span> / <span>admin123</span>
        </div>

        {error && (
          <div className="login-error">
            ❌ Incorrect username or password. Please try again.
          </div>
        )}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group" style={{ marginBottom: 16 }}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={e => setUsername(e.target.value)}
              autoComplete="username"
            />
          </div>
          <div className="form-group" style={{ marginBottom: 20 }}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>
          <button type="submit" className="login-btn">🔐 Sign In</button>
        </form>

        <div className="login-back">
          <a href="/">← Back to Website</a>
        </div>
      </div>
    </div>
  );
}
