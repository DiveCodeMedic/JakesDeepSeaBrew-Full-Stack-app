const expect = require('chai').expect;
const request = require('supertest');
const db = require('../../models');


const app = require('../../app');
describe('Customers route', () => {

    it('should download all customers', (done) => {
        request(app)
            .get('/api/customers')
            .expect(200, done);
    });

    it('should fetch a single customer', (done) => {
        request(app)
            .get('/api/customers/1')
            .expect(200, done);
    });
    it('should return a 404 when fetching a nonexistent customer', (done) => {
        request(app)
            .get('/api/customers/99999999999')
            .expect(404, done);
    });
    it('should add a customer', (done) => {
        request(app)
            .post('/api/customers')
            .send({firstName: 'Big Bad John', lastName: 'Walker'})
            .expect(201, done);
    });
        it('should update a customer', (done) => {
       const newCustomer = new db.Customer({
           firstName: 'Iron',
           lastName: 'Mike'
       });

       newCustomer
           .save()
           .then(customer => {
               request(app)
                   .put('/api/customers/' + customer.id)
                   .send({ firstName: 'Autavia' })
                   .expect(204)
                   .then(() => {
                       db
                           .Customer
                           .findById(customer.id)
                           .then(customer => {
                               expect(customer.firstName).to.equal('Autavia');

                               done();
                       });
                   });
               });
        });

it('should delete a customer', () => {
const newCustomer = new db.Customer({
    firstName: 'Money',
    lastName: 'Mayweather'
});

newCustomer.save().then(customer => {
    request(app)
        .delete('/api/customers' + customer.id)
        .expect(200);
});
});

});
