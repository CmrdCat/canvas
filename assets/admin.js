PIXI.utils.sayHello()

const sample = [
   {
      image: 'cursor.png'
   },
   {
      image: 'table2.png',
      info: 'столик на двоих'
   },
   {
      image: 'table4.png',
      info: 'столик на четверых'
   },
   {
      image: 'cat.png',
      info: 'Кот который любит тыгдыкать'
   },
   {
      image: 'cat2.png',
      info: 'Кот который молча тебя осуждает'
   },
]

localStorage.setItem('samples', JSON.stringify(sample))

const app = new PIXI.Application({
   width: 800,
   height: 600,
   backgroundColor: 0x1099bb,
});

let count = 0;
let currentItem;
let mode = 'cursor'
let info;

const list = document.querySelector('.list');
// const checkbox = document.querySelector('.checkbox');
const aboutItem = document.querySelector('.about-item');
const buttonsWrapper = document.querySelector('.buttons-wrapper');
const buttonsContainer = document.querySelector('.buttons-container');
const about = document.querySelector('.about');
const remove = document.querySelector('.remove');
const save = document.querySelector('.save');

remove.onclick = () => {
   app.stage.removeChild(currentItem)
   updateIndex()
   changeList()
}

save.onclick = () => {
   saveStage();
}

const bgImage = PIXI.Texture.from('plan.jpg')
const background = new PIXI.Sprite(bgImage);
app.stage.addChild(background);
background.width = app.screen.width;
background.height = app.screen.height;

document.body.appendChild(app.view);

const samples = JSON.parse(localStorage.getItem('samples'))

createButtons()

const mousePosition = new PIXI.Point();
let RightMouse = false;

app.view.addEventListener("contextmenu", function (ev) {
   ev.preventDefault();
}, false);

const stage = JSON.parse(localStorage.getItem('stage'));

if (stage) {
   stage.map(el => {
      const container = new PIXI.Container();
      container.type = 'container'
      container.interactive = true;
      container.buttonMode = true;

      container.x = el.x;
      container.y = el.y;

      texture = PIXI.Texture.from(`${el.texture}`)
      const table = new PIXI.Sprite(texture);
      table.type = 'table'

      table.anchor.set(0.5);
      table.scale.x = el.scaleX;
      table.scale.y = el.scaleY;
      table.rotation = el.rotation;
      table.index = el.index;
      table.info = el.info;

      table.buttonMode = true;
      table.interactive = true;

      table
         .on('scroll', (ev) => {
            if (RightMouse) {
               if (ev.deltaY > 0) {
                  table.rotation += 0.28;
                  if (table.rotation > 6.28) {
                     table.rotation = 0
                  }
               } else {
                  table.rotation -= 0.28;
                  if (table.rotation < -6.28) {
                     table.rotation = 0
                  }
               }
            } else {
               if (ev.deltaY > 0) {
                  table.scale.x *= 1.1;
                  table.scale.y *= 1.1;
               } else {
                  table.scale.y /= 1.1;
                  table.scale.x /= 1.1;
               }
            }
         })
      table.index = app.stage.children.length
      container.addChild(table)

      container
         .on('pointerover', elemOver)
         .on('pointerout', elemOut)
         .on('pointerdown', onDragStart)
         .on('pointerup', onDragEnd)
         .on('pointerupoutside', onDragEnd)
         .on('pointermove', onDragMove)
         .on('pointertap', (ev) => {
            aboutItem.classList.remove('hide');
            currentItem = ev.target.parent;
            about.textContent = `${ev.target.type}, №:${ev.target.index}`
         });

      const text = new PIXI.Text(el.index,
         {
            font: '2rem',
            fill: 0x000000,
            align: 'center',
            cacheAsBitmap: true,
         });
      text.type = 'text'
      text.anchor.set(0.5);
      container.addChild(text);

      app.stage.addChild(container)
   })
}

app.view.onclick = (ev) => {
   mousePosition.set(ev.layerX, ev.layerY);
   const found = app.renderer.plugins.interaction.hitTest(
      mousePosition,
      app.stage
   );
   if (!found && mode === 'create') {
      aboutItem.classList.add('hide');
      const container = new PIXI.Container(); 
      container.type = 'container'
      container.interactive = true;
      container.buttonMode = true;

      container.x = ev.layerX;
      container.y = ev.layerY;

      const table = new PIXI.Sprite(texture);
      table.type = 'table';
      table.info = info;

      table.anchor.set(0.5);
      table.scale.set(0.7)

      table.buttonMode = true;
      table.interactive = true;

      table
         .on('scroll', (ev) => {
            if (RightMouse) {
               if (ev.deltaY > 0) {
                  table.rotation += 0.28;
                  if (table.rotation > 6.28) {
                     table.rotation = 0
                  }
               } else {
                  table.rotation -= 0.28;
                  if (table.rotation < -6.28) {
                     table.rotation = 0
                  }
               }
            } else {
               if (ev.deltaY > 0) {
                  table.scale.x *= 1.1;
                  table.scale.y *= 1.1;
               } else {
                  table.scale.y /= 1.1;
                  table.scale.x /= 1.1;
               }
            }
         })
      table.index = app.stage.children.length
      container.addChild(table)   

      container
         .on('pointerover', elemOver)
         .on('pointerout', elemOut)
         .on('pointerdown', onDragStart)
         .on('pointerup', onDragEnd)
         .on('pointerupoutside', onDragEnd)
         .on('pointermove', onDragMove)
         .on('pointertap', (ev) => {
            aboutItem.classList.remove('hide');
            currentItem = ev.target.parent;
            about.textContent = `${ev.target.type}, №:${ev.target.index}`
         });

      const text = new PIXI.Text(app.stage.children.length,
         {
            font: '2rem',
            fill: 0x000000,
            align: 'center',
            cacheAsBitmap: true,
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
   mousePosition.set(ev.layerX, ev.layerY);
   const found = app.renderer.plugins.interaction.hitTest(
      mousePosition,
      app.stage
   );
   if (found) { 
      found.emit('scroll', ev);
      changeList();
   }
}

function elemOver() {
   this.tint = 0x828272;
}

function elemOut() {
   this.tint = 0xFFFFFF;
}

function onDragStart(event) {
   this.data = event.data;
   this.alpha = 0.5;
   this.dragging = true;
}

function onDragEnd() {
   this.alpha = 1;
   this.dragging = false;
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
   const elements = app.stage.children.filter((el) => el.type === 'container');
   elements.map((el, ind) => {
      el.children.map((underEl) => {
         if (underEl.type === 'table') {
            const li = document.createElement('li');
            li.textContent = `Element №${ind} on X:${el.x}, Y:${el.y}, R:${underEl.transform.rotation}, S:${underEl.scale.x},${underEl.scale.y}`
            list.appendChild(li);
         }
      })
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
            if (underEl.type = 'table') {
               underEl.index = ind
            }
         })
      }
   })
}

function createButtons() {
   const radioButtons = document.createElement('input');
   radioButtons.classList.add('radio-buttons');

   samples.map((el, ind) => {
      const label = document.createElement('label');
      const radio = document.createElement('input');

      radio.type = "radio";
      radio.name = 'chooseMode';
      radio.value = el.image;
      radio.id = el.image
      radio.style.display = 'none'
      if (ind === 0) {
         radio.checked = true
         radio.onchange = () => {
            if (radio.checked) {
               mode = 'cursor'
            }
         }
      } else {
         radio.onchange = () => {
            if (radio.checked) {
               mode = 'create';
               texture = PIXI.Texture.from(`${radio.value}`)
               info = el.info
            }
         }
      }
      

      buttonsContainer.appendChild(radio);

      label.setAttribute('for',`${el.image}`)
      const button = document.createElement('div');
      button.classList.add('chooseModeButton')
      button.style.backgroundImage = `url(${el.image})`

      label.appendChild(button)

      buttonsContainer.appendChild(label)
   })
}

function saveStage() {
   const items = app.stage.children.filter((el) => el.type === 'container');
   
   const arr = [];

   items.map( el => {
      el.children.map(underEl => {
         if (underEl.type === 'table') {
            console.log(underEl)
            const obj = {}
            obj.index = underEl.index;
            obj.x = el.x;
            obj.y = el.y;
            obj.scaleX = underEl.scale.x;
            obj.scaleY = underEl.scale.y;
            obj.rotation = underEl.transform.rotation;
            obj.texture = underEl._texture.textureCacheIds[0];
            obj.info = underEl.info;
            arr.push(obj)
         }
      })
   })

   localStorage.setItem('stage', JSON.stringify(arr));
}

