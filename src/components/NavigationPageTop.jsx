import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'

const NavigationPageTop = () => {
    const { pathname } = useLocation();

    const includedRoutes = ["/about", "/contact", "/services"];

    useEffect(() => {
    if (includedRoutes.includes(pathname)) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
}

export default NavigationPageTop
