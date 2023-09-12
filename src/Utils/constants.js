export const user_Avtar = "https://occ-0-6215-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const logourl = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const API_Options =   {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer ' + process.env.REACT_APP_TMDB_API_KEY
  }
};

  export const Img_Movie_CDN = "https://image.tmdb.org/t/p/w780/";

  export const BackgroundImage_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/85eb5b91-25ed-4965-ace9-ba8e4a0ead8d/IN-en-20230828-popsignuptwoweeks-perspective_alpha_website_medium.jpg';

  
  export const OpenAI_APIKEY = process.env.REACT_APP_OpenAI_APIKEY;
  
  export const Supported_language = [{ name : "English", identifier:"en"},
                                      { name: "Spanish", identifier:"spanish"},{ name: "Hindi", identifier:"hindi"}];
                                      