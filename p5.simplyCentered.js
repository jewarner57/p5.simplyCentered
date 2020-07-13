p5.prototype.createCenteredCanvas = function (cWidth, cHeight, centerVertically, useFlex) {
  let canvasWidth = cWidth;
  let canvasHeight = cHeight;

  let wrapper = createDiv('');
  wrapper.id('canvasWrapper');

  //if the useFlex parameter is not defined then set flex to true
  let flex = (typeof useFlex === 'undefined') ? true : useFlex;

  if (flex) {

    wrapper.style('width', '100%');
    wrapper.style('display', 'flex');
    wrapper.style('justify-content', 'center');

    if (centerVertically) {
      wrapper.style('height', '100%')
      wrapper.style('align-items', 'center')
    }


  } else {
    wrapper.style('width', canvasWidth + 'px');


    if (centerVertically) {
      wrapper.style('position', 'absolute')

      wrapper.style('top', '0')
      wrapper.style('left', '0')
      wrapper.style('bottom', '0')
      wrapper.style('right', '0')

      wrapper.style('height', canvasHeight + 'px')
      wrapper.style('margin', 'auto');
    }
    else {
      wrapper.style('height', '100%')
      wrapper.style('margin', '0 auto')
    }
  }

  let canvas = createCanvas(canvasWidth, canvasHeight);
  canvas.parent('canvasWrapper');
};
