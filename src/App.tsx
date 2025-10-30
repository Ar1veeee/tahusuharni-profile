import { Navbar, Footer } from './components';
import { HomePage, ProductPage, AboutPage, ContactPage } from './pages';
import { useNavigation } from './hooks';

function App() {
  const { currentPage, navigateTo } = useNavigation('Home');

  const renderPage = () => {
    switch (currentPage) {
      case 'Home':
        return <HomePage onNavigate={navigateTo} />;
      case 'Produk':
        return <ProductPage />;
      case 'Tentang':
        return <AboutPage />;
      case 'Kontak':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigateTo} />;
    }
  };

  return (
    <div className="font-sans">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      {renderPage()}
      <Footer currentPage={currentPage} onNavigate={navigateTo} />
    </div>
  );
}

export default App
