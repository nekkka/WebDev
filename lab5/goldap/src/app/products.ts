export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  link: string;
  image: string;
  images: string[];
  rating: number;
  categoryName: string;
  likes: number
}

export const products = [
  {
    id: 1,
    name: 'BOUCHERON FÈVE TONKA DE CANAIM',
    price: 95715,
    description: 'Глубокий, насыщенный и теплый аромат переносит в удивительный и впечатляющий национальный парк Канайма в Венесуэле. Этот огромный парк с горами, водопадами и пышной зеленью производит незабываемое впечатление.',
    link: 'https://goldapple.kz/19000210784-feve-tonka-de-canaima',
    image: 'https://cdn1.ozone.ru/s3/multimedia-o/6752150160.jpg',
    images: ['https://cdn1.ozone.ru/s3/multimedia-o/6752150160.jpg', 'http://www.muse-about-city.fr/wp-content/uploads/2019/08/boucheron-orange-de-bahia-et-patchouli-dangkor-09.jpg', 'https://static.insales-cdn.com/images/products/1/3977/451899273/id20367_pic1.jpg'],
    rating: 5,
    categoryName: 'Pafumes',
    likes: 0
  },
  {
    id: 2,
    name: 'MANCERA holidays',
    price: 95665,
    description: 'Что может быть лучше чем путешествие на Кипр где калабрийский искрящийся бергамот в дуэте с танцующим кокосом приобретают прохладу морского бриза таитянской гардении',
    link: 'https://goldapple.kz/26774200001-holidays',
    image: 'https://pcdn.goldapple.ru/p/p/26774200001/web/696d67416464348dad718786a9870fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/26774200001/web/696d67416464348dad718786a9870fullhd.webp','https://cdn.shopify.com/s/files/1/0554/9382/0450/products/311985-1.jpg?v=1645626839', 'https://us-i.makeupstore.com/k/km/kmzxee0a1lav.'],
    rating: 4,
    categoryName: 'Pafumes',
    likes: 0
  },
  {
    id: 3,
    name: 'VALENTINO born in roma intense uomo',
    price: 60980,
    description: 'Born In Roma Intense - это соблазнительный амбровый фужер, в котором лавандин и ванильный настой создают гипнотическую ауру, прославляющую великолепных личностей.',
    link: 'https://goldapple.kz/19000177360-born-in-roma-intense-uomo',
    image: 'https://pcdn.goldapple.ru/p/p/19000177360/web/696d67416464338dc35619bd9989cfullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000177360/web/696d67416464338dc35619bd9989cfullhd.webp', 'https://i.makeup.kz/p/pl/plklagnyzzio.png', 'https://www.scentstore.com/wp-content/uploads/2023/03/VALENTINO_BORN_IN_ROMA_INTENSE_DONNA_VISUAL.jpg'],
    rating : 3,
    categoryName: 'Pafumes',
    likes: 0
  },
  {
    id: 4,
    name: 'MONTALE oudyssee',
    price: 92000,
    description: 'Отправляйтесь в мифическое путешествие, где черный и розовый перец наполнит ваши паруса. На спокойных волнах морской бриз подтолкнет вас к открытому морю Сицилии, где вас ждут бергамот, лимон и лаванда а дальше -на восток',
    link: 'https://goldapple.kz/19000177397',
    image: 'https://pcdn.goldapple.ru/p/p/19000177397/web/696d674d61696e8dbdc6f579e9584fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000177397/web/696d674d61696e8dbdc6f579e9584fullhd.webp', 'https://cdn.aroma-butik.ru/images/categories/goods_full/1693423185_60011_1693423185_MONTALE_Oudyssee_.jpg', 'https://avatars.mds.yandex.net/i?id=5649e5cb638f91d50913b9020ac6088a_l-10702804-images-thumbs&n=13'],
    rating: 4,
    categoryName: 'Pafumes',
    likes: 0
  },
  {
    id: 5,
    name: 'STATE OF MIND open mind',
    price: 549372,
    description: 'Вспышка зеленых нот лайма и хиноки разжигает интерес уже с первых секунд знакомства',
    link: 'https://goldapple.kz/19000013258-open-mind',
    image: 'https://pcdn.goldapple.ru/p/p/19000013258/web/696d67416464338dc30a41cc0bed5fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000013258/web/696d67416464338dc30a41cc0bed5fullhd.webp', 'https://fimgs.net/mdimg/secundar/o.50092.jpg', 'https://www.reverparfum.com/upload/medialibrary/18f/18fba5c0e574a143b954536af2a4b083.png'],
    rating: 4,
    categoryName: 'Pafumes',
    likes: 0
  },
  {
    id: 6,
    name: 'STATE OF MIND french gallantry',
    price: 113000,
    description: 'Крепкую свежесть базилика и томатов дополняют ноты лавра, орегано и тимьяна.',
    link: 'https://goldapple.kz/83670100011-french-gallantry',
    image: 'https://pcdn.goldapple.ru/p/p/83670100011/web/696d67416464338dc32bb02f56571fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/83670100011/web/696d67416464338dc32bb02f56571fullhd.webp', 'https://abatonbros.us/wp-content/uploads/2020/06/french-gallantry.jpg', 'https://fimgs.net/himg/o.81086.jpg'],
    rating: 5,
    categoryName: 'Pafumes',
    likes: 0
  },
  {
    id: 7,
    name: 'NAJ OLEARI lasting embrace',
    price: 15000,
    description: 'Стойкая жидкая помада для губ с матовым финишем.',
    link: 'https://goldapple.kz/19000137708-lasting-embrace',
    image: 'https://pcdn.goldapple.ru/p/p/19000137708/web/696d6167654d6f64656c8db669ef8eb9e20fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000137708/web/696d6167654d6f64656c8db669ef8eb9e20fullhd.webp', 'https://pcdn.goldapple.ru/p/p/19000137673/imgmain.jpg', 'https://beauty.thewom.it/content/uploads/sites/3/2022/01/Naj-Oleari-VIP-BEAUTY-BOX-MINI-1000x750.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 8,
    name: 'EVELINE variete gel',
    price: 5499,
    description: 'Идеальный карандаш для губ из серии Variété позволит вам наслаждаться идеальным макияжем.',
    link: 'https://goldapple.kz/19000199765-variete-gel',
    image: 'https://pcdn.goldapple.ru/p/p/19000199765/web/696d674d61696e8db9fea54e7aaedfullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000199765/web/696d674d61696e8db9fea54e7aaedfullhd.webp', 'https://sun9-6.userapi.com/impg/UEMYzTpHzKv33G4Bc1t-Dqxv0BzsT4XRRK2dFg/l5Zcvjqx7H0.jpg?size=1280x960&quality=96&sign=00b953918947f1c702a8d9fa5ceef444&c_uniq_tag=zshTt8Fo7ENta0sRoTADxWHM9Xxp_UNZl64bMsU9puE&type=album', 
  'https://irecommend.ru/sites/default/files/imagecache/copyright1/user-images/1677245/KvMscXbs9A3scgDjTbDIA.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 9,
    name: 'NAJ OLEARI forever matte',
    price: 14499,
    description: 'Невероятно комфортная, бархатистая текстура помады для губ оставляет матовый финиш без сухости.',
    link: 'https://goldapple.kz/19000137697-forever-matte',
    image: 'https://pcdn.goldapple.ru/p/p/19000137697/web/696d6167654d6f64656c8db70ba3086a167fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000137697/web/696d6167654d6f64656c8db70ba3086a167fullhd.webp', 'https://d22lm4ubcq7uiw.cloudfront.net/catalog/product/cache/d508b3271d9238d8c9edd6147da9cc6e/8/2/82c66ec16217e577e8a79293dcd6362e06e0ee36c5435ba58b178ff07862e62f.jpeg', 'https://www.jasmin.rs/media/posebne-strane/3_ruzevi_mob.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 10,
    name: '3INA the longwear lipstick',
    price: 9793,
    description: 'Наполните свой день цветом! Жидкая помада 3INA с впечатляющей стойкостью и безупречным матовым финишем дарит губам насыщенный оттенок.',
    link: 'https://goldapple.kz/19000112336-the-longwear-lipstick',
    image: 'https://pcdn.goldapple.ru/p/p/19000112336/web/696d6167654d6f64656c8dae1f77dc8b58ffullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000112336/web/696d6167654d6f64656c8dae1f77dc8b58ffullhd.webp', 'https://cdn1.ozone.ru/s3/multimedia-m/6549242194.jpg', 'https://cdn1.ozone.ru/s3/multimedia-s/6549242164.jpg'],
    rating: 5,
    categoryName: 'Lipsticks',
    likes: 0
  },
  {
    id: 11,
    name: 'ANASTASIA BEVERLY HILLS cosmos eye shadow palette',
    price: 21993,
    description: 'Палетка ANASTASIA BEVERLY HILLS, на создание которой вдохновили завораживающая красота галактик и сияние звезд, включает нейтральные и яркие тени для век с разными видами финиша.',
    link: 'https://goldapple.kz/19000191233-cosmos-eye-shadow-palette',
    image: 'https://pcdn.goldapple.ru/p/p/19000191233/web/696d67416464338dc3783f211e7b2fullhd.webp',
    images: ['https://pcdn.goldapple.ru/p/p/19000191233/web/696d67416464338dc3783f211e7b2fullhd.webp', 'https://static.thcdn.com/productimg/960/960/14546667-1995058134142666.jpg', 'https://www.spacenk.com/on/demandware.static/-/Sites-spacenkmastercatalog/default/dw2db78b8e/products/ANASTASIA/UK200034667_ANASTASIA_2.jpg'],
    rating: 3,
    categoryName: 'Eye Shadows',
    likes: 0
  },
];

