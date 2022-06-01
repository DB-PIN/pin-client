const counties = [
    { id: '1', name:`서울특별시`},
    { id: '2', name:'부산광역시'},
    { id: '3', name:`대구광역시`},
    { id: '4', name:`인천광역시`},
    { id: '5', name:`광주광역시`},
    { id: '6', name:`대전광역시`},
    { id: '7', name:`울산광역시`},
    { id: '8', name:`세종특별자치시`},
    { id: '9', name:`경기도`},
    { id: '10', name:`강원도`},
    { id: '11', name:`충청북도`},
    { id: '12', name:`충청남도`},
    { id: '13', name:`전라북도`},
    { id: '14', name:`전라남도`},
    { id: '15', name:`경상북도`},
    { id: '16', name:`경상남도`},
    { id: '17', name:`제주특별자치도`},
];

const getCounty = (id) => counties[id+1].name;

const date = '2020-01-01 00:00:00';

export { counties, getCounty, date } ;
