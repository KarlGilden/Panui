import { DictionaryEntry, GoogleTranslateResult } from "../types/TranslationTypes";

const apiUrl = "http://localhost:3000";

function getGoogleTranslation(word:string){

    return new Promise<DictionaryEntry>((resolve, reject) => {
        if(typeof word !== "string") return "Error occured";

        let url = `https://translation.googleapis.com/language/translate/v2?`;
        url += `&key=${import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY}`;
        url += `&q=${encodeURI(word)}`;
        url += `&source=mi`;
        url += `&target=${"en"}`;
        url += `&format=text`;
    
        fetch(url, { 
          method: 'GET',
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          }
        })
        .then(res => res.json())
        .then((response) => {
            return resolve(_mapGoogleToDictionary(word, response));
        })
        .catch(error => {
          console.log("There was an error with the translation request: ", error);
          return reject(error);
        });
    })
}

function getDictionaryTranslation(phrase:string){

  return new Promise<DictionaryEntry>(async (resolve, reject) => {
    await fetch(`${apiUrl}/dictionary/${phrase}`, {})
    .then(res=>res.json())
    .then(data=>{
      return resolve(data);
    })
    .catch(()=>{
      return reject();
    })
  });
}

export const translate = async (phrase:string, phraseList:DictionaryEntry[]) => {

  return new Promise<DictionaryEntry | null>(async (resolve, reject) => {
      let translation:DictionaryEntry | null = null;

      translation = _getSavedPhraseTranslation(phrase, phraseList);
      if(translation) return resolve(translation);

      await getDictionaryTranslation(phrase).then((translation)=>{
        return resolve(translation);
      }).catch(async ()=>{
        await getGoogleTranslation(phrase).then((translation)=>{
          return resolve(translation);
        }).catch(()=>{
          return reject();
        })
      })

      return reject(null);

  });
};

const _getSavedPhraseTranslation = (phrase:string, phraseList:DictionaryEntry[]) => {
  for(let i=0;i<phraseList.length;i++){
    if(phraseList[i].original === phrase){
        return phraseList[i];
    }
  }
  return null;
};

const _mapGoogleToDictionary = (phrase:string, googleResult:GoogleTranslateResult) => {
  const returnTranslations = googleResult.data.translations.map((value)=>{
    return value.translatedText;
  });
  return {original:phrase, translations: returnTranslations}
};