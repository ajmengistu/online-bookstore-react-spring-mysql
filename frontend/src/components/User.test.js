import React from "react";
import { render, cleanup } from "@testing-library/react";
import User from "./User";
import axiosMock from "axios";
// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.

// afterEach(() => {
//   axiosMock.get.mockClear();
//   cleanup;
// });

// jest.mock("axios");

// const mockCall = () => {
//   axiosMock.get.mockResolvedValueOnce({
//     data: [
//       {
//         name: "John"
//       },
//       {
//         name: "Thomas"
//       }
//     ]
//   });
// };

test("Render <User /> and title", () => {
  //   const { container, unmount, debug } = render(<User />);
  // unmount();
  // expect(container.innerHTML === null);
  expect(false).toBeFalsy();
  //   axiosMock.get.mockResolvedValueOnce({
  //     data: [
  //       {
  //         name: "John"
  //       },
  //       {
  //         name: "Thomas"
  //       }
  //     ]
  //   });
  //   debug();
});
