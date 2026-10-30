

(() => {
  const root = document.getElementById('bonfire-native-root');
  if (!root) return;
  const $ = id => root.querySelector('#' + id);
  const translations = {
    fa: {
      newTitle: 'پرامپت جدید', editTitle: 'ویرایش پرامپت', close: 'بستن',
      promptName: 'عنوان پرامپت *', promptNamePlaceholder: 'مثلاً عکاسی پرتره سینمایی',
      image: 'تصویر', chooseImage: 'انتخاب تصویر', removeImage: 'حذف تصویر',
      imageHint: 'تصویر همراه با کتابخانه، روی همین دستگاه ذخیره می‌شود.',
      promptText: 'متن پرامپت *', promptPlaceholder: 'متن پرامپت را اینجا بنویسید یا جای‌گذاری کنید…',
      promptHint: 'می‌توانید از متغیرهایی مثل {subject} یا {style} استفاده کنید؛ هنگام کپی، مقدار آن‌ها از شما پرسیده می‌شود.',
      tags: 'برچسب‌ها', newTag: 'برچسب جدید', notes: 'یادداشت‌ها (اختیاری)',
      notesPlaceholder: 'مدل هوش مصنوعی، تنظیمات یا یادداشت‌های دیگر…', save: 'ذخیره پرامپت', cancel: 'لغو', noTags: 'هنوز برچسبی وجود ندارد.'
    },
    en: {
      newTitle: 'New prompt', editTitle: 'Edit prompt', close: 'Close',
      promptName: 'Prompt name *', promptNamePlaceholder: 'e.g. Cinematic Portrait Photography',
      image: 'Image', chooseImage: 'Choose image', removeImage: 'Remove image',
      imageHint: 'The image is stored on this device with your library.',
      promptText: 'Prompt text *', promptPlaceholder: 'Write or paste your prompt here…',
      promptHint: 'Use variables like {subject} or {style}; you’ll be asked to fill them in when copying.',
      tags: 'Tags', newTag: 'New tag', notes: 'Notes (optional)',
      notesPlaceholder: 'AI model, settings, or other notes…', save: 'Save prompt', cancel: 'Cancel', noTags: 'No tags yet.'
    }
  };
  function applyPromptLanguage(lang) {
    const fa = lang === 'fa';
    const d = translations[fa ? 'fa' : 'en'];
    const modal = $('promptModal');
    if (!modal) return;
    modal.lang = fa ? 'fa' : 'en';
    modal.dir = fa ? 'rtl' : 'ltr';
    const editing = !!$('promptId')?.value;
    if ($('promptModalTitle')) $('promptModalTitle').textContent = editing ? d.editTitle : d.newTitle;
    const labels = modal.querySelectorAll('#promptForm .field > label');
    const labelValues = [d.promptName, d.image, d.promptText, d.tags, d.notes];
    labels.forEach((el, i) => { if (labelValues[i]) el.textContent = labelValues[i]; });
    if ($('pTitle')) $('pTitle').placeholder = d.promptNamePlaceholder;
    if ($('pText')) $('pText').placeholder = d.promptPlaceholder;
    if ($('pNotes')) $('pNotes').placeholder = d.notesPlaceholder;
    const hints = modal.querySelectorAll('#promptForm .hint');
    if (hints[0]) hints[0].textContent = d.imageHint;
    if (hints[1]) hints[1].textContent = d.promptHint;
    const choose = $('chooseImage');
    if (choose) { choose.title = d.chooseImage; choose.setAttribute('aria-label', d.chooseImage); }
    const remove = $('removeImage');
    if (remove) { remove.title = d.removeImage; remove.setAttribute('aria-label', d.removeImage); }
    const close = modal.querySelector('.modalhead .close');
    if (close) { close.title = d.close; close.setAttribute('aria-label', d.close); }
    const actions = modal.querySelectorAll('.formactions button');
    if (actions[0]) actions[0].textContent = d.save;
    if (actions[1]) actions[1].textContent = d.cancel;
    const picker = $('tagPicker');
    if (picker && !picker.querySelector('[data-pick]')) picker.textContent = d.noTags;
  }
  // Wrap the existing implementation without changing its storage or editing logic.
  if (typeof window.openPrompt === 'function' && !window.openPrompt.__v44Wrapped) {
    const originalOpenPrompt = window.openPrompt;
    const wrappedOpenPrompt = function(id) {
      const result = originalOpenPrompt.apply(this, arguments);
      applyPromptLanguage((document.documentElement.lang || root.lang || 'en').toLowerCase().startsWith('fa') ? 'fa' : 'en');
      // The picker uses the already bundled Lucide library. Render only these icons,
      // synchronously, instead of refreshing every icon across the whole application.
      const picker = $('tagPicker');
      if (picker && window.lucide && typeof window.lucide.createIcons === 'function') {
        try { window.lucide.createIcons({ root: picker }); } catch (_) {
          try { picker.querySelectorAll('i[data-lucide]').forEach(node => window.lucide.createIcons({ root: node.parentElement || picker })); } catch (_) {}
        }
      }
      return result;
    };
    wrappedOpenPrompt.__v44Wrapped = true;
    window.openPrompt = wrappedOpenPrompt;
  }
  // Keep the form translated when the app language is changed while it is open.
  window.addEventListener('bonfire-language-change', e => {
    const lang = e.detail && e.detail.language === 'fa' ? 'fa' : 'en';
    applyPromptLanguage(lang);
  });
  const languageObserver = new MutationObserver(() => {
    applyPromptLanguage((document.documentElement.lang || 'en').toLowerCase().startsWith('fa') ? 'fa' : 'en');
  });
  languageObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  const promptModal = $('promptModal');
  if (promptModal) new MutationObserver(() => {
    if (!promptModal.classList.contains('open')) return;
    applyPromptLanguage((document.documentElement.lang || 'en').toLowerCase().startsWith('fa') ? 'fa' : 'en');
    const picker = $('tagPicker');
    if (picker && window.lucide && typeof window.lucide.createIcons === 'function') { try { window.lucide.createIcons({ root: picker }); } catch (_) {} }
  }).observe(promptModal, { attributes: true, attributeFilter: ['class'] });
  applyPromptLanguage((document.documentElement.lang || 'en').toLowerCase().startsWith('fa') ? 'fa' : 'en');
})();

