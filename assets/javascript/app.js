var firebaseConfig = {
    apiKey: "AIzaSyAZIBYVq-WTqU9wVnyFnSRT_kaLtOXAow4",
    authDomain: "eashl-e43b9.firebaseapp.com",
    databaseURL: "https://eashl-e43b9.firebaseio.com",
    projectId: "eashl-e43b9",
    storageBucket: "eashl-e43b9.appspot.com",
    messagingSenderId: "310254425122",
    appId: "1:310254425122:web:6100b05d2f417e8a11e67b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


 var database = firebase.database();






var murphPoints = 2;

var mpoints = document.getElementById("murphpointscount")

var murphGoalCount = 1;


var countEl = document.getElementById("murphGoalCount");

function murphplus() {
  murphGoalCount++;
    mpoints.value ++
  countEl.value = murphGoalCount;

  database.ref().set({
        murphScoredGoal: murphGoalCount,
        murphPoints: mpoints.value
      });


}

function murphminus() {
  if (murphGoalCount > 1) {
    murphGoalCount--;
    countEl.value = murphGoalCount;
  }
}

var murphastcount = 1;

var countAs = document.getElementById("murphastcount");

function murphassplus() {
  murphastcount++;
mpoints.value++
  countAs.value = murphastcount;

  database.ref().set({
        murphasst: murphastcount,
        murphPoints: mpoints.value
      });

}

function murphassminus() {
  if (murphastcount > 1) {
    murphastcount--;
    countAs.value = murphastcount;
  }
}
