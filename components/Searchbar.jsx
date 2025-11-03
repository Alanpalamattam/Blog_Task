import { Search, X } from 'lucide-react';
import { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value); 
  };

  const handleClear = () => {
    setQuery('');
    onSearch(''); 
  };

  return (
    <div className="ml-20">
      <div className="relative mx-auto max-w-xl">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search blogs..."
          className="block w-full rounded-[5px] bg-white/15 text-white py-2 pl-10 pr-10 placeholder-white/70 focus:outline-none"
        />
        <div className="absolute left-3 top-2.5 text-white opacity-80">
          <Search className="h-4 w-4" />
        </div>

        {query && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-2.5 text-white opacity-80 hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
    </div>
  );
}
