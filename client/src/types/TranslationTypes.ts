export type GoogleTranslateResult = {
    data:{
        translations: [
            {
                translatedText: string
            }
        ]
    }
}

export type DictionaryEntry = {
    original: string
    translations: string[]
}