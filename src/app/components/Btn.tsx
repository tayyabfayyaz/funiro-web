


'use client';

// import { type } from "os"; // Removed incorrect import
import { ReactNode } from "react";
import { useState } from "react";

interface ButtonProps {
  text: string;
  icon?: ReactNode;
  onClick: () => void;
  className?: string;
}

interface Product {
  imageUrl: string;
  _id: string;
  title: string;
  description: string;
  productImage: {
    asset: {
      _ref: string;
      _type: 'reference';
    };
    _type: 'image';
  };
  price: number;
  tags?: string[];
  discountPercentage?: number;
  isNew?: boolean;
}

type CartItem = Product & {
  quantity: number;
};

interface AddToCartBtnProps {
  product: Product;
};





export const Button: React.FC<ButtonProps> = ({ text, icon, onClick, className }) => {
  return (
    <button
      
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-all ${className}`}
        >
      {icon && <span>{icon}</span>}
      <span>{text}</span>
        </button>
  );
};


export const IncrementDecrementBtn = ({
  quantity,
  onIncrement,
  onDecrement
}: {
  quantity: number
  onIncrement: () => void
  onDecrement: () => void
}) => (
  <div className="flex items-center border border-gray-300 rounded-lg">
    <button
      onClick={onDecrement}
      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-l-lg"
    >
      -
    </button>
    <span className="px-4 py-1 text-lg font-semibold">{quantity}</span>
    <button
      onClick={onIncrement}
      className="px-3 py-1 text-gray-600 hover:bg-gray-100 rounded-r-lg"
    >
      +
    </button>
  </div>
)