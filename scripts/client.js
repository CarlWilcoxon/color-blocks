console.log('js');

let redCount = 0;
let blueCount = 0;
let greenCount = 0;
let yellowCount = 0;

$(document).ready(onReady);

function onReady() {
  console.log('DOM ready');
  $('button').on('click', addBlock);
  $('table').on('click', '.block', toggleBlock);
  
}

function addBlock () {
  console.log(this);
  
  $('table').last('tr').append(`<tr>
  <td><div class="block invisible red"></div></td>
      <td><div class="block invisible blue"></div></td>
      <td><div class="block invisible green"></div></td>
      <td><div class="block invisible yellow"></div></td>
    </tr>`);
  
  
  if ($(this).is('#btnRedAdd')) {
    console.log('this is the red button');
    findNext();
  }
  
  updateColorCount();
}

function findNext() {
  
}
function toggleBlock() {
  console.log(this);
  if ($(this).hasClass('red')) {
    if ($(this).hasClass('invisible')) {
      redCount++;
    } else {
      redCount--;
    }
  } else if ($(this).hasClass('blue')) {
    if ($(this).hasClass('invisible')) {
      blueCount++;
    } else {
      blueCount--;
    }
  } else if ($(this).hasClass('green')) {
    if ($(this).hasClass('invisible')) {
      greenCount++;
    } else {
      greenCount--;
    }
  } else if ($(this).hasClass('yellow')) {
    if ($(this).hasClass('invisible')) {
      yellowCount++;
    } else {
      yellowCount--;
    }
  }
  $(this).toggleClass('invisible');
  updateColorCount();
}

function updateColorCount() {
  $('#redSum').empty();
  $('#redSum').append(redCount);
  $('#blueSum').empty();
  $('#blueSum').append(blueCount);
  $('#greenSum').empty();
  $('#greenSum').append(greenCount);
  $('#yellowSum').empty();
  $('#yellowSum').append(yellowCount);
}