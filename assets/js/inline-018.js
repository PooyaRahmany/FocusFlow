

(()=>{const root=document.getElementById('bonfire-native-root');const row=root.querySelector('#tagRow');const actions=root.querySelector('.tag-head-actions');if(row&&actions&&!row.closest('.tagrow-wrap')){const wrap=document.createElement('div');wrap.className='tagrow-wrap';row.parentNode.insertBefore(wrap,row);wrap.appendChild(row);wrap.appendChild(actions)}const addBtn=root.querySelector('#addTagBtn');if(addBtn){addBtn.style.display='inline-flex';addBtn.style.alignItems='center';addBtn.style.justifyContent='center';const ic=addBtn.querySelector('i,svg');if(ic){ic.style.display='block';ic.style.margin='auto'}}})();

