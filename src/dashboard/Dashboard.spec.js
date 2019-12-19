import React from "react";
// PULL DEPS IN
import * as rtl from "@testing-library/react";
import Dashboard from "./Dashboard";
import { node } from "prop-types";

// react testing library requires a "cleanup" operation
// after each test
// STEP 2 set up cleaning up in afterEach
afterEach(rtl.cleanup);
// STEP 3 take care of repetitive operations inside
// a beforeEach function
let wrapper;
let Unlocked = () => wrapper.queryByText("Unlocked");
let Open = () => {
  return wrapper.queryByText("Open");
};
let LockGate = () => {
  return wrapper.queryByText("Lock Gate");
};
let CloseGate = () => {
  return wrapper.queryByText("Close Gate");
};
let Closed = () => {
  return wrapper.queryByText("Closed");
};
let Locked = () => {
  return wrapper.queryByText("Locked");
};
let OpenGate = () => {
  return wrapper.queryByText("Open Gate");
};
let UnlockGate = () => {
  return wrapper.queryByText("Unlock Gate");
};
beforeEach(() => {
  // we want the "wrapper" recreated at every test
  wrapper = rtl.render(<Dashboard />);
});

it("renders without crashing", () => {
  //   expect to match snapshot
  expect(wrapper.container).toMatchSnapShot();
});

it('renders a "Unlocked" text node', () => {
  expect(Unlocked()).toBeInTheDocument;
  expect(Unlocked()).toBeVisible;

});

it('renders a "Open" text node', () => {
    expect(Open()).toBeInTheDocument;
    expect(Open()).toBeVisible;
  });
  it('renders a "LockGate" text node', () => {
    expect(LockGate()).toBeInTheDocument;
    expect(LockGate()).toBeVisible;
    expect(LockGate()).toBeVisible;
});

describe("Dashboard component, when we CLOSE the gate", () => {
  // programmatically  click on the CLOSE button
  it("clicking close makes close button disappear", () => {
    expect(CloseGate()).toBeVisible;
    rtl.fireEvent.click(CloseGate());
    expect(CloseGate()).toBe(null);
  });

  it("clicking close makes the OPEN change to CLOSED", () => {
    expect(CloseGate()).toBeVisible;
    rtl.fireEvent.click(CloseGate());
    expect(CloseGate()).toBe(null);
  });
});
