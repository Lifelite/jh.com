export const config = {
    runtime: 'edge',
};

const textMap = {
    2: ['a', 'b', 'c', '2'],
    3: ['d', 'e', 'f', '3'],
    4: ['g', 'h', 'i', '4'],
    5: ['j', 'k', 'l', '5'],
    6: ['m', 'n', 'o', '6'],
    7: ['p', 'q', 'r', 's', '7'],
    8: ['t', 'u', 'v', '8'],
    9: ['w', 'x', 'y', 'z', '9'],
    "symbol": ['']
}

// underscore or pipe implies pause

function mapNumbers (string, shiftButton) {
    const wordLength = string.length;
    let lastCharacter = string.at(0)
    let newString = "";
    let s = 0;
    let upperCase = false;
    for (let i = 0; i < wordLength + 1; i++) {
        if (string.at(i) === shiftButton) {
            upperCase = true;
            s = -1;
            lastCharacter = string.at(i+1);
        }
        else if (string.at(i) === lastCharacter){
            if (i === 0 && wordLength > 1) {continue;}
            else if (wordLength === 1) {return textMap[lastCharacter][0]}
            else {
                s++;
                continue;
            }
        }
        else {
            if (s > 3 &&
                (s > 2 &&
                    (lastCharacter !== 7 || lastCharacter !== 9)
                )
            ) {
                s -= 3;
            }
            if (string.at(i) !== '|' && string.at(i) !== '_') {
                const currentNumberArray = textMap[lastCharacter]
                if (upperCase) {
                    upperCase = false;
                    newString += currentNumberArray[s].toUpperCase()
                } else {
                    newString += currentNumberArray[s];
                }
            }
            else {
                newString += textMap[lastCharacter][s];
                s = 0;
                i++
            }
            s = 0;
            lastCharacter = string.at(i);
        }
    }
    return newString
}

function multiTapTextParser (message, shiftButton = "#") {
    //Add input validation
    // for this one, we're going to say # is space, mimicking the ol
    let string = "";
    const wordArray = message.split(/0+| +/g);
    wordArray.forEach((word) => {
        let parsedWord = mapNumbers(word, shiftButton)
        string = string + parsedWord + " "
        }
    )
    return string;
}

function stringToMultiTap (text, shiftbutton="#") {
    let translatedString = ""
    for (let i= 0; i < text.length; i++) {
        let letter = text.at(i)
        if (letter === " ") {
            translatedString = translatedString + " "
            continue
        }
        else if (letter.match(/[A-Z]+/g)) {
            translatedString = translatedString + shiftbutton
            letter = letter.toLowerCase()
        }
        else if (!letter.match(/([a-z]+|[A-Z]+|[0-9]+)/g)) {
            continue
        }
        const number = Object.keys(textMap).find(key => textMap[key].includes(letter));
        const nextNumber = Object.keys(textMap).find(key => textMap[key].includes(text.at(i+1)));
        const place = textMap[number].indexOf(letter) + 1;
        translatedString = translatedString + number.repeat(place)
        if (nextNumber === number) {
            translatedString = translatedString + "|";
        }
    }
    return translatedString;
}

export default async function handler(request) {
    const method = request.method;
    let body;
    let statusCode;
    let translate;
    let translation;
    let message;

    switch (method) {
        case 'GET': {
            statusCode = 200;
            body = "Hello there, welcome to the dumb-phone texting translator! Send [translate], value 'to'/'from' " +
                "and [message] with your message; to get started"

            return new Response(
                JSON.stringify({
                    body
                }),
                {
                    status: statusCode,
                    headers: {
                        'content-type': 'application/json'
                    }
                }
            );
        }
        case 'POST': {
            body = await request.json();
            message = body.message;
            translate = body.translate.toLowerCase()
            if (translate === "to") {
                translation = multiTapTextParser(message)
            } else if (translate === "from"){
                translation = stringToMultiTap(message)
            } else {
                statusCode = 400
                return new Response(
                    JSON.stringify({
                        "error" : "Invalid [transfer] type, only use 'to' or 'from'",
                        "errorReason" : "User can't follow directions"
                    }),
                    {
                        status: statusCode,
                        headers: {
                            'content-type': 'application/json',
                        },
                    }
                )
            }
            statusCode = 200
            return new Response(
                JSON.stringify({
                    message,
                    translate,
                    translation,
                }),
                {
                    status: statusCode,
                    headers: {
                        'content-type': 'application/json',
                    },
                }
            )
        }
        default: {
            return new Response(
                JSON.stringify("Invalid Request"),
                {
                    status: 400,
                    headers: {
                        'content-type': 'application/json'
                    }
                }
            )
        }
    }
}