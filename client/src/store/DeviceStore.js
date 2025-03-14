import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Phone" },
    ];
    this._brands = [
      { id: 1, name: "Samsung" },
      { id: 2, name: "Apple" },
      { id: 3, name: "Lenovo" },
      { id: 4, name: "Xiaomi" },
    ];
    this._devices = [
      {
        id: 1,
        name: "MacBook Air M4",
        price: 900,
        img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
        typeId: "1",
        brandId: "1",
      },
      {
        id: 2,
        name: "MacBook Air M3",
        price: 700,
        img: "56080810-9057-4575-89a0-4e0de1490c31.jpg",
        typeId: "1",
        brandId: "1",
      },
    ];
    this._selectedType = {};
    this._selectedBrand = {};
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
    this._selectedType = type;
  }

  setSelectedBrand(brand) {
    this._selectedBrand = brand;
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
}
