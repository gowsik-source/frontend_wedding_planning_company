import {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const includedRoutes = ["/about", "/contact", "/services"];
const NavigationPageTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
    if (includedRoutes.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
}

export default NavigationPageTop
