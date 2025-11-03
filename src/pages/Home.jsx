import { Link } from 'react-router-dom';
import { pages } from '../data/pages';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="container">
        <header className="home-header">
          <h1>Art Collection</h1>
          <p className="subtitle">Una colección de páginas experimentales</p>
        </header>

        <div className="page-list">
          {pages.map((page) => (
            <Link
              key={page.uuid}
              to={`/page/${page.uuid}`}
              className="page-item"
            >
              <div className="page-title">{page.title}</div>
              <div className="page-description">{page.description}</div>
              <div className="page-uuid">UUID: {page.uuid}</div>
            </Link>
          ))}
        </div>

        <footer className="home-footer">
          <p>Art Collection &copy; 2025</p>
        </footer>
      </div>
    </div>
  );
}

export default Home;
