export async function y2kParser (toFrom, message) {
    const body = {
        translate: toFrom,
        message: message
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': "application/json",
        },
        body: JSON.stringify(body),
    }

    const hostname = window.location.hostname;

    const apiURL = `https://${hostname}/api/multitap-translator`

    return await fetch(apiURL, options)
}