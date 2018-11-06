export const setSession = (sessionId, expiresAt) => {
    sessionStorage.setItem('sessionId', sessionId);
    sessionStorage.setItem('expiresAt', expiresAt);
}

export const getSessionId = () => sessionStorage.getItem('sessionId');

export const getExpireDate = () => sessionStorage.getItem('expiresAt');

export const setAccountId = (accountId) => {
    sessionStorage.setItem('accountId', accountId);
}

export const getAccountId = () => sessionStorage.getItem('accountId');

export const removeSession = () => {
    sessionStorage.removeItem('sessionId');
    sessionStorage.removeItem('expiresAt');
    sessionStorage.removeItem('accountId');
}

export const isExpiredSession = () => 
    Date.parse(getExpireDate()) < new Date();