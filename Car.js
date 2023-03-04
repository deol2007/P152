// Registering component in box-component.js
AFRAME.registerComponent('move-view-on-click', {
  schema: {
    moveX: { type: "number", default: 0 }
    
  },
  

  tick: function () {
    
    window.addEventListener("click", (e) => {
    clickCounter = clickCounter + 1;
    });
    this.data.moveX = this.data.moveX + clickCounter*0.05;
    var pos = this.el.getAttribute("position");
    pos.x = pos.x + this.data.moveX;
    this.el.setAttribute("position", { x: pos.x, y: pos.y, z: pos.z });
  }
  });