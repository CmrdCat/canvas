
const stage = JSON.parse(localStorage.getItem('stage'));

const tableInfo = document.querySelector('.table-info');

if (stage) {
   const app = new PIXI.Application({
      width: 800,
      height: 600,
      backgroundColor: 0x1099bb,
   });
   let activeTable;


   const bgImage = PIXI.Texture.from('plan.jpg')
   const background = new PIXI.Sprite(bgImage);
   app.stage.addChild(background);
   background.width = app.screen.width;
   background.height = app.screen.height;

   document.body.appendChild(app.view);

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
      table.index = el.index;
      table.info = el.info;

      table.anchor.set(0.5);
      table.scale.x = el.scaleX;
      table.scale.y = el.scaleY;
      table.rotation = el.rotation;

      table.buttonMode = true;
      table.interactive = true;

      table.tint = 0x808080; 
      table.alpha = 0.7; 

      container.addChild(table) 

      table
         .on('pointertap', (ev) => {
            if (activeTable) {
               activeTable.tint = 0x808080;
               activeTable.alpha = 0.7; 
            }

            activeTable = ev.target;
            activeTable.tint = 0xFFFFFF;
            activeTable.alpha = 1; 

            changeInfo(table.index, table.info)
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
} else {
   document.querySelector('.message').textContent = 'NO DATA'
}


function changeInfo(index, info) {
   tableInfo.innerHTML = `
      <div>
         <p>Столик №${index}</p>
         <p>Описание: ${info}</p>
         <p>Стоимость: 123</p>
      </div>
   `
}



