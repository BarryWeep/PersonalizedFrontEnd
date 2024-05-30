const checklistData = [
    {
      category: 'WHERE BUS IS STOPPED',
      items: [
        'AWAY FROM INTERSECTIONS, BENDS OR CORNER',
        'ON HARD ROAD OR SHOULDER SURFACE',
        'ON FLAT ROAD OR SHOULDER',
        'GOOD LINE OF SIGHT FOR ONCOMING TRAFFIC',
        'SUFFICIENT SPACE FOR BUS AND WORKSHOP VEHICLE',
        'CLEARANCE FROM OTHER TRAFFIC (3M IS IDEAL)'
      ]
    },
    {
      category: 'SECURING THE BUS',
      items: [
        'BUS GEAR IN PARK OR NEUTRAL',
        'PARKING BRAKE APPLIED',
        'ENGINE TURNED OFF AND KEYS REMOVED FROM THE BUS',
        'HAZARD LIGHTS ON',
        'PASSENGERS ADVISED TO REMAIN ON BUS (UNLESS DANGER)',
        'HI-VIS VEST WORN'
      ]
    },
    {
      category: 'EVACUATION OF PASSENGERS (ONLY WHERE NECESSARY)',
      items: [
        'INSTRUCTED TO EVACUATE IN ORDERLY MANNER',
        'MARSHALLS APPOINTED FOR VULNERABLE PASSENGERS',
        'ESCORTED TO SAFE PLACE AWAY FROM BUS/TRAFFIC'
      ]
    }
  ];

  // Function to generate HTML for the checklist
  function generateChecklistHTML(data) {
    let html = '<form class="row g-2">';
    data.forEach(category => {
      html += `<h5>${category.category}</h5>`;
      category.items.forEach(item => {
        const itemId = item.replace(/ /g, '-');
        html += `
            <div class="col-md-4">
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
                    <div class="form-group" id="${itemId}-comments-container" style="display:none;">
                    <textarea class="form-control" id="${itemId}-comments" rows="2" placeholder="Comments"></textarea>
                    </div>
                </div>
            </div>`;
      });
      html += '<hr/>';
    });
    html += '</form>';
    return html;
  }




  // Generate and append the HTML to the document body
  const checklistHTML = generateChecklistHTML(checklistData);
  $('.BreakdownChecklist').html(checklistHTML);




  // Function to show/hide comments based on radio button selection
  function toggleComments(itemId, value) {
    const commentsContainer = document.getElementById(`${itemId}-comments-container`);
    if (value === 'no') {
      commentsContainer.style.display = 'block';
    } else {
      commentsContainer.style.display = 'none';
    }
  }

  // Add event listeners to radio buttons
  document.querySelectorAll('input[type="radio"]').forEach(input => {
    input.addEventListener('change', function() {
      const itemId = this.name.replace(/ /g, '-');
      toggleComments(itemId, this.value);
    });
  });


  // Hide all comment fields initially
  document.querySelectorAll('.form-group[id$="-comments-container"]').forEach(container => {
    container.style.display = 'none';
  });

  //-------------------------------------------------------Driver Breakdown List--------------------------------------

