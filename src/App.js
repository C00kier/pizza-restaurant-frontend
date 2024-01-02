import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Outlet,
  RouterProvider
} from 'react-router-dom';

import './App.css';

//constants
import PAGES from './constants/PAGES';

//components
import Navbar from './components/Navbar/Navbar';

//pages
import HomePage from "./pages/Home/HomePage";
import ContactPage from './pages/Contact/ContactPage';
import OfferPage from './pages/Offer/OfferPage';
import LoginPage from './pages/Access/Login/LoginPage';
import RegisterPage from './pages/Access/Register/RegisterPage';
import PageNotFound from './pages/NotFound/PageNotFound';
import ForgotPassword from './pages/Access/ForgotPassword/ForgotPassword';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route
          path={PAGES.HOME}
          element={
            <>
              <nav>
                <Navbar />
              </nav>
              <main>
                <Outlet />
              </main>
            </>
          }>
            <Route index element={<HomePage/>}/>
            <Route path={PAGES.CONTACT} element={<ContactPage/>}/>
            <Route path={PAGES.OFFER} element={<OfferPage/>}/>
            <Route path={PAGES.LOGIN} element={<LoginPage/>}/>
            <Route path={PAGES.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
            <Route path={PAGES.REGISTER} element={<RegisterPage/>}/>
            <Route path={PAGES.UNASSIGNED} element={<PageNotFound/>}/>
        </Route>
      </>
    ))

  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
