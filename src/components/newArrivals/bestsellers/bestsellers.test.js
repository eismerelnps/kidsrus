import React from "react";
import { render, screen } from "@testing-library/react";
import { BestSellers } from "./BestSellers";

// Mock de los productos obtenidos
jest.mock("./useTopSellingProducts", () => ({
  useTopSellingProducts: () => [
    {
      id: 1,
      rating: 4,
      title: "Product 1",
      price: 10.99,
      images: [{ img1: "image1.jpg" }],
      category: "electronics",
    },
    {
      id: 2,
      rating: 3,
      title: "Product 2",
      price: 19.99,
      images: [{ img1: "image2.jpg" }],
      category: "clothing",
    },
  ],
}));

describe("BestSellers", () => {
  it("renders the best sellers", () => {
    render(<BestSellers />);

    // Verificar que el título "BEST SELLERS" se renderiza
    expect(screen.getByText("BEST SELLERS")).toBeInTheDocument();

    // Verificar que los productos se renderizan correctamente
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();
  });

  it("renders 'No available products' when there are no products", () => {
    // Mock de productos vacío
    jest.mock("./useTopSellingProducts", () => ({
      useTopSellingProducts: () => [],
    }));

    render(<BestSellers />);

    // Verificar que se renderiza el mensaje "No available products"
    expect(screen.getByText("No available products.")).toBeInTheDocument();
  });
});
