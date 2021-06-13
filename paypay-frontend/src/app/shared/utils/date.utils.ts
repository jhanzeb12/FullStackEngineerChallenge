export const DateUtils = {
  shortMonthString: (month: string) => {
    const months = {
      January: 'Jan',
      February: 'Feb',
      March: 'Mar',
      April: 'Apr',
      May: 'May',
      June: 'Jun',
      July: 'Jul',
      August: 'Aug',
      September: 'Sep',
      October: 'Oct',
      November: 'Nov',
      December: 'Dec'
    };

    return months[month];
  },
  getDefaultFormat: (date = new Date()) => {
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'long', day: '2-digit' });
    const [{ value: month }, , { value: day }, , { value: year }] = dateTimeFormat.formatToParts(date);
    return `${day}-${DateUtils.shortMonthString(month)}-${year}`;
  }
};