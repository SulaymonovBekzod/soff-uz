import React from 'react';
import './App.css';
import Header from './Components/Pages/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Kategoriya from './Components/Pages/Kategoriya/Kategoriya';
import Sellers from './Components/Pages/Sellers/Sellers';
import Products from './Components/Pages/FreeProducts/Products';
import Material from './Components/Pages/VideoMaterials/Material';
import Template from './Components/Pages/ReadyTemplates/Template';
import Presentations from './Components/Pages/Presentations/Presentations';
import Work from './Components/Pages/CursWork/Work';
import DiplomWork from './Components/Pages/DiplomWork/DiplomWork';
import Practical from './Components/Pages/PracticalWork/Practical';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Kategoriya />
      <Sellers />
      <Products />
      <Material />
      <Template />
      <Presentations />
      <Work />
      <DiplomWork />
      <Practical />
      <Footer />
    </div>
  );
}

export default App;
