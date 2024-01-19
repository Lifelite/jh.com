export const config = {
    runtime: 'edge',
};

const grootDialogue = [
    "I am Groot",
    "I AM Groot",
    "I am Groot!",
    "I AM GROOT!!!",
    "I am GROOT!",
    "I am Groot?",
    "I am Groot.",
    "I aM gRoOt",
    "I am Groot...",
    "...I am...Groot?",
];

const grootImage = {
    "groot": [
        {"a": "     .^. .  _         "},
        {"a": "    /: ||`\\/ \\~  ,  "},
        {"a": "  , [   &    / \\ y'  "},
        {"a": " {v':   `\\   / `&~-, "},
        {"a": "'y. '    |`   .  ' /  "},
        {"a": " \\   '  .       , y  "},
        {"a": " v .        '     v   "},
        {"a": " V  .~.      .~.  V   "},
        {"a": " : (  0)    (  0) :   "},
        {"a": "  i `'`      `'` j    "},
        {"a": "   i     __    ,j     "},
        {"a": "    `%`~....~'&       "},
        {"a": " <~o' /  \\/` \\-s,   "},
        {"a": "  o.~'.  )(  r  .o ,. "},
        {"a": " o',  %``\\/``& : 'bF "},
        {"a": "d', ,ri.~~-~.ri , +h  "},
        {"a": "`oso' d`~..~`b 'sos`  "},
        {"a": "     d`+ II +`b       "},
        {"a": "     i_:_yi_;_y       "},
        {"a": "______________________"},
        {"a": "_____I_am_Groot_______"},
    ],
    "message": "Welcome to GrootAI, use a POST request with the [question] key to ask groot anything!"
};

export default async function handler(request) {
    const method = request.method;
    let body;
    let statusCode;
    let responseNumber = Math.floor(Math.random() * 10);
    let question;
    let answer;

    switch (method) {
        case 'GET': {
            statusCode = 200;
            body = grootImage;
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
            body = request.json();
            try {
                answer = grootDialogue[responseNumber]
                question = body.question;
                statusCode = 201;
            } catch {
                answer = {message: "Ask a question by using ['question':question] format in your request body."};
                statusCode = 400;
            } finally {
                question = (question) ? question : null;
                answer = (answer) ? answer: null;
            }

            return new Response(
                JSON.stringify({
                    question,
                    answer,
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