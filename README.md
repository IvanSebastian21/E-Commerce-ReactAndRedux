#Aplicacion Web Frontend Developer: Creada con React & Redux
[_Enlace_](https://www.linkedin.com/feed/update/urn:li:activity:6861753312023248896/)
## ¿En que consiste la App?  
Desarrollo de una SPA (Single Page Application) utilizando React para el frontEnd y Redux como state management. Todos los componentes fueron desarrollados con CSS empleando Semantic UI como framework para crear el 
diseño de interfaces de manera responsive utilizando HTML/CSS legible. La app consume datos de una api (`https://fakestoreapi.com/products/`) a través de una petición Axios

### Requerimientos: 
Una vez descargado el proyecto, correr por consola `npm install`, luego `npm start`  


## Project Screens
![Home](https://github.com/IvanSebastian21/E-Commerce-ReactAndRedux/blob/main/mi-primer-eCommerce/imgPublic/Captura%20de%20pantalla%20(206).png)
![Home](https://github.com/IvanSebastian21/E-Commerce-ReactAndRedux/blob/main/mi-primer-eCommerce/imgPublic/Captura%20de%20pantalla%20(207).png)
![Home](https://github.com/IvanSebastian21/E-Commerce-ReactAndRedux/blob/main/mi-primer-eCommerce/imgPublic/Captura%20de%20pantalla%20(208).png)
![Home](https://github.com/IvanSebastian21/E-Commerce-ReactAndRedux/blob/main/mi-primer-eCommerce/imgPublic/Captura%20de%20pantalla%20(161).png)   


### Dependencias:
```JavaScript
    "axios": "^0.24.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-redux": "^7.2.6",
    "react-router-dom": "^5.3.0",
    "react-scripts": "4.0.3",
    "redux": "^4.1.2",
    "web-vitals": "^1.1.2"
  }
```
### Request
```JavaScript
    const fetchProductsDetail = async() => {
        const response = await axios
        .get(`https://fakestoreapi.com/products/${productId}`)
        .catch((err) => {
        });
        dispatch(selectedProduct(response.data));
    }
```  

<h3><strong> Lenguajes </h3>
    <h2>
    Javascript <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png"/>  |
    html5 <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/600px-HTML5_Badge.svg.png"/> |
    css3 <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/121-css3-512.png"/> |
    bootstrap5 <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1024px-Bootstrap_logo.svg.png"/> |
    handlebarsJS <img <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://i.morioh.com/0026584323.png"/> | 
    <h2>
         
  
<h3> Contacto: <h3> <img align='right' src="https://user-images.githubusercontent.com/85074756/140621760-a092acaa-bb99-41b2-bc4f-b2d30283fbf2.jpeg" width="180" height="195">
    <a href='https://www.linkedin.com/in/ivan-s-nu%C3%B1ez/' target= "_blank">
     <img style='width: 3rem; height: 3rem; margin-top: 1rem' src="https://res.cloudinary.com/druj3xeao/image/upload/v1635266956/readme/linkedin-logo-png-1825_cjdift.png">
    </a><br>
 <h3> Puedes escribirme a: ivanseba.nez20@gmail.com <h3>
 <br><br>
Saludos!
