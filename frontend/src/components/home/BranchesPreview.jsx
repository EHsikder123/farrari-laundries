import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../ui/card';
import { Button } from '../ui/button';
import { branches } from '../../data/mockData';

const BranchesPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Winning Locations</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {branches.slice(0, 3).map((branch) => (
            <Card
              key={branch.id}
              className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={branch.image}
                  alt={branch.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{branch.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{branch.address}</p>
                <a
                  href={`tel:${branch.phone}`}
                  className="text-red-600 font-medium hover:text-red-700 transition-colors"
                >
                  {branch.phone}
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link to="/branches">
            <Button className="bg-red-600 hover:bg-red-700 text-white gap-2 hover:scale-105 transition-transform">
              View More Branches
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BranchesPreview;
