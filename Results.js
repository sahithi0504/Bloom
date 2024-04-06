
let plantName = 'EmptyName';
let plantDescription = 'EmptyDescription';



function ScoringSystem(score) {
if (score >= 100) {
    plantName = PlantDataBase[questionArray[9]][0];
    plantRecommendation = PlantDataBase[questionArray[9]][1];
}
For (i = 0, i != 100, i+=10); {
  If (score >= i && score < i +10 ); {
  Break;

  plantName = PlantDataBase[questionArray[i/10]][0];
  plantRecommendation = PlantDataBase[questionArray[i/10]][1];

  }
  }
}

let questionArray = [];
score = 0;

function GetQuestionResult(PlantDataBaseScore, PointScore) {
    questionArray.push(PlantDataBaseScore);
    score += PointScore;
}


let PlantDataBase = [
  ["plant", "description"], // 1
  ["plant", "description"], // 2
  ["plant", "description"], // 3
  ["plant", "description"], // 4
  ["plant", "description"], // 5
  ["plant", "description"], // 6
  ["plant", "description"], // 7
  ["plant", "description"], // 8
  ["plant", "description"], // 9
  ["plant", "description"], // 10
  ["plant", "description"], // 11
  ["plant", "description"], // 12
  ["plant", "description"], // 13
  ["plant", "description"], // 14
  ["plant", "description"], // 15
  ["plant", "description"], // 16
  ["plant", "description"], // 17
  ["plant", "description"], // 18
  ["plant", "description"], // 19
  ["plant", "description"], // 20
  ["plant", "description"] //  21

];