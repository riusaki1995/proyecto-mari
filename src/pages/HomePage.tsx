import { useMemo, useState } from 'react';
import { Category, Level, modules } from '../data/modules';
import { Filters } from '../components/Filters';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ModuleGrid } from '../components/ModuleGrid';

function normalize(text: string) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

export function HomePage() {
  const [search, setSearch] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Level | 'todos'>('todos');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'todos'>('todos');

  const filteredModules = useMemo(() => {
    const query = normalize(search.trim());

    return modules.filter((module) => {
      const matchesSearch =
        !query ||
        normalize(module.title).includes(query) ||
        normalize(module.description).includes(query);

      const matchesLevel = selectedLevel === 'todos' || module.level === selectedLevel;
      const matchesCategory =
        selectedCategory === 'todos' || module.category === selectedCategory;

      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [search, selectedLevel, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50/80">
      <Header />
      <main>
        <Hero />
        <Filters
          search={search}
          onSearchChange={setSearch}
          selectedLevel={selectedLevel}
          onLevelChange={setSelectedLevel}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          resultCount={filteredModules.length}
        />
        <ModuleGrid modules={filteredModules} />
      </main>
      <Footer />
    </div>
  );
}
