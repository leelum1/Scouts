$(document).ready( function () {
  let headerHTML = `    <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                          <a class="navbar-brand" href="index.html">
                            <span id="heading">1TSS</span>
                          </a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                              <a class="nav-item nav-link" href="activities.html">Activities</a>
                              <a class="nav-item nav-link" href="learning/learning.html">Learning Resources</a>
                              <a class="nav-item nav-link" href="patrols.html">Patrols</a>
                              <a class="nav-item nav-link" href="contact.html">Contact</a>
                            </div>
                          </div>
                        </nav>`;

  let header = document.getElementsByTagName('header')[0];
  if (header) {
      header.innerHTML = headerHTML;
  };


  let footerHTML = `<div class="container-fluid">
                      <div class="row">
                        <div class="col-3">
                          <a target="_blank" href="https://www.instagram.com/1sttss/?hl=en"><img class="social-link" src="http://1tss.org/images/Instagram.png" alt=""></a>
                        </div>
                        <div class="col-9">
                          <p id="copyright">Copyright 2020 First Trinidad Sea Scouts, Est. 1922.</p>
                        </div>
                      </div>
                    </div>`;

  let footer = document.getElementsByTagName('footer')[0];
  footer.innerHTML = footerHTML;

  let joinUsHTML = `<div class="container-fluid" style="background-color:#B343EE; padding:18vh 5% 20vh 5%;">
                      <h2 style="color:white;font-size:40px;">Join us Today!</h2>
                      <p style="color:white;margin:auto;max-width:800px;text-align:center;">To
                        become a member, fill out the form from the link below. If
                        you have any questions, feel free to
                        <a href="contact.html" style="color:white; text-decoration:underline;">contact us here.</a>
                      </p>
                      <div style="margin-top: 20px;text-align:center;">
                        <a class="btn btn-success" href="https://docs.google.com/forms/d/12ff23mRby-Yh_4kpGempKgTZNnt1PEmfPm_cVRkBQY8/viewform?ts=5f96266f&gxids=7628&edit_requested=true" style="padding: 10px 20px 10px 20px;">Application Form</a>
                      </div>
                    </div>`;

  let joinUs = document.getElementById('joinUs');
  if (joinUs) {
    joinUs.innerHTML = joinUsHTML;
  }
});
