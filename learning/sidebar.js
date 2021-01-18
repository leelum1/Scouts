let sidebarHTML = ` <a class="nav-category" href="learning.html">Learning Home</a>
                    <a class="nav-category" href="advancement-scheme.html">Advancement Scheme</a>
                    <button class="nav-category" id="principles-button" type="button" onclick="showSubCategory('principles')" name="button" value="rightArrow">
                      <div class="arrow" id="principles-arrow"></div>
                      Scouting Principles
                    </button>
                    <div class="nav-subcategories" id="principles">
                      <a class="nav-category subcategory" href="principles-1-promise-motto-law.html">Scout Promise, Law, and Motto</a>
                      <a class="nav-category subcategory" href="principles-2-sign-salute-handshake.html">Scout Sign, Salute, and Handshake</a>
                      <a class="nav-category subcategory" href="principles-3-the-patrol-method.html">The Patrol Method</a>
                      <a class="nav-category subcategory" href="principles-4-history-of-scouting.html">History of Scouting</a>
                      <a class="nav-category subcategory" href="principles-5-scouting-membership.html">Scouting Membership</a>
                    </div>

                    <button class="nav-category" id="patriotism-button" type="button" onclick="showSubCategory('patriotism')" name="button">
                      <div class="arrow" id="patriotism-arrow"></div>
                      Patriotism & Citizenship
                    </button>
                    <div class="nav-subcategories" id="patriotism">
                      <a class="nav-category subcategory" href="citizenship-1-anthem-pledge.html">National Anthem and Pledge</a>
                      <a class="nav-category subcategory" href="citizenship-2-flag-ettiquette-history.html">Flag Ettiquette & History</a>
                      <a class="nav-category subcategory" href="citizenship-4-local-government.html">Local Government</a>
                    </div>

                    <button class="nav-category" id="health-button" type="button" onclick="showSubCategory('health')" name="button">
                      <div class="arrow" id="health-arrow"></div>
                      Health & Safety
                    </button>
                    <div class="nav-subcategories" id="health">
                      <a class="nav-category subcategory" href="health-2-first-aid.html">First Aid</a>
                      <a class="nav-category subcategory" href="health-3-emergency.html">Emergency Preparedness and Response</a>
                      <a class="nav-category subcategory" href="health-4-fire.html">Fire Safety</a>
                    </div>

                    <button class="nav-category" id="outdoor-skills-button" type="button" onclick="showSubCategory('outdoor-skills')" name="button">
                      <div class="arrow" id="outdoor-skills-arrow"></div>
                      Outdoor Skills
                    </button>
                    <div class="nav-subcategories" id="outdoor-skills">
                      <a class="nav-category subcategory" href="outdoor-1-knots.html">Knots</a>
                    </div>

                    <button class="nav-category" id="sea-scout-button" type="button" onclick="showSubCategory('sea-scout')" name="button">
                      <div class="arrow" id="sea-scout-arrow"></div>
                      Sea Scout Skills
                    </button>
                    <div class="nav-subcategories" id="sea-scout">
                      <a class="nav-category subcategory" href="#">Coming Soon!</a>
                    </div>
                    `;

let downArrow = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" height=25 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>';

let rightArrow = '<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" class="svg-inline--fa fa-chevron-right fa-w-10" height=25 role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path></svg>';

function showSubCategory(subcategory){
  $('#'+ subcategory).toggle();
  if ($('#'+ subcategory +'-button').val() == 'downArrow') {
    $('#'+ subcategory +'-arrow').html(rightArrow);
    $('#'+ subcategory +'-button').val('rightArrow');
  }else {
    $('#'+ subcategory +'-arrow').html(downArrow);
    $('#'+ subcategory +'-button').val('downArrow');
  }
};

$(document).ready( function () {
  $('.sidebar').html(sidebarHTML);
  $('.nav-subcategories').hide();
  $('.arrow').html(rightArrow);
});
