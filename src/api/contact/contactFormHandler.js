import { connect } from '@planetscale/database'

const config = {
    url: process.env['DATABASE_URL']
}

const conn = connect(config)
export default async function contactFormHandler(request, response) {

    const {
        body: {
            name,
            email,
            message
        }, method
    } = request

    switch (method) {
        case 'POST': {
            const [rows, fields] = await conn.execute(
                `INSERT INTO jeremy_contacts (name, email, message) VALUES ('${name}', '${email}', '${message}')`
            );
            response.statusCode = 201;
            response.json({status: "Successfully deployed", name, email});
            break;
        }
        case 'GET': {
            try {
                const [getRows, _] = await conn.execute(`SELECT * FROM jeremy_contacts`);
                response.statusCode = 200;
                response.json(getRows);
            } catch (e) {
                const error = new Error('An error occurred while connecting to the database');
                error.status = 500;
                error.info = {message: 'An error occurred while connecting to the database'};
                throw error;
            }
            break;
    }
        default: {
            response.header('Allow', ['GET', 'PUT']);
            response.status(405).end(`Method ${method} Not Allowed`);
        }
    }
}