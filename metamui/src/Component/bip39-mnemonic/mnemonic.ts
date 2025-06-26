

import { generateMnemonic } from "@scure/bip39";
import { wordlist } from "@scure/bip39/wordlists/english";



export const GenerateMnemonic = (wordcount: 12 | 15 | 24):string => {

    const Strength: Record<number, number> = {
        12: 128,
        15: 160,
        24: 256,
    };

    
    const strength = Strength[wordcount];
    return generateMnemonic(wordlist, strength);
};

