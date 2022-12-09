import K1_true from './/img/sticker_true/K1_true.png';
import K2_true from './/img/sticker_true/K2_true.png';
import K3_true from './/img/sticker_true/K3_true.png';
import K4_true from './/img/sticker_true/K4_true.png';
import K5_true from './/img/sticker_true/K5_true.png';
import K6_true from './/img/sticker_true/K6_true.png';
import K7_true from './/img/sticker_true/K7_true.png';
import K8_true from './/img/sticker_true/K8_true.png';
import K9_true from './/img/sticker_true/K9_true.png';

import K1_false from './/img/sticker_false/K1_false.png';
import K2_false from './/img/sticker_false/K2_false.png';
import K3_false from './/img/sticker_false/K3_false.png';
import K4_false from './/img/sticker_false/K4_false.png';
import K5_false from './/img/sticker_false/K5_false.png';
import K6_false from './/img/sticker_false/K6_false.png';
import K7_false from './/img/sticker_false/K7_false.png';
import K8_false from './/img/sticker_false/K8_false.png';
import K9_false from './/img/sticker_false/K9_false.png';

import franceUrl from './/img/France.jpg'
import pisaUrl from './/img/pisa.jpg'
import physicistUrl from './/img/physicist.png'
import fUrl from './/img/f.png'

export const K_true = [K1_true, K2_true, K3_true, K4_true, K5_true, K6_true, K7_true, K8_true, K9_true];
export const K_false = [K1_false, K2_false, K3_false, K4_false, K5_false, K6_false, K7_false, K8_false, K9_false];

export const questions = [
    {
        questionText: 'Wer hat vom Schiefen Turm von Pisa Steine heruntergeworfen?',
        questionUrl: pisaUrl,
        answerOptions: [
            { answerText: 'Newton', isCorrect: false },
            { answerText: 'Kosta Lavronenko', isCorrect: false },
            { answerText: 'Galilei', isCorrect: true },
            { answerText: 'Kopernikus', isCorrect: false },
        ],
    },
    {
        questionText: 'Welche der folgenden Personen war kein Physiker?',
        questionUrl: physicistUrl,
        answerOptions: [
            { answerText: 'Kosta Lavronenko', isCorrect: false },
            { answerText: 'Alexander Fleming', isCorrect: true },
            { answerText: 'Georg Ohm', isCorrect: false },
            { answerText: 'Abram Ioffe', isCorrect: false },
        ],
    },
    {
        questionText: 'Wie heißt der Nachbar von Pascha in seinem WG am Ponttor?',
        questionUrl: fUrl,
        answerOptions: [
            { answerText: 'Fabian', isCorrect: true },
            { answerText: 'Florian', isCorrect: false },
            { answerText: 'Finn', isCorrect: false },
            { answerText: 'Fabien', isCorrect: false },
        ],
    },
    {
        questionText: 'Was soll man sagen wenn eine Frau einen Tisch im Egmont für ihren Geburtstag reserviert hat?',
        questionUrl: franceUrl,
        answerOptions: [
            { answerText: 'Alles Gute zum Geburtstag!', isCorrect: false },
            { answerText: 'Ich verstehe, aber sowas ist hier nicht erlaubt!', isCorrect: true },
            { answerText: 'Shots aufs Haus', isCorrect: false },
            { answerText: 'Hier ist der beste Tisch für euch', isCorrect: false },
        ],
    },
    {
        questionText: 'Welches dieser Länder war das erste, das eine Verfassung angenommen hat?',
        questionUrl: franceUrl,
        answerOptions: [
            { answerText: 'Ukraine', isCorrect: true },
            { answerText: 'USA', isCorrect: false },
            { answerText: 'Deutschland', isCorrect: false },
            { answerText: 'Frankreich', isCorrect: true },
        ],
    },
    {
        questionText: 'Was soll man bei einer Reise nach Amsterdam unbedingt mitnehmen?',
        questionUrl: franceUrl,
        answerOptions: [
            { answerText: '2te Jacke', isCorrect: false },
            { answerText: 'Eine Kamera', isCorrect: false },
            { answerText: 'Einen Regenschirm', isCorrect: false },
            { answerText: '2te Schuhpaar', isCorrect: true },
        ],
    },

];