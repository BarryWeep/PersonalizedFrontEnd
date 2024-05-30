$('#FunctionList').on('click', '.tab-Selector', function() {
    // 首先，移除所有.tab-Selector的active类
    $('.tab-Selector').removeClass('active');

    // 然后，给当前点击的.tab-Selector添加active类
    $(this).addClass('active');

    $('.ViewTab').removeClass('active');

    var DataBsTarget = $(this).attr('data-bs-target');

    $(DataBsTarget).addClass('active');

    if (DataBsTarget == "#Mechanic_DriverShiftView") {
        setCurrentDateTime();
    }
});



$('#sidebarclose').click(function()
{
    // Adjust the margin-left of the main element
    $('main').removeClass('WithSidebar');
    $('main').addClass('WithoutSidebar');
    $('footer').removeClass('WithSidebar');
    $('footer').addClass('WithoutSidebar');
});

$('#SideBarController').click(function()
{
    if($('#FunctionMenu').hasClass('show'))
    {
      $('main').removeClass('WithSidebar');
      $('main').addClass('WithoutSidebar');
      $('footer').removeClass('WithSidebar');
      $('footer').addClass('WithoutSidebar');
    }
    else
    {
      $('main').removeClass('WithoutSidebar');
      $('main').addClass('WithSidebar');
      $('footer').removeClass('WithoutSidebar');
      $('footer').addClass('WithSidebar');

    }
});



function PreloadInformation(FoundPersonalResults,FoundLoginResults,FoundLoginDepartment,FoundAllLinceseArray)
{
  //------ render department
  $('#DepotWithRole').text(`${FoundLoginDepartment} - ${FoundPersonalResults.Roles}`);
  $('#DepotWithRole_Mobile').text(`${FoundLoginDepartment} - ${FoundPersonalResults.Roles}`);
  //-------------------------------------------------

  const personInformation = [
    FoundPersonalResults.UniqueEmployeeID,
    `${FoundPersonalResults.PaySlipID},${FoundPersonalResults.ETSCode}`,
    `${FoundPersonalResults.FirstAndOtherName},${FoundPersonalResults.PreferName}`,
    FoundPersonalResults.FamilyName,
    FoundPersonalResults.Gender,
    DateVerifyReFormat(FoundPersonalResults.DateOfBirth),
    DateVerifyReFormat(FoundPersonalResults.EmploymentStartDate),
    FoundLoginResults.UserName,
    FoundPersonalResults.EmailAddress,
    '+61'+FoundPersonalResults.MobileNumber,
    `${FoundPersonalResults.Address} ${FoundPersonalResults.Suburb} ${FoundPersonalResults.State} ${FoundPersonalResults.PostCode} ${FoundPersonalResults.Country}`,
    FoundPersonalResults.Roles,
    FoundPersonalResults.Depots,
    FoundPersonalResults.Status == 0 ? 'Normal' : 'Unusual'
];

  $('.Personalinformation').find('.col-sm-9 p').each(function(index) {
      
      if(index==1)
        {
          let DriverCodeArray = personInformation[index].split(',');
          if(DriverCodeArray[1])
            {
              $(this).text(DriverCodeArray[0]+`,(${DriverCodeArray[1]})`);
            }
            else
            {
              $(this).text(DriverCodeArray[0]);
            }

        }
        else if(index==2)
        {
           let FirstNameArray = personInformation[index].split(',');
           if(FirstNameArray[1])
            {
              $(this).text(FirstNameArray[0]+`(${FirstNameArray[1]})`);
            }
            else
            {
              $(this).text(FirstNameArray[0]);
            }

        }
        else if(index==11)
        { 
            $(this).text(personInformation[index]);
            allPersonRoles = personInformation[index].split(',');

            allPersonRoles.forEach(function(role){

              if(role == 'Administrator')
                {
                  MechanicRole ();

                }
              else if(role == 'Cleaner')
                {

                }

            });

        }
        else
        {
          $(this).text(personInformation[index]);
        }


      });


        //rendering the certificats
        let htmlContentCert= '';
        FoundAllLinceseArray.forEach(function(element, index) {
          let downloadFiles = element.FileNames.split(',');
          let downloadFileString ='';

          downloadFiles.forEach(function(file, file_index)
          {
            downloadFileString += `<a href="/img/CertficateFiles/${file}.jpg" download>${file}</a>,` 

          });
          
          downloadFileString = downloadFileString.slice(0, -1);

          htmlContentCert +=`<tr>
                              <td>${element.LicenseClass}</td>
                              <td>${element.LicenseNumber}</td>
                              <td>${DateVerifyReFormat(element.ExpiryDate)}</td>
                              <td>${downloadFileString}</td>
                              <td>${element.Comment}</td>
                            </tr>`;

        
        $('#LicenceTable').append(htmlContentCert);

  });

}


