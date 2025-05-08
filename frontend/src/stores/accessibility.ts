import { create } from 'zustand';

interface AccessibilityState {
  lastMessage: string;
  announceToScreenReader: (message: string, priority?: 'assertive' | 'polite') => void;
}

//접근성 전용 상태 관리
export const useAccessibilityStore = create<AccessibilityState>((set) => ({
  lastMessage: '',

  announceToScreenReader: (message: string, priority: 'assertive' | 'polite' = 'assertive') => {
    //priority: 알림의 긴급도
    set({ lastMessage: message });

    const announcerId =
      priority === 'assertive' ? 'screen-reader-announcer-assertive' : 'screen-reader-announcer-polite';
    //assertive: 즉시 읽도록 요청
    //polite: 현재 읽는 내용을 방해하지 않음

    const announcer = document.getElementById(announcerId);
    if (announcer) {
      //동일한 메시지를 여러 번 알릴 때 스크린리더가 무시하지 않도록
      announcer.textContent = '';

      setTimeout(() => {
        announcer.textContent = message;
      }, 10);
    }
  }
}));
