import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom' ;
//import BootstrapComp from './Component/Class/BootstrapComp';
import NavbarComp from './Component/Fungsional/NavbarComp';
import HomePage from './Component/Fungsional/HomePage';
import About from './Component/Fungsional/AboutComp'
//import DetailComp from './Component/Fungsional/DetailComp';
import ListComp from './Component/Class/ListComp';
import TambahComp from './Component/Class/TambahComp';
import EditComp from './Component/Class/EditComp';
import KelasComp from './Component/Hooks/Class/KelasComp';
import HooksComp from './Component/Hooks/Functional/HooksComp';
import HooksUseEffects from './Component/Hooks/Functional/HooksUseEffects';
import { CartContext } from './CartContex';
import ProductComp from './Component/Fungsional/ProductComp';
//import Parent from './Component/Class/Parent';
//import logo from './logo.svg';
//import Home from './Component/Fungsional/Home';
//import Beranda from './Component/Class/Beranda';
import './App.css';
import LoginComp from'./Component/Fungsional/LoginComp';
import DaftarComp from './Component/Fungsional/DaftarComp';

const App = () => {

const[value, setValue] = useState(0)

  return (
    <BrowserRouter>
    <CartContext.Provider value={{value, setValue}}>
    <NavbarComp/>
    <Switch>
      <Route exact path="/" component={LoginComp}/>
      <Route exact path="/daftar" component={DaftarComp}/>
      <Route exact path="/homepage" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/barang" component={ListComp} />
      <Route exact path="/barang/tambah" component={TambahComp} />
      <Route exact path="/barang/edit" component={EditComp} />
      <Route exact path="/kelas" component={KelasComp} />
      <Route exact path="/hooks" component={HooksComp} />
      <Route exact path="/useEffect" component={HooksUseEffects} />
      <Route exact path="/produk" component={ProductComp} />
      {/*<Route exact path="/detail:id" component={DetailComp} /> */}
    </Switch>
    </CartContext.Provider>
    </BrowserRouter>
  );
}

export default App;
