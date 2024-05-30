/**************************************************Generate Task1 Pre-departure */

const PreDepatureBasicInfor = [
  {
    category: 'Basic Information',
    items: [
      'Driver Name:',
      'Driver ID:',
      'Task ID:',
      'Task Location:',
      'Start Time:',
      'Start Date:',
      'Start Depot:',
      'Number of Attendant:',
      'Repair Vehicle Rego:',
      'Pre-depature Note:'
    ]
  }
];


function GenerateBreakDownMaintenInfomation(data)
{
  let html = '';
  data.forEach(category => {
    html += `<h5>${category.category}</h5>`;
    category.items.forEach(item => {
      let itemId = item.replace(/ /g, '-');
      itemId = itemId.replace(':','');
      
      if(item == 'Task Location:')
      {
        html += `
        <div class="col-md-6">
          <div class="form-group">
              <label for="${itemId}">${item}</label>
              <input type="text" class="form-control" id="${itemId}"  value="Not Found" disabled>
          </div>
      </div>`;

      }
      else if(item == 'Start Time:')
      {
        html += `
        <div class="col-md-4 col-sm-6">
          <div class="form-group">
              <label for="${itemId}">${item}</label>
              <input type="time" class="form-control TriggerSyncTime" id="${itemId}">
          </div>
      </div>`;

      }
      else if(item == 'Start Date:')
      {
        html += `
        <div class="col-md-4 col-sm-6">
          <div class="form-group">
              <label for="${itemId}">${item}</label>
              <input type="Date" class="form-control TriggerSyncDate" id="${itemId}">
          </div>
      </div>`;
      }
      else if(item == 'Start Depot:')
      {
        html += `
        <div class="col-md-4 col-sm-6">
          <div class="form-group">
              <label for="${itemId}">${item}</label>
              <select class="form-select DepotOption" aria-label="${itemId}" id="${itemId}">
              </select>
          </div>
      </div>`;
      }
      else if(item == 'Pre-depature Note:')
      {
        html += `
        <hr/>
        <div class="basicCheckList">
            <label for="${itemId}" class="form-label">${item}</label>
            <textarea class="form-control" id="${itemId}" rows="3"></textarea>
        </div>`;

      }
      else
      {
        html += `
        <div class="col-md-4 col-sm-6">
          <div class="form-group">
              <label for="${itemId}">${item}</label>
              <input type="text" class="form-control" id="${itemId}"  value="Not Found" disabled>
          </div>
      </div>`;

      }


    });
    html += '<div class="row mt-3"><div class="col-md-3 ms-auto"><button type="button" class="btn btn-primary taskfinishclick">Confirm</button></div></div>';
  });
  return html;

}


const BasicHTML = GenerateBreakDownMaintenInfomation(PreDepatureBasicInfor);
$('.MaintenanceBreakDownInfoContent').html(BasicHTML);




/********************************generate task2 pre-depature checklist */


const BreakDownMaintenance = [
    {
      category: 'Maintenese Before Leaving Depot CheckList',
      items: [
        'IS THE WORKSHOP BREAKDOWN VEHICLE EQUIPPED WITH THE CORRECT SAFETY DEVICES E.G., TRIANGLES, CONES, SAFETY SIGNS AND SPILL KIT ?',
        'ARE THE WARNING LIGHTS WORKING IN THE BREAKDOWN VEHICLE ?',
        'IS THE TWO-WAY RADIO WORKING ?',
        'DO YOU HAVE A CHARGED MOBILE PHONE WITH YOU AND EMERGENCY CONTACT NUMBERS WITH YOU?',
        'DO YOU HAVE THE CORRECT PPE WITH YOU E.G. HI VIS VEST AND SAFETY GLASSES?',
        'ARE YOU AWARE OF THE LOCATION/SITUATION OF THE VEHICLE I.E., SPEED LIMIT, DIRECTION FACING? ',
        'HAVE YOU PLANNED YOUR TRAVEL ROUTE TO THE BREAKDOWN LOCATION? ',
      ]
    }
  ];

  
  function GenerateBreakDownMaintenChecklist(data)
  {
    let html = '';
    data.forEach(category => {
      html += `<h5>${category.category}</h5>`;
      category.items.forEach(item => {
        const itemId = item.replace(/ /g, '-');
        html += `
            <div class="col-12 mt-1">
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
      html += '<div class="row"><div class="col-md-3 mt-2 ms-auto"><button type="button" class="btn btn-primary taskfinishclick">Confirm</button></div></div>';
    });
    return html;

  }


  const checklistHTML = GenerateBreakDownMaintenChecklist(BreakDownMaintenance);
  $('.MaintenanceBreakDownChecklistContent').html(checklistHTML);







/*---------------------------------------------------------form-*/ 


document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  $(document).on("click", ".taskfinishclick", function() {
    // Find all inputs and checkboxes inside the current popup
    var $MoreInputs = $(this).closest('.focusedContent').find('.MaintenanceBreakDownChecklistContent .form-group');
    var $inputs = $(this).closest('.focusedContent').find('.basicInformation input');
    var $checkboxes = $(this).closest('.focusedContent').find('.basicCheckList input[type="checkbox"]');
    var $CorrectmessageBox = $(this).closest('.focusedContent').find('.CorrectmessageBox');

    // Flag to track if any information is missing
    var missingInformation = 0;

    // Check inputs for empty values
    $inputs.each(function() {
        if ($(this).val().trim() === "") {
            missingInformation = 1;
            return; // Exit the loop early if missing information is found
        }
    });

    $MoreInputs.each(function() {

      const selectedValue = $(this).find('input[type="radio"]:checked').val();
      if (!(selectedValue == 'yes' || selectedValue == 'no')) {
          missingInformation = 1;
          return; // Exit the loop early if missing information is found
      }
  });

    $CorrectmessageBox.each(function() {
      if ($(this).css('display') === 'none') {
          missingInformation = 2;
          return false; // Exit the loop early if missing information is found
      }
  });

    // Check checkboxes for unchecked status
    /*
    $checkboxes.each(function() {
        if (!$(this).prop("checked")) {
            missingInformation = 2;
            return; // Exit the loop early if missing information is found
        }
    });
    ?*/

    // Display appropriate alert
    if (missingInformation ==1) 
    {
      alert("basic Information missing");
    } 
    /*
    else if (missingInformation ==2)
    {
      alert("Basic CheckList missing");
    }
    */
    else if (missingInformation ==2)
   {
    alert("You need to click all correct images");
   }
    else {
        var popupboxName =  $(this).closest('.popup').attr('id');
        var parentnode = $(this).closest('.popup');
        
        $('.PopupBoxController').each(function() {
          var ariaControls = $(this).attr('aria-controls');
          if (ariaControls == popupboxName) {
            $(this).addClass('bg-success');
            $(this).addClass('text-white');

            parentnode.removeClass('popboxshow');
            $('body').removeClass('noscroll');
          }

        });

    }

  });

});
