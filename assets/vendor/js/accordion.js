

$('.accordion-button').on('keydown',function (e) {
 
 
    $('.accordion-collapse').collapse("toggle")
   
    
  })

/** */
$('.tabel-table').on('keydown','tr td',function (e) {
    var keyCode = e.keyCode;
    if (keyCode !== 9) return;

    var $this = $(this),
        $lastTr = $('tr:last', $('table')),
        $lastTd = $('td:last', $lastTr);

    
    if (($(e.target).closest('td')).is($lastTd)) {
     

        $lastTr.after($lastTr.clone());
      
    }
    
});
/**** */
function optionCheck() {
   var i, len, optionVal, helpDiv,
       selectOptions = document.getElementById("select-Lawyer-type");

   // loop through the options in case there
   // are multiple selected values
   for (i = 0, len = selectOptions.options.length; i < len; i++) {

       // get the selected option value
       optionVal = selectOptions.options[i].value;

       // find the corresponding help div
       helpDiv = document.getElementById("help" + optionVal);

       // move on if we didn't find one
       if (!helpDiv) { continue; }

       // set CSS classes to show/hide help div
       if (selectOptions.options[i].selected) {
           helpDiv.className = "helpText helpTextShow";
       } else {
           helpDiv.className = "helpText";
       }
   }
}
/************************ */
function addField(n)
{
    var tr = n.parentNode.parentNode.cloneNode(true);
    document.getElementById('tbl').appendChild(tr);
    var removeButton = tr.getElementsByTagName("button")[1];
    removeButton.parentNode.removeChild(removeButton);
  
}
$(document).ready(function(){
  $("#my-table").on('click','.btnDelete',function(){
      $(this).closest('tr').remove();
   });
   
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            $('#imagePreview').css('background-image', 'url('+e.target.result +')');
            $('#imagePreview').hide();
            $('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
  }
  $("#imageUpload").change(function() {
    readURL(this);
  });
