import React from "react";
import { shallow } from "enzyme";
import HelloWorld from "./HelloWorld";

describe("HelloWorld", () => {
  const message = "Hello Pivot Tech";
  const wrapper = shallow(<HelloWorld message={message} />);
  it("renders a given message as an h2", () => {
    expect(wrapper.find("h2").text()).toBe(message);
  });
});
