'use client';
import { useToast } from '@/context/ToastContext';

export default function Toast() {
  const { toast, visible } = useToast();
  if (!toast) return null;

  return (
    <div className={`toast${visible ? ' show' : ''}`} id="toast">
      <span className="toast-icon">{toast.icon}</span>
      <div>
        <div className="toast-title">{toast.title}</div>
        <div className="toast-msg">{toast.msg}</div>
      </div>
    </div>
  );
}
