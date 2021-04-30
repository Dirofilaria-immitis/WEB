var c1 = new mojs.Shape({
    shape:'circle',
    radius:{0:30},
    left:0,
    top:0,
    x:0,
    y:0,
    fill:'transparent',
    stroke:'tomato',
    strokeWidth:{20:0},
    duration:{0:500},
    delay:0
  });

  document.addEventListener('click', function(e){
    c1.generate().tune({x:e.pageX, y:e.pageY}).replay();
  });

