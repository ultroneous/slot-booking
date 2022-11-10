// ---------- get a nextweek with year month and date ------------
function nextweek() {
  var today = new Date();
  var nextweek = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    today.getDate() + 6
  );
  return nextweek;
}

// ----------------- dynamic slogan  [ th , rd , st ,nd and more ] -------------------
function ordinal_suffix_of(i) {
  var j = i % 10,
    k = i % 100;
  if (j == 1 && k != 11) {
    return "st";
  }
  if (j == 2 && k != 12) {
    return "nd";
  }
  if (j == 3 && k != 13) {
    return "rd";
  }
  return "th";
}
// ---------------- find a dates between 2 date (return array) ------------------
export function getDatesInRange(startDate, endDate) {
  const date = new Date(startDate.getTime());
  const dates = [];
  while (date <= endDate) {
    dates.push({
      days: date.getDay(),
      dates: date.getDate(),
      month: date.getMonth(),
      slogan: ordinal_suffix_of(date.getDate()),
    });
    date.setDate(date.getDate() + 1);
  }
  return dates;
}
// --------------------------------- today (date,month,year,day) datas ---------------------------------
let today = new Date();
let todayDetail = {
  day: today.getDay(),
  date: today.getDate(),
  year: today.getFullYear(),
  month: today.getMonth() + 1,
};
// --------------------------------- nextweekdaydetail -------------------------------------
let nextweekdaydetail = {
  day: nextweek().getDay() - 2,
  date: nextweek().getDate(),
  year: nextweek().getFullYear(),
  month: nextweek().getMonth(),
};
// --------------------------------- convert into fulllDate ---------------------------------
export const startdate = new Date(
  `${todayDetail.year}-${todayDetail.month}-${todayDetail.date}`
);
export const enddate = new Date(
  `${nextweekdaydetail.year}-${nextweekdaydetail.month}-${nextweekdaydetail.date}`
);
// --------------------------------- make a state for full calender ---------------------------------
