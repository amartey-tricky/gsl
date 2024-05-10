"use client";

import { useState } from "react";

export default function AirCalculator() {
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [numBoxes, setNumBoxes] = useState(0);
  const [weight, setWeight] = useState(0);
  const [price, setPrice] = useState(0);

  const airPrice = () => {
    const volumetricWeight = (length * width * height) / 6000;
    const totalVolumetricWeight = volumetricWeight * numBoxes;
    const rate =
      weight > totalVolumetricWeight ? weight : totalVolumetricWeight;
    setPrice(rate * 13);
  };

  return (
    <form className="max-w-lg mx-auto p-4">
      <div className="m-4">
        <label htmlFor="length" className="block font-medium mb-2">
          Length (cm)
        </label>
        <input
          type="text"
          id="length"
          value={length}
          onChange={(e) => setLength(Number.parseInt(e.target.value))}
          className="px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#d54c08] focus:border-transparent"
        />
      </div>
      <div className="m-4">
        <label htmlFor="width" className="block font-medium mb-2">
          Width (cm)
        </label>
        <input
          type="text"
          id="width"
          value={width}
          onChange={(e) => setWidth(Number.parseInt(e.target.value))}
          className="px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#d54c08] focus:border-transparent"
        />
      </div>
      <div className="m-4">
        <label htmlFor="height" className="block font-medium mb-2">
          Height (cm)
        </label>
        <input
          type="text"
          id="height"
          value={height}
          onChange={(e) => setHeight(Number.parseInt(e.target.value))}
          className="px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#d54c08] focus:border-transparent"
        />
      </div>
      <div className="m-4">
        <label htmlFor="numBoxes" className="block font-medium mb-2">
          Number of Boxes
        </label>
        <input
          type="text"
          id="numBoxes"
          value={numBoxes}
          onChange={(e) => setNumBoxes(Number.parseInt(e.target.value))}
          className="px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#d54c08] focus:border-transparent"
        />
      </div>
      <div className="m-4">
        <label htmlFor="weight" className="block font-medium mb-2">
          Weight (kg)
        </label>
        <input
          type="text"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(Number.parseInt(e.target.value))}
          className="px-3 py-2 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-[#d54c08] focus:border-transparent"
        />
      </div>
      <button
        type="button"
        onClick={airPrice}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-4"
      >
        Calculate
      </button>
      <div className="m-4">
        <p className="font-medium">Price: ${price.toFixed(2)}</p>
      </div>
    </form>
  );
}
