// tests/products.test.js
const app = require('../app');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('Products Router', () => {
  it('Debería obtener una lista de productos', (done) => {
    chai
      .request(app)
      .get('/api/products')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('Debería obtener un producto específico por su ID', (done) => {
    const productId = 'tu-id-de-producto'; // Reemplaza 'tu-id-de-producto' con un ID válido de tu base de datos
    chai
      .request(app)
      .get(`/api/products/${productId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('id', productId);
        done();
      });
  });

  // Agrega más pruebas para otros escenarios y rutas del Router de products
});

// tests/carts.test.js
describe('Carts Router', () => {
  it('Debería obtener una lista de carritos de compra', (done) => {
    chai
      .request(app)
      .get('/api/carts')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Agrega más pruebas para otros escenarios y rutas del Router de carts
});

// tests/sessions.test.js
describe('Sessions Router', () => {
  it('Debería autenticar a un usuario y devolver un token válido', (done) => {
    const credentials = {
      username: 'usuario',
      password: 'contraseña',
    };

    chai
      .request(app)
      .post('/api/sessions')
      .send(credentials)
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.have.property('token');
        done();
      });
  });

  // Agrega más pruebas para otros escenarios y rutas del Router de sessions
});
