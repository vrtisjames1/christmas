$(() => {
const giftGiver = [];
const giftRx = [];
let statement = true;
$('#accept').hide()
$('#reroll').hide()
$('#input2').hide()
$('#submit2').hide()
$('#step2').hide()

  let nameCollect  = null;
  let start = 0;

const $submitName = () => {

  nameCollect = $(`#input`).val().toLowerCase();
  giftGiver.push(nameCollect);
  giftRx.push(nameCollect);
  for (let i = start; i< giftGiver.length; i++){
    start++;
    const namesList = $(`<li>`).text(giftGiver[i]).attr(`id`,`nameCollect`).appendTo(`#giver`)
    $(namesList).clone().appendTo(`#rx`)
  }
  $(`#input`).val(``);
}

const $complete = () => {
  $('#input2').show()
  $('#submit2').show()
  $('#step2').show()
  $('#step1').hide()
  $('#submit').hide()
  $('#complete').hide()
    $('#input').hide()
}


//gather results of who is buygin gifts for who

const $resultsHeader = $(`<h2>`).attr(`id`,`again`);

const $results = () => {

$resultsHeader.remove();

nameCollect2 = $(`#input2`).val().toLowerCase();
$('#submit2').hide()
$('#accept').show()
$('#reroll').show()
$('#submit').hide()
$('#input').hide()
if(statement == true){

  if(giftGiver.includes(nameCollect2) == false){
        $resultsHeader.text(`Correct name spelling`).appendTo(`#resultsList`);

} else if(giftGiver.length == 2 && giftGiver[0] == giftRx[0]){
    const $resultsHeader3 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[0]} will buy a gift for ${giftRx[1]}`).appendTo(`#resultsList`);
      $(`#giver`).children().eq(1).remove();
      $(`#giver`).children().eq(0).remove();
      $(`#rx`).children().eq(1).remove();
      $(`#rx`).children().eq(0).remove();
      $(`#input2`).val(``);


        const $resultsHeader4 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[1]} will buy a gift for ${giftRx[0]}`).appendTo(`#resultsList`);
} else if (giftGiver.length == 2 && giftGiver[0] == giftRx[1]){
    const $resultsHeader3 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[0]} will buy a gift for ${giftRx[0]}`).appendTo(`#resultsList`);
    $(`#giver`).children().eq(1).remove();
    $(`#giver`).children().eq(0).remove();
    $(`#rx`).children().eq(1).remove();
    $(`#rx`).children().eq(0).remove();
    $(`#input2`).val(``);


        const $resultsHeader4 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[1]} will buy a gift for ${giftRx[1]}`).appendTo(`#resultsList`);

} else if (giftGiver.length == 2 && giftGiver[1] == giftRx[1]){
    const $resultsHeader3 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[0]} will buy a gift for ${giftRx[1]}`).appendTo(`#resultsList`);
    $(`#giver`).children().eq(1).remove();
    $(`#giver`).children().eq(0).remove();
    $(`#rx`).children().eq(1).remove();
    $(`#rx`).children().eq(0).remove();
    $(`#input2`).val(``);


        const $resultsHeader4 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[1]} will buy a gift for ${giftRx[0]}`).appendTo(`#resultsList`);

} else if (giftGiver.length == 1){
  const $resultsHeader3 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[0]} will buy a gift for ${giftRx[0]}`).appendTo(`#resultsList`);
  $(`#input2`).val(``);
} else {

let randomNum = Math.floor((Math.random()*giftRx.length));
 console.log(giftGiver);
    console.log(giftRx);



        if (nameCollect2 == giftRx[randomNum]){
          $resultsHeader.text(`${nameCollect2} Draw Again`).appendTo(`#resultsList`);
          $resultsHeader.children().last().remove();
          $('#accept').hide()
          return;


        } else {
          statement = false;

            if (giftGiver.indexOf(nameCollect2) == giftGiver[randomNum]){
              $resultsHeader.text(`Try again`).appendTo(`#resultsList`);
            } else {

            const $resultsHeader2 = $(`<h2>`).attr(`id`,`results2`).text(`${nameCollect2} will buy a gift for ${giftRx[randomNum]}`).appendTo(`#resultsList`);

            }
        }
      }
    }
    statement=false;
  }
// giftGiver.includes(nameCollect2.toLowerCase()) == false ||

      const $accept = () => {
        $('#submit2').show()
        $('#accept').hide()
        $('#reroll').hide()
        statement = false;
        const $first = $('#resultsList').children().last().text();
        const $first1 = $first.split(" ")
        $(`#input2`).val(``);

        for ( let i = 0 ; i < giftGiver.length; i++){
          if ($first1[0] == giftGiver[i])
          {
              $(`#giver`).children().eq(i).remove();
              giftGiver.splice(i, 1);
          }}
        for ( let i = 0 ; i < giftRx.length; i++){
          if ($first1[$first1.length-1] == giftRx[i])
          {
              $(`#rx`).children().eq(i).remove();
              giftRx.splice(i, 1);
          }}

          if (giftGiver.length == 1){
            const $resultsHeader3 = $(`<h2>`).attr(`id`,`results2`).text(`${giftGiver[0]} will buy a gift for ${giftRx[0]}`).appendTo(`#resultsList`);
            $(`#input2`).val(``);
            $(`#giver`).children().eq(0).remove();
            $(`#rx`).children().eq(0).remove();
          }
          statement=true;
      }

const $reroll = () => {
  $('#resultsList').children().last().remove();
  statement = true;
  $results();
}

const $refresh = () => {
  location.reload();
}


      $('#submit').on('click', $submitName);
      $('#submit2').on('click', $results);
      $('#accept').on('click', $accept);
      $('#reroll').on('click', $reroll);
      $('#complete').on('click', $complete);
      $('#refresh').on('click', $refresh);

})
