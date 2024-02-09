let pronoun = ['the', 'our'];
  let adj = ['great', 'big'];
  let noun = ['jogger', 'racoon'];
  let extension = ['.com','.es','.net'];

  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
        for (let h = 0; h < noun.length; h++) {
            for (let k = 0; k < extension.length; k++) {
                console.log(pronoun[i] + adj[j] + noun[h] + extension[k]);    
            }

            
        }
        
    }
    
    
  }