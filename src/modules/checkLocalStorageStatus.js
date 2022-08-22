const checkLocalStorageStatus = () => localStorage.getItem('data') == null;

export default checkLocalStorageStatus;