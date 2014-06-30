var inherit   = require('scripts/inherit');
var ShapeTool = require('scripts/shape-tool');
var Util      = require('scripts/util');

function LineTool(name, selector, drawTool) {
  ShapeTool.call(this, name, selector, drawTool);

  var self = this;
  this.addEventListener("mouse:down", function (e) { self.mouseDown(e); });
  this.addEventListener("mouse:move", function (e) { self.mouseMove(e); });
  this.addEventListener("mouse:up", function (e) { self.mouseUp(e); });
}

inherit(LineTool, ShapeTool);

LineTool.prototype.mouseDown = function (e) {
  console.log("down");
  LineTool.super.mouseDown.call(this, e);

  var x = e.e.offsetX;
  var y = e.e.offsetY;

  this.curr = new fabric.Line([x,y,x,y],{ selectable: false });
  this.canvas.add(this.curr);
};

LineTool.prototype.mouseMove = function (e) {
  LineTool.super.mouseMove.call(this, e);
  if (this.down === false) { return; }
  var x = e.e.offsetX,
      y = e.e.offsetY;
  this.curr.set('x2', x);
  this.curr.set('y2', y);
  this.canvas.renderAll(false);
};

LineTool.prototype.mouseUp = function (e) {
  console.log("line up");
  LineTool.super.mouseUp.call(this, e);
  this.canvas.remove(this.curr);

  var x1 = this.curr.get('x1'),
      y1 = this.curr.get('y1'),
      x2 = this.curr.get('x2'),
      y2 = this.curr.get('y2');
  if(this.moved && Util.dist(x2 - x1, y2 - y1) > 3){
    var newLine = new fabric.Line([x1, y1, x2, y2], {});
    this.canvas.add(newLine);
    this.actionComplete(newLine);
    console.log("new line constructed");
  } else {
    this.exit();
  }
  this.curr = undefined;
};

module.exports = LineTool;
