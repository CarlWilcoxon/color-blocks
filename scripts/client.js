console.log('js');

let redCount = 0;
let blueCount = 0;
let greenCount = 0;
let yellowCount = 0;

$(document).ready(onReady);

function addBlock () {
  console.log(this);
  
  //add a row
  $('table').last('tr').append(`<tr>
  <td><div class="block invisible red"></div></td>
      <td><div class="block invisible blue"></div></td>
      <td><div class="block invisible green"></div></td>
      <td><div class="block invisible yellow"></div></td>
    </tr>`);
  
  //find the first invisible block and make it visible
  if ($(this).is('#btnRedAdd')) {
    console.log('this is the red button');
    toggleBlock.call( $ ('.red.invisible').first());
  }  else if ($(this).is('#btnBlueAdd')) {
    console.log('this is the blue button');
    toggleBlock.call( $ ('.blue.invisible').first());
  }  else if ($(this).is('#btnGreenAdd')) {
    console.log('this is the green button');
    toggleBlock.call( $ ('.green.invisible').first());
  }  else if ($(this).is('#btnYellowAdd')) {
    console.log('this is the yellow button');
    toggleBlock.call( $ ('.yellow.invisible').first());
  }
  
  updateColorCount();
}

function onReady() {
  console.log('DOM ready');
  $('button').on('click', addBlock);
  $('table').on('click', '.block', toggleBlock);
  
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