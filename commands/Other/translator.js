const Discord = require("discord.js");
const fetch = require("node-fetch");
const querystring = require('querystring');
const config = require ('../../config.json')
const yandexkey = config.yandexkey;

module.exports = {
    name: "translator",
    aliases: ["translate"],
    category: "Other",
    description: "Translate something",
    usage: "translator [no arguments = language list] <from> <to> <message>\n**e.g.**\n\`translator\`\n> get the list of all available languages\n\`translator en it hello I am a robot\`\n> will translate the sentence \"hello i am a robot\" from english to italian",
    run: async (client, msg, arg) => {
        msg.delete();
        
        const body = {
            "q":"this is a test",
            "target":"it",
            "model": "base"
         }

        const text = fetch(`https://translation.googleapis.com/language/translate/v2/detect?key=${key}`, {
        method: 'post',
        body:    JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
    })

    console.log (text)



        
        return msg.reply("This command is currently disabled.").then(msg => msg.delete({ timeout: 5000 }));

        // const noargsEmbed = new Discord.MessageEmbed()
        //     .setColor(`RED`)
        //     .setTitle(`⛔ Please provide 2 different languages and the text to translate`)
        //     .setFooter(`<from> <to> <text> Example: en it Hello World. Leave them blank to get a link to code list`)
        // const errorEmbed = new Discord.MessageEmbed()
        //     .setColor(`RED`)
        //     .setTitle(`⛔ Error: 400 Bad Request`)
        //     .setFooter(`Something went wrong or you probably typed wrong codes.\nPlease try again.`)

        // var codes = {
        //     "az": "Azerbaijan","sq": "Albanian","am": "Amharic","en": "English","ar": "Arabic","hy": "Armenian","af": "Afrikaans","eu": "Basque",
        //     "ba": "Bashkir","be": "Belarusian","bn": "Bengali","my": "Burmese","bg": "Bulgarian","bs": "Bosnian","cy": "Welsh","hu": "Hungarian","vi": "Vietnamese",
        //     "ht": "Haitian (Creole)","gl": "Galician","nl": "Dutch","mrj": "Hill Mari","el": "Greek","ka": "Georgian","gu": "Gujarati","da": "Danish",
        //     "he": "Hebrew","yi": "Yiddish","id": "Indonesian","ga": "Irish","it": "Italian","is": "Icelandic","es": "Spanish","kk": "Kazakh",
        //     "kn": "Kannada","ca": "Catalan","ky": "Kyrgyz","zh": "Chinese","ko": "Korean","xh": "Xhosa","km": "Khmer","lo": "Laotian","la": "Latin",
        //     "lv": "Latvian","lt": "Lithuanian","lb": "Luxembourgish","mg": "Malagasy","ms": "Malay","ml": "Malayalam","mt": "Maltese","mk": "Macedonian",
        //     "mi": "Maori","mr": "Marathi","mhr": "Mari","mn": "Mongolian","de": "German","ne": "Nepali","no": "Norwegian","pa": "Punjabi","pap": "Papiamento",
        //     "fa": "Persian","pl": "Polish","pt": "Portuguese","ro": "Romanian","ru": "Russian","ceb": "Cebuano","sr": "Serbian","si": "Sinhala","sk": "Slovakian",
        //     "sl": "Slovenian","sw": "Swahili","su": "Sundanese","tg": "Tajik","th": "Thai","tl": "Tagalog","ta": "Tamil","tt": "Tatar","te": "Telugu",
        //     "tr": "Turkish","udm": "Udmurt","uz": "Uzbek","uk": "Ukranian","ur": "Urdu","fi": "Finnish","fr": "French","hi": "Hindi","hr": "Croatian",
        //     "cs": "Czech","sv": "Swedish","gd": "Scottish","et": "Estonian","eo": "Esperanto","jv": "Javanese","ja": "Japanese"
        // }

        // const text = arg.slice(2).join(' ')
        // const from = arg[0]
        // const to = arg[1]
        // const translatorcodesEmbed = new Discord.MessageEmbed()
        //     .setColor(`RANDOM`)
        //     .setTitle(`🗣️ Translator`)
        //     .setThumbnail(`https://camo.githubusercontent.com/f2ec5a009334a6dfafe485313689b137b8dbfd90/68747470733a2f2f692e696d6775722e636f6d2f34597a504270372e706e67`)
        //     .setDescription(`Click on the image or open the link below\n\n[**Codes List**](https://camo.githubusercontent.com/f2ec5a009334a6dfafe485313689b137b8dbfd90/68747470733a2f2f692e696d6775722e636f6d2f34597a504270372e706e67)`);

        // if (!arg[0] && !arg[1] && !arg[2]) return msg.channel.send(translatorcodesEmbed).then(msg => msg.delete({timeout: 30000}));
        // if (arg[0] === arg[1] || !arg[2]) return msg.channel.send (noargsEmbed).then(msg => msg.delete({ timeout: 5000 }));
        // try {

        //     const query = querystring.stringify({
        //         key: yandexkey,
        //         text,
        //         lang: from ? `${from}-${to}` : to
        //     });
        //     const body = await fetch(`https://translate.yandex.net/api/v1.5/tr.json/translate?${query}`)
        //         .then(response => response.text())
        //         console.log(body)
        //     const langs = body.lang.split('-');
        //     const embed = new Discord.MessageEmbed()
        //         .setColor(0x00AE86)
        //         .setTitle(`🗣️ Translator`)
        //         .addField(`From: ${codes[langs[0]]}`, text)
        //         .addField(`To: ${codes[langs[1]]}`, body.text[0]);
        //     msg.channel.send(embed).catch(err => console.log(err));
        // } catch (error) {
        //     console.error(error);
        //     msg.channel.send(errorEmbed).then(msg => msg.delete({ timeout: 5000 }));
        //     }    
    }
}
