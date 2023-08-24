export class ProductsConstants {
  public readonly tabs: any[] = [
    {
      id: 'food',
      title: 'Comida',
      active: true,
    },
    {
      id: 'gym',
      title: 'Material deportivo',
      active: false,
    },

    {
      id: 'clothes',
      title: 'Ropa',
      active: false,
    },
    {
      id: 'fitness',
      title: 'Suplementación',
      active: false,
    },
  ];
  public readonly products: any[] = [
    //#region COMIDA
    {
      title: 'QUESO HAVARTI LIGHT',
      source: 'Mercadona',
      description: 'Lorem, deren, trataro, filede, nerada',
      price: '2,98€',
      img: 'assets/img/products/01-havarti-mercadona.jpeg',
      tab: 'food',
    },
    {
      title: 'QUESO BURGOS 0%',
      source: 'Mercadona',
      description: 'Lorem, deren, trataro, filede, nerada',
      price: '1,88€',
      img: 'assets/img/products/02-queso-desnatado-mercadona.jpeg',
      tab: 'food',
    },
    {
      title: 'POLLO RELLENO ASADO',
      source: 'Mercadona',
      description: 'Lorem, deren, trataro, filede, nerada',
      price: '2,09€',
      img: 'assets/img/products/03-pollo-relleno-mercadona.jpeg',
      tab: 'food',
    },
    {
      title: 'BEBIDA SOJA CAFE',
      source: 'Mercadona',
      description: 'Lorem, deren, trataro, filede, nerada',
      price: '1,25€ (ud.)',
      img: 'assets/img/products/04-cafe-mercadona.jpeg',
      tab: 'food',
    },
    //#endregion COMIDA

    //#region MATERIAL DEPORTIVO
    {
      title: 'Magnam Tiste',
      description: 'Lorem, deren, trataro, filede, nerada',
      url: 'assets/img/menu/menu-item-1.png',
      price: '$5.95',
      img: 'assets/img/menu/menu-item-1.png',
      tab: 'fitness',
    },
    //#endregion MATERIAL DEPORTIVO

    //#region ROPA
    {
      title: 'Magnam Tiste',
      description: 'Lorem, deren, trataro, filede, nerada',
      url: 'assets/img/menu/menu-item-6.png',
      price: '$5.95',
      img: 'assets/img/menu/menu-item-6.png',
      tab: 'clothes',
    },
    //#endregion ROPA

    //#region SUPLEMENTACION
    {
      title: 'Magnam Tiste',
      description: 'Lorem, deren, trataro, filede, nerada',
      url: 'assets/img/menu/menu-item-1.png',
      price: '$5.95',
      img: 'assets/img/menu/menu-item-1.png',
      tab: 'gym',
    },
    //#endregion SUPLEMENTACION
  ];
}
