import React from "react";
import { render, screen } from "@testing-library/react";
import Instagram from "./Instagram";

describe("Instagram", () => {
  it("renders Instagram section with images", () => {
    render(<Instagram />);
    
    // Assert Instagram header is rendered
    expect(screen.getByText("INSTAGRAM @KIDSRUS")).toBeInTheDocument();

    // Assert main image is rendered
    const mainImage = screen.getByAltText("");
    expect(mainImage).toBeInTheDocument();
    expect(mainImage.getAttribute("src")).toContain("/assets/main/home-8.png");

    // Assert individual Instagram images are rendered
    const instagramImages = screen.getAllByAltText("instagram");
    expect(instagramImages).toHaveLength(5); // Assuming 5 images are provided in the component
    expect(instagramImages[0].getAttribute("src")).toContain(
      "/assets/main/instagram/84981049_620107085435507_4260875787090681190_nlow.jpg"
    );
    // Assert the remaining images...

    // Add additional assertions as needed for your specific case
  });
});
