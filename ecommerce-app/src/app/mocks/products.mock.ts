import { IProduct } from '../models/products.models';

export const mockProducts: IProduct[] = [
  {
    id: 1,
    title: 'Fjallraven Backpack',
    price: 109.95,
    image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
    stock: 20,
  },
  {
    id: 2,
    title: 'Mens Casual Jacket',
    price: 55.99,
    image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    stock: 15,
  },
  {
    id: 3,
    title: 'Mens Cotton Jacket',
    price: 79.99,
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    stock: 10,
  },
  {
    id: 4,
    title: 'Mens Slim Fit T-Shirt',
    price: 22.3,
    image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
  },
];
