import {register,login,getCategorie,getProducts,CategoriesProductsName,getProductById,MOodifierStock} from "./controller.js"


const routes = (app) => {
  app.route('/api/signup').post(register);
  app.route('/api/signin').post(login);
  app.route('/categories').get(getCategorie);
  app.route('/products').get(getProducts);
  app.route('/categoriesProductsName').get(CategoriesProductsName);
  app.route("/product/:id").get(getProductById);
  app.route("/ModifierStock").post(MOodifierStock);

}

export default routes

