

AFRAME.registerComponent("fish", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `hurdle${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createFishes(id, position);
      }
    } ,
  
    createBirds: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var fishEl = document.createElement("a-entity");
  
      fishEl.setAttribute("id",id);
      fishEl.setAttribute("position",position);
      
      fishEl.setAttribute("scale",{x:500,y:500,z:500});
      
      fishEl.setAttribute("gltf-model","C:/Users/vikas/Downloads/Project 153/PRO-C153-Student-Activity-main/assets/models/shiny_fish/scene.gltf");
      fishEl.setAttribute("animation-mixer",{});   
      fishEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:5
      })
      fishEl.setAttribute("game-play",{
        elementId:`#${id}`
      })
  
      terrainEl.appendChild(fishEl);
    }
  });
  