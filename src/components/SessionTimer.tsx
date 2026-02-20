import { useState, useEffect } from 'react';

const texts = [
  "Can you stay a bit longer?",
  "Little more please?",
  "Yay, thank you for your time!",
];

function CircularProgress({ percent }: { percent: number }) {
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <svg width="44" height="44" viewBox="0 0 44 44">
      <circle cx="22" cy="22" r={radius} fill="none" stroke="var(--element3, #333)" strokeWidth="3" />
      <circle
        cx="22" cy="22" r={radius} fill="none" stroke="var(--element1, #fff)" strokeWidth="3"
        strokeDasharray={circumference} strokeDashoffset={offset}
        transform="rotate(-90 22 22)" style={{ transition: 'stroke-dashoffset 1s linear' }}
      />
    </svg>
  );
}

export default function SessionTimer() {
  const [tick, setTick] = useState(() => {
    if (typeof window !== 'undefined') {
      return parseInt(sessionStorage.getItem('session-timer') || '0', 10);
    }
    return 0;
  });

  const percent = Math.min(tick / 0.6, 100);
  const date = new Date(0);
  date.setSeconds(tick);
  const timeString = date.toISOString().substring(14, 19);

  useEffect(() => {
    const interval = setInterval(() => {
      setTick(prev => {
        const next = prev + 1;
        if (next > 60) {
          clearInterval(interval);
          return prev;
        }
        sessionStorage.setItem('session-timer', String(next));
        return next;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (percent >= 100) return null;

  return (
    <div className="timer visible" title="">
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <CircularProgress percent={percent} />
        <div className="tooltip">
          {timeString}
          <div className="top">
            <p>This helps me increase the session time of my site. Thank you!</p>
            <i></i>
          </div>
        </div>
      </div>
      <div className="text-caption">{texts[Math.floor(percent / 39)]}</div>
    </div>
  );
}
