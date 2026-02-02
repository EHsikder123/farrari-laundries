import React, { useState, useMemo, useEffect } from 'react';
import { Search, MapPin, Phone, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '../components/ui/dialog';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { branches } from '../data/mockData';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const BranchesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [isMapOpen, setIsMapOpen] = useState(false);

  const filteredBranches = useMemo(() => {
    if (!searchQuery.trim()) return branches;
    const query = searchQuery.toLowerCase();
    return branches.filter(
      (branch) =>
        branch.name.toLowerCase().includes(query) ||
        branch.location.toLowerCase().includes(query) ||
        branch.address.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
    setIsMapOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-white/10 rounded-full" />
          <div className="absolute bottom-10 right-10 w-60 h-60 bg-white/10 rounded-full" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Branches</h1>
            <p className="text-xl text-white/90 mb-8">
              Find our winning locations across Kuwait
            </p>

            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search by location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg bg-white text-gray-900 border-0 shadow-xl rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                  <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Branches Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Winning Locations</h2>
            <p className="text-gray-600">
              {filteredBranches.length} branch{filteredBranches.length !== 1 ? 'es' : ''} found
            </p>
          </div>

          {filteredBranches.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredBranches.map((branch) => (
                <Card
                  key={branch.id}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
                  onClick={() => handleBranchClick(branch)}
                >
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={branch.image}
                      alt={branch.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <Button
                      size="sm"
                      className="absolute top-4 right-4 bg-white/90 text-red-600 hover:bg-white"
                    >
                      View Location Map
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{branch.name}</h3>
                        <p className="text-sm text-gray-600">{branch.address}</p>
                      </div>
                    </div>
                    <a
                      href={`tel:${branch.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-2 text-red-600 font-medium hover:text-red-700 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {branch.phone}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No branches found</h3>
              <p className="text-gray-600">Try searching with a different location</p>
            </div>
          )}
        </div>
      </section>

      {/* Map Dialog */}
      <Dialog open={isMapOpen} onOpenChange={setIsMapOpen}>
        <DialogContent className="max-w-4xl w-full p-0 overflow-hidden">
          <DialogHeader className="p-6 pb-0">
            <DialogTitle className="text-xl font-bold">
              {selectedBranch?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="p-6">
            {selectedBranch && (
              <>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="overflow-hidden rounded-lg">
                    <img
                      src={selectedBranch.image}
                      alt={selectedBranch.name}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-4">
                      <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-1" />
                      <div>
                        <p className="font-medium text-gray-900">Address</p>
                        <p className="text-gray-600">{selectedBranch.address}</p>
                      </div>
                    </div>
                    <a
                      href={`tel:${selectedBranch.phone}`}
                      className="flex items-center gap-3 text-red-600 font-medium hover:text-red-700 transition-colors"
                    >
                      <Phone className="w-5 h-5" />
                      {selectedBranch.phone}
                    </a>
                  </div>
                </div>
                <div className="h-80 rounded-xl overflow-hidden border border-gray-200">
                  <MapContainer
                    center={[selectedBranch.lat, selectedBranch.lng]}
                    zoom={15}
                    style={{ height: '100%', width: '100%' }}
                  >
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[selectedBranch.lat, selectedBranch.lng]}>
                      <Popup>
                        <strong>{selectedBranch.name}</strong>
                        <br />
                        {selectedBranch.address}
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default BranchesPage;
