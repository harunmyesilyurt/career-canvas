import { useState, useEffect } from 'react';
import { ref, onValue, increment, update } from 'firebase/database';
import { db } from '../config/firebase';

export const useVisitorCount = () => {
  const [visitorCount, setVisitorCount] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visitorRef = ref(db, 'visitors');

    // Ziyaret sayısını bir artır
    const incrementVisitors = async () => {
      try {
        await update(visitorRef, {
          count: increment(1)
        });
      } catch (error) {
        console.error('Ziyaretçi sayısı güncellenemedi:', error);
      }
    };

    // Ziyaret sayısını dinle
    const unsubscribe = onValue(visitorRef, (snapshot) => {
      const data = snapshot.val();
      setVisitorCount(data?.count || 0);
      setLoading(false);
    });

    // Sayfa yüklendiğinde ziyaret sayısını artır
    incrementVisitors();

    return () => unsubscribe();
  }, []);

  return { visitorCount, loading };
}; 