import { Bioma } from './bioma.js';

export const animais = [
    {
        "especie": "LEAO",
        "tamanho": 3,
        "bioma": [Bioma.SAVANA],
        "carnivoro": true,
    },

    {
        "especie": "LEOPARDO",
        "tamanho": 3,
        "bioma": [Bioma.SAVANA],
        "carnivoro": true
    },

    {
        "especie": "CROCODILO",
        "tamanho": 3,
        "bioma": [Bioma.RIO],
        "carnivoro": true
    },

    {
        "especie": "MACACO",
        "tamanho": 1,
        "bioma": [Bioma.SAVANA, Bioma.FLORESTA],
        "carnivoro": false,
    },

    {
        "especie": "GAZELA",
        "tamanho": 2,
        "bioma": [Bioma.SAVANA],
        "carnivoro": false
    },

    {
        "especie": "HIPOPOTAMO",
        "tamanho": 4,
        "bioma": [Bioma.SAVANA, Bioma.RIO],
        "carnivoro": false
    }
]


