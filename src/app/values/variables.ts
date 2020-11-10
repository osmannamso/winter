export enum TRIP_OPTIONS {AIRPLANE = 'flight', TRAIN = 'train'}
export enum TICKET_CLASSES {ECONOMIC = 'economy', BUSINESS = 'business'}
export enum TRIP_RESIDENCES {HOTEL = 'hotel', APARTMENT = 'apartment', NONE = 'not_required'}
export enum TRIP_RESIDENCE_CLASSES {ECONOMY = 'economy_class', MIDDLE = 'middle_class', LUXURY = 'luxury_class'}
export enum TRIP_TRANSFERS {FULL = 'full', PARTIAL = 'partial'}
export enum TRIP_VEHICLE_CLASS {ECONOMY = 'economy_class', BUSINESS = 'business_class', MINIBUS = 'minibus'}
export enum TRIP_STATUSES {OFFER = 'offer', IN_PROCESSING = 'in_processing', AWAITING_APPROVAL = 'awaiting_approval', CONFIRMED = 'confirmed'}
export enum EMPLOYEE_POSITIONS_ENUM {LEADER = 'leader', EMPLOYEE = 'employee', MANAGER = 'manager'}

export const TRIP_RU_STATUSES = {
  offer: {
    text: 'Формируем предложения',
    count: 1
  },
  in_processing: {
    text: 'В обработке',
    count: 2
  },
  awaiting_approval: {
    text: 'Ожидаем согласования',
    count: 3
  },
  confirmed: {
    text: 'Исполнено',
    count: 4
  }
};
export const TRIP_RU_TRANSFERS = {
  full: 'Полный',
  partial: 'Частичный'
};
export const TRIP_RU_RESIDENCES = {
  hotel: 'Отель',
  apartment: 'Апартамент',
  not_required: 'Нет'
};
export const TRIP_RU_VEHICLE_CLASS = {
  economy_class: 'Эконом',
  business_class: 'Бизнес',
  minibus: 'Минибас'
};
export const TRIP_RU_RESIDENCE_CLASS = {
  economy_class: 'Эконом',
  middle_class: 'Средний',
  luxury_class: 'Бизнес'
};
export const TRIP_RU_OPTIONS = {
  airplane: 'Самолет',
  train: 'Поезд'
};
export const TRIP_RU_TICKET_CLASSES = {
  economy: 'Эконом',
  business: 'Бизнес'
};

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
export const EMPLOYEE_DOCUMENT_TYPES = [
  {
    text: 'Паспорт',
    value: 'passport'
  }
];
export enum EMPLOYEE_GENDERS {MALE = 'male', FEMALE = 'female'}
export const EMPLOYEE_RU_POSITIONS = {
  leader: 'Администратор',
  manager: 'Менеджер',
  employee: 'Сотрудник'
};
export const EMPLOYEE_RU_DOCUMENT_TYPES = {
  passport: 'Паспорт'
};
export const EMPLOYEE_RU_GENDERS = {
  male: 'мужской',
  female: 'женский'
};
export const EMPLOYEE_NO_AVATAR = '/assets/images/no-avatar.png';
export const INPUT_TYPE_TEXT = 'text';
export const INPUT_TYPE_DATE = 'date';
