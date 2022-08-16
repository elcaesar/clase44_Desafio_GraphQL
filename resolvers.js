const Product = require('./models/products');

const resolvers = {
  Query: {

    getAllProducts: async () => {
      const products = await Product.find();
      return products;
    },

    async getProduct(_, {id}){
      const product = await Product.findById(id)
      return product;
    }
  },

  Mutation: {
    
    createProduct: async (_, args) => {
      const { prodName, prodPrice, prodStock, prodImage } = args.product;
      const newProduct = new Product({ prodName, prodPrice, prodStock, prodImage });
      await newProduct.save();
      return newProduct;
    },

    async deleteProduct(_,{id}){
      await Product.findByIdAndDelete(id)
      return "Producto Eliminado"
    },

    async updateProduct(_,{product, id}){
      const prodUpdated = await Product.findByIdAndUpdate(id, {$set: product}, {new: true});
      return prodUpdated;
      
    }
  }
}

module.exports = { resolvers } 