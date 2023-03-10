declare type URLObject = {
  url: string;
};

export interface descItem{
  descTextEsp: string[];
  descTextEng: string[];
  indx?: number;
  images: string[] | URLObject[];
  type: string;
  lang?: string;
}

export interface FooterItem{
  url: string;
  titleEsp: string;
  titleEng: string;
}

export interface FooterSNItem{
  net: string;
  url: string;
}

export interface lang{
  lang: string;
  chooseLang: (lang:string) => void;
}

export interface Park {
  id: number;
  side: number;
  country: string;
  resumeCountry: string;
  location: string;
  maps: number[];
  zoom: number;
  resumeEsp: string;
  resumeEng: string;
  description01Esp: string;
  description01Eng: string;
  description02: string | any;
  imageResume: string;
  url: string;
  videoActivated?: boolean;
  detailVideoURL?: string;
  detailVideoImage?: string;
  detailImageNew?: any;
  detailImageOld?: string;
  detailList?: string[];
  descriptionsSet: descItem[];
  galleryImages: string[] | URLObject[];
  footer: FooterItem[];
  footerSN: FooterSNItem[];
}

export interface resumePark{
  parkInfo: Park
  lang: string;
}

export interface uniquePark{
  parkInfo: Park
  lang: string;
  chooseLang: (lang:string) => void;
}

export interface VideoProps{
  title: string | null;
  bgImage: any | null;
  videoURL: string | undefined ;
  lang: string;
}