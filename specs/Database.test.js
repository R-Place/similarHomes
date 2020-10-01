const db = require('../database/index.js');

describe('Correctly Recieve listings from the database', () => {
  it('Recieve 15 documents', (done) => {
    db.getAllHomes((err, results) => {
      if (err) {
        return err;
      }
      expect(results.length).toBe(15);
      done();
    });
  });
});
