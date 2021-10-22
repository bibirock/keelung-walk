function str_pad(my_num, digits){
  
  var my_num_str = my_num.toString(); // "7"
  while(my_num_str.length < digits){ // 3 < 3
    my_num_str = "0" + my_num_str; // "007"
  }
  
  return my_num_str; // "007"
}
