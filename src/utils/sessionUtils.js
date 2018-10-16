export const saveSession = (sessionId, expiresAt) => {
    sessionStorage.setItem('sessionId', sessionId);
    sessionStorage.setItem('expiresAt', expiresAt);
}

export const deleteSession = () => {
    sessionStorage.removeItem('sessionId');
    sessionStorage.removeItem('expiresAt');
}

export const isExpiredSession = () => 
    Date.parse(sessionStorage.getItem('expiresAt')) < new Date();