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


  const setLangByUser = (userLang: string) => {

    const path = window.location.pathname;
    const subdomain = window.location.hostname.split('.')[0];


    document.cookie = `kiaparks_lang=${userLang}; domain=kiaparks.com; path=/`;
    document.cookie = `kiaparks_lang=${userLang}; domain=english.kiaparks.com; path=/`;


    if (userLang !== 'es' && (subdomain === 'kiaparks' || subdomain === 'www')) {
      window.location.href = `https://english.kiaparks.com${path}?redirect=1&lang=en`;
    }

    if (userLang === 'es' && subdomain === 'english') {
      window.location.href = `https://kiaparks.com${path}?redirect=1&lang=es`;
    }


    ////////////////////////////////////////////////////////////////////////////////////////////////////

    // document.cookie = `kiaparks_lang=${userLang}; domain=stagingeng.kiaparks.com; path=/`;
    // document.cookie = `kiaparks_lang=${userLang}; domain=staging.kiaparks.com; path=/`;


    // if (userLang !== 'es' && subdomain === 'staging') {
    //   window.location.href = `https://stagingeng.kiaparks.com${path}?redirect=1&lang=en`;
    // }

    // if (userLang === 'es' && subdomain === 'stagingeng') {
    //   window.location.href = `https://staging.kiaparks.com${path}?redirect=1&lang=es`;
    // }
   
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    
    // document.cookie = `kiaparks_lang=${userLang}; domain=english.localhost; path=/`;
    // document.cookie = `kiaparks_lang=${userLang}; domain=localhost; path=/`;


    // if (userLang !== 'es' && subdomain === 'localhost') {
    //   window.location.href = `http://english.localhost:3000${path}?redirect=1&lang=en`;
    // }

    // if (userLang === 'es' && subdomain === 'english') {
    //   window.location.href = `http://localhost:3000${path}?redirect=1&lang=es`;
    // }

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
