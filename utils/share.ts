
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
  const url = new URL(window.location.href);
  url.searchParams.set('data', hash);
  return url.toString();
};
