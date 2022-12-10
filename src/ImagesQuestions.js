import K1_true from './/img/sticker_true/K1_true.png';
import K2_true from './/img/sticker_true/K2_true.png';
import K3_true from './/img/sticker_true/K3_true.png';
import K4_true from './/img/sticker_true/K4_true.png';
import K5_true from './/img/sticker_true/K5_true.png';
import K6_true from './/img/sticker_true/K6_true.png';
import K7_true from './/img/sticker_true/K7_true.png';
import K8_true from './/img/sticker_true/K8_true.png';
import K9_true from './/img/sticker_true/K9_true.png';
import K10_true from './/img/sticker_true/K10_true.jpg';
import K11_true from './/img/sticker_true/K11_true.jpg';
import K12_true from './/img/sticker_true/K12_true.jpg';

import K1_false from './/img/sticker_false/K1_false.png';
import K2_false from './/img/sticker_false/K2_false.png';
import K3_false from './/img/sticker_false/K3_false.png';
import K4_false from './/img/sticker_false/K4_false.png';
import K5_false from './/img/sticker_false/K5_false.png';
import K6_false from './/img/sticker_false/K6_false.png';
import K7_false from './/img/sticker_false/K7_false.png';
import K8_false from './/img/sticker_false/K8_false.png';
import K9_false from './/img/sticker_false/K9_false.png';
import K10_false from './/img/sticker_false/K10_false.jpg';
import K11_false from './/img/sticker_false/K11_false.jpg';
import K12_false from './/img/sticker_false/K12_false.jpg';

import franceUrl from './/img/France.jpg'
import pisaUrl from './/img/pisa.jpg'
import physicistUrl from './/img/physicist.png'
import fUrl from './/img/f.png'
import amsterdamUrl from './/img/amsterdam.jpg'
import galvanometerUrl from './/img/galvanometer.jpg'
import waiterUrl from './/img/waiter.png'
import sleepUrl from './/img/sleep.jpg'
import minecraftUrl from './/img/minecraft.png'
import stomachUrl from './/img/stomach.png'
import vanadiumUrl from './/img/vanadium.jpg'
import nimrodUrl from './/img/nimrod.png'
import maxwellUrl from './/img/maxwell.png'

export const K_true = [K1_true, K2_true, K3_true, K4_true, K5_true, K6_true, K7_true, K8_true, K9_true, K10_true, K11_true, K12_true];
export const K_false = [K1_false, K2_false, K3_false, K4_false, K5_false, K6_false, K7_false, K8_false, K9_false, K10_false, K11_false, K12_false];

export const questions = [
    {
        questionText: 'Was ist Kostyas Lieblingsessen?',
        questionUrl: stomachUrl,
        answerOptions: [
            { answerText: 'Chips und Chips', isCorrect: true },
            { answerText: 'Sushi und Wasser', isCorrect: false },
            { answerText: 'Chicken Wings und Cola', isCorrect: false },
            { answerText: 'Schnitzel und Bier', isCorrect: false },
        ],
    },
    {
        questionText: 'Wann wurde Minecraft veröffentlicht?',
        questionUrl: minecraftUrl,
        answerOptions: [
            { answerText: '2009', isCorrect: false },
            { answerText: '2015', isCorrect: false },
            { answerText: '2011', isCorrect: true },
            { answerText: '2000', isCorrect: false },
        ],
    },
    {
        questionText: 'Was braucht Kosta um einzuschlafen?',
        questionUrl: sleepUrl,
        answerOptions: [
            { answerText: 'Ein Bett', isCorrect: false },
            { answerText: 'Eine warme Decke', isCorrect: false },
            { answerText: 'Dunkelheit und Stille', isCorrect: false },
            { answerText: 'Filmabend mit Freunden', isCorrect: true },
        ],
    },
    {
        questionText: 'Atommasse von Vanadium?',
        questionUrl: vanadiumUrl,
        answerOptions: [
            { answerText: '50.9416 u', isCorrect: false },
            { answerText: '51.9416 u', isCorrect: false },
            { answerText: '50.9415 u', isCorrect: true },
            { answerText: '51.9415 u', isCorrect: false },
        ],
    },
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
        questionText: 'Der ahnungsloseste Mitarbeiter in Egmont?',
        questionUrl: nimrodUrl,
        answerOptions: [
            { answerText: 'Kosta', isCorrect: false },
            { answerText: 'Nimrod', isCorrect: true },
            { answerText: 'John', isCorrect: false },
            { answerText: 'Stefan', isCorrect: false },
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
        questionText: 'Hier erkennst du (hoffentlich) Maxwellsche Gleichungen :) Welche Gleichung bennent man als "Erweitertes Durchflutungsgesetz"?',
        questionUrl: maxwellUrl,
        answerOptions: [
            { answerText: '1', isCorrect: false },
            { answerText: '2', isCorrect: false },
            { answerText: '3', isCorrect: false },
            { answerText: '4', isCorrect: true },
        ],
    },
    {
        questionText: 'Was soll man sagen wenn eine Frau einen Tisch im Egmont für ihren Geburtstag reserviert hat?',
        questionUrl: waiterUrl,
        answerOptions: [
            { answerText: 'Alles Gute zum Geburtstag!', isCorrect: false },
            { answerText: 'Ich verstehe das natürlich, aber so was ist hier nicht erlaubt!', isCorrect: true },
            { answerText: 'Shots gehen aufs Haus!', isCorrect: false },
            { answerText: 'Hier ist der beste Tisch für euch!', isCorrect: false },
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
        questionUrl: amsterdamUrl,
        answerOptions: [
            { answerText: '2te Jacke', isCorrect: false },
            { answerText: 'Eine Kamera', isCorrect: false },
            { answerText: 'Einen Regenschirm', isCorrect: false },
            { answerText: '2te Schuhpaar', isCorrect: true },
        ],
    },
    {
        questionText: 'Ein Galvanometer kann in ein Voltmeter umgewandelt werden, indem man __',
        questionUrl: galvanometerUrl,
        answerOptions: [
            { answerText: 'niedriger Widerstand in Reihe schaltet', isCorrect: false },
            { answerText: 'hoher Widerstand in Reihe schaltet', isCorrect: true },
            { answerText: 'niedriger Widerstand parallel schaltet', isCorrect: false },
            { answerText: 'hoher Widerstand parallel schaltet', isCorrect: false },
        ],
    },

];