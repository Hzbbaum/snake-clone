!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=o(n(1));let i;const c="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;var u;!function(e){e[e.UP=38]="UP",e[e.DOWN=40]="DOWN",e[e.LEFT=37]="LEFT",e[e.RIGHT=39]="RIGHT"}(u||(u={}));window.screen.width,window.screen.height;const l=[{x:33,y:50},{x:32,y:50},{x:31,y:50},{x:30,y:50}];let s,a,d,h,f=u.RIGHT,y=6,x=l,p=[];function g(){d.clearRect(0,0,a.width,a.height),b(),d.strokeStyle=h,d.lineWidth=2,d.lineCap="round",d.lineJoin="round",d.beginPath(),null==d||d.moveTo(x[0].x,x[0].y),x.slice(1).forEach(e=>null==d?void 0:d.lineTo(e.x,e.y)),d.stroke(),p.forEach(e=>{d.beginPath(),d.strokeStyle="red",d.fillStyle="red",d.arc(e.x,e.y,.5,0,2*Math.PI),d.stroke(),d.fill()}),c?a.ontouchstart=v:document.onkeydown=w;const e=function(e){switch(f){case u.DOWN:return{x:e.x,y:e.y+1};case u.UP:return{x:e.x,y:e.y-1};case u.RIGHT:return{x:e.x+1,y:e.y};case u.LEFT:return{x:e.x-1,y:e.y};default:return e}}(x[0]);var t;!function(e){p.forEach((t,n)=>{(function(e,t,n){let o=Math.pow(Math.abs(e.x-t.x),2),r=Math.pow(Math.abs(e.y-t.y),2);return n-Math.pow(o+r,.5)>0})(t,e,2)&&(null==i||i.increment(1),p.splice(n,1),y++)})}(e),p.length<3&&function(){let e={x:5+Math.floor(190*Math.random()),y:5+Math.floor(190*Math.random())};x.find(t=>t==e)||p.find(t=>t==e)||p.push(e)}(),t=e,(x.find(e=>e===t)||t.x>=200||t.x<=0||t.y>=200||t.y<=0)&&T(),x=[e,...x],x.length>y&&x.pop()}function m(){i.reset(),p=[],x=l,y=6,f=u.RIGHT,s=setInterval(g,17)}function T(){clearInterval(s)}function w(e){const t=37+(f-37+2)%4;e.keyCode in u&&e.keyCode!==t&&(f=e.keyCode,document.onkeydown=null)}function v(e){let t=a.getBoundingClientRect(),n=e.touches[0].clientX-t.x,o=e.touches[0].clientY-t.y,r=t.width*x[x.length-1].x/200,i=t.height*x[x.length-1].y/200;const c=f==u.LEFT||f==u.RIGHT;f=c?o<i?u.UP:u.DOWN:n<r?u.LEFT:u.RIGHT}function b(){d.rect(0,0,a.width,a.height),d.strokeStyle="black",d.lineWidth=1,d.stroke()}window.onload=()=>{document.querySelector("#startButton").addEventListener("click",m),document.querySelector("#stopButton").addEventListener("click",T),a=document.querySelector("#game"),i=new r.default(document.querySelector("#scoreBox"));try{d=a.getContext("2d")}catch(e){console.log("could not find ctx")}h=d.createLinearGradient(0,0,a.width,a.height),h.addColorStop(.25,"#73e943"),h.addColorStop(.75,"#73e943"),h.addColorStop(.5,"#42801d"),b()}},function(e,t,n){"use strict";e.exports=class{constructor(e,t){this._score=t||0,this.element=e,this.element.innerText=this.score.toString()}get score(){return this._score}set score(e){this._score=e,this.element.innerText=this._score.toString()}reset(){this._score=0,this.element.innerText="0"}increment(e){this._score+=e,this.element.innerText=this._score.toString()}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGV2L3NuYWtlLnRzIiwid2VicGFjazovLy8uL2Rldi9zY29yZUNsYXNzLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwic2NvcmUiLCJpc1RvdWNoIiwid2luZG93IiwibmF2aWdhdG9yIiwibWF4VG91Y2hQb2ludHMiLCJtc01heFRvdWNoUG9pbnRzIiwiZGlyZWN0aW9uX2VudW0iLCJzY3JlZW4iLCJ3aWR0aCIsImhlaWdodCIsIklOSVRJQUxfU05BS0UiLCJ4IiwieSIsImdhbWUiLCJjYW52YXMiLCJjdHgiLCJzbmFrZUNvbG9yR3JhZGllbnQiLCJtdm1udERpcmVjdGlvbiIsIlJJR0hUIiwibWF4U25ha2VMZW5ndGgiLCJzbmFrZSIsImFwcGxlUG9zaXRpb24iLCJkb3R1cm4iLCJjbGVhclJlY3QiLCJyZW5kZXJCb3JkZXIiLCJzdHJva2VTdHlsZSIsImxpbmVXaWR0aCIsImxpbmVDYXAiLCJsaW5lSm9pbiIsImJlZ2luUGF0aCIsIm1vdmVUbyIsInNsaWNlIiwiZm9yRWFjaCIsInBvaW50IiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbFN0eWxlIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm9udG91Y2hzdGFydCIsImNoYW5nZURpcmVjdGlvblRvdWNoU2NyZWVuIiwiZG9jdW1lbnQiLCJvbmtleWRvd24iLCJjaGFuZ2VEaXJlY3Rpb24iLCJuZXdTZWdlbWVudCIsImNvb3JkaW5hdGVUb0luY3JlbWVudCIsIkRPV04iLCJVUCIsIkxFRlQiLCJpbmNyZW1lbnQiLCJuZXdlc3RTZWdlbWVudCIsImluZGV4IiwicG9pbnRBIiwicG9pbnRCIiwicmFuZ2UiLCJkaXN0YW5jZVgiLCJwb3ciLCJhYnMiLCJkaXN0YW5jZVkiLCJJbkV1Y2xpZERpc3RhbmNlIiwic3BsaWNlIiwiY2hlY2tBcHBsZUVhdGVuIiwibGVuZ3RoIiwicHJvcG9zZWRDb29yZGluYXRlIiwiZmxvb3IiLCJyYW5kb20iLCJmaW5kIiwicHVzaCIsImdlbmVyYXRlQXBwbGUiLCJzdG9wIiwicG9wIiwic3RhcnQiLCJyZXNldCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImUiLCJpbGVnYWxEaXJlY3Rpb24iLCJrZXlDb2RlIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlbGF0aXZlY2xpY2siLCJ0b3VjaGVzIiwiY2xpZW50WCIsImNsaWVudFkiLCJzbmFrZVBpeGVsUG9zaXRpb24iLCJtb3ZpbmdIb3Jpem9udGFsIiwicmVjdCIsIm9ubG9hZCIsInF1ZXJ5U2VsZWN0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZ2V0Q29udGV4dCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNyZWF0ZUxpbmVhckdyYWRpZW50IiwiYWRkQ29sb3JTdG9wIiwiZWxlbWVudCIsImluaXRpYWxTY29yZSIsInRoaXMiLCJfc2NvcmUiLCJpbm5lclRleHQiLCJ0b1N0cmluZyIsIm5ld3Njb3JlIiwidG9BZGQiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT3JCLEVBQW9CVSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSekIsRUFBb0I2QixFQUFJLFNBQVMxQixHQUNoQyxJQUFJUyxFQUFTVCxHQUFVQSxFQUFPcUIsV0FDN0IsV0FBd0IsT0FBT3JCLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFILEVBQW9CVSxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSWixFQUFvQmEsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekcvQixFQUFvQmtDLEVBQUksR0FJakJsQyxFQUFvQkEsRUFBb0JtQyxFQUFJLEcsb0tDakZyRCxnQkFDQSxJQUFJQyxFQUNKLE1BQU1DLEVBQ0osaUJBQWtCQyxRQUNsQkMsVUFBVUMsZUFBaUIsR0FDM0JELFVBQVVFLGlCQUFtQixFQUMvQixJQUFLQyxHQUFMLFNBQUtBLEdBQ0gsZ0JBQ0Esb0JBQ0Esb0JBQ0Esc0JBSkYsQ0FBS0EsTUFBYyxLQVdDSixPQUFPSyxPQUFPQyxNQUNiTixPQUFPSyxPQUFPRSxPQURuQyxNQUtNQyxFQUFnQixDQUNwQixDQUFFQyxFQUFHLEdBQUlDLEVBQUcsSUFDWixDQUFFRCxFQUFHLEdBQUlDLEVBQUcsSUFDWixDQUFFRCxFQUFHLEdBQUlDLEVBQUcsSUFDWixDQUFFRCxFQUFHLEdBQUlDLEVBQUcsS0FNZCxJQUlJQyxFQUVBQyxFQUNBQyxFQUNBQyxFQVJBQyxFQUFpQ1gsRUFBZVksTUFDaERDLEVBSnlCLEVBS3pCQyxFQUFzQlYsRUFPdEJXLEVBQThCLEdBZ0NsQyxTQUFTQyxJQXdHUFAsRUFBSVEsVUFBVSxFQUFHLEVBQUdULEVBQU9OLE1BQU9NLEVBQU9MLFFBdEd6Q2UsSUFpSEFULEVBQUlVLFlBQWNULEVBQ2xCRCxFQUFJVyxVQUFZLEVBQ2hCWCxFQUFJWSxRQUFVLFFBQ2RaLEVBQUlhLFNBQVcsUUFFZmIsRUFBSWMsWUFDSmQsV0FBS2UsT0FBT1YsRUFBTSxHQUFHVCxFQUFHUyxFQUFNLEdBQUdSLEdBQ2pDUSxFQUFNVyxNQUFNLEdBQUdDLFFBQVNDLEdBQVVsQixhQUFHLEVBQUhBLEVBQUttQixPQUFPRCxFQUFNdEIsRUFBR3NCLEVBQU1yQixJQUM3REcsRUFBSW9CLFNBR0pkLEVBQWNXLFFBQVNsQyxJQUNyQmlCLEVBQUljLFlBQ0pkLEVBQUlVLFlBQWMsTUFDbEJWLEVBQUlxQixVQUFZLE1BQ2hCckIsRUFBSXNCLElBQUl2QyxFQUFFYSxFQUFHYixFQUFFYyxFQUFHLEdBQUssRUFBRyxFQUFJMEIsS0FBS0MsSUFDbkN4QixFQUFJb0IsU0FDSnBCLEVBQUl5QixTQS9IRnZDLEVBQVNhLEVBQU8yQixhQUFlQyxFQUM5QkMsU0FBU0MsVUFBWUMsRUFDMUIsTUFBTUMsRUFxQlIsU0FBbUJDLEdBQ2pCLE9BQVE5QixHQUNOLEtBQUtYLEVBQWUwQyxLQUNsQixNQUFPLENBQUVyQyxFQUFHb0MsRUFBc0JwQyxFQUFHQyxFQUFHbUMsRUFBc0JuQyxFQUFJLEdBQ3BFLEtBQUtOLEVBQWUyQyxHQUNsQixNQUFPLENBQUV0QyxFQUFHb0MsRUFBc0JwQyxFQUFHQyxFQUFHbUMsRUFBc0JuQyxFQUFJLEdBQ3BFLEtBQUtOLEVBQWVZLE1BQ2xCLE1BQU8sQ0FBRVAsRUFBR29DLEVBQXNCcEMsRUFBSSxFQUFHQyxFQUFHbUMsRUFBc0JuQyxHQUNwRSxLQUFLTixFQUFlNEMsS0FDbEIsTUFBTyxDQUFFdkMsRUFBR29DLEVBQXNCcEMsRUFBSSxFQUFHQyxFQUFHbUMsRUFBc0JuQyxHQUNwRSxRQUNFLE9BQU9tQyxHQWhDcUJJLENBQVUvQixFQUFNLElBbUVsRCxJQUF5QmdDLEdBb0J6QixTQUF5Qk4sR0FDdkJ6QixFQUFjVyxRQUFRLENBQUNsQyxFQUFHdUQsTUEwQzVCLFNBQ0VDLEVBQ0FDLEVBQ0FDLEdBRUEsSUFBSUMsRUFBWW5CLEtBQUtvQixJQUFJcEIsS0FBS3FCLElBQUlMLEVBQU8zQyxFQUFJNEMsRUFBTzVDLEdBQUksR0FDcERpRCxFQUFZdEIsS0FBS29CLElBQUlwQixLQUFLcUIsSUFBSUwsRUFBTzFDLEVBQUkyQyxFQUFPM0MsR0FBSSxHQUN4RCxPQUFPNEMsRUFBUWxCLEtBQUtvQixJQUFJRCxFQUFZRyxFQUFXLElBQU8sR0FoRGhEQyxDQUFpQi9ELEVBQUdnRCxFQUFhLEtBQ25DOUMsV0FBT21ELFVBQVUsR0FDakI5QixFQUFjeUMsT0FBT1QsRUFBTyxHQUM1QmxDLE9BM0ZKNEMsQ0FBZ0JqQixHQUNaekIsRUFBYzJDLE9BcERNLEdBOEgxQixXQUNFLElBQUlDLEVBQWlDLENBQ25DdEQsRUFBRyxFQUFJMkIsS0FBSzRCLE1BQXNCLElBQWhCNUIsS0FBSzZCLFVBQ3ZCdkQsRUFBRyxFQUFJMEIsS0FBSzRCLE1BQXNCLElBQWhCNUIsS0FBSzZCLFdBR3RCL0MsRUFBTWdELEtBQU10RSxHQUFNQSxHQUFLbUUsSUFDdkI1QyxFQUFjK0MsS0FBTXRFLEdBQU1BLEdBQUttRSxJQUVoQzVDLEVBQWNnRCxLQUFLSixHQW5GeUJLLEdBaUV2QmxCLEVBaEVITixHQWtFaEIxQixFQUFNZ0QsS0FBTXRFLEdBQU1BLElBQU1zRCxJQUMxQkEsRUFBZXpDLEdBQUssS0FDcEJ5QyxFQUFlekMsR0FBSyxHQUNwQnlDLEVBQWV4QyxHQUFLLEtBQ3BCd0MsRUFBZXhDLEdBQUssSUFyRXBCMkQsSUFHRm5ELEVBQVEsQ0FBQzBCLEtBQWdCMUIsR0FDckJBLEVBQU00QyxPQUFTN0MsR0FBZ0JDLEVBQU1vRCxNQUUzQyxTQUFTQyxJQUNQekUsRUFBTTBFLFFBQ05yRCxFQUFnQixHQUNoQkQsRUFBUVYsRUFDUlMsRUFqRTJCLEVBa0UzQkYsRUFBaUJYLEVBQWVZLE1BQ2hDTCxFQUFPOEQsWUFBWXJELEVBcEVFLElBc0V2QixTQUFTaUQsSUFDUEssY0FBYy9ELEdBZ0JoQixTQUFTZ0MsRUFBZ0JnQyxHQUN2QixNQUFNQyxFQUFrQixJQUFPN0QsRUFBaUIsR0FBSyxHQUFLLEVBQ3RENEQsRUFBRUUsV0FBV3pFLEdBQWtCdUUsRUFBRUUsVUFBWUQsSUFDL0M3RCxFQUFpQjRELEVBQUVFLFFBQ25CcEMsU0FBU0MsVUFBWSxNQUd6QixTQUFTRixFQUEyQm1DLEdBQ2xDLElBQUlHLEVBQWFsRSxFQUFPbUUsd0JBQ3BCQyxFQUNDTCxFQUFFTSxRQUFRLEdBQUdDLFFBQVVKLEVBQVdyRSxFQURuQ3VFLEVBRUNMLEVBQUVNLFFBQVEsR0FBR0UsUUFBVUwsRUFBV3BFLEVBRW5DMEUsRUFDRU4sRUFBV3hFLE1BQVFZLEVBQU1BLEVBQU00QyxPQUFTLEdBQUdyRCxFQTdHdEIsSUE0R3ZCMkUsRUFFRU4sRUFBV3ZFLE9BQVNXLEVBQU1BLEVBQU00QyxPQUFTLEdBQUdwRCxFQTdHdEIsSUErRzVCLE1BQU0yRSxFQUNKdEUsR0FBa0JYLEVBQWU0QyxNQUNqQ2pDLEdBQWtCWCxFQUFlWSxNQU9qQ0QsRUFOR3NFLEVBT0RMLEVBQWtCSSxFQUNkaEYsRUFBZTJDLEdBQ2YzQyxFQUFlMEMsS0FQbkJrQyxFQUFrQkksRUFDZGhGLEVBQWU0QyxLQUNmNUMsRUFBZVksTUEwQ3pCLFNBQVNNLElBQ1BULEVBQUl5RSxLQUFLLEVBQUcsRUFBRzFFLEVBQU9OLE1BQU9NLEVBQU9MLFFBQ3BDTSxFQUFJVSxZQUFjLFFBQ2xCVixFQUFJVyxVQUFZLEVBQ2hCWCxFQUFJb0IsU0E1SU5qQyxPQUFPdUYsT0FBUyxLQUNiOUMsU0FBUytDLGNBQ1IsZ0JBQ3NCQyxpQkFBaUIsUUFBU2xCLEdBQ2pEOUIsU0FBUytDLGNBQWMsZUFBcUNDLGlCQUMzRCxRQUNBcEIsR0FFRnpELEVBQVM2QixTQUFTK0MsY0FBYyxTQUNoQzFGLEVBQVEsSUFBSSxVQUFNMkMsU0FBUytDLGNBQWMsY0FDekMsSUFDRTNFLEVBQU1ELEVBQU84RSxXQUFXLE1BQ3hCLE1BQU9DLEdBQ1BDLFFBQVFDLElBQUksc0JBRWQvRSxFQUFxQkQsRUFBSWlGLHFCQUN2QixFQUNBLEVBQ0FsRixFQUFPTixNQUNQTSxFQUFPTCxRQUVUTyxFQUFtQmlGLGFBQWEsSUFBTSxXQUN0Q2pGLEVBQW1CaUYsYUFBYSxJQUFNLFdBQ3RDakYsRUFBbUJpRixhQUFhLEdBQUssV0FDckN6RSxNLDZCQzlDRixVQXhCQSxNQUdFLFlBQVkwRSxFQUEwQkMsR0FDcENDLEtBQUtDLE9BQVNGLEdBQWdCLEVBQzlCQyxLQUFLRixRQUFVQSxFQUNmRSxLQUFLRixRQUFRSSxVQUFZRixLQUFLcEcsTUFBTXVHLFdBRXRDLFlBQ0UsT0FBT0gsS0FBS0MsT0FFZCxVQUFVRyxHQUNSSixLQUFLQyxPQUFTRyxFQUNkSixLQUFLRixRQUFRSSxVQUFZRixLQUFLQyxPQUFPRSxXQUV2QyxRQUNFSCxLQUFLQyxPQUFTLEVBQ2RELEtBQUtGLFFBQVFJLFVBQVksSUFFM0IsVUFBVUcsR0FDUkwsS0FBS0MsUUFBVUksRUFDZkwsS0FBS0YsUUFBUUksVUFBWUYsS0FBS0MsT0FBT0UiLCJmaWxlIjoic25ha2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCIvLyNyZWdpb24gY29uc3RhbnRzXHJcbmltcG9ydCBTY29yZSBmcm9tIFwiLi9zY29yZUNsYXNzXCI7XHJcbmxldCBzY29yZTogU2NvcmUgfCBudWxsO1xyXG5jb25zdCBpc1RvdWNoOiBib29sZWFuID1cclxuICBcIm9udG91Y2hzdGFydFwiIGluIHdpbmRvdyB8fFxyXG4gIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDAgfHxcclxuICBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDA7XHJcbmVudW0gZGlyZWN0aW9uX2VudW0ge1xyXG4gIFVQID0gMzgsXHJcbiAgRE9XTiA9IDQwLFxyXG4gIExFRlQgPSAzNyxcclxuICBSSUdIVCA9IDM5LFxyXG59XHJcblxyXG5pbnRlcmZhY2UgY29vcmRpbmF0ZSB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5jb25zdCBzY3JlZW5XaWR0aCA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XHJcbmNvbnN0IHNjcmVlbkhlaWdodCA9IHdpbmRvdy5zY3JlZW4uaGVpZ2h0O1xyXG5cclxuY29uc3QgQ0FOVkFTX1dJRFRIOiBudW1iZXIgPSAyMDA7XHJcbmNvbnN0IENBTlZBU19IRUlHSFQ6IG51bWJlciA9IDIwMDtcclxuY29uc3QgSU5JVElBTF9TTkFLRSA9IFtcclxuICB7IHg6IDMzLCB5OiA1MCB9LFxyXG4gIHsgeDogMzIsIHk6IDUwIH0sXHJcbiAgeyB4OiAzMSwgeTogNTAgfSxcclxuICB7IHg6IDMwLCB5OiA1MCB9LFxyXG5dO1xyXG5jb25zdCBUSUNLX0xFTkdUSF9NUyA9IDE3O1xyXG5jb25zdCBJTklUSUFMX1NOQUtFX0xFTkdUSCA9IDY7XHJcbmNvbnN0IE1BWF9OVU1CRVJfQVBQTEVTID0gMztcclxuXHJcbmxldCBtdm1udERpcmVjdGlvbjogZGlyZWN0aW9uX2VudW0gPSBkaXJlY3Rpb25fZW51bS5SSUdIVDtcclxubGV0IG1heFNuYWtlTGVuZ3RoOiBudW1iZXIgPSBJTklUSUFMX1NOQUtFX0xFTkdUSDtcclxubGV0IHNuYWtlOiBjb29yZGluYXRlW10gPSBJTklUSUFMX1NOQUtFO1xyXG4vLyBsZXQgc2NvcmU6IG51bWJlciA9IDA7XHJcbmxldCBnYW1lOiBudW1iZXI7XHJcblxyXG5sZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxubGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5sZXQgc25ha2VDb2xvckdyYWRpZW50OiBDYW52YXNHcmFkaWVudDtcclxubGV0IGFwcGxlUG9zaXRpb246IGNvb3JkaW5hdGVbXSA9IFtdO1xyXG4vLyNlbmRyZWdpb25cclxuXHJcbi8vI3JlZ2lvbiBzZXR1cFxyXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xyXG4gIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCIjc3RhcnRCdXR0b25cIlxyXG4gICkgYXMgSFRNTEJ1dHRvbkVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdGFydCk7XHJcbiAgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RvcEJ1dHRvblwiKSBhcyBIVE1MQnV0dG9uRWxlbWVudCkuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgIFwiY2xpY2tcIixcclxuICAgIHN0b3BcclxuICApO1xyXG4gIGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZ2FtZVwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBzY29yZSA9IG5ldyBTY29yZShkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Njb3JlQm94XCIpIGFzIEhUTUxEYXRhRWxlbWVudCk7XHJcbiAgdHJ5IHtcclxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcImNvdWxkIG5vdCBmaW5kIGN0eFwiKTtcclxuICB9XHJcbiAgc25ha2VDb2xvckdyYWRpZW50ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KFxyXG4gICAgMCxcclxuICAgIDAsXHJcbiAgICBjYW52YXMud2lkdGgsXHJcbiAgICBjYW52YXMuaGVpZ2h0XHJcbiAgKTtcclxuICBzbmFrZUNvbG9yR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuMjUsIFwiIzczZTk0M1wiKTtcclxuICBzbmFrZUNvbG9yR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNzUsIFwiIzczZTk0M1wiKTtcclxuICBzbmFrZUNvbG9yR3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgXCIjNDI4MDFkXCIpO1xyXG4gIHJlbmRlckJvcmRlcigpO1xyXG59O1xyXG4vLyNlbmRyZWdpb25cclxuLy8jcmVnaW9uIGdhbWUgbG9naWNcclxuZnVuY3Rpb24gZG90dXJuKCk6IHZvaWQge1xyXG4gIGNsZWFyQm9hcmQoKTtcclxuICByZW5kZXJCb3JkZXIoKTtcclxuICByZW5kZXJTbmFrZSgpO1xyXG4gIHJlbmRlckFwcGxlcygpO1xyXG4gIGlmIChpc1RvdWNoKSBjYW52YXMub250b3VjaHN0YXJ0ID0gY2hhbmdlRGlyZWN0aW9uVG91Y2hTY3JlZW47XHJcbiAgZWxzZSBkb2N1bWVudC5vbmtleWRvd24gPSBjaGFuZ2VEaXJlY3Rpb247XHJcbiAgY29uc3QgbmV3U2VnZW1lbnQ6IGNvb3JkaW5hdGUgPSBpbmNyZW1lbnQoc25ha2VbMF0pO1xyXG4gIGNoZWNrQXBwbGVFYXRlbihuZXdTZWdlbWVudCk7XHJcbiAgaWYgKGFwcGxlUG9zaXRpb24ubGVuZ3RoIDwgTUFYX05VTUJFUl9BUFBMRVMpIGdlbmVyYXRlQXBwbGUoKTtcclxuICBpZiAoZGV0ZWN0Q29sbGlzaW9uKG5ld1NlZ2VtZW50KSkge1xyXG4gICAgc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgc25ha2UgPSBbbmV3U2VnZW1lbnQsIC4uLnNuYWtlXTtcclxuICBpZiAoc25ha2UubGVuZ3RoID4gbWF4U25ha2VMZW5ndGgpIHNuYWtlLnBvcCgpO1xyXG59XHJcbmZ1bmN0aW9uIHN0YXJ0KCkge1xyXG4gIHNjb3JlLnJlc2V0KCk7XHJcbiAgYXBwbGVQb3NpdGlvbiA9IFtdO1xyXG4gIHNuYWtlID0gSU5JVElBTF9TTkFLRTtcclxuICBtYXhTbmFrZUxlbmd0aCA9IElOSVRJQUxfU05BS0VfTEVOR1RIO1xyXG4gIG12bW50RGlyZWN0aW9uID0gZGlyZWN0aW9uX2VudW0uUklHSFQ7XHJcbiAgZ2FtZSA9IHNldEludGVydmFsKGRvdHVybiwgVElDS19MRU5HVEhfTVMpO1xyXG59XHJcbmZ1bmN0aW9uIHN0b3AoKSB7XHJcbiAgY2xlYXJJbnRlcnZhbChnYW1lKTtcclxufVxyXG5mdW5jdGlvbiBpbmNyZW1lbnQoY29vcmRpbmF0ZVRvSW5jcmVtZW50OiBjb29yZGluYXRlKTogY29vcmRpbmF0ZSB7XHJcbiAgc3dpdGNoIChtdm1udERpcmVjdGlvbikge1xyXG4gICAgY2FzZSBkaXJlY3Rpb25fZW51bS5ET1dOOlxyXG4gICAgICByZXR1cm4geyB4OiBjb29yZGluYXRlVG9JbmNyZW1lbnQueCwgeTogY29vcmRpbmF0ZVRvSW5jcmVtZW50LnkgKyAxIH07XHJcbiAgICBjYXNlIGRpcmVjdGlvbl9lbnVtLlVQOlxyXG4gICAgICByZXR1cm4geyB4OiBjb29yZGluYXRlVG9JbmNyZW1lbnQueCwgeTogY29vcmRpbmF0ZVRvSW5jcmVtZW50LnkgLSAxIH07XHJcbiAgICBjYXNlIGRpcmVjdGlvbl9lbnVtLlJJR0hUOlxyXG4gICAgICByZXR1cm4geyB4OiBjb29yZGluYXRlVG9JbmNyZW1lbnQueCArIDEsIHk6IGNvb3JkaW5hdGVUb0luY3JlbWVudC55IH07XHJcbiAgICBjYXNlIGRpcmVjdGlvbl9lbnVtLkxFRlQ6XHJcbiAgICAgIHJldHVybiB7IHg6IGNvb3JkaW5hdGVUb0luY3JlbWVudC54IC0gMSwgeTogY29vcmRpbmF0ZVRvSW5jcmVtZW50LnkgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiBjb29yZGluYXRlVG9JbmNyZW1lbnQ7XHJcbiAgfVxyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZURpcmVjdGlvbihlOiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgY29uc3QgaWxlZ2FsRGlyZWN0aW9uID0gMzcgKyAoKG12bW50RGlyZWN0aW9uIC0gMzcgKyAyKSAlIDQpO1xyXG4gIGlmIChlLmtleUNvZGUgaW4gZGlyZWN0aW9uX2VudW0gJiYgZS5rZXlDb2RlICE9PSBpbGVnYWxEaXJlY3Rpb24pIHtcclxuICAgIG12bW50RGlyZWN0aW9uID0gZS5rZXlDb2RlO1xyXG4gICAgZG9jdW1lbnQub25rZXlkb3duID0gbnVsbDtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlRGlyZWN0aW9uVG91Y2hTY3JlZW4oZTogVG91Y2hFdmVudCkge1xyXG4gIGxldCBjYW52YXNSZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gIGxldCByZWxhdGl2ZWNsaWNrOiBjb29yZGluYXRlID0ge1xyXG4gICAgeDogZS50b3VjaGVzWzBdLmNsaWVudFggLSBjYW52YXNSZWN0LngsXHJcbiAgICB5OiBlLnRvdWNoZXNbMF0uY2xpZW50WSAtIGNhbnZhc1JlY3QueSxcclxuICB9O1xyXG4gIGxldCBzbmFrZVBpeGVsUG9zaXRpb24gPSB7XHJcbiAgICB4OiAoY2FudmFzUmVjdC53aWR0aCAqIHNuYWtlW3NuYWtlLmxlbmd0aCAtIDFdLngpIC8gQ0FOVkFTX1dJRFRILFxyXG4gICAgeTogKGNhbnZhc1JlY3QuaGVpZ2h0ICogc25ha2Vbc25ha2UubGVuZ3RoIC0gMV0ueSkgLyBDQU5WQVNfSEVJR0hULFxyXG4gIH07XHJcbiAgY29uc3QgbW92aW5nSG9yaXpvbnRhbDogYm9vbGVhbiA9XHJcbiAgICBtdm1udERpcmVjdGlvbiA9PSBkaXJlY3Rpb25fZW51bS5MRUZUIHx8XHJcbiAgICBtdm1udERpcmVjdGlvbiA9PSBkaXJlY3Rpb25fZW51bS5SSUdIVDtcclxuICBpZiAoIW1vdmluZ0hvcml6b250YWwpIHtcclxuICAgIG12bW50RGlyZWN0aW9uID1cclxuICAgICAgcmVsYXRpdmVjbGljay54IDwgc25ha2VQaXhlbFBvc2l0aW9uLnhcclxuICAgICAgICA/IGRpcmVjdGlvbl9lbnVtLkxFRlRcclxuICAgICAgICA6IGRpcmVjdGlvbl9lbnVtLlJJR0hUO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBtdm1udERpcmVjdGlvbiA9XHJcbiAgICAgIHJlbGF0aXZlY2xpY2sueSA8IHNuYWtlUGl4ZWxQb3NpdGlvbi55XHJcbiAgICAgICAgPyBkaXJlY3Rpb25fZW51bS5VUFxyXG4gICAgICAgIDogZGlyZWN0aW9uX2VudW0uRE9XTjtcclxuICB9XHJcbn1cclxuZnVuY3Rpb24gZGV0ZWN0Q29sbGlzaW9uKG5ld2VzdFNlZ2VtZW50OiBjb29yZGluYXRlKTogYm9vbGVhbiB7XHJcbiAgcmV0dXJuIChcclxuICAgICEhc25ha2UuZmluZCgocCkgPT4gcCA9PT0gbmV3ZXN0U2VnZW1lbnQpIHx8XHJcbiAgICBuZXdlc3RTZWdlbWVudC54ID49IDIwMCB8fFxyXG4gICAgbmV3ZXN0U2VnZW1lbnQueCA8PSAwIHx8XHJcbiAgICBuZXdlc3RTZWdlbWVudC55ID49IDIwMCB8fFxyXG4gICAgbmV3ZXN0U2VnZW1lbnQueSA8PSAwXHJcbiAgKTtcclxufVxyXG5mdW5jdGlvbiBnZW5lcmF0ZUFwcGxlKCkge1xyXG4gIGxldCBwcm9wb3NlZENvb3JkaW5hdGU6IGNvb3JkaW5hdGUgPSB7XHJcbiAgICB4OiA1ICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTkwKSxcclxuICAgIHk6IDUgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxOTApLFxyXG4gIH07XHJcbiAgaWYgKFxyXG4gICAgIXNuYWtlLmZpbmQoKHApID0+IHAgPT0gcHJvcG9zZWRDb29yZGluYXRlKSAmJlxyXG4gICAgIWFwcGxlUG9zaXRpb24uZmluZCgocCkgPT4gcCA9PSBwcm9wb3NlZENvb3JkaW5hdGUpXHJcbiAgKVxyXG4gICAgYXBwbGVQb3NpdGlvbi5wdXNoKHByb3Bvc2VkQ29vcmRpbmF0ZSk7XHJcbn1cclxuZnVuY3Rpb24gY2hlY2tBcHBsZUVhdGVuKG5ld1NlZ2VtZW50OiBjb29yZGluYXRlKSB7XHJcbiAgYXBwbGVQb3NpdGlvbi5mb3JFYWNoKChwLCBpbmRleCkgPT4ge1xyXG4gICAgaWYgKEluRXVjbGlkRGlzdGFuY2UocCwgbmV3U2VnZW1lbnQsIDIpKSB7XHJcbiAgICAgIHNjb3JlPy5pbmNyZW1lbnQoMSk7XHJcbiAgICAgIGFwcGxlUG9zaXRpb24uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgbWF4U25ha2VMZW5ndGgrKztcclxuICAgIH1cclxuICB9KTtcclxufVxyXG5mdW5jdGlvbiBjbGVhckJvYXJkKCkge1xyXG4gIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxufVxyXG4vLyNlbmRyZWdpb25cclxuLy8jcmVnaW9uIHJlbmRlciBmdW5jdGlvblxyXG5mdW5jdGlvbiByZW5kZXJCb3JkZXIoKSB7XHJcbiAgY3R4LnJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICBjdHguc3Ryb2tlU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgY3R4LmxpbmVXaWR0aCA9IDE7XHJcbiAgY3R4LnN0cm9rZSgpO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclNuYWtlKCkge1xyXG4gIGN0eC5zdHJva2VTdHlsZSA9IHNuYWtlQ29sb3JHcmFkaWVudDtcclxuICBjdHgubGluZVdpZHRoID0gMjtcclxuICBjdHgubGluZUNhcCA9IFwicm91bmRcIjtcclxuICBjdHgubGluZUpvaW4gPSBcInJvdW5kXCI7XHJcblxyXG4gIGN0eC5iZWdpblBhdGgoKTtcclxuICBjdHg/Lm1vdmVUbyhzbmFrZVswXS54LCBzbmFrZVswXS55KTtcclxuICBzbmFrZS5zbGljZSgxKS5mb3JFYWNoKChwb2ludCkgPT4gY3R4Py5saW5lVG8ocG9pbnQueCwgcG9pbnQueSkpO1xyXG4gIGN0eC5zdHJva2UoKTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJBcHBsZXMoKSB7XHJcbiAgYXBwbGVQb3NpdGlvbi5mb3JFYWNoKChwKSA9PiB7XHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwicmVkXCI7XHJcbiAgICBjdHguYXJjKHAueCwgcC55LCAwLjUsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGN0eC5zdHJva2UoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgfSk7XHJcbn1cclxuLy8jZW5kcmVnaW9uXHJcbi8vI3JlZ2lvbiBoZWxwZXIgZnVuY3Rpb25zXHJcbmZ1bmN0aW9uIEluRXVjbGlkRGlzdGFuY2UoXHJcbiAgcG9pbnRBOiBjb29yZGluYXRlLFxyXG4gIHBvaW50QjogY29vcmRpbmF0ZSxcclxuICByYW5nZTogbnVtYmVyXHJcbikge1xyXG4gIGxldCBkaXN0YW5jZVggPSBNYXRoLnBvdyhNYXRoLmFicyhwb2ludEEueCAtIHBvaW50Qi54KSwgMik7XHJcbiAgbGV0IGRpc3RhbmNlWSA9IE1hdGgucG93KE1hdGguYWJzKHBvaW50QS55IC0gcG9pbnRCLnkpLCAyKTtcclxuICByZXR1cm4gcmFuZ2UgLSBNYXRoLnBvdyhkaXN0YW5jZVggKyBkaXN0YW5jZVksIDAuNSkgPiAwO1xyXG59XHJcbi8vI2VuZHJlZ2lvblxyXG4iLCJjbGFzcyBTY29yZSB7XHJcbiAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlcjtcclxuICBwcml2YXRlIGVsZW1lbnQ6IEhUTUxEYXRhRWxlbWVudDtcclxuICBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRGF0YUVsZW1lbnQsIGluaXRpYWxTY29yZT86IG51bWJlcikge1xyXG4gICAgdGhpcy5fc2NvcmUgPSBpbml0aWFsU2NvcmUgfHwgMDtcclxuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5zY29yZS50b1N0cmluZygpO1xyXG4gIH1cclxuICBnZXQgc2NvcmUoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiB0aGlzLl9zY29yZTtcclxuICB9XHJcbiAgc2V0IHNjb3JlKG5ld3Njb3JlOiBudW1iZXIpIHtcclxuICAgIHRoaXMuX3Njb3JlID0gbmV3c2NvcmU7XHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gdGhpcy5fc2NvcmUudG9TdHJpbmcoKTtcclxuICB9XHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLl9zY29yZSA9IDA7XHJcbiAgICB0aGlzLmVsZW1lbnQuaW5uZXJUZXh0ID0gXCIwXCI7XHJcbiAgfVxyXG4gIGluY3JlbWVudCh0b0FkZDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLl9zY29yZSArPSB0b0FkZDtcclxuICAgIHRoaXMuZWxlbWVudC5pbm5lclRleHQgPSB0aGlzLl9zY29yZS50b1N0cmluZygpO1xyXG4gIH1cclxufVxyXG5leHBvcnQgPSBTY29yZTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==