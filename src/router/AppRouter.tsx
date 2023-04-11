import { Route, Routes, Navigate } from "react-router-dom"
import { HomePage } from "../pages";
import { kiaparks_chile_es, kiaparks_ecuador01, kiaparks_ecuador02, kiaparks_paraguay,kiaparks_lima} from "../data";
import { DetailPage } from "../pages/DetailPage/DetailPage";
import { NosotrosPage } from "../pages/NosotrosPage/NosotrosPage";
import { HomeEcuadorPage } from "../pages/HomeEcuadorPage/HomeEcuadorPage";
import { useLanguage } from "../hooks/useLanguage";
import { Park } from "../interfaces";
import { InauguracionesPage } from "../pages/InauguracionesPage/InauguracionesPage";

export const AppRouter = () => {
  const kiaparks:Park[] = [kiaparks_chile_es, kiaparks_ecuador01, kiaparks_ecuador02, kiaparks_paraguay, kiaparks_lima];  
  const { lang, setLangByUser } = useLanguage();

  return (
    <Routes>
        <Route path="/" element={ <HomePage lang={lang} chooseLang={setLangByUser} />} />
        <Route path="ecuador" element={ <HomeEcuadorPage lang={lang} chooseLang={setLangByUser} />} />
        {/* <Route path="inauguraciones" element={ <InauguracionesPage initialParks={ kiaparks } chooseLang={setLangByUser} lang={lang} />} /> */}
        <Route path="vision" element={ <NosotrosPage initialParks={ kiaparks } chooseLang={setLangByUser} lang={lang} />} />
        <Route path="ecuador/galapagosbaltra" element={ <DetailPage parkInfo={ kiaparks[2] } lang={lang} chooseLang={setLangByUser} />} />
        <Route path="ecuador/parquedelamujeryelnino" element={ <DetailPage parkInfo={ kiaparks[1] } lang={lang} chooseLang={setLangByUser} />} />
        <Route path="paraguay/parquenuguasu" element={ <DetailPage parkInfo={ kiaparks[3] } lang={lang} chooseLang={setLangByUser} />} /> 
        <Route path="chile/ciudaddeportivauss" element={ <DetailPage parkInfo={ kiaparks[0] } lang={lang} chooseLang={setLangByUser} />} />
        <Route path="peru/puericultorio" element={ <DetailPage parkInfo={ kiaparks[4] } lang={lang} chooseLang={setLangByUser} />} />
        
        <Route path="galapagos/*" element={ <Navigate to="/ecuador/galapagosbaltra"/> } />
        <Route path="paraguay/*" element={ <Navigate to="parquenuguasu"/> } />
        <Route path="chile/*" element={ <Navigate to="ciudaddeportivauss"/> } />
        <Route path="peru/*" element={ <Navigate to="puericultorio" /> } />
        <Route path="/*" element={ <Navigate to="/" /> } />
    </Routes>
  )
}
