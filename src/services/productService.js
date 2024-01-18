import {faker} from '@faker-js/faker'

 faker.location = 'es'

const errorDictionary = {
    1: 'Error al generar el producto. Campos inválidos.',
    2: 'Error al agregar el producto al carrito. Producto no válido.',
    
  };
  
  function customizeError(code) {
    return {
      success: false,
      error: {
        code,
        message: errorDictionary[code] || 'Error desconocido.'
      }
    };
  }

function generateMockProduct() {
  return {
    _id: faker.commerce.isbn(),
    name: faker.commerce.productName(),
    price: faker.commerce.price ({ min: 1, max: 100 }),
    category: faker.commerce.department(),
    quantity: faker.commerce.number({ min: 1, max: 50 })
  };
}

function generateMockProducts(count) {
  return Array.from({ length: count }, generateMockProduct);
}

function createProduct() {
    const isValidProduct = Math.random() > 0.5; 
  
    if (!isValidProduct) {
      return customizeError(1); 
    }
  
    const product = generateMockProduct();
    return {
      success: true,
      product
    };
  }

  export default {
  generateMockProducts,
  createProduct
}