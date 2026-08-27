const STORAGE_KEY = 'orlando-guide-editor-v1';
const stored = localStorage.getItem(STORAGE_KEY);
let parksData;
try { parksData = stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(PARKS)); }
catch (_) { parksData = JSON.parse(JSON.stringify(PARKS)); }
parksData.forEach(p => { if (p.description === 'Modelo inicial para montar seu roteiro do Animal Kingdom.') p.description = ''; p.attractions.forEach(a => { if (a.meta) delete a.meta['Melhor horário']; }); });

const state = { parkIndex: 3, attractionIndex: 0, editing: false };
const $ = id => document.getElementById(id);
const els = {
  parkNav:$('parkNav'), parkGroup:$('parkGroup'), parkTitle:$('parkTitle'), parkDescription:$('parkDescription'), parkNotes:$('parkNotes'),
  attractionList:$('attractionList'), attractionCount:$('attractionCount'), parkMap:$('parkMap'), mapFallback:$('mapFallback'), pinsLayer:$('pinsLayer'),
  detailPhoto:$('detailPhoto'), photoFallback:$('photoFallback'), detailNumber:$('detailNumber'), detailCategory:$('detailCategory'), detailName:$('detailName'),
  detailArea:$('detailArea'), detailDescription:$('detailDescription'), detailMeta:$('detailMeta'), legend:$('legend'), editor:$('editorPanel'), editToggle:$('editToggle'),
  addAttraction:$('addAttraction'), deleteAttraction:$('deleteAttraction'), saveEdits:$('saveEdits'), exportData:$('exportData'), resetEdits:$('resetEdits'), editorForm:$('editorForm')
};

function park(){ return parksData[state.parkIndex]; }
function attraction(){ return park().attractions[state.attractionIndex]; }
function priorityColor(p){ if(p==='Alta')return'var(--high)'; if(p==='Média')return'var(--medium)'; return'var(--optional)'; }
function esc(s=''){ return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function persist(){ localStorage.setItem(STORAGE_KEY, JSON.stringify(parksData)); }

function renderParkNav(){
  els.parkNav.innerHTML=''; parksData.forEach((p,i)=>{ const b=document.createElement('button'); b.type='button'; b.className='park-button'+(i===state.parkIndex?' active':'');
    b.innerHTML=`${esc(p.name)}<small>${esc(p.group)}</small>`; b.addEventListener('click',()=>{state.parkIndex=i;state.attractionIndex=0;render();}); els.parkNav.appendChild(b); });
}
function renderLegend(){ els.legend.innerHTML=['Alta','Média','Opcional'].map(p=>`<span class="legend-item"><i class="legend-dot" style="background:${priorityColor(p)}"></i>${p}</span>`).join(''); }
function renderAttractions(p){
  els.attractionList.innerHTML=''; els.attractionCount.textContent=`${p.attractions.length} pontos`;
  p.attractions.forEach((a,i)=>{ const b=document.createElement('button'); b.type='button'; b.className='attraction-item'+(i===state.attractionIndex?' active':'');
    b.innerHTML=`<span class="attraction-index">${String(i+1).padStart(2,'0')}</span><span class="attraction-copy"><strong>${esc(a.name)}</strong><span>${esc(a.area)}</span><span class="priority-chip" style="background:${priorityColor(a.priority)}">${esc(a.priority)}</span></span>`;
    b.addEventListener('mouseenter',()=>highlightPin(i)); b.addEventListener('mouseleave',()=>highlightPin(state.attractionIndex)); b.addEventListener('click',()=>selectAttraction(i)); els.attractionList.appendChild(b); });
}
function renderMap(p){
  els.parkMap.src=p.map; els.parkMap.alt=`Mapa de ${p.name}`; els.parkMap.style.display='block'; els.mapFallback.style.display='none';
  els.parkMap.onerror=()=>{els.parkMap.style.display='none';els.mapFallback.style.display='block';}; els.parkMap.onload=()=>{els.parkMap.style.display='block';els.mapFallback.style.display='none';};
  els.pinsLayer.innerHTML=''; p.attractions.forEach((a,i)=>{ const pin=document.createElement('button'); pin.type='button'; pin.className='map-pin'+(i===state.attractionIndex?' active':'')+(state.editing?' draggable':'');
    pin.style.left=`${a.x}%`; pin.style.top=`${a.y}%`; pin.setAttribute('aria-label',a.name); pin.innerHTML=`<span>${i+1}</span>`;
    pin.addEventListener('mouseenter',()=>highlightList(i)); pin.addEventListener('mouseleave',()=>highlightList(state.attractionIndex)); pin.addEventListener('click',()=>selectAttraction(i));
    if(state.editing) enablePinDrag(pin,i); els.pinsLayer.appendChild(pin); });
}
function enablePinDrag(pin,index){
  pin.addEventListener('pointerdown',e=>{ e.preventDefault(); selectAttraction(index); pin.setPointerCapture(e.pointerId); pin.classList.add('dragging'); });
  pin.addEventListener('pointermove',e=>{ if(!pin.hasPointerCapture(e.pointerId))return; const r=els.pinsLayer.getBoundingClientRect(); let x=(e.clientX-r.left)/r.width*100, y=(e.clientY-r.top)/r.height*100; x=Math.max(0,Math.min(100,x)); y=Math.max(0,Math.min(100,y));
    park().attractions[index].x=+x.toFixed(1); park().attractions[index].y=+y.toFixed(1); pin.style.left=x+'%'; pin.style.top=y+'%'; $('editX').value=park().attractions[index].x; $('editY').value=park().attractions[index].y; });
  pin.addEventListener('pointerup',e=>{ if(pin.hasPointerCapture(e.pointerId))pin.releasePointerCapture(e.pointerId); pin.classList.remove('dragging'); persist(); });
}
function highlightPin(i){ [...els.pinsLayer.children].forEach((p,j)=>p.classList.toggle('active',j===i)); }
function highlightList(i){ [...els.attractionList.children].forEach((x,j)=>x.classList.toggle('active',j===i)); highlightPin(i); }
function selectAttraction(i){ state.attractionIndex=i; renderAttractions(park()); highlightPin(i); renderDetails(attraction(),i); if(state.editing)fillEditor(); }
function renderDetails(a,i){
  if(!a)return; els.detailNumber.textContent=String(i+1).padStart(2,'0'); els.detailCategory.textContent=a.category||'Atração'; els.detailName.textContent=a.name; els.detailArea.textContent=a.area; els.detailDescription.textContent=a.description||'';
  const meta=Object.entries(a.meta||{}).filter(([label])=>label!=='Melhor horário'); els.detailMeta.innerHTML=meta.map(([l,v])=>`<div class="meta-item"><span>${esc(l)}</span><strong>${esc(v)}</strong></div>`).join('');
  els.detailPhoto.src=a.photo||''; els.detailPhoto.alt=`Foto de ${a.name}`; els.detailPhoto.style.display='block'; els.photoFallback.style.display='none'; els.photoFallback.textContent=`ADICIONE A FOTO DE ${a.name.toUpperCase()}`;
  els.detailPhoto.onerror=()=>{els.detailPhoto.style.display='none';els.photoFallback.style.display='grid';}; els.detailPhoto.onload=()=>{els.detailPhoto.style.display='block';els.photoFallback.style.display='none';};
}
function fillEditor(){ $('editParkNotes').value=park().notes||''; const a=attraction(); if(!a)return; const vals={editName:a.name,editArea:a.area,editCategory:a.category,editPriority:a.priority,editPhoto:a.photo,editDescription:a.description,editX:a.x,editY:a.y,editObservation:(a.meta||{}).Observação||''}; Object.entries(vals).forEach(([id,v])=>$(id).value=v??''); }
function applyEditor(){ park().notes=$('editParkNotes').value.trim(); const a=attraction(); if(!a){ persist(); render(); return; } a.name=$('editName').value.trim()||'Nova atração'; a.area=$('editArea').value.trim(); a.category=$('editCategory').value.trim()||'Atração'; a.priority=$('editPriority').value; a.photo=$('editPhoto').value.trim(); a.description=$('editDescription').value.trim(); a.x=Math.max(0,Math.min(100,Number($('editX').value)||0)); a.y=Math.max(0,Math.min(100,Number($('editY').value)||0)); a.meta=a.meta||{}; delete a.meta['Melhor horário']; a.meta.Prioridade=a.priority; a.meta.Observação=$('editObservation').value.trim(); persist(); render(); }
function renderEditor(){ document.body.classList.toggle('editing',state.editing); els.editor.hidden=!state.editing; els.editToggle.textContent=state.editing?'Fechar edição':'Editar guia'; if(state.editing)fillEditor(); }
function render(){ const p=park(); renderParkNav(); renderLegend(); els.parkGroup.textContent=p.group.toUpperCase(); els.parkTitle.textContent=p.name; els.parkDescription.textContent=p.description; els.parkNotes.textContent=p.notes; renderAttractions(p); renderMap(p); if(p.attractions.length){ state.attractionIndex=Math.min(state.attractionIndex,p.attractions.length-1); renderDetails(attraction(),state.attractionIndex); } renderEditor(); }

els.editToggle.addEventListener('click',()=>{state.editing=!state.editing;render();});
els.editorForm.addEventListener('submit',e=>{e.preventDefault();applyEditor();});
els.addAttraction.addEventListener('click',()=>{ const p=park(); p.attractions.push({id:'a'+Date.now(),name:'Nova atração',area:'',x:50,y:50,priority:'Média',category:'Atração',photo:'assets/attractions/nova-atracao.jpg',description:'',meta:{Prioridade:'Média',Observação:''}}); state.attractionIndex=p.attractions.length-1; persist(); render(); });
els.deleteAttraction.addEventListener('click',()=>{ if(!attraction()||!confirm(`Excluir "${attraction().name}"?`))return; park().attractions.splice(state.attractionIndex,1); state.attractionIndex=Math.max(0,state.attractionIndex-1); persist(); render(); });
els.exportData.addEventListener('click',()=>{ const clean=JSON.parse(JSON.stringify(parksData)); clean.forEach(p=>p.attractions.forEach(a=>{if(a.meta)delete a.meta['Melhor horário'];})); const text='const PARKS = '+JSON.stringify(clean,null,2)+';\n'; const blob=new Blob([text],{type:'text/javascript'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url;a.download='data.js';a.click();setTimeout(()=>URL.revokeObjectURL(url),500); });
els.resetEdits.addEventListener('click',()=>{ if(!confirm('Apagar as edições salvas neste navegador e voltar ao data.js original?'))return; localStorage.removeItem(STORAGE_KEY); location.reload(); });
render();
