
document.addEventListener('DOMContentLoaded', () => {
    "use strict";
  

/* rendering common use function

    <option value="Unanderra" selected>Unanderra</option>
    <option value="Nowra">Nowra</option>
    <option value="Shellharbour">Shellharbour</option>
    <option value="Helensburgh">Helensburgh</option>
    <option value="Hopkinsons">Hopkinsons</option>
    <option value="Kiama">Kiama</option>*/


    var AllDepot = ['Unanderra', 'Nowra', 'Shellharbour', 'Helensburgh', 'Hopkinsons', 'Kiama'];
    var Imminent = ['None','Fuel', 'Oil Spillage','Other'];
    var RoadLand = ['Other','Single Land', 'Dual Carriageway'];

    var BreakdonwName = ['Benny','Mark', 'John'];
    var BreakdonwNumber = ['+61416186308','+asda', '+asdasd'];


    AllDepot.forEach(function(depot, index) {
        var SelectOption;
        if (index === 0) {
            SelectOption = $('<option value="' + depot + '" selected>' + depot + '</option>');
        } else {
            SelectOption = $('<option value="' + depot + '">' + depot + '</option>');
        }
        $('.DepotOption').append(SelectOption);
    });
   
    Imminent.forEach(function(imminent, index) {
      var SelectOption;
      if (index === 0) {
          SelectOption = $('<option value="' + imminent + '" selected>' + imminent + '</option>');
      } else {
          SelectOption = $('<option value="' + imminent + '">' + imminent + '</option>');
      }
      $('.ImminentOption').append(SelectOption);
    });

    RoadLand.forEach(function(roadLand, index) {
      var SelectOption;
      if (index === 0) {
          SelectOption = $('<option value="' + roadLand + '" selected>' + roadLand + '</option>');
      } else {
          SelectOption = $('<option value="' + roadLand + '">' + roadLand + '</option>');
      }
      $('.RoadLandOption').append(SelectOption);
    });


    BreakdonwName.forEach(function(breakdonwname, index) {
      var SelectOption;
      if (index === 0) {
          SelectOption = $('<option value="' + BreakdonwNumber[index] + '" selected>' + breakdonwname + '</option>');
          $('#EmergencycallButton').attr('href', 'tel:' + BreakdonwNumber[index]);
      } else {
          SelectOption = $('<option value="' + BreakdonwNumber[index] + '">' + breakdonwname + '</option>');
      }
      $('.BreakdownEmergencyCall').append(SelectOption);
    });

   
    /******************************** */

    /**
     * Preloader
     */
    const preloader = document.querySelector('#preloader');
    if (preloader) {
      window.addEventListener('load', () => {
        preloader.remove();
      });
    }
  

/**
   * Sticky Header on Scroll
   */
  const selectHeader = document.querySelector('#header');
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop;
    let nextElement = selectHeader.nextElementSibling;

    const selectTopbar = document.querySelector('#topbar')

    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('sticked');
        selectTopbar.classList.add('sticked');
        if (nextElement) nextElement.classList.add('sticked-header-offset');
      } else {
        selectHeader.classList.remove('sticked');
        selectTopbar.classList.remove('sticked');
        if (nextElement) nextElement.classList.remove('sticked-header-offset');
      }
    }
    window.addEventListener('load', headerFixed);
    document.addEventListener('scroll', headerFixed);
  }

  const scrollTop2 = document.querySelector('#header');
  if (scrollTop2) {
    const togglescrollTop = function() {
      window.scrollY > 100 ? scrollTop2.classList.add('stikcy-menu') : scrollTop2.classList.remove('stikcy-menu');
      const selectTopbar2 = document.querySelector('#topbar')
      window.scrollY > 100 ? selectTopbar2.classList.add('stikcy-menu') : selectTopbar2.classList.remove('stikcy-menu');     

    }
    window.addEventListener('load', togglescrollTop);
    document.addEventListener('scroll', togglescrollTop);
    scrollTop2.addEventListener('click', window.scrollTo({
      top: 0,
      behavior: 'smooth'
    }));
  }


  
  /**
   * Mobile nav toggle
   */
  const mobileNavShow = document.querySelector('.mobile-nav-show');
  const mobileNavHide = document.querySelector('.mobile-nav-hide');

  document.querySelectorAll('.mobile-nav-toggle').forEach(el => {
    el.addEventListener('click', function(event) {
      event.preventDefault();
      mobileNavToogle();
    })
  });

  function mobileNavToogle() {
    document.querySelector('body').classList.toggle('mobile-nav-active');
    mobileNavShow.classList.toggle('d-none');
    mobileNavHide.classList.toggle('d-none');
  }






/*---------------------------------------------------------form- common use, click a button, arise Tasks */ 


$('#StartATask').click(function(){
  var CurrentStatus = $('#TaskStatus').text(); //<h5>Task Status: <span id="TaskStatus" class="text-muted">Active</span></h5>
  if(CurrentStatus.toUpperCase() == "ACTIVE")
  {
    if($('#ShowAllTask').hasClass('d-none'))
    {
      alert("Please Finish the Pre-departure task 1 and 2, then click finialize pre-depatur, afterr that, you can start driving, check detail and for further action under ONGOING TASKS");
      $('#ShowAllTask').removeClass('d-none');
    }
    else
    {
      $('#ShowAllTask').addClass('d-none');
    }
    
  }
  else if(CurrentStatus.toUpperCase() == "SOLVED")
  {
    alert("The Solved Case cannot be restarted");
  }
  else
  {
    alert("Nothing Selected");
  }

});


/*------------------------------Emergency mobile change */
var $phoneNumbersSelect = $('#phoneNumbers');
var $callButton = $('#EmergencycallButton');

// Add event listener to the select element
$phoneNumbersSelect.on('change', function() {
  // Get the selected phone number

  var selectedPhoneNumber = $phoneNumbersSelect.val();
  // Update the href attribute of the call button with the selected phone number
  $callButton.attr('href', 'tel:' + selectedPhoneNumber);
});


/*------------------------------finilize PreDepature, add to on-going job, create new tab*/

$('#FinializePreDepature').click(function(){

  var findparentNode = $(this).closest('.container-fluid').find('.PopupBoxController');
  
  var AllTaskFinish = true;
  
  findparentNode.each(function(index, element){

    if(!$(element).hasClass('bg-success'))
    {
      AllTaskFinish = false;
      return false; // Break out of the loop
    }
  }); 

  if(!AllTaskFinish)
  {
    alert("You need to finish the pre-departure tasks first");
  }

});

/******************************************************** */

const ATTHEBREAKDOWNLOCATION = [
  {
    category: 'At The Breakdown Location',
    items: [
      'DID YOU UNDERTAKE A SAFETY “DRIVE BY” PRIOR TO STOPPING?',
      'WHAT IS THE SPEED LIMIT OF THE ROAD YOU ARE WORKING ON?',
      'WHERE IS THE SERVICE VEHICLE POSITIONED IN RELATION TO THE BROKEN-DOWN VEHICLE? (PLEASE CIRCLE)',
      'IS THE SERVICE VEHICLE PARKED AT A 45-DEGREE ANGLE TO THE ROAD?',
      'HAS BUS DRIVER APPLIED PARK BRAKE, SELECTED PARK OR NEUTRAL AND SHUT DOWN ENGINE? ',
      'HAVE YOU RECEIVED THE KEYS FROM THE DRIVER?',
      'HAVE THE WARNING TRIANGLES, WARNING CONES AND HAZARD SIGNS BEEN PLACED CORRECTLY?',
      'IS A TOW TRUCK OR FLOAT REQUIRED?',
      'HAVE YOU CREATED A SAFE WORK ZONE I.E., 3METRES FROM PASSING TRAFFIC AND 10 METRES BUFFER ZONE FROM BUS?'
    ]
  }
];


const AFTERTHEBREAKDOWN = [
  {
    category: 'At The Breakdown Location',
    items: [
      'ARE THERE ANY ENVIRONMENTAL HAZARDS TO REMEDIATE?',
      'IS THE BREAKDOWN LOCATION FREE OF RUBBISH AND DEBRIS?',
      'DID YOU COMMUNICATE WITH THE DEPOT THAT THE VEHICLE REPAIR WAS COMPLETED?'
    ]
  }
];






$('.DomainExpansionController').change(function(){

  var siblingText = $(this).siblings().text();
  if($(this).prop('checked')) {

    var siblingText = $(this).siblings().text();

    if(siblingText=="At The Breakdown Location")
    {
          var html =  `<div class="row mt-1 gy-2"><!-- History Task / Active Task-->
          <div class="col-md-12"> <!-- History Task-->
            <div class="card bg-dark">
              <div class="card-body">
                <div id="AtTheBreakdownLocationIndicators" class="carousel slide">
                  <div class="carousel-indicators">
                    <button type="button" data-bs-target="#AtTheBreakdownLocationIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#AtTheBreakdownLocationIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#AtTheBreakdownLocationIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#AtTheBreakdownLocationIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  </div>
                  <div class="carousel-inner carousel_container_arrow">
                        <div class="carousel-item active ">
                          <div class="row g-3">`;

          ATTHEBREAKDOWNLOCATION.forEach(function(location){

          html += `<h5>${location.category}</h5>`;
          
          var totalcounter = location.items.length;
          location.items.forEach(function(item,index){

          let itemId = item.replace(/ /g, '-');
          itemId = itemId.replace('?','');

          if(index==parseInt(totalcounter/2))
          { 
            html+=`</div><!--row-->
            </div><!--carousel-item-->
            <div class="carousel-item">
            <div class="row g-3">`;
          }

          if (item == 'WHAT IS THE SPEED LIMIT OF THE ROAD YOU ARE WORKING ON?')
          {
            html +=`
            <div class="col-md-12">
              <div class="form-group">
                  <label for="${itemId}">${item}</label>
                  <input type="text" class="form-control w-50" id="${itemId}"  value="" >
              </div>
            </div>`;

          }
          else if (item=='WHERE IS THE SERVICE VEHICLE POSITIONED IN RELATION TO THE BROKEN-DOWN VEHICLE? (PLEASE CIRCLE)')
          {
            html +=`
            <div class="col-md-12">
              <div class="form-group">
                  <label for="${itemId}">${item}</label>
                  <select class="form-select w-50" aria-label="${itemId}" id="${itemId}">
                    <option selected>Unknow</option>
                    <option value="Rear">Rear</option>
                    <option value="Front">Front</option>
                  </select>
              </div>
            </div>`;
          }
          else
          {
            html += `
            <div class="col-md-12">
                <div class="form-group">
                    <label>${item}</label>
                    <div class="form-check">
                    <input type="radio" class="form-check-input" name="${itemId}" value="yes" id="${itemId}-yes">
                    <label class="form-check-label" for="${itemId}-yes">YES</label>
                    </div>
                    <div class="form-check">
                    <input type="radio" class="form-check-input" name="${itemId}" value="no" id="${itemId}-no">
                    <label class="form-check-label" for="${itemId}-no">NO</label>
                    </div>
                </div>
            </div>`;

          }
            
          });
          });

          html+=`                       </div><!--row-->
                            </div><!--carousel-item-->
                            <div class="carousel-item">
                            <div class="row g-3">
                            <div class="col-12">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="TrafficHazedAhead">
                              <label class="form-check-label" for="TrafficHazedAhead">
                              'Traffic Hazard Ahead' sign may be used whenever 
                              any unexpected event causes a traffic hazard. This 
                              sign does not require a permit to use
                              </label>
                            </div>
                            <img src="/img/BreakDownGuide/HazardSign.png" class="img-fluid w-80" alt="HazardSign">
                          </div>
                            <div class="col-12">
                              <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="DistanceParking">
                                <label class="form-check-label" for="DistanceParking">
                                Space should be maintained between the work area and passing traffic- if possible, work should take 
                                place at least 3 metres away from traffic. This clearance can be marked by safety
                                triangles or cones (see below).
                                Where possible, a “buffer zone” of 10 to 15 metres should be maintained between the repair vehicle 
                                and the stationary broken down bus
                                </label>
                              </div>
                              <img src="img/BreakDownGuide/ParkingLength1.png" class="img-fluid w-80" alt="ParkingLength">
                            </div>
                            </div><!--row-->
                          </div><!--carousel-item-->
                          <!------------------------------------------------->
                          <div class="carousel-item">
                          <div class="row g-3">
                          <div class="col-12">
                            <div class="form-check">
                              <input class="form-check-input" type="checkbox" value="" id="TrafficHazedAhead">
                              <label class="form-check-label" for="TrafficHazedAhead">
                              During the entire breakdown process the repair vehicle must have all available hazard lights illuminated and all 
                              workers must always wear high visibility clothing.
                              </label>
                            </div>
                            <img src="/img/BreakDownGuide/allHazardLightOn.png" class="img-fluid w-80" alt="allHazardLightOn">
                          </div>
                          </div><!--row-->
                        </div><!--carousel-item-->
                        </div><!--carousel-inner-->
                        <button class="carousel-control-next" type="button" data-bs-target="#AtTheBreakdownLocationIndicators" data-bs-slide="next">
                          <span class="carousel-control-next-icon" aria-hidden="true"></span>
                          <span class="visually-hidden">Next</span>
                        </button>
                      </div><!--carousel slide-->
                    </div><!--card-body"-->
                  </div><!--card-->
                </div><!--col-md-12>
              </div><!--row-->`;

    }
    else if(siblingText=="After The BreakDown")
    {
      var html =  `<div class="row mt-1 gy-2"><!-- History Task / Active Task-->
      <div class="col-md-12"> <!-- History Task-->
        <div class="card bg-dark">
          <div class="card-body">
                <div class="container">
                  <div class="row g-3">`;

      AFTERTHEBREAKDOWN.forEach(function(location){

      html += `<h5>${location.category}</h5>`;

      location.items.forEach(function(item){

      let itemId = item.replace(/ /g, '-');
      itemId = itemId.replace('?','');


        html += `
        <div class="col-md-6">
            <div class="form-group">
                <label>${item}</label>
                <div class="form-check">
                <input type="radio" class="form-check-input" name="${itemId}" value="yes" id="${itemId}-yes">
                <label class="form-check-label" for="${itemId}-yes">YES</label>
                </div>
                <div class="form-check">
                <input type="radio" class="form-check-input" name="${itemId}" value="no" id="${itemId}-no">
                <label class="form-check-label" for="${itemId}-no">NO</label>
                </div>
            </div>
        </div>`;

      
        
      });
      });

      html+=`     </div><!--row-->
                  </div><!--container-->
                </div><!--card-body"-->
              </div><!--card-->
            </div><!--col-md-12>
          </div><!--row-->`;

    }
    else
    {
      var html = `<div class="row mt-5">
      <div class="col-sm-6 ms-auto">
        <button type="button" class="btn btn-info">Finish Breakdown & Send back to Depot</button>
      </div>
    </div>`;
    }
  
    $(this).parent().after(html);
  } else {

    $(this).parent().next('.row').remove();
  }
});





/********************************************Image selection  */

// Handle image selection
$("#message0").hide();
$("#message1").hide();
$("#message2").hide();
$("#message3").hide();

$(".selectable-img").click(function() {
    // Check if the selected image is the correct one
    var carouselItem = $(this).closest('.carousel-item');
    var index = carouselItem.index();
    var messageindex ="#message" + index;

    if(index==0)
    {
        if ($(this).attr("id") === "errorImage") {
          // Display error message if the selected image is the error one
          $(messageindex).html(`<button type="button" class="btn btn-danger btn-lg">Incorrect, blocked vision</button>`).fadeIn().delay(2000).fadeOut();
      } else {
          // Display message if the selected image is the correct one 
          $(messageindex).html(`<button type="button" class="btn btn-success btn-lg">Whenever possible, avoid parking right next to a trafficable lane.</button>
          <button type="button" class="btn btn-danger btn-lg">Incorrect, blocked vision</button>`).fadeIn();
      }
    }
    else if(index==1)
    {
      if ($(this).attr("id") === "errorImage") {
        // Display error message if the selected image is the error one
        $(messageindex).html(`<button type="button" class="btn btn-danger btn-lg">Only the rear of the repair vehicle is visible. 
        Equipment stored on the right hand side cannot 
        be safely accessed.</button>`).fadeIn().delay(2000).fadeOut();
      } else {
        // Display message if the selected image is the correct one 
        $(messageindex).html(`<button type="button" class="btn btn-success btn-lg">A 45 degree angle increases visibility for passing traffic.</button>
        <button type="button" class="btn btn-danger btn-lg">Only the rear of the repair vehicle is visible. 
        Equipment stored on the right hand side cannot 
        be safely accessed.</button>`).fadeIn();
      }
    }
    else if(index ==2)
    {
      if ($(this).attr("id") === "errorImage") {
        // Display error message if the selected image is the error one
        $(messageindex).html(`<button type="button" class="btn btn-danger btn-lg">In this scenario, parking at a 45 degree angle may introduce hazards.</button>`).fadeIn().delay(2000).fadeOut();
      } else {
        // Display message if the selected image is the correct one 
        $(messageindex).html(`<button type="button" class="btn btn-danger btn-lg">In this scenario, parking at a 45 degree angle may introduce hazards</button>
        <button type="button" class="btn btn-success btn-lg">Parking parallel to traffic may be required when access to the rear of the vehicle is essential.</button>`).fadeIn();
      }

    }
    else if (index==3)
    {
      if ($(this).attr("id") === "errorImage") {
        // Display error message if the selected image is the error one
        $(messageindex).html(`<button type="button" class="btn btn-danger btn-lg">The risk from passing traffic is present at the rear or the front of the bus.</button>`).fadeIn().delay(2000).fadeOut();
      } else {
        // Display message if the selected image is the correct one 
        $(messageindex).html(`<button type="button" class="btn btn-danger btn-lg">The risk from passing traffic is present at the rear or the front of the bus.</button>
        <button type="button" class="btn btn-success btn-lg">Illustration showing placement of warning sign, triangles and safety cones.</button>`).fadeIn();
      }

    }

});


}); /*document.addEventListener('DOMContentLoaded', () => {*/


function setCurrentDateTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = String(now.getMonth() + 1).padStart(2, '0');
  var day = String(now.getDate()).padStart(2, '0');
  var hours = String(now.getHours()).padStart(2, '0');
  var minutes = String(now.getMinutes()).padStart(2, '0');
  
  var dateInput = $('.TriggerSyncDate');
  var timeInput = $('.TriggerSyncTime');
  
  // Set current date
  dateInput.val(year + '-' + month + '-' + day);
  
  // Set current time
  timeInput.val(hours + ':' + minutes);
}
