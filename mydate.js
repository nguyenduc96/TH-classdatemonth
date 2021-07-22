class MyDate {
    day;
    month;
    year;
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    getDay() {
        return this.day;
    }
    getMonth() {
        return this.month;
    }
    getYear() {
        return this.year;
    }
    setDay(day) {
        this.day = day;
    }
    setMonth(month){
        this.month = month;
    }
    setYear(year){
        this.year = year;
    }
    setDate(day, month, year){
        this.day = day;
        this.month = month;
        this.year = year;
    }
    toString(){
        return this.day + '/' + this.month + '/' + this.year;
    }
};
let date = new MyDate(21, 7, 2021);
let day =  date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(day + '/' + month + '/' + year);
date.setDay(22);
date.setMonth(7);
date.setYear(2021);
alert(date.getDay() + '/' + date.getMonth() + '/' + date.getYear());
date.setDate(23,7,2021);
alert(date.getDay() + '/' + date.getMonth() + '/' + date.getYear());
