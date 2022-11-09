function expandAll() {
  var x = document.getElementsByTagName("details");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].setAttribute("open", "true");
  }
  document.getElementById('expand').innerText = "Collapse All";
  document.getElementById('expand').setAttribute('onclick', 'javascript: collapseAll();');
}

function collapseAll() {
  var x = document.getElementsByTagName("details");
  var i;
  for (i = 0; i < x.length; i++) {
    x[i].removeAttribute("open");
  }
  document.getElementById('expand').innerText = "Expand All"
  document.getElementById('expand').setAttribute('onclick', 'javascript: expandAll();');
}
