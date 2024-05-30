function isNumeric(str) {
    return /^\d+$/.test(str);
  }
  
  function isLetter(str) {
    return /^[a-zA-Z]+$/.test(str);
  }
  
  

  function DateVerifyReFormat(str)
  {
    var date = new Date(str);

    if(isNaN(date.getTime()))
    {
       return str;
    }
    else
    {
      
      // Extract day, month, and year
      var day = date.getDate();
      var month = date.getMonth() + 1; // Month starts from 0, so add 1
      var year = date.getFullYear();

      // Format day and month to ensure leading zeros if needed
      day = (day < 10 ? '0' : '') + day;
      month = (month < 10 ? '0' : '') + month;

      // Concatenate formatted day, month, and year with "-" as the separator
      var formattedDate = day + '/' + month + '/' + year;

      return formattedDate;
    }

  }