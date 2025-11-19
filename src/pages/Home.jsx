import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Grid, List, Filter } from 'lucide-react';
import { pages } from '../data/pages';
import './Home.css';

// Category definitions with colors
const categories = {
  'Professional Development': {
    color: '#3b82f6',
    icon: '💼',
    keywords: ['development', 'discussion', 'trackingjll', 'retrospective', 'tony', '1:1']
  },
  'Technical Projects': {
    color: '#10b981',
    icon: '🔧',
    keywords: ['aurity', 'fi-core', 'bioml', 'intelligence', 'cold', 'vih']
  },
  'Wellness & Nutrition': {
    color: '#f59e0b',
    icon: '🥗',
    keywords: ['alimenticio', 'nutrición', 'nutrition', 'plan', 'meal', 'semanal']
  },
  'Experimental': {
    color: '#a855f7',
    icon: '🎨',
    keywords: ['forense', 'lenguaje', 'society', 'exhaustion', 'workshop']
  }
};

function categorizePages(pages) {
  const categorized = {
    'Professional Development': [],
    'Technical Projects': [],
    'Wellness & Nutrition': [],
    'Experimental': []
  };

  pages.forEach(page => {
    const titleAndDesc = `${page.title.toLowerCase()} ${page.description.toLowerCase()}`;

    let assigned = false;
    for (const [categoryName, categoryData] of Object.entries(categories)) {
      if (categoryData.keywords.some(keyword => titleAndDesc.includes(keyword))) {
        categorized[categoryName].push(page);
        assigned = true;
        break;
      }
    }

    // Fallback to Experimental if no category matched
    if (!assigned) {
      categorized['Experimental'].push(page);
    }
  });

  return categorized;
}

function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'

  const categorizedPages = useMemo(() => categorizePages(pages), []);

  // Filter pages based on search and category
  const filteredPages = useMemo(() => {
    let filtered = {};

    Object.entries(categorizedPages).forEach(([categoryName, categoryPages]) => {
      const matchingPages = categoryPages.filter(page => {
        const matchesSearch = searchQuery === '' ||
          page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          page.description.toLowerCase().includes(searchQuery.toLowerCase());

        const matchesCategory = selectedCategory === 'All' || categoryName === selectedCategory;

        return matchesSearch && matchesCategory;
      });

      if (matchingPages.length > 0) {
        filtered[categoryName] = matchingPages;
      }
    });

    return filtered;
  }, [categorizedPages, searchQuery, selectedCategory]);

  const totalPages = pages.length;
  const totalFilteredPages = Object.values(filteredPages).flat().length;

  return (
    <div className="home-container-new">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Art Collection</h1>
          <p className="hero-subtitle">Una colección experimental de presentaciones, proyectos y herramientas</p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">{totalPages}</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{Object.keys(categories).length}</span>
              <span className="stat-label">Categorías</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Experimental</span>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="controls-section">
        <div className="controls-container">
          {/* Search Bar */}
          <div className="search-bar">
            <Search size={20} className="search-icon" />
            <input
              type="text"
              placeholder="Buscar proyectos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            {searchQuery && (
              <button
                className="clear-search"
                onClick={() => setSearchQuery('')}
              >
                ×
              </button>
            )}
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <Filter size={18} className="filter-icon" />
            <button
              className={`category-filter-btn ${selectedCategory === 'All' ? 'active' : ''}`}
              onClick={() => setSelectedCategory('All')}
            >
              All
            </button>
            {Object.entries(categories).map(([categoryName, categoryData]) => (
              <button
                key={categoryName}
                className={`category-filter-btn ${selectedCategory === categoryName ? 'active' : ''}`}
                onClick={() => setSelectedCategory(categoryName)}
                style={selectedCategory === categoryName ? {
                  backgroundColor: categoryData.color + '20',
                  borderColor: categoryData.color,
                  color: categoryData.color
                } : {}}
              >
                <span>{categoryData.icon}</span>
                {categoryName}
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="view-mode-toggle">
            <button
              className={`view-mode-btn ${viewMode === 'grid' ? 'active' : ''}`}
              onClick={() => setViewMode('grid')}
              title="Grid view"
            >
              <Grid size={18} />
            </button>
            <button
              className={`view-mode-btn ${viewMode === 'list' ? 'active' : ''}`}
              onClick={() => setViewMode('list')}
              title="List view"
            >
              <List size={18} />
            </button>
          </div>
        </div>

        {/* Results Counter */}
        {searchQuery && (
          <div className="results-counter">
            Mostrando {totalFilteredPages} de {totalPages} proyectos
          </div>
        )}
      </div>

      {/* Content Sections */}
      <div className="content-section">
        {Object.keys(filteredPages).length === 0 ? (
          <div className="no-results">
            <p className="no-results-text">No se encontraron proyectos</p>
            <button
              className="reset-filters-btn"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
            >
              Limpiar filtros
            </button>
          </div>
        ) : (
          Object.entries(filteredPages).map(([categoryName, categoryPages]) => (
            <div key={categoryName} className="category-section">
              <div className="category-header">
                <h2 className="category-title">
                  <span className="category-icon">{categories[categoryName].icon}</span>
                  {categoryName}
                  <span className="category-count">({categoryPages.length})</span>
                </h2>
                <div
                  className="category-accent"
                  style={{ backgroundColor: categories[categoryName].color }}
                />
              </div>

              <div className={`page-grid ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
                {categoryPages.map((page) => (
                  <Link
                    key={page.uuid}
                    to={`/page/${page.uuid}`}
                    className="page-card"
                    style={{ '--category-color': categories[categoryName].color }}
                  >
                    <div className="page-card-content">
                      <h3 className="page-card-title">{page.title}</h3>
                      <p className="page-card-description">{page.description}</p>
                      <div className="page-card-footer">
                        <span
                          className="page-category-badge"
                          style={{
                            backgroundColor: categories[categoryName].color + '20',
                            color: categories[categoryName].color
                          }}
                        >
                          {categories[categoryName].icon} {categoryName}
                        </span>
                      </div>
                    </div>
                    <div
                      className="page-card-hover-indicator"
                      style={{ backgroundColor: categories[categoryName].color }}
                    />
                  </Link>
                ))}
              </div>
            </div>
          ))
        )}
      </div>

      {/* Footer */}
      <footer className="home-footer-new">
        <p>Art Collection © 2025 - {totalPages} proyectos experimentales</p>
      </footer>
    </div>
  );
}

export default Home;
