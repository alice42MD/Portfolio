"use client";

import { AlertContext } from '@/src/app/ui/alert/alertContext';
import { useContext } from 'react';

export const useAlert = () => {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error('useAlert must be used within a AlertProvider');
  }
  return context;
};