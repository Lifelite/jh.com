export async function postMessage(name, email, message) {
    const body = {
        name: name,
        email: email,
        message: message,
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body),
    }

    const hostname = window.location.hostname;

    const apiURL = `https://${hostname}/api/contact-submit`

    await fetch(apiURL, options)
        .then(response => response.json())
        .then(data=> {
            console.log(data)
            return data;
        })
}