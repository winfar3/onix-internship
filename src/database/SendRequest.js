
export default function SendRequest(method, url, body = null) {
  return new Promise((resolve, reject) => { // resolve == успех, reject == ошибка
    const xhr = new XMLHttpRequest(); // создание запроса к API
    
    xhr.open(method, url); // обращение к серверу
    xhr.responseType = "json"; // парсим полученный данные в json
    xhr.setRequestHeader('Content-type', 'application/json'); // преобразуем получаемые данные в json

    xhr.onload = () => {
      if (xhr.status >= 400) {
        reject(xhr.response); // в случае ошибки
      } else {
        resolve(xhr.response); // в случае успеха
        resolve(xhr.status);
      }
    };
    xhr.onerror = () => {
      // console.log(xhr.response); // выводит в случае ошибки
    };

    xhr.send(JSON.stringify(body)); // отправляем данные на сайт преобразуя в строку
  });
}
