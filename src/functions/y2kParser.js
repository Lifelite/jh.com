export async function y2kParser (translate, message) {
    const body = {
        translate,
        message,
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

    await fetch(apiURL, options).then((response) => {
        return response.json()
    })
}