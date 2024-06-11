import { Product } from "../types";

export const products:Product[] = [
  { id: 1, name: 'Espresso', image: 'https://t4.ftcdn.net/jpg/01/16/61/93/360_F_116619399_YA611bKNOW35ffK0OiyuaOcjAgXgKBui.jpg', price: 40 },
  { id: 2, name: 'Cappuccino', image: 'https://t3.ftcdn.net/jpg/01/59/18/36/360_F_159183621_0YTKAAqAA7GI7DlCBfYJ2wfKbC6Zf30V.jpg', price: 40,outOfStock:true },
  { id: 3, name: 'Latte', image: 'https://somedayilllearn.com/wp-content/uploads/2020/05/cup-of-black-coffee-scaled-720x540.jpeg', price: 40 },
  { id: 4, name: 'Americano', image: 'https://media.istockphoto.com/id/1349239413/photo/shot-of-coffee-beans-and-a-cup-of-black-coffee-on-a-wooden-table.jpg?b=1&s=612x612&w=0&k=20&c=YaXq8wWShhtiRnEVJvPTd_0h4eeZ1CFEYi0BszPg74A=', price: 35 },
  { id: 5, name: 'Mocha', image: 'https://www.allrecipes.com/thmb/Hqro0FNdnDEwDjrEoxhMfKdWfOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/21667-easy-iced-coffee-ddmfs-4x3-0093-7becf3932bd64ed7b594d46c02d0889f.jpg', price: 45 },
  { id: 6, name: 'Macchiato', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoR6rwN0yMTnUye3Z375KCDaM52xnv-HoQDw&s', price: 25 },
  { id: 7, name: 'Flat White', image: 'https://www.recimag.com/wp-content/uploads/2022/07/Screenshot-from-2022-07-19-22-46-55-800x743.png', price: 20 },
  { id: 8, name: 'Caramel Latte', image: 'https://images.immediate.co.uk/production/volatile/sites/30/2022/04/Iced-Caramel-Macchiato-f4a10f9.jpg?quality=90&resize=556,505', price: 30 },
  { id: 9, name: 'Cold Brew', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI2sOkbTwQT7mteFRjLWUvI_06xQPO0GBcwg&s', price: 60 },
];

