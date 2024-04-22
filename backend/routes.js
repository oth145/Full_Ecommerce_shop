import {register,login,getCategorie,getProducts,CategoriesProductsName} from "./controller.js"


const routes = (app) => {
  app.route('/api/signup').post(register);
  app.route('/api/signin').post(login);
  app.route('/categories').get(getCategorie);
  app.route('/products').get(getProducts);
  app.route('/categoriesProductsName').get(CategoriesProductsName);
}

export default routes

