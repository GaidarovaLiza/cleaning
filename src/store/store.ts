import dayjs, { Dayjs } from 'dayjs';
import { create } from 'zustand';

interface RoomCountState {
  roomCount: number;
  bathRoomCount: number;
  maintenancePrice: number;
  setRoomCount: (count: number) => void;
  setBathRoomCount: (count: number) => void;
  calculateMaintenancePrice: () => void;
  addMaintenancePrice: (price: number) => void;
}

interface CalendarState {
  selectedDate: Dayjs | null;
  setSelectedDate: (date: Dayjs | null) => void;
}

interface AdditionalItems {
  selectedItemPrice: number | null;
  setSelectedItemPrice: (price: number) => void;
  additionalItemsList: string[];
  addAdditionalItem: (item: string) => void;
}

interface FormBody {
  phone: string;
  setPhone: (phone: string) => void;
  name: string;
  setName: (name: string) => void;
}

export const loadFromLocalStorage = () => {
  const roomCountStr = localStorage.getItem('roomCount');
  const bathRoomCountStr = localStorage.getItem('bathRoomCount');
  const selectedDateStr = localStorage.getItem('selectedDate');
  const selectedItemPriceStr = localStorage.getItem('selectedItemPrice');

  return {
    roomCount: roomCountStr ? parseInt(roomCountStr) : 1,
    bathRoomCount: bathRoomCountStr ? parseInt(bathRoomCountStr) : 1,
    maintenancePrice: 0,
    selectedDate: selectedDateStr ? dayjs.unix(parseInt(selectedDateStr)) : null,
    selectedItemPrice: selectedItemPriceStr ? parseInt(selectedItemPriceStr) : null,
  };
};

const initialState = loadFromLocalStorage();

export const useAdditionalItemsStore = create<AdditionalItems>((set, get) => ({
  selectedItemPrice: initialState.selectedItemPrice,
  additionalItemsList: [],
  addAdditionalItem: (item: string) => {
    const newAdditionalItemsList = [...get().additionalItemsList, item];
    set({ additionalItemsList: newAdditionalItemsList });
  },
  setSelectedItemPrice: price => {
    set({ selectedItemPrice: price });
    localStorage.setItem('selectedItemPrice', price.toString());
  },
}));

export const useFormBodyStore = create<FormBody>(set => ({
  phone: '+375',
  setPhone: phone => {
    set({ phone });
  },
  name: '',
  setName: name => {
    set({ name });
  },
}));

export const useCalendarStore = create<CalendarState>((set, get) => ({
  selectedDate: initialState.selectedDate,
  setSelectedDate: date => {
    set({ selectedDate: date });
    localStorage.setItem('selectedDate', date ? date.unix().toString() : '');
  },
}));

export const useRoomCountStore = create<RoomCountState>((set, get) => ({
  roomCount: initialState.roomCount,
  setRoomCount: count => {
    set({ roomCount: count });
    localStorage.setItem('roomCount', count.toString());
    get().calculateMaintenancePrice();
  },
  bathRoomCount: initialState.bathRoomCount,
  maintenancePrice: 0,
  setBathRoomCount: count => {
    set({ bathRoomCount: count });
    localStorage.setItem('bathRoomCount', count.toString());
    get().calculateMaintenancePrice();
  },
  addMaintenancePrice: price => {
    set({ maintenancePrice: get().maintenancePrice + price });
    localStorage.setItem('maintenancePrice', (get().maintenancePrice + price).toString());
  },
  calculateMaintenancePrice: () => {
    const { roomCount, bathRoomCount } = get();
    let price = 0;
    switch (roomCount) {
      case 1:
        price = 85;
        break;
      case 2:
        price = 100;
        break;
      case 3:
        price = 150;
        break;
      case 4:
        price = 200;
    }

    price += (bathRoomCount - 1) * 30;

    set({ maintenancePrice: price });
    localStorage.setItem('maintenancePrice', price.toString());
  },
}));
