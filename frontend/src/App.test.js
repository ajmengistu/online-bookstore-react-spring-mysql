import React from "react";
import {
  render,
  cleanup,
  waitForElement,
  getByTestId
} from "@testing-library/react";
import User from "./components/User";
import axiosMock from "axios";

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(() => {
  axiosMock.get.mockClear();
  cleanup;
});

jest.mock("axios");

const mockCall = () => {
  axiosMock.get.mockResolvedValueOnce({
    data: [
      {
        name: "John"
      },
      {
        name: "Thomas"
      }
    ]
  });
};

it("Show loader when it's fetching data from api", async () => {
  mockCall();
  const url = "/users";
  const { getByText, getAllByText } = render(<User url={url} />);
  expect(getByText(/Loading..../)).toBeInTheDocument;
  await waitForElement(() => getAllByText("Thomas"));

  expect(axiosMock.get).toHaveBeenCalledTimes(1);
  expect(axiosMock.get).toHaveBeenCalledWith(url);
});
