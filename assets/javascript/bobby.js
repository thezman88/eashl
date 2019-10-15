var bobPoints = 2;

var bpoints = document.getElementById("bobpointscount")

var bobGoalCount = 1;


var countB = document.getElementById("bobGoalCount");

function bobplus() {
  bobGoalCount++;
    bpoints.value ++
  countB.value = bobGoalCount;



}

function bobhminus() {
  if (bobhGoalCount > 1) {
    bobGoalCount--;
    countB.value = bobGoalCount;
  }
}

var bobastcount = 1;

var countBAs = document.getElementById("bobastcount");

function bobassplus() {
  bobastcount++;
bpoints.value++
  countBAs.value = bobastcount;


}

function bobassminus() {
  if (bobastcount > 1) {
    bobastcount--;
    countBAs.value = bobastcount;
  }
}
