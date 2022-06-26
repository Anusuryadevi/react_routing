export function isValidEmail(email) {
    if (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) {
        return true
    }
    else {
        return false
    }
}

