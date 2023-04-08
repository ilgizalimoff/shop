export const baseUrl = 'https://my-json-server.typicode.com/ilgizalimoff/products-server/products'
export const homePage = 'https://ilgizalimoff.github.io/shop'

export const options = [
    { value: 'name', name: 'Название ↓' },
    { value: 'nametop', name: 'Название ↑' },
    { value: 'price', name: 'Цена ↓' },
    { value: 'pricetop', name: 'Цена ↑' }
]

export const typeCareItems = [
    'Все',
    'Уход за телом',
    'Уход за руками',
    'Уход за ногами',
    'Уход за лицом',
    'Уход за волосами',
    'Средства для загара',
    'Средства для бритья',
    'Подарочные наборы',
    'Гигиеническая продукция',
    'Гигиена полости рта',
    'Бумажная продукция',
]

export const localProducts =
[
    {
        "id": 1,
        "image_url": "/img/aos.png",
        "name": "AOS",
        "size_type": "мл",
        "size": "450",
        "barcode": "460404",
        "producer": "Нэфис",
        "brand": "AOS",
        "description": "AOS средство для мытья посуды Crystal",
        "price": "18,76",
        "type_care": [
            {
                "title": "Гигиеническая продукция",
                "number": 1
            }
        ]
    },
    {
        "id": 2,
        "image_url": "/img/ariel.png",
        "name": "ARIEL",
        "size_type": "г",
        "size": "15X28.8",
        "barcode": "460404",
        "producer": "Нэфис",
        "brand": "AOS",
        "description": " Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
        "price": "384,76",
        "type_care": [
            {
                "title": "Гигиеническая продукция",
                "number": 1
            }
        ]
    },
    {
        "id": 3,
        "image_url": "/img/bimax.png",
        "name": "BIMAX ",
        "size_type": "г",
        "size": "1500",
        "barcode": "460404",
        "producer": "Нэфис",
        "brand": "AOS",
        "description": "Порошок стиральный Автомат 100 пятен COMPACT",
        "price": "48,76",
        "type_care": [
            {
                "title": "Гигиеническая продукция",
                "number": 1
            }
        ]
    },
    {
        "id": 4,
        "image_url": "/img/palmolive.jpg",
        "name": "Palmolive",
        "size_type": "мл",
        "size": "1000",
        "barcode": "460404",
        "producer": "Palmolive",
        "brand": "Palmolive",
        "description": "Шампунь для мытья волос",
        "price": "22,56",
        "type_care": [
            {
                "title": "Уход за волосами",
                "number": 1
            }
        ]
    },
    {
        "id": 5,
        "image_url": "/img/nivea.jpg",
        "name": "Nivea",
        "size_type": "мл",
        "size": "200",
        "barcode": "460404",
        "producer": "Nivea",
        "brand": "Nivea",
        "description": "Nivea средство для бритья специально для мужчин",
        "price": "565",
        "type_care": [
            {
                "title": "Средства для бритья",
                "number": 1
            }
        ]
    },
    {
        "id": 6,
        "image_url": "/img/podarok.jpg",
        "name": "AMX ",
        "size_type": "г",
        "size": "1500",
        "barcode": "460404",
        "producer": "AMX",
        "brand": "AMX",
        "description": "Подарочный набор с секретом внутри",
        "price": "1200",
        "type_care": [
            {
                "title": "Подарочные наборы",
                "number": 1
            }
        ]
    },
    {
        "id": 7,
        "image_url": "/img/aura.jpg",
        "name": "Aura",
        "size_type": "мл",
        "size": "75",
        "barcode": "460404",
        "producer": "Aura",
        "brand": "Aura",
        "description": "Крем для рук Aura Beauty Your Richness обогащающий",
        "price": "91",
        "type_care": [
            {
                "title": "Уход за телом",
                "number": 2
            }
        ]
    },
    {
        "id": 8,
        "image_url": "/img/every.png",
        "name": "Attache",
        "size_type": "г",
        "size": "140x200",
        "barcode": "460404",
        "producer": "Attache",
        "brand": "Attache",
        "description": "Ежедневник недатированный Attache искусственная кожа A5 136 листов коралловый",
        "price": "480",
        "type_care": [
            {
                "title": "Бумажная продукция",
                "number": 1
            }
        ]
    },
    {
        "id": 9,
        "image_url": "/img/diadem.jpg",
        "name": "Диадем",
        "size_type": "мл",
        "size": "250",
        "barcode": "460404",
        "producer": "Диадем",
        "brand": "Диадем",
        "description": "Крем для рук регенерирующий Диадем",
        "price": "388",
        "type_care": [
            {
                "title": "Средства для загара",
                "number": 1
            }
        ]
    },
    {
        "id": 10,
        "image_url": "/img/shalet.jpeg",
        "name": "Shalet",
        "size_type": "мл",
        "size": "75",
        "barcode": "460404",
        "producer": "Shalet",
        "brand": "Shalet",
        "description": "Крем для ног Shalet Лаванда",
        "price": "70",
        "type_care": [
            {
                "title": "Уход за ногами",
                "number": 1
            }
        ]
    },
    {
        "id": 11,
        "image_url": "/img/umka.jpg",
        "name": "Умка",
        "size_type": "г",
        "size": "3",
        "barcode": "460404",
        "producer": "Умка",
        "brand": "Умка",
        "description": "Помада гигиеническая Умка Нежная забота с первых дней",
        "price": "140",
        "type_care": [
            {
                "title": "Уход за лицом",
                "number": 1
            }
        ]
    },
    {
        "id": 12,
        "image_url": "/img/luskan.jpg",
        "name": "Luscan",
        "size_type": "г",
        "size": "150",
        "barcode": "460404",
        "producer": "Luscan",
        "brand": "Luscan",
        "description": "Влажные салфетки антибактериальные Luscan 15 штук в упаковке",
        "price": "28,50",
        "type_care": [
            {
                "title": "Гигиеническая продукция",
                "number": 1
            }
        ]
    },
    {
        "id": 13,
        "image_url": "/img/rexona.jpg",
        "name": "Rexona ",
        "size_type": "мл",
        "size": "150",
        "barcode": "460404",
        "producer": "Rexona ",
        "brand": "Rexona ",
        "description": "Дезодорант-антиперспирант Rexona Men Невидимый",
        "price": "399",
        "type_care": [
            {
                "title": "Уход за телом",
                "number": 1
            }
        ]
    },
    {
        "id": 14,
        "image_url": "/img/rocs.jpg",
        "name": "R.O.C.S",
        "size_type": "мл",
        "size": "400",
        "barcode": "460404",
        "producer": "R.O.C.S",
        "brand": "R.O.C.S",
        "description": "Ополаскиватель для полости рта R.O.C.S. Активный кальций ",
        "price": "465",
        "type_care": [
            {
                "title": "Гигиена полости рта",
                "number": 1
            }
        ]
    },
    {
        "id": 15,
        "image_url": "/img/matrix.jpg",
        "name": "Matrix ",
        "size_type": "г",
        "size": "7000",
        "barcode": "460404",
        "producer": "Matrix",
        "brand": "Matrix",
        "description": "Набор инструмента столярно-слесарный Matrix 22 предмета",
        "price": "1009",
        "type_care": [
            {
                "title": "Подарочные наборы",
                "number": 1
            }
        ]
    },
    {
        "id": 16,
        "image_url": "/img/estel.jpg",
        "name": "Estel",
        "size_type": "г",
        "size": "750",
        "barcode": "460404",
        "producer": "Estel",
        "brand": "Estel",
        "description": "Пудра для обесцвечивания волос Estel Essex Princess",
        "price": "1270",
        "type_care": [
            {
                "title": "Уход за волосами",
                "number": 2
            }
        ]
    },
    {
        "id": 17,
        "image_url": "/img/qmatic.jpg",
        "name": "Q-Matic",
        "size_type": "г",
        "size": "60x60",
        "barcode": "460404",
        "producer": "Q-Matic",
        "brand": "Q-Matic",
        "description": "Термобилеты с перфорацией Q-Matic ",
        "price": "17 092 ",
        "type_care": [
            {
                "title": "Бумажная продукция",
                "number": 1
            }
        ]
    }
]
