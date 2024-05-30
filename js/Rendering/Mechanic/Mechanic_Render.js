/* index
1. mechanic Role

*/

//Mechanic Role ---------------------------------------------------------------------------------------------------
function MechanicRole ()
{
    let navLink  = `<li class="my-2"><hr/></li>
    <li><div class="sidebar-cap text-uppercase px-3 text-danger" id="OngoingTasks">Ongoing Tasks</div></li>
    <li>
      <a  class="nav-link tab-Selector px-3 text-danger" data-bs-target="#Ongoing_Breakdone_001"  aria-controls="Ongoing_Breakdone_001">
        <span class="me-2"><i class="bi bi-cone"></i></i></span><span>Breakdone_001</span>
      </a>
    </li>
    <li>
      <!-- Put Started Job-->
    </li>
    <li class="my-2"><hr/></li>
    <li><div class="sidebar-cap text-uppercase px-3">INTERFACE</div></li>
    <li>
      <a class="nav-link px-3 sidebar-link" data-bs-toggle="collapse" href="#TaskDropDown" role="button" aria-expanded="false" aria-controls="TaskDropDown">
        <span class="me-2"><i class="bi bi-list-task"></i></span>
        <span class="me-2">Start A Task</span>
        <span class="dropDownArrow"><i class="bi bi-arrow-down"></i></span>
      </a>
    </li>
    <div class="collapse" id="TaskDropDown">
      <div class="navbar-nav ps-3">
        <li>
          <a href="#" class="nav-link tab-Selector px-3" data-bs-target="#Mechanic_BreakDownReport"  aria-controls="Mechanic_BreakDownReport">
            <span class="me-2"><i class="bi bi-tools"></i></span>
            <span>Break Down Guide Task</span>
          </a>
        </li>
      </div>
    </div>
    `;

    $('#FunctionList').append(navLink);

    let Rolecontent = `          <div class="ViewTab" id="Mechanic_BreakDownReport">
    <div class="row">
      <div class="col-12">
        <div class="col-md-12 fw-bold fs-5 mt-3 mb-3">Breakdown Guide and Stats</div>
      </div>
    </div>

    <div class="row mt-5 gy-2"><!-- History Task / Active Task-->
      <div class="col-md-6"> <!-- History Task-->
        <div class="card bg-dark">
          <div class="card-body">
            <h5 class="card-title"><i class="bi bi-archive-fill me-2"></i>History Task</h5>
            <div class="card-table">
              <table class="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">Task#</th>
                    <th scope="col">Title</th>
                    <th scope="col">location</th>
                    <th scope="col">Requested Time</th>
                    <th scope="col">Finish Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">001</th>
                    <td>Engine Breakdown</td>
                    <td>23 crown st</td>
                    <td>13:25 15/07/2023</td>
                    <td>13:25 17/07/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6"><!--Active Task--->
        <div class="card bg-dark">
          <div class="card-body">
            <h5 class="card-title text-danger"><i class="bi bi-clock-history me-2"></i>Active Task</h5>
            <div class="card-table">
              <table class="table table-hover table-dark">
                <thead>
                  <tr>
                    <th scope="col">Task#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Detailed location</th>
                    <th scope="col">Requested Time</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">002</th>
                    <td>Engine Breakdown</td>
                    <td>56/23 crown st, Wollongong NSW 2500</td>
                    <td>13:25 15/07/2023</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="buttonTaskGroup d-flex justify-content-between mt-3" >
      <nav class="navbar">
        <form id="ShowAllTask" class="container-fluid justify-content-start d-none gx-2">
          <button class="btn btn-outline-success PopupBoxController me-2" data-bs-toggle="#Popup_task1" role="button" aria-expanded="false" aria-controls="Popup_task1" type="button">Task1</button>
          <button class="btn btn-outline-success PopupBoxController me-2" data-bs-toggle="#Popup_task2" role="button" aria-expanded="false" aria-controls="Popup_task2" type="button">Task2</button>
          <button class="btn btn-outline-success PopupBoxController me-2" data-bs-toggle="#Popup_task3" role="button" aria-expanded="false" aria-controls="Popup_task3" type="button">Task3</button>
          <button class="btn btn-danger me-2"  role="button" id="FinializePreDepature" type="button"> Finialize Pre-Depature</button>
        </form>
      </nav>
      <nav class="navbar">
        <form class="container-fluid justify-content-start">
          <button id="StartATask" class="btn btn-info me-2" type="button">Start the Task</button>
        </form>
      </nav>
    </div>

    <div class="row">
        <div class="col-12">
            <div class="card bg-dark text-white">
                <div class="card-body">
                    <h5 class="card-title text-primary"><i class="bi bi-check2-square me-2"></i>Selected Task - <span class="text-danger">Status: <span class="badge bg-danger">Urgent</span></span></h5>
                    <div class="row mt-3 g-3">
                        <div class="col-md-4 col-sm-6">
                            <h5>Task#: <span class="text-muted">001</span></h5>
                            <h5>Task Status: <span id="TaskStatus" class="text-muted">Active</span></h5>
                            <h5>Title: <span class="text-muted">Engine Breakdown</span></h5>
                            <h5>Job Type: <span class="text-muted">Mechanic</span></h5>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <h5>Detailed Location: <span class="text-muted">23/31 Crown st, Wollongong NSW 2500</span></h5>
                            <h5>Lat and Long: <span class="text-muted">-34.455368, 150.851887</span></h5>
                            <h5>Requested Time: <span class="text-muted">13:50 03/06/2024</span></h5>
                            <h5>Finished Time <span class="text-danger">(if applied)</span>: <span class="text-muted">13:50 03/06/2024</span></h5>
                        </div>
                        <div class="col-md-4 col-sm-6">
                            <h5>location of the bus keys: <span class="text-muted">Plugged in the bus</span></h5>
                            <h5>Any other assistance required. <span class="text-muted">Nah</span></h5>
                            <h5>Attended Member:</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row mt-2">
      <div class="col-12">
          <div class="card bg-dark text-white">
              <div class="card-body">
                <div class="row g-5">
                  <div class="col-md-4">
                    <h5>Your  Role: Mechanic</h5>
                    <h5>Job Description:</h5>
                    <textarea class="form-control" placeholder="The first player has a somewhat mysterious identity, like a princess from a certain country. The second player is a sword-bearing guard, whose duty is to support. The third player plays a prince, who has some conflicts with the princess." id="floatingTextarea2" style="height: 300px" disabled></textarea>
                    <h5>Required Tool:</h5>
                      <ul class="list-group">
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          Wrenches
                          <span class="badge text-bg-primary rounded-pill">14</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          patrol
                          <span class="badge text-bg-primary rounded-pill">2</span>
                        </li>
                        <li class="list-group-item d-flex justify-content-between align-items-center">
                          spare wheel
                          <span class="badge text-bg-primary rounded-pill">1</span>
                        </li>
                      </ul>
                  </div>
                  <div class="col-md-8">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13158.948836538095!2d150.847488!3d-34.45881815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b1310b31af47a29%3A0xf2b8b0cb1003af75!2sRSPCA%20NSW%20Illawarra%20Shelter!5e0!3m2!1sen!2sau!4v1710459280174!5m2!1sen!2sau" 
                      width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                  </div>
                </div>
               </div>
          </div>
      </div>
    </div>

  </div> <!-- div tab -->`;

    $('#ViewTabFunction').append(Rolecontent);
}


