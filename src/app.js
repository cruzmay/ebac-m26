var getAge = function (date) {
    var currentDate = new Date().getTime();
    var birthDate = new Date(date).getTime();
    var age = currentDate - birthDate;
    return Math.floor(age / 365 / 24 / 60 / 60 / 1000);
};
console.log(getAge('2014-12-07'));
console.log(getAge('2000-06-20'));
console.log(getAge('1979-10-16'));
