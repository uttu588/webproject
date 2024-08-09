import React from 'react';

const CategorySlider: React.FC<{ categories: string[], onSelect: (category: string) => void }> = ({ categories, onSelect }) => {
  return (
    <div className="slider">
      {categories.map(category => (
        <button key={category} onClick={() => onSelect(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategorySlider;
