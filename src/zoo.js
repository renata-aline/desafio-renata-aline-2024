import { Bioma } from './bioma.js';
import { animais } from './animais.js';

export const zoo = [
    {
        "id": 1,
        "bioma": [Bioma.SAVANA],
        "tamanhoTotal": 10,
        "animaisExistente": [animais[3], animais[3], animais[3]]
    },

    {
        "id": 2,
        "bioma": [Bioma.FLORESTA],
        "tamanhoTotal": 5,
        "animaisExistente": []
    },

    {
        "id": 3,
        "bioma": [Bioma.SAVANA, Bioma.RIO],
        "tamanhoTotal": 7,
        "animaisExistente": [animais[4]]
    },

    {
        "id": 4,
        "bioma": [Bioma.RIO],
        "tamanhoTotal": 8,
        "animaisExistente": []
    },

    {
        "id": 5,
        "bioma": [Bioma.SAVANA],
        "tamanhoTotal": 9,
        "animaisExistente": [animais[0]]
    }

]