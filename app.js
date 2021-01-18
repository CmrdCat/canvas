PIXI.utils.sayHello()


const app = new PIXI.Application({
   width: 800,
   height: 600,
   backgroundColor: 0x1099bb,
});

let count = 0;
let currentItem;

const list = document.querySelector('.list');
const checkbox = document.querySelector('.checkbox');
const about = document.querySelector('.about');
const remove = document.querySelector('.remove');

remove.onclick = () => {
   app.stage.removeChild(currentItem)
   updateIndex()
   changeList()
}


const bgImage = PIXI.Texture.from('plan.jpg')
const background = new PIXI.Sprite(bgImage);
app.stage.addChild(background);
background.width = app.screen.width;
background.height = app.screen.height;

document.body.appendChild(app.view);

const catTexture = PIXI.Texture.from('cat.png')
const catTexture2 = PIXI.Texture.from('cat2.png')
let texture = catTexture

checkbox.onchange = () => {
   if (checkbox.checked) {
      texture = catTexture2
   } else {
      texture = catTexture
   }
}

const mousePosition = new PIXI.Point();
let RightMouse = false;

app.view.addEventListener("contextmenu", function (ev) {
   ev.preventDefault();
}, false);

app.view.onclick = (ev) => {
   mousePosition.set(ev.layerX, ev.layerY); // get global position
   // returns element directly under mouse
   const found = app.renderer.plugins.interaction.hitTest(
      mousePosition,
      app.stage
   );
   // Dispatch scroll event
   if (!found) {
      const container = new PIXI.Container(); 
      container.type = 'container'
      container.interactive = true;
      container.buttonMode = true;

      container.x = ev.layerX;
      container.y = ev.layerY;

      const cat = new PIXI.Sprite(texture);
      cat.type = 'cat'

      cat.anchor.set(0.5);
      cat.scale.set(0.5)

      cat.buttonMode = true;
      cat.interactive = true;

      cat
         .on('scroll', (ev) => {
            if (RightMouse) {
               if (ev.deltaY > 0) {
                  cat.rotation += 0.5;
               } else {
                  cat.rotation -= 0.5;
               }
            } else {
               if (ev.deltaY > 0) {
                  cat.scale.x *= 1.05;
                  cat.scale.y *= 1.05;
               } else {
                  cat.scale.y /= 1.05;
                  cat.scale.x /= 1.05;
               }
            }
         })
      cat.index = app.stage.children.length
      container.addChild(cat)   
         
      // const cross = new PIXI.Graphics()
      // cross.lineStyle(0); // draw a circle, set the lineStyle to zero so the circle doesn't have an outline
      // cross.beginFill(0xDE3249, 1);
      // cross.drawCircle(-100, -100, 10);
      // cross.endFill();

      // cross.type = 'cross';
      // cross.visible = false

      // container.addChild(cross);

      container
         .on('pointerover', elemOver)
         .on('pointerout', elemOut)
         .on('pointerdown', onDragStart)
         .on('pointerup', onDragEnd)
         .on('pointerupoutside', onDragEnd)
         .on('pointermove', onDragMove)
         .on('pointertap', (ev) => {
            currentItem = ev.target.parent;
            console.log(ev.target)
            about.textContent = `${ev.target.type}, №:${ev.target.index}`
         });

      const text = new PIXI.Text(app.stage.children.length,
         {
            font: '2rem',
            fill: 0x000000,
            align: 'center',
            cacheAsBitmap: true, // for better performance
         });
      text.type = 'text'
      text.anchor.set(0.5);
      container.addChild(text);

      app.stage.addChild(container)
   }
   changeList()
}

app.view.onmousedown = (ev) => {
   if (ev.which == 3) {
      RightMouse = true;
   }
}
app.view.onmouseup = (ev) => {
   if (ev.which == 3) {
      RightMouse = false;
   }
}

app.view.onmousewheel = (ev) => {
   mousePosition.set(ev.layerX, ev.layerY); // get global position
   // returns element directly under mouse
   const found = app.renderer.plugins.interaction.hitTest(
      mousePosition,
      app.stage
   );

   // Dispatch scroll event
   if (found) { found.emit('scroll', ev)}
}

function elemOver() {
   this.tint = 0x828272;
   
   this.children.map(el => {
      if (el.type === 'cross') {
         el.visible = true
      }
   })
}

function elemOut() {
   this.tint = 0xFFFFFF;

   this.children.map(el => {
      if (el.type === 'cross') {
         el.visible = false
      }
   })
}

function onDragStart(event) {
   // store a reference to the data
   // the reason for this is because of multitouch
   // we want to track the movement of this particular touch
   this.data = event.data;
   this.alpha = 0.5;
   this.dragging = true;
}

function onDragEnd() {
   this.alpha = 1;
   this.dragging = false;
   // set the interaction data to null
   this.data = null;
   changeList()
}

function onDragMove() {
   if (this.dragging) {
      const newPosition = this.data.getLocalPosition(this.parent);
      this.x = newPosition.x;
      this.y = newPosition.y;
   }
}


function changeList() {
   list.textContent = ''
   const elements = app.stage.children;
   elements.map((el, ind) => {
      if (ind > 0) {
         const li = document.createElement('li');
         li.textContent = `Element №${ind} on X:${el.x}, Y:${el.y}, R:${el.transform.rotation}, S:${el.scale.x},${el.scale.y}`
         list.appendChild(li);
      }
   })
}

function updateIndex() {
   app.stage.children.map( (el,ind) => {
      if (el.type = 'container') {
         let temp = el;
         temp.children.map(underEl => {
            if (underEl.type = 'text') {
               underEl.text = ind
            }
            if (underEl.type = 'cat') {
               underEl.index = ind
               // el.setChildIndex(underEl, 0)
            }
         })
      }
   })
}