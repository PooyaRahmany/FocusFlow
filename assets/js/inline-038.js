

(()=>{
 const root=document.getElementById('bonfire-native-root'); if(!root)return;
 const dictionary={
  'All':'همه','Favorite':'علاقه‌مندی','Favorites':'علاقه‌مندی‌ها','All prompts':'همهٔ پرامپت‌ها','Prompts':'پرامپت‌ها',
  'New tag':'برچسب جدید','Tag name':'نام برچسب','Tag color':'رنگ برچسب','Selected icon':'آیکون انتخاب‌شده','Choose an icon':'انتخاب آیکون',
  'Choose a Lucide icon below.':'یک آیکون از فهرست زیر انتخاب کنید.','Save tag':'ذخیرهٔ برچسب','Cancel':'لغو','No tags yet.':'هنوز برچسبی وجود ندارد.',
  'No results found':'نتیجه‌ای پیدا نشد','Try another search or change your filters.':'عبارت دیگری جست‌وجو کنید یا فیلترها را تغییر دهید.',
  'No prompts yet':'هنوز پرامپتی وجود ندارد','No prompts yet.':'هنوز پرامپتی وجود ندارد.','No favorite prompts yet.':'هنوز پرامپت علاقه‌مندی ندارید.',
  'Add prompt':'افزودن پرامپت','Prompt text':'متن پرامپت','Notes':'یادداشت‌ها','Copy prompt':'کپی پرامپت','Copy text':'کپی متن',
  'Favorite':'علاقه‌مندی','Remove favorite':'حذف از علاقه‌مندی‌ها','Edit':'ویرایش','Delete prompt':'حذف پرامپت','Duplicate prompt':'تکثیر پرامپت',
  'Delete tag':'حذف برچسب','Change color':'تغییر رنگ','Tag deleted':'برچسب حذف شد','Prompt copied!':'پرامپت کپی شد!',
  'Copy failed. Check clipboard permissions and try again.':'کپی انجام نشد. مجوز کلیپ‌بورد را بررسی و دوباره تلاش کنید.',
  'Storage unavailable. Export or clear browser storage and try again.':'فضای ذخیره‌سازی در دسترس نیست. از داده‌ها خروجی بگیرید یا فضای ذخیره‌سازی مرورگر را پاک کنید و دوباره تلاش کنید.',
  'Image':'تصویر','Coding':'برنامه‌نویسی','Video':'ویدئو','Writing':'نوشتن','Design':'طراحی','AI':'هوش مصنوعی','UI / UX':'رابط کاربری و تجربهٔ کاربری','3D':'سه‌بعدی','Audio':'صوت','Social Media':'شبکه‌های اجتماعی','Marketing':'بازاریابی','Research':'پژوهش','Product':'محصول','Education':'آموزش','Translation':'ترجمه'
 };
 const tagNames=new Set(['Image','Coding','Video','Writing','Design','AI','UI / UX','3D','Audio','Social Media','Marketing','Research','Product','Education','Translation']);
 const fa=()=>((document.documentElement.lang||'en').toLowerCase().startsWith('fa'));
 const reverseDict=Object.fromEntries(Object.entries(dictionary).map(([en,fa])=>[fa,en]));
 Object.assign(dictionary, {
   'Name (A–Z)':'نام (الف–ی)','Most used':'بیشترین استفاده','Recently edited':'اخیراً ویرایش‌شده','Newest':'جدیدترین','Oldest':'قدیمی‌ترین',
   'Prompt details':'جزئیات پرامپت','Settings & backup':'تنظیمات و پشتیبان‌گیری','Choose light or dark mode.':'حالت روشن یا تاریک را انتخاب کنید.',
   'Export library':'خروجی کتابخانه','Prompts, tags, and images are included in a JSON backup.':'پرامپت‌ها، برچسب‌ها و تصاویر در پشتیبان ذخیره می‌شوند.',
   'Restore backup':'بازیابی پشتیبان','Choose a PromptVault JSON backup to restore.':'یک فایل پشتیبان JSON را برای بازیابی انتخاب کنید.',
   'Import file':'واردکردن فایل','Data management':'مدیریت داده‌ها','Prompts and tags are stored on this device only.':'پرامپت‌ها و برچسب‌ها فقط روی همین دستگاه ذخیره می‌شوند.',
   'Clear all data':'پاک‌کردن همهٔ داده‌ها','About storage':'دربارهٔ فضای ذخیره‌سازی','Sort prompts':'مرتب‌سازی پرامپت‌ها',
   'Grid view':'نمای شبکه‌ای','List view':'نمای فهرستی','PromptVault logo':'نشان بن‌فایر','Scrollable tags':'برچسب‌ها','e.g. Photography':'مثلاً عکاسی',
   'Prompt name *':'نام پرامپت *','Prompt text *':'متن پرامپت *','Notes (optional)':'یادداشت‌ها (اختیاری)','Save prompt':'ذخیرهٔ پرامپت'
 });
 Object.assign(reverseDict, Object.fromEntries(Object.entries(dictionary).map(([en,fa])=>[fa,en])));

 const translateText=(node)=>{
  if(!node||node.nodeType!==Node.TEXT_NODE||!node.parentElement||node.parentElement.closest('script,style,textarea,input,[contenteditable="true"],.cardtitle,.excerpt,.detailtext,#pTitle,#pText,#pNotes,#tagName'))return;
  const raw=node.nodeValue,trim=raw.trim(); if(!trim)return;
  if(fa()){
    const translated=dictionary[trim]; if(translated){const lead=raw.match(/^\s*/)?.[0]||'',trail=raw.match(/\s*$/)?.[0]||'';node.nodeValue=lead+translated+trail;return;}
    if(tagNames.has(trim)){node.nodeValue=raw.replace(trim,dictionary[trim]||trim);return;}
  } else {
    const original=reverseDict[trim]; if(original){const lead=raw.match(/^\s*/)?.[0]||'',trail=raw.match(/\s*$/)?.[0]||'';node.nodeValue=lead+original+trail;return;}
    for(const [faT, enT] of Object.entries(reverseDict)){
      if(trim.includes(faT)){node.nodeValue=raw.replace(faT,enT);return;}
    }
  }
 };
 const translateAttrs=(el)=>{
  if(!el||el.nodeType!==1)return;
  const isFa=fa();
  for(const attr of ['title','aria-label','placeholder']){
   if(!el.hasAttribute(attr))continue;
   const value=el.getAttribute(attr);
   if(isFa && dictionary[value])el.setAttribute(attr,dictionary[value]);
   else if(!isFa && reverseDict[value])el.setAttribute(attr,reverseDict[value]);
  }
 };
 const apply=()=>{
  const isFa=fa();root.lang=isFa?'fa':'en';root.dir=isFa?'rtl':'ltr';root.classList.toggle('is-persian',isFa);
  const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let node;while((node=walker.nextNode()))translateText(node);
  root.querySelectorAll('[title],[aria-label],[placeholder]').forEach(translateAttrs);
  const tagRow=root.querySelector('#tagRow');
  if(tagRow){
    tagRow.querySelectorAll('button[data-tag]').forEach(b=>{
      const label=[...b.childNodes].find(n=>n.nodeType===Node.TEXT_NODE&&n.nodeValue.trim());
      if(label){
        const key=label.nodeValue.trim();
        if(isFa && dictionary[key]) label.nodeValue=label.nodeValue.replace(key,dictionary[key]);
        else if(!isFa && reverseDict[key]) label.nodeValue=label.nodeValue.replace(key,reverseDict[key]);
      }
    });
  }
 };
 const run=()=>{apply();};
 let queued=false;const queue=()=>{if(queued)return;queued=true;requestAnimationFrame(()=>{queued=false;run()})};
 new MutationObserver(queue).observe(root,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['title','aria-label','placeholder']});
 new MutationObserver(queue).observe(document.documentElement,{attributes:true,attributeFilter:['lang','dir']});
 window.addEventListener('bonfire-language-change',queue);document.addEventListener('click',e=>{if(e.target.closest('#gridBtn,#listBtn,#sortToggle,#languageSelect,#languageToggle'))queue()});
 // Localize tag labels at their source so re-rendering does not restore English labels.
 const originalDisplayTagName=window.displayTagName;
 if(typeof originalDisplayTagName==='function'&&!originalDisplayTagName.__v49){const wrapped=function(name){const value=originalDisplayTagName.apply(this,arguments);return fa()?(dictionary[String(name||'').trim()]||value):value};wrapped.__v49=true;window.displayTagName=wrapped;}
 queue();
})();

