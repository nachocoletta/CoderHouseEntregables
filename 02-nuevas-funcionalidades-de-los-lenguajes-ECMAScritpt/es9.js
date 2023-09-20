(function (run) {
  if (!run) return;

  let userData = {
    firstName: 'Juan',
    lastName: 'Perez',
    age: 32,
    email: 'jp@mail.com',
    password: '123456',
    address: 'Calle 123',
    createAt: new Date(),
    birthday: new Date(1985, 5, 10),
  };

  function getFullname(userData) {
    let { firstName, lastName, ...rest } = userData;
    console.log('rest', rest);
    return `${firstName} ${lastName}`;
  }

  console.log('getFullname', getFullname(userData));

})(false);

(function (run) {
  if (!run) return;

  let dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  let [a, b, c, ...rest] = dataset;

  console.log('a', a);
  console.log('b', b);
  console.log('c', c);
  console.log('rest', rest);
  
})(true);
