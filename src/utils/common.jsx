export const handleFormatCurrency = (val) => {
  let currency = `${val}`;
  if(currency.includes(',')){
    return "Rp " + currency;
  }else if(currency.includes('-')){
    let formatted = "Rp " + currency.replace(/\D/g, '-').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formatted;
  }else{
    let formatted = "Rp " + currency.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return formatted;
  }
}

export function getToken(){
  return localStorage.getItem("token");
}

export function clearToken(){
  return localStorage.clear();
}