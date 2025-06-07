import React from 'react';

const SearchSection: React.FC = () => {
  const features = [
    { id: 1, title: 'Feature One', description: 'Description of feature one.' },
    { id: 2, title: 'Feature Two', description: 'Description of feature two.' },
    { id: 3, title: 'Feature Three', description: 'Description of feature three.' },
  ];

  return (
    <section className="p-8 bg-white">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {features.map((feature) => (
          <div key={feature.id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SearchSection;