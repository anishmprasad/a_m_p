// Only type actions
export const createActionWithType = type => ({ type });

// type and payload actions
export const createActionWithTypeAndPayload = (type, payload) => ({
  type,
  payload
});
