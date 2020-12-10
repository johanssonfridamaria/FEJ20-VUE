export default {
  state: {
    product: null,
    products: []
  },
  getters: {
    products: state => state.products,
    product: state => state.product
  },
  mutations: {
    SET_PRODUCTS: (state, _products) => {
      state.products = _products
    },
    GET_PRODUCT_BY_ID: (state, _id) => {
      state.product = state.products.filter(p => p.id == _id)[0]
    }
  },
  actions: {
    getProducts: ({commit}) => {
      // const res = await axios.get('https:api/products')
      const data = [
        { id: 1, name: 'Sony TV-675', short: 'Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores harum delectus voluptas tenetur rerum! Hic rem dignissimos quia natus quas voluptatem facilis quod maiores!', price: 5755, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/14.jpg' },
        { id: 2, name: 'Samsung CT-567', short: 'Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores voluptatem facilis quod maiores!', price: 3770, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg' },
        { id: 3, name: 'Dell V-964i', short: 'Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores harum delectus voluptas tenetur rerum! Hic rem dignissimos quia natus quas voluptatem facilis quod maiores!', price: 4599, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg' },
        { id: 4, name: 'Huewei G40', short: 'Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos voluptatem fugiat quam officiis, asperiores harum delectus. dignissimos quia natus quas voluptatem facilis quod maiores!', price: 8998, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg' },
        { id: 5, name: 'Philips Headphones', short: 'Lorem, ipsum dolor sit ametdolor  dolor sit amet sit amet consectetur adipisicing elit. Id fugit', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id fugit laboriosam voluptatem nihil voluptatibus nostrum expedita temporibus debitis vero asperiores rerum et, minima aliquam nobis! Assumenda ipsam vero aliquam asperiores quidem facilis doloremque laborum temporibus repellat voluptates? Expedita sed ratione adipisci dignissimos praesentium cupiditate commodi error molestias aspernatur reiciendis, eius totam consequuntur necessitatibus, dolorum rem odio, magni accusamus libero sapiente fugit! Assumenda, suscipit enim unde natus error fugit. Facilis quia, error iusto tempore repudiandae necessitatibus sequi iste ab aut eos  harum delectus voluptas tenetur rerum! Hic rem dignissimos quia natus quas voluptatem facilis quod maiores!', price: 1200, image: 'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/10.jpg' }
      ]
      commit('SET_PRODUCTS', data)
    },
    getProductById: ({commit}, id) => {
        // const res = await axios.get('https:api/products/' + id)
        commit('GET_PRODUCT_BY_ID', id)
    }
  }
}