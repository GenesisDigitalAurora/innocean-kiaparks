import { useState, useEffect } from 'react'

export const useLanguage = () => {

  const [lang, setLang] = useState('')
  

  const getLang = async () => {
    
    const queryString = window.location.search;
    const parametros = new URLSearchParams(queryString);

    const redirect = parametros.get('redirect');
    let usrlang = '';
    
    if (redirect) {
      
      usrlang = parametros.get('lang') || 'es';
      
    } else {
      
      usrlang = getCookie('kiaparks_lang') || window.navigator.language;
      if(usrlang.includes('es-')){
        usrlang = 'es';
      }
    }


    setLangByUser(usrlang);
    setLang(usrlang);
  }


  function getCookie(name: string) {
    const cookies = document.cookie.split(';');
    
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(name + '=')) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  console.log('process.env:::',process.env.REACT_APP_DOMAIN_ES);


  const setLangByUser = (userLang: string) => {

    const path = window.location.pathname;
    const subdomain = window.location.hostname.split('.')[0];


    document.cookie = `kiaparks_lang=${userLang}; domain=${process.env.REACT_APP_DOMAIN_ES}.com; path=/`;
    document.cookie = `kiaparks_lang=${userLang}; domain=${process.env.REACT_APP_DOMAIN_EN}.kiaparks.com; path=/`;


    if (userLang !== 'es' && (subdomain === process.env.REACT_APP_DOMAIN_ES || subdomain === 'www')) {
      window.location.href = `https://${process.env.REACT_APP_DOMAIN_EN}.kiaparks.com${path}?redirect=1&lang=en`;
    }

    if (userLang === 'es' && subdomain === process.env.REACT_APP_DOMAIN_EN) {
      window.location.href = `https://${process.env.REACT_APP_DOMAIN_ES}.com${path}?redirect=1&lang=es`;
    }

    setLang(userLang);
  }

  useEffect(() => {
    getLang();
  }, [])


  return {
    lang,
    setLangByUser
  }
}
