interface Product {
  id: number;
  name: string;
  ScientificName: string;
  Origin: string;
  beetletype: string;
  generations: string;
  beetleSize: string;
  parent:string;
  price: string;
  NumberGroups: string;
  imageUrl: string[];
  note:string;
}

export const Lifeproducts: Product[] = [
  {
    id: 1,
    name: "麋鹿叉角(K亞種)",
    ScientificName: "Hexarthrius forsteri kiyotamii",
    Origin: "緬甸-實皆",
    beetletype: "成對成蟲",
    generations: "CBF3",
    beetleSize: "73*40",
    parent:"",
    price: "1000",
    NumberGroups: "1",
    imageUrl: ["/product1/product1_0.jpg", "/product1/product1_1.jpg","/product1/product1_2.jpg"],
    note:"贈二手日規滑蓋盒"
  },
  {
    id: 1,
    name: "安達佑實(尼泊爾)",
    ScientificName: "Dorcus antaeus antaeus",
    Origin: "尼泊爾-科當",
    beetletype: "成對成蟲",
    generations: "CB",
    beetleSize: "82*48",
    parent:"",
    price: "1000",
    NumberGroups: "1",
    imageUrl: ["/product2/product2_0.jpg","/product2/product2_1.jpg"],
    note:"公左牙磨損 缺右前鉤 母蟲+300"
  },
  {
    id: 1,
    name: "安達佑實(北印)",
    ScientificName: "Dorcus antaeus antaeus",
    Origin: "北印-剛托克",
    beetletype: "成對成蟲",
    generations: "CB",
    beetleSize: "74*all size",
    parent:"",
    price: "600",
    NumberGroups: "1",
    imageUrl: ["/product3.jpg"],
    note:""
  },
  {
    id: 1,
    name: "所羅門鋸(M亞種)",
    ScientificName: "Prosopocoilus hasterti moinieri",
    Origin: "所羅門群島",
    beetletype: "成對成蟲",
    generations: "CB",
    beetleSize: "55*all size",
    parent:"",
    price: "500",
    NumberGroups: "1",
    imageUrl: ["/product4.jpg"],
    note:""
  },
  {
    id: 2,
    name: "高砂鋸",
    ScientificName: "Prosopocoilus motschulskii",
    Origin: "彰化-和美",
    beetletype: "成對成蟲",
    generations: "WF1",
    beetleSize: "56*36",
    parent:"",
    price: "500",
    NumberGroups: "1",
    imageUrl: ["/product4.jpg"],
    note:""
  },
  {
    id: 2,
    name: "台灣鬼豔",
    ScientificName: "Odontolabis siva parryi",
    Origin: "宜蘭-頭城",
    beetletype: "成對成蟲",
    generations: "WF1",
    beetleSize: "83*53",
    parent: "90*53",
    price: "700",
    NumberGroups: "N",
    imageUrl: ["/product4.jpg"],
    note:""
  },

  {
    id: 3,
    name: "安達佑實(尼泊爾)",
    ScientificName: "Dorcus antaeus antaeus",
    Origin: "尼泊爾-科當",
    beetletype: "幼蟲",
    generations: "CB",
    beetleSize: "L3",
    parent:"",
    price: "400/1隻",
    NumberGroups: "N",
    imageUrl: ["/product5.jpg"],
    note:""
  },

  {
    id: 4,
    name: "獨角仙",
    ScientificName: "Allomyrina dichotoma",
    Origin: "桃園-復興",
    beetletype: "幼蟲",
    generations: "CBF1",
    beetleSize: "L1~L2",
    parent: "83*49",
    price: "200/5隻",
    NumberGroups: "10",
    imageUrl: ["/product5.jpg"],
    note:""
  },
  {
    id: 4,
    name: "台灣深山",
    ScientificName: "Lucanus formosanus",
    Origin: "桃園-復興",
    beetletype: "幼蟲",
    generations: "WF1",
    beetleSize: "L1",
    parent: "",
    price: " 100/隻 500/6隻",
    NumberGroups: "N",
    imageUrl: ["/product5.jpg"],
    note:"鍬顏一號+育成土 穩定進食中"
  },
  {
    id: 4,
    name: "深山扁",
    ScientificName: "Dorcus kyanrauensis",
    Origin: "",
    beetletype: "",
    generations: "",
    beetleSize: "",
    parent: "",
    price: "",
    NumberGroups: "",
    imageUrl: ["/product5.jpg"],
    note:"繁殖中"
  },
  {
    id: 4,
    name: "雞冠細身",
    ScientificName: "Cyclommatus mniszechi",
    Origin: "",
    beetletype: "",
    generations: "",
    beetleSize: "",
    parent: "",
    price: "",
    NumberGroups: "",
    imageUrl: ["/product5.jpg"],
    note:"繁殖中"
  },
  {
    id: 4,
    name: "台灣鬼豔",
    ScientificName: "Odontolabis siva parryi",
    Origin: "",
    beetletype: "",
    generations: "",
    beetleSize: "",
    parent: "",
    price: "",
    NumberGroups: "",
    imageUrl: ["/product5.jpg"],
    note:"繁殖中"
  },
  {
    id: 5,
    name: "民達那俄扁",
    ScientificName: "",
    Origin: "",
    beetletype: "",
    generations: "",
    beetleSize: "94",
    parent: "",
    price: "800",
    NumberGroups: "",
    imageUrl: ["/product4.jpg"],
    note:"完整有修復"
  },
  {
    id: 5,
    name: "雲頂鹿角",
    ScientificName: "",
    Origin: "",
    beetletype: "",
    generations: "",
    beetleSize: "66",
    parent: "",
    price: "500",
    NumberGroups: "",
    imageUrl: ["/product4.jpg"],
    note:"完整無修復"
  },
  {
    id: 5,
    name: "犀牛叉角",
    ScientificName: "",
    Origin: "",
    beetletype: "",
    generations: "",
    beetleSize: "72",
    parent: "",
    price: "300",
    NumberGroups: "",
    imageUrl: ["/product4.jpg"],
    note:"完整無修復"
  },
  {
    id: 5,
    name: "蘇門寬扁",
    ScientificName: "Dorcus alcides",
    Origin: "蘇門答臘-名古魯",
    beetletype: "已展乾貨",
    generations: "WD",
    beetleSize: "93",
    parent: "",
    price: "1200",
    NumberGroups: "1",
    imageUrl: ["/product4.jpg"],
    note:"完整無修復/胸寬36+"
  },

];
