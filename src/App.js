import logo from './logo.svg';
import './App.css';
import NavbarExample from './components/Example/NavbarExample';
import HeroExample from './components/Example/HeroExample';
import ProductListExample from './components/Example/ProductListExample';
import TreatmentListExample from './components/Example/TreatmentListExample';
import CTAExample from './components/Example/CTAExample';
import ContactExample from './components/Example/ContactExample';

function App() {
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col min-h-screen'>
        <NavbarExample />
        <HeroExample />
      </div>
      <ProductListExample />
      <CTAExample />
      <TreatmentListExample />
      <ContactExample />
    </div>
  );
}

export default App;
