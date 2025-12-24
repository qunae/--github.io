// Garden Gnome Software - Skin
// Pano2VR 7.1.5/20954
// Filename: button.ggsk
// Generated 2025-12-24T21:29:40

function pano2vrSkin(player,base) {
	player.addVariable('Sec', 1, 0, { ignoreInState: 1  });
	player.addVariable('Min', 1, 0, { ignoreInState: 1  });
	player.addVariable('Hou', 1, 0, { ignoreInState: 1  });
	player.addVariable('opt_url', 2, false, { ignoreInState: 1  });
	player.addVariable('opt_loader', 2, true, { ignoreInState: 1  });
	player.addVariable('vis_loader', 2, true, { ignoreInState: 0  });
	var me=this;
	var skin=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	var skinKeyPressedKey = 0;
	var skinKeyPressedText = '';
	this.player=player;
	player.setApiVersion(7);
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	var cssPrefix="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown={};
	this.elementMouseOver={};
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	for(var i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; });
	
	var parameterToTransform=function(p) {
		return p.def + 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this._=function(text, params) {
		return player._(text, params);
	}
	
	this.languageChanged=function() {
		var stack=[];
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdateText) {
				e.ggUpdateText();
			}
			if (e.ggUpdateAria) {
				e.ggUpdateAria();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('sizechanged', function () { me.updateSize(me.divSkin);});
	player.addListener('languagechanged', this.languageChanged);
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me.__5=document.createElement('div');
		el.ggId="\u79fb\u52a8\u6309\u94ae";
		el.ggDx=-9;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 130px;';
		hs+='height : 132px;';
		hs+='left : calc(50% - ((512px + 0px) / 2) - 9px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 512px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__5.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__5.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_2=document.createElement('div');
		els=me._button_2__img=document.createElement('img');
		els.className='ggskin ggskin_button_2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 169px;';
		hs+='position : absolute;';
		hs+='top : 49px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_2.onclick=function (e) {
			player.changeFovLog(-1,true);
		}
		me._button_2.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_2);
		el=me._button_6=document.createElement('div');
		els=me._button_6__img=document.createElement('img');
		els.className='ggskin ggskin_button_6';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 92px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_6.onclick=function (e) {
			player.changeTiltLog(-1,true);
		}
		me._button_6.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_6);
		el=me._button_7=document.createElement('div');
		els=me._button_7__img=document.createElement('img');
		els.className='ggskin ggskin_button_7';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 357px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_7.onclick=function (e) {
			player.changeViewMode(0);
			me._button_7.style.transition='none';
			me._button_7.style.visibility='hidden';
			me._button_7.ggVisible=false;
			me._button_12.style.transition='none';
			me._button_12.style.visibility=(Number(me._button_12.style.opacity)>0||!me._button_12.style.opacity)?'inherit':'hidden';
			me._button_12.ggVisible=true;
		}
		me._button_7.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_7);
		el=me._button_9=document.createElement('div');
		els=me._button_9__img=document.createElement('img');
		els.className='ggskin ggskin_button_9';
		hs='data:image/png;base64,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'+
			'9/Kg7ytHqUcAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 9";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 471px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_9.onclick=function (e) {
			player.enterFullscreen();
			me._button_10.style.transition='none';
			me._button_10.style.visibility=(Number(me._button_10.style.opacity)>0||!me._button_10.style.opacity)?'inherit':'hidden';
			me._button_10.ggVisible=true;
		}
		me._button_9.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_9);
		el=me._button_10=document.createElement('div');
		els=me._button_10__img=document.createElement('img');
		els.className='ggskin ggskin_button_10';
		hs='data:image/png;base64,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'+
			'TkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 10";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 472px;';
		hs+='position : absolute;';
		hs+='top : 53px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_10.onclick=function (e) {
			player.exitFullscreen();
			me._button_10.style.transition='none';
			me._button_10.style.visibility='hidden';
			me._button_10.ggVisible=false;
			me._button_9.style.transition='none';
			me._button_9.style.visibility=(Number(me._button_9.style.opacity)>0||!me._button_9.style.opacity)?'inherit':'hidden';
			me._button_9.ggVisible=true;
		}
		me._button_10.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_10);
		el=me._button_12=document.createElement('div');
		els=me._button_12__img=document.createElement('img');
		els.className='ggskin ggskin_button_12';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 12";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 359px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_12.onclick=function (e) {
			player.changeViewMode(1);
			me._button_12.style.transition='none';
			me._button_12.style.visibility='hidden';
			me._button_12.ggVisible=false;
			me._button_7.style.transition='none';
			me._button_7.style.visibility=(Number(me._button_7.style.opacity)>0||!me._button_7.style.opacity)?'inherit':'hidden';
			me._button_7.ggVisible=true;
		}
		me._button_12.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_12);
		el=me._button_16=document.createElement('div');
		els=me._button_16__img=document.createElement('img');
		els.className='ggskin ggskin_button_16';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAIuklEQVRYhb2Ze0wTaxrGn5kOLQVqCwgLSDnKqi2BehkQLTdDskRE7ZqwUaIxqwkqKAleMCZeksYLxqSuoqLHeEk2QWNQMAFBghsExWojtAk91AKLrK1IOQTQQgtMaWf/8OCeoygt4D5/znzvM7/5vrzfvN87BMuy8FSnTp0KDg0N3Txv3jxZREREoEQi4U42rq2tjTGZTP3d3d16s9l8V6lU9nn6LMITwKKiIgVN05mJiYkBvb290Gg0ePHiBbRaLTo7O9Hb2wun04m5c+dCIpFALpdj1apVWLZsGUJDQ6FWqwe0Wm1Zfn5+xawCqlSqpNTU1Lzo6Gjfp0+fQqVS4fHjx26/mLe3N1avXo1Dhw4hPj4ebW1ttvr6+ssFBQWNMwasqKgoysjIiHzy5A'+
			'ny8vLQ3t7uNthkWrJkCYqLi5GQkICHDx++USgU+d8bT37rxqlTp4INBkNZVFRU5NatW6FQKGYMBwAtLS1ITU1FTk4OEhMTIw0GQ5lSqQz61vhJZ1ClUiWtW7duv8Ph4G7ZsgWtra0zBptMS5cuxc2bN+Hj48NUVVWdn2zJvwJUKpVBmzZt+tlisXA3bNgAu93+Q+AmFBQUhIqKCsyZM4cpLS3N+TLTvwI0Go1lo6OjXIVCAbPZ/EPhJhQREYF79+5BIBAwUVFRmd8ErKioKJLL5ZEymQy9vb3TephQKORER0f7hIWF8d6/fz/W2tpq//jxo3OquMWLF0Ov16OmpuYPifM5SVQqVdKaNWsi9+zZM204kUhE5ebmzrt06VL0yZMno/Ly8n5KSkqa405se3s7duzYgfT09EiVSpU0cf3zDL569equ2Wz2zczM/KbJ9xQY'+
			'GEgdPHhQvGvXroUCgcDL4XC4LBaL/datW/8pLCw0uevT0NAAPp9vW7FiRRbw2wwWFRUpli9f7nv06NFpwQUHB3sdPnz4p9zc3IVCoZDL4XAIiqJIAOjo6PAoyw4cOICYmBjfoqIixWdAmqYz6+rqYDQaPYaTSCT8CxcuSHbv3v1nPz8/LkEQYFkWo6Oj4w0NDX11dXUfPPFrbm6GTqcDTdOZAMChKCp469atWfn5+ejo6PAIbv78+TyVSrU4IyNjno+PD0UQBFwuF4aGhpg7d+68LSgo+Lc7CfKl7HY78vPz+SdOnPgXFRoammW1WlFbW+u2AUVRBE3TvidOnFiUkpLyJy6XywEAl8uFwcHB0cLCQuONGzd6bDaby1M4AKiursbQ0BDEYnEWJRaLY3Q6HcbHx902iI2N9Tt37pyUpum5XC6XnIDr7+8fuXLlSudM4A'+
			'DAarXCYDBALBbLSLFYHNjQ0OBWII/HI9asWSO6du2aLC4uLuh3cKzFYrGpVKr206dPm2YCNyGNRoPw8PBAUiqVctVq9ZQBXl5exLp16wJUKlV0VFSUiKIogiAIOJ1O9u3bt8N79+5tuXz5crfL5fK8Ap5EWq0WUqmUSwHA69evpwxYvXq18OzZs9Hz58/3I0mSYFkWDoeD7erqGlIqlcbKysqB2QCbkMFgAABQwKc1n0pZWVkhYWFhPhwOhwQAlmVZvV4/kJub+0tzc/PwbMIB+FwHkARBYGxsbMqAyZaOYRgXSZLgcDjEbAMyDPMJcOIMMZVKSkosPT09dqfTybK/fR9pmg68evWqLDU1VTjbgCEhIZ8AAUAikUwZ0NjYaC0uLu7s7u4eHh8fZwHAy8uLjI6O9r948WJMWlqaiMfjzdpMLlu2DADA2bx5899sNhun'+
			'vr7+uwEsy0Kn0w13dnZaZTKZX0BAgDdJkgRJkoS/vz8vISFB1NfXZzcajSMu14x3GeTk5EAgEDCcDRs2/EUsFgtKSkqmDHI6nTAajSNdXV1DS5cu9QsICOBxOByCJElCJBLxkpOTA7y8vJw6nW6YYZgZbTeFhYXo6en5lezu7tbLZDLw+Xy3g2traz/s3LmzRaPR9DEM42RZFiRJIjAwkL9v377FeXl5YSKRiJoJ4KJFi2A2m/Wc5cuXd2VkZPy1qakJbW1tbhtYLBaHXq//KJVK+RPbD0EQ8Pb2pmJjY0XBwcFkU1OTdTpflW3btmHTpk2orq4uJFiWxbNnz/45NjYWkJaW5qkXIiIieGfOnFm4fv36eXw+34skSbAsC7vd7qiqqnq/f//+tt7eXoe7fhRFQaPRwGazDSQnJ/+dBACtVlsml8tB07THgCaTaezQoU'+
			'Md9+7dMw0PDzMsy4IgCPD5fCo5OTkoPT09wBO/VatWYcmSJdBqtWXA70r+pqamu+Pj476pqakYHR31GFQkElEHDhwIz8nJWSgUCrlOp9PV19c3WlJS8vbo0aNd7njweDzU1tbCx8fHFhcX97+SHwAaGhqK4+PjkZ2d7TEcAHz48GH8zJkzpuvXr3e+efPGarFYRnQ63YBOpxty12P79u1ITExEfX395YlrXx074+PjIxUKBV69ejUtUF9fXzIuLs4vNjZ2jslkGq2rq/swMDAwZbEpl8tRXl6Oly9fvtm4cePnY+dXB3eDwVA2MjLCXbt2Lfr6PG7nTUuRkZF48eIFBgYGGKlU+odj5VfNo9LS0hxfX1+msrISCxYs+L/A3b59G/39/cz9+/dzv7z/FaBSqex7+PDheYFAwJSXlyMmJuaHwdE0jefPn0MoFDIPHjz4'+
			'x7Fjx36dEhAACgoKGktLS3N4PB7T1NSEjRs3zioYj8fD7t278ejRIwwODjJlZWW5R44ceT7ZWLcamOnp6ZH19fU4cuQImpubpw3G5XKRkpKC48ePIzExEVVVVdNvYE5IoVDkX7x48ay/v7/t5cuXUKvVyM7OhlDoWQmYmZkJtVqNmpoa8Pl82/nz589OBQdMs4mekJAQYLVaodfrodFo0NLSAoPBALPZDIfDgZCQENA0jZSUFKxcuRJSqRQ8Hg+NjY2DWq32/qw30b+UUqkMEovFWWKxWBYeHh4olUon/Q1hNBqZd+/e9ZvN5l96enruTpYEU+m/vafdNclfLKIAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 16";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_16.onclick=function (e) {
			player.changePanLog(1,true);
		}
		me._button_16.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_16);
		el=me._button_21=document.createElement('div');
		els=me._button_21__img=document.createElement('img');
		els.className='ggskin ggskin_button_21';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 21";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 298px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_21.onclick=function (e) {
				player.pauseSound("_background");
			me._button_21.style.transition='none';
			me._button_21.style.visibility='hidden';
			me._button_21.ggVisible=false;
			me._button_22.style.transition='none';
			me._button_22.style.visibility=(Number(me._button_22.style.opacity)>0||!me._button_22.style.opacity)?'inherit':'hidden';
			me._button_22.ggVisible=true;
		}
		me._button_21.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_21);
		el=me._button_22=document.createElement('div');
		els=me._button_22__img=document.createElement('img');
		els.className='ggskin ggskin_button_22';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 22";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 297px;';
		hs+='position : absolute;';
		hs+='top : 52px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_22.onclick=function (e) {
				player.playSound("_background","1");
			me._button_22.style.transition='none';
			me._button_22.style.visibility='hidden';
			me._button_22.ggVisible=false;
			me._button_21.style.transition='none';
			me._button_21.style.visibility=(Number(me._button_21.style.opacity)>0||!me._button_21.style.opacity)?'inherit':'hidden';
			me._button_21.ggVisible=true;
		}
		me._button_22.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_22);
		el=me._button_25=document.createElement('div');
		els=me._button_25__img=document.createElement('img');
		els.className='ggskin ggskin_button_25';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 25";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 102px;';
		hs+='position : absolute;';
		hs+='top : 46px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_25.onclick=function (e) {
			player.changePanLog(-1,true);
		}
		me._button_25.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_25);
		el=me._button_26=document.createElement('div');
		els=me._button_26__img=document.createElement('img');
		els.className='ggskin ggskin_button_26';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 26";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 418px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_26.onclick=function (e) {
			player.startAutorotate(0.5,0.99,0.99);
			me._button_26.style.transition='none';
			me._button_26.style.visibility='hidden';
			me._button_26.ggVisible=false;
			me._button_27.style.transition='none';
			me._button_27.style.visibility=(Number(me._button_27.style.opacity)>0||!me._button_27.style.opacity)?'inherit':'hidden';
			me._button_27.ggVisible=true;
		}
		me._button_26.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_26);
		el=me._button_27=document.createElement('div');
		els=me._button_27__img=document.createElement('img');
		els.className='ggskin ggskin_button_27';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 27";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 419px;';
		hs+='position : absolute;';
		hs+='top : 51px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_27.onclick=function (e) {
			player.stopAutorotate();
			me._button_27.style.transition='none';
			me._button_27.style.visibility='hidden';
			me._button_27.ggVisible=false;
			me._button_26.style.transition='none';
			me._button_26.style.visibility=(Number(me._button_26.style.opacity)>0||!me._button_26.style.opacity)?'inherit':'hidden';
			me._button_26.ggVisible=true;
		}
		me._button_27.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_27);
		el=me._button_28=document.createElement('div');
		els=me._button_28__img=document.createElement('img');
		els.className='ggskin ggskin_button_28';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 28";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 230px;';
		hs+='position : absolute;';
		hs+='top : 50px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_28.onclick=function (e) {
			player.changeFovLog(1,true);
		}
		me._button_28.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_28);
		el=me._button_31=document.createElement('div');
		els=me._button_31__img=document.createElement('img');
		els.className='ggskin ggskin_button_31';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 31";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 40px;';
		hs+='left : 52px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_31.onclick=function (e) {
			player.changeTiltLog(1,true);
		}
		me._button_31.ggUpdatePosition=function (useTransition) {
		}
		me.__5.appendChild(me._button_31);
		me.divSkin.appendChild(me.__5);
		el=me._container_3=document.createElement('div');
		el.ggId="Container 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 61px;';
		hs+='left : 61px;';
		hs+='position : absolute;';
		hs+='top : 28px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_3.ggUpdatePosition=function (useTransition) {
		}
		el=me.__4=document.createElement('div');
		els=me.__4__img=document.createElement('img');
		els.className='ggskin ggskin__4';
		hs=basePath + 'images/_4.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u6307\u9488\u76d8";
		el.ggDx=-1;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((58px + 0px) / 2) - 1px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 58px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__4.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me.__4);
		el=me.__3=document.createElement('div');
		els=me.__3__img=document.createElement('img');
		els.className='ggskin ggskin__3';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u6307\u9488";
		el.ggDx=0;
		el.ggDy=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 61px;';
		hs+='left : calc(50% - ((64px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((61px + 0px) / 2) + 0px);';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__3.ggUpdatePosition=function (useTransition) {
		}
		me._container_3.appendChild(me.__3);
		me.divSkin.appendChild(me._container_3);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 19px;';
		hs+='left : 351px;';
		hs+='position : absolute;';
		hs+='top : 61px;';
		hs+='visibility : inherit;';
		hs+='width : 81px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_1.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_1.style.transition='';
				if (me._timer_1.ggCurrentLogicStateVisible == 0) {
					me._timer_1.style.visibility="hidden";
					me._timer_1.ggVisible=false;
				}
				else {
					me._timer_1.style.visibility=(Number(me._timer_1.style.opacity)>0||!me._timer_1.style.opacity)?'inherit':'hidden';
					me._timer_1.ggVisible=true;
				}
			}
		}
		me._timer_1.logicBlock_visible();
		me._timer_1.ggActivate=function () {
			player.setVariableValue('Sec', Number(new Date().getSeconds()));
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('Sec', Number(new Date().getSeconds()));
		}
		me._timer_1.ggCurrentLogicStateVisible = -1;
		me._timer_1.ggUpdateConditionTimer=function () {
			me._timer_1.logicBlock_visible();
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		el=me._timer_2=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 49px;';
		hs+='position : absolute;';
		hs+='top : 109px;';
		hs+='visibility : inherit;';
		hs+='width : 62px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_2.ggIsActive=function() {
			return (me._timer_2.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_2.ggTimestamp) / me._timer_2.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_2.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_2.style.transition='';
				if (me._timer_2.ggCurrentLogicStateVisible == 0) {
					me._timer_2.style.visibility="hidden";
					me._timer_2.ggVisible=false;
				}
				else {
					me._timer_2.style.visibility=(Number(me._timer_2.style.opacity)>0||!me._timer_2.style.opacity)?'inherit':'hidden';
					me._timer_2.ggVisible=true;
				}
			}
		}
		me._timer_2.logicBlock_visible();
		me._timer_2.ggActivate=function () {
			player.setVariableValue('Min', Number(new Date().getMinutes()));
		}
		me._timer_2.ggDeactivate=function () {
			player.setVariableValue('Min', Number(new Date().getMinutes()));
		}
		me._timer_2.ggCurrentLogicStateVisible = -1;
		me._timer_2.ggUpdateConditionTimer=function () {
			me._timer_2.logicBlock_visible();
		}
		me._timer_2.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_2);
		el=me._timer_3=document.createElement('div');
		el.ggTimestamp=skin.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 167px;';
		hs+='left : 151px;';
		hs+='position : absolute;';
		hs+='top : -13px;';
		hs+='visibility : inherit;';
		hs+='width : 167px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._timer_3.ggIsActive=function() {
			return (me._timer_3.ggTimestamp==0 ? false : (Math.floor((skin.ggCurrentTime - me._timer_3.ggTimestamp) / me._timer_3.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((me._timer_3.ggIsActive() == false))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._timer_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._timer_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._timer_3.style.transition='';
				if (me._timer_3.ggCurrentLogicStateVisible == 0) {
					me._timer_3.style.visibility="hidden";
					me._timer_3.ggVisible=false;
				}
				else {
					me._timer_3.style.visibility=(Number(me._timer_3.style.opacity)>0||!me._timer_3.style.opacity)?'inherit':'hidden';
					me._timer_3.ggVisible=true;
				}
			}
		}
		me._timer_3.logicBlock_visible();
		me._timer_3.ggActivate=function () {
			player.setVariableValue('Hou', Number(new Date().getHours()));
		}
		me._timer_3.ggDeactivate=function () {
			player.setVariableValue('Hou', Number(new Date().getHours()));
		}
		me._timer_3.ggCurrentLogicStateVisible = -1;
		me._timer_3.ggUpdateConditionTimer=function () {
			me._timer_3.logicBlock_visible();
		}
		me._timer_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_3);
		el=me._loading=document.createElement('div');
		el.ggId="loading";
		el.ggDx=-69;
		el.ggDy=-64;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 60px;';
		hs+='left : calc(50% - ((210px + 0px) / 2) - 69px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((60px + 0px) / 2) - 64px);';
		hs+='visibility : hidden;';
		hs+='width : 210px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loading.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._loading.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getVariableValue('opt_loader') == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._loading.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._loading.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._loading.style.transition='';
				if (me._loading.ggCurrentLogicStateVisible == 0) {
					me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
					me._loading.ggVisible=true;
				}
				else {
					me._loading.style.visibility="hidden";
					me._loading.ggVisible=false;
				}
			}
		}
		me._loading.logicBlock_visible();
		me._loading.onclick=function (e) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		}
		me._loading.ggUpdatePosition=function (useTransition) {
		}
		el=me._loadingbg=document.createElement('div');
		el.ggId="loadingbg";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : rgba(0,0,0,0.509804);';
		hs+='border : 2px solid #ffffff;';
		hs+='border-radius : 10px;';
		hs+='cursor : default;';
		hs+='height : 60px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 210px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._loadingbg.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbg.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbg);
		el=me._loadingtext=document.createElement('div');
		els=me._loadingtext__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="loadingtext";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='color : rgba(255,255,255,1);';
		hs+='cursor : default;';
		hs+='height : auto;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 13px;';
		hs+='visibility : inherit;';
		hs+='width : auto;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border : 0px solid #000000;';
		hs+='text-align: left;';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		me._loadingtext.ggUpdateText=function() {
			var params = [];
			params.push(player._(String((player.getPercentLoaded()*100.0).toFixed(0))));
			var hs = player._("Loading... %1%", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._loadingtext.ggUpdateText();
		player.addListener('downloadprogress', function() {
			me._loadingtext.ggUpdateText();
		});
		el.appendChild(els);
		me._loadingtext.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingtext.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingtext);
		el=me._loadingbar=document.createElement('div');
		el.ggId="loadingbar";
		el.ggDy=13;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 0px solid #808080;';
		hs+='border-radius : 5px;';
		hs+='cursor : default;';
		hs+='height : 13px;';
		hs+='left : 14px;';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((13px + 0px) / 2) + 13px);';
		hs+='visibility : inherit;';
		hs+='width : 182px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='0% 50%';
		me._loadingbar.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._loadingbar.ggUpdatePosition=function (useTransition) {
		}
		me._loading.appendChild(me._loadingbar);
		me.divSkin.appendChild(me._loading);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggDx=-33;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #dbffd5;';
		hs+='border : 1px solid #9efa89;';
		hs+='bottom : 0px;';
		hs+='height : 117px;';
		hs+='left : calc(50% - ((2000px + 2px) / 2) - 33px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 2000px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		el=me._container_6=document.createElement('div');
		el.ggId="Container 6";
		el.ggDx=-11;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 15px;';
		hs+='height : 86px;';
		hs+='left : calc(50% - ((508px + 0px) / 2) - 11px);';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 508px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_6.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_4=document.createElement('div');
		els=me._image_4__img=document.createElement('img');
		els.className='ggskin ggskin_image_4';
		hs=basePath + 'images/image_4.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 81px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_4.onclick=function (e) {
			player.openNext("{node1}","");
		}
		me._image_4.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me._image_4);
		el=me._image_5=document.createElement('div');
		els=me._image_5__img=document.createElement('img');
		els.className='ggskin ggskin_image_5';
		hs=basePath + 'images/image_5.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 5";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 81px;';
		hs+='left : 176px;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_5.onclick=function (e) {
			player.openNext("{node2}","");
		}
		me._image_5.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me._image_5);
		el=me._image_6=document.createElement('div');
		els=me._image_6__img=document.createElement('img');
		els.className='ggskin ggskin_image_6';
		hs=basePath + 'images/image_6.jpg';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 6";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 81px;';
		hs+='left : 354px;';
		hs+='position : absolute;';
		hs+='top : 5px;';
		hs+='visibility : inherit;';
		hs+='width : 154px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_6.onclick=function (e) {
			player.openNext("{node3}","");
		}
		me._image_6.ggUpdatePosition=function (useTransition) {
		}
		me._container_6.appendChild(me._image_6);
		me._rectangle_2.appendChild(me._container_6);
		me.divSkin.appendChild(me._rectangle_2);
		el=me._image_7=document.createElement('div');
		els=me._image_7__img=document.createElement('img');
		els.className='ggskin ggskin_image_7';
		hs=basePath + 'images/image_7.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 7";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 16px;';
		hs+='position : absolute;';
		hs+='top : 42px;';
		hs+='visibility : inherit;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_7.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._image_7.onclick=function (e) {
			me._rectangle_2.ggVisible = !me._rectangle_2.ggVisible;
			var flag=me._rectangle_2.ggVisible;
			me._rectangle_2.style.transition='none';
			me._rectangle_2.style.visibility=((flag)&&(Number(me._rectangle_2.style.opacity)>0||!me._rectangle_2.style.opacity))?'inherit':'hidden';
		}
		me._image_7.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._image_7);
		el=me._container_4=document.createElement('div');
		el.ggId="Container 4";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 167px;';
		hs+='left : 166px;';
		hs+='position : absolute;';
		hs+='top : 12px;';
		hs+='visibility : inherit;';
		hs+='width : 167px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_4.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._container_4.ggUpdatePosition=function (useTransition) {
		}
		el=me._button_18=document.createElement('div');
		els=me._button_18__img=document.createElement('img');
		els.className='ggskin ggskin_button_18';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Button 18";
		el.ggDx=-149;
		el.ggDy=101;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 132px;';
		hs+='left : calc(50% - ((138px + 0px) / 2) - 149px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((132px + 0px) / 2) + 101px);';
		hs+='visibility : inherit;';
		hs+='width : 138px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._button_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._button_18.ggUpdatePosition=function (useTransition) {
		}
		el=me.__2=document.createElement('div');
		els=me.__2__img=document.createElement('img');
		els.className='ggskin ggskin__2';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u5206\u9488";
		el.ggDx=3;
		el.ggDy=-33;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 45px;';
		hs+='left : calc(50% - ((6px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((45px + 0px) / 2) - 33px);';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me.__2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__2.ggUpdatePosition=function (useTransition) {
		}
		me._button_18.appendChild(me.__2);
		el=me._container_5=document.createElement('div');
		el.ggId="Container 5";
		el.ggDx=3;
		el.ggDy=1;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 14px;';
		hs+='left : calc(50% - ((10px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((14px + 0px) / 2) + 1px);';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._container_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._container_5.ggUpdatePosition=function (useTransition) {
		}
		el=me.__1=document.createElement('div');
		els=me.__1__img=document.createElement('img');
		els.className='ggskin ggskin__1';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u79d2\u9488";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 57px;';
		hs+='left : calc(50% - ((6px + 0px) / 2) + 0px);';
		hs+='position : absolute;';
		hs+='top : -49px;';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__1.ggUpdatePosition=function (useTransition) {
		}
		me._container_5.appendChild(me.__1);
		me._button_18.appendChild(me._container_5);
		el=me.__0=document.createElement('div');
		els=me.__0__img=document.createElement('img');
		els.className='ggskin ggskin__0';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="\u65f6\u9488";
		el.ggDx=3;
		el.ggDy=-25;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : calc(50% - ((6px + 0px) / 2) + 3px);';
		hs+='position : absolute;';
		hs+='top : calc(50% - ((32px + 0px) / 2) - 25px);';
		hs+='visibility : inherit;';
		hs+='width : 6px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 100%';
		me.__0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me.__0.ggUpdatePosition=function (useTransition) {
		}
		me._button_18.appendChild(me.__0);
		me._container_4.appendChild(me._button_18);
		me.divSkin.appendChild(me._container_4);
		el=me.__=document.createElement('div');
		el.ggId="\u5bfc\u822a\u56fe";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='height : 316px;';
		hs+='position : absolute;';
		hs+='right : -1px;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 49px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me.__.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me.__.onmouseenter=function (e) {
			if (player.transitionsDisabled) {
				me.__.style.transition='none';
			} else {
				me.__.style.transition='all 1000ms ease-out 0ms';
			}
			me.__.ggParameter.rx=-299;me.__.ggParameter.ry=0;
			me.__.style.transform=parameterToTransform(me.__.ggParameter);
			me.elementMouseOver['_']=true;
		}
		me.__.onmouseleave=function (e) {
			me.__.style.transition='none';
			me.__.ggParameter.rx=0;me.__.ggParameter.ry=0;
			me.__.style.transform=parameterToTransform(me.__.ggParameter);
			me.elementMouseOver['_']=false;
		}
		me.__.ggUpdatePosition=function (useTransition) {
		}
		el=me._text_1=document.createElement('div');
		els=me._text_1__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="Text 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='color : #000000;';
		hs+='height : 316px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 49px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		hs ='';
		hs += 'box-sizing: border-box;';
		hs+='width: 100%;';
		hs+='height: auto;';
		hs+='max-height: 100%;';
		hs+='text-align: center;';
		hs+='position: absolute;';
		hs+='top: 50%;';
		hs+='transform: translate(0, -50%);';
		hs+='white-space: pre;';
		hs+='padding: 0px;';
		hs+='overflow: hidden;';
		hs+='overflow-y: auto;';
		els.setAttribute('style',hs);
		me._text_1.ggUpdateText=function() {
			var params = [];
			var hs = player._("\u5bfc\n\n\n\u822a\n\n\n\u56fe\n", params);
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._text_1.ggUpdateText();
		el.appendChild(els);
		me._text_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._text_1.ggUpdatePosition=function (useTransition) {
		}
		me.__.appendChild(me._text_1);
		el=me._image_1=document.createElement('div');
		els=me._image_1__img=document.createElement('img');
		els.className='ggskin ggskin_image_1';
		hs=basePath + 'images/image_1.png';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 300px;';
		hs+='position : absolute;';
		hs+='right : -301px;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 300px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_1.ggUpdatePosition=function (useTransition) {
		}
		el=me._marker_1=document.createElement('div');
		el.ggMarkerNodeId='{node2}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 71px;';
		hs+='position : absolute;';
		hs+='top : 182px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_1.onclick=function (e) {
			player.openNext('{node2}');
		}
		me._marker_1.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._marker_1);
		el=me._marker_2=document.createElement('div');
		el.ggMarkerNodeId='{node1}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 205px;';
		hs+='position : absolute;';
		hs+='top : 241px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_2.onclick=function (e) {
			player.openNext('{node1}');
		}
		me._marker_2.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._marker_2);
		el=me._marker_3=document.createElement('div');
		el.ggMarkerNodeId='{node3}';
		el.ggMarkerInstances = [];
		nodeMarker.push(el);
		el.ggId="Marker 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_mark ";
		el.ggType='mark';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 243px;';
		hs+='position : absolute;';
		hs+='top : 264px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._marker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		el.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') { // }
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		me._marker_3.onclick=function (e) {
			player.openNext('{node3}');
		}
		me._marker_3.ggUpdatePosition=function (useTransition) {
		}
		me._image_1.appendChild(me._marker_3);
		me.__.appendChild(me._image_1);
		me.divSkin.appendChild(me.__);
		me._button_9.style.transition='none';
		me._button_9.style.visibility='hidden';
		me._button_9.ggVisible=false;
		me._button_10.style.transition='none';
		me._button_10.style.visibility='hidden';
		me._button_10.ggVisible=false;
		me._button_12.style.transition='none';
		me._button_12.style.visibility='hidden';
		me._button_12.ggVisible=false;
		me._button_22.style.transition='none';
		me._button_22.style.visibility='hidden';
		me._button_22.ggVisible=false;
		me._button_27.style.transition='none';
		me._button_27.style.visibility='hidden';
		me._button_27.ggVisible=false;
		me._timer_1.logicBlock_visible();
		me._timer_2.logicBlock_visible();
		me._timer_3.logicBlock_visible();
		me._loading.logicBlock_visible();
		me._rectangle_2.style.transition='none';
		me._rectangle_2.style.visibility='hidden';
		me._rectangle_2.ggVisible=false;
		me.elementMouseOver['_']=false;
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._marker_1);
		me._marker_1__normal = clonedNormalElement._image_2;
		me._marker_1__normalInst = clonedNormalElement;
		me._marker_1__normal.style.visibility='inherit';
		me._marker_1__normal.style.left='0px';
		me._marker_1__normal.style.top='0px';
		me._marker_1.ggMarkerNormal=me._marker_1__normal;
		me._marker_1.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._marker_1);
		me._marker_1__active = clonedActiveElement._image_3;
		me._marker_1__activeInst = clonedActiveElement;
		me._marker_1__active.style.visibility='hidden';
		me._marker_1__active.style.left='0px';
		me._marker_1__active.style.top='0px';
		me._marker_1.ggMarkerActive=me._marker_1__active;
		me._marker_1.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_1.firstChild) {
			me._marker_1.insertBefore(me._marker_1__active,me._marker_1.firstChild);
		} else {
			me._marker_1.appendChild(me._marker_1__active);
		}
		if (me._marker_1.firstChild) {
			me._marker_1.insertBefore(me._marker_1__normal,me._marker_1.firstChild);
		} else {
			me._marker_1.appendChild(me._marker_1__normal);
		}
		for (var i = 0; i < me._marker_1.childNodes.length; i++) {
			me._marker_1.ggMarkerInstances.push(me._marker_1.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._marker_2);
		me._marker_2__normal = clonedNormalElement._image_2;
		me._marker_2__normalInst = clonedNormalElement;
		me._marker_2__normal.style.visibility='inherit';
		me._marker_2__normal.style.left='0px';
		me._marker_2__normal.style.top='0px';
		me._marker_2.ggMarkerNormal=me._marker_2__normal;
		me._marker_2.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._marker_2);
		me._marker_2__active = clonedActiveElement._image_3;
		me._marker_2__activeInst = clonedActiveElement;
		me._marker_2__active.style.visibility='hidden';
		me._marker_2__active.style.left='0px';
		me._marker_2__active.style.top='0px';
		me._marker_2.ggMarkerActive=me._marker_2__active;
		me._marker_2.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_2.firstChild) {
			me._marker_2.insertBefore(me._marker_2__active,me._marker_2.firstChild);
		} else {
			me._marker_2.appendChild(me._marker_2__active);
		}
		if (me._marker_2.firstChild) {
			me._marker_2.insertBefore(me._marker_2__normal,me._marker_2.firstChild);
		} else {
			me._marker_2.appendChild(me._marker_2__normal);
		}
		for (var i = 0; i < me._marker_2.childNodes.length; i++) {
			me._marker_2.ggMarkerInstances.push(me._marker_2.childNodes[i]);
		}
		var clonedNormalElement = new SkinElement_image_2_Class(this,me._marker_3);
		me._marker_3__normal = clonedNormalElement._image_2;
		me._marker_3__normalInst = clonedNormalElement;
		me._marker_3__normal.style.visibility='inherit';
		me._marker_3__normal.style.left='0px';
		me._marker_3__normal.style.top='0px';
		me._marker_3.ggMarkerNormal=me._marker_3__normal;
		me._marker_3.ggMarkerInstances.push(clonedNormalElement);
		var clonedActiveElement = new SkinElement_image_3_Class(this,me._marker_3);
		me._marker_3__active = clonedActiveElement._image_3;
		me._marker_3__activeInst = clonedActiveElement;
		me._marker_3__active.style.visibility='hidden';
		me._marker_3__active.style.left='0px';
		me._marker_3__active.style.top='0px';
		me._marker_3.ggMarkerActive=me._marker_3__active;
		me._marker_3.ggMarkerInstances.push(clonedActiveElement);
		if (me._marker_3.firstChild) {
			me._marker_3.insertBefore(me._marker_3__active,me._marker_3.firstChild);
		} else {
			me._marker_3.appendChild(me._marker_3__active);
		}
		if (me._marker_3.firstChild) {
			me._marker_3.insertBefore(me._marker_3__normal,me._marker_3.firstChild);
		} else {
			me._marker_3.appendChild(me._marker_3__normal);
		}
		for (var i = 0; i < me._marker_3.childNodes.length; i++) {
			me._marker_3.ggMarkerInstances.push(me._marker_3.childNodes[i]);
		}
		player.addListener('beforechangenode', function(event) {
			if (
				(
					((player.getVariableValue('vis_loader') == true))
				)
			) {
				me._loading.style.transition='none';
				me._loading.style.visibility=(Number(me._loading.style.opacity)>0||!me._loading.style.opacity)?'inherit':'hidden';
				me._loading.ggVisible=true;
			}
		});
		player.addListener('changenode', function(event) {
			me._timer_1.logicBlock_visible();
			me._timer_2.logicBlock_visible();
			me._timer_3.logicBlock_visible();
			me._loading.logicBlock_visible();
		});
		player.addListener('configloaded', function(event) {
			me._loading.logicBlock_visible();
		});
		player.addListener('imagesready', function(event) {
			me._loading.style.transition='none';
			me._loading.style.visibility='hidden';
			me._loading.ggVisible=false;
		});
		player.addListener('tilesrequested', function(event) {
			player.setVariableValue('vis_loader', false);
		});
		player.addListener('varchanged_Hou', function(event) {
			me.__0.style.transition='none';
			me.__0.ggParameter.a=player.getVariableValue("Hou")*10.0;
			me.__0.style.transform=parameterToTransform(me.__0.ggParameter);
		});
		player.addListener('varchanged_Min', function(event) {
			me.__2.style.transition='none';
			me.__2.ggParameter.a=player.getVariableValue("Min")*6.0;
			me.__2.style.transform=parameterToTransform(me.__2.ggParameter);
		});
		player.addListener('varchanged_Sec', function(event) {
			me._container_5.style.transition='none';
			me._container_5.ggParameter.a=player.getVariableValue("Sec")*6.0;
			me._container_5.style.transform=parameterToTransform(me._container_5.ggParameter);
		});
		player.addListener('varchanged_opt_loader', function(event) {
			me._loading.logicBlock_visible();
		});
	};
	function SkinElement_image_3_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._image_3=document.createElement('div');
		els=me._image_3__img=document.createElement('img');
		els.className='ggskin ggskin_image_3';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH3gkRDDMLa/bAqAAAApVJREFUSMeNlU9IVFEUxn93nuO40hxohhBDXLQQJvzDLBKjRS5cTYFBA1ItW1gLRXHROlDGdNEsql2EMEFBjQSChESIYPiHEdwEIohIsxgTTGa0520xZ/LNm/fezIEL5953vu8799x7z1PYLF9/zzr1A7eBR8BNICzrv4DvwFvgK3BWAjScfijjUx7kYeAZ8AC4hLP9Bt4Bz0W0QqTOBRgGXgN3ZL4FLCjYBtDQAQwAEeApcBV4bBWp2IEl+zpgFngCnALJAEZi5HwjG1'+
			'XBIMAPncvN+rpCBcxxiasHksAI8Ne6C59D9n3AQ/GTARom0nq/tV+F55rwLzfhX+5X4bm03m8N0DAhxAimz07mJDAINAJbAYxEWu92GagUEAeuyYgbqFRa73YFMBJSwkbBego0AlHxF8bON7MGahRod0ik3UCNjp1vZoEFWYsKh6fAZTmc7W7VHAR6cLeebtUcLB2+YD0FfC5lq9Uq8Hayggw0dKzrwxyw5kG4tq4Pc3Jty/BuAsdAVvyBaV9nyETPADsO5Dsmemba1xmi+CYQ7LGXwB8gI36kgDkeU20bJjoOpICfMlImOh5TbRvyFiKCyQiHqwAUb0Re/OEC+cmYatlb0tmhI856jzjrXdLZoZhq2SuQnwSGJTbPxW36b04vuQn4DNyyxHm1ipJ9o9hajuDiJbs1u/sUO2WA2qxAseO+t5K7lQhgHvhSIzkSO+/0'+
			'oUzAonwCTAEHNZAfSOyJPXuvHQCsAi8B7RGjJWbVLaBCwJbBK2DRQ2BRYpywgO2QrWY58BvAR+CKQ2kGgRU38molKtkK8AIwLWumrK1UA7sK2DJ6A6Qt87SsuZamaokcSnUd+CT+XaSleJGD+0/fyTJAwuLXZP8AJITP2/lz1iQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTctMTEtMTJUMTA6NTg6MTcrMDg6MDCeFS+OAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE0LTA5LTE3VDEyOjUxOjExKzA4OjAwPzZqHAAAAE10RVh0c29mdHdhcmUASW1hZ2VNYWdpY2sgNy4wLjEtNiBRMTYgeDg2XzY0IDIwMTYtMDktMTcgaHR0cDovL3d3dy5pbWFnZW1hZ2ljay5vcmfd2aVOAAAAGHRFWHRUaHVtYjo6RG9jdW1lbn'+
			'Q6OlBhZ2VzADGn/7svAAAAGHRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA1MTKPjVOBAAAAF3RFWHRUaHVtYjo6SW1hZ2U6OldpZHRoADUxMhx8A9wAAAAZdEVYdFRodW1iOjpNaW1ldHlwZQBpbWFnZS9wbmc/slZOAAAAF3RFWHRUaHVtYjo6TVRpbWUAMTQxMDkyOTQ3Mf/bFNQAAAASdEVYdFRodW1iOjpTaXplADEzLjVLQvFF6pMAAABfdEVYdFRodW1iOjpVUkkAZmlsZTovLy9ob21lL3d3d3Jvb3Qvc2l0ZS93d3cuZWFzeWljb24ubmV0L2Nkbi1pbWcuZWFzeWljb24uY24vc3JjLzExNzU4LzExNzU4MTQucG5nrvvZlAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -357px;';
		hs+='position : absolute;';
		hs+='top : 63px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_3.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_3.ggUpdatePosition=function (useTransition) {
		}
	};
	function SkinElement_image_2_Class(parentScope,ggParent) {
		var me=this;
		var flag=false;
		me.parentScope=parentScope;
		me.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		me.ggNodeId=nodeId;
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.ggUserdata.nodeid=nodeId;
		me.elementMouseDown={};
		me.elementMouseOver={};
		
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		
		el=me._image_2=document.createElement('div');
		els=me._image_2__img=document.createElement('img');
		els.className='ggskin ggskin_image_2';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAAB3RJTUUH3gkRCw4YgO/fTQAAAqxJREFUSMeNlU9IG1EQxn+7JFVEjAj+qTRFRHqIWpDFQ0XpoReRQgseGgi2p9KD7aGCeOhZsITaQz30z6lIID0UWm1FkB5ERBCioDWX0iCkqA0iBm1IGt3tIZO6bnbXDDyY93a+75s3771ZBYu9i900T73ALeAB0Ac0yvpvYAl4D3wD8kXAQ23xHJ/iQt4IPAOGgFrs7RCYBsZFtETE4wBsBN4Ad2S+CcwrCnEAwyAA9AOdwBPgKvDILFKyA1P2HuAl8Bj4C0x5vGr4y/'+
			'T31JXW2jqAX4nDg9tDHQ0neX1U4i4BU8BT4MS8C9Um+17gvvhT1b6KsXhsz9/WUR+prPIuV1Z5l9s66iPx2J6/2lcxJsQIptdKZicwCNQAmx6vGl5bSnapqhIFgsA1GUFVVaJrS8kuj1cNSwlrBOsqUAN0iz8/F9lKqaoyArTaJNKqqsrIXGQrBczLWrdwuArUAygK8eYWXx2g4Wxac4uvrnj4gnUVUB3KVq6V4K1kORkYBoGd7fQBEHMhjO1spw/k2p7DOwkcAynx+wdC7Q26bkwCCRvyhK4bkwOh9gYKbwLBHrsJ/AE2xO88yeujWp9/XdeNIBAFfsiI6roR1Pr86/IWOgWzIRyOAlC4EVnxh4/SuYmA1pRMxPdD2Uy+J5vJ9/yM74cCWlPyKJ2bAIYlNsvZbfpvdi/ZB3wGzI3JrVUUbZFCa0nD2Ut2anb3KHTK'+
			'CsqzHIWO+8FM7lQigFnga5nkSOys3YdzAiblDPAc2C2DfFdiM9bs3XYAsAq8AgyXGENiVp0CSgQsGbwGFlwEFiTGDgtYDtlspgO/AXwELtuUZhBYcSK/qERFWwFeAKemtVNZW7kI7ChgyegtMGOaz8iaY2kuLJFNqa4Dn8S/i7QUN3Jw/unb2QYQNvll2T8aNdzeNVorKQAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxNy0xMS0xMlQxMDo1ODoxMCswODowMFuyEQAAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTQtMDktMTdUMTE6MTQ6MjQrMDg6MDAIu5ZQAAAATXRFWHRzb2Z0d2FyZQBJbWFnZU1hZ2ljayA3LjAuMS02IFExNiB4ODZfNjQgMjAxNi0wOS0xNyBodHRwOi8vd3d3LmltYWdlbWFnaWNrLm9yZ93ZpU'+
			'4AAAAYdEVYdFRodW1iOjpEb2N1bWVudDo6UGFnZXMAMaf/uy8AAAAYdEVYdFRodW1iOjpJbWFnZTo6SGVpZ2h0ADUxMo+NU4EAAAAXdEVYdFRodW1iOjpJbWFnZTo6V2lkdGgANTEyHHwD3AAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNDEwOTIzNjY0+pPlEAAAABJ0RVh0VGh1bWI6OlNpemUAMTMuNEtC8IeApAAAAF90RVh0VGh1bWI6OlVSSQBmaWxlOi8vL2hvbWUvd3d3cm9vdC9zaXRlL3d3dy5lYXN5aWNvbi5uZXQvY2RuLWltZy5lYXN5aWNvbi5jbi9zcmMvMTE3NTYvMTE3NTYxNC5wbmcEIq55AAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		hs ='';
		hs += 'position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;';
		els.setAttribute('style', hs);
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1,def:'' };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 24px;';
		hs+='left : -389px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : inherit;';
		hs+='width : 24px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style.transformOrigin='50% 50%';
		me._image_2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._image_2.ggUpdatePosition=function (useTransition) {
		}
	};
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
		var newMarker=[];
		var id=player.getCurrentNode();
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId.length > 0) && (nodeMarker[i].ggMarkerNodeId.charAt(0)=='{') && (nodeMarker[i].ggMarkerNodeId.substr(1, nodeMarker[i].ggMarkerNodeId.length - 2)==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	});
	me.skinTimerEvent=function() {
		if (player.isInVR()) return;
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me.__3.ggParameter) {
			hs+=parameterToTransform(me.__3.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * player.getPanNorth() + 0)) + 'deg) ';
		me.__3.style.transform=hs;
		me._timer_1.ggUpdateConditionTimer();
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('Sec', Number(new Date().getSeconds()));
			} else {
				player.setVariableValue('Sec', Number(new Date().getSeconds()));
			}
		}
		me._timer_2.ggUpdateConditionTimer();
		if (me._timer_2.ggLastIsActive!=me._timer_2.ggIsActive()) {
			me._timer_2.ggLastIsActive=me._timer_2.ggIsActive();
			if (me._timer_2.ggLastIsActive) {
				player.setVariableValue('Min', Number(new Date().getMinutes()));
			} else {
				player.setVariableValue('Min', Number(new Date().getMinutes()));
			}
		}
		me._timer_3.ggUpdateConditionTimer();
		if (me._timer_3.ggLastIsActive!=me._timer_3.ggIsActive()) {
			me._timer_3.ggLastIsActive=me._timer_3.ggIsActive();
			if (me._timer_3.ggLastIsActive) {
				player.setVariableValue('Hou', Number(new Date().getHours()));
			} else {
				player.setVariableValue('Hou', Number(new Date().getHours()));
			}
		}
		var hs='';
		if (me._loadingbar.ggParameter) {
			hs+=parameterToTransform(me._loadingbar.ggParameter) + ' ';
		}
		hs+='scale(' + (1 * player.getPercentLoaded() + 0) + ',1.0) ';
		me._loadingbar.style.transform=hs;
	};
	player.addListener('timer', me.skinTimerEvent);
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px; line-height: normal; } .ggmarkdown p,.ggmarkdown h1,.ggmarkdown h2,.ggmarkdown h3,.ggmarkdown h4 { margin-top: 0px } .ggmarkdown { white-space:normal }'));
	document.head.appendChild(style);
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onclick) activeElement.onclick();
		}
	});
	document.addEventListener('keydown', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmousedown) activeElement.onmousedown();
		}
	});
	document.addEventListener('keyup', function(e) {
		if (e.key === 'Enter' || e.key === ' ') {
			let activeElement = document.activeElement;
			if (activeElement.classList.contains('ggskin') && activeElement.onmouseup) activeElement.onmouseup();
		}
	});
	me.skinTimerEvent();
	document.fonts.onloadingdone = () => {
		me.updateSize(me.divSkin);
	}
};