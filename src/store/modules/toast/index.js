export default {
  namespaced: true,
  state: {
    // toastBox 관련 배열로 저장 : 여러개의 토스트박스를 만들기 위하여
    toasts: [],
  },
  actions: {
    triggerToast({ commit }, { message, color }) {
      // 메세지 및 색상 업데이트
      commit("ADD_TOAST", { message, color });
      // 타이머 업데이트
      setTimeout(() => {
        // 목록 toasts 제일 앞쪽 즉, 배열[0] 삭제
        commit("REMOVE_TOAST");
      }, 3000);
    },
  },
  mutations: {
    ADD_TOAST(state, payload) {
      state.toasts.push(payload);
    },
    REMOVE_TOAST(state) {
      state.toasts.shift();
    },
  },
};
