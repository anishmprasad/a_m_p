// Only type actions
export const createActionWithType = (type: string) => ({ type });

// type and payload actions
export const createActionWithTypeAndPayload = (type: string, payload: Object) => ({
	type,
	payload
});
