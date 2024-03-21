// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import "../jest.polyfills";
import { server } from "./mocks/server";

beforeAll(() => {
    server.listen({
        onUnhandledRequest: "error", // learn more: https://mswjs.io/docs/best-practices/avoid-request-assertions/#unhandled-requests
    });
});
afterEach(() => server.resetHandlers());
afterAll(() => {
    jest.useRealTimers();
    server.close();
});

// Log the unhandled requests for debugging purpose.
// learn more: https://mswjs.io/docs/api/life-cycle-events#requestunhandled
server.events.on("request:unhandled", ({ request }) => {
    console.log("Unhandled:", request.method, request.url);
});
