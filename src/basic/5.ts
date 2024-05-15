enum DayOfWeek {
  Monday = "MONDAY",
  Tuesday = "TUESDAY",
  Wednesday = "WEDNESDAY",
  Thursday = "THURSDAY",
  Friday = "FRIDAY",
  Saturday = "SATURDAY",
  Sunday = "SUNDAY",
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (day !== DayOfWeek.Saturday || DayOfWeek.Sunday) {
    return false;
  } else return true;
};
