const expect = require('chai').expect;
const request = require('supertest');


const app = require('../../app');
describe('Customers route', () => {
    
    it('should download all customers', (done) => {
        request(app)
        .get('/api/customers')
        .expect(200, done);
    });

    it('should fetch a single customer', (done) =>{
        request(app)
        .get('/api/customers/1')
        .expect(200, done);
    });
    it('should return a 404 when fetching a nonexistent customer')
    it('should add a customer',(done) => {
        request(app)
        .post('/api/customers/1')
        .send({ firstName: 'Big Bad John', lastName: 'Walker'})
        .expect(201, done);
    })
    it('should update a customer')
    it('should delete a customer')

});