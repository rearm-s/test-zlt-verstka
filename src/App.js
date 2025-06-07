import React from 'react';
import Header from './components/shared/Header';
import Breadcrumbs from './components/shared/Breadcrumbs';
import MainContent from './components/shared/MainContent';
import Container from './components/shared/Container';
import Footer from "./components/shared/Footer";

function App() {
  return (
    <>
      <Header />
      <Container>
        <Breadcrumbs />
        <MainContent />
      </Container>
      <Footer />
    </>
  );
}

export default App;