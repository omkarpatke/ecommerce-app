import './App.css';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home/Home';
import ProductListing from './components/Pages/ProductListing/ProductListing';
import Wishlist from './components/Pages/Wishlist/Wishlist';
import SignIn from './components/Pages/SignIn/SignIn';
import SignUp from './components/Pages/SignUp/SignUp';
import Profile from './components/Pages/Profile/Profile';
import { Routes, Route } from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/home' exact element={<Home />} />
        <Route path='/products' exact element={<ProductListing />} />
        <Route path='/wishlist' exact element={<Wishlist />} />
        <Route path='/signIn' exact element={<SignIn />} />
        <Route path='/signUp' exact element={<SignUp />} />
        <Route path='/signUp' exact element={<SignUp />} />
        <Route path='/profile' exact element={<Profile />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
