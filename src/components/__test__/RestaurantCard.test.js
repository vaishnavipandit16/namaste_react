import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render RestaurantCart component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Domino's Pizza");

  expect(name).toBeInTheDocument();
});

// it("Should render RestaurantCart component with Promoted Label", () => {
//   render(<withPromotedLabel resData={MOCK_DATA} />);

//   const promoted = screen.getByLabelText("Promoted");

//   expect(promoted).toBeInTheDocument();
// });
