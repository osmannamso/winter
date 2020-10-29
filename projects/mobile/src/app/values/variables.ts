export const MOBILE_PAGES = {
  DEFAULT: {
    backBtn: null,
    text: 'Pillowz'
  },
  TRIPS: {
    backBtn: null,
    text: 'Поездки'
  },
  CREATE_TRIP_FIRST: {
    backBtn: '/user/trips',
    text: 'Новая поездка: шаг 1/3'
  },
  CREATE_TRIP_SECOND: {
    backBtn: '/user/trips',
    text: 'Новая поездка: шаг 2/3'
  },
  CREATE_TRIP_THIRD: {
    backBtn: '/user/trips',
    text: 'Новая поездка: шаг 3/3'
  },
  EMPLOYEES: {
    backBtn: null,
    text: 'Сотрудники'
  },
  CREATE_USER: {
    backBtn: '/user/employees',
    text: 'Добавить сотрудника'
  },
  REPORTS: {
    backBtn: null,
    text: 'Отчетность'
  },
  NOTIFICATIONS: {
    backBtn: '/user/trips',
    text: 'Уведомления',
    isNotification: true
  },
  BALANCE: {
    backBtn: '/user/trips',
    text: 'Баланс: '
  },
  SETTINGS: {
    backBtn: '/user/trips',
    text: 'Настройки'
  },
  CHANGE_COMPANY: {
    backBtn: '/user/settings',
    text: 'Профиль компании'
  },
  CHANGE_PASSWORD: {
    backBtn: '/user/settings',
    text: 'Смена пароля'
  },
  GIVE_ACCESS: {
    backBtn: '/user/settings',
    text: 'Изменить права сотрудника'
  }
};

export const PASSWORD_CHANGED_SUCCESS = 'Пароль успешно изменен!';
