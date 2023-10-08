export function isAuthenticated() {
    const token = window.localStorage.getItem('token')

    return !!token;
}
