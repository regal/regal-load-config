// Throw this in the promise resolve argument for tests that should have failed promises
export const expectedPromiseFailure = () => {
    throw new Error("Promise was supposed to fail.");
};
