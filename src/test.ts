import test from "ava";
import { Product, User } from "./index";

test("Testeo la clase Product", (t) => {
  // test Product class
  const product = new Product("Product 1", 10);
  t.is(product.name, "Product 1");
  t.is(product.price, 10);
});

  // test 2
  test('user should have the correct name ',t =>{

    const user = new User('jhon dope');
    t.is(user.name,'jhon dope');
  });

  // test 3
  test('user should have  add  a product  toproduct list ',t =>{
      const user = new User('jane dope');
      const product = new Product('laptop',1000);

      user.addProduct(product);

      t.is(user.products.length,1);
      t.is(user.products[0].name,'laptop');
      t.is(user.products[0].price,1000);
  });

