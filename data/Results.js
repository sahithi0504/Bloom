
let plantName = 'EmptyName';
let plantDescription = 'EmptyDescription';
let ImgNum = 1;
score = 0;



function ScoringSystem() {
  if (score >= 100) {
      plantName = PlantDataBase[questionArray[9]][0];
      plantDescription = PlantDataBase[questionArray[9]][1];
  }
  for (let i = 0; i < 100; i += 10) {
      console.log("I:" + i);
      let k = i + 10;
      if (score >= i && score < k) {
          console.log("passed");
          plantName = PlantDataBase[questionArray[i / 10]][0];
          plantDescription = PlantDataBase[questionArray[i / 10]][1];
          console.log(plantName);
          console.log(score + ">" + i);
          break;
      }
  }
}

let questionArray = [];


function GetQuestionResult(PlantDataBaseScore, PointScore) {
    questionArray.push(PlantDataBaseScore);
    score += PointScore;
   console.log("Point score: " + score);
    questionArray.forEach(item => {
      console.log(item);
  });
}

function getPlantName() {
  return plantName;
}

function getPlantIMG() {
  return plantDescription;
}





let PlantDataBase = [
  ["Snake Plant (Sansevieria)", "Someone who is creative or as a housewarming gift because it naturally purifies the air"], // 1
  ["Bird of Paradise (Strelitzia)", "Brings a tropical vibe to any space with its striking foliage and vibrant flowers"], // 2
  ["Ponytail Palm (Beaucarnea recurvata)", "A unique addition to any room with its whimsical, cascading leaves and low-maintenance care requirements"], // 3
  ["Peace Lily (Spathiphyllum)", "A classic choice known for its elegant white blooms and ability to thrive in low-light conditions"], // 4
  ["Fiddle Leaf Fig (Ficus lyrata)", "Makes a bold statement with its large, violin-shaped leaves, perfect for adding a touch of sophistication to any room"], // 5
  ["Rubber Plant (Ficus elastica)", "Adds a touch of drama with its glossy, deep-green foliage, ideal for brightening up any corner"], // 6
  ["ZZ Plant (Zamioculcas zamiifolia)", "A durable and resilient plant known for its glossy, dark-green leaves, making it perfect for beginners or frequent travelers"], // 7
  ["Spider Plant (Chlorophytum comosum)", "An air-purifying powerhouse with cascading foliage, ideal for hanging baskets or as a tabletop accent"], // 8
  ["Cast Iron Plant (Aspidistra elatior)", "Thrives in low-light conditions and is virtually indestructible, making it a perfect choice for beginners or forgetful gardeners"], // 9
  ["Lavender (Lavandula)", "Known for its calming aroma and beautiful purple blooms, making it ideal for relaxation and stress relief"], // 10
  ["Calathea (Calathea spp.)", "Features striking patterns on its leaves and thrives in humidity, perfect for adding a touch of exotic beauty to any indoor space"], // 11
  ["Philodendron (Philodendron spp.)", "An easy-to-care-for plant with lush, trailing foliage, making it perfect for hanging baskets or as a floor plant"], // 12
  ["Aloe Vera (Aloe vera)", "A versatile plant with medicinal properties, known for its soothing gel and ability to thrive in dry conditions"], // 13
  ["Chamomile (Matricaria chamomilla)", "Produces delicate, daisy-like flowers that can be harvested for herbal tea, known for its calming and soothing effects"], // 14
["Lavender (Lavandula)", "Known for its calming aroma and beautiful purple blooms, making it ideal for relaxation and stress relief"], // 15
  ["English Ivy (Hedera helix)", "A classic trailing vine that adds a touch of elegance to any space, ideal for hanging baskets or as a ground cover"], // 16
["Snake Plant (Sansevieria)", "Someone who is creative or as a housewarming gift because it naturally purifies the air"], // 17
["Pothos (Epipremnum aureum)", "A low-maintenance plant with heart-shaped leaves that thrives in a variety of lighting conditions, perfect for beginners"], // 18
["Spider Plant (Chlorophytum comosum)", "An air-purifying powerhouse with cascading foliage, ideal for hanging baskets or as a tabletop accent"], // 19
["Dracaena (Dracaena spp.)", "Comes in a variety of shapes, sizes, and colors, known for its air-purifying properties and ability to thrive in low light"], // 20
["Snake Plant (Sansevieria)", "Someone who is creative or as a housewarming gift because it naturally purifies the air"], // 21
["Areca Palm (Dypsis lutescens)", "Adds a touch of the tropics with its feathery fronds and elegant appearance, ideal for bringing a sense of relaxation to any space"], // 22
  ["Bamboo Palm (Chamaedorea elegans)", "A compact palm with graceful, arching fronds that thrives in low light and adds a tropical touch to any room"], // 23
["Peace Lily (Spathiphyllum)", "A classic choice known for its elegant white blooms and ability to thrive in low-light conditions"], // 24
["Succulents (Various species)", "Known for their unique shapes and vibrant colors, succulents are low-maintenance plants that thrive in bright, sunny locations"], 
  ["Snake Plant (Sansevieria)", "Someone who is creative or as a housewarming gift because it naturally purifies the air"], // 
["ZZ Plant (Zamioculcas zamiifolia)", "A durable and resilient plant known for its glossy, dark-green leaves, making it perfect for beginners or frequent travelers"], // 
["Peace Lily (Spathiphyllum)", "A classic choice known for its elegant white blooms and ability to thrive in low-light conditions"], // 24
 ["ZZ Plant (Zamioculcas zamiifolia)", "A durable and resilient plant known for its glossy, dark-green leaves, making it perfect for beginners or frequent travelers"], // 

["Boston Fern (Nephrolepis exaltata)", "A classic fern with delicate, feathery fronds that add a touch of lush greenery to any room, ideal for humid environments" ],

["Peace Lily (Spathiphyllum)", "A classic choice known for its elegant white blooms and ability to thrive in low-light conditions"], // 24
["Snake Plant (Sansevieria)", "Someone who is creative or as a housewarming gift because it naturally purifies the air"] //
];

/*



*/



export {GetQuestionResult, ScoringSystem, getPlantName,getPlantIMG};
