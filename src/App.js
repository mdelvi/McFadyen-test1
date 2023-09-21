
import './App.css';
import { StickyNavbar } from './components/Sticky-Navbar'
import { ProductContainer } from './components/Product-Container'
import { AppFooter } from './components/footer'


/**
 * !TODO update link route url for respective labels
 * TO be fetch from API Added static for now
 */
const navListData = [
  { label: "The Edit", link: "/" },
  { label: "New Arrivals", link: "/" },
  { label: "Designers", link: "/" },
  { label: "Clothing", link: "/" },
  { label: "Shoes", link: "/" },
  { label: "Bags", link: "/" },
  { label: "Accessories", link: "/" },
  { label: "Jewelry", link: "/" },
  { label: "Beauty", link: "/" },
  { label: "home", link: "/" }
]

function App() {
  return (
    <div className="relative mb-8 h-full w-full bg-white">
      <StickyNavbar navData={navListData}></StickyNavbar>
      <ProductContainer></ProductContainer>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;




