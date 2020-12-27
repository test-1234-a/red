var current = 0;

function intro(){

  ctx.drawImage(game.sprite[54],0,0,window.innerWidth,window.innerHeight);

  ctx.strokeStyle = 'black';
  ctx.lineWidth = 2;
  var w = window.innerWidth/10;
  var h = window.innerHeight/15;
  ctx.font = window.innerHeight*0.035+ 'px KulminoituvaRegular';
  if (current !== 5) {
    ctx.fillStyle = 'black'
    ctx.fillText("Passer",window.innerWidth*0.8-w/1.5,window.innerHeight-h*1.3);
    ctx.strokeRect(window.innerWidth*0.8-w/2-w/1.5,window.innerHeight-h*2,w,h);
  }

  ctx.fillStyle = 'black';
  ctx.fillRect(window.innerWidth*0.8-w/2+w/1.5,window.innerHeight-h*2,w,h);
  ctx.fillStyle = 'white';
  ctx.fillText("Suivant",window.innerWidth*0.8+w/1.5,window.innerHeight-h*1.3);

  if (mousey > window.innerHeight-h*2.25 && mousey < window.innerHeight-h*1.25 && clic == 0) {
    if (mousex > window.innerWidth*0.8-w*1.15 && mousex < window.innerWidth*0.8-w*0.15 && current !== 5) {
      game.state = 2;
    }

    if (mousex > window.innerWidth*0.8-w/2+w/1.5 && mousex < window.innerWidth*0.8-w/2+w/1.5+w) {
      if (current !== 5) { current+=1; } else { game.state = 2; }
    }
  }

  // ---
  switch (current) {
    case 0:
      ctx.fillStyle = 'black'
      ctx.font = window.innerWidth/40 + 'px Arial';
    	ctx.textAlign = 'center';
    	ctx.fillText("Il existe une légende selon laquelle une boîte serait cachée quelque part...",window.innerWidth/2,window.innerHeight/2.2);
    break;
    case 1:
      ctx.fillStyle = 'black'
      ctx.font = window.innerWidth/40 + 'px Arial';
      ctx.textAlign = 'center';
      ctx.fillText("Cette boîte pourrait réaliser n'importe quels vœux, quel qu’il soit,",window.innerWidth/2,window.innerHeight/1.5);
      ctx.fillText("sans aucunes règles ou limites.",window.innerWidth/2,window.innerHeight/1.35);

      var t = window.innerWidth/5;
      ctx.filter = 'opacity(90%)'
      ctx.drawImage(game.sprite[55],window.innerWidth/2-t/2,window.innerHeight/9,t,t);
      ctx.filter = 'none'
      break;
      case 2:
        ctx.fillStyle = 'black'
        ctx.font = window.innerWidth/40 + 'px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Cependant voilà des siècles que les humains ne cessent de la chercher",window.innerWidth/2,window.innerHeight/1.5);
        ctx.fillText("sans aucun résultat.",window.innerWidth/2,window.innerHeight/1.35);

        var t = window.innerWidth/5;
        ctx.filter = 'opacity(90%)'
        ctx.drawImage(game.sprite[56],window.innerWidth/2-t/2,window.innerHeight/9,t,t);
        ctx.filter = 'none'
      break;
      case 3:
        ctx.fillStyle = 'black'
        ctx.font = window.innerWidth/40 + 'px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Alors les hommes demandèrent aux dieux de leur apporter une aide pour la trouver.",window.innerWidth/2,window.innerHeight/1.5);
        ctx.fillText("Les dieux pleins de clémence acceptèrent.",window.innerWidth/2,window.innerHeight/1.35);

        var t = window.innerWidth/5;
        ctx.filter = 'opacity(90%)'
        ctx.drawImage(game.sprite[57],window.innerWidth/2-t/2,window.innerHeight/9,t,t);
        ctx.filter = 'none'
      break;
      case 4:
        ctx.fillStyle = 'black'
        ctx.font = window.innerWidth/40 + 'px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Tous les 100 ans, un nouveau-né naîtra avec le pouvoir de voyager ",window.innerWidth/2,window.innerHeight/1.5);
        ctx.fillText("entre les dimensions.",window.innerWidth/2,window.innerHeight/1.35);

        var t = window.innerWidth/5;
        ctx.filter = 'opacity(90%)'
        ctx.drawImage(game.sprite[59],window.innerWidth/2-t/2,window.innerHeight/9,t,t);
        ctx.filter = 'none'
      break;
      case 5:
        ctx.fillStyle = 'black'
        ctx.font = window.innerWidth/40 + 'px Arial';
        ctx.textAlign = 'center';
        ctx.fillText("Cette capacité devrait donner une chance à l'humanité de mettre la main",window.innerWidth/2,window.innerHeight/1.5);
        ctx.fillText("sur la mystérieuse boîte.",window.innerWidth/2,window.innerHeight/1.35);

        var t = window.innerWidth/5;
        ctx.filter = 'opacity(90%)'
        ctx.drawImage(game.sprite[58],window.innerWidth/2-t/2,window.innerHeight/9,t,t);
        ctx.filter = 'none'
      break;
  }

  clic = -1;

}
