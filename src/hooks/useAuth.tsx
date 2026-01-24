import { useState, useEffect } from 'react';
import type { User } from '../types';
import { auth } from '../lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Uncomment when firebase is configured
    /*
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email || '',
          displayName: firebaseUser.displayName || '',
          createdAt: new Date(),
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });
 
    return () => unsubscribe();
    */

    // Mock auth state for demo
    const mockUser: User = {
      uid: '12345',
      email: 'user@example.com',
      displayName: 'Demo User',
      createdAt: new Date()
    };

    // Simulate checking auth
    const timer = setTimeout(() => {
      // By default we aren't logged in for the demo until they hit login
      // But for development convenience we might want to check localStorage
      const storedUser = localStorage.getItem('demo_user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const login = async (email: string, pass: string) => {
    // Mock login
    const mockUser: User = {
      uid: '12345',
      email,
      displayName: 'Demo User',
      createdAt: new Date()
    };
    localStorage.setItem('demo_user', JSON.stringify(mockUser));
    setUser(mockUser);
  };

  const logout = async () => {
    localStorage.removeItem('demo_user');
    setUser(null);
  }

  return { user, loading, login, logout };
};
