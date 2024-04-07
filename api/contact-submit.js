export const config = {
    runtime: 'edge',
};

const url = process.env['HOMESERVER_URL']

// const conn = connect(psConfig)
//
// async function dbPush (name, email, message) {
//     return await conn.execute(
//         `INSERT INTO jeremy_contacts (name, email, message) VALUES ('${name}', '${email}', '${message}')`
//     );
// }
//
// async function dbRead () {
//     return await conn.execute(
//         `SELECT * FROM jeremy_contacts`
//     );
// }

async function dbPush (name, email, message) {
    const body = {
        name,
        email,
        message,
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body)
    };

    return await fetch (url, options)
        .then(response => response.json())
        .then(data => {
            return data
        })

}

export default async function handler(request) {
    const method = request.method;
    let body;
    let psResponse;
    let statusCode;

    switch (method) {
        case 'POST': {
            try {
                body = await request.json();
                const name = body.name;
                const email = body.email;
                const message = body.message;
                psResponse = await dbPush(name, email, message);
                statusCode = 201;
            } catch (e) {
                body = {e, message:"Failed to Post;"};
                statusCode = 500;
            }

            return new Response(
                JSON.stringify({
                    psResponse,
                    body,
                    statusCode
                }),
                {
                    status: statusCode,
                    headers: {
                        'content-type': 'application/json',
                    },
                },
            );
        }
        // case 'GET': {
        //     try {
        //         psResponse = await dbRead()
        //         body = psResponse.rows
        //         statusCode = 200
        //     } catch (e) {
        //         statusCode = 500
        //         body = {e, message:"Failed to retrieve messages"}
        //     }
        //
        //     return new Response(
        //         JSON.stringify({
        //                 body
        //             }),
        //         {
        //             status: statusCode,
        //             headers: {
        //                 'content-type': 'application/json',
        //             },
        //         }
        //     )
        // }
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