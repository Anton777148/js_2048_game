!function(){var e=new(function(){var e;function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,t),console.log(e),this.initialState=this.boardDeepCopy(e),this.board=this.boardDeepCopy(e),this.score=0,this.status="idle"}return e=[{key:"moveLeft",value:function(){var e=this;this.performMove(function(t){return e.joinTiles(t)})}},{key:"moveRight",value:function(){var e=this;this.performMove(function(t){return e.reverse(e.joinTiles(e.reverse(t)))})}},{key:"moveUp",value:function(){var e=this;this.performMove(function(t){var r=e.transpose(t),n=e.joinTiles(r);return e.transpose(n)})}},{key:"moveDown",value:function(){var e=this;this.performMove(function(t){var r=e.transpose(t),n=e.reverse(r),a=e.joinTiles(n),o=e.reverse(a);return e.transpose(o)})}},{key:"getScore",value:function(){return this.score}},{key:"getState",value:function(){return this.boardDeepCopy(this.board)}},{key:"getStatus",value:function(){return this.status}},{key:"start",value:function(){this.status="playing",this.addRandomTile(),this.addRandomTile()}},{key:"restart",value:function(){this.status="idle",this.board=this.boardDeepCopy(this.initialState),this.score=0}},{key:"addRandomTile",value:function(){var e=this.board.reduce(function(e,t,r){return t.forEach(function(t,n){0===t&&e.push({row:r,col:n})}),e},[]);if(e.length>0){var t=e[Math.floor(Math.random()*e.length)],r=t.row,n=t.col;this.board[r][n]=.9>Math.random()?2:4}this.isGameOver()&&(this.status="lose")}},{key:"joinTiles",value:function(e){var t=this;return e.map(function(e){for(var r=e.filter(function(e){return 0!==e}),n=0;n<r.length;n++)r[n]===r[n+1]&&(r[n]*=2,t.score+=r[n],2048===r[n]&&(t.status="win"),r.splice(n+1,1));for(;r.length<4;)r.push(0);return r})}},{key:"transpose",value:function(e){return e[0].map(function(t,r){return e.map(function(e){return e[r]})})}},{key:"reverse",value:function(e){return e.map(function(e){return e.reverse()})}},{key:"boardDeepCopy",value:function(e){return JSON.parse(JSON.stringify(e))}},{key:"isGameOver",value:function(){for(var e=0;e<4;e++)for(var t=0;t<4;t++){var r=this.board[e][t];if(0===this.board[e][t]||e<3&&r===this.board[e+1][t]||t<3&&r===this.board[e][t+1])return!1}return!0}},{key:"performMove",value:function(e){if("playing"===this.status){var t=JSON.stringify(this.board);this.board=e(this.board),JSON.stringify(this.board)!==t&&this.addRandomTile()}}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(t.prototype,e),t}()),t=document.querySelector(".button"),r=document.querySelector(".game-score"),n=document.querySelector(".message-win"),a=document.querySelector(".message-lose"),o=document.querySelector(".message-start"),s=document.querySelector(".game-field");function i(t){var n=s.querySelectorAll(".field-cell");t.flat().forEach(function(e,t){var r=n[t];r.textContent=0===e?"":e,r.className="field-cell ".concat(e>0?"field-cell--".concat(e):"")}),r.textContent=e.getScore()}document.addEventListener("keyup",function(t){if("playing"===e.status){switch(t.key){case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case"ArrowRight":e.moveRight();break;case"ArrowLeft":e.moveLeft()}i(e.board),"win"===e.getStatus()&&n.classList.remove("hidden"),"lose"===e.getStatus()&&a.classList.remove("hidden")}}),t.addEventListener("click",function(t){var r=t.target;r.classList.contains("start")?(e.start(),r.classList.replace("start","restart"),r.textContent="Restart",o.classList.add("hidden")):(e.restart(),r.classList.replace("restart","start"),r.textContent="Start",o.classList.remove("hidden"),n.classList.add("hidden"),a.classList.add("hidden")),i(e.board)})}();
//# sourceMappingURL=index.05d697f3.js.map
