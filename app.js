// + - / ** 하는 계산기 만들기
// object와 function 사용하기

const calculater = {
  add: function (a, b) {
    console.log(a + b);
  },
  min: function (a, b) {
    console.log(a - b);
  },
  div: function (a, b) {
    console.log(a / b);
  },
  powerof: function (a, b) {
    console.log(a ** b);
  },
};

calculater.add(3, 5);
calculater.min(9, 2);
calculater.div(8, 3);
calculater.powerof(2, 3);
