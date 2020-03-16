
import React from 'react';
import TarjetaFruta from './componentes/TarjetaFruta/';

const App = () => (
  <div>
    <TarjetaFruta name={'Sandia'} price={2.0} />
    <TarjetaFruta name={'Naranga'} price={8.88} />
    <TarjetaFruta name="Pera" price={3.85} />
  </div>
);

export default App;