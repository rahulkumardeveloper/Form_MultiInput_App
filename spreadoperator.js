//using spread operator
//case=1
// let arr1=[1,2,3,4];
// let arr2=[7,8,9,0];
// let arr3=[...arr1,...arr2];
// console.log(arr3);

//case=2
// let arr1=['rahul','kumar','gautam'];
// let [...remaing]=arr1;
// //console.log(arr1);
// //console.log(a);
// console.log(remaing);


//case=3

// let name1={
//     fname:'Rahul',
//     lname:"Kumar"
// }
// let biodata={
//     id:1,
//     ...name1,
//     address:'aurai'
// }
// console.log(biodata);

















if(name==='fname'){
    return{
      fname:value,
      lname:preValue.lname,
      email:preValue.email,
      mobile:preValue.mobile
    };
  }else if(name==='lname'){
    return{
      fname:preValue.fname,
      lname:value,
      email:preValue.email,
      mobile:preValue.mobile
    };
  }else if(name==='email'){
    return{
      fname:preValue.fname,
      lname:preValue.lname,
      email:value,
      mobile:preValue.mobile
    };
  }
  else if(name==='mobile'){
    return{
      fname:preValue.fname,
      lname:preValue.lname,
      email:preValue.email,
      mobile:value
    };
  }





