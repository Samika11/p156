// Registering component in Target.js

AFRAME.registerComponent("treasure", {
    init: function () {
      for (var i = 1; i <= 20; i++) {
        //id
        var id = `treasure${i}`;
  
        //position variables     
        var posX =(Math.random() * 3000 + (-1000));      
        var posY = (Math.random() * 2 + (-1));
        var posZ = (Math.random() * 3000 + -1000);
  
        var position = { x: posX, y: posY, z: posZ };
  
        //call the function
        this.createTreasure(id, position);
      }
    } ,
  
    createRings: function(id, position) { 
      
      var terrainEl = document.querySelector("#terrain");
  
      var treasureEl = document.createElement("a-entity");
  
      treasureEl.setAttribute("id",id);
      treasureEl.setAttribute("position",position);
      
      treasureEl.setAttribute("scale",{x:500,y:500,z:500});
      
      treasureEl.setAttribute("gltf-model","C:/Users/vikas/Downloads/Project 153/PRO-C153-Student-Activity-main/assets/models/treasure_chest/scene.gltf");
      treasureEl.setAttribute("animation-mixer",{});  

      treasureEl.setAttribute("static-body",{
        shape:"sphere",
        sphereRadius:2
      })
      treasureEl.setAttribute("game-play",{
        elementId:`#${id}`
      }) 
  
  
      terrainEl.appendChild(treasureEl);
    }
  });
  
  