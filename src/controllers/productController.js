import productService from "../services/productService.js";

function getMockProducts(req, res) {
    const count = 100;
    const mockProducts = productService.createProduct(count);
  
    if (mockProducts.success) {
      res.json(mockProducts.product);
    } else {
      res.status(400).json(mockProducts.error);
    }
  }
  
  export default getMockProducts