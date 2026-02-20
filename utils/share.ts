
import { SlideContextData } from '../types';

interface ShareableState {
  context: SlideContextData;
  slides: string[];
}

export const encodeState = (context: SlideContextData, slides: string[]): string => {
  try {
    const state: ShareableState = { context, slides };
    const json = JSON.stringify(state);
    return btoa(encodeURIComponent(json));
  } catch (e) {
    console.error('Failed to encode state', e);
    return '';
  }
};

export const decodeState = (encoded: string): ShareableState | null => {
  try {
    const json = decodeURIComponent(atob(encoded));
    return JSON.parse(json);
  } catch (e) {
    console.error('Failed to decode state', e);
    return null;
  }
};

export const generateShareLink = (context: SlideContextData, slides: string[]): string => {
  const hash = encodeState(context, slides);
  
  let baseUrl = window.location.origin;
  // If we are not on localhost, force the production URL
  if (!baseUrl.includes('localhost') && !baseUrl.includes('127.0.0.1')) {
     baseUrl = 'https://make-pitch.vercel.app';
  }
  
  const url = new URL(baseUrl);
  url.searchParams.set('data', hash);
  return url.toString();
};
