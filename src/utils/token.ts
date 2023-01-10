

export const setToken = ( token: string )=>{

    localStorage.setItem('token-app', token);
}

export const getToken = ()=>{
    return JSON.parse(localStorage.getItem('token-app') || '');
}