async function postMessage(name, email, message) {
    return await fetch('api/contactFormHandler', {
        body: JSON.stringify({
            name: name,
            email: email,
            message: message,
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'POST'
    });
}