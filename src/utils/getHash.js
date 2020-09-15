const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';
    //corta la url y muestra a partir del primero elemento


export default getHash;
