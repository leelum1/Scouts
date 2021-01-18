$(document).ready( function () {
  let headerHTML = `    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                          <a class="navbar-brand" href="../index.html">
                            <span id="heading">1TSS</span>
                          </a>
                          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                          </button>
                          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                              <a class="nav-item nav-link" href="../activities.html">Activities</a>
                              <a class="nav-item nav-link" href="learning.html">Learning Resources</a>
                              <a class="nav-item nav-link" href="../patrols.html">Patrols</a>
                              <a class="nav-item nav-link" href="../contact.html">Contact</a>
                            </div>
                          </div>
                        </nav>`;

  let header = document.getElementsByTagName('header')[0];
  header.innerHTML = headerHTML;

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
});
