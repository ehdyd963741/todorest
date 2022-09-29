import { ref, onUnmounted } from "vue";
export const useToast = () => {
  // 안내상자 보이거나 숨기는 변수
  const showToast = ref(false);
  // 안내상자에 보여질 내용
  const toastMessage = ref("");
  // 안내상자의 디자인
  const toastType = ref("");
  // 타이머 식별자
  const toastTimer = ref(null);
  // 안내상자 실행 메서드
  const triggerToast = (message, color = "success") => {
    toastMessage.value = message;
    toastType.value = color;
    showToast.value = true;
    toastTimer.value = setTimeout(() => {
      toastMessage.value = "";
      toastType.value = "";
      showToast.value = false;
    }, 2000);
  };
  // 컴포넌트 이동으로 인하여 화면에서 제거 완료시 실행
  onUnmounted(() => {
    clearTimeout(toastTimer.value);
    // console.log("onUnmounted");
  });
  return {
    showToast,
    toastMessage,
    toastType,
    triggerToast,
  };
};
