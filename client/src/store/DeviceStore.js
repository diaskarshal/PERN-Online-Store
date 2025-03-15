// import { makeAutoObservable } from "mobx";

// export default class DeviceStore {
//   constructor() {
//     this._types = [
//       { id: 1, name: "Laptop" },
//       { id: 2, name: "Phone" },
//       { id: 3, name: "Earphone" },
//       { id: 4, name: "Tablet" },
//     ];
//     this._brands = [
//       { id: 1, name: "Samsung" },
//       { id: 2, name: "Apple" },
//       { id: 3, name: "Lenovo" },
//       { id: 4, name: "Xiaomi" },
//     ];
//     this._devices = [
//       {
//         id: 1,
//         name: "MacBook Air M4",
//         price: 900,
//         img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
//         typeId: "1",
//         brandId: "1",
//       },
//       {
//         id: 2,
//         name: "MacBook Air M3",
//         price: 700,
//         img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
//         typeId: "1",
//         brandId: "1",
//       },
//       {
//         id: 2,
//         name: "MacBook Air M3",
//         price: 700,
//         img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
//         typeId: "1",
//         brandId: "1",
//       },
//       {
//         id: 2,
//         name: "MacBook Air M3",
//         price: 700,
//         img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
//         typeId: "1",
//         brandId: "1",
//       },
//       {
//         id: 2,
//         name: "MacBook Air M3",
//         price: 700,
//         img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
//         typeId: "1",
//         brandId: "1",
//       },
//       {
//         id: 2,
//         name: "MacBook Air M3",
//         price: 700,
//         img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
//         typeId: "1",
//         brandId: "1",
//       },
//     ];
//     this._selectedType = {};
//     this._selectedBrand = {};
//     makeAutoObservable(this);
//   }

//   setTypes(types) {
//     this._types = types;
//   }

//   setBrands(brands) {
//     this._brands = brands;
//   }

//   setDevices(devices) {
//     this._devices = devices;
//   }

//   setSelectedType(type) {
//     this._selectedType = type;
//   }

//   setSelectedBrand(brand) {
//     this._selectedBrand = brand;
//   }

//   get types() {
//     return this._types;
//   }

//   get brands() {
//     return this._brands;
//   }

//   get devices() {
//     return this._devices;
//   }

//   get selectedType() {
//     return this._selectedType;
//   }

//   get selectedBrand() {
//     return this._selectedBrand;
//   }
// }
import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 12;
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }
  setBrands(brands) {
    this._brands = brands;
  }
  setDevices(devices) {
    this._devices = devices;
  }

  setSelectedType(type) {
    this.setPage(1);
    this._selectedType = type;
  }
  setSelectedBrand(brand) {
    this.setPage(1);
    this._selectedBrand = brand;
  }
  setPage(page) {
    this._page = page;
  }
  setTotalCount(count) {
    this._totalCount = count;
  }

  get types() {
    return this._types;
  }
  get brands() {
    return this._brands;
  }
  get devices() {
    return this._devices;
  }
  get selectedType() {
    return this._selectedType;
  }
  get selectedBrand() {
    return this._selectedBrand;
  }
  get totalCount() {
    return this._totalCount;
  }
  get page() {
    return this._page;
  }
  get limit() {
    return this._limit;
  }
}
