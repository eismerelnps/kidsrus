import React from 'react';
import { render } from '@testing-library/react';
import { ProductCard } from './ProductCard';

test('renders ProductCard component without errors', () => {
  const product = {
    size: 'small',
    title: 'Test Product',
    price: 9.99,
    stockAmount: 10,
    category: 'Test Category',
    tags: ['tag1', 'tag2'],
    description: 'Test Description',
    information: 'Test Information',
    rating: 4,
    id: 1,
    images: [
      { img1: 'image1.jpg', img2: 'image2.jpg' }
    ],
    reviews: []
  };

  render(<ProductCard {...product} />);
  // If the component renders without throwing any errors, the test passes
});
