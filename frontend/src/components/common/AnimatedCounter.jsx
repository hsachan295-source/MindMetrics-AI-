import React, { useEffect, useState } from 'react';

export default function AnimatedCounter({ 
  value, 
  duration = 1.2, 
  decimals = 0, 
  prefix = '', 
  suffix = '',
  className = '' 
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (value === null || value === undefined) return;
    
    // Parse numeric value
    let numericTarget = typeof value === 'number' 
      ? value 
      : parseFloat(String(value).replace(/[^0-9.-]/g, ''));

    if (isNaN(numericTarget)) {
      setDisplayValue(value);
      return;
    }

    let startTimestamp = null;
    let animationFrameId;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

      // Ease out cubic
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = numericTarget * easedProgress;

      setDisplayValue(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setDisplayValue(numericTarget);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [value, duration]);

  if (typeof value === 'string' && isNaN(parseFloat(value.replace(/[^0-9.-]/g, '')))) {
    return <span className={className}>{value}</span>;
  }

  const formattedNumber = typeof displayValue === 'number'
    ? displayValue.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })
    : displayValue;

  return (
    <span className={className}>
      {prefix}{formattedNumber}{suffix}
    </span>
  );
}
