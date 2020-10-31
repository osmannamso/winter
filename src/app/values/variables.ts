export enum TRIP_OPTIONS {AIRPLANE = 'flight', TRAIN = 'train'}
export enum TICKET_CLASSES {ECONOMIC = 'economy', BUSINESS = 'business'}
export enum TRIP_RESIDENCES {HOTEL = 'hotel', APARTMENT = 'apartment', NONE = 'not_required'}
export enum TRIP_RESIDENCE_CLASSES {ECONOMY = 'economy_class', MIDDLE = 'middle_class', LUXURY = 'luxury_class'}
export enum TRIP_TRANSFERS {FULL = 'full', PARTIAL = 'partial'}
export enum TRIP_VEHICLE_CLASS {ECONOMY = 'economy_class', BUSINESS = 'business_class', MINIBUS = 'minibus'}

export const EMPLOYEE_POSITIONS = [
  {
    text: 'Сотрудник',
    value: 'employee'
  },
  {
    text: 'Менеджер',
    value: 'manager'
  },
  {
    text: 'Администратор',
    value: 'leader'
  }
];
export enum EMPLOYEE_GENDERS {MALE = 'male', FEMALE = 'female'}
