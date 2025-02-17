import React from 'react';
import { useVisitorCount } from '../../hooks/useVisitorCount';
import './VisitorCounterStyle.css';

const VisitorCounter = () => {
  const { visitorCount, loading } = useVisitorCount();

  if (loading) return null;

  return (
    <div className="visitor-counter">
      <span className="visitor-icon">👥</span>
      <span className="visitor-count">{visitorCount.toLocaleString()}</span>
      <span className="visitor-text">ziyaretçi</span>
    </div>
  );
};

export default VisitorCounter; 