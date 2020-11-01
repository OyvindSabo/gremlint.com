export const dispatch = (action: string, payload: any) => {
  window.dispatchEvent(new CustomEvent(action, { detail: payload }));
};