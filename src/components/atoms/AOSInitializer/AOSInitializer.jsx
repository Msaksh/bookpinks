'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      // You can add your global settings here
      duration: 1000,
      once: true,
    });
  }, []);

  return null;
}