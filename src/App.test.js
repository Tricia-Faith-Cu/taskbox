import { render } from "@testing-library/react";
import App from "./App";

test("renders inbox screen of taskbox", () => {
  render(<App />);
  const inboxScreen = document.createElement("InboxScreen");
  expect(inboxScreen).not.toBe(null);
});
