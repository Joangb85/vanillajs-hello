window.onload = function() {

    let pronoun = ["A ", "The "];
    let adjective = ["two headed ", "nuclear ", "three-eyed ", "lazy ", "crazy ", "slow ", "old "];
    let noun = ["cat ", "racoon ", "rhino ", "turtle ", "grandpa ", "panda "];
    let action = ["took my ", "threw my ", "yelled at my ", "kicked my ", "stole my ", "burned my ", "ate my ", "broke my "];
    let possession = ["toe ", "car ", "watch ", "shoe ", "wallet ", "shirt ", "keys ", "computer ", "phone ", "money "];
    let where = ["on the street", "in my house", "at the disco", "in front of the office", "into the woods", "near the toilet", "at the bus station"];
  
    let proIndex = Math.floor(Math.random() * pronoun.length);  
    let adjIndex = Math.floor(Math.random() * adjective.length);
    let nounIndex = Math.floor(Math.random() * noun.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let possIndex = Math.floor(Math.random() * possession.length);
    let whereIndex = Math.floor(Math.random() * where.length);
  
    document.querySelector("#the-excuse").innerHTML = pronoun[proIndex] + ' ' + adjective[adjIndex] + ' ' + noun[nounIndex] + ' ' + action[actionIndex] + ' ' + possession[possIndex] + ' ' + where[whereIndex];
    
  };
  