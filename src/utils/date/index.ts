export const isToday = (date: Date | number): boolean => {
  const receivedDate = new Date(date);
  const actualDate = new Date();

  const sameDay = actualDate.getDay() === receivedDate.getDay();
  const sameMonth = actualDate.getMonth() === receivedDate.getMonth();
  const sameYear = actualDate.getFullYear() === receivedDate.getFullYear();

  if(sameDay && sameMonth && sameYear) return true;
  return false;
};

export const getFutureDate = (days: number): Date => {
  const actualDate = new Date();
  const futureDate = actualDate.setDate(actualDate.getDate() + days);

  return new Date(futureDate);
};

export function compareDate(prevDate: Date | string | undefined, date: Date | string | undefined): boolean {
  if (!prevDate || !date) return false;

  const convertedPrevDate = new Date(prevDate);
  const convertedDate = new Date(date);
  
  convertedPrevDate.setHours(0, 0, 0, 0);
  convertedDate.setHours(0, 0, 0, 0);
  
  return convertedPrevDate < convertedDate;
}
