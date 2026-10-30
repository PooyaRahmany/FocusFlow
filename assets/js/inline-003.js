

(() => {
'use strict';

/* ======================================================================
   Helpers
   ====================================================================== */
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const APP_I18N = {
  'FocusFlow':'FocusFlow','Today':'امروز','Back to today':'بازگشت به امروز','No task added':'هنوز کاری اضافه نشده','Tap the + button to add your first task and start your focus journey.':'برای شروع، روی دکمهٔ + بزنید و اولین کارتان را اضافه کنید.','Add a task':'افزودن کار','My planner':'برنامه‌ریز من','Personal plan · Saved on this device':'برنامهٔ شخصی · ذخیره‌شده روی این دستگاه','Separate from tasks':'جدا از کارها','Plan':'پلن','New plan':'پلن جدید','Manage plan':'مدیریت پلن','Table':'جدول','Board':'برد','Week':'هفته','Charts':'نمودارها','New item':'مورد جدید','Click a column heading to sort':'برای مرتب‌سازی روی عنوان ستون بزنید','Group by':'گروه‌بندی بر اساس','Bucket':'دسته','Priority':'اولویت','Drag cards between columns, or use Move on a card. Your plans are independent of Home tasks.':'کارت‌ها را بین ستون‌ها بکشید یا از گزینهٔ جابه‌جایی استفاده کنید. پلن‌ها از کارهای خانه جدا هستند.','Items in the selected plan':'موارد پلن انتخاب‌شده','Completed':'تکمیل‌شده','Title':'عنوان','Progress':'وضعیت','Dates':'تاریخ‌ها','Checklist':'فهرست کارها','Actions':'عملیات','Add an item':'افزودن مورد','Scroll sideways to see all columns':'برای دیدن ستون‌ها افقی بکشید','This week':'این هفته','Go to':'رفتن به','Add plan':'افزودن پلن','Monday–Sunday · Drag a plan to another day, or use its move button. Plans stay separate from your tasks and task statistics.':'شنبه تا جمعه · پلن را به روز دیگری بکشید یا از دکمهٔ جابه‌جایی استفاده کنید. پلن‌ها از کارهای روزانه و آمار شما جدا هستند.','Calendar':'تقویم','Choose a day':'انتخاب روز','Sun':'یکشنبه','Mon':'دوشنبه','Tue':'سه‌شنبه','Wed':'چهارشنبه','Thu':'پنجشنبه','Fri':'جمعه','Sat':'شنبه','Month':'ماه','Swipe to change month · tap a day to open it':'برای تغییر ماه بکشید · برای بازکردن روی روز بزنید','Select a date to see its tasks · Dots mark scheduled tasks':'برای دیدن کارهای روز، تاریخ را انتخاب کنید · نقطه‌ها نشان‌دهندهٔ کارها هستند','SELECTED DAY':'روز انتخاب‌شده','Open in Home':'نمایش در خانه','Progress':'پیشرفت','Your activity':'فعالیت شما',"Today's tasks":'کارهای امروز','No tasks for today yet':'هنوز کاری برای امروز ندارید','All time':'همهٔ زمان‌ها','Completion rate':'درصد تکمیل','All-time progress':'پیشرفت کلی','Total':'مجموع','Remaining':'باقی‌مانده','YOUR MAIN GOAL':'هدف اصلی شما','Set a goal that matters to you':'هدفی مهم برای خودتان تعیین کنید','Keep your daily focus connected to what matters most.':'تمرکز روزانه‌تان را به مهم‌ترین هدف‌هایتان پیوند دهید.','Edit':'ویرایش','Focus time':'زمان تمرکز','Minutes recorded while a focus session is running':'دقایق ثبت‌شده در جلسهٔ تمرکز','Activity map':'نقشهٔ فعالیت','Last 18 weeks':'۱۸ هفتهٔ گذشته','Less':'کمتر','More':'بیشتر','Task categories':'دسته‌بندی کارها','Tasks':'کارها','← Progress':'← پیشرفت','No tasks in this group':'در این گروه کاری نیست','Tasks matching this status will appear here.':'کارهایی که با این وضعیت مطابقت داشته باشند اینجا نمایش داده می‌شوند.','Calm Music':'موسیقی آرام','Relax & focus':'آرامش و تمرکز','FOCUS PLAYLIST':'فهرست پخش تمرکز','Calm Focus Mix':'موسیقی آرام برای تمرکز','Play relaxing music while you manage your tasks.':'هنگام مدیریت کارهایتان به موسیقی آرامش‌بخش گوش دهید.','Tracks':'قطعه‌ها','NOW PLAYING':'در حال پخش','Choose a track':'یک قطعه انتخاب کنید','Your calm listening space':'فضای آرام شما','Up next':'بعدی','Tap to play':'برای پخش بزنید','Settings':'تنظیمات','Personalize how FocusFlow looks and feels.':'ظاهر و تجربهٔ فوکوس‌فلو را شخصی‌سازی کنید.','Theme':'تم','Choose a color theme for the current mode':'انتخاب تم برای حالت فعلی','Back':'بازگشت','Home':'خانه','Light mode themes':'تم‌های حالت روشن','Only themes for the currently active light or dark mode are shown. Your other mode keeps its own theme.':'فقط تم‌های حالت روشن یا تاریکِ فعال نمایش داده می‌شوند. تم حالت دیگر شما جداگانه ذخیره می‌شود.','Language':'زبان','Choose the language and regional format':'انتخاب زبان و قالب منطقه‌ای','English':'English','Finance':'امور مالی','Keep a simple record of your income and expenses.':'درآمدها و هزینه‌های خود را ساده ثبت و پیگیری کنید.','Transactions':'تراکنش‌ها','Add transaction':'افزودن تراکنش','Income':'درآمد','Expense':'هزینه','Balance':'مانده','No transactions yet. Add your first one.':'هنوز تراکنشی ثبت نشده است. اولین مورد را اضافه کنید.','Description':'شرح','Type':'نوع','Amount':'مبلغ','Date':'تاریخ','Save transaction':'ذخیرهٔ تراکنش','e.g. Grocery shopping':'مثلاً خرید روزانه','What is your main goal?':'هدف اصلی شما چیست؟','Choose the one thing you want FocusFlow to help you make progress on. You can change it later.':'یک هدف اصلی انتخاب کنید تا فوکوس‌فلو در پیشرفت آن کمکتان کند. بعداً هم می‌توانید آن را تغییر دهید.','My main goal':'هدف اصلی من','Save my goal':'ذخیرهٔ هدف','Task title':'عنوان کار','Category':'دسته‌بندی','Urgency':'فوریت','Low — can wait':'کم — می‌تواند صبر کند','Normal':'عادی','High — do soon':'زیاد — زود انجام شود','Urgent — do first':'فوری — در اولویت','Separate from priority pinning. More urgent tasks come first within each priority group.':'فوریت با سنجاق‌کردن اولویت جداست. در هر گروه، کارهای فوری‌تر زودتر نمایش داده می‌شوند.','Pinned to the top with a gold marker':'با نشان طلایی به بالای فهرست سنجاق می‌شود','Save task':'ذخیرهٔ کار','Only in this plan — separate from your Home tasks.':'فقط در این پلن — جدا از کارهای خانه.','Plan title':'عنوان پلن','Start date (optional)':'تاریخ شروع (اختیاری)','Due date':'مهلت انجام','Time (optional)':'زمان (اختیاری)','Notes (optional)':'یادداشت (اختیاری)','Not started':'شروع‌نشده','In progress':'در حال انجام','Important':'مهم','Medium':'متوسط','Label':'برچسب','No label':'بدون برچسب','Work':'کار','Personal':'شخصی','Learning':'یادگیری','Wellness':'سلامتی','Add':'افزودن','Related links':'پیوندهای مرتبط','Add link':'افزودن پیوند','Save item':'ذخیرهٔ مورد','Add item':'افزودن مورد','Update item':'به‌روزرسانی مورد','Move plan':'جابه‌جایی پلن','Move to bucket':'انتقال به دسته','Move to date':'انتقال به تاریخ','Add bucket':'افزودن دسته','Bucket name':'نام دسته','Colour':'رنگ','Blue':'آبی','Purple':'بنفش','Green':'سبز','Amber':'کهربایی','Save bucket':'ذخیرهٔ دسته','Delete bucket':'حذف دسته','Plan name':'نام پلن','Description (optional)':'شرح (اختیاری)','Save plan':'ذخیرهٔ پلن','Delete plan and its items':'حذف پلن و موارد آن','Focus Timer':'زمان‌سنج تمرکز','25 min':'۲۵ دقیقه','5 min':'۵ دقیقه','15 min':'۱۵ دقیقه','Focus':'تمرکز','Short break':'استراحت کوتاه','Long break':'استراحت بلند','Ready to focus':'آمادهٔ تمرکز','Custom focus minutes':'مدت دلخواه تمرکز به دقیقه','Set':'تنظیم','Reset':'بازنشانی','Start':'شروع','Delete task?':'کار حذف شود؟','Cancel':'لغو','Delete':'حذف','Menu':'منو','PREFERENCES':'ترجیحات','Dark theme':'تم تاریک','Sound effects':'افکت‌های صوتی','On':'روشن','Off':'خاموش','Performance':'عملکرد','Auto':'خودکار','DATA':'داده‌ها','Backup & export (JSON)':'پشتیبان‌گیری و خروجی (JSON)','Restore from backup':'بازیابی پشتیبان','Clear completed tasks':'پاک‌کردن کارهای تکمیل‌شده','MORE':'بیشتر','Settings & preferences':'تنظیمات و ترجیحات','VIP plan':'اشتراک ویژه','Donation':'حمایت مالی','Focus complete!':'تمرکز به پایان رسید!','You stayed focused.':'با تمرکز ادامه دادید.','minutes':'دقیقه','sessions today':'جلسه امروز','focused today':'تمرکز امروز','Done':'انجام شد','Start 5-min break':'شروع استراحت ۵ دقیقه‌ای','Priority':'اولویت','Urgent':'فوری','Low':'کم','Ocean':'اقیانوس','Amethyst':'آمتیست','Bordeaux':'زرشکی','Blush':'صورتی','Sand':'شن','Sage':'سبزآبی','Periwinkle':'نیلی روشن','Midnight':'نیمه‌شب','Forest':'جنگل','Cobalt':'لاجوردی','Ultraviolet':'بنفش نوری','Crimson':'قرمز تیره','Ember':'اخگر','Magenta':'ارغوانی','Music':'موسیقی','Planner':'پلنر','New task':'کار جدید','Playing':'در حال پخش','This month':'این ماه','THIS MONTH':'ماه جاری','Mark incomplete':'علامت‌گذاری به‌عنوان ناتمام','Complete item':'تکمیل مورد','Edit item':'ویرایش مورد','Move item':'جابه‌جایی مورد','Add an item':'افزودن مورد','Today':'امروز','Tomorrow':'فردا','Yesterday':'دیروز','All':'همه','Fitness':'تناسب‌اندام','Shopping':'خرید','Health':'سلامتی','Photo':'عکاسی','Break':'استراحت','Reading':'مطالعه','Gym':'باشگاه','Sport':'ورزش','Work':'کار','Misc':'متفرقه','Open menu':'بازکردن منو','Close menu':'بستن منو','Open music player':'بازکردن پخش‌کنندهٔ موسیقی','Focus timer':'زمان‌سنج تمرکز','Search tasks':'جست‌وجوی کارها','Search your tasks…':'جست‌وجوی کارها…','Search all tasks…':'جست‌وجوی همهٔ کارها…','Add task':'افزودن کار','Dark mode themes':'تم‌های حالت تاریک','Light mode':'حالت روشن','Dark mode':'حالت تاریک','Today\'s tasks':'کارهای امروز','Today’s tasks':'کارهای امروز','FocusFlow · v52 · Shortcuts: N new task, / search':'فوکوس‌فلو · میانبرها: N کار جدید، / جست‌وجو','(USD)':'(دلار)','This week':'این هفته','Monday':'دوشنبه','Tuesday':'سه‌شنبه','Wednesday':'چهارشنبه','Thursday':'پنجشنبه','Friday':'جمعه','Saturday':'شنبه','Sunday':'یکشنبه','Storage unavailable — changes may not persist.':'فضای ذخیره‌سازی در دسترس نیست؛ ممکن است تغییرات ذخیره نشوند.','Storage unavailable — planner changes may not persist.':'فضای ذخیره‌سازی در دسترس نیست؛ ممکن است تغییرات پلنر ذخیره نشوند.','Plan moved':'پلن جابه‌جا شد','Bucket deleted; plans kept':'دسته حذف شد؛ پلن‌ها باقی ماندند','Enter a complete http or https link':'یک پیوند کامل http یا https وارد کنید','Start date must be on or before the due date':'تاریخ شروع باید هم‌زمان یا قبل از مهلت باشد','Enter a plan title and a valid date':'عنوان پلن و تاریخ معتبر وارد کنید','Plan updated':'پلن به‌روزرسانی شد','Plan added':'پلن اضافه شد','All tasks for this day are done 🎉':'همهٔ کارهای امروز انجام شدند 🎉','Marked as priority':'به‌عنوان اولویت علامت خورد','Priority removed':'اولویت برداشته شد','Task deleted':'کار حذف شد','Task restored':'کار بازگردانده شد','Task updated':'کار به‌روزرسانی شد','Task added':'کار اضافه شد','Tap a day to add your task there':'برای افزودن کار، روی یک روز بزنید','Nothing scheduled for this date. Add a task to plan your day.':'برای این تاریخ کاری ثبت نشده است. برای برنامه‌ریزی، کاری اضافه کنید.','Main goal saved':'هدف اصلی ذخیره شد','Session complete! Take a break':'جلسه تمام شد! کمی استراحت کنید','Break over — ready to focus?':'استراحت تمام شد — آمادهٔ تمرکز هستید؟','Loading music…':'در حال بارگذاری موسیقی…','Tap play to start music':'برای شروع موسیقی روی پخش بزنید','Sleep timer — music paused':'زمان‌سنج خواب — موسیقی متوقف شد','Sleep timer off':'زمان‌سنج خواب خاموش شد','Repeating this track':'تکرار همین قطعه','Repeating playlist':'تکرار فهرست پخش','Backup downloaded':'نسخهٔ پشتیبان دریافت شد','No valid tasks or planner entries found in this file':'در این فایل کار یا مورد پلنر معتبری پیدا نشد','Could not read this backup file':'خواندن فایل پشتیبان ممکن نشد','No completed tasks to clear':'کاری برای پاک‌کردن وجود ندارد','VIP lifetime plan active':'اشتراک ویژهٔ مادام‌العمر فعال است','Thank you for supporting FocusFlow!':'از حمایت شما از فوکوس‌فلو سپاسگزاریم!','Smooth':'روان','Lite':'سبک','Smooth mode — all effects on':'حالت روان — همهٔ جلوه‌ها روشن','Lite mode — lighter effects':'حالت سبک — جلوه‌های کمتر','Keep full':'حالت کامل','Performance: Auto (Lite)':'عملکرد: خودکار (سبک)','Performance: Auto (Smooth)':'عملکرد: خودکار (روان)','Updated':'به‌روزرسانی شد','No items yet. Add your first item below.':'هنوز موردی نیست. اولین مورد را در پایین اضافه کنید.','Delete transaction':'حذف تراکنش','Transaction saved':'تراکنش ذخیره شد','New item':'مورد جدید','Add a task':'افزودن کار','This item has no title':'این مورد عنوانی ندارد','Update task':'به‌روزرسانی کار','Edit task':'ویرایش کار','Mark as done':'علامت‌گذاری به‌عنوان انجام‌شده','Mark as not done':'علامت‌گذاری به‌عنوان انجام‌نشده','Remove priority':'برداشتن اولویت','Delete task':'حذف کار','Edit':'ویرایش','Add plan for':'افزودن پلن برای','Room for a plan':'جای یک پلن خالی است','All tasks':'همهٔ کارها','Every task across all dates':'همهٔ کارها در همهٔ تاریخ‌ها','Tasks you have finished':'کارهایی که انجام داده‌اید','Tasks still waiting to be done':'کارهایی که هنوز انجام نشده‌اند','No task data yet — add a task to see your breakdown.':'هنوز داده‌ای نیست — برای دیدن گزارش، کاری اضافه کنید.','Focusing… stay on track':'در حال تمرکز… ادامه دهید','Break time — relax':'زمان استراحت — آرام باشید','Resume':'ادامه','No tasks match':'کاری پیدا نشد','All tasks done — great job!':'همهٔ کارها انجام شدند — عالی بود!','Break is over!':'استراحت تمام شد!','Feeling refreshed? Let’s get back into the flow.':'حس تازگی دارید؟ به جریان کار برگردیم.','Start focus · 25 min':'شروع تمرکز · ۲۵ دقیقه','Undo':'واگرد','Completed ·':'تکمیل‌شده ·','Monday to Sunday':'دوشنبه تا یکشنبه','Move to bucket':'انتقال به دسته','No items yet. Add your first item below.':'هنوز موردی نیست. اولین مورد را در پایین اضافه کنید.','Edit plan':'ویرایش پلن','Delete plan':'حذف پلن','Plan deleted':'پلن حذف شد','Up to 30 checklist items per plan':'حداکثر ۳۰ مورد در فهرست هر پلن','Up to 12 links per item':'حداکثر ۱۲ پیوند برای هر مورد','Select a date in any month to add a task':'برای افزودن کار، از هر ماه یک تاریخ انتخاب کنید','Tap a day to add a task on it':'برای افزودن کار روی روز بزنید','Your plans are independent of Home tasks':'پلن‌های شما از کارهای خانه جدا هستند','Finish':'پایان','Open in Home':'نمایش در خانه','Search tasks…':'جست‌وجوی کارها…','Select':'انتخاب','Resume':'ادامه','Persian':'فارسی','Today’s tasks':'کارهای امروز','FocusFlow · v52 · Shortcuts: N new task, / search':'فوکوس‌فلو · میانبرها: N کار جدید، / جست‌وجو','0m':'۰ دقیقه','Light theme':'تم روشن','Search results':'نتایج جست‌وجو','Day streak':'روزهای پیاپی','Search (/)':'جست‌وجو (/)','Filter by category':'فیلتر بر اساس دسته‌بندی','Scroll through task categories':'پیمایش دسته‌بندی‌ها','Your daily focus':'تمرکز روزانهٔ شما','Choose a plan':'انتخاب پلن','Planner view':'نمای پلنر','Planner buckets, scroll horizontally to see more':'دسته‌های پلنر؛ برای دیدن موارد بیشتر افقی پیمایش کنید','Planner table. Scroll horizontally to see all columns.':'جدول پلنر؛ برای دیدن همهٔ ستون‌ها افقی پیمایش کنید.','Previous week':'هفتهٔ قبل','Next week':'هفتهٔ بعد','Show the week containing this date':'نمایش هفتهٔ شامل این تاریخ','Jump to day':'رفتن به روز','Weekly plans, scroll horizontally on smaller screens':'پلن‌های هفتگی؛ در صفحهٔ کوچک افقی پیمایش کنید','Previous three months':'سه ماه قبل','Next three months':'سه ماه بعد','Previous month':'ماه قبل','Next month':'ماه بعد','Focus minutes for the last seven days':'دقایق تمرکز در هفت روز گذشته','Play playlist':'پخش فهرست موسیقی','Now playing':'در حال پخش','Back to music':'بازگشت به موسیقی','Show track list':'نمایش فهرست قطعه‌ها','Seek':'جلو یا عقب‌بردن','Repeat playlist':'تکرار فهرست پخش','Repeat':'تکرار','Previous track':'قطعهٔ قبلی','Play':'پخش','Next track':'قطعهٔ بعدی','Sleep timer: off':'زمان‌سنج خواب: خاموش','Sleep timer':'زمان‌سنج خواب','Mute':'بی‌صدا','Music volume':'بلندی صدای موسیقی','Pause':'مکث','Stop music':'توقف موسیقی','Main navigation':'ناوبری اصلی','Add task (N)':'افزودن کار (N)','Planner (P)':'پلنر (P)','e.g. Become a better programmer':'مثلاً برنامه‌نویس بهتری شوم','Close':'بستن','e.g. Read 10 pages':'مثلاً ۱۰ صفحه مطالعه',"e.g. Outline next week's project":'مثلاً طرح اولیهٔ پروژهٔ هفتهٔ بعد','A few details to help you get started…':'چند نکته برای شروع…','New checklist item':'مورد جدید در فهرست','Link title (optional)':'عنوان پیوند (اختیاری)','Link title':'عنوان پیوند','Link URL':'نشانی پیوند','e.g. New ideas':'مثلاً ایده‌های جدید','e.g. Product launch':'مثلاً عرضهٔ محصول','What is this plan for?':'این پلن برای چیست؟','Timer presets':'زمان‌های پیشنهادی','Close search':'بستن جست‌وجو','Soft ambience for concentration':'موسیقی ملایم برای تمرکز','Peaceful music for relaxation':'موسیقی آرام برای ریلکس‌کردن','The day is complete':'روز به پایان رسید','Delete transaction':'حذف تراکنش','Expense':'هزینه','Income':'درآمد','Dark theme':'تم تاریک','Finance':'امور مالی','Light mode':'حالت روشن','Dark mode':'حالت تاریک','Today\'s tasks':'کارهای امروز','Today’s tasks':'کارهای امروز','FocusFlow · v52 · Shortcuts: N new task, / search':'فوکوس‌فلو · میانبرها: N کار جدید، / جست‌وجو','(USD)':'(دلار)'
};
Object.assign(APP_I18N,{
  "Today's tasks":'کارهای امروز','Coding':'برنامه‌نویسی','Travel':'سفر','Wishlist':'فهرست علاقه‌مندی','Family':'خانواده','Focus':'تمرکز','English':'English','Persian':'فارسی','All tasks':'همهٔ کارها','Every task across all dates':'همهٔ کارها در همهٔ تاریخ‌ها','Tasks you have finished':'کارهایی که انجام داده‌اید','Tasks still waiting to be done':'کارهایی که هنوز انجام نشده‌اند','Resume':'ادامه','Update task':'به‌روزرسانی کار','Edit task':'ویرایش کار','Mark as done':'علامت‌گذاری به‌عنوان انجام‌شده','Mark as not done':'علامت‌گذاری به‌عنوان انجام‌نشده','Remove priority':'برداشتن اولویت','Delete task':'حذف کار','Room for a plan':'جای یک پلن خالی است','No task data yet — add a task to see your breakdown.':'هنوز داده‌ای نیست — برای دیدن گزارش، کاری اضافه کنید.','Break is over!':'استراحت تمام شد!','Feeling refreshed? Let’s get back into the flow.':'حس تازگی دارید؟ به جریان کار برگردیم.','Start focus · 25 min':'شروع تمرکز · ۲۵ دقیقه','All tasks done — great job!':'همهٔ کارها انجام شدند — عالی بود!','No tasks match':'کاری پیدا نشد','Monday to Sunday':'دوشنبه تا یکشنبه','e.g. Outline next week’s project':'مثلاً طرح اولیهٔ پروژهٔ هفتهٔ بعد','e.g. Outline next week\'s project':'مثلاً طرح اولیهٔ پروژهٔ هفتهٔ بعد','Up to 30 checklist items per plan':'حداکثر ۳۰ مورد در فهرست هر پلن','Up to 12 links per item':'حداکثر ۱۲ پیوند برای هر مورد','All tasks':'همهٔ کارها','All':'همه','This week':'این هفته','Light theme':'تم روشن','Dark theme':'تم تاریک','Add transaction':'افزودن تراکنش','Mark incomplete':'علامت‌گذاری به‌عنوان ناتمام','Complete plan':'تکمیل پلن','Not completed':'تکمیل نشده','Remove link':'حذف پیوند','No tasks match':'کاری پیدا نشد','all completed':'همه تکمیل شدند','Minutes':'دقیقه','No task added':'هنوز کاری اضافه نشده','Add a task':'افزودن کار','Link copied':'پیوند کپی شد','No plan found':'پلنی پیدا نشد','Enter a task title':'عنوان کار را وارد کنید','Enter a plan title':'عنوان پلن را وارد کنید','Please choose a date':'لطفاً تاریخ را انتخاب کنید','Export downloaded':'خروجی دریافت شد','Could not save changes':'ذخیرهٔ تغییرات ممکن نشد','Add an income':'افزودن درآمد','Add an expense':'افزودن هزینه','This week':'این هفته','More':'بیشتر','Less':'کمتر','Soft ambience for concentration':'موسیقی ملایم برای تمرکز','Peaceful music for relaxation':'موسیقی آرام برای استراحت','Calm Music 1':'موسیقی آرام ۱','Calm Music 2':'موسیقی آرام ۲','Focusing… stay on track':'در حال تمرکز… ادامه دهید','Break time — relax':'زمان استراحت — آرام باشید','Take a short break':'کمی استراحت کنید','Focus session completed today':'جلسهٔ تمرکز امروز تکمیل شد','No transactions yet. Add your first one.':'هنوز تراکنشی ثبت نشده است. اولین مورد را اضافه کنید.','(USD)':'(دلار)','(تومان)':'(تومان)','N new task, / search':'N کار جدید، / جست‌وجو','Shortcuts: N new task, / search':'میانبرها: N کار جدید، / جست‌وجو'
});
Object.assign(APP_I18N,{
  'Choose a date':'انتخاب تاریخ','Set a main goal to get started':'برای شروع، هدف اصلی خود را تعیین کنید','Mark as done':'علامت‌گذاری به‌عنوان انجام‌شده','Mark as not done':'علامت‌گذاری به‌عنوان انجام‌نشده','Mark incomplete':'علامت‌گذاری به‌عنوان ناتمام','Complete item':'تکمیل مورد','Complete plan':'تکمیل پلن','Remove link':'حذف پیوند','New transaction':'تراکنش جدید','Update transaction':'به‌روزرسانی تراکنش','Delete transaction':'حذف تراکنش','Backup downloaded':'نسخهٔ پشتیبان دریافت شد','Undo':'واگرد','Keep full':'حالت کامل','Smooth':'روان','Lite':'سبک','Light theme':'تم روشن','Dark theme':'تم تاریک','Theme applied':'تم اعمال شد','All entries in this backup already exist':'همهٔ موارد این نسخهٔ پشتیبان از قبل وجود دارند','Donation':'حمایت مالی','Enter a task title':'عنوان کار را وارد کنید','Please enter a valid amount':'مبلغ معتبر وارد کنید','No valid tasks or planner entries found in this file':'در این فایل کار یا مورد پلنر معتبری پیدا نشد','Could not read this backup file':'خواندن فایل پشتیبان ممکن نشد','No completed tasks to clear':'کاری برای پاک‌کردن وجود ندارد','All tasks':'همهٔ کارها','All time':'همهٔ زمان‌ها','Week':'هفته','Day':'روز','Year':'سال','Dates':'تاریخ‌ها','Amount':'مبلغ','The amount is shown in your selected language’s currency.':'مبلغ با واحد پول متناسب با زبان انتخابی نمایش داده می‌شود.','Money values are not exchange-converted.':'مبالغ به‌صورت خودکار تبدیل ارزی نمی‌شوند.','Balances stay separate by currency. New transactions use the monthly-income currency; existing transactions keep theirs.':'موجودی هر ارز جداست؛ تراکنش‌های جدید با ارز درآمد ماهانه ثبت می‌شوند و ارز قبلی‌ها حفظ می‌شود.'
});
Object.assign(APP_I18N,{'Search all planner items…':'جست‌وجوی همهٔ موارد پلنر…','Search planner items':'جست‌وجوی موارد پلنر','Clear search':'پاک‌کردن جست‌وجو','Search all planner data':'جست‌وجوی همهٔ اطلاعات پلنر','No planner items match your search.':'موردی در پلنر با این جست‌وجو پیدا نشد.','Search':'جست‌وجو','Track income, expenses and balance':'ثبت درآمد، هزینه و مانده','FINANCE':'امور مالی','Vazir font license · SIL Open Font License 1.1':'مجوز فونت وزیر · مجوز باز فونت سیل ۱٫۱','Balances stay separate by currency. New transactions use the monthly-income currency; existing transactions keep theirs.':'موجودی هر ارز جداست؛ تراکنش‌های جدید با ارز درآمد ماهانه ثبت می‌شوند و ارز قبلی‌ها حفظ می‌شود.','(USD)':'(دلار آمریکا)'});
Object.assign(APP_I18N,{'Search tasks and planner…':'جست‌وجوی کارها و پلنر…','Search tasks and planner':'جست‌وجوی کارها و پلنر','Tasks':'کارها','Task':'کار','Planner':'پلنر','No tasks or planner items match':'هیچ کاری یا موردی در پلنر پیدا نشد','Finance':'امور مالی','Monthly income':'درآمد ماهانه','Not set':'تنظیم نشده','Edit monthly income':'ویرایش درآمد ماهانه','Set or update your monthly income for expense ratios':'ثبت یا ویرایش درآمد ماهانه برای محاسبهٔ نسبت هزینه‌ها','Finance password':'رمز امور مالی','Set a Finance password':'تنظیم رمز امور مالی','Set or change Finance password':'تنظیم یا تغییر رمز امور مالی','Finance password settings':'تنظیمات رمز امور مالی','Finance password saved':'رمز امور مالی ذخیره شد','Finance password removed':'رمز امور مالی حذف شد','Would you like to protect Finance with a password before continuing? You can skip this. If forgotten, reset it in Settings.':'پیش از ادامه می‌خواهید برای امور مالی رمز بگذارید؟ می‌توانید رد کنید. اگر رمز را فراموش کردید، آن را در تنظیمات بازنشانی کنید.','Set a password':'تنظیم رمز','Continue without password':'ادامه بدون رمز','This is a local app lock; it does not encrypt data stored on this device.':'این فقط قفل محلی برنامه است و داده‌های ذخیره‌شده روی دستگاه را رمزگذاری نمی‌کند.','Choose a password with at least 6 characters, then confirm it.':'رمزی با دست‌کم ۶ نویسه انتخاب و سپس آن را تأیید کنید.','Password':'رمز','Confirm password':'تأیید رمز','Save password':'ذخیرهٔ رمز','Enter your Finance password to continue.':'برای ادامه رمز امور مالی را وارد کنید.','Unlock Finance':'بازکردن قفل امور مالی','Forgot password? Change it in Settings.':'رمز را فراموش کرده‌اید؟ در تنظیمات آن را تغییر دهید.','You can reset the local password here without the previous password if you forgot it. Stored Finance data is not encrypted.':'اگر رمز قبلی را فراموش کرده‌اید، اینجا بدون آن رمز جدید بگذارید. داده‌های مالی ذخیره‌شده رمزگذاری نشده‌اند.','Set or change password':'تنظیم یا تغییر رمز','Remove password':'حذف رمز','Password must be at least 6 characters.':'رمز باید دست‌کم ۶ نویسه داشته باشد.','Passwords do not match.':'رمزها با هم یکسان نیستند.','Incorrect password.':'رمز نادرست است.','Could not save the password on this device.':'ذخیرهٔ رمز روی این دستگاه ممکن نشد.','Remove Finance password?':'رمز امور مالی حذف شود؟','Finance will open without a password on this device.':'امور مالی در این دستگاه بدون رمز باز می‌شود.','Monthly income is used to calculate expense percentages.':'درآمد ماهانه برای محاسبهٔ درصد هزینه‌ها استفاده می‌شود.','What is your monthly income? Enter the amount and choose whether it is in USD or toman below. This helps calculate how much of it each expense uses.':'درآمد ماهانهٔ شما چقدر است؟ مبلغ را وارد کنید و در ادامه دلار آمریکا (USD) یا تومان (IRR) را انتخاب کنید تا سهم هر هزینه از آن محاسبه شود.','Monthly income not set':'درآمد ماهانه تنظیم نشده','Save monthly income':'ذخیرهٔ درآمد ماهانه','Not now':'فعلاً نه','Monthly income saved':'درآمد ماهانه ذخیره شد','Income this month':'درآمد این ماه','Expenses this month':'هزینه‌های این ماه','Net this month':'ماندهٔ این ماه','Monthly expense breakdown':'ترکیب هزینه‌های ماهانه','of monthly income':'از درآمد ماهانه','of expenses':'از هزینه‌ها','No expenses recorded this month yet.':'هنوز هزینه‌ای برای این ماه ثبت نشده است.','Expense category':'دسته‌بندی هزینه','Transport':'رفت‌وآمد','Food':'خوراک','Clothing':'پوشاک','Office':'اداری','Internet':'اینترنت','Personal':'شخصی','Repairs':'تعمیرات','Other':'غیره','% of monthly income':'از درآمد ماهانه','Delete transaction':'حذف تراکنش','Vazir font license · SIL Open Font License 1.1':'مجوز فونت وزیر · مجوز باز فونت سیل ۱٫۱','Set a new password here. The previous password is not required in Settings.':'اینجا رمز جدید تنظیم کنید؛ در تنظیمات نیازی به رمز قبلی نیست.','What is your monthly income? Enter the amount and choose whether it is in USD or toman below. This helps calculate how much of it each expense uses.':'درآمد ماهانهٔ شما چقدر است؟ مبلغ را وارد کنید و در ادامه دلار آمریکا (USD) یا تومان (IRR) را انتخاب کنید تا سهم هر هزینه از آن محاسبه شود.','Income currency':'واحد پول درآمد','US dollars (USD)':'دلار آمریکا (USD)','Toman (IRR)':'تومان (IRR)','Toman':'تومان','USD':'USD','Income currency differs from transaction':'واحد پول درآمد با تراکنش متفاوت است','New transactions use the monthly-income currency; existing transactions keep their currency.':'تراکنش‌های جدید با ارز درآمد ماهانه ثبت می‌شوند؛ ارز تراکنش‌های قبلی حفظ می‌شود.'});
let appLanguage = 'en';
try { appLanguage = localStorage.getItem('focusflow-language') === 'fa' ? 'fa' : 'en'; } catch {}
const APP_I18N_EN = Object.fromEntries(Object.entries(APP_I18N).map(([en,fa])=>[fa,en]));
Object.assign(APP_I18N,{'Search prompts, notes, and tags…':'جست‌وجوی پرامپت‌ها، یادداشت‌ها و برچسب‌ها…'});
Object.assign(APP_I18N,{'Manage data':'مدیریت داده‌ها'});
Object.assign(APP_I18N_EN,{'مدیریت داده‌ها':'Manage data'});

Object.assign(APP_I18N, {'Finance security': 'امنیت امور مالی', 'Lock and recovery for finance data': 'قفل و بازیابی داده\u200cهای امور مالی', 'Animations': 'انیمیشن\u200cها', 'Fewer animations make the app faster on weaker phones': 'انیمیشن کمتر و اجرای سریع\u200cتر برای گوشی\u200cهای ضعیف', 'Data': 'داده\u200cها', 'Back up, restore or clear your data': 'پشتیبان\u200cگیری، بازیابی یا پاک\u200cکردن داده\u200cها', 'Save a copy of all your data': 'ذخیرهٔ یک نسخه از همهٔ داده\u200cهای شما', 'Restore from backup': 'بازیابی پشتیبان', 'Load data from a JSON backup': 'بارگذاری داده\u200cها از فایل پشتیبان JSON', 'Manage data': 'مدیریت داده\u200cها', 'Clear completed tasks or other data': 'پاک\u200cکردن کارهای تکمیل\u200cشده یا سایر داده\u200cها', 'About': 'درباره', 'FocusFlow v52': 'فوکوس\u200cفلو نسخهٔ ۵۲', 'Skip for now': 'فعلاً نه', 'Track income, expenses and balance': 'ثبت درآمد، هزینه و مانده', 'Monthly income': 'درآمد ماهانه', 'Used to calculate expense percentages': 'برای محاسبهٔ درصد هزینه\u200cها', 'Paused': 'متوقف\u200cشده', 'Ready for a break': 'آمادهٔ استراحت', 'Pause': 'توقف موقت', 'Resume': 'ادامه', 'Delete item': 'حذف مورد', 'Edit item': 'ویرایش مورد', 'Move item': 'جابه\u200cجایی مورد', 'Delete this plan?': 'پلن حذف شود؟', 'Prompt details': 'جزئیات پرامپت', 'Settings & backup': 'تنظیمات و پشتیبان\u200cگیری', 'Choose light or dark mode.': 'حالت روشن یا تاریک را انتخاب کنید.', 'Export library': 'خروجی کتابخانه', 'Prompts, tags, and images are included in a JSON backup.': 'پرامپت\u200cها، برچسب\u200cها و تصاویر در پشتیبان ذخیره می\u200cشوند.', 'Restore backup': 'بازیابی پشتیبان', 'Choose a PromptVault JSON backup to restore.': 'یک فایل پشتیبان JSON را برای بازیابی انتخاب کنید.', 'Import file': 'واردکردن فایل', 'Data management': 'مدیریت داده\u200cها', 'Prompts and tags are stored on this device only.': 'پرامپت\u200cها و برچسب\u200cها فقط روی همین دستگاه ذخیره می\u200cشوند.', 'Clear all data': 'پاک\u200cکردن همهٔ داده\u200cها', 'About storage': 'دربارهٔ فضای ذخیره\u200cسازی', 'Sort prompts': 'مرتب\u200cسازی پرامپت\u200cها', 'Grid view': 'نمای شبکه\u200cای', 'List view': 'نمای فهرستی', 'Name (A–Z)': 'نام (الف–ی)', 'Most used': 'بیشترین استفاده', 'Recently edited': 'اخیراً ویرایش\u200cشده', 'Newest': 'جدیدترین', 'Oldest': 'قدیمی\u200cترین', 'Prompt name *': 'نام پرامپت *', 'Prompt text *': 'متن پرامپت *', 'Notes (optional)': 'یادداشت\u200cها (اختیاری)', 'Save prompt': 'ذخیرهٔ پرامپت', 'Create tag': 'ایجاد برچسب', 'Manage tags': 'مدیریت برچسب\u200cها', 'New prompt': 'پرامپت جدید', 'Edit prompt': 'ویرایش پرامپت', 'Selected icon': 'آیکون انتخاب\u200cشده', 'Choose an icon': 'انتخاب آیکون', 'Choose a Lucide icon below.': 'یک آیکون از فهرست زیر انتخاب کنید.', 'Save tag': 'ذخیرهٔ برچسب', 'Tag name': 'نام برچسب', 'Tag color': 'رنگ برچسب', 'Scrollable tags': 'برچسب\u200cها', 'PromptVault logo': 'نشان بن\u200cفایر', 'e.g. Photography': 'مثلاً عکاسی', 'Delete this prompt? This cannot be undone.': 'این پرامپت حذف شود؟ این کار قابل بازگشت نیست.', 'Delete all prompts and tags? This cannot be undone. Export a backup first.': 'همهٔ پرامپت\u200cها و برچسب\u200cها حذف شوند؟ این کار قابل بازگشت نیست. ابتدا یک نسخهٔ پشتیبان تهیه کنید.', 'Library cleared': 'کتابخانه پاک شد', 'Backup exported': 'پشتیبان ذخیره شد', 'Backup imported': 'پشتیبان بازیابی شد', 'Tag saved': 'برچسب ذخیره شد', 'Tag deleted': 'برچسب حذف شد', 'Prompt copied!': 'پرامپت کپی شد!'});
Object.assign(APP_I18N_EN, Object.fromEntries(Object.entries(APP_I18N).map(([en, fa]) => [fa, en])));
Object.assign(APP_I18N,{'Bonfire':'بن‌فایر'});
Object.assign(APP_I18N_EN,{'بن‌فایر':'Bonfire'});
function translateCopy(value) {
  const raw=String(value??''), trim=raw.trim(), lead=raw.slice(0,raw.indexOf(trim)), trail=raw.slice(raw.indexOf(trim)+trim.length);
  if(!trim)return raw;
  if(appLanguage==='fa'){
    let dyn=trim.match(/^(Urgency|Priority|Progress|Status): (.+)$/);if(dyn){const labels={'Urgency':'فوریت','Priority':'اولویت','Progress':'وضعیت','Status':'وضعیت'},values={'Low':'کم','Normal':'عادی','High':'زیاد','Urgent':'فوری','Not started':'شروع‌نشده','In progress':'در حال انجام','Completed':'تکمیل‌شده'};return lead+`${labels[dyn[1]]}: ${values[dyn[2]]||dyn[2]}`+trail;}
    dyn=trim.match(/^(Mark as done|Mark as not done|Mark incomplete|Complete item|Complete plan|Edit item|Move item|Delete transaction): (.+)$/);if(dyn){const labels={'Mark as done':'انجام شد','Mark as not done':'انجام نشده','Mark incomplete':'ناتمام','Complete item':'تکمیل مورد','Complete plan':'تکمیل پلن','Edit item':'ویرایش مورد','Move item':'جابه‌جایی مورد','Delete transaction':'حذف تراکنش'};return lead+`${labels[dyn[1]]}: ${dyn[2]}`+trail;}
    dyn=trim.match(/^(Focus timer set to) (\d+) min$/);if(dyn)return lead+`زمان‌سنج تمرکز روی ${dyn[2]} دقیقه تنظیم شد`+trail;
    dyn=trim.match(/^Music will stop in (\d+) min$/);if(dyn)return lead+`موسیقی تا ${dyn[1]} دقیقهٔ دیگر متوقف می‌شود`+trail;
    dyn=trim.match(/^Cleared (\d+) tasks?$/);if(dyn)return lead+`${dyn[1]} کار پاک شد`+trail;
    dyn=trim.match(/^Restored (\d+) tasks? · (\d+) planner items · (\d+) plans · (\d+) transactions$/);if(dyn)return lead+`${dyn[1]} کار، ${dyn[2]} مورد پلنر، ${dyn[3]} پلن و ${dyn[4]} تراکنش بازیابی شد`+trail;
    dyn=trim.match(/^(.+) (dark )?theme applied$/);if(dyn)return lead+`تم ${APP_I18N[dyn[1]]||dyn[1]} اعمال شد`+trail;
    dyn=trim.match(/^(Edit|Delete) transaction: (.+)$/);if(dyn)return lead+`${dyn[1]==='Edit'?'ویرایش':'حذف'} تراکنش: ${dyn[2]}`+trail;
    dyn=trim.match(/^(\d+) of (\d+) done · (\d+) left$/);if(dyn)return lead+`${dyn[1]} از ${dyn[2]} انجام‌شده · ${dyn[3]} باقی‌مانده`+trail;
    dyn=trim.match(/^All (\d+) tasks done — great job!$/);if(dyn)return lead+`هر ${dyn[1]} کار انجام شد — عالی بود!`+trail;
    dyn=trim.match(/^Completed · (\d+)$/);if(dyn)return lead+`تکمیل‌شده · ${dyn[1]}`+trail;
    dyn=trim.match(/^(\d+) focus sessions? completed today$/);if(dyn)return lead+`${dyn[1]} جلسهٔ تمرکز امروز تکمیل شد`+trail;
    dyn=trim.match(/^(\d+) priority left$/);if(dyn)return lead+`${dyn[1]} اولویت باقی‌مانده`+trail;
    dyn=trim.match(/^(\d+) min focused$/);if(dyn)return lead+`${dyn[1]} دقیقه تمرکز`+trail;
    dyn=trim.match(/^(\d+)h (\d+)m this week$/);if(dyn)return lead+`${dyn[1]} ساعت و ${dyn[2]} دقیقه در این هفته`+trail;
    dyn=trim.match(/^No tasks or planner items match “(.+)”$/);if(dyn)return lead+`هیچ کار یا موردی در پلنر با عبارت «${dyn[1]}» پیدا نشد`+trail;
    dyn=trim.match(/^No tasks match “(.+)”$/);if(dyn)return lead+`کاری با عبارت «${dyn[1]}» پیدا نشد`+trail;
    dyn=trim.match(/^No (.+) tasks$/);if(dyn)return lead+`کار ${dyn[1]} وجود ندارد`+trail;
    dyn=trim.match(/^Nothing in (.+) for this day yet\.$/);if(dyn)return lead+`برای امروز در ${dyn[1]} موردی نیست.`+trail;
    dyn=trim.match(/^(Edit|Delete) plan: (.+)$/);if(dyn)return lead+`${dyn[1]==='Edit'?'ویرایش':'حذف'} پلن: ${dyn[2]}`+trail;
    dyn=trim.match(/^Add plan for (.+)$/);if(dyn)return lead+`افزودن پلن برای ${dyn[1]}`+trail;
    dyn=trim.match(/^(\d+) related links$/);if(dyn)return lead+`${dyn[1]} پیوند مرتبط`+trail;
    if(APP_I18N[trim])return lead+APP_I18N[trim]+trail;
    let m=trim.match(/^(\d+) tasks?$/i);if(m)return lead+`${m[1]} کار`+trail;
    m=trim.match(/^(\d+) planned$/i);if(m)return lead+`${m[1]} برنامه`+trail;
    m=trim.match(/^(\d+) completed$/i);if(m)return lead+`${m[1]} تکمیل‌شده`+trail;
    m=trim.match(/^(\d+) of (\d+) done$/i);if(m)return lead+`${m[1]} از ${m[2]} انجام‌شده`+trail;
    m=trim.match(/^From (.+)$/);if(m)return lead+`از ${m[1]}`+trail;
    m=trim.match(/^(\d+) min this week$/);if(m)return lead+`${m[1]} دقیقه در این هفته`+trail;
    m=trim.match(/^(\d+) tracks?(?: · (\d+) min)?$/);if(m)return lead+`${m[1]} قطعه${m[2]?` · ${m[2]} دقیقه`:''}`+trail;
    m=trim.match(/^(\d+) min$/);if(m)return lead+`${m[1]} دقیقه`+trail;
    m=trim.match(/^(\d+) focus sessions? completed today$/);if(m)return lead+`${m[1]} جلسهٔ تمرکز امروز تکمیل شد`+trail;
    m=trim.match(/^(\d+) sessions?$/);if(m)return lead+`${m[1]} جلسه`+trail;
    m=trim.match(/^(\d+) priority left$/);if(m)return lead+`${m[1]} اولویت باقی‌مانده`+trail;
    m=trim.match(/^(\d+) min focused$/);if(m)return lead+`${m[1]} دقیقه تمرکز`+trail;
    m=trim.match(/^(\d+)h (\d+)m this week$/);if(m)return lead+`${m[1]} ساعت و ${m[2]} دقیقه در این هفته`+trail;
    m=trim.match(/^No tasks match “(.+)”$/);if(m)return lead+`کاری با عبارت «${m[1]}» پیدا نشد`+trail;
    m=trim.match(/^No (.+) tasks$/);if(m)return lead+`کار ${m[1]} وجود ندارد`+trail;
    m=trim.match(/^Nothing in (.+) for this day yet\.$/);if(m)return lead+`برای امروز در ${m[1]} موردی نیست.`+trail;
    m=trim.match(/^(\d+) of (\d+) done · (\d+) left$/);if(m)return lead+`${m[1]} از ${m[2]} انجام‌شده · ${m[3]} باقی‌مانده`+trail;
    m=trim.match(/^All (\d+) tasks done — great job!$/);if(m)return lead+`هر ${m[1]} کار انجام شد — عالی بود!`+trail;
    m=trim.match(/^Completed · (\d+)$/);if(m)return lead+`تکمیل‌شده · ${m[1]}`+trail;
    m=trim.match(/^(\d+) task(?:s)? · (\d+) completed$/);if(m)return lead+`${m[1]} کار · ${m[2]} تکمیل‌شده`+trail;
    m=trim.match(/^(\d+):(\d+)$/);if(m)return lead+`${m[1].replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[Number(d)])}:${m[2].replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[Number(d)])}`+trail;
    m=trim.match(/^(\d+(?:\.\d+)?%?)$/);if(m)return lead+m[1].replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[Number(d)])+trail;
    m=trim.match(/^(\d+)h(?: (\d+)m)?$/);if(m)return lead+`${m[1]} ساعت${m[2]?` و ${m[2]} دقیقه`:''}`+trail;
    m=trim.match(/^(\d+)m$/);if(m)return lead+`${m[1]} دقیقه`+trail;
    m=trim.match(/^(\d+) tasks? · (\d+) completed$/);if(m)return lead+`${m[1]} کار · ${m[2]} تکمیل‌شده`+trail;
  } else if(APP_I18N_EN[trim]) return lead+APP_I18N_EN[trim]+trail;
  return raw;
}
function localizeDigits(value){const text=String(value??'');return appLanguage==='fa'?text.replace(/[0-9]/g,d=>'۰۱۲۳۴۵۶۷۸۹'[Number(d)]):text.replace(/[۰-۹]/g,d=>String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d)));}
Object.assign(APP_I18N,{'Total account balance':'مانده کل حساب','Total items':'مجموع موارد','Overdue':'عقب‌افتاده','Items by bucket':'موارد بر اساس دسته','From':'از','Choose a day':'انتخاب روز','Add planner item':'افزودن مورد پلنر','Add a task':'افزودن کار','Mark goal complete':'تکمیل هدف','Goal completed':'هدف تکمیل شد','Account balance':'مانده حساب','Edit transaction':'ویرایش تراکنش','Save changes':'ذخیره تغییرات','Transaction updated':'تراکنش به‌روزرسانی شد','Income currency differs from transaction':'واحد پول درآمد با تراکنش متفاوت است','Balances stay separate by currency. New transactions use the monthly-income currency; existing transactions keep theirs.':'موجودی هر ارز جداست؛ تراکنش‌های جدید با ارز درآمد ماهانه ثبت می‌شوند و ارز قبلی‌ها حفظ می‌شود.','New transactions use the monthly-income currency; existing transactions keep their currency.':'تراکنش‌های جدید با ارز درآمد ماهانه ثبت می‌شوند؛ ارز تراکنش‌های قبلی حفظ می‌شود.'});
const APP_ORIGINAL_TEXT = new WeakMap();
const APP_ORIGINAL_ATTRS = new WeakMap();
const APP_TRANSLATE_SKIP = 'script,style,textarea,svg,defs,#bonfire-native-root';
const APP_TRANSLATE_ATTRS = ['aria-label','aria-description','title','placeholder','alt'];
function translateTextNode(node){
  if(!node || node.nodeType!==3 || node.parentElement?.closest(APP_TRANSLATE_SKIP))return;
  const raw=node.nodeValue??'';
  let next;
  if(APP_ORIGINAL_TEXT.has(node)){
    const source=APP_ORIGINAL_TEXT.get(node);
    const expected=appLanguage==='fa'?localizeDigits(translateCopy(source)):localizeDigits(source);
    if(raw===expected||raw===source)next=expected;
    else{next=localizeDigits(translateCopy(raw));APP_ORIGINAL_TEXT.set(node,appLanguage==='fa'?raw:next);}
  }else{
    next=localizeDigits(translateCopy(raw));
    if(next!==raw)APP_ORIGINAL_TEXT.set(node,appLanguage==='fa'?raw:next);
  }
  if(next!==raw)node.nodeValue=next;
}
function translateElementAttributes(el){
  if(!el || el.nodeType!==1 || el.matches?.(APP_TRANSLATE_SKIP))return;
  let originals=APP_ORIGINAL_ATTRS.get(el);
  for(const attr of APP_TRANSLATE_ATTRS){
    if(!el.hasAttribute(attr))continue;
    const raw=el.getAttribute(attr);
    if(!originals)originals=new Map();
    let next;
    if(originals.has(attr)){
      const source=originals.get(attr);
      const expected=appLanguage==='fa'?localizeDigits(translateCopy(source)):localizeDigits(source);
      if(raw===expected||raw===source)next=expected;
      else{next=localizeDigits(translateCopy(raw));originals.set(attr,appLanguage==='fa'?raw:next);}
    }else{
      next=localizeDigits(translateCopy(raw));
      if(next!==raw)originals.set(attr,appLanguage==='fa'?raw:next);
    }
    if(next!==raw)el.setAttribute(attr,next);
  }
  if(originals)APP_ORIGINAL_ATTRS.set(el,originals);
}
function translateDom(root=document.body){
  if(!root)return;
  const textWalker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
  let textNode;while(textNode=textWalker.nextNode())translateTextNode(textNode);
  if(root.nodeType===1)translateElementAttributes(root);
  const elementWalker=document.createTreeWalker(root,NodeFilter.SHOW_ELEMENT);
  let el;while(el=elementWalker.nextNode())translateElementAttributes(el);
}
const APP_MUTATIONS=new MutationObserver(records=>{
  const addedRoots=new Set();
  for(const record of records){
    if(record.type==='characterData')translateTextNode(record.target);
    else if(record.type==='childList')record.addedNodes.forEach(node=>{
      if(node.nodeType===1&&node.matches?.(APP_TRANSLATE_SKIP))return;
      if(node.nodeType===1||node.nodeType===11)addedRoots.add(node);
      else if(node.nodeType===3)translateTextNode(node);
    });
    else if(record.type==='attributes')translateElementAttributes(record.target);
  }
  for(const root of addedRoots){
    let parent=root.nodeType===1?root.parentElement:null,covered=false;
    while(parent){if(addedRoots.has(parent)){covered=true;break;}parent=parent.parentElement;}
    if(!covered)translateDom(root);
  }
});
function updateLanguageButtons(){document.querySelectorAll('[data-language-choice]').forEach(b=>b.classList.toggle('active',b.dataset.languageChoice===appLanguage));}
function setLanguage(lang){appLanguage=lang==='fa'?'fa':'en';/* Keep the same absolute seven dates when switching calendars; only labels/formatting change. */document.documentElement.lang=appLanguage;document.documentElement.dir=appLanguage==='fa'?'rtl':'ltr';try{localStorage.setItem('focusflow-language',appLanguage)}catch{};translateDom();if(typeof renderPerfBtn==='function')renderPerfBtn();if($('#plannerGroupBy')){const groupLabels=appLanguage==='fa'?['دسته','وضعیت پیشرفت','اولویت']:['Bucket','Progress','Priority'];[...$('#plannerGroupBy').options].forEach((o,i)=>o.textContent=groupLabels[i]||o.textContent);}if($('#plannerProjectSelect')){const defaultOption=[...$('#plannerProjectSelect').options].find(o=>o.value==='default');if(defaultOption){const project=planner.projects.find(p=>p.id==='default');defaultOption.textContent=(appLanguage==='fa'?'برنامه‌ریز من':(project?.name||'My planner'))+(project?.done?' ✓':'');}}updateLanguageButtons();renderPalettes();renderDates();renderTags();renderTasks();renderFinance();renderCalendar();window.__ffRefreshCalendarWeekdays?.();renderPlanner();renderProgress();renderStats();refreshLocalizedDateInputs();if($('#musicList').dataset.ready)renderMusic();$('#financeCurrencyLabel').textContent=financeCurrencyLabelText();updateAddButtonContext();document.title=appLanguage==='fa'?'فوکوس‌فلو':'FocusFlow';refreshCelebrationLanguage();if(typeof checkFinanceMonthClosePrompt==='function')setTimeout(checkFinanceMonthClosePrompt,300);if(typeof renderDataManager==='function'&&$('#dataManagerOverlay').classList.contains('show'))renderDataManager();}
const originalDateLocale=Date.prototype.toLocaleDateString,originalDateTimeLocale=Date.prototype.toLocaleString,originalTimeLocale=Date.prototype.toLocaleTimeString;
Date.prototype.toLocaleDateString=function(locales,options){return appLanguage==='fa'?originalDateLocale.call(this,'fa-IR-u-ca-persian-nu-arabext',{...(options||{}),calendar:'persian',numberingSystem:'arabext'}):originalDateLocale.call(this,'en-US-u-ca-gregory-nu-latn',options);};
Date.prototype.toLocaleString=function(locales,options){return appLanguage==='fa'?originalDateTimeLocale.call(this,'fa-IR-u-ca-persian-nu-arabext',{...(options||{}),calendar:'persian',numberingSystem:'arabext'}):originalDateTimeLocale.call(this,'en-US-u-ca-gregory-nu-latn',options);};
Date.prototype.toLocaleTimeString=function(locales,options){return appLanguage==='fa'?originalTimeLocale.call(this,'fa-IR-u-ca-persian-nu-arabext',{...(options||{}),numberingSystem:'arabext'}):originalTimeLocale.call(this,'en-US-u-nu-latn',options);};
const jalaliPartsFormatter=new Intl.DateTimeFormat('en-u-ca-persian-nu-latn',{year:'numeric',month:'numeric',day:'numeric'});
const jalaliDayFormatter=new Intl.NumberFormat('fa-IR-u-nu-arabext',{useGrouping:false});
const jalaliPartsMemo=new Map();
function jalaliParts(date){
  const d=new Date(date),key=`${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  if(jalaliPartsMemo.has(key))return jalaliPartsMemo.get(key);
  const p=jalaliPartsFormatter.formatToParts(d),value=Object.fromEntries(p.filter(x=>x.type!=='literal').map(x=>[x.type,Number(x.value)]));
  if(jalaliPartsMemo.size>=900)jalaliPartsMemo.clear();
  jalaliPartsMemo.set(key,value);return value;
}
function calendarMonthStart(date){if(appLanguage!=='fa')return new Date(date.getFullYear(),date.getMonth(),1,12);const d=noon(date),day=jalaliParts(d).day;d.setDate(d.getDate()-day+1);return d;}
function calendarDayNumber(date){return appLanguage==='fa'?jalaliDayFormatter.format(jalaliParts(date).day):String(date.getDate());}
function shiftCalendarMonth(date,step){
  if(appLanguage!=='fa')return new Date(date.getFullYear(),date.getMonth()+step,1,12);
  let d=calendarMonthStart(date),remaining=Math.trunc(Number(step)||0),direction=Math.sign(remaining);
  while(remaining!==0){
    /* A 32-day forward hop always lands inside the next Jalali month; stepping back one day lands in the previous month. */
    d.setDate(d.getDate()+(direction>0?32:-1));
    const parts=jalaliParts(d);
    d.setDate(d.getDate()-parts.day+1);
    remaining-=direction;
  }
  return noon(d);
}
const ic = name => `<svg class="ic" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
const pad = n => String(n).padStart(2, '0');
const keyDate = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const parseKey = k => { const [y, m, d] = String(k).split('-').map(Number); return new Date(y, (m || 1) - 1, d || 1, 12); };
const sameDay = (a, b) => keyDate(a) === keyDate(b);
const noon = d => { const x = new Date(d); x.setHours(12, 0, 0, 0); return x; };
const fmtTime = s => Number.isFinite(s) && s > 0 ? `${pad(Math.floor(s / 60))}:${pad(Math.floor(s % 60))}` : '00:00';

const store = {
  get(key, fallback) {
    try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); }
    catch { return fallback; }
  },
  getRaw(key, fallback) { try { return localStorage.getItem(key) ?? fallback; } catch { return fallback; } },
  set(key, value) { try { localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value)); return true; } catch { return false; } }
};

/* ======================================================================
   Performance mode — Auto (detects weaker phones) · Smooth · Lite
   Lite = no backdrop blur, lighter shadows, fewer particles, simpler intros.
   ====================================================================== */
const PERF = { key: 'focusflow-perf', detectedKey: 'focusflow-perf-detected' };
const isLite = () => document.documentElement.classList.contains('perf-lite');
function deviceLooksWeak() {
  const n = navigator, m = n.deviceMemory, c = n.hardwareConcurrency;
  return !!(n.connection && n.connection.saveData) || (m && m <= 2) || (m && m <= 4 && c && c <= 4);
}
const perfMode = () => {
  const m = store.getRaw(PERF.key, '');
  return m === 'lite' || m === 'full' ? m : (deviceLooksWeak() ? 'lite' : 'full');
};
function applyPerf() {
  const lite = perfMode() === 'lite';
  document.documentElement.classList.toggle('perf-lite', lite);
  return lite;
}

/* ======================================================================
   Assets — stored as inert <script type="text/x-ff-asset"> blocks at the end
   of the file, so the app starts before the 14 MB of media is parsed.
   Audio is turned into a Blob URL once (no re-decoding of base64 per play).
   ====================================================================== */
const assetCache = new Map();
let assetsReady = false;
// Robust exact-key lookup: CSS.escape inside a quoted attribute selector can miss media keys containing spaces or punctuation on some engines.
const assetEl = k => Array.from(document.querySelectorAll('script[type="text/x-ff-asset"][data-key]')).find(el => el.dataset.key === k) || null;
function dataToBlobUrl(uri) {
  try {
    const comma = uri.indexOf(','), mime = uri.slice(5, uri.indexOf(';'));
    const bin = atob(uri.slice(comma + 1)), bytes = new Uint8Array(bin.length);
    for (let j = 0; j < bin.length; j++) bytes[j] = bin.charCodeAt(j);
    return URL.createObjectURL(new Blob([bytes], { type: mime }));
  } catch { return uri; }
}
function assetRaw(k) {
  if (assetCache.has(k)) return assetCache.get(k);
  const el = assetEl(k);
  if (!el) return '';
  // External media is resolved synchronously to preserve the existing asset() API.
  if (el.dataset.src) { const v = el.dataset.src; assetCache.set(k, v); return v; }
  let v = el.textContent.trim();
  if (v.startsWith('data:audio/')) { v = dataToBlobUrl(v); el.remove(); assetCache.set(k, v); }  // frees the base64 text
  else if (v.length < 200000) assetCache.set(k, v);
  return v;
}
const asset = k => assetRaw(k);

/* ======================================================================
   Config
   ====================================================================== */
const CATEGORIES = [
  { name: 'Work',     icon: 'work',     color: '#4f97f5', art: 'back svg/Work-svg.svg' },
  { name: 'Fitness',  icon: 'fitness',  color: '#22b07d', art: 'back svg/Sport-svg.svg' },
  { name: 'Personal', icon: 'personal', color: '#e0559a', art: 'back svg/Personal-svg.svg' },
  { name: 'Coding',   icon: 'coding',   color: '#8b5cf6', art: 'back svg/Coding-svg.svg' },
  { name: 'Learning', icon: 'learning', color: '#f08c00', art: 'back svg/Reading-svg.svg' },
  { name: 'Health',   icon: 'health',   color: '#14a3b8', art: 'back svg/Selfcare-svg.svg' },
  { name: 'Travel',   icon: 'travel',   color: '#0ea5e9', art: 'back svg/Travel-svg.svg' },
  { name: 'Shopping', icon: 'shopping', color: '#f97316', art: 'back svg/Shop-svg.svg' },
  { name: 'Wishlist', icon: 'gift',     color: '#d946ef', art: 'back svg/Wishlist-svg.svg' },
  { name: 'Family',   icon: 'family',   color: '#e11d48', art: 'back svg/Family time -svg.svg' },
  { name: 'Photo',    icon: 'camera',   color: '#64748b', art: 'back svg/Photo-svg.svg' },
  { name: 'Focus',    icon: 'focus',    color: '#6366f1', art: 'back svg/Focus -svg.svg' },
  { name: 'Break',    icon: 'coffee',   color: '#a16207', art: 'back svg/Breaktime-svg.svg' }
];
const CATEGORY_ALIASES = { Gym: 'Fitness', Sport: 'Fitness', Reading: 'Learning', Shop: 'Shopping', Selfcare: 'Health', 'Self-care': 'Health', Photography: 'Photo', Breaktime: 'Break' };

/* Light-mode colour palettes (from the Color Hunt links) */
const PALETTES = [
  { id: 'ocean',      name: 'Ocean',      colors: ['#e0e5ec', '#ffffff', '#8bb5ff', '#4f97f5'], bg: '#e0e5ec' },
  { id: 'amethyst',   name: 'Amethyst',   colors: ['#4c2365', '#7f5d99', '#9e7eb5', '#c4a4da'], bg: '#ece4f3' },
  { id: 'bordeaux',   name: 'Bordeaux',   colors: ['#800020', '#f3e6d5', '#fff9f2', '#d45060'], bg: '#f3e6d5' },
  { id: 'blush',      name: 'Blush',      colors: ['#fcf8f8', '#fbefef', '#f9dfdf', '#f5afaf'], bg: '#fbefef' },
  { id: 'sand',       name: 'Sand',       colors: ['#faf7f3', '#f0e4d3', '#dcc5b2', '#d9a299'], bg: '#f0e4d3' },
  { id: 'sage',       name: 'Sage',       colors: ['#3d8d7a', '#b3d8a8', '#fbffe4', '#a3d1c6'], bg: '#ebf2d8' },
  { id: 'periwinkle', name: 'Periwinkle', colors: ['#fbfbfb', '#e8f9ff', '#c4d9ff', '#c5baff'], bg: '#e8f1fb' }
];
/* Dark-mode colour palettes (from the Color Hunt dark links) */
const DARK_PALETTES = [
  { id: 'midnight',    name: 'Midnight',    colors: ['#101722', '#182332', '#4f97f5', '#8bb5ff'], bg: '#101722' },
  { id: 'forest',      name: 'Forest',      colors: ['#092328', '#12544f', '#2a835f', '#8bbb92'], bg: '#092328' },
  { id: 'cobalt',      name: 'Cobalt',      colors: ['#2f2fe4', '#162e93', '#1a1953', '#080616'], bg: '#080616' },
  { id: 'ultraviolet', name: 'Ultraviolet', colors: ['#090040', '#471396', '#b13bff', '#ffcc00'], bg: '#090040' },
  { id: 'crimson',     name: 'Crimson',     colors: ['#ff204e', '#a0153e', '#5d0e41', '#00224d'], bg: '#001a3b' },
  { id: 'ember',       name: 'Ember',       colors: ['#ff6500', '#1e3e62', '#0b192c', '#000000'], bg: '#0b192c' },
  { id: 'magenta',     name: 'Magenta',     colors: ['#610c9f', '#940b92', '#da0c81', '#e95793'], bg: '#12061d' }
];
const CAT = Object.fromEntries(CATEGORIES.map(c => [c.name, c]));
const normalizeCategory = name => { const n = CATEGORY_ALIASES[name] || name; return CAT[n] ? n : 'Work'; };
const CATEGORY_LABEL_FA = { All:'همه', Work:'کار', Fitness:'تناسب اندام', Personal:'شخصی', Coding:'برنامه‌نویسی', Learning:'یادگیری', Health:'سلامتی', Travel:'سفر', Shopping:'خرید', Wishlist:'علاقه‌مندی‌ها', Family:'خانواده', Photo:'عکس', Focus:'تمرکز', Break:'استراحت' };
const categoryDisplayName = name => {
  const raw = String(name ?? '').trim(), normalized = normalizeCategory(raw);
  const canonical = Object.keys(CAT).find(key => key.toLowerCase() === raw.toLowerCase()) || normalized;
  const persian = appLanguage === 'fa' || String(document.documentElement.lang || '').toLowerCase().startsWith('fa');
  return persian ? (CATEGORY_LABEL_FA[canonical] || CATEGORY_LABEL_FA[raw] || canonical) : canonical;
};
const catColor = name => CAT[normalizeCategory(name)].color;

const TRACKS = [
  { title: 'Calm Music 1', file: 'music/Calm music 1 -music.mp3', cover: 'music/calm music 1 image.jpg', desc: 'Soft ambience for concentration' },
  { title: 'Calm Music 2', file: 'music/calm music 2-music.mp3',  cover: 'music/calm music 2 image.jpg', desc: 'Peaceful music for relaxation' }
];

/* ======================================================================
   State
   ====================================================================== */
const KEYS = { plannerProjects: 'focusflow-planner-projects', plannerActiveProject: 'focusflow-planner-active-project', plannerBuckets: 'focusflow-planner-buckets', plannerView: 'focusflow-planner-view', planner: 'focusflow-planner-entries', tasks: 'focusflow-tasks', goal: 'focusflow-primary-goal', focus: 'focusflow-focus-seconds-by-day',
  theme: 'focusflow-theme', palette: 'focusflow-palette', darkPalette: 'focusflow-dark-palette', language: 'focusflow-language', finance: 'focusflow-finance', financeIncome:'focusflow-finance-monthly-income', financeIncomeCurrency:'focusflow-finance-monthly-income-currency',financeIncomeCurrencyChosen:'focusflow-finance-monthly-income-currency-chosen', financePassword:'focusflow-finance-password-v1', financeSecurityChoice:'focusflow-finance-security-choice', financeIncomePrompted:'focusflow-finance-income-prompted', durations: 'focusflow-track-durations', sound: 'focusflow-sound', volume: 'focusflow-volume', custom: 'focusflow-custom-minutes', sessions: 'focusflow-sessions-by-day' };

const URGENCY = { low: { label: 'Low', rank: 0 }, normal: { label: 'Normal', rank: 1 }, high: { label: 'High', rank: 2 }, urgent: { label: 'Urgent', rank: 3 } };
const normalizeUrgency = value => Object.hasOwn(URGENCY, value) ? value : 'normal';

function sanitizeTask(t, i) {
  if (!t || typeof t !== 'object') return null;
  const title = String(t.title ?? t.text ?? '').trim().slice(0, 120);
  if (!title) return null;
  return {
    id: Number.isFinite(Number(t.id)) ? Number(t.id) : Date.now() + i,
    title,
    category: normalizeCategory(t.category),
    date: /^\d{4}-\d{2}-\d{2}$/.test(t.date) ? t.date : keyDate(new Date()),
    done: !!t.done,
    starred: !!t.starred,
    urgency: normalizeUrgency(t.urgency),
    completionSoundPlayed: !!t.completionSoundPlayed
  };
}
function sanitizeDayMap(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return {};
  return Object.fromEntries(Object.entries(raw)
    .filter(([k, v]) => /^\d{4}-\d{2}-\d{2}$/.test(k) && Number.isFinite(Number(v)) && Number(v) >= 0)
    .map(([k, v]) => [k, Math.floor(Number(v))]));
}

const state = {
  selected: noon(new Date()),
  month: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  category: 'All',
  tasks: (store.get(KEYS.tasks, []) || []).map(sanitizeTask).filter(Boolean),
  goal: store.getRaw(KEYS.goal, ''),
  focus: sanitizeDayMap(store.get(KEYS.focus, {})),
  sessions: sanitizeDayMap(store.get(KEYS.sessions, {})),
  sound: store.getRaw(KEYS.sound, 'true') !== 'false',
  volume: Math.min(1, Math.max(0, parseFloat(store.getRaw(KEYS.volume, '0.65')) || 0.65)),
  statsFilter: 'total',
  page: 'home',
  pendingAddFromCalendar: false
};

let timerBusy = false;   // true while the focus timer dialog is open → mini player tucks away

const music = { el: null, index: -1, repeat: 'all', seeking: false, sleepAt: 0, analyser: null };

function save() {
  if (!store.set(KEYS.tasks, state.tasks)) toast('Storage unavailable — changes may not persist.');
}
function refreshAll() {
  renderDates(); renderTags(); renderTasks(); updateStreak();
  if (desktopLayout.matches) renderHomeSummary();
  if (state.page === 'calendar') renderCalendar();
  if (state.page === 'progress') renderProgress();
  if (state.page === 'stats') renderStats();
  if (state.page === 'planner') renderPlanner();
  if ($('#searchOverlay').classList.contains('show')) renderSearch();
  if (!$('#desktopSearchResults').hidden) renderDesktopSearch();
}


/* ======================================================================
   Weekly planner — intentionally independent of state.tasks and task metrics.
   ====================================================================== */
const plannerWeekStart = date => { const d = noon(date); d.setDate(d.getDate() - (appLanguage==='fa' ? (d.getDay()+1)%7 : (d.getDay()+6)%7)); return d; };
const validPlanDate = value => /^\d{4}-\d{2}-\d{2}$/.test(value) && Number.isFinite(parseKey(value).getTime()) && keyDate(parseKey(value)) === value;
const newPlanId = () => 'plan-' + (globalThis.crypto?.randomUUID?.() || Date.now().toString(36) + '-' + Math.random().toString(36).slice(2));
const PL_STATUS = { notstarted:'Not started', inprogress:'In progress', completed:'Completed' };
const PL_PRIORITY = { urgent:{label:'Urgent', rank:3}, high:{label:'Important', rank:2}, normal:{label:'Medium', rank:1}, low:{label:'Low', rank:0} };
const PL_LABELS = { work:{name:'Work',color:'#3979ce'}, personal:{name:'Personal',color:'#a64b93'}, learning:{name:'Learning',color:'#a47118'}, wellness:{name:'Wellness',color:'#278776'} };
const BUCKET_COLOURS = {blue:'#4f97f5',purple:'#8b69d0',green:'#289a7a',amber:'#cc902d'};
function sanitizeProject(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const name=String(raw.name || '').trim().slice(0,60); if(!name)return null;
  return {id:String(raw.id || newPlanId().replace('plan-','project-')).slice(0,100),name,description:String(raw.description || '').trim().slice(0,300),done:!!raw.done};
}
function sanitizePlannerLink(raw) {
  if(!raw || typeof raw !== 'object')return null;
  try {const url=new URL(String(raw.url || '').trim().slice(0,2000));if(!['http:','https:'].includes(url.protocol))return null;return {title:String(raw.title || url.hostname).trim().slice(0,80),url:url.href};}catch{return null;}
}
const rawProjects=store.get(KEYS.plannerProjects,[]), defaultProject={id:'default',name:'My planner',description:'',done:false};
const initialProjects=(Array.isArray(rawProjects)?rawProjects:[]).map(sanitizeProject).filter(Boolean);
if(!initialProjects.some(p=>p.id==='default'))initialProjects.unshift(defaultProject);
const projectIds=new Set();const uniqueProjects=initialProjects.filter(p=>{if(projectIds.has(p.id))return false;projectIds.add(p.id);return true;});
let plannerLinksDraft=[];
function sanitizeBucket(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const name = String(raw.name || '').trim().slice(0,40);
  if (!name) return null;
  return {id:String(raw.id || newPlanId()).slice(0,100), name, projectId:String(raw.projectId || 'default').slice(0,100), color:Object.hasOwn(BUCKET_COLOURS,raw.color) ? raw.color : 'blue'};
}
const savedBuckets = store.get(KEYS.plannerBuckets, null);
const initialBuckets = [{id:'week',name:'This week',color:'blue'},{id:'personal',name:'Personal',color:'purple'},{id:'later',name:'Later',color:'green'}];
const plannerBuckets = Array.isArray(savedBuckets) ? savedBuckets.map(sanitizeBucket).filter(Boolean) : initialBuckets;
if (!plannerBuckets.some(b => b.id === 'week')) plannerBuckets.unshift(initialBuckets[0]);
const bucketIds = new Set();
const uniqueBuckets = plannerBuckets.filter(b => { if (bucketIds.has(b.id)) return false; bucketIds.add(b.id); return true; });
let plannerChecklistDraft = [];
function sanitizePlan(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return null;
  const title = String(raw.title ?? '').trim().slice(0, 140);
  if (!title || !validPlanDate(raw.date)) return null;
  return { id: String(raw.id || newPlanId()).slice(0, 100), title, date: raw.date,
    projectId:String(raw.projectId || 'default').slice(0,100),
    startDate:validPlanDate(raw.startDate) && raw.startDate <= raw.date ? raw.startDate : '',
    links:(Array.isArray(raw.links)?raw.links:[]).slice(0,12).map(sanitizePlannerLink).filter(Boolean),
    time: /^(?:[01]\d|2[0-3]):[0-5]\d$/.test(raw.time) ? raw.time : '',
    notes: String(raw.notes ?? '').trim().slice(0, 600),
    done: Object.hasOwn(PL_STATUS,raw.status) ? raw.status === 'completed' : !!raw.done,
    status: Object.hasOwn(PL_STATUS,raw.status) ? raw.status : raw.done ? 'completed' : 'notstarted',
    bucketId: String(raw.bucketId || 'week').slice(0,100),
    priority: Object.hasOwn(PL_PRIORITY,raw.priority) ? raw.priority : 'normal',
    label: Object.hasOwn(PL_LABELS,raw.label) ? raw.label : '',
    checklist: (Array.isArray(raw.checklist) ? raw.checklist : []).slice(0,30).filter(c => c && typeof c === 'object' && String(c.title || '').trim()).map(c => ({title:String(c.title).trim().slice(0,160),done:!!c.done})),
    createdAt: Number.isFinite(Number(raw.createdAt)) ? Number(raw.createdAt) : Date.now() };
}
const rawPlans = store.get(KEYS.planner, []);
if(store.getRaw('focusflow-planner-table-default','')!=='1'){store.set(KEYS.plannerView,'list');store.set('focusflow-planner-table-default','1');}
const planner = { week: plannerWeekStart(new Date()), entries: [], projects:uniqueProjects, activeProject:uniqueProjects.some(p=>p.id===store.getRaw(KEYS.plannerActiveProject,''))?store.getRaw(KEYS.plannerActiveProject,''):'default', buckets:uniqueBuckets, view:['board','list','week','charts'].includes(store.getRaw(KEYS.plannerView,'')) ? store.getRaw(KEYS.plannerView,'') : 'list', returnView:null, listSort:'date', sortDirection:1, groupBy:'bucket', activeDay: keyDate(new Date()), draggedId: null };
const initialPlanIds = new Set();
(Array.isArray(rawPlans) ? rawPlans : []).map(sanitizePlan).filter(Boolean).forEach(p => {
  if (initialPlanIds.has(p.id)) p.id = newPlanId();
  if (!planner.buckets.some(b => b.id === p.bucketId)) p.bucketId = 'week';
  initialPlanIds.add(p.id); planner.entries.push(p);
});
function activePlannerEntries(){return planner.entries.filter(p=>p.projectId===planner.activeProject);}
function activePlannerBuckets(){return planner.buckets.filter(b=>b.projectId===planner.activeProject);}
function projectDefaultBucket(projectId=planner.activeProject){return planner.buckets.find(b=>b.projectId===projectId)?.id || 'week';}
function normalizePlannerRelations(){
  planner.buckets.forEach(b=>{if(!planner.projects.some(p=>p.id===b.projectId))b.projectId='default';});
  planner.projects.forEach(project=>{if(!planner.buckets.some(b=>b.projectId===project.id))planner.buckets.push({id:newPlanId().replace('plan-','bucket-'),projectId:project.id,name:'To do',color:'blue'});});
  planner.entries.forEach(item=>{if(!planner.projects.some(p=>p.id===item.projectId))item.projectId='default';if(!planner.buckets.some(b=>b.id===item.bucketId&&b.projectId===item.projectId))item.bucketId=projectDefaultBucket(item.projectId);});
}
normalizePlannerRelations();
function savePlanner() {
  const entriesSaved=store.set(KEYS.planner,planner.entries), bucketsSaved=store.set(KEYS.plannerBuckets,planner.buckets), projectsSaved=store.set(KEYS.plannerProjects,planner.projects);
  store.set(KEYS.plannerActiveProject,planner.activeProject);
  if(!entriesSaved||!bucketsSaved||!projectsSaved)toast('Storage unavailable — planner changes may not persist.');
}
function plannerDays() { return Array.from({length:7}, (_, i) => { const d = new Date(planner.week); d.setDate(d.getDate() + i); return d; }); }
function plannerDefaultDate() {
  // Normal mode: a new plan's deadline is one week after today.
  const due = noon(new Date());
  due.setDate(due.getDate() + 7);
  return keyDate(due);
}
function focusPlannerDay(date,behavior='smooth'){
  planner.activeDay=date;
  $$('#plannerDayTabs button').forEach(b=>{const selected=b.dataset.date===date;b.setAttribute('aria-pressed',String(selected));b.classList.toggle('is-selected',selected);});
  $$('#plannerBoard .planner-day').forEach(c=>c.classList.toggle('is-selected',c.dataset.planDate===date));
  const column=$$('#plannerBoard .planner-day').find(c=>c.dataset.planDate===date);
  if(column&&!matchMedia('(min-width:1024px)').matches)column.scrollIntoView({behavior:reduceMotion()?'auto':behavior,block:'nearest',inline:'center'});
}

function fillPlannerBuckets(select, value) {
  select.replaceChildren();
  activePlannerBuckets().forEach(bucket => { const option = document.createElement('option'); option.value=bucket.id; option.textContent=bucket.name; select.append(option); });
  select.value = activePlannerBuckets().some(b=>b.id===value) ? value : projectDefaultBucket();
}
function renderPlannerChecklist() {
  const root = $('#plannerChecklist'); root.replaceChildren();
  $('#plannerChecklistCount').textContent = `${plannerChecklistDraft.filter(c=>c.done).length} / ${plannerChecklistDraft.length}`;
  plannerChecklistDraft.forEach((item,index) => {
    const row=document.createElement('div'); row.className='pl-checklist-row'+(item.done?' is-done':'');
    const check=document.createElement('input'); check.type='checkbox'; check.checked=item.done; check.id='pl-check-'+index;
    check.onchange=()=>{item.done=check.checked;row.classList.toggle('is-done',item.done);$('#plannerChecklistCount').textContent=`${plannerChecklistDraft.filter(c=>c.done).length} / ${plannerChecklistDraft.length}`;};
    const label=document.createElement('label');label.htmlFor=check.id;label.textContent=item.title;
    const del=document.createElement('button');del.type='button';del.setAttribute('aria-label','Remove checklist item: '+item.title);del.innerHTML=ic('close');del.onclick=()=>{plannerChecklistDraft.splice(index,1);renderPlannerChecklist();};
    row.append(check,label,del);root.append(row);
  });
}
function addPlannerChecklistItem(){
  const input=$('#plannerChecklistInput'),title=input.value.trim();
  if(!title)return;
  if(plannerChecklistDraft.length>=30)return toast('Up to 30 checklist items per plan');
  plannerChecklistDraft.push({title:title.slice(0,160),done:false});input.value='';renderPlannerChecklist();input.focus();
}
$('#plannerChecklistAdd').onclick=addPlannerChecklistItem;
$('#plannerChecklistInput').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();addPlannerChecklistItem();}};
function setPlannerView(view){
  if(view==='finance'){if(financeAccessGranted){planner.returnView=planner.view==='finance'?(planner.returnView||'charts'):planner.view;planner.view='finance';renderPlanner(true);}else requestFinanceAccess('planner');return;}
  if(planner.view==='finance'){planner.returnView=null;}
  planner.view=view;store.set(KEYS.plannerView,view);renderPlanner(true);
}
$$('[data-planner-view]').forEach(button=>{
  button.onclick=()=>setPlannerView(button.dataset.plannerView);
  button.onkeydown=e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const tabs=$$('[data-planner-view]'),index=tabs.indexOf(button),next=e.key==='Home'?0:e.key==='End'?tabs.length-1:(index+(e.key==='ArrowRight'?1:tabs.length-1))%tabs.length;tabs[next].click();tabs[next].focus();};
});
function renderPlanner(center=false){
  updateAddButtonContext();
  $('#plannerPage').dataset.plannerView=planner.view;
  renderPlannerProjectSelector();
  $$('[data-planner-view]').forEach(button=>{const active=button.dataset.plannerView===planner.view;button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  ['board','list','week','charts','finance'].forEach(view=>$('#planner'+view[0].toUpperCase()+view.slice(1)+'View').hidden=planner.view!==view);
  $('#plannerTableTools').hidden=!['board','list'].includes(planner.view);$('#plannerTableHint').hidden=planner.view!=='list';$('#plannerGroupField').hidden=planner.view!=='board';
  $('#plannerBoard').replaceChildren();$('#plannerKanban').replaceChildren();$('#plannerListBody').replaceChildren();
  if(planner.view==='board')renderPlannerKanban();else if(planner.view==='list')renderPlannerList();else if(planner.view==='week')renderPlannerWeek(center);else if(planner.view==='finance'){renderFinance();if(hasGSAP&&!reduceMotion())gsap.fromTo('#plannerFinanceView > *',{y:14,opacity:0},{y:0,opacity:1,duration:.38,stagger:.06,ease:'power3.out',clearProps:'transform,opacity'});}else renderPlannerCharts();
}
function updatePlannerResultCount(count){$('#plannerBoardCount').textContent=appLanguage==='fa'?`${new Intl.NumberFormat('fa-IR').format(count)} مورد`:`${count} ${count===1?'item':'items'}`;}
function plannerGroups(){
  if(planner.groupBy==='status')return Object.entries(PL_STATUS).map(([id,name])=>({id,name,color:id==='completed'?'green':id==='inprogress'?'blue':'amber'}));
  if(planner.groupBy==='priority')return Object.entries(PL_PRIORITY).map(([id,p])=>({id,name:p.label,color:id==='urgent'?'purple':id==='high'?'amber':'blue'}));
  return activePlannerBuckets();
}
function planGroupId(plan){return planner.groupBy==='bucket'?plan.bucketId:plan[planner.groupBy];}
function movePlanToGroup(id,groupId){
  const plan=planner.entries.find(p=>p.id===id);if(!plan||planGroupId(plan)===groupId)return;
  const previous={bucketId:plan.bucketId,status:plan.status,done:plan.done,priority:plan.priority};
  if(planner.groupBy==='bucket')plan.bucketId=groupId;
  else if(planner.groupBy==='status'){setPlannerItemDone(plan,groupId==='completed');plan.status=groupId;}
  else plan.priority=groupId;
  savePlanner();renderPlanner();$('#plannerAnnouncement').textContent=appLanguage==='fa'?'پلن جابه‌جا شد':'Plan moved';
  toast('Plan moved','Undo',()=>{const current=planner.entries.find(p=>p.id===id);if(current){Object.assign(current,previous);savePlanner();renderPlanner();}});
}
function renderPlannerKanban(){
  const root=$('#plannerKanban'),scroll=$('#plannerKanbanScroll'),left=scroll.scrollLeft;root.replaceChildren();
  const plans=activePlannerEntries();updatePlannerResultCount(plans.length);
  plannerGroups().forEach(group=>{
    const column=document.createElement('section');column.className='pl-bucket';column.dataset.groupId=group.id;column.setAttribute('aria-label',group.name);column.style.setProperty('--bucket-color',BUCKET_COLOURS[group.color]);
    const items=plans.filter(p=>planGroupId(p)===group.id).sort((a,b)=>Number(a.done)-Number(b.done)||PL_PRIORITY[b.priority].rank-PL_PRIORITY[a.priority].rank||a.date.localeCompare(b.date)||a.createdAt-b.createdAt);
    column.innerHTML=`<div class="pl-bucket-head"><i class="pl-bucket-dot" aria-hidden="true"></i><h2>${esc(group.name)}</h2><span class="pl-bucket-count">${items.length}</span>${planner.groupBy==='bucket'?`<button class="pl-bucket-edit" type="button" aria-label="Edit bucket: ${esc(group.name)}" title="Edit bucket">${ic('edit')}</button>`:''}</div><button class="pl-bucket-add" type="button">${ic('plus')}Add an item</button><div class="plan-list"></div>`;
    column.querySelector('.pl-bucket-edit')?.addEventListener('click',()=>openBucketModal(group));
    column.querySelector('.pl-bucket-add').onclick=()=>openPlannerModal(null,keyDate(new Date()),planner.groupBy==='bucket'?{bucketId:group.id}:planner.groupBy==='status'?{status:group.id}:{priority:group.id});
    const list=column.querySelector('.plan-list');items.forEach(plan=>list.append(planCard(plan)));
    if(!items.length){const empty=document.createElement('p');empty.className='pl-bucket-empty';empty.textContent='No items yet. Start with one small step.';list.append(empty);}
    column.addEventListener('dragover',e=>{if(planner.draggedId){e.preventDefault();e.dataTransfer.dropEffect='move';column.classList.add('drag-over');}});
    column.addEventListener('dragleave',e=>{if(!column.contains(e.relatedTarget))column.classList.remove('drag-over');});
    column.addEventListener('drop',e=>{if(!planner.draggedId)return;e.preventDefault();const id=planner.draggedId;planner.draggedId=null;column.classList.remove('drag-over');movePlanToGroup(id,group.id);});
    root.append(column);
  });
  if(planner.groupBy==='bucket'){const add=document.createElement('button');add.type='button';add.className='pl-new-bucket';add.innerHTML=ic('plus')+'Add a bucket';add.onclick=()=>openBucketModal();root.append(add);}
  scroll.scrollLeft=left;
}
$('#plannerGroupBy').onchange=e=>{planner.groupBy=e.target.value;renderPlannerKanban();};
$('#plannerMainAdd').onclick=()=>openPlannerModal();
function openBucketModal(bucket=null){
  $('#plannerBucketTitle').textContent=bucket?'Edit bucket':'Add bucket';$('#plannerBucketId').value=bucket?.id||'';$('#plannerBucketName').value=bucket?.name||'';$('#plannerBucketColour').value=bucket?.color||'blue';$('#plannerBucketDelete').hidden=!bucket||bucket.id===projectDefaultBucket();openOverlay($('#plannerBucketOverlay'),'#plannerBucketName');
}
$('#plannerBucketForm').onsubmit=e=>{
  e.preventDefault();const id=$('#plannerBucketId').value,existing=planner.buckets.find(b=>b.id===id),bucket=sanitizeBucket({id:existing?.id||newPlanId().replace('plan-','bucket-'),name:$('#plannerBucketName').value,color:$('#plannerBucketColour').value,projectId:planner.activeProject});
  if(!bucket)return;if(existing)Object.assign(existing,bucket);else planner.buckets.push(bucket);savePlanner();closeOverlay($('#plannerBucketOverlay'));renderPlanner();
};
$('#plannerBucketDelete').onclick=async()=>{
  const id=$('#plannerBucketId').value,bucket=planner.buckets.find(b=>b.id===id);if(!bucket||id===projectDefaultBucket())return;
  const destination=planner.buckets.find(b=>b.id===projectDefaultBucket());
  const ok=await confirmDialog({title:'Delete this bucket?',text:`Plans in ${bucket.name} will move to ${destination.name}. No plans will be deleted.`,ok:'Delete bucket'});if(!ok)return;
  planner.entries.forEach(p=>{if(p.bucketId===id)p.bucketId=destination.id;});planner.buckets=planner.buckets.filter(b=>b.id!==id);savePlanner();closeOverlay($('#plannerBucketOverlay'));renderPlanner();toast('Bucket deleted; plans kept');
};
function renderPlannerCharts(){
  const entries=activePlannerEntries(),total=entries.length,buckets=activePlannerBuckets();
  const today=keyDate(new Date()),bucketCounts=new Map(buckets.map(bucket=>[bucket.id,0]));
  const statusCounts={notstarted:0,inprogress:0,completed:0};
  let done=0,progress=0,late=0;
  for(const item of entries){
    if(item.done)done++;
    if(item.status==='inprogress')progress++;
    if(!item.done&&item.date<today)late++;
    if(Object.hasOwn(statusCounts,item.status))statusCounts[item.status]++;
    if(bucketCounts.has(item.bucketId))bucketCounts.set(item.bucketId,bucketCounts.get(item.bucketId)+1);
  }
  $('#plannerChartStats').innerHTML=[['Total items',total],['In progress',progress],['Completed',done],['Overdue',late]].map(([label,value])=>`<div class="pl-chart-stat"><small>${label}</small><b>${value}</b></div>`).join('');
  const panel=(title,rows)=>`<section class="pl-chart-panel"><h2>${title}</h2>${rows.map(([label,count,color])=>`<div class="pl-chart-row"><span>${esc(label)}</span><b>${count}</b><div class="track"><span style="width:${total?Math.round(count/total*100):0}%;--bar-color:${color}"></span></div></div>`).join('')}</section>`;
  $('#plannerChartPanels').innerHTML=panel('Progress',Object.entries(PL_STATUS).map(([id,name])=>[name,statusCounts[id]||0,id==='completed'?'var(--success)':'var(--blue)']))+panel('Items by bucket',buckets.map(bucket=>[bucket.name,bucketCounts.get(bucket.id)||0,BUCKET_COLOURS[bucket.color]]));
}


function renderPlannerProjectSelector(){
  const select=$('#plannerProjectSelect');select.replaceChildren();planner.projects.forEach(project=>{const option=document.createElement('option');option.value=project.id;option.textContent=(appLanguage==='fa'&&project.id==='default'?'برنامه‌ریز من':project.name)+(project.done?' ✓':'');select.append(option);});select.value=planner.activeProject;
  const project=planner.projects.find(p=>p.id===planner.activeProject),title=$('#plannerProjectTitle'),toggle=$('#plannerGoalToggle'),done=!!project.done;title.textContent=project.name;title.classList.toggle('planner-goal-done',done);$('#plannerProjectDescription').textContent=project.description||'Personal plan · Saved on this device';toggle.checked=done;toggle.title=done?(appLanguage==='fa'?'هدف تکمیل شد':'Goal completed'):(appLanguage==='fa'?'علامت‌گذاری هدف به‌عنوان تکمیل‌شده':'Mark goal complete');toggle.setAttribute('aria-label',toggle.title);toggle.innerHTML=done?`${ic('check')}`:'';
}
function switchPlannerProject(id){if(!planner.projects.some(p=>p.id===id))return;planner.activeProject=id;store.set(KEYS.plannerActiveProject,id);planner.groupBy='bucket';$('#plannerGroupBy').value='bucket';renderPlanner(true);}
$('#plannerProjectSelect').onchange=e=>switchPlannerProject(e.target.value);
function openPlannerProject(project=null){$('#plannerProjectModalTitle').textContent=project?'Manage plan':'New plan';$('#plannerProjectId').value=project?.id||'';$('#plannerProjectName').value=project?.name||'';$('#plannerProjectNotes').value=project?.description||'';$('#plannerProjectDelete').hidden=!project||project.id==='default';openOverlay($('#plannerProjectOverlay'),'#plannerProjectName');}
$('#plannerProjectNew').onclick=()=>openPlannerProject();
$('#plannerProjectManage').onclick=()=>openPlannerProject(planner.projects.find(p=>p.id===planner.activeProject));
$('#plannerGoalToggle').onclick=()=>{const project=planner.projects.find(p=>p.id===planner.activeProject);if(!project)return;project.done=!project.done;savePlanner();renderPlannerProjectSelector();if(window.gsap&&!reduceMotion())gsap.fromTo('#plannerGoalToggle',{scale:.92},{scale:1,duration:.34,ease:'back.out(2)',clearProps:'transform'});};
$('#plannerProjectForm').onsubmit=e=>{e.preventDefault();const id=$('#plannerProjectId').value,existing=planner.projects.find(p=>p.id===id),project=sanitizeProject({id:existing?.id||newPlanId().replace('plan-','project-'),name:$('#plannerProjectName').value,description:$('#plannerProjectNotes').value,done:!!existing?.done});if(!project)return;if(existing)Object.assign(existing,project);else planner.projects.push(project);normalizePlannerRelations();closeOverlay($('#plannerProjectOverlay'));planner.activeProject=project.id;savePlanner();renderPlanner(true);toast(existing?'Plan updated':'Plan created');};
$('#plannerProjectDelete').onclick=async()=>{
  const id=$('#plannerProjectId').value,project=planner.projects.find(p=>p.id===id);if(!project||id==='default')return;
  const entries=planner.entries.filter(p=>p.projectId===id),buckets=planner.buckets.filter(b=>b.projectId===id);
  const ok=await confirmDialog({title:'Delete this plan?',text:`${project.name} and its ${entries.length} items will be removed. Other plans and Home tasks will not change.`,ok:'Delete plan'});if(!ok)return;
  planner.projects=planner.projects.filter(p=>p.id!==id);planner.entries=planner.entries.filter(p=>p.projectId!==id);planner.buckets=planner.buckets.filter(b=>b.projectId!==id);planner.activeProject='default';savePlanner();closeOverlay($('#plannerProjectOverlay'));renderPlanner(true);
  toast('Plan deleted','Undo',()=>{if(!planner.projects.some(p=>p.id===id)){planner.projects.push(project);planner.buckets.push(...buckets);planner.entries.push(...entries);planner.activeProject=id;savePlanner();renderPlanner(true);}});
};
function renderPlannerLinks(){
  const root=$('#plannerLinks');root.replaceChildren();$('#plannerLinksCount').textContent=plannerLinksDraft.length;
  plannerLinksDraft.forEach((link,index)=>{const row=document.createElement('div');row.className='pl-item-link';row.innerHTML=ic('link');const anchor=document.createElement('a');anchor.href=link.url;anchor.target='_blank';anchor.rel='noopener noreferrer';anchor.textContent=link.title;anchor.title=link.url;const remove=document.createElement('button');remove.type='button';remove.setAttribute('aria-label','Remove link: '+link.title);remove.innerHTML=ic('close');remove.onclick=()=>{plannerLinksDraft.splice(index,1);renderPlannerLinks();};row.append(anchor,remove);root.append(row);});
}
function addPlannerLink(){
  if(plannerLinksDraft.length>=12)return toast('Up to 12 links per item');
  const link=sanitizePlannerLink({title:$('#plannerLinkTitle').value,url:$('#plannerLinkUrl').value});if(!link){toast('Enter a complete http or https link');$('#plannerLinkUrl').focus();return;}
  plannerLinksDraft.push(link);$('#plannerLinkTitle').value='';$('#plannerLinkUrl').value='';renderPlannerLinks();
}
$('#plannerLinkAdd').onclick=addPlannerLink;
$('#plannerLinkUrl').onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();addPlannerLink();}};
$$('[data-planner-sort]').forEach(button=>button.onclick=()=>{const key=button.dataset.plannerSort;planner.sortDirection=planner.listSort===key?-planner.sortDirection:1;planner.listSort=key;renderPlannerList();});
$('#plannerTableAdd').onclick=()=>openPlannerModal();
function setPlannerItemDone(plan,done){plan.done=!!done;plan.status=plan.done?'completed':'notstarted';if(Array.isArray(plan.checklist))plan.checklist.forEach(task=>task.done=plan.done);}
function togglePlannerChecklistItem(plan,index,checked,container){const task=plan.checklist[index];if(!task)return;task.done=!!checked;container?.querySelectorAll(`[data-subtask-index=\"${index}\"]`).forEach(input=>{input.checked=task.done;input.closest('label')?.classList.toggle('is-done',task.done);});const count=plan.checklist.filter(x=>x.done).length;container?.querySelectorAll('.plan-inline-checklist-head small,.plan-checklist-progress b').forEach(node=>node.textContent=`${count}/${plan.checklist.length}`);savePlanner();if(window.gsap&&!reduceMotion()){const line=container?.querySelector(`[data-subtask-index=\"${index}\"]`)?.closest('label');if(line)gsap.fromTo(line,{x:3,opacity:.82},{x:0,opacity:1,duration:.22,ease:'power2.out',clearProps:'transform,opacity'});}}
function renderPlannerList(){
  const root=$('#plannerListBody');root.replaceChildren();const items=activePlannerEntries().slice(),sort=planner.listSort;
  const bucketById=new Map(planner.buckets.map(bucket=>[bucket.id,bucket]));
  const bucketName=id=>bucketById.get(id)?.name||'';
  const collator=new Intl.Collator(appLanguage==='fa'?'fa-IR':'en-US',{numeric:true,sensitivity:'base'});
  const compare=(a,b)=>sort==='title'?collator.compare(a.title,b.title):sort==='priority'?PL_PRIORITY[b.priority].rank-PL_PRIORITY[a.priority].rank:sort==='bucket'?collator.compare(bucketName(a.bucketId),bucketName(b.bucketId)):sort==='status'?['notstarted','inprogress','completed'].indexOf(a.status)-['notstarted','inprogress','completed'].indexOf(b.status):a.date.localeCompare(b.date);
  items.sort((a,b)=>planner.sortDirection*compare(a,b)||a.createdAt-b.createdAt);
  $$('[data-planner-sort]').forEach(button=>{const active=button.dataset.plannerSort===sort;button.closest('th').setAttribute('aria-sort',active?(sort==='priority'?(planner.sortDirection===1?'descending':'ascending'):(planner.sortDirection===1?'ascending':'descending')):'none');button.querySelector('.pl-sort-arrow').textContent=active?(sort==='priority'?(planner.sortDirection===1?'↓':'↑'):(planner.sortDirection===1?'↑':'↓')):'↕';});
  updatePlannerResultCount(items.length);
  if(!items.length){root.innerHTML='<tr><td colspan="8" class="pl-list-empty">No items yet. Add your first item below.</td></tr>';return;}
  items.forEach(item=>{
    const row=document.createElement('tr');row.dataset.planId=item.id;row.className=item.done?'is-done':'';
    const bucket=bucketById.get(item.bucketId),label=PL_LABELS[item.label],overdue=!item.done&&item.date<keyDate(new Date());
    row.innerHTML=`<td class="pl-list-check"><input type="checkbox" ${item.done?'checked':''} aria-label="${item.done?'Mark incomplete':'Complete item'}: ${esc(item.title)}"></td><td data-label="Title"><button class="pl-list-title" type="button"><strong>${esc(item.title)}</strong>${label?`<span class="pl-card-label" style="--label-color:${label.color}">${label.name}</span>`:''}</button></td><td data-label="Bucket">${esc(bucket?.name||'')}</td><td data-label="Progress"><span class="pl-card-status" data-status="${item.status}"><i aria-hidden="true"></i>${PL_STATUS[item.status]}</span></td><td data-label="Priority"><span class="pl-list-priority" data-priority="${item.priority}">${PL_PRIORITY[item.priority].label}</span></td><td class="pl-list-date${overdue?' overdue':''}" data-label="Dates">${esc(parseKey(item.date).toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{year:'numeric',month:'short',day:'numeric'}))}${item.startDate?`<small>From ${esc(parseKey(item.startDate).toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{year:'numeric',month:'short',day:'numeric'}))}</small>`:''}</td><td data-label="Checklist">${item.checklist.length?`<div class="pl-table-subtasks" role="group" aria-label="Tasks for ${esc(item.title)}">${item.checklist.map((task,index)=>`<label class="pl-table-subtask${task.done?' is-done':''}"><input type="checkbox" class="pl-table-subtask-toggle" data-subtask-index="${index}" ${task.done?'checked':''} aria-label="${task.done?'Mark incomplete':'Complete item'}: ${esc(task.title)}"><span>${esc(task.title)}</span></label>`).join('')}</div>`:'—'}</td><td data-label="Actions"><div class="pl-list-actions"><button class="pl-list-edit" type="button" aria-label="Edit item: ${esc(item.title)}">${ic('edit')}</button><button class="pl-list-move" type="button" aria-label="Move item">${ic('right')}</button><button class="pl-list-del" type="button" aria-label="${appLanguage==='fa'?'حذف مورد':'Delete item'}: ${esc(item.title)}" title="${appLanguage==='fa'?'حذف مورد':'Delete item'}">${ic('trash')}</button></div></td>`;
    row.querySelector('input:not(.pl-table-subtask-toggle)').onchange=e=>{setPlannerItemDone(item,e.target.checked);savePlanner();requestAnimationFrame(()=>{renderPlannerList();[...root.querySelectorAll('tr')].find(r=>r.dataset.planId===item.id)?.querySelector('input:not(.pl-table-subtask-toggle)')?.focus({preventScroll:true});});};
    row.querySelectorAll('.pl-table-subtask-toggle').forEach(input=>input.onchange=()=>togglePlannerChecklistItem(item,Number(input.dataset.subtaskIndex),input.checked,row));if(window.gsap&&!reduceMotion())gsap.fromTo(row.querySelectorAll('.pl-table-subtask'),{y:5,opacity:0},{y:0,opacity:1,duration:.24,stagger:.025,ease:'power2.out',clearProps:'transform,opacity'});
    row.querySelector('.pl-list-title').onclick=row.querySelector('.pl-list-edit').onclick=()=>openPlannerModal(item);
    row.querySelector('.pl-list-move').onclick=()=>{$('#plannerMoveId').value=item.id;$('#plannerMoveName').textContent=item.title;$('#plannerMoveDate').value=item.date;fillPlannerBuckets($('#plannerMoveBucket'),item.bucketId);openOverlay($('#plannerMoveOverlay'),'#plannerMoveDate');};
    const delBtn=row.querySelector('.pl-list-del');if(delBtn)delBtn.onclick=async()=>{
      const ok=await confirmDialog({title:appLanguage==='fa'?'پلن حذف شود؟':'Delete this plan?',text:`“${item.title}”`,ok:appLanguage==='fa'?'حذف':'Delete'});
      if(!ok)return;
      const idx=planner.entries.findIndex(p=>p.id===item.id);
      if(idx<0)return;
      planner.entries.splice(idx,1);savePlanner();renderPlanner();
      toast(appLanguage==='fa'?'پلن حذف شد':'Plan deleted',appLanguage==='fa'?'بازگردانی':'Undo',()=>{
        if(!planner.entries.some(p=>p.id===item.id))planner.entries.splice(Math.min(idx,planner.entries.length),0,item);
        savePlanner();renderPlanner();
      });
    };root.append(row);
  });
}

function planCard(plan) {
  const card = document.createElement('article');
  card.className = 'plan-card' + (plan.done ? ' done' : '');
  card.dataset.planId = plan.id;
  card.draggable = matchMedia('(pointer:fine)').matches;
  card.setAttribute('aria-label', plan.title);
  card.tabIndex = 0;
  const label = PL_LABELS[plan.label], checked = plan.checklist.filter(c => c.done).length;
  const overdue = !plan.done && plan.date < keyDate(new Date());
  const dateLabel = parseKey(plan.date).toLocaleDateString('en-US',{month:'short',day:'numeric'});
  card.innerHTML = `${label ? `<span class="pl-card-label" style="--label-color:${label.color}">${label.name}</span>` : ''}<div class="plan-card-top">
    <label class="check"><input type="checkbox" ${plan.done ? 'checked' : ''} aria-label="${plan.done ? 'Mark incomplete' : 'Complete plan'}: ${esc(plan.title)}"><span><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span></label>
    <h3>${esc(plan.title)}</h3></div>${plan.notes ? `<p class="plan-notes">${esc(plan.notes)}</p>` : ''}
    ${plan.checklist.length?`<div class="plan-inline-checklist" role="group" aria-label="Tasks for ${esc(plan.title)}"><div class="plan-inline-checklist-head"><strong>Tasks</strong><small>${checked}/${plan.checklist.length}</small></div>${plan.checklist.map((task,index)=>`<label class="plan-inline-task${task.done?' is-done':''}"><input type="checkbox" class="plan-subtask-toggle" data-subtask-index="${index}" ${task.done?'checked':''} aria-label="${task.done?'Mark incomplete':'Complete item'}: ${esc(task.title)}"><span>${esc(task.title)}</span></label>`).join('')}</div>`:''}
    <div class="pl-card-meta"><span class="plan-date${overdue ? ' is-overdue' : ''}" title="${esc(plan.date)}">${ic('calendar')}${esc(dateLabel)}</span>${plan.time ? `<span class="plan-time">${ic('bell')}${esc(plan.time)}</span>` : ''}${plan.links.length ? `<span title="${plan.links.length} related links">${ic('link')}${plan.links.length}</span>` : ''}${plan.checklist.length ? `<span class="plan-checklist-progress" title="Checklist completion">${ic('list')}<b>${checked}/${plan.checklist.length}</b></span>` : ''}${plan.priority !== 'normal' ? `<span class="pl-priority-${plan.priority}" title="Priority">${ic(plan.priority === 'urgent' ? 'zap' : 'star')}${PL_PRIORITY[plan.priority].label}</span>` : ''}</div>
    <div class="plan-actions"><span class="pl-card-status" data-status="${plan.status}"><i aria-hidden="true"></i>${PL_STATUS[plan.status]}</span><button class="plan-edit" type="button" aria-label="Edit plan: ${esc(plan.title)}" title="Edit plan">${ic('edit')}</button><button class="plan-move" type="button" aria-label="Move plan" title="Move plan">${ic('right')}</button><button class="plan-delete" type="button" aria-label="Delete plan: ${esc(plan.title)}" title="Delete plan">${ic('trash')}</button></div>`;
  card.addEventListener('click', e => { if (!e.target.closest('button,input,label,select')) openPlannerModal(plan); });
  card.addEventListener('keydown', e => { if (e.target === card && e.key === 'Enter') { e.preventDefault(); openPlannerModal(plan); } });
  card.querySelector('label.check input')?.addEventListener('change',e=>{setPlannerItemDone(plan,e.target.checked);savePlanner();requestAnimationFrame(()=>{renderPlanner();$('#plannerAnnouncement').textContent=`${plan.title}: ${plan.done?(appLanguage==='fa'?'تکمیل‌شده':'completed'):(appLanguage==='fa'?'تکمیل‌نشده':'not completed')}`;$$('#plannerPage .plan-card').find(c=>c.dataset.planId===plan.id)?.querySelector('label.check input')?.focus({preventScroll:true});});});
  card.querySelectorAll('.plan-subtask-toggle').forEach(input=>input.onchange=()=>togglePlannerChecklistItem(plan,Number(input.dataset.subtaskIndex),input.checked,card));if(window.gsap&&!reduceMotion()&&plan.checklist.length)gsap.fromTo(card.querySelectorAll('.plan-inline-task'),{y:5,opacity:0},{y:0,opacity:1,duration:.25,stagger:.025,ease:'power2.out',clearProps:'transform,opacity'});
  card.querySelector('.plan-edit').onclick = () => openPlannerModal(plan);
  card.querySelector('.plan-move').onclick = () => {
    $('#plannerMoveId').value = plan.id; $('#plannerMoveName').textContent = plan.title; $('#plannerMoveDate').value = plan.date;
    fillPlannerBuckets($('#plannerMoveBucket'),plan.bucketId);
    openOverlay($('#plannerMoveOverlay'), '#plannerMoveDate');
  };
  card.querySelector('.plan-delete').onclick = async () => {
    const ok = await confirmDialog({title:'Delete this plan?', text:plan.title, ok:'Delete'});
    if (!ok) return;
    const index = planner.entries.findIndex(p => p.id === plan.id);
    if (index < 0) return;
    planner.entries.splice(index, 1); savePlanner(); renderPlanner();
    toast('Plan deleted', 'Undo', () => { if (!planner.entries.some(p => p.id === plan.id)) planner.entries.splice(Math.min(index, planner.entries.length), 0, plan); savePlanner(); renderPlanner(); });
  };
  card.addEventListener('dragstart', e => {
    planner.draggedId = plan.id;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('application/x-focusflow-plan', plan.id);
    e.dataTransfer.setData('text/plain', plan.title);
    requestAnimationFrame(() => card.classList.add('dragging'));
  });
  card.addEventListener('dragend', () => { planner.draggedId = null; card.classList.remove('dragging'); $$('#plannerPage .drag-over').forEach(c => c.classList.remove('drag-over')); });
  return card;
}
function renderPlannerWeek(center = false) {
  const days = plannerDays(), keys = days.map(keyDate), today = keyDate(new Date());
  const fmt=d=>d.toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{month:'short',day:'numeric'});
  if(appLanguage==='fa'){
    const firstMonth=days[0].toLocaleDateString('fa-IR',{month:'long'}),lastMonth=days[6].toLocaleDateString('fa-IR',{month:'long'}),firstDay=calendarDayNumber(days[0]),lastDay=calendarDayNumber(days[6]);
    $('#plannerWeekTitle').textContent=`${firstDay} ${firstMonth} تا ${lastDay} ${lastMonth}`;
  }else{
    const firstMonth=days[0].toLocaleDateString('en-US',{month:'short'}),lastMonth=days[6].toLocaleDateString('en-US',{month:'short'}),firstDay=days[0].getDate(),lastDay=days[6].getDate();
    $('#plannerWeekTitle').textContent=firstMonth===lastMonth?`${firstMonth} ${firstDay}–${lastDay}`:`${firstMonth} ${firstDay} – ${lastMonth} ${lastDay}`;
  }
  {const now=new Date(),label=appLanguage==='fa'?`رفتن به ${now.toLocaleDateString('fa-IR',{day:'numeric',month:'long',year:'numeric'})}`:`Go to ${now.toLocaleDateString('en-US',{day:'numeric',month:'short',year:'numeric'})}`,btn=$('#plannerToday');if(btn){btn.textContent=label;btn.setAttribute('title',appLanguage==='fa'?'این هفته':'This week');btn.setAttribute('aria-label',label);}}
  $('#plannerJump').value = keyDate(planner.week);refreshLocalizedDateInputs();
  const weekPlans = activePlannerEntries().filter(p => keys.includes(p.date)), done = weekPlans.filter(p => p.done).length;
  const pct = weekPlans.length ? Math.round(done / weekPlans.length * 100) : 0;
  const weekCount=new Intl.NumberFormat(appLanguage==='fa'?'fa-IR':'en-US').format(weekPlans.length),doneCount=new Intl.NumberFormat(appLanguage==='fa'?'fa-IR':'en-US').format(done);$('#plannerSummary').innerHTML=appLanguage==='fa'?`<strong>${weekCount}</strong> برنامه · <strong>${doneCount}</strong> تکمیل‌شده`:`<strong>${weekCount}</strong> planned · <strong>${doneCount}</strong> completed`;
  $('#plannerPercent').textContent=new Intl.NumberFormat(appLanguage==='fa'?'fa-IR':'en-US').format(pct)+'%'; $('#plannerBar').style.width = pct + '%';
  if (center || !keys.includes(planner.activeDay)) planner.activeDay = keys.includes(today) ? today : keys[0];
  const tabs = $('#plannerDayTabs'); tabs.replaceChildren();
  const board=$('#plannerBoard');
  board.replaceChildren();
  days.forEach((day, index) => {
    const key = keys[index], fullDate = day.toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US', {weekday:'long', month:'long', day:'numeric', year:'numeric'});
    const tab = document.createElement('button'); tab.type = 'button'; tab.dataset.date = key;
    const dayPlanCount=weekPlans.filter(p=>p.date===key).length,tabSelected=planner.activeDay===key;tab.className=(key===today?'is-today ':'')+(dayPlanCount?'has-plans ':'')+(tabSelected?'is-selected':'');tab.innerHTML=`${day.toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{weekday:'short'})}<b>${calendarDayNumber(day)}</b>`;
    tab.setAttribute('aria-label',fullDate+(dayPlanCount?(appLanguage==='fa'?`، ${new Intl.NumberFormat('fa-IR').format(dayPlanCount)} پلن`:`; ${dayPlanCount} planned`):''));tab.setAttribute('aria-pressed',String(tabSelected));
    tab.onclick = () => focusPlannerDay(key); tabs.append(tab);
    const plans=weekPlans.filter(p=>p.date===key).sort((a,b)=>Number(a.done)-Number(b.done)||(a.time||'99:99').localeCompare(b.time||'99:99')||a.createdAt-b.createdAt||a.id.localeCompare(b.id));
    const column=document.createElement('section');column.className='planner-day'+(key===today?' is-today':'')+(plans.length?' has-plans':'')+(planner.activeDay===key?' is-selected':'');column.dataset.planDate=key;column.setAttribute('aria-label',fullDate);
    const plannedLabel=key===today?(appLanguage==='fa'?'امروز':'Today'):(appLanguage==='fa'?`${new Intl.NumberFormat('fa-IR').format(plans.length)} برنامه`:`${plans.length} planned`);column.innerHTML=`<div class="planner-day-head"><div class="planner-day-heading"><b>${calendarDayNumber(day)}</b><div><h2>${day.toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{weekday:'short'})}</h2><small>${plannedLabel}</small></div></div><button type="button" class="plan-day-add" aria-label="${appLanguage==='fa'?`افزودن پلن برای ${fullDate}`:`Add plan for ${fullDate}`}" title="${appLanguage==='fa'?'افزودن پلن':'Add plan'}">${ic('plus')}</button></div><div class="plan-list"></div>`;
    column.querySelector('.plan-day-add').onclick = () => openPlannerModal(null, key);
    const list = column.querySelector('.plan-list');
    plans.forEach(plan => list.append(planCard(plan)));
    if (!plans.length) {
      const empty = document.createElement('button'); empty.type = 'button'; empty.className = 'plan-empty';
      empty.innerHTML=`${ic('plus')}<span>${appLanguage==='fa'?'جای برنامه':'Room for a plan'}</span>`;empty.setAttribute('aria-label',appLanguage==='fa'?`افزودن پلن برای ${fullDate}`:`Add a plan for ${fullDate}`);
      empty.onclick = () => openPlannerModal(null, key); list.append(empty);
    }
    column.addEventListener('dragover', e => { if (planner.draggedId) { e.preventDefault(); e.dataTransfer.dropEffect = 'move'; column.classList.add('drag-over'); } });
    column.addEventListener('dragleave', e => { if (!column.contains(e.relatedTarget)) column.classList.remove('drag-over'); });
    column.addEventListener('drop', e => {
      if (!planner.draggedId) return;
      e.preventDefault(); const id = planner.draggedId; planner.draggedId = null;
      column.classList.remove('drag-over'); movePlannerPlan(id, key);
    });
    board.append(column);
  });
  requestAnimationFrame(()=>focusPlannerDay(planner.activeDay,'auto'));
}
function openPlannerModal(plan = null, date = null, preset = {}) {
  $('#plannerModalTitle').textContent = plan ? 'Edit item' : 'Add item';
  $('#plannerSubmit').textContent = plan ? 'Update item' : 'Save item';
  $('#plannerEditId').value = plan?.id || '';
  $('#plannerTitle').value = plan?.title || '';
  $('#plannerDate').value = plan?.date || date || plannerDefaultDate();
  $('#plannerStartDate').value=plan?.startDate||'';
  $('#plannerTime').value = plan?.time || '';
  $('#plannerNotes').value = plan?.notes || '';
  fillPlannerBuckets($('#plannerBucket'),plan?.bucketId || preset.bucketId || projectDefaultBucket());
  $('#plannerStatus').value = plan?.status || preset.status || 'notstarted';
  $('#plannerPriority').value = plan?.priority || preset.priority || 'normal';
  $('#plannerLabel').value = plan?.label || '';
  plannerChecklistDraft = (plan?.checklist || []).map(item => ({...item}));
  $('#plannerChecklistInput').value = ''; renderPlannerChecklist();
  plannerLinksDraft=(plan?.links||[]).map(link=>({...link}));$('#plannerLinkTitle').value='';$('#plannerLinkUrl').value='';renderPlannerLinks();
  openOverlay($('#plannerOverlay'), '#plannerTitle');
}
$('#plannerForm').onsubmit = e => {
  e.preventDefault();
  const id = $('#plannerEditId').value, existing = planner.entries.find(p => p.id === id);
  if($('#plannerStartDate').value && $('#plannerStartDate').value > $('#plannerDate').value){toast('Start date must be on or before the due date');$('#plannerStartDate').focus();return;}
  const entry = sanitizePlan({id:existing?.id || newPlanId(), projectId:existing?.projectId||planner.activeProject, startDate:$('#plannerStartDate').value, links:plannerLinksDraft, title:$('#plannerTitle').value, date:$('#plannerDate').value,
    time:$('#plannerTime').value, notes:$('#plannerNotes').value, status:$('#plannerStatus').value, bucketId:$('#plannerBucket').value, priority:$('#plannerPriority').value, label:$('#plannerLabel').value, checklist:plannerChecklistDraft, createdAt:existing?.createdAt || Date.now()});
  if (!entry) { toast('Enter a plan title and a valid date'); return; }
  if (existing) Object.assign(existing, entry); else planner.entries.push(entry);
  savePlanner(); closeOverlay($('#plannerOverlay'));
  planner.week = plannerWeekStart(parseKey(entry.date)); planner.activeDay = entry.date;
  renderPlanner(); requestAnimationFrame(() => focusPlannerDay(entry.date, 'auto'));
  toast(existing ? 'Plan updated' : 'Plan added');
};
function movePlannerPlan(id, date, bucketId = null) {
  const plan = planner.entries.find(p => p.id === id);
  if (!plan || !validPlanDate(date) || (plan.date === date && (!bucketId || bucketId === plan.bucketId))) return;
  const oldDate = plan.date, oldBucket = plan.bucketId, oldStart=plan.startDate;
  if(plan.startDate){const start=parseKey(plan.startDate),shift=Math.round((parseKey(date)-parseKey(plan.date))/864e5);start.setDate(start.getDate()+shift);plan.startDate=keyDate(start);}
  plan.date = date;
  if (bucketId && planner.buckets.some(b => b.id === bucketId)) plan.bucketId = bucketId;
  savePlanner(); renderPlanner();
  const movedDate=parseKey(date).toLocaleDateString('en-US',{month:'short',day:'numeric'}),message=appLanguage==='fa'?`به ${movedDate} منتقل شد`:`Moved to ${movedDate}`;
  $('#plannerAnnouncement').textContent = message;
  toast(message, 'Undo', () => { const current = planner.entries.find(p => p.id === id); if (current) { current.date = oldDate; current.bucketId = oldBucket; current.startDate=oldStart; savePlanner(); renderPlanner(); } });
}
$('#plannerMoveForm').onsubmit = e => {
  e.preventDefault(); const id = $('#plannerMoveId').value, date = $('#plannerMoveDate').value;
  if (!validPlanDate(date)) return;
  closeOverlay($('#plannerMoveOverlay')); movePlannerPlan(id, date, $('#plannerMoveBucket').value);
  if (!plannerDays().some(d => keyDate(d) === date)) { planner.week = plannerWeekStart(parseKey(date)); renderPlanner(); }
  requestAnimationFrame(() => focusPlannerDay(date, 'auto'));
};
function changePlannerWeek(delta) { const date = new Date(planner.week); date.setDate(date.getDate()+delta*7); planner.week=plannerWeekStart(date); renderPlanner(true); }
$('#plannerPrev').onclick = () => changePlannerWeek(-1);
$('#plannerNext').onclick = () => changePlannerWeek(1);
$('#plannerToday').onclick = () => { planner.week=plannerWeekStart(new Date()); renderPlanner(true); };
$('#plannerJump').onchange = e => { if (validPlanDate(e.target.value)) { planner.week=plannerWeekStart(parseKey(e.target.value)); renderPlanner(true); } };
$('#plannerAdd').onclick = () => openPlannerModal();
let plannerScrollFrame = null;
$('#plannerScroll').addEventListener('scroll', () => {
  if (matchMedia('(min-width:1024px)').matches) return;
  cancelAnimationFrame(plannerScrollFrame);
  plannerScrollFrame = requestAnimationFrame(() => {
    const left = $('#plannerScroll').scrollLeft;
    const columns = $$('#plannerBoard .planner-day');
    const nearest = columns.reduce((best, col) => !best || Math.abs(col.offsetLeft - 4 - left) < Math.abs(best.offsetLeft - 4 - left) ? col : best, null);
    if (!nearest) return;
    planner.activeDay = nearest.dataset.planDate;
    $$('#plannerDayTabs button').forEach(button=>{const selected=button.dataset.date===planner.activeDay;button.setAttribute('aria-pressed',String(selected));button.classList.toggle('is-selected',selected);});$$('#plannerBoard .planner-day').forEach(column=>column.classList.toggle('is-selected',column.dataset.planDate===planner.activeDay));
  });
}, {passive:true});


/* ======================================================================
   Sounds
   ====================================================================== */
const TASK_DELETE_SOUND = 'data:audio/mpeg;base64,//vUZAAABY1gwVHsSQJfx3fZMYMAIuHW+A09nMF5LODUwYl4ABAkktNK0Ug302yIsnYH2mQQHCMnGAAAg5GKCRM3FGWChJs6QFxWjRt5DKCg43CxQSXOhQ4jNkbc6YIxWFzYXFYreQMRC5P4W3Bc4CDEC4JtQICS0m1Pc6jNcUEkIIIf+aNtR0iAMOxfVyMEyebcEAoJMXRo5I9gXJy4BwNm0DCiDJ7BAFw2jmkgY82EAoMVhGTwRvz2Rt+xAAAMCgUIECBAT6v/6GAEfwAPP+OO+A7AeAQIqLLKA8hAQNA7IhBzSv7x/6aJpoXCDgYgvr/HlMIiIhlTiF/uaV33+JXPRE657l/oV9E9M+ISE7nQggEAQGrB+UDE5BA5BAuOB8H5BJATn5RwIBiJ5AmFgQd+cynzhsg51DBhHhkBJjgYBFiA0GJ0p0cwgaOiWDA4kwlNEUJvKoM4KkRUA1aUFApVzNX0Z6sMulHmcTHfZnDeJjuPACCwAGtaVvg5PpXiuWzysIDpiqporIbxaWKDwpmqyHVWGW4icGEDfNUT8REC2W1XCCiFIS2CdDLNNTkDNgNM/jmLa1DABnA3B4GmsliG0rzfLeO9cyLtKni3vVYd4kxBlCYwdRfWMfY/DrJyuRDEUX9iiGOuiUshLXb4+Gg6kySSsLTkvKkI1WFfmy4vwxPlasylQhmBbHjTm6dOJkDaRbEPZY/WwbOoaplg8ZLhascjveM1Sl92AJSakMjgf3GGPTJlpNlpw5g94SR8eHctm1x3LZALvm6dIBAALwHl5ELHv92teNGJB0Pvvbx6UW9X1nTj1pYVLO+2Rsru/QqqZnZTqzqip3bRLXZHMuxXSZrOdc7J8OxrSHRjMmV7vua90ZW3kM8jkcZxM2EVXnTJLPrqpaLVoNIIgIVwnEGECOYwwx2EvkjjDVZv2YwsrXRuHTR4Nh6rV4oYt3bkVku01NzB4dYSVuosGgActASkIW8Dh2uL7StYpGldtdbQtUWqaU9aiqt67GstMdNo//vUZCqLCFF2PoMvZ5BtajgpGGaeYFHY/K29mwHOreBYkwxpDouikhGFqvJLH3lTbPwoM9j6PErSIyFdvJB5pJgcZAjlIULGhpMoRiEENhPuI5lEWxDmot7icB2DwLDAPZVk/OlFDVimcWKhq6XitGdWQDSIiLSGVkiSSsOpitLawaybiQWN2xthxP6Y8O4Ep+y8cOma1BJSdm7xYWNWLT8awS/SnK5cmE71w8GcJ0HNbEsgVLtVJmiMWCeO5ReWIJaVlYELAnclj6kgIe0bTKh68uHhaXFpLwAKSIANFxRcszSUNm0qx6vL5bMnS5obHquZ/xntMmPZm89tC5CviskP/GVM+kqF0+5bOKci5TKlLm45otwK+lKbJ3EraMrlGFogY2+nims6DhtK+orgvQDF4dGPfxZlu87/5u/53/cwJhl83NwAjyIhLOPBgKCBUoUDhxClO9PZEyGXfcBS1mI4EKMtiWDYgsIo0q5ScUXg4Kcq6pM3sohENqKy5jKUzoJ+tLo2xq4YY8SPwsDSZcsZSIO5Kq0+RZlOfqUP4hZ7pI9Ei4lSGLAL4IVkFSOYthLlaKQmztSpyg/kCeb1LohmgNiFLagXJvIouxLmBGl6meoeJ6o3w/0wzKaMr3idNF21wyKWZFQr6u4cZFqhKoVNmlDU/W6ugNnoDBQ+uMY1jgcuuNFY5M3LlhG1Atfw+6yuDYqHBeYYJ0lRTDSM/Miy650Z4coZXEowJLp/HCNRsqL5XKQloMBOLkBDcLCGe2TKLtGZ8cvVAjAIqFGB1V8xXSme6nAnSpCO19wjAQtoDPk4Y+pVJw+EZhDVU5XpEe5sFEmzmkl7O5U9O0gswWbbmwUrmfECDoFhLQMmHd2CBzJiodAYbyvRA8UAFKt1YHrYSk5KSZeYKIfocRd7lVB6iYos3LlRdVzlLsVmAqLOAMkYNEGNAg4eLDYBBINf6BFPtkrc29CpZEVXSEbbGWOWdVLBOyYh9DSTQvRcVg0063wzRJfsWMYZmsAWthZw//vUZCGBh8p0vwNPZHJtrigVJCMgYLXW/K09mMnMsV/A9IxR1eAHZOG8XQdQ/oQnZWnWfxFpQwk8jGUMgtxnF/ZVce4FsubEhLMWweKpOA/zqYFDBTUJW2L2htEwYIwalMFBEHUbCOwpDmrywxZLIzTD6cks7LLgbH5IsPzEhyrJawsizz1jXxwglxDTOnC4qvOxFhGleToK44ZHksvPetwq/LN6voLJwis8dwIbGIZ2dIZPWJT+NOVwgKTagSi4ZNkxaqLp+iLLLw4luI9RYwJTjrHn+ulYwoMAFlGKkoYZm2wRNjFJDuiqKFmTKS9BFo2q1jWer5VDXIs5aqcPBwxsQKQ/czI/inC/TYtQbx8qRzJtsizzwaHoBMohZNpaaYImIoDosUbH00OPduhvZ1IktUIU0O8Mmvzi7FmU7nGl35nOBjzpuoLhBTGTqyTTsiUOX9AwCHEVQAAT3LYrhUPiJECAIVC28pJ2S+DAFuBgJYFlUFp+qbvkqFaaHjiNzj83FmYEoSWvs3ozTEMNQBGiGj9V5CxCCcEiOwcBBsKE8TXFLICaccWkxRjnmrS/vAuBJzpU6YO0w1ETJIk2jYQ+dQIs8G5HE/JRTDw6HxeJg6cDROSTEoGAInHJTYkiUdDmYD0tAmNcZiy6uHr1SY4H8cyv5PLRDaEtpaJJ+3c7tREw9QvXjdhWqUyRtiGJKrXFk2YjYsnLKFRhBhSNvF81hdWCUeLoR7LsaZolkiT2jza1EREw0HpwFBMaWtoRBGgkimq1sfDARiMuqKOmEnxwiy7LGto515jJQptHR3PJsVKCF5v10NI4cplcnIZp6vKOds8tolLRkyU1BDhkjttXcTtWvG6owQjEmsMbpOJQAcOMECEwxsn7TYSaP+UMoQsdi0RbXd6lDIcHO2Ls2YxA+pubU5DNTAZqy52fUks6MsSJnpp6CAsxQkz4dPYtULAy5b5EoVaqw6+V9g0m7a/mRM1lUWUzXVXVheNtkBjmOUtRLdmDI2ax5ULrIIEd//vUZB+LB9p2PwNPZkBpawgVCMMMX6XW/Ky9lwnXN2AUkwyJXueRDVo1CCDbT4RseoYaAKkzjJYrn6yEpMIfiRHWSJLnEKFW1H2dYcbeapLWAvZllaZT4g6uOg6HiHFzHShpzl6gj3J+gUiwmTDVuJNjfooDKV0VbuWCas4CYuNoyspfLqc9Jbq+E6FR84Vjlc+7ZFG6ev3bmhAMya1QvNyPNWC2ftRle71zFxK1RDURFdc3EmcjI5xlqwmDz54nRQmvvpS2WF1aLoyspYTGi8exLvaO6+t0NhtwT1HC/9bkdR0cAqWl0czKd2KEKG2MFbGr7qrEUNCrHC2ORho+UkKrbZzkPJffz/+v6OeseSaqcVBFrZ53/hW8YEYgEgJUSCbHgJwqqYg3VXNDUOUfjGawj0oUw2a/Gav/7tvcObwPrlVfvw3/B0NekFjEiPBkIMLUiw4FLQWRRYApQlWrAkGEDo9CIM1QX3R9hokHZ0IxUo3fZNOJSsicB0a67LK+ySEKBvzDDFdPwhZgIkYBvBIhLlgUp4EmPEQFMl9LqTktD1Li3Farz9HWkBxF0Lol0YT4kZWGallpnUhI1cqzJNWEk1I5Nb5DFafePxY8fi0cBGYEqRTzYwHNXQnl85PhRS52BFO/i4R7Fxjnx8Ip2hQ3dJas9cqX8sSH0y9bDsVVy2EsL7QUURHaM4JqSKt7oZ3Utn5+qYKR1fVxydlJvKDyQCk0bnxWQPHHxNEmjJmWlZ8aLfLo8EEtxE/HTgvwLCvokJGuUBAAAVBQCyUBHlyCJxhVy0pnZFMMQ/XOma6GkcGZuoxkZGRxDrUiHN8oege5GwzUmJFgOMDIXNH3fOXSGykg6ZaEJLQZO2cqmEp2FNhjIwgQwgobDueeTwQZsW0Q4zSJeniWIoRVrpGL7u2XTymeXhFoZYjtIQoVhUkBWQsoMATviBIcKiiwHVwTDC1IGHSN/UyUaE8XDJSwYKd5VWIKKNyYy67pRRYFN1PRvPoUxFCnpFrKIu1BPyBn//vUZCGAB4B1wMtPTXB3rRgFMCN0YCXW/K09k8nCtWAUkw3RxDURKGYthzqofJbDALcxJ1kNhlfpUsSSRg+jpetb5DVIZC0YBCcMpbVKokNQk7kiZStZz9fm8XKO0odh8kWwlTSplKuoSqkhpOKrzLRG0azsSFoWN40Vwfqmo4nszty7Uze3oddmi9cigQhglRrIIz2xmaOGYYxdxtuiZWmatzm49Wcm0KrllnY/UZ+4unhHOQYLp0e1dQ/JDHnG1EGs100zJxDHmDbxrCCkdPsAIBFwnGIMYqTVqnbrN+hZVROJqOmdiUzIIizYnVuFAh7Me6UiGMGSzr4nYE9V1U+DLkjpN6/d2tIHmbCYRy2sUCEcNM+0gIUCEDuMjIpDjggggK4RxVqAjXpCxPiZ7GQmYMNLnkC2NKdRnSmXUCBS+QQF38+u++AEAAyz01I84yYHByWIFwIOVGiBu2/bzKBv0rAFwrTBCiIgqaQcPQRrTkDDYII4/SWnYFMpJDJEZLyKeJKyEhJOsha1CilKN8u66J+e4GJJE8HoQ4nyLM9bNNwQsgikZSWksDdQsTgbqeP4ww7RSzyJK/H4bkzMQMfyvP1iYj4ubKiU6ceG4SFU3N5eTjYyPmpMtsZEKdMzt6MkKBeDrpSGBDMiUZFyzkLIoPyoW4D5M0hHDirtJtISbJypWP2oPZvaCKJErKy89KhyfsHV06+7RiXGHiepO4zl6+2tNuN1DR7DZayWRq9u63xApAasovXHQfNHxMteioaiUcQBRGjhmCTgADEgB0D4qZVwq+koCpvXpr2nd6EmjmfkTnLUM2qwyJMSXVJiN6kCeT+v7n2VTr0jVMn4yIUX/JiJHEalVZyXD9JIWeG/2e25SMrPLFJVSWkzDnQordwdCjFnnnNM2hNTRybNSnYQvnRhUt33ZqsVAEAhw1RMYMyPGhRZ4FOVYUAbDy9yPowHT7ZUmkyqNoorFGgTtp0NgZwrqMtIlTX3QghojttiZw3OGJczZ0BwIz+OQhSB//vUZCKCp8h1v6tPTlB1zkfwMMMaXuHU/wy9k8HMt2AUkI1JyM68TaKIzAVeop3GOhiHG+XVWn6T83YiygDxIW4K+6FiUIKN83C+Rro45z/FKfMzU0zJ3lwOKGpEN2S5WFOiFQoUMV5moap1YrVMiVlpaYrcxqg5jELesnGyyKZUH813OxaMs579VErYuzMUn0SNCouwCxRWaJlkuyMIaYkmkZ+oW6ZyC7JxQ8cLuorMSLMqPQkZLBJENlROJLHSVAROUo4sTmddyAEgIZYaEghAQVoeGnuSAygiARNwWuZSFIWXJiTJmz6uHQKbhKRUjzN6ejsxEaJDLioZSf8dnJzm1WbLtAUx3LZ2RupB0d2qFKEUNhSBhBKm4xJUJOMISJT8MgijZLdacKuKFYfiExgLy5s6EcM83w5gz0hEtJGiWrTdVJcrDJJqgQEOVABEIB0+mq6IGhIM1DwuChgbpSVoMJLwg28UGQ+YqgJCtakadQ5/UZKVSqNCvnqYYwwXpPkQhg/TiGiSRCAPK6J8P1SISWBTmjowi+DWNE/W8vqIeGWZaSSreLUgy60RErMmiHDnVhIx9n8pW2rk3olhTJe3BjVUiuiGI2l1Rbsn6jUibRJysQ+cKhmT6gjIWztTkwfYhlA8QlZKahVIG+Or7w/qB4p3KDNKaq3UK/45fmFqHVz6QMwq0iu2WRVL0CGeMtLdo/c7f11OrZWSPC5ya2Ki4tuLGWTtWRIVETSZBewtkg0o2dRhMTSuRmR/WMFtASI0KiAkDCwpHQNSEamMSGGaTGrguugQUGYcHaBqRnDrk1Q0EIaqehHCVjhXPhp+t56J6lGNFpSPYDlYyKT0i8hCIOyBAAhQPeGamKUrcjeb2Zhroa07pHEfeUMRO9Mo6lttmWeykKiYxMcJtCZ6fFdCQM6HLlcaBUlYPjmNjAkjsDHHJBZpTBjZo1eMQVMKSEj+hClGBC7n9WS17EIItZfQeEKyO0pWIADMhwKiFWf1sDLIeT3ch/QULkq2XMZ+//vUZCQAh911QMNPTlJ3DLgFPYMyXoXTBS09kcHaLmBE9I1Jv8/y0XEcTJXDsTpRwG4nNVKsnOXlEHKo4h1KIubiMI3A/R0J0XA61AWqTVDkdZzlxUSNVb4gi8jkqbTElV0XdRTI0wDEP4tipR58oS0wDaV5+LCQNGKcks0CCTFOM6qVygamDMqqVCpwxTGyEoAZpBjpzGnski5iRk/jAkdKwbmeFE1jjO/PD0atpW+hKIsdGKiHIJkw9NCWLkU2B1WvU5FSQhHbMpI15ioszZggRMkBxKKwAgADFG8TuJn6G4Hql3pULweYoAIyoWK7ELJJT9S8tSSVY5A3OcACHdc8RBzI87VlBcDs9mIJtXO6xJWV6WjnQO6XItzMERIHdUnEH90Jwrfh2gqOofDMZJSNwbyHfKsZqEByGKIS5me6MeD3qZsf/dwbm2YYwFgAEgAAEKQMkZO+vMseMnzCC4gbldU0xg6LMdPJchcEjQjIXvFBzKFmJcuQN1cuIzyQE50XoijtQicnhKUWyErBlZGSTE3xD2IwDKZ0cvExP+GjyUHQXQXBlWN5SzWTxmLuwI2Ifo+S2uxtLgczPY3YSQOwwXNOKB8ioCjJOtH+4EMe3T4Vn56i8tLUhy1ER1RWquVnx8NQkIbSZyz6i0VqpVRXTxH0JsPJqpbLRrANzc/M33j4/O0JWnNSU8rhXL7rLusrctS+ekO1/vIp7GEGz3UYaRx++X3VrcCxnHKtqES3kGsGOHa4xMKixQ35hBAeH6+9DHMsmR/HZ4BYydpEccAbNEAIKicwdrwQ4YwYmRIcNKhe5EV6kjo+nCWLSgrFRST9sFvkKVhaVCO7asd6EItpK7k5W6tQFA4kxjDMDUeMotJSxZxb5kXtGIFCQFYpjMZZSeVWKHIJr5JxOvVByh7+38sDfOwO+mrOslqtJQqJ1WnJu/UJjqYhj4HhrMuZvus5h2Jht80xjEERiqLRkQLRiYFQQJpddIAsgMAAiIRyCgGGuYoHH3kTQL0Fw0cw//vUZCMACCtgReV3AAp0q/g1rBwAIBIdSbnZgAH4LKa3MtAAU9/kMEFFOH4i7X31fuCnAbRdjiPJBkJkCKa52J3GGIqJhsSirX4DiEPPBLJdA0RqSCbijMEBjaLvbZ679CzxprT3IjSvXSgdssebEXsQlseedhLfunRLBrweBdCNchgfcsqSV1Jl+I21uvbgR6IcWMsW7HY1M1NRPK/JaGP6fd+nDeON256nl1i7hSQ5jzP53VNYwll6nyw3hTZd1zDduvax7Vyy5nSY3+YZ3v5jNeJpzicYeYRHhkllcDJtjMeAEADHUFPAywGEACDUIBoNhzPQ3KATFphx2tq2xIJzC7HKeeewrBeTHGVlZpu/0PocqTjbJvZCGxIAsmPnMYacNHNeyY+OMxjDhjWM1rq7GL7b06oyv6c6r7N1W/dKaMzLv97/NVnQ4fWWREjbaxYqtb6HuStAMDxZDsdD0dj4ej8fgxPDgeHQzAHg1TgcwfAYwwP8VCcwNAs1/Csx7CMwkaw4HAsRAUrkwnBIRgmEAYGAuA1QZAWwcYXOAgeKQHETQe4NcaYHUohhDxYRphgMzGQHSLnEEAKhEfnSVHLHCK2FzigRkzwDC0xwkTICMmZGJdH0HqDKLNiqVi0LjLhBhcBKkGKhaIeW1FEiwzh4XAXyfJohiRIJlxAtnEkzi2MEDU8RQihUNjyzpqaZoTZXMzrrTTNFIpyibGJPlApqSNDdMvmJu6BfURAuJs3/lw0L6ZMlZz7uxpWmpAuGhPlw0QL6Tf//////////1zdzRM4aLdCdcAAAoAigQAAEDgAAAAD82UJgDwQAMkbnJCFqgWELFRiwHQJXvIkU8rJMLkD21IlxMy8DEB7LWaTxosS8fy59zd8cAtAW8tIXrPpvTZRANxgR7IpHFoNUi36m7nP+35qjMCcUDc7///mxpplNBA0M////9R8MS6D//////T9BOlSAEyAhElJKAgEYZDgkVzAYpBATMbC8QCASRZ1L4nsYkaKPxQIgwFmB//vUZBSAZ29gUu9zAABYo9n87CAAH5VtIs5/RkGFkyMZvJ0wAaDgCncloWqQCtq1prUWkhc40qM5lqxKndF2FblTP0/3uk5UioFKiyxdpCNCVA8YaU06GXJlnX2a9L4q6SpmnUMO7lMtqv7DtLKoaZa/r6v6/sO2cM9XasZvVo1GrWNV/X9isSZ1PUNrdamtbqymM34Zd2xNT0y/stgJ/pdHXdxpaWlyzxqxmM/SxmVW4Zf2W81VpbV2U3pqGoel1q5TU3fx+rS9wpoez1NQ1Pyp/oetfjVpaX/3KbPPq0udnHnfiKd1PyJgAAAAACi4ETTBpwBpYcu4iOXUSfs7zjcuoHRhyqYfSioqHohAqHTJrFCwcmrtkh6MOZYZmv/1UVNUspWVW7qeWAwNPuEpY9BZ4K1O/+zI/iYGlneDU7diWAAKXaazNZkIWGIFaYfCIgRhvUmGN2yZ05BhC4aEYooXCmkxDmpgHQFwa34edGaQibYYbM8accY0UYEQSDzPHQ4iiQrouSXZa8DBZcxLNI1kDYWJJ6u+nSjc1tlLus5fp/WuM2dpCUy5yrsrh2tEp7PGKzL83nqgb48/ztO9aTGDjKayqzjurhTOk67tQp/puMMOgbGVSl2YpH8qbOPoqzeNp0n6/4rf7jYmnei07nFYzS5u02FQWAH2caSQNM2aWo/USi0NV52mlVqJS6NOTLYzYf6/ztPGqt2M0EPWbld2cKuPP/W7stsard1ljlaBUWHgiAZIlK63N6m+16hnMnXSa83mwG5rQUFTseNTTykcogSxHQYeIxrpJDNTAiIGpApyKCOSnoPiL0Pc5Mooq9iXQ7KZI5VGekkWF4tnEjUem3rOOq15kkBgOxAQEshDz/10/t2r/opRI9v1f1aqBgy2QVjAOATAhj5gagomJCDQYUZ0BmZA3nC6BUaK5KBs5TCGtzjUd+p9hihBLmNGIUYFwX5gjhMGBCByJBAFgD8WB5EIBAJKtdGQRjA40BXMWeL/wfATvwcIRjGxwIlB//vUZDAMmNd0wgvaZHBpBShxcG+YHL3PDE8808nmlyIt3CVQNjwFh0ZaUgOxVukTfrRa6o3Az4QTDa/VPtIdNjDQ3dlLhz1acnpa2rB54RKwt+NafNgFEjLtQQ0lZrWWvOS/rHYlCIvLHdd5r0NLqhgcoggA0RC/yj2GmyeOItL6wL1K7kIhPjzh0XYALO3TZE4SbdXEK6HSI5+rXqmFTUK20UcGNLbQXyNc8daxBHNY70mzfNurXZZdhWsnp2gQcVoCQdRnCaOyZbAw1O/7zbzy03OEtlzj61O6uVHHuAgFQeHCQxqEEaDApAMBjgwUKjb77O+2s44mDKDcMfDQxcBlVV1pDwNyVtGVtb+T3vJq4NTNER0hD0Sd+7YgMF1anYGUVHrZ9Jt8a4IIrjBVOXier4R7C6uuJ32e1dv+rs3ej+iq/0//0AJIBjVgFmAaBKYCAZZh7A7mDwDWY15SBifBnme8XscRp4pmshomJuLsYdYFxgVAfhgEJgQASg4ClYjO4wgJZQhIbjKIgwGKer1VnaTWdDlQUD+iqUaElqcqFth7xCwq5oQ6MXeMhB/Hun1RY92x1pqYbuozZUQ8ApDqC3MhHn6aaOVpdHAs9LZWKJiQw9ku8Ts6vpiJPCjpRH2ls2ss8K7feBcidlcE9EMuYh359cH7pFJW1bEvbYn4ykYQnUZThjTJu6yof5s9ObyLIPNwX4WabGfUfj/ofMNVjgygqC86XcWUhzgYxBaCA0SGMEhQBgHGWhnGRoTAYlTwqEj3a/DqlxTZQJzBMLx4ifRbE8gJlBBneZk64+TqLmAwQKkQgEpwgeCgmjaqA2jvS71X7CTK5ekakd2LxRHcm3icUJG2RSWzt3WfLyNW9MagiNA4uFa+izilD20/+KJZ7cz//ZUxxwCAUB2YFAJphpAeGHUGKYr4H5igBAGHCtKagKKBjhClmIMDEYJIEZgeAJgYB0gAGUbQFLFTmSuYqIGaCiUsQZx+Jwv0aVzLGigzpEJIg3iCHOhDErVA//vUZCwJ1ul1QoPPNHKiJrgwewxUGMHPDQ4w2MJwNODF0w6haLOtnCOFO2ZEMZDmWI2YcFP7bVbmBIozlHpEKL0OlMtbXtrkY0aiXV1uz9qeu6PpT0KCwm4hZMrROOEr96PolYmue5K23CJs4PL0De4K311XTF/IMZ6XKFacoz92So7My/KBDoR7k1aDEEioyaiCEuVrw3mqKBuQ9lLLUbNIeigrSCJOx5MB6raLArmBaAAYNA4hjABxGOuQYaW4kxnlLsmFCn2YrgYRgyAoAdZhAvELJGgF0piqnUmB0DhkWnwKsKTs8L6IklY6XqF8EcMLkBkHJJW9dwrPF2qP1UZ7Wt3I4qukACSgRikBVaxDDL+Tn7BXr2nOnK37GrTOumiBElFEhoZCIHEokBWWKuHEWdczlRVQjWdAaMRpMjmPNuSmJK2NXXlzR1hOHSwoFBGDTwZ2CJiEBEq5NRiw+OJT4EhN+mw6AYDEwKTYViLbrBlx2YLAsQflzWAvA2CXvpKXKikWdKPQLUbI/d9w5Q0aHb0AC1g5OSkbBGWqEIuvEHfSjilKRh6+BWgulscj48MRDWx00qljE+NsV1Nd2axWCA4hN6LRi0D0YuirLjT+TptU5D3aqdyNGlfYL+K+nW0XubLFWycZRWx0HZtxyH/Ozu7x4NqDhD7U2i5Z+MuU6100yRMpKmL107s0pCmKTqgsHhEERggJYkAxhoWhj5A5qolhygv5/b8R20jwkTZlcFJgaBTmoPNNbmw6XQy9sXmIu0l1L1TCEBBKcJJyOD2gUBqInAIABaI7SibaYgWTaCm+0VKJKCYKMSvQMISv86JKsF3lKki5+bsUH2QMhuWDPNL5MWVzI1eXLKUkqzpFELyY9Dj+f5ltyn1s7ZS4chHpUyxvURFT6nXs/1UAdAAp/i7BhEJ5k+cRjSIhikQxrkfpinMJp8FBiGChuQaoAANIURACzRR5fLT4m0B2YHZpRymdfOdZ/JoOls4+EDM+OtLTgXmLZmXiSoIYlGYe//vURCkIldhywiusHcK47phWdSPGVV3TDS4wc8rrOmEF1JsZGLS9ChyJxssHCjHnnIViPBpRDQPw7ny55izH7fkOOLfi6LzNgEVkjiiFkEal7JQmDckGLdwupRCwRue/DqkTeJCMTETq8Peat3/0jKkK7xmNgcBBA7I4vFgldqUBBHU30Vp2oCjAyZEJAkSAAFDro+mFgPA4HjY4GTZEfTSRTzXyBTPw4zU6ITFg4TAICRoEIZHgEuKUuNAbqUr3NM5C7Er6+9JYjOD0e/zeVItH1g29o36FCE6IQbLAwhQLCrLedRkAYTQPe7XIrITIHBM7jTRRqCNdWSs/FqPhkFhqwcjNzdyiBWRAxZ2+rI7+qsIrxtiz+qDEKyKIPbhCdRSZZmWXD9hZE182Zjw6QI4pHPFglHDVYCCWsPou3agaGDVRDhIkwCgBp0AK6EiGBkUOis0glDL7XOfck08BDAImMCD0BAJGF+2vr3Z0/9BUxlkYmHFJ5iTxSdiWTB7FJ0KF7h7YTSviNgvShtMFf+SfjbjC06hOnCpR88bS6Do4vEkS0y2LaWQy/OPf8vTjFLodY8tSb2noa9eLf+G/579rKU+9Yn80bP7WktI3VsfQ6TqvfpHL7U/RENA7s8gg3LhTXJTTOw7EN3hkrCIQIpCAZt4dMRR6Maz+NFwUEo1Mt0YMozOOiiEMjkBMhiGBoGl6XBdV6XKbd34j7a167h0smksN089R50NiYoZiZusxffCeXgcFYbEQKwQLEjfYQkOsgU0MaQky4hgApUPiE+LsJOkjRjaUSLK2TeVici0uBbCbtpsvOgv16dd0cvV2alkb9dnb1qR7W9Y9FnFY+Rr541GJaLlt3s2Y22nc/tBiGwD61syDajrIN0ep2QhZbW/rbs5aCtQaSoAFAAgm8BabK3mQg4OiMzcDDKIUOPlIG3g3FoTH/eOzkEST4QAC27lM+TKl1Jt/4ZnnCgFkGBKgMiDCo6D4qkfRJsnxkmRAmeOkVjx+QoIxG9OAZIhM//vURCoIhX9zwsOJHOK5zZhWdYOOV6HTBo4xGMrlOeEV1hsRJJNnj5IppOIQKMyEp9y1JlmFedQ1FE8swmybjBQqXBMSB1CRyf0CvddWGo21xaSWFTM+mXcGCnp+a2mhq0MhuSHnysSISSYHFV5DLT0Hc9DyQiFmhVCpPcYLkR4H6AQAylAAuKYfAGZLkIYvlOYrlcZyC8YbyGb6Auago6ZhCCYAAaRAyu10lwNaj8MM6ngaOFgcUMijqTE4XGIJkIng2VFoQmjwjlVW8ZxFPIXlcZAX8uhYZXHxZXvuIzykncJlU3UKq0svlbbm1qyV10nF9awURQEEZswNA6ojwxZMFN/zCbjLkoGCOOE0Y2MnIr1J5alrxkaisxBQlkT8G2vEaQXgJPEYiCZEbmYz1SIhbTIiYvo0iHgAEWrxCBDC4mIhMYbgBm0ADxWMBZER640iNDoLKMmgFKx86XCHYzAzXn/fKI00unnG5DTgP/VpnalGM64NNcaI/9HDlSKYoZ8TBbClPV2vNqyr+D/CyoQkDhH2xULZY9DZo/G6tINF0a1tqkMsL6SAu1pmLtIqaZZBA48XGTIsKFKMujCIqT5alWx0PUpH8xw2mytUEGNPCd+k1Sbr1vFD3MYwuDHZIDsYssOGrZ9PEC1PohJuRLD9jBVxtSDgAiRogBAw3DExxHYQCsYOhYZdF6ZBS8YaDYZIi6Ynh2YDAE+rUGg0z3SyFMXh5f7d6eBolDU/DkY7ftUcrzpKF/owz63qdaUlkuvGAxUr3F6VS/y2blvXVLRYgJ8Jy9p5Z3TNcLwtKlyWkT1IVDMeOo6LR7lIkUVN9R3SvKfyuZiqTfKXmZjou9bL0x7tutWzr12Iep/9bt7rZmeW/fd226ibIXjMLKl6VObfvsd+8IOqjHbaqCPjyAAJa2aADfQBZRAChDWYoKGnpJxyuZ3ZnAkoMeyQuT/Xe5jTVoo3wLF3YqO1I2Lyq/XfF83cjMqibo0U9yIVZx8Ijt3HYo5RWhuowe/GTxuI//vUZCgAlcduw0tsHrKVyyhJdMO2Fk3TDy2wd0pjJiCV1hmhtxxadnA8HAkoJCbLY6nzZ7wJvUXJTheeqyr+nFVrIlrcQ2b8vQsZvPRPczfH6Qb7MH3OJnDt/qTrxAOyLfOrU2MpRdJnoKnlwj6ZI8J6hGcwA6igwjJSdhw+DrhGChipiKoipQMIdeK2AAg0gAAVQAFABEJHAYPAwwjHoRDFEbjRBbSZhTgItRqEAgCnJcqPQ5G5mtj8dnnwszuVibdqV1ZRDcCx85Q0KODkgCTg+j+io7ktJ+puihBJ7nxT24Y8HTxqFJXiVOm6CQ8oh6+IFsIhlw1VEcrcp4kunWSR+Ajjmx/RrXM7rvS1SMSFAuUgMOUbAtlJZFbcypdlCrdIIc1/3gAtZrKTaMPCgaBGEIrNzLHA22iNCaDPBkwwHhcHt++jl/E2Wym3SQXC4DcOzN08NPpXXhOPOBA8KyADcGLQJiMIpUTrhDHQ0RILAtWHOGcqTkmQLCaAdwSjhMW1AjF12NwRNYZHvW07xq2dHK0sWrbN2fonmd2ZirfNKoyvYsOPT7wT/tpdVyTPyzPyKqLlPPpdanlQblMyhn5CThm9sdkhERJHCGd8hWdXyfYfBhwVWMCABMEAyGBfMMhnCgxGYRHmR7VnIhbGZinGVYRg4PFh1hVfk1OWmSUjBdOuMyy6elgSDg/dNYnSyKMw3MB3odydEQy9jdD0hRALQkiR51nMx9Q3u95X7HJElbhjFlLj1zKqZ/395UzQk2I5O/Iyspt2o+ktZLv97/DRbTHboeaq3ibTb/CrqLijzFPt5RIo3VRtFD/96gmBG5dW3IyQNLtqBGrhGDVhVYPTgJpNwDFjQKYdSsQwbRcyoRxfj1YUWhg6UxswHEJCZkcyVQMNnZJTIa4aSrhfWDwkPj+oSpMIVjGq5g/RPgego5e64glQrRlQcbHJ5VEcjjUcT65WSro/OaNWh+A+aQofb17UrPssIYSOnzp0iETdobe4KtpGGVgxbLud/clS//vUZEkAlPo4xetPYmCTh3gmcYZsUpkVH+yweQIOG+DVxI2xjI8/CpBbXvHoZxydBAAMIAAoMgIMXjQiSoGSpikjmgScZyYZxzugogGnQKAgxClRw1JcXoy8OxS3GD3S4tHIWloUlvGbKq397TpGmE5ZQyIbUbtmGDrJCTkh0KQduSp+QbNyP88fdlnZlOWN+oP0lV3zvl/NdN25U6RygDCv0cAGR+uQqnCS62sWrm+fv+RWDcdbEgneaZba7CqvN/Q/jOxRARVZmj/76xkmTkpZAwGxUA3kUKyxAd05ovKsarADdGy0yMzZpE67zt92Uy56OTDkQ1IcnBZJOPvDrWpinkzN43K1wJ8HguJADqDUycEZDHPW0NcMXBcpTgYPhoRLFy5G4PqtjanEitfRSsVnFo4C6vZp5p6azNLQvt1m2Vv8W2yERQy5TawgdW0WRHmCtgskS//QseFkMmKAgMCQwODjGRIAQAM/js42oDIx8MDjQYAqa0GvYThYmISCYXIASBgMGBeR3LYUg2qaujpEhUKuOMb0r9S2CewlFmoM4GRKbQbHBlPyukmszQ9DzHrlcGXeWZe7wWJDPzPV8Ypb5uerT5p1j10Nxn/qonv3O/evzx93L5Lu73/oAAQqVUAKG7XgwUISpsBBsQBxWxmpprcwXOCzNxoHi8O2IjS2Z6eEhWdnaG4koUjaM2PikZNOrIw0T6YGQwWna5YTVOl5X9WGtiuqku2LjmL23LoaiC2dDjvLcsrvi57sytoNnNTQyOphRv9D+sakTot736XEh//bKHbl5GJodzT7C/m99fOMxG/Cdym5kuSNmSq13MNCot8yPBwiQAFX63AAdtyAbUEWRuCtCJ8wajw9S9A0zZTIzEU9hXDyPz5SuSSuhUfeAokXGxSHg6olvhATunHqGU7yIsrblbV3LIL7dHCQWEJAOF69Y2lHyh/+3f7ls3VzKZ/sgp4vBgzl+mnatdP4mx/77/PW3nz7U8lRff23a8A1p3Mls+I7/Oyoi2oD//vURJGJBONzw0tMHHKM5fiJYywkUtW7DS0wb8pImeIllhn4XHnMv9jvAaWsSVUBAQM2NBQQx7tRE1ORFkLFgNjVu+fn5SzGiWnBsZJVQFzsxewcK3NSSVOooMEZCLKrj5x98/WkZ8utwnnn1ztkskhWeunZOUFBGg6ZJUZGctUlVwSWoGgQ1tDAqFMEpuEyI9i7HQtYlND8rb/912LS/+WWZ7nC5POQlvwf7l1HkL+efkVMRUMkjXSZuYq9f7sgFgI091+gDy62mQFRsuKEgA0sDTjbwhHZkoLInvi7+sZpF5wpPiClLd4jA5KhyroNY4F9w8LBmQibzijONysdkZUXSo24yqf+okiAjJtzIZrIo1T7xfSmS2D5NU7ikUEhBJMIT6NeNlyg2MAgLh8BKh1AqqSW2pF+1NT12OWwgLyO5CkLNueQgwSZlGDwacL0sAAbAJX9lxsgAo0kIr1JKHZs6bGwglwjQPPZTFhv2x0h5uk5R52ztZrM7GoiZvk50DcDgm47GvqXznD9BHUOmVYGw4HsWCVGB0ySnZ3Y/HE/SRn4fpBGEyx2cFZqI7ffe16q48L7T5CP3HoStf39nvrv192muXanUKM9OG/QW9b/q9/npnNy2+ivF3n/slfKzbp/0VDeaLzSb/13k0zm3MAAgMy0AO3ZQmGFTmoKmUqnACHpoHREIJDQki6sJikeu9nsblMMs4oLhdYdEixIquQwaaQELZxYgc3b04sIlJ4cb602yeeELaS6OB7pzQB565BZmkkD4JLNpqbFVhDI5/E2PZs8tWBGbE6uUXaeC+E1yvSzmaVDUinWzJlCtIEEAUNABs8sYLOHizBT4XbFj7nVAIKRWAdGYWDl5jThm0AWHmUGmXGB50FEoCVhTBeVXrQ0OjzwE6NRnT7Oq36IeNMRwWwEoD40mPJl0jWXWHjgCA7IQTgeHkpEJZxdYLzp/y4frlJKYn0lV5xOiBqzCWalJLVozNiS8crTLmGDJCpkL2Qc6fW+pf71bULtjHFj//vUZNaABO04xFMPYsKRipg5aSOOFznPCQ0wc8rXOt+VthmwhZRaQw529ZBRqRElBhJtiArqTnSCki9Ur6ha45VlGRTnlTICeMQXFARcycOKgZlnUexVMzyWOJAHAU5OAEAAEEZlUqMWLTRz8xQ8HHU9p1PIBjBzoiBbDU1P05aQDGO9Sl8ZXQBESgDiJAcpB5iKzK5O4XyQdYmQrHCISnGVziR5wqUiyJ5cEUoIlCRFiYIxBADJHpIkZYuLMCmMC0ghi7ANuUUvES2mHLNNSTDkkw2i5Tnd9Hr4HhSjjjmJy9RTkn29uCA2rQMkwkcrD1qwpabQNk1PVUaODl98zy8zUdaoU3mCvq/cY794flovMO8XJ+0AEkgmdXIBMsykeUHgwhp/F1mouexpbuC2BtweWB6BnVE8YnN+yQVeQSGjTqSRxFwVqhOeDEP2lWA52tuYzZcVlV0P5pP5QMDtmN+lXi0lFUn6aGYulJJAngHlZyZYuLnErXmnVjSN8kZ63MMwKPtT3SrllG0/Lu+xvuBugShdYqQyEfrfigbOV+quOv1v5KLXpjD0UDK8gEcPVRV4zVH8mfMXxbAEAJZQAaUtAqAQMPjQyMiCggOMyLz8CcwcfWDabAXcJRQdWn61DJUcYdQlIVhWdEs+KxCFVi7KMtm2D8ZEfozwHy8In7q9jX9bfT6Tpgm8KwejaE8chWLrmpJI6iRIPiGtO2pMuRUyfsfftkCFJwllyemZjJkEcZvSIMdRusnZxApviqXsKA0cQVJF4s9ZWybzqcWWwOtnaNQZ7yEWl4bl7Gw3229sppp7fbHth+5TyzYgzA/UDmDXLAAgr+FCwwYz1VBSUhXT61oYaoydw29gxXVA4FK7rbNpvQEghmGJIGkxGmoUyV7gJwTtKNhyEsUOTGWEAuSdoRESWTQVTawzm+j1y1xzxJwSdhXm+AVlkHbh7PWiYcj8hLWi+VDNxQ0vTYkFykrtKT2qxggrY2Uy1o5XQL6u/QlwOSfpDW2x2VPlt+n7//vUZPUAFSQ9w2MvS/KzrqfpbYZ+WsXVAAy9k0Kzut9BlJo4TTM+tL7CN9zFVH9r/xcyUq2d3fq7dpgycZv0LTlHYWuTrH5x1VY4Yu1kMBwua5t66xG4WI4ZXIbbJSYvHTFtKvGPm3rettwsSJABEYXkFsjfNaAImAMczaBochvO/FMp60KBXrQXHScSCojLI10xqYUYZARE8shUs6QClYvMjZXOLHFiIkhKd+cqOKMqfxltrEQgRNY3NEk2ihBYo0shiNMteQ9izobfiZxyZs+C3CjOn2VzLoTVkT4PKOag9Z0VyWRTAYqCsQQKLh7h2pZRHDCWm/JstMqagzUpJP9krk13nhNZdM07nYs9k9nsh1a5yKoIlsMJUgQ/OAfAg0DBhkMXDIi7JU3bCSb6vqIA8CsycTSFHaX8vR1pU1dX1CThssCyysaBjFET2rIeMZGwEfsxmYqZHFx0Y8BrYS+mAsqmMojikVMrZpUkvW6wRbg6ELEY+pNzhEJhKWRuTVbGGi5txC5eAL6wRC6h+5qIWbkkwhZjKROn52ghlIoIonorbNU7rbdWnPnFotp7Oz7KbETjesQpnwnziq9O1XWkc0YlHEMldfjs1ZTqHj59lNGmoKUtbqaIQpSQIoRVKEMj6eQAps19rQ8Yaogl2OnmtAERLOEgxiQfWuOn7ZSXXe4x2IrKhUgWH0Ow6M1RbVRYyvRniSjSDS9rKTORaiZumXq9JOYUmz3Sj3qbdSKLHXuvphhWoN0CKdOh7s2HJgmsfFFHls4vPMn0mV0Dd64dPndTaz3RcpKJogbVSDzFktxqyEs0JL6HLddM6t+TcXHpZ/ootT5Sdmuk5q39XCBjFLkoMDAoGiYLNEQDjYbmBtl0l0ghMAsPfd2p1sShqdbc21fs9zrgGuQpFMYQNJbXQwzUfolgTwsbaSMYKydb5ZZI5OkLLopW0lyITr0lrCwmgkDlUZuQXcehlFwP68hhIe6Z2Uw0gFWhMUozZQDg0JSciLFuImGjpogLlqOo//vUZPUJBnV2QINPS/ChLnfhZYZO22XZAKw9MYIcq+Bk9I15UBkIIVkDAGExEKKSaDKCKj0M0lPMMDpGlSqibcoMKKpQtK9PYi1KmmEbmoWjjNRmzTkpsdqOQTRQSZQNiR9yJmVFCFYRP5U6MonKoeMLLrOZkjJUxIw6WCNHB6E2RREimgCAO0KAG2lS4jdPotwkQnYchd1hS4cNrNN+43BJoRL0IwSWnrSJIbRCibBlem1EJVYVUqwwkaELwqMruL0psAf0JUsCKOQoNXSlVbdKCflNdo4LQzBpDJCO1k28OvkS9M9/Z4RiaimxVgedGU4Iu6jqdDkIKGWEkVjAPm6Vqmk/i/GRqA9fWoANOcYQfdYa8KYIALOBoCChpiAI4YgYkFr8JAC6YbHDxQDUoZbNOQvKTtu9CGjR2oSiA4aYI8TdXvf5jCHCLlgKhzibHjELZhmIenRIyaDINg0lEUYfjirR2J4psG4ehUqlXhrzlY1FAC1OYfCKQ0sBwpVhYFElj8a0MOw41czVRUJIlk1Mx1MjetIcwJ9IqZfJu8zEcx/Oy+nfodjc/EguYZjzkFiwtgMXDGFksma9CsmHovOwtM2LZmTHztaWknPqlkSKh6VY6vurli5e2S+jlIqPHSmpHT3zKN5CSAdMSuOgLHpYJS4QjAllReOqYxJKshWHs5uvHolH0GvEUkqjY/N09wAwASQ/hdxFDlIpPEBNXBVC6pJpM05FsaslJA+VLEh+KpwYUYWDOz4KDh8xEQZx8GdNFVUhIaanVpqCquqBpjmZCgzOkFsGAAl6cPPUUdRIdIYtDcQpFRDuD4QZSLdzjIzBO8qMLNCO7RmcsxiiYyaBeJazl0yZQ1BHjsDS/bwRZcG1sWQoSxJI01ToMIHxJYdLcos6IR0Ba4xCG5DJAwOwKlIWszwlYr6ECZiNjp6pF0aan0co9L03y8jSBOsyMAzhL0QcBdz/TJckIPJ6cxPGo4nZVuny2XswCMKNoUoEoXIWRFwlEuw9FyNIbJWU//vUZPoJ2Ch2PotPZkCFzbgFPSNMXRnW/qy9j8HPrWBA8wy5JxFODgtxtRnBIHs6Jq65cREQ9bOk8SwuUotSvlQllNGPzCg5Xycl8mq1yZ610Cqc3I6R9XiE+2XthriHYnlVz4GYY3244XtWl1MppaidbDvOQTrhm+8dza+3babW2YdevXYH3i2SBp9lt/qmJbc5l1hcfsFGhfXHjyppccU9DjZlWQxWKArkygUOAwcJCd4F0PpMtboooSaCMyNkRTriJyUSIZzEzXckE50yI6WRH13OlDU87qdpRYsYGcBkYxVnM1c3EJEgMlkJsj6NXmRX6mz2NBDXN5DItCJnW4Lq+K5Antvtl8T6tS2Fo5QWTyk62TdE9QAgAWAFMj5TGlje5PJUEAwClKSkLlfxS58RwBA4QkpcvKhE0OKN6l6pcnKShT0AjoUSgx5i8zwKnFhEJjHOH4IOgW5hFJT5GBriIg/UaT8Qh2OJmDkHqmJaZKnGiYJMT8Jayj1jtaWEv4PA7UnHZUynWyIfrSTpDl9RF0Od6qT4Rbecjm0qQ/1SxwZZJy2q0/GuqzQ/o6LPMszlqvGXNJERzeoVZM70xXeucceRKIA/pjJS/kB9dZEuOjtM3YtMnVy4jlarYUPEe3IZe09KahAl1SuLBUw00sewPK8n0WEjFC6pdMFSGdiCeWNxsfP0sZEct1LVsTaPBIBoHSRsXHKV7wAAWipVV3HXZJE81v1RVijXhZppeb3LqWzahPa2u37MVmO+3GdB2pugUVSfCxggZCNKcN2M23svncjP1guXdTSWkRFesz+x1GPYiUiD3s7ubbkVFrQfBlpTc0VwxHa1gxVvJz2w5+Bn7t2gG+bfZfUJ7opHhxgyRlqBlSpiAY4bMKMFjapyIPRozwANE07V8kKGPxtPRJFwmkq/SDUvae4KwLhIWdYgIspUB3niJOLAhAZwDbIwEoH8OBmTaqEzJ0D7MAlZdFeT5GKlUl4FIHYLSc6uFjZByqkXM/kmP9PrlJnI3m60//vUZPQPiBB2PqsvZeBzSYg5PMNuYJXW+g09lYnis2BEwwyZKc3yFmk2GQV5vEPdIpVJFRMBlyPSYskA/Uk6YlDERqqRUJSrR20V3CWoUAQvcwJ3IZ64UxHHwgQCE9chC1Td5Su85s4+/2qLxJ6p1pGXsPF4S0x0ZHz1yqnhOnS0cPElS86sOMVnd4IjkZLz0otyiSpnsLg4khseipRDH3avlwtmQ7pTw6VnQ9iwwGRCGtKRkq7wHx6RhgWEEJCQwWFRVCjoesqAFY4spe4VgiBWMHYNA4OUDGCuSkQoFDDAIsfGvFckip1Llv6jamld0MyDmOVUqZkTU4OXUpS+YUqhAqbmQs3JiLJ6EMjCqSlyGSkRltFMakfDv+Z9Yk66FWigyv2ls4KeS0Z+xWmFADUDKAhaJtS/xIEFp5hRJaZtSyNV02npLotM+aACg6f6fKEtMmVuKhEpck3FlF2ANCvLvBRBwVMXEc5FOWL7Qmt6ydty7qWi1mfIxhgRVF3SQHKRyjIKy6JAfjWP4cRczRAttgmQrimOckodxTlKI+fC2WNWHW5mUeG2ZPlEv7gKxRHKTZbXbZHiPSeohtnfwFKlDRJ0/jHHA8VHlkHUJKZYVUiBAdolER+pvzYjnNjFlxesOEr6NSmf19Mwubbq8cS7dKeKDhCLTisul+pNLDpOH6DcWqVdkxbZpLRdKR8+rJhSMCqdk+FYW/KMBo+TD6KqOhyUjopFdKvUEIOB6pR3kNEEI+i0xBBy4vNsijtsZhUhsfl6YJiU9S0XvH1zhP5IWxhDrlUFvxnhVa5kiGlSXRXIGWaaquUgnjV+tVevIRc4a9sapESmhgkRjXucr38YSYjRgaslRx7tRWseYVHU0saP//xZbQy+SiJQy84nXBx4glGWBxtSQEEmJEKmEA1co0BGijjkhZJNMRQ1xUlmHJHseYAAAl5yFEnisUQr4bZB2eQUxWBQxPVIHOT4FITJ0DfSwkZRB+DsVQtq0JAXXLmaw4i+gwlaBMmAdpAS//vUZOiNCBJ2vqtPZrBpiqgQMMMoX53U+i09NYl7qyGkYIyA+BwFiKQBxM5CXlUMVsFUMZlEt3ZUlAh5jRmCLpItKYVVISEk+QqArypVi2h5fnjQlkAWPkBkwqTkBI0Fxch3DpYSpPXROHVSFCeVYSpFNOSa5GhMnQg2PNHOySUjJCU9gbHERGwhDh2JAhI1DGBJR4DEY0SfBoDwgpCjCKZouiKORlBwVzBAFSE84vNURimtMGQREBEJI4ACff1e1Uw8gfsaiu8anSUmeUaVFvQhIRu9ck7FUH25kmsKZG9TxBqzg0L+92GFqRE5zLz4Vb98neJ/bfDtnFI2cjIyf4tr/qZCTv9NQvTkr+HaFA6WWkWcWB1HmP15JQB8AAg4NDnggA4WWnMqHMyEAAlLMRFXlR3aw3qEtWgEmisEnMp+CVbUkHTWOw1DrJ18EAJyGYFqQEZVOhzXa7hclc+AVBo2rDQpJ961wgkGNAS3TlF/mARRZULT9cBm84u5AYwKLKwzJWEZUXUiLZ3We8WBNegBtSYFwcEakC7jOLM69JYP50j1Uym0sICxcWEkSuOVIGM80p0jAJ4ylS/PuqUPa6ZPxqFoUq8zH3FgQ9TwDpOBRONB4Ph0MFrLbC1Aucoag4NSOvgJ5PPjZakDz2n6LlqxK5UxRukpCcWFr6F7B7RHJZXPG6h0okTDk7fWFB2cPjoG7wNiwrwrchRrlxIO2VISBOuBN1keh6J4iHA5ZtE0eiqPvkRuhc8pTZnsuWf94er6FZUxKDNeuJxqIIqAqdmcr7SMcyBHgiNiBaKzeYJNUDZeWpNKJNRCghUYjU3JaKrEjEQgjpnbDEUK0GkohRnYGTQzLCH+Iw7sGC0wSTzIqaM8gdNkmeRRlo4A11ZmgrHa84QVMtQCAnPGdpxgokRgMNjKR8APXJSYhQVyHDa2lbTtymlIx1YVKMw04nzVYEY4GWdR5CflhlLEnhhC3xCCvC2KfZejVMRtPMgjOUyME8Q5xiwS6qMu7GdRtJQe//vUZPKJmJZ1vitPZ6J4TAfwJMNuXcnU/Ay9k8mVo+CUkI2JtMpt0nTVyxpuMTsuKqVDWl4jaxnybBJ26EmD5YoTKbayuV56eKeYGQjdZkN3CnRJ+uOymhtHIh0LKR0xaJRZhTiEPx2vdw/OD85l05gkzPT2qzup3X1tlMcuxnSxbx3qn6HCHBEnMzClWSY/zCukZSMrOjSgnHHHWrqGXV61hEOtCyXpUMun50dPPFYsNHsWtycrAIMiEnEAlDax2CBKM2WcY0+h8e/7wsSEZDVqZmcoRfMaj0JrcjTVDhd/UyJfxoctW+jt/0jlDIxVajci9Xc3j0pZX9wRLRWm5NYQgSHubqBu9qLCdlXrar/rBMTTMZDc16v/9fr60gA5AbckwoEwjLozCHyBOYsgARiIZZtAKAQq8gUHL7txFFKvWdIqNqgmbGqcSPBw6EyFL1EZ+WvoWAwGkYrKkClO0JvxkADB6Da0IFXUwBjQ0DlqQ7XguJWIztWyCUgncY2qFzU8KVSkmBt6lEpIvyxNR1YrTASHY8xxwlCX8WcPKDO0db0th+K42B7nhEOtl2SxTlUwBmpZKOmQ935GTgVBDjbcDjLmfziTljPlRtZIG1O5jKRD8s0VjTxPDoUivLSxrlAmccvahskt8+JcbLonAdfeqVC2t0pptTC4krU7Ak9EfHxaNUONSiJx6uPGD4xeXqmx3H1EcmVg5JrA70mpWSlZKhQmQsUieE50Vj0nIwOBzQfxCfKp2veWkOoxgPllwoqBOKd1zp2oMLY2EhIgbrMmkBIhGpUm5HEyxtlFgpaeYYnTlRkq4KXLOBLlcLDf1aGTkEdHSZFG83hu0GrBYdOKZtpPhA1IwSAwZGz4OoSl1ChNSBuTYQyatnrlHvKv02qMrG7t3YumGFnEcwdAg8fQZhIAQMmXSrLxLhGgYwXvddi6r2BKCl2xFxSS5icotnGuE0XpFCDm8qWl+eCeL7MtDHdBxi6vUmX4trAgxaixksP8xUkrTpayQ9QqxxPM//vUZPEN2Np2PatPZ6BzzjgAMSMUXNXW/gy9j8F7qiDEkI7qnxPGYn4aaQTyQSRrOJnGW4nX5sCZcEdyOiHAZBpGnbuuWyUTF0zLxiOJ0zO3WkU7Jzx3CfipQeWQSGjXq/N4HUJOXXNjquXtvm7hbWK4lhg2vfJi7eeo1E7CsODhE2y8cRLPe9tlW23V/S4uylFp1hmuwkShVxWQ2CIcKCO/sDEVmsz1D6GeyroucJi18qHZS7jBZB4UIQqDJLknyqWt55fGNzv8t8vNhTYtoglEKimFenBzZWyMg0miKyOOwRuwgIwUkZ8QYWihyWB0bq+e6Q9J6IW6rZz4R7nmp/CMcwMKlDuJ4KoUhJdGSWw5VPbHtJDaTuEAacOWAJSEA8YAHrkZGABsKjTSgIXiQiiIRAqwRCgEwGwAMCsRF5nSR6omZAADFUJDZnBSOXky5MuVutNIJoKKhR0cMJNtMBBkZmRl12iEpYEHFFgGUPuqXMVtfdXSJbREyRkzepktYirYWELwe9oiOLYW5rBjBD6WCVIIv48jRGELaeIsxdyXaHtc0CCjGQaHQT/OEoKnilW9tbBGxzMDGlg6lGQYjTIaBkk6UCcSzOgj1UWkTlPOClep2rXEfQaKzaIOvSGt6ZbyBsL1I5RjpJMaKYXH7jPFbmNGyrVpW4gr8jUqYb+kY4t0lVbJHG6yPD5L/1aesBPIQpGd4qEscRqHS/MJDFw6ViIqoVhcJRStxfDTM1PHMbqogRtYJUS8dKZ2t1ONz29OfCd6SNdvjXslw+jCweHDKJqXyd/QrTc1EGDNjvaeSRJnFBrLJa5somO5zgHZRKupYEDOL70icL0ewtbpZ1nN94bImxaQOrrTJIdiJwSIJAfaKMxjru66T1L/mGXEO8p3P1qFRg0CcAIKGwE3RzDibNVhxkLK2frsQgRHmhGCYiTxRpMe5YF9Rk1VK4fqZhSg8QcpnmGdJ4mizwBCzJRCvPVIpRdlofx1q40FBbouEnoRJj6UUFDTZF6piQN+//vUZPSPiPt2vYN4e/BvK0gQPMM+XKnU/g09j8mEl+Fokw8AjbdlOhSFL4sXB2DQwKY7q+LkYTCabvnprdEjcOxqgEEqHD6u6AgqDM7/1BYWVMTPjHjqi8oG5Jh5eJZgfQ2Pl5+cHcT5cqlyIruvtP3OoV/rp30dKKWyDf7J/owucf9CeZXRoaWpw11FS5Rl1rC66HWB67B3HDR/DZNaJpaYH7rCMqmys7YWuH64HAJxEkAA2cBgAjlGF6Uv54+rqS2T2bCZ5eCXb0hJgeEYdeoukRs8O+CVTFyiZTBmZVkWbO2pqUZRq4ND1yCG0dGkcmAXiS4/Sg5FErfKhMuok9dU69oDJBK/dfv6L3OsAV8aGmCOHfgg4eFKYmNMKVFBIWJgoEkk6aVC5W6JJsjRRh0FOUkmpLi+KVysZcZYEgIuZ3nCR+EIEJyc6vCU6fUHCBiAtOBoCyn9ayocHGSAXC9qYa5GGJjMVR4a09KlsoWikeYZBS6OAdABOOcVwxkuDxYjnJe0gszdVopBCS9j6WkYrx3FCeCsNhMluUS2Y+hpmQL0xH6iM4aKEsaEsCpQx6+VZb0oW1PIgvZ1IenjyjEcp1K5II1jTQbEmmBbYi7saPQxVTm4g5VU4Vb40BuR5pQF+IfDClcuTiq4k8XxERlpa45yox6ysp2n8eB+F8nUDM9OsnkBdmkmms0SCPT2Og6zTZWFIJ9oeLKmK9C1IeBhp8V9kWTTcGdvUiWJafbaX1VboAekgZzkhJsecRunbKTth6VQ8ukWahOr09Mgo+TFxslFYmEJPVrosBsugMa25nqTgKHmMa0jSg9hj6G9dFYWs4CWKcyIjF3DHl7ilbShwzyu5bKHBqOFKiKxHEtQ7sBQyDCDQEdq1RIRvhgqudLBoINNsHdoo7QFKP4Y9ATsGjyw0wwUx0YHB1FQufQWMmAglTdraf79NDZy3UkKzL4L0jIQCWSrevZa7+0quy9D8Ouy1HduCNq7X6DAj/LKSNcFmiVU+Fwg1eMeAG2W//vUZPgJySB2PYNYe3B+7AgRPMNeXinY/q09OUF7qiEIkIugw37Na03J1Ql9LI4Sew0kQ9LipPJuUKJAzmk/VCtZz/VrtlPtoeSxSdN+MNqfcmFHpBaVq3COV5JDKONRBWSSilcMJ19Egync/iv53z9SxabXR8MDFDiJhtAW5I4iZnJowtsaKDCPU22Cdoodio9o5LwHHKUjawsow94jHnEAfZXpIlDwp8WLKiJhpALE5xQUiyJo5iEzqMyuoKy4fYFJQGxSWZlNCAKCosKNPm3Q2UITlS8/8ypT8YMeEYoJjUo/GnOZbamMsYOHCqKFfPWQqF4LImJFUDbIKu0i2lECfWs4FNGTRf558gEQcRmRvzs/sDFXrtgIgKK6iKE7ll01siitKzCowEeOQpNKeFppRiEbREgQFOgUs1rsxX+heiEaBgKaU6Vq5xwsjuJNDiI9CgvSOOYD0A1hqC/J0vxnIW4BSh8hrE/UYSViJeBmHWhAQ8W0FUaRNSGAYU+0KA7SenWDAUo3wRRuBrCOF2OJeDaJcbi0uDKM1lP8mZFHSpGZdF0JMajatluliHmN85SFo94n3sRRjtYFgmjeqlhBpo/1waUZlRw7YNV0rkPYC6I9dp01TdjpxgYHiYL8eLi6rDumFzRnYGCDdXTlzexH6UWmw6aNkiucVJpjUDuG2OT5L0any2nlcc8G7QokKWmB5Rbc1XKpaH84pHSXTKNWjSPttnjmi9RKwYauWz8NDDeLFlQmSzJe4eAGAAATj6B0mlxpdFUZOHPM0yOFr5SB9rU9IBRoEDc9UZ1dgaxmDZZNm9LdVJfX4upHbRR5n/yZK6uVCRwxNRSE0aluakpZEfZEzTGVz2J4SuqLnl2ZJMFF2yfIBtqazIGNUNaXCLQFN5+3+2GkrouTDLBh0byKQjDeKHS5i9UhTBKmhACg6oIwR/xGMuJ9E6ZQPg9DTCfZCknW0Ke1XD8fZK0oXZeQ4aZMzihNwghvNA/3xPT2GQW5uUKdCgZYm0saufjG//vUZOyPmKN1PYNYeWJxClgmMMM+XXXY/Ay9kcFkieDEkIzBSqnYIxM5FlzSQ9KSRDOepsC2pmOuS1PV8fqoOQx29veK5sguBc6VEIqK/upKcRsO51AeE5RKs6cXnYJK1xSw3XqimzYsiMtaVNGqkk5Kxa5SBuBx9ujK4rusJEZxWWGPcZO4U8Kp+N+FfbzTky5GJaVfFeWHkhALaGj6NxhDcOVVG4TMT3oYkh/ehSgMCVZxui9e0cl5baLC0x4IAqqlliZHI3IUZxKvWV9kDUEQGC2qx8vcov/Xn+tX9dX/NrsU5/9YLDON8ct4M2EuXOVYHzSHxfF79bI1lP7ifosaM+OWvgfRvzf9h96Hj7c872Xe7SqAAsRiIGOmmDMAESNjAismQgw1SJEBTDRhYm2IOBDEQUeCDAyAiLS+zRUZ0p0NHUGnuKhW4qwgUBAhDILHA0UskO6erRGONbaUFzl7WdwUWXvvezd+Ufk6mRIgRcoE0JF1nzhPyj8iaqptSMBFDEflFF9yN3nnGpKXJjDwRGA6CQnaTAhYx1e0oiQWZdIWnyAxVwNxCCE6SppaPZTHgijfbzqFscCers4ziUMNDzfShOBEFabx1MxPmZQvX5/KgyW5GRVMhquPhXp+CuVa6jISwnjCWUfKfyfW4CqNRWRoFmqzAd71tWGuBDRqXNVDD9jmmeqYRCvWEMidigOaYVSEtURwjm4k10kLlCnXBuQatUsZnRsNgZz9hXfISHJGPhbjxR6jmQlxkGAsXyqA0zUBdmNhjRtNB1WapVpKExRsXakNdNbMdpwHlOlL2dMvNrNbTdy06wM97idknudathjTP0vj+3HG0dV1De62z0ZJJdr3Z3Ky2iXUcdKlCE2ZSLzAyHekiVPXGLq/RS/HH1T5svcp7L3DFpC+YoJvlu7fDdEJED7VMkwQiyxHEGDqHpbQWBA01GZlzGXpvqlU0WdFkwH4SpUk3F2n4c1uu31XOgwsRJdkiAdwniTSUddCBGBNAWHbgk0oIqV7//vUZPUNGUV1vQt4e/Z2DFgAMYgCXpXY/CyxPoGDMaCUYwxAHLVI+jbSBHx+nQaTTtyfVQ3bRm8gRob7uy2Vv0cInDb9h0F8Q9BQsCsMzwnF0Cg/gUoaC03kdVyo5KhoVg8oVC+cGopJganytXUP17g7YUyAVTwrmzDTNyrh1bWFwbMxHqGSVs3yVQS6tIrAwpeRJFmHs70RpIhswwm+ZDc2DhmDBekTMbRJjYlSedXIhE8VEBCmvhLJETtnEGsMUZsF12EMFsBRGHxIo8IMDJAWnBVZry66CLdUmJ0JTIlINOHmtWrjZx9G5xjIjyWa/Pnz536ZVPKrGueZRHQ6XXoxEczJ6/1jOXpH7wiU/+IfuaR8q8iki7BoaSpnxqh9eZ2hsA1rDyCtaydLCJUARAAAaSgm9x4mZG2u5rMCaKzmhioclDoQaOcmVlpk5mAjcy0bMZPTHSkxlRMLBzUIzKL4BRAsBHxAc/CFKY4JCDhg0ICGCWgVsvLdqwgpodiLpEJolQqmjopzMETELXpnlv2DqHqaMZjMnTza5eYijazlOlpNNJCITMnUlCldZ/Cy7NmwtiZIrWnu9sjgNkzpRO0/jJmrSF+rUBW2sVWwQVVqQ69te9TsjhuCVhqZ4G3tTlllM3AcMv8o5HqsAv9KpfE5DfpH6jFI+01TuhQT8j+HJFMQXFLdSNT8O3XblsaoY3KbFy7P5U2FuGLU3Zu0NfKSV49MUcAy2ilUFR2ahiekb6yOpPQ3KJe4r/WpdM0EUrSmmj79u07ErhFj8/mnShykaZD8rlDr5TUiblPQ7KpgA2AgEAMkh1HOc3V5w+13bYvhWj3d652nkfucGjv+r7U96z5nTroZnpgzPs2IyKuZaa19r3+W/Pc8jW+op5bFIqQsVS86glK8uMr3ukBOgGGwXYbNLwH++z0VvV0ywEFozGiYF3YoVzQAAACECAABgUNhnYFRkur5tvD5jyaBkmFBhGShnyOJnyPhqEzRIBgBFJkosFRocaBhsGRlGZBm//vUZOkACZR1vjVvAAJoapgVpIwAclIdBxndgAMpwaFDNPAAmbCT5iQwKqxipKYQTmQC5hwkEACNxnbGA6kqCRjRKYyoGupAGIDEjwFFJwKuI3kz0rAx8DBUyo5ZUAgtJtrRh4GZEcFCwZ+VmBkxm4OZsZmBjBioE04LAe75eB9HzQQBh4Kg5MwoDx4ABSEga6SNya0ddFKh8mIQG26RcKCwCFAsxwIDBEwYMMTFx4efQt1Hn6ZC3VFWUSqgp31hp337Dg8GBBeQFDgOH1pqGBAQprNO0u5kKYMOQFG4rLs33isUnIctqCJDhwuCREWD0KQsCKJhYDT7cZeNqAUvZp2oehqHpTDEotU05hY18slFdc4YEOAhootQy1XBahcBcdWNTdwq0af6Alhi1S0VBUTXCZ0gmhi5uUXLFTCazrzna0q////////////LWF2EzC16gbXy1BeBKwHAaRaky8CQjHP///////////3BclW2GoaTmdl3WUyqmcKU0rgo8J0AIGDTYXBAoNQqbgMWYIM3OxGocEApFllSpuziDiT7YZ3OOIGEoDMQ1uNKkPppXmmTqC91eHTZlnAXBoQt7h8+zTV77un3ZoFwYFfXGHz7xtY+fhLqdGH4yI9D64/z/j/HzrKrTigZDTZ1enP8ZzXX3ukPH81soY4J9zfqxQRFG/tbNce2819PfGrY1vP1tkZHB+q46w81DvvX/+dYtv+2temK+tdf+//////////iRJnN/t48cHN/HeUr//////////X+FkbYVkxBTUUzLjEwMKqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqogRFNkLGm5OdVJyNgZlkABGM04zRmGGKgaqRmgMWXK01mRd4DI9CMjJIIgdJq1o6XGRkZEoShKdxcuXXOQRA6qORJPaLjJcTuOjKM5Ek9gOqNLjJc9q1bZk5JIknsBKEp06EoSjJ5k//vUZDOP9y51Nx9lgAJdYfbR5gwAAAABpAAAACAAADSAAAAExJvnIkk09iaXLuXGRkfPaytutMTE9dxcZVaMhKEo+hJINYyqJJNPeaXPYuMjIye05MXoTkxMXYCUJUR0JROPrrVq22nK1a7AZCU60ZGR97JJEl5KYmJ7E0ShKdOjI+XeycnvsnJ6t5o6MqtLly76rVvsrVrvWXLuaXLnv1laNAMqgiBEDpZoZCUJVCUDYSj7WVtdQEBErs2wEx7WCrhEoGjyzolBVwNKBo8VOlQVg0oGjxU6JQVg0oGjxU6JQViJQNP1hqIoNPWdEoaiKDT1nRKGuDX4int10RSO5dVMQU1FMy4xMDBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV';
function playEffect(file) {
  if (!state.sound) return;
  // Never interrupt or talk over music: effects are muted while a track is playing.
  if (music.el && !music.el.paused) return;
  try { const src = file === 'task-delete.mp3' ? TASK_DELETE_SOUND : asset('sound/' + file); const a = new Audio(src); a.volume = 0.55; a.play().catch(() => {}); } catch {}
}

/* ======================================================================
   Overlay manager — Escape always closes only the top-most layer
   ====================================================================== */
const openStack = [];
function openOverlay(el, focusSel) {
  if (!el) return;
  el._returnFocus = document.activeElement;
  if (!openStack.includes(el)) openStack.push(el);
  el.style.zIndex = String(100 + openStack.length);
  el.classList.add('show');
  overlayIntro(el);
  if (el.id === 'timerOverlay') document.body.classList.add('timer-open');
  el.setAttribute('aria-hidden', 'false');
  refreshLocalizedDateInputs();
  document.body.style.overflow = 'hidden';
  const target = focusSel ? el.querySelector(focusSel) : null;
  setTimeout(() => (target || el.querySelector('input,button'))?.focus({ preventScroll: true }), 60);
}
function closeOverlay(el) {
  if (!el || !el.classList.contains('show')) return;
  if (el.id === 'goalOverlay' && !state.goal.trim() && !localStorage.getItem('focusflow-goal-skipped')) { $('#goalInput').focus(); return; }
  el.classList.remove('show');
  if (el.id === 'timerOverlay') document.body.classList.remove('timer-open');
  el.setAttribute('aria-hidden', 'true');
  const i = openStack.indexOf(el); if (i > -1) openStack.splice(i, 1);
  if (!openStack.length) document.body.style.overflow = '';
  el._onClose?.(); el._onClose = null;
  el._returnFocus?.focus?.({ preventScroll: true });
}
$$('.overlay, .drawer-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o || e.target.closest('[data-close]')) closeOverlay(o); });
});

/* ======================================================================
   Toast
   ====================================================================== */
function toast(text, actionText, onAction) {
  const t = $('#toast');
  t.innerHTML = `<span>${esc(text)}</span>` + (actionText ? `<button type="button">${esc(actionText)}</button>` : '');
  if (actionText) t.querySelector('button').onclick = () => { hideToast(); onAction?.(); };
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(hideToast, actionText ? 5000 : 2300);
}
function hideToast() { $('#toast').classList.remove('show'); }

/* ======================================================================
   Confirm dialog
   ====================================================================== */
function confirmDialog({ title, text, ok = 'Delete' }) {
  return new Promise(resolve => {
    const o = $('#confirmOverlay');
    $('#confirmTitle').textContent = title;
    $('#confirmText').textContent = text;
    $('#confirmOk').textContent = ok;
    let result = false;
    $('#confirmOk').onclick = () => { result = true; closeOverlay(o); };
    $('#confirmCancel').onclick = () => closeOverlay(o);
    o._onClose = () => resolve(result);
    openOverlay(o, '#confirmCancel');
  });
}

/* ======================================================================
   Motion (GSAP) — task complete / task delete / focus-session celebration
   ====================================================================== */
const hasGSAP = typeof window.gsap !== 'undefined';
if (hasGSAP) {
  gsap.registerPlugin(...[window.Flip, window.Physics2DPlugin, window.CustomEase, window.CustomWiggle, window.DrawSVGPlugin, window.SplitText].filter(Boolean));
  if (window.CustomWiggle) CustomWiggle.create('ffWiggle', { wiggles: 7, type: 'easeOut' });
}
const reduceMotion = () => !hasGSAP || matchMedia('(prefers-reduced-motion: reduce)').matches;
const rand = (a, b) => a + Math.random() * (b - a);
const pick = arr => arr[Math.floor(Math.random() * arr.length)];
const cssVar = n => getComputedStyle(document.documentElement).getPropertyValue(n).trim();
const themeColors = () => ['--blue', '--blue-light', '--blue-dark', '--l2', '--l4', '--warning'].map(cssVar).filter(Boolean);
const fxLayer = $('#fxLayer');

/* one particle in the fixed FX layer, centred on (x, y) in viewport coords */
function spawn(x, y, w, h, color, round) {
  const p = document.createElement('i');
  p.style.cssText = `width:${w}px;height:${h}px;background:${color};border-radius:${round ? '50%' : '2px'}`;
  fxLayer.append(p);
  gsap.set(p, { x: x - w / 2, y: y - h / 2 });
  return p;
}

/* Physics-based confetti (Physics2DPlugin) in the active theme's colours */
function confetti({ x = innerWidth / 2, y = innerHeight * 0.4, count = 70, angle = -90, spread = 120, speed = [420, 900], gravity = 950, colors = themeColors() } = {}) {
  if (reduceMotion() || !window.Physics2DPlugin) return;
  const lite = isLite();
  if (lite) count = Math.round(count * 0.35);
  for (let i = 0; i < count; i++) {
    const round = Math.random() < 0.3, w = round ? rand(6, 9) : rand(6, 10), h = round ? w : rand(10, 16);
    const p = spawn(x, y, w, h, pick(colors), round);
    const dur = rand(1.7, 2.7);
    gsap.set(p, lite ? { rotation: rand(0, 360) } : { rotation: rand(0, 360), transformPerspective: 500 });
    gsap.to(p, {
      duration: dur, ease: 'none',
      physics2D: { velocity: rand(speed[0], speed[1]), angle: angle + rand(-spread / 2, spread / 2), gravity },
      rotation: `+=${rand(-540, 540)}`, ...(lite ? {} : { rotationX: `+=${rand(360, 1080)}` }),
      onComplete: () => p.remove()
    });
    gsap.to(p, { opacity: 0, duration: 0.5, delay: dur - 0.5 });
  }
}

/* Small radial burst + ripple (used on the checkbox) */
function burst(x, y, colors, n = 12) {
  if (reduceMotion()) return;
  if (isLite()) n = 6;
  const ring = spawn(x, y, 26, 26, 'transparent', true);
  ring.style.border = `2px solid ${colors[0]}`;
  gsap.fromTo(ring, { scale: 0.6, opacity: 0.9 }, { scale: 2.9, opacity: 0, duration: 0.6, ease: 'power2.out', onComplete: () => ring.remove() });
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + rand(-0.2, 0.2), d = rand(26, 50), s = rand(4, 7);
    const p = spawn(x, y, s, s, colors[i % colors.length], Math.random() < 0.6);
    gsap.to(p, { x: `+=${Math.cos(a) * d}`, y: `+=${Math.sin(a) * d}`, scale: 0, duration: rand(0.45, 0.75), ease: 'power3.out', onComplete: () => p.remove() });
  }
}

/* ---- 1) Task completed ------------------------------------------------ */
function animateComplete(row, task) {
  if (!hasGSAP || reduceMotion()) return;
  const box = row.querySelector('.check span'), tt = row.querySelector('.task-title .tt');
  row.style.animation = 'none';
  row.classList.add('fx-busy');
  const r = box.getBoundingClientRect();
  burst(r.left + r.width / 2, r.top + r.height / 2, [catColor(task.category), cssVar('--blue'), cssVar('--warning'), cssVar('--blue-light')]);
  const shine = document.createElement('span');
  shine.className = 'task-shine';
  row.append(shine);
  gsap.timeline({ onComplete: () => { shine.remove(); row.classList.remove('fx-busy'); gsap.set([row, box], { clearProps: 'transform' }); if (tt) gsap.set(tt, { clearProps: 'backgroundSize' }); } })
    .fromTo(box, { scale: 0.45 }, { scale: 1, duration: 0.65, ease: 'elastic.out(1.1,0.42)' }, 0)
    .fromTo(tt, { backgroundSize: '0% 2px' }, { backgroundSize: '100% 2px', duration: 0.4, ease: 'power2.inOut' }, 0.08)
    .fromTo(shine, { xPercent: -120 }, { xPercent: 260, duration: 0.75, ease: 'power2.inOut' }, 0)
    .to(row, { scale: 1.025, duration: 0.14, ease: 'power2.out' }, 0)
    .to(row, { scale: 1, duration: 0.55, ease: 'elastic.out(1,0.5)' }, 0.14);
}
function animateUncheck(row) {
  if (!hasGSAP || reduceMotion()) return;
  const tt = row.querySelector('.task-title .tt'), box = row.querySelector('.check span');
  if (tt) gsap.fromTo(tt, { backgroundSize: '100% 2px' }, { backgroundSize: '0% 2px', duration: 0.28, ease: 'power2.inOut', clearProps: 'backgroundSize' });
  gsap.fromTo(box, { scale: 0.8 }, { scale: 1, duration: 0.4, ease: 'back.out(3)', clearProps: 'transform' });
}

/* Re-render the home list and FLIP every row from its old position to the new one */
function flipRefresh() {
  const list = $('#taskList');
  const canFlip = hasGSAP && !reduceMotion() && window.Flip && state.page === 'home' && !list.hidden;
  const before = canFlip ? Flip.getState(list.querySelectorAll('[data-flip-id]')) : null;
  refreshAll();
  if (!before) return;
  Flip.from(before, {
    targets: list.querySelectorAll('[data-flip-id]'),
    duration: 0.6, ease: 'power3.inOut', toggleClass: 'flipping',
    onEnter: els => gsap.fromTo(els, { opacity: 0, scale: 0.88, y: -8 }, { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'back.out(1.8)', clearProps: 'opacity,transform' })
  });
}

/* ---- 2) Task deleted: shake → "disintegrate" into dust → collapse ------ */
function dust(row, colors) {
  const r = row.getBoundingClientRect(), n = isLite() ? Math.round(Math.min(24, Math.max(14, r.width / 16))) : Math.round(Math.min(80, Math.max(36, r.width / 5)));
  for (let i = 0; i < n; i++) {
    const t = i / n, s = rand(2.5, 6.5);
    const p = spawn(r.left + t * r.width + rand(-4, 4), r.top + rand(4, r.height - 4), s, s, pick(colors), Math.random() < 0.4);
    gsap.set(p, { opacity: 0 });
    gsap.timeline({ delay: Math.sqrt(t) * 0.55, onComplete: () => p.remove() })
      .set(p, { opacity: 1 })
      .to(p, { x: `+=${rand(30, 140)}`, y: `-=${rand(10, 85)}`, rotation: rand(-220, 220), scale: rand(0.2, 0.7), opacity: 0, duration: rand(0.6, 1.15), ease: 'power2.out' });
  }
}
function animateDelete(row, { delay = 0, color } = {}) {
  return new Promise(resolve => {
    if (!row || !row.isConnected) return resolve();
    if (!hasGSAP) { row.classList.add('removing'); return setTimeout(resolve, 200); }
    if (reduceMotion()) {
      if (!hasGSAP) { row.classList.add('removing'); return setTimeout(resolve, 200); }
      return gsap.to(row, { opacity: 0, duration: 0.2, delay, onComplete: resolve });
    }
    row.style.animation = 'none';
    row.style.pointerEvents = 'none';
    row.classList.add('fx-busy');
    const gap = parseFloat(getComputedStyle(row.parentNode).rowGap) || 0;
    const del = row.querySelector('.act.del');
    const tint = document.createElement('span');
    tint.className = 'task-tint';
    row.append(tint);
    const colors = [color || cssVar('--blue'), cssVar('--danger'), cssVar('--danger'), cssVar('--muted'), cssVar('--ink')];
    gsap.timeline({ delay, onComplete: resolve })
      .to(del, { rotation: 22, duration: 0.5, ease: window.CustomWiggle ? 'ffWiggle' : 'sine.inOut' }, 0)
      .to(tint, { opacity: 1, duration: 0.25, ease: 'power1.out' }, 0)
      .to(row, { x: -6, duration: 0.07, ease: 'power1.inOut', yoyo: true, repeat: 3 }, 0.05)
      .addLabel('dust', 0.42)
      .call(() => dust(row, colors), null, 'dust')
      .fromTo(row, { clipPath: 'inset(-16px -16px -16px -16px)' }, { clipPath: 'inset(-16px -16px -16px 100%)', duration: 0.55, ease: 'power1.in' }, 'dust')
      .to(row, { x: 16, duration: 0.55, ease: 'power1.in' }, 'dust')
      .to(row, { height: 0, paddingTop: 0, paddingBottom: 0, marginBottom: -gap, duration: 0.32, ease: 'power2.inOut' }, '-=0.06');
  });
}

/* ---- 3) Focus session finished: celebration dialog -------------------- */
let celTl = null, celIdle = null, celSplit = null;
let lastCelebration = null;
function refreshCelebrationLanguage() {
  if (!lastCelebration) return;
  if (appLanguage === 'fa' && celSplit) {
    if (window.gsap) gsap.killTweensOf(celSplit.chars);
    celSplit.revert();
    celSplit = null;
  }
  const { kind, minutes } = lastCelebration, isFocus = kind === 'focus';
  const minuteCount = localizeDigits(String(minutes));
  $('#celTitle').textContent = appLanguage === 'fa'
    ? (isFocus ? 'تمرکز به پایان رسید!' : 'استراحت تمام شد!')
    : (isFocus ? 'Focus complete!' : 'Break is over!');
  $('#celText').textContent = appLanguage === 'fa'
    ? (isFocus ? `به‌مدت ${minuteCount} دقیقه با تمرکز کار کردی. حالا کمی استراحت کن.` : 'حس بهتری داری؟ دوباره با تمرکز ادامه بده.')
    : (isFocus ? `You stayed focused for ${minutes} minute${minutes === 1 ? '' : 's'}. Time to recharge.` : 'Feeling refreshed? Let’s get back into the flow.');
  $('#celNext').textContent = appLanguage === 'fa'
    ? (isFocus ? 'شروع استراحت ۵ دقیقه‌ای' : 'شروع تمرکز · ۲۵ دقیقه')
    : (isFocus ? 'Start 5-min break' : 'Start focus · 25 min');
}
const fmtFocus = s => { const m = Math.round(s / 60); return m >= 60 ? `${Math.floor(m / 60)}h ${m % 60}m` : `${m}m`; };
function countUp(el, to, fmt = v => String(Math.round(v))) {
  const o = { v: 0 };
  return gsap.to(o, { v: to, duration: 1, ease: 'power2.out', onUpdate: () => (el.textContent = fmt(o.v)), onComplete: () => (el.textContent = fmt(to)) });
}
function showCelebration(kind, minutes) {
  const o = $('#celebrateOverlay'), isFocus = kind === 'focus';
  const k = keyDate(new Date()), sessions = state.sessions[k] || 0, todaySec = state.focus[k] || 0;
  celTl?.kill(); celIdle?.kill(); celSplit?.revert(); celSplit = null;
  o.classList.toggle('is-break', !isFocus);
  lastCelebration = { kind, minutes };
  refreshCelebrationLanguage();
  const mEl = $('#celMin'), sEl = $('#celSessions'), tEl = $('#celToday');
  mEl.textContent = minutes; sEl.textContent = sessions; tEl.textContent = fmtFocus(todaySec);
  $('#celDone').onclick = () => closeOverlay(o);
  $('#celNext').onclick = () => {
    closeOverlay(o);
    if (isFocus) setMode(5, 'break'); else setMode(25, 'focus');
    startTimer();
    openOverlay($('#timerOverlay'), '#timerToggle');
  };
  o._onClose = () => {
    celTl?.kill(); celIdle?.kill();
    if (hasGSAP) gsap.to(o.querySelector('.cel-card'), { scale: 0.94, y: 18, opacity: 0, duration: 0.22, ease: 'power2.in' });
  };
  openOverlay(o, '#celNext');
  playCelebration(o, isFocus, { minutes, sessions, todaySec });
}
function playCelebration(o, isFocus, { minutes, sessions, todaySec }) {
  const card = o.querySelector('.cel-card'), ring = o.querySelector('.cel-ring .prog'), core = o.querySelector('.cel-core');
  const check = o.querySelector('.cel-check path'), alt = o.querySelector('.cel-alt'), rays = o.querySelectorAll('.cel-rays i');
  const waves = o.querySelectorAll('.cel-wave'), text = $('#celText'), stats = o.querySelectorAll('.cel-stats > div'), actions = o.querySelectorAll('.cel-actions > button');
  if (!hasGSAP) return;
  if (reduceMotion()) { gsap.set(card, { clearProps: 'all' }); gsap.fromTo(card, { opacity: 0 }, { opacity: 1, duration: 0.3 }); return; }
  const title = $('#celTitle');
  celSplit = appLanguage !== 'fa' && window.SplitText ? new SplitText(title, { type: 'chars,words', charsClass: 'char' }) : null;
  const R1 = 46, R2 = 90, ang = i => (i * 30) * Math.PI / 180;
  const C = 2 * Math.PI * 54;
  celTl = gsap.timeline();
  celTl
    .fromTo(card, { y: 80, scale: 0.8, opacity: 0, rotationX: 14, transformPerspective: 800 }, { y: 0, scale: 1, opacity: 1, rotationX: 0, duration: 0.75, ease: 'back.out(1.5)' }, 0)
    .fromTo(ring, window.DrawSVGPlugin ? { drawSVG: '0%' } : { strokeDasharray: C, strokeDashoffset: C }, window.DrawSVGPlugin ? { drawSVG: '100%', duration: 1.05, ease: 'power2.inOut' } : { strokeDashoffset: 0, duration: 1.05, ease: 'power2.inOut' }, 0.15)
    .fromTo(core, { scale: 0, rotation: -120 }, { scale: 1, rotation: 0, duration: 0.95, ease: 'elastic.out(1,0.45)' }, 0.55);
  if (isFocus) celTl.fromTo(check, window.DrawSVGPlugin ? { drawSVG: '0%' } : { opacity: 0 }, window.DrawSVGPlugin ? { drawSVG: '100%', duration: 0.45, ease: 'power2.out' } : { opacity: 1, duration: 0.3 }, 0.9);
  else celTl.fromTo(alt, { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(3)' }, 0.85);
  celTl
    .fromTo(rays, { rotation: i => i * 30, x: i => Math.sin(ang(i)) * R1, y: i => -Math.cos(ang(i)) * R1, scaleY: 0.2, opacity: 1 },
                  { x: i => Math.sin(ang(i)) * R2, y: i => -Math.cos(ang(i)) * R2, scaleY: 1, duration: 0.45, ease: 'power3.out' }, 1.0)
    .to(rays, { opacity: 0, scaleY: 0.2, duration: 0.3, ease: 'power1.in' }, 1.3)
    .fromTo(waves, { scale: 0.8, opacity: 0.75 }, { scale: 2.2, opacity: 0, duration: 1.2, ease: 'power2.out', stagger: 0.22 }, 1.0)
    .call(() => {
      const b = core.getBoundingClientRect();
      confetti({ x: b.left + b.width / 2, y: b.top + b.height / 2, count: isFocus ? 90 : 45, spread: 160, speed: [450, 1000] });
    }, null, 1.0)
    .fromTo(celSplit ? celSplit.chars : title, { y: 26, opacity: 0, rotation: () => rand(-25, 25) }, { y: 0, opacity: 1, rotation: 0, duration: 0.55, ease: 'back.out(2.6)', stagger: 0.028 }, 0.7)
    .fromTo(text, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power2.out' }, 0.95)
    .fromTo(stats, { y: 20, opacity: 0, scale: 0.9 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.8)', stagger: 0.08 }, 1.05)
    .add(countUp($('#celMin'), minutes), 1.1)
    .add(countUp($('#celSessions'), sessions), 1.18)
    .add(countUp($('#celToday'), todaySec, v => fmtFocus(v)), 1.26)
    .fromTo(actions, { y: 14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.42, ease: 'power2.out', stagger: 0.07 }, 1.3)
    .call(() => {
      if (isFocus && !isLite()) {
        confetti({ x: -10, y: innerHeight * 0.75, angle: -60, spread: 40, count: 40, speed: [700, 1150] });
        confetti({ x: innerWidth + 10, y: innerHeight * 0.75, angle: -120, spread: 40, count: 40, speed: [700, 1150] });
      }
      celIdle = gsap.timeline({ repeat: -1, yoyo: true }).to(core, { y: -5, scale: 1.05, duration: 1.4, ease: 'sine.inOut' });
    }, null, 1.6);
}

/* ======================================================================
   Task actions
   ====================================================================== */
function setDone(task, done) {
  const completing = done && !task.done;
  task.done = done;
  if (completing && !task.completionSoundPlayed) { playEffect('Done-task-sound.mp3'); task.completionSoundPlayed = true; }
  save();
  if (completing) {
    const dayTasks = state.tasks.filter(t => t.date === task.date);
    if (dayTasks.length > 1 && dayTasks.every(t => t.done)) setTimeout(() => {
      toast('All tasks for this day are done 🎉');
      confetti({ x: -10, y: innerHeight * 0.8, angle: -62, spread: 36, count: 45, speed: [750, 1200] });
      confetti({ x: innerWidth + 10, y: innerHeight * 0.8, angle: -118, spread: 36, count: 45, speed: [750, 1200] });
    }, 420);
  }
  // let the completion animation play, then FLIP the row into its new place
  clearTimeout(setDone.timer);
  setDone.timer = setTimeout(flipRefresh, completing && !reduceMotion() ? 720 : 280);
}
function toggleStar(task) {
  task.starred = !task.starred;
  save(); refreshAll();
  toast(task.starred ? 'Marked as priority' : 'Priority removed');
}
async function deleteTask(task, rowEl) {
  const ok = await confirmDialog({ title: 'Delete task?', text: `“${task.title}” will be removed. You can undo right after.`, ok: 'Delete' });
  if (!ok) return;
  playEffect('task-delete.mp3');
  const index = state.tasks.findIndex(t => t.id === task.id);
  if (index < 0) return;
  const removed = state.tasks[index];
  const finish = () => {
    state.tasks = state.tasks.filter(t => t.id !== task.id);
    save(); refreshAll();
    toast('Task deleted', 'Undo', () => {
      if (!state.tasks.some(t => t.id === removed.id)) state.tasks.splice(Math.min(index, state.tasks.length), 0, removed);
      save(); flipRefresh(); toast('Task restored');
    });
  };
  if (rowEl && rowEl.isConnected) animateDelete(rowEl, { delay: 0.12, color: catColor(task.category) }).then(finish); else finish();
}

/* Task row component — shared by Home, Search and Stats lists */
function taskLevelBadge(value) {
  const urgency = normalizeUrgency(value), level = URGENCY[urgency];
  const bars = Array.from({length:4}, (_, index) => `<i class="${index <= level.rank ? 'filled' : ''}"></i>`).join('');
  return `<span class="task-level" data-urgency="${urgency}" aria-label="Urgency: ${level.label}" title="Urgency: ${level.label}"><span class="level-signal" aria-hidden="true">${bars}</span><span class="level-name" aria-hidden="true">${level.label}</span></span>`;
}

function taskRow(t, { showDate = false } = {}) {
  const row = document.createElement('div');
  row.className = 'task' + (t.done ? ' done' : '') + (t.starred ? ' starred' : '');
  row.style.setProperty('--cat', catColor(t.category));
  row.dataset.flipId = 't' + t.id;
  const dateLabel = showDate ? parseKey(t.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : '';
  row.innerHTML = `
    <label class="check" title="${t.done ? 'Mark as not done' : 'Mark as done'}">
      <input type="checkbox" ${t.done ? 'checked' : ''} aria-label="${t.done ? 'Mark as not done' : 'Mark as done'}: ${esc(t.title)}">
      <span><svg viewBox="0 0 24 24"><path d="M5 12.5l4.5 4.5L19 7.5"/></svg></span>
    </label>
    <div class="task-meta">
      <span class="task-title"><span class="tt">${esc(t.title)}</span></span>
      <div class="task-info"><span class="cat-pill">${esc(categoryDisplayName(t.category))}</span>${taskLevelBadge(t.urgency)}${dateLabel ? `<span>${esc(dateLabel)}</span>` : ''}</div>
    </div>
    <div class="task-actions">
      <button class="act star${t.starred ? ' on' : ''}" type="button" aria-pressed="${t.starred}" aria-label="${t.starred ? 'Remove priority' : 'Mark as priority'}" title="${t.starred ? 'Remove priority' : 'Mark as priority'}">${ic('star')}</button>
      <button class="act edit" type="button" aria-label="Edit task" title="Edit">${ic('edit')}</button>
      <button class="act del" type="button" aria-label="Delete task" title="Delete">${ic('trash')}</button>
    </div>`;
  row.querySelector('input').onchange = e => {
    const on = e.target.checked;
    row.classList.toggle('done', on);
    if (on && !t.done) animateComplete(row, t); else if (!on) animateUncheck(row);
    setDone(t, on);
  };
  row.querySelector('.star').onclick = () => toggleStar(t);
  row.querySelector('.edit').onclick = () => openTaskModal(t);
  row.querySelector('.del').onclick = () => deleteTask(t, row);
  return row;
}
const sortTasks = list => list.sort((a, b) =>
  (!!a.done - !!b.done) || (!!b.starred - !!a.starred) || (URGENCY[normalizeUrgency(b.urgency)].rank - URGENCY[normalizeUrgency(a.urgency)].rank) || ((b.id || 0) - (a.id || 0)));

/* ======================================================================
   Home
   ====================================================================== */
function dayStats(key) {
  const list = state.tasks.filter(t => t.date === key);
  return { total: list.length, done: list.filter(t => t.done).length };
}
function dayHasPlans(key) { try { return planner.entries.some(p => p.date === key); } catch { return false; } }

function renderDates(behavior = 'auto') {
  const root = $('#dateStrip');
  root.innerHTML = '';
  const start = noon(state.selected); start.setDate(start.getDate() - 30);
  const todayKey = keyDate(new Date()), selKey = keyDate(state.selected);
  const frag = document.createDocumentFragment();
  for (let i = 0; i < 61; i++) {
    const d = new Date(start); d.setDate(start.getDate() + i);
    const k = keyDate(d), s = dayStats(k);
    const b = document.createElement('button');
    b.type = 'button';
    const hasItems = s.total > 0 || dayHasPlans(k);
    b.className = 'day' + (k === selKey ? ' active' : '') + (k === todayKey ? ' today' : '') + (hasItems ? ' has-task' : '') + (s.total && s.done === s.total ? ' all-done' : '');
    b.dataset.date = k;
    b.setAttribute('aria-pressed', String(k === selKey));
    b.setAttribute('aria-label',d.toLocaleDateString('en-US',{weekday:'long',month:'long',day:'numeric'})+(s.total?(appLanguage==='fa'?`، ${new Intl.NumberFormat('fa-IR').format(s.done)} از ${new Intl.NumberFormat('fa-IR').format(s.total)} انجام‌شده`:`; ${s.done} of ${s.total} done`):''));
    b.innerHTML = `<small>${d.toLocaleDateString('en-US', { weekday: 'short' })}</small><b>${calendarDayNumber(d)}</b><i></i>`;
    b.onclick = () => selectDate(d, 'smooth');
    frag.append(b);
  }
  root.append(frag);
  requestAnimationFrame(() => centerSelectedDate(behavior));
}
function centerSelectedDate(behavior='smooth'){
  const btn=$('#dateStrip').querySelector('.day.active');
  if(btn)btn.scrollIntoView({behavior,block:'nearest',inline:'center'});
}
function selectDate(d, behavior = 'auto') {
  const prev = keyDate(state.selected);
  state.selected = noon(d);
  state.month = new Date(d.getFullYear(), d.getMonth(), 1);
  const k = keyDate(state.selected);
  const existing = $(`#dateStrip .day[data-date="${k}"]`);
  // Only rebuild the strip when the new date is near its edge
  const idx = existing ? [...existing.parentNode.children].indexOf(existing) : -1;
  if (idx < 7 || idx > 53) renderDates(behavior);
  else {
    $$('#dateStrip .day').forEach(b => { const on = b.dataset.date === k; b.classList.toggle('active', on); b.setAttribute('aria-pressed', String(on)); });
    centerSelectedDate(behavior);
  }
  if (prev !== k) { renderTags(); renderTasks(true); }
}

function renderTags() {
  const root = $('#tagStrip');
  const previousScroll = tagScrollPosition(root);
  root.innerHTML = '';
  const key = keyDate(state.selected);
  const dayTasks = state.tasks.filter(t => t.date === key && !t.done);
  const categoryCounts = new Map(CATEGORIES.map(category => [category.name, 0]));
  for(const task of dayTasks){const category=normalizeCategory(task.category);categoryCounts.set(category,(categoryCounts.get(category)||0)+1);}
  const persian = appLanguage === 'fa' || String(document.documentElement.lang || '').toLowerCase().startsWith('fa');
  [{ name: 'All', icon: 'grid', color: '' }, ...CATEGORIES].forEach(c => {
    const count = c.name === 'All' ? dayTasks.length : categoryCounts.get(c.name)||0;
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'tag' + (state.category === c.name ? ' active' : '');
    if (c.color) b.style.setProperty('--cat', c.color);
    b.setAttribute('aria-pressed', String(state.category === c.name));
    const categoryLabel = c.name === 'All' ? (persian ? 'همه' : 'ALL') : (persian ? (CATEGORY_LABEL_FA[c.name] || categoryDisplayName(c.name)) : c.name);
    b.setAttribute('aria-label', categoryLabel);
    b.innerHTML = `${ic(c.icon)}<span>${categoryLabel}</span>${count ? `<span class="count">${count}</span>` : ''}`;
    b.onclick = () => { state.category = c.name; renderTags(); renderTasks(true); };
    root.append(b);
  });
  setTagScrollPosition(root, previousScroll);
  updateTagScrollState();
}

// Desktop mouse-wheel, pointer drag, arrows and keyboard scrolling. Native
// touch scrolling and all phone styles are intentionally unchanged.
function tagScrollPosition(el) { const raw = el.scrollLeft; return getComputedStyle(el).direction === 'rtl' ? Math.max(0, -raw) : Math.max(0, raw); }
function setTagScrollPosition(el, value) { const normalized = Math.max(0, Number(value) || 0); el.scrollTo({left:getComputedStyle(el).direction === 'rtl' ? -normalized : normalized, behavior:'auto'}); }
function updateTagScrollState() { const el = $('#tagStrip'); const maximum = Math.max(0, el.scrollWidth - el.clientWidth); const slider = $('#tagScrollRange'); const position = Math.min(maximum, tagScrollPosition(el)); slider.min = '0'; slider.max = String(Math.max(1, maximum)); slider.value = String(Math.round(position)); slider.disabled = maximum <= 1; slider.setAttribute('aria-valuetext', `${maximum ? Math.round(position / maximum * 100) : 0}% of categories`); }
$('#tagStrip').addEventListener('scroll', updateTagScrollState, {passive:true}); $('#tagScrollRange').addEventListener('input', e => { setTagScrollPosition($('#tagStrip'), e.target.value); updateTagScrollState(); });
if (window.ResizeObserver) new ResizeObserver(updateTagScrollState).observe($('#tagStrip'));
['#tagStrip', '#dateStrip'].forEach(selector => {
  const el = $(selector);
  let drag = null, suppressClick = false;
  el.addEventListener('wheel', e => {
    if (!desktopLayout.matches || e.ctrlKey || e.metaKey) return;
    const delta = (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY) * (e.deltaMode === 1 ? 24 : e.deltaMode === 2 ? el.clientWidth : 1);
    const canScroll = delta < 0 ? el.scrollLeft > 0 : el.scrollLeft < el.scrollWidth - el.clientWidth - 1;
    if (canScroll) { e.preventDefault(); el.scrollLeft += delta; }
  }, {passive:false});
  el.addEventListener('pointerdown', e => {
    if (!desktopLayout.matches || e.pointerType !== 'mouse' || e.button !== 0) return;
    suppressClick = false;
    drag = {id:e.pointerId, x:e.clientX, left:el.scrollLeft, moved:false};
  });
  el.addEventListener('pointermove', e => {
    if (!drag || drag.id !== e.pointerId) return;
    if (Math.abs(e.clientX - drag.x) > 5) {
      drag.moved = true;
      el.setPointerCapture(e.pointerId);
      el.classList.add('dragging');
      el.scrollLeft = drag.left - (e.clientX - drag.x);
      e.preventDefault();
    }
  });
  function endDrag(e) {
    if (!drag) return;
    suppressClick = drag.moved;
    drag = null;
    el.classList.remove('dragging');
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId);
  }
  el.addEventListener('pointerup', endDrag);
  el.addEventListener('pointercancel', endDrag);
  el.addEventListener('pointerleave', e => { if (drag && !drag.moved) drag = null; });
  el.addEventListener('click', e => { if (suppressClick) { e.preventDefault(); e.stopImmediatePropagation(); suppressClick = false; } }, true);
  el.addEventListener('keydown', e => {
    if (!desktopLayout.matches || !['ArrowLeft','ArrowRight','Home','End'].includes(e.key)) return;
    e.preventDefault(); e.stopPropagation();
    const amount = e.key === 'Home' ? -el.scrollWidth : e.key === 'End' ? el.scrollWidth : e.key === 'ArrowLeft' ? -180 : 180;
    el.scrollBy({left:amount, behavior:reduceMotion() ? 'auto' : 'smooth'});
  });
});

function renderDayHeader() {
  const sel = state.selected, today = noon(new Date());
  const diff = Math.round((sel - today) / 864e5);
  const rel = diff === 0 ? 'Today' : diff === 1 ? 'Tomorrow' : diff === -1 ? 'Yesterday' : sel.toLocaleDateString('en-US', { weekday: 'long' });
  const dateText = sel.toLocaleDateString('en-US', { month: 'short', day: 'numeric', ...(sel.getFullYear() !== today.getFullYear() ? { year: 'numeric' } : {}) });
  $('#dayTitle').innerHTML = `${esc(rel)} <span>${esc(dateText)}</span>`;
  $('#todayChip').hidden = diff === 0;
}

function emptyArtKey() {
  const k = state.category !== 'All' ? CAT[state.category].art : 'back svg/Notaskfound-svg.svg';
  return assetRaw(k) ? k : 'back svg/no task found 2 -svg.svg';
}
function renderTasks(animate = false) {
  renderDayHeader();
  const key = keyDate(state.selected);
  const tasks = sortTasks(state.tasks.filter(t => t.date === key && (state.category === 'All' || normalizeCategory(t.category) === state.category)));
  const list = $('#taskList');
  list.innerHTML = '';
  const open = tasks.filter(t => !t.done), done = tasks.filter(t => t.done);
  open.forEach(t => list.append(taskRow(t)));
  if (done.length) {
    if (open.length) { const l = document.createElement('div'); l.className = 'list-label'; l.dataset.flipId = 'done-label'; l.textContent = `Completed · ${done.length}`; list.append(l); }
    done.forEach(t => list.append(taskRow(t)));
  }
  if (!animate || hasGSAP) list.querySelectorAll('.task').forEach(r => (r.style.animation = 'none'));
  if (artFloat) tasks.length ? artFloat.pause() : artFloat.resume();
  if (animate && tasks.length && hasGSAP && !reduceMotion()) gsap.fromTo(list.querySelectorAll('.task, .list-label'), { y: 16, opacity: 0 }, { y: 0, opacity: rowOpacity, duration: 0.42, ease: 'power3.out', stagger: 0.05, clearProps: 'transform,opacity' });

  const empty = $('#emptyState');
  empty.hidden = tasks.length > 0;
  list.hidden = tasks.length === 0;
  if (!tasks.length) {
    const isCat = state.category !== 'All';
    $('#emptyArt').dataset.key = emptyArtKey();
    updateEmptyArt();
    if (animate && hasGSAP && !reduceMotion()) gsap.fromTo('#emptyState > *', { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.6)', stagger: 0.07, clearProps: 'y,opacity' });
    $('#emptyTitle').textContent = isCat ? `No ${state.category.toLowerCase()} tasks` : 'No task added';
    $('#emptyText').textContent = isCat ? `Nothing in ${state.category} for this day yet.` : 'Tap the + button to add your first task and start your focus journey.';
  }
}

function getStreak() {
  const days = new Set(state.tasks.filter(t => t.done).map(t => t.date));
  const c = noon(new Date());
  if (!days.has(keyDate(c))) c.setDate(c.getDate() - 1);
  let n = 0;
  while (days.has(keyDate(c)) && n < 3660) { n++; c.setDate(c.getDate() - 1); }
  return n;
}
function updateStreak() {
  const n = getStreak();
  $('#streak').hidden = n < 1;
  $('#streakCount').textContent = n;
  $('#streak').title = `${n}-day streak`;
}

/* ======================================================================
   Add / edit task
   ====================================================================== */
(function buildCategoryChips() {
  $('#taskCategory').innerHTML = CATEGORIES.map(c =>
    `<label style="--cat:${c.color}"><input type="radio" name="taskCat" value="${c.name}"><span>${c.name}</span></label>`).join('');
})();
function openTaskModal(task = null, presetDate = null) {
  const editing = !!task;
  $('#taskModalTitle').textContent = editing ? 'Edit task' : 'Add task';
  $('#taskSubmit').textContent = editing ? 'Update task' : 'Save task';
  $('#taskEditId').value = editing ? String(task.id) : '';
  $('#taskTitle').value = editing ? task.title : '';
  $('#taskDate').value = editing ? task.date : (presetDate || keyDate(state.selected));
  $('#taskStarred').checked = editing ? !!task.starred : false;
  $('#taskUrgency').value = editing ? normalizeUrgency(task.urgency) : 'normal';
  const cat = editing ? normalizeCategory(task.category) : (state.category !== 'All' ? state.category : 'Work');
  $$('input[name="taskCat"]').forEach(r => (r.checked = r.value === cat));
  openOverlay($('#taskOverlay'), '#taskTitle');
}
$('#taskForm').onsubmit = e => {
  e.preventDefault();
  const title = $('#taskTitle').value.trim();
  if (!title) { $('#taskTitle').focus(); return; }
  const category = $('input[name="taskCat"]:checked')?.value || 'Work';
  const date = /^\d{4}-\d{2}-\d{2}$/.test($('#taskDate').value) ? $('#taskDate').value : keyDate(state.selected);
  const starred = $('#taskStarred').checked;
  const urgency = normalizeUrgency($('#taskUrgency').value);
  const editId = $('#taskEditId').value;
  if (editId) {
    const t = state.tasks.find(x => String(x.id) === editId);
    if (t) Object.assign(t, { title, category, date, starred, urgency });
    toast('Task updated');
  } else {
    state.tasks.push({ id: Date.now(), title, category, date, done: false, starred, urgency, completionSoundPlayed: false });
    playEffect('Add-task -confrim-button-sound.mp3');
    toast('Task added');
  }
  save();
  closeOverlay($('#taskOverlay'));
  if (state.page === 'home' && date !== keyDate(state.selected)) selectDate(parseKey(date), 'smooth');
  refreshAll();
};

function handleAdd() {
  if(state.page==='bonfire' && typeof window.bonfireAddPrompt==='function') return window.bonfireAddPrompt();
  if(state.page==='progress' || state.page==='stats') { showPage('calendar'); return; }
  if(state.page==='finance'||(state.page==='planner'&&planner.view==='finance'))return openFinanceTransactionEditor();
  if(state.page==='planner')return openPlannerModal();
  if(state.page==='home')return openTaskModal();
  if (state.page !== 'calendar') showPage('calendar');
  state.pendingAddFromCalendar = true;
  renderCalendar();
  toast('Tap a day to add your task there');
}
$('#addBtn').onclick = handleAdd;
$('#emptyAdd').onclick = () => openTaskModal();
$('#todayChip').onclick = () => selectDate(new Date(), 'smooth');

/* ======================================================================
   Navigation
   ====================================================================== */
function updateAddButtonContext(){const finance=state.page==='finance'||(state.page==='planner'&&planner.view==='finance'),inPlanner=state.page==='planner'&&!finance,home=state.page==='home',progress=state.page==='progress'||state.page==='stats',bonfire=state.page==='bonfire';const label=bonfire?(appLanguage==='fa'?'افزودن پرامپت':'Add prompt'):finance?(appLanguage==='fa'?'افزودن تراکنش':'Add transaction'):inPlanner?(appLanguage==='fa'?'افزودن پلن':'Add plan'):home?(appLanguage==='fa'?'افزودن کار':'Add task'):progress?(appLanguage==='fa'?'رفتن به تقویم':'Go to Calendar'):(appLanguage==='fa'?'انتخاب روز':'Choose a day');$('#addBtn .desktop-nav-label').textContent=label;const aria=label;$('#addBtn').setAttribute('aria-label',aria);$('#addBtn').title=aria;}
window.showPage = function showPage(name) {
  window.showPage = showPage;
  if(name==='finance'&&!financeAccessGranted){requestFinanceAccess('page');return;}
  if(name==='planner'&&planner.view==='finance'&&!financeAccessGranted){requestFinanceAccess('planner');return;}
  if((state.page==='finance'&&name!=='finance')||(state.page==='planner'&&planner.view==='finance'&&name!=='planner')){if(planner.view==='finance'){planner.view=planner.returnView||'charts';planner.returnView=null;store.set(KEYS.plannerView,planner.view);renderPlanner();}}
  state.page = name;
  $$('.page').forEach(p => p.classList.toggle('active', p.id === name + 'Page'));
  const navName = name === 'stats' ? 'progress' : name === 'player' ? 'music' : name;
  $$('.navbtn').forEach(b => { const on = b.dataset.page === navName; b.classList.toggle('active', on); b.setAttribute('aria-current', on ? 'page' : 'false'); });
  if (name !== 'calendar') state.pendingAddFromCalendar = false;
  updateAddButtonContext();
  if(name==='planner')renderPlanner(true);
  if (name === 'home') { renderTasks(); if (desktopLayout.matches) renderHomeSummary(); }
  if (name === 'calendar') renderCalendar();
  if (name === 'progress') renderProgress();
  if (name === 'stats') renderStats();
  if (name === 'music' || name === 'player') renderMusic();
  if (name === 'finance') renderFinance();
  updateMusicUI();
  window.scrollTo(0, 0);
  animatePage(name);
}
$$('.navbtn').forEach(b => (b.onclick = () => showPage(b.dataset.page)));

/* ======================================================================
   Calendar
   ====================================================================== */
let calBgCache = null;
function calBgList() {
  if (calBgCache) return calBgCache;
  let list = $$('script[type="text/x-ff-asset"]').filter(e => e.dataset.key.startsWith('back calender image/'));
  if (isLite()) { const light = list.filter(e => Number(e.dataset.bytes || 0) < 75000); if (light.length) list = light; }
  return (calBgCache = list.map(e => e.dataset.key));
}
function renderCalendarMonth(month, gridId, cardId, titleId) {
  const monthStart=calendarMonthStart(month),monthParts=appLanguage==='fa'?jalaliParts(monthStart):null;
  const y=monthStart.getFullYear(),m=monthStart.getMonth(),bgs=calBgList();
  if(bgs.length){const key=bgs[((y*12+m)%bgs.length+bgs.length)%bgs.length],card=$(cardId);if(card.dataset.bg!=='__disabled__'&&card.dataset.bg!==key){card.style.backgroundImage=`url("${assetRaw(key)}")`;card.dataset.bg=key;}}
  $(titleId).textContent=monthStart.toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{month:'long',year:'numeric'});
  const offset=appLanguage==='fa'?(monthStart.getDay()+1)%7:monthStart.getDay(),root=$(gridId);root.innerHTML='';
  const todayKey=keyDate(new Date()),selKey=keyDate(state.selected);
  for(let i=0;i<42;i++){
    const d=noon(monthStart);d.setDate(monthStart.getDate()+i-offset);const k=keyDate(d),stats=dayStats(k),sameMonth=appLanguage==='fa'?(jalaliParts(d).year===monthParts.year&&jalaliParts(d).month===monthParts.month):(d.getMonth()===m&&d.getFullYear()===y);
    const hasItems=stats.total>0||dayHasPlans(k),b=document.createElement('button');b.type='button';b.className='calday'+(!sameMonth?' muted':'')+(k===selKey?' selected':'')+(k===todayKey?' today':'')+(hasItems?' has-task':'')+(stats.total&&stats.done===stats.total?' all-done':'');b.textContent=calendarDayNumber(d);b.dataset.date=k;b.setAttribute('aria-pressed',String(k===selKey));if(k===todayKey)b.setAttribute('aria-current','date');
    b.setAttribute('aria-label',d.toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{weekday:'long',month:'long',day:'numeric',year:'numeric'})+(stats.total?(appLanguage==='fa'?`، ${stats.total} کار`:`, ${stats.total} tasks`):''));
    b.onclick=()=>{const addAfter=state.pendingAddFromCalendar;state.pendingAddFromCalendar=false;if(desktopLayout.matches){const anchorMonth=state.month;selectDate(d,'auto');state.month=anchorMonth;renderCalendar();}else{selectDate(d,'auto');showPage('home');}if(addAfter)requestAnimationFrame(()=>openTaskModal(null,k));};root.append(b);
  }
  const card=$(cardId),now=new Date(),todayParts=appLanguage==='fa'?jalaliParts(now):null;
  card.dataset.currentMonth=String(appLanguage==='fa'?monthParts.year===todayParts.year&&monthParts.month===todayParts.month:y===now.getFullYear()&&m===now.getMonth());
  let summary=card.querySelector('.month-summary');if(!summary){summary=document.createElement('div');summary.className='month-summary';card.append(summary);}
  const monthTasks=state.tasks.filter(t=>{const date=parseKey(t.date);if(appLanguage==='fa'){const parts=jalaliParts(date);return parts.year===monthParts.year&&parts.month===monthParts.month;}return t.date.startsWith(keyDate(monthStart).slice(0,7));});
  const completed=monthTasks.filter(t=>t.done).length;summary.innerHTML=`<strong>${monthTasks.length} task${monthTasks.length===1?'':'s'}</strong><span>${completed} completed</span>`;
}
function renderCalendarAgenda() {
  const key = keyDate(state.selected);
  $('#agendaDate').textContent = state.selected.toLocaleDateString('en-US', {weekday:'long', month:'short', day:'numeric', year:'numeric'});
  const root = $('#agendaTasks');
  root.replaceChildren();
  const tasks = sortTasks(state.tasks.filter(t => t.date === key));
  if (tasks.length) tasks.forEach(t => { const row = taskRow(t); row.style.animation = 'none'; root.append(row); });
  else root.innerHTML = '<p class="agenda-empty">Nothing scheduled for this date. Add a task to plan your day.</p>';
}
$('#agendaAdd').onclick = () => openTaskModal(null, keyDate(state.selected));
$('#agendaOpenHome').onclick = () => { state.category = 'All'; renderTags(); showPage('home'); };

function renderCalendar() {
  renderCalendarMonth(state.month, '#calendarGrid', '#calendarCard', '#monthTitle');
  if (desktopLayout.matches) {
    const y = state.month.getFullYear(), m = state.month.getMonth();
    const previous = shiftCalendarMonth(state.month,-1), following = shiftCalendarMonth(state.month,1);
    renderCalendarMonth(previous, '#previousMonthGrid', '#previousMonthCard', '#previousMonthTitle');
    renderCalendarMonth(following, '#followingMonthGrid', '#followingMonthCard', '#followingMonthTitle');
    const fmt = date => date.toLocaleDateString('en-US', {month:'short', year:'numeric'});
    $('#calendarRange').textContent = `${fmt(previous)} — ${fmt(following)}`;
    renderCalendarAgenda();
    $('#desktopCalHint').textContent = state.pendingAddFromCalendar ? 'Select a date in any month to add a task' : 'Select a date to see its tasks · Dots mark scheduled tasks';
  }
  if (tabletLayout.matches) renderCalendarAgenda();
  $('#calHint').textContent = state.pendingAddFromCalendar ? 'Tap a day to add a task on it' : 'Swipe to change month · tap a day to open it';
}
let lastSwap = 0;
function changeMonth(step) {
  state.month = shiftCalendarMonth(state.month,step);
  if (Date.now() - lastSwap > 500) { playEffect('swap-month.mp3'); lastSwap = Date.now(); }
  renderCalendar();
  animateMonthSwap(step);
}
$('#prevMonth').onclick = () => changeMonth(-1);
$('#nextMonth').onclick = () => changeMonth(1);
$('#prevQuarter').onclick = () => changeMonth(-3);
$('#nextQuarter').onclick = () => changeMonth(3);
$('#calendarToday').onclick = () => {
  const now = new Date();
  selectDate(now, 'auto');
  renderCalendar();
};
(() => {
  let sx = 0, sy = 0;
  const g = $('#calendarGrid');
  g.addEventListener('touchstart', e => { sx = e.changedTouches[0].clientX; sy = e.changedTouches[0].clientY; }, { passive: true });
  g.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if (Math.abs(dx) > 45 && Math.abs(dx) > Math.abs(dy) * 1.25) changeMonth(dx < 0 ? 1 : -1);
  }, { passive: true });
})();

/* ======================================================================
   Progress
   ====================================================================== */
const focusSecs = k => Math.max(0, Number(state.focus[k]) || 0);

// Move the same cards, rather than duplicating IDs or event handlers. Comment
// anchors restore their exact original positions when returning to mobile.
const desktopLayout = matchMedia('(min-width:1024px)');
const tabletLayout = matchMedia('(min-width:768px) and (max-width:1023px)');
// Reuse one navigation and one add button so handlers, focus and IDs stay intact.
const mainNavigation = document.querySelector('body > nav.bottomnav[aria-label="Main navigation"]');
const navigationMobileAnchor = document.createComment('Original phone navigation position');
mainNavigation.before(navigationMobileAnchor);
const addMobileAnchor = document.createComment('Original phone add-button position');
$('#addBtn').before(addMobileAnchor);
function syncDesktopNavigation() {
  const plannerNav=$('.navbtn[data-page=planner]'),musicNav=$('.navbtn[data-page=music]');
  if(desktopLayout.matches){
    $('.topbar').after(mainNavigation);
    mainNavigation.append($('#addBtn'));
    mainNavigation.insertBefore(musicNav,plannerNav);
    musicNav.after(plannerNav);
  }else{
    navigationMobileAnchor.after(mainNavigation);
    // Phone navigation: Home, Calendar, Add, Progress, Planner. Music belongs in the hamburger menu.
    mainNavigation.insertBefore($('#addBtn'),$('.navbtn[data-page=progress]'));
    mainNavigation.append(plannerNav);
    const drawerMusic = document.querySelector('#musicOpen, #musicOpenMenu, .menu-item[data-page=music]');
    if (drawerMusic) musicNav.remove();
    else $('#menuBtn').after(musicNav);
  }
}

const homeSummaryCards = ['.goal-card', '.today-card'].map(selector => {
  const card = $('#progressPage ' + selector);
  const anchor = document.createComment('Original mobile card position');
  card.before(anchor);
  return { card, anchor };
});
function renderHomeSummary() {
  renderTodayCard();
  $('#goalText').textContent = state.goal || 'Set a goal that matters to you';
}
function syncHomeLayout() {
  syncDesktopNavigation();
  homeSummaryCards.forEach(({card, anchor}) => {
    if (desktopLayout.matches) $('#desktopHomeSummary').append(card);
    else anchor.after(card);
  });
  renderHomeSummary();
  if (state.page === 'calendar') renderCalendar();
  if (state.page === 'progress') renderProgress();
  ['#tagStrip','#dateStrip'].forEach(selector => {
    if (desktopLayout.matches) $(selector).setAttribute('tabindex', '0');
    else $(selector).removeAttribute('tabindex');
  });
  if (!desktopLayout.matches) closeDesktopSearch();
  if (state.page === 'planner' && planner.view === 'week') requestAnimationFrame(() => focusPlannerDay(planner.activeDay, 'auto'));
  requestAnimationFrame(() => { centerSelectedDate('auto'); updateTagScrollState(); });
}
desktopLayout.addEventListener('change', syncHomeLayout);
tabletLayout.addEventListener('change', () => { if (state.page === 'calendar') renderCalendar(); });

function renderTodayCard() {
  const k = keyDate(new Date());
  const list = state.tasks.filter(t => t.date === k);
  const done = list.filter(t => t.done).length, total = list.length;
  const pct = total ? Math.round(done / total * 100) : 0;
  $('#todayRing').style.setProperty('--p', pct);
  $('#todayPct').textContent = pct + '%';
  $('#todayText').textContent = total ? (done === total ? `All ${total} tasks done — great job!` : `${done} of ${total} done · ${total - done} left`) : 'No tasks for today yet';
  $('#todayBar').style.width = pct + '%';
  const prio = list.filter(t => t.starred && !t.done).length;
  const mins = Math.round(focusSecs(k) / 60);
  $('#todayChips').innerHTML = [prio ? `★ ${prio} priority left` : '', mins ? `${mins} min focused` : '', state.sessions[k] ? `${state.sessions[k]} sessions` : ''].filter(Boolean).map(x => `<span>${esc(x)}</span>`).join('');
}

function renderProgress() {
  renderTodayCard();
  const total = state.tasks.length, done = state.tasks.filter(t => t.done).length;
  const pct = total ? Math.round(done / total * 100) : 0;
  $('#percent').textContent = pct + '%';
  $('#ring').style.setProperty('--p', pct);
  $('#totalMetric').textContent = total;
  $('#completedMetric').textContent = done;
  $('#remainingMetric').textContent = total - done;
  $('#goalText').textContent = state.goal || 'Set a goal that matters to you';
  renderFocusChart();
  renderHeatmap();
  renderCategoryStats();
}

function renderFocusChart() {
  const now = noon(new Date());
  const pts = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(now); d.setDate(now.getDate() - i);
    const k = keyDate(d);
    pts.push({ k, d, min: Math.round(focusSecs(k) / 60) });
  }
  const totalMin = Math.round(pts.reduce((s, p) => s + focusSecs(p.k), 0) / 60);
  $('#focusWeekTotal').textContent = totalMin >= 60 ? `${Math.floor(totalMin / 60)}h ${totalMin % 60}m this week` : `${totalMin} min this week`;
  const W = desktopLayout.matches ? 560 : 340, H = 190, L = 30, R = W - (desktopLayout.matches ? 24 : 10), T = 20, B = 150;
  const maxV = Math.max(30, Math.ceil(Math.max(...pts.map(p => p.min)) / 30) * 30);
  const x = i => L + i * (R - L) / 6, y = v => B - v / maxV * (B - T);
  const P = pts.map((p, i) => ({ ...p, x: x(i), y: y(p.min) }));
  // smooth (monotone-ish) curve
  let line = `M${P[0].x},${P[0].y}`;
  for (let i = 1; i < P.length; i++) {
    const a = P[i - 1], b = P[i], cx = (a.x + b.x) / 2;
    line += ` C${cx},${a.y} ${cx},${b.y} ${b.x},${b.y}`;
  }
  const grid = [0, maxV / 2, maxV].map(v => `<line class="grid" x1="${L}" x2="${R}" y1="${y(v)}" y2="${y(v)}"/><text class="axis" x="${L - 6}" y="${y(v) + 3.5}" text-anchor="end">${Math.round(v)}</text>`).join('');
  const dots = P.map((p, i) => `<circle class="pt${i === 6 ? ' today' : ''}" cx="${p.x}" cy="${p.y}" r="${i === 6 ? 5 : 4}"><title>${p.d.toLocaleDateString('en-US', { weekday: 'long' })}: ${p.min} min</title></circle>${p.min ? `<text class="val" x="${p.x}" y="${p.y - 10}" text-anchor="middle">${p.min}</text>` : ''}`).join('');
  const labels = P.map((p, i) => `<text class="axis" x="${p.x}" y="168" text-anchor="middle" ${i === 6 ? 'style="fill:var(--blue);font-weight:800"' : ''}>${i === 6 ? (appLanguage === 'fa' ? 'امروز' : 'Today') : p.d.toLocaleDateString('en-US', { weekday: 'short' })}</text><text class="axis" x="${p.x}" y="182" text-anchor="middle">${calendarDayNumber(p.d)}</text>`).join('');
  $('#focusChart').innerHTML = `<svg viewBox="0 0 ${W} ${H}"><defs><linearGradient id="fg" x1="0" x2="0" y1="0" y2="1"><stop offset="0" style="stop-color:var(--blue)" stop-opacity=".28"/><stop offset="1" style="stop-color:var(--blue)" stop-opacity="0"/></linearGradient></defs>${grid}<path d="${line} L${R},${B} L${L},${B} Z" fill="url(#fg)"/><path class="line" d="${line}"/>${dots}${labels}</svg>`;
}

function renderHeatmap() {
  const WEEKS = 18;
  const root = $('#heatmap');
  root.innerHTML = '';
  const today = noon(new Date());
  const start = new Date(today); start.setDate(today.getDate() - today.getDay() - (WEEKS - 1) * 7);
  const doneByDay = {};
  state.tasks.forEach(t => { if (t.done) doneByDay[t.date] = (doneByDay[t.date] || 0) + 1; });
  root.style.gridTemplateColumns = desktopLayout.matches ? `repeat(${WEEKS}, 20px)` : `repeat(${WEEKS}, minmax(12px, 1fr))`;
  const frag = document.createDocumentFragment();
  let lastMonth = -1;
  for (let w = 0; w < WEEKS; w++) {
    const weekStart = new Date(start); weekStart.setDate(start.getDate() + w * 7);
    const label = document.createElement('span');
    label.className = 'hm-month';
    label.style.gridColumn = String(w + 1);
    if ((w === 0 && weekStart.getDate() <= 21) || (w > 0 && weekStart.getMonth() !== lastMonth && weekStart.getDate() <= 7)) {
      label.textContent = weekStart.toLocaleDateString('en-US', { month: 'short' });
      lastMonth = weekStart.getMonth();
    }
    frag.append(label);
    for (let d = 0; d < 7; d++) {
      const day = new Date(weekStart); day.setDate(weekStart.getDate() + d);
      const k = keyDate(day);
      const c = document.createElement('span');
      c.style.gridColumn = String(w + 1);
      c.style.gridRow = String(d + 2);
      const done = doneByDay[k] || 0, min = Math.round(focusSecs(k) / 60);
      const act = done + Math.ceil(min / 15);
      const lvl = act <= 0 ? 0 : act === 1 ? 1 : act <= 3 ? 2 : act <= 5 ? 3 : 4;
      c.className = `hm-cell l${lvl}` + (day > today ? ' future' : '') + (k === keyDate(today) ? ' is-today' : '');
      c.title = `${day.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}: ${done} done · ${min} min focus`;
      frag.append(c);
    }
  }
  root.append(frag);
  const wrap = root.parentElement; wrap.scrollLeft = wrap.scrollWidth;
}

function renderCategoryStats() {
  const root = $('#catStats');
  const used = CATEGORIES.filter(c => state.tasks.some(t => normalizeCategory(t.category) === c.name));
  if (!used.length) { root.innerHTML = '<p class="subtle">No task data yet — add a task to see your breakdown.</p>'; return; }
  root.innerHTML = used.map(c => {
    const sub = state.tasks.filter(t => normalizeCategory(t.category) === c.name);
    const d = sub.filter(t => t.done).length, p = Math.round(d / sub.length * 100);
    return `<div class="cat-row" style="--cat:${c.color}"><span class="ci">${ic(c.icon)}</span><span class="cn">${c.name}</span><span class="cv">${d}/${sub.length} · ${p}%</span><div class="track"><span style="width:${p}%"></span></div></div>`;
  }).join('');
}

$$('.metric').forEach(m => (m.onclick = () => { state.statsFilter = m.dataset.stats; showPage('stats'); }));
$('#statsBack').onclick = () => showPage('progress');

function appendDatedTasks(root, tasks) {
  const groups = new Map();
  tasks.forEach(task => {
    if (!groups.has(task.date)) groups.set(task.date, []);
    groups.get(task.date).push(task);
  });
  const today = keyDate(new Date());
  [...groups.keys()].sort((a, b) => b.localeCompare(a)).forEach(date => {
    const group = document.createElement('section');
    group.className = 'task-date-group';
    group.dataset.date = date;
    const label = parseKey(date).toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'long', year: 'numeric' });
    group.setAttribute('aria-label', label);
    const heading = document.createElement('h2');
    heading.className = 'task-date-heading';
    heading.innerHTML = `<time datetime="${esc(date)}">${date === today ? 'Today · ' : ''}${esc(label)}</time><span class="date-count" aria-label="${groups.get(date).length} tasks">${groups.get(date).length}</span>`;
    group.append(heading);
    sortTasks(groups.get(date)).forEach(t => group.append(taskRow(t)));
    root.append(group);
  });
}

function renderStats() {
  const cfg = {
    total: { title: 'All tasks', desc: 'Every task across all dates', f: () => true },
    completed: { title: 'Completed', desc: 'Tasks you have finished', f: t => t.done },
    remaining: { title: 'Remaining', desc: 'Tasks still waiting to be done', f: t => !t.done }
  }[state.statsFilter] || null;
  const tasks = state.tasks.filter(cfg.f);
  $('#statsTitle').textContent = cfg.title;
  $('#statsDesc').textContent = cfg.desc;
  $('#statsCount').textContent = tasks.length;
  const root = $('#statsList');
  root.innerHTML = '';
  appendDatedTasks(root, tasks);
  root.querySelectorAll('.task').forEach(r => (r.style.animation = 'none'));
  root.hidden = !tasks.length;
  $('#statsEmpty').hidden = !!tasks.length;
}

/* ======================================================================
   Main goal
   ====================================================================== */
function openGoal() { $('#goalInput').value = state.goal; openOverlay($('#goalOverlay'), '#goalInput'); }
$('#editGoal').onclick = openGoal;
$('#goalForm').addEventListener('submit', e => {
  e.preventDefault();
  const v = $('#goalInput').value.trim().slice(0, 160);
  if (!v) { $('#goalInput').focus(); toast(appLanguage==='fa'?'لطفاً هدف اصلی را وارد کن':'Please enter your main goal'); return; }
  try {
    state.goal = v;
    store.set(KEYS.goal, v);
    localStorage.removeItem('focusflow-goal-skipped');
    if (state.goal !== v || store.get(KEYS.goal, '') !== v) throw new Error('save failed');
    closeOverlay($('#goalOverlay'));
    if (state.page === 'progress') renderProgress();
    if (desktopLayout.matches) renderHomeSummary();
    toast(appLanguage==='fa'?'هدف اصلی ذخیره شد':'Main goal saved');
  } catch (err) {
    toast(appLanguage==='fa'?'ذخیرهٔ هدف انجام نشد؛ فضای ذخیره‌سازی را بررسی کن':'Could not save the goal. Check device storage.');
  }
});
$('#goalSkip').addEventListener('click', () => {
  try { localStorage.setItem('focusflow-goal-skipped','1'); } catch (_) {}
  closeOverlay($('#goalOverlay'));
  toast(appLanguage==='fa'?'می‌توانی بعداً از بخش پیشرفت هدف را تنظیم کنی':'You can set your goal later from Progress');
});

/* ======================================================================
   Search
   ====================================================================== */
function normalizeSearchText(value){return String(value??'').normalize('NFKC').replace(/[يى]/g,'ی').replace(/ك/g,'ک').replace(/[۰-۹]/g,d=>String('۰۱۲۳۴۵۶۷۸۹'.indexOf(d))).toLocaleLowerCase();}
function plannerSearchHaystack(item){const project=planner.projects.find(p=>p.id===item.projectId),bucket=planner.buckets.find(b=>b.id===item.bucketId);return normalizeSearchText([item.title,item.notes,item.date,item.startDate,item.time,project?.name,project?.description,bucket?.name,PL_STATUS[item.status],PL_PRIORITY[item.priority]?.label,PL_LABELS[item.label]?.name,...(item.checklist||[]).map(x=>x.title),...(item.links||[]).flatMap(x=>[x.title,x.url])].filter(Boolean).join(' '));}
function globalSearchBadge(type){const plannerType=type==='Planner';const badge=document.createElement('span');badge.className='search-type-badge '+(plannerType?'planner':'task');badge.innerHTML=ic(plannerType?'grid':'check')+`<span>${type}</span>`;return badge;}

function openTaskFromGlobalSearch(task){
  if(!task) return;
  closeDesktopSearch();
  const overlay=$('#searchOverlay');
  if(overlay?.classList.contains('show')) closeOverlay(overlay);
  showPage('home');
  selectDate(parseKey(task.date),'smooth');
  requestAnimationFrame(()=>{
    requestAnimationFrame(()=>{
      const target=[...document.querySelectorAll('#taskList .task')].find(row=>row.dataset.flipId==='t'+task.id);
      if(!target) return;
      target.scrollIntoView({behavior:reduceMotion()?'auto':'smooth',block:'center'});
      target.classList.add('search-result-target');
      target.setAttribute('tabindex','-1');
      try{target.focus({preventScroll:true});}catch(_){}
      window.setTimeout(()=>target.classList.remove('search-result-target'),2200);
    });
  });
}
function makeGlobalTaskResultsNavigable(root){
  root.querySelectorAll('.global-search-task').forEach(row=>{
    row.style.cursor='pointer';
    row.setAttribute('title',appLanguage==='fa'?'برای رفتن به محل این کار کلیک کن':'Click to go to this task');
    const open=()=>{
      const id=String(row.dataset.flipId||'').replace(/^t/,'');
      const task=state.tasks.find(item=>String(item.id)===id);
      if(task) openTaskFromGlobalSearch(task);
    };
    row.addEventListener('click',event=>{
      if(event.target.closest('input,button,label,a,select,textarea')) return;
      open();
    });
    row.addEventListener('keydown',event=>{
      if((event.key==='Enter'||event.key===' ') && !event.target.closest('input,button,label,a,select,textarea')){
        event.preventDefault(); open();
      }
    });
    row.setAttribute('tabindex','0');
    row.setAttribute('role','link');
  });
}

function renderSearch(query = $('#searchInput').value, root = $('#searchResults')) {
  const q=normalizeSearchText(String(query).trim());root.replaceChildren();if(!q)return;
  const taskHits=state.tasks.filter(t=>normalizeSearchText(`${t.title} ${normalizeCategory(t.category)}`).includes(q)).sort((a,b)=>(!!a.done-!!b.done)||b.date.localeCompare(a.date)).slice(0,30);
  const planHits=planner.entries.filter(p=>plannerSearchHaystack(p).includes(q)).sort((a,b)=>a.date.localeCompare(b.date)||a.title.localeCompare(b.title)).slice(0,40);
  const promptHits=(typeof window.bonfireSearchPrompts==='function'?window.bonfireSearchPrompts():[]).filter(p=>normalizeSearchText([p.title,p.name,p.promptTitle,p.text,p.prompt,p.content,p.description,p.notes,...(p.tags||[]),p.searchText].filter(Boolean).join(' ')).includes(q)).slice(0,40);
  if(!taskHits.length&&!planHits.length&&!promptHits.length){root.innerHTML=`<p class="search-empty">No tasks, planner items, or prompts match “${esc(String(query).trim())}”</p>`;return;}
  if(taskHits.length){const heading=document.createElement('h3');heading.className='search-result-heading';heading.innerHTML=`${ic('check')}<span>Tasks</span><small>${taskHits.length}</small>`;root.append(heading);appendDatedTasks(root,taskHits);root.querySelectorAll('.task').forEach(row=>{row.classList.add('global-search-task');row.querySelector('.task-title')?.prepend(globalSearchBadge('Task'));row.style.animation='none';});makeGlobalTaskResultsNavigable(root);}
  if(planHits.length){const heading=document.createElement('h3');heading.className='search-result-heading';heading.innerHTML=`${ic('grid')}<span>Planner</span><small>${planHits.length}</small>`;root.append(heading);planHits.forEach(item=>{const project=planner.projects.find(p=>p.id===item.projectId),bucket=planner.buckets.find(b=>b.id===item.bucketId),row=document.createElement('button');row.type='button';row.className='planner-search-result';const date=parseKey(item.date).toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{year:'numeric',month:'short',day:'numeric'});row.append(globalSearchBadge('Planner'));const content=document.createElement('span');content.className='planner-search-copy';content.innerHTML=`<strong>${esc(item.title)}</strong><small>${esc(project?.name||'')} · ${esc(bucket?.name||'')} · ${esc(date)}</small>`;row.append(content);row.onclick=()=>{closeDesktopSearch();if($('#searchOverlay').classList.contains('show'))closeOverlay($('#searchOverlay'));if(planner.view==='finance'){planner.returnView=null;}planner.activeProject=item.projectId;store.set(KEYS.plannerActiveProject,item.projectId);planner.view='list';store.set(KEYS.plannerView,'list');showPage('planner');openPlannerModal(item);};root.append(row);});}  if(promptHits.length){const heading=document.createElement('h3');heading.className='search-result-heading';heading.innerHTML=`${ic('sparkles')}<span>${appLanguage==='fa'?'پرامپت‌ها':'Prompts'}</span><small>${promptHits.length}</small>`;root.append(heading);promptHits.forEach(item=>{const row=document.createElement('button');row.type='button';row.className='planner-search-result prompt-search-result';const badge=document.createElement('span');badge.className='search-type-badge planner';badge.innerHTML=ic('sparkles')+`<span>${appLanguage==='fa'?'پرامپت':'Prompt'}</span>`;row.append(badge);const content=document.createElement('span');content.className='planner-search-copy';const preview=String(item.text||item.prompt||item.content||item.description||item.notes||'').replace(/\s+/g,' ').trim();content.innerHTML=`<strong>${esc(item.title||item.promptTitle||item.name||(appLanguage==='fa'?'بدون عنوان':'Untitled prompt'))}</strong><small>${esc(preview.slice(0,140))}${preview.length>140?'…':''}</small>`;row.append(content);row.onclick=(event)=>{event.preventDefault();event.stopPropagation();const promptId=item.id;closeDesktopSearch();if($('#searchOverlay').classList.contains('show'))closeOverlay($('#searchOverlay'));showPage('bonfire');const openPromptDetail=()=>{if(typeof window.bonfireOpenPrompt==='function'){window.bonfireOpenPrompt(promptId);}else{const openBonfire=document.getElementById('bonfireOpen');if(openBonfire)openBonfire.click();}};requestAnimationFrame(()=>requestAnimationFrame(openPromptDetail));};root.append(row);});}
}
$('#searchBtn').onclick = () => { $('#searchInput').value = ''; renderSearch(); openOverlay($('#searchOverlay'), '#searchInput'); };
$('#searchInput').oninput = () => renderSearch();
function closeDesktopSearch() {
  $('#desktopSearchResults').hidden = true;
  $('#desktopSearchInput').setAttribute('aria-expanded', 'false');
}
function renderDesktopSearch() {
  const input = $('#desktopSearchInput'), results = $('#desktopSearchResults');
  const show = (desktopLayout.matches || tabletLayout.matches) && !!input.value.trim();
  results.hidden = !show;
  input.setAttribute('aria-expanded', String(show));
  if (show) renderSearch(input.value, results);
  else results.replaceChildren();
}
$('#desktopSearchInput').addEventListener('input', renderDesktopSearch);
$('#desktopSearchInput').addEventListener('focus', renderDesktopSearch);
$('#desktopSearchInput').addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' && !$('#desktopSearchResults').hidden) {
    e.preventDefault(); $('#desktopSearchResults').querySelector('input,button')?.focus();
  }
});
$('#desktopSearch').addEventListener('keydown', e => {
  if (e.key === 'Escape' && !openStack.length) {
    e.preventDefault(); e.stopPropagation();
    $('#desktopSearchInput').focus(); closeDesktopSearch();
  }
});
document.addEventListener('pointerdown', e => { if (!e.target.closest('#desktopSearch')) closeDesktopSearch(); });
document.addEventListener('focusin', e => { if (!e.target.closest('#desktopSearch')) closeDesktopSearch(); });
$('#searchOverlay').addEventListener('click', e => { if (e.target.id === 'searchResults') closeOverlay($('#searchOverlay')); });

/* ======================================================================
   Focus timer (timestamp based → accurate even in background tabs)
   ====================================================================== */
const timer = { kind: 'focus', duration: 1500, remaining: 1500, running: false, endAt: 0, lastTick: 0, carry: 0, raf: null, int: null };
const CIRC = 2 * Math.PI * 45;
let focusDirty = false;
function saveFocus() { if (focusDirty) { store.set(KEYS.focus, state.focus); focusDirty = false; if (desktopLayout.matches && state.page === 'home') renderHomeSummary(); } }
$('#timerProg').style.strokeDasharray = `${CIRC} ${CIRC}`;
const savedCustom = parseInt(store.getRaw(KEYS.custom, '25'), 10);
$('#timerCustom').value = Number.isFinite(savedCustom) ? savedCustom : 25;

function renderTimer() {
  const r = Math.max(0, Math.ceil(timer.remaining));
  $('#timerTime').textContent = `${pad(Math.floor(r / 60))}:${pad(r % 60)}`;
  $('#timerProg').style.strokeDashoffset = String(CIRC * (1 - timer.remaining / timer.duration));
  $('#timerRing').classList.toggle('break', timer.kind === 'break');
  $('#timerOverlay').classList.toggle('timer-running', timer.running);
  $('#timerDot').hidden = !timer.running;
  $('#timerToggle').textContent = timer.running ? 'Pause' : (timer.remaining < timer.duration && timer.remaining > 0 ? 'Resume' : 'Start');
  document.title = timer.running ? `${$('#timerTime').textContent} · ${timer.kind === 'focus' ? 'Focus' : 'Break'} — FocusFlow` : 'FocusFlow';
  const n = state.sessions[keyDate(new Date())] || 0;
  $('#timerSessions').textContent = n ? `${n} focus session${n > 1 ? 's' : ''} completed today` : '';
}
function tick() {
  const now = Date.now();
  if (timer.kind === 'focus') {
    timer.carry += now - timer.lastTick;
    if (timer.carry >= 1000) {
      const secs = Math.floor(timer.carry / 1000);
      timer.carry -= secs * 1000;
      const k = keyDate(new Date());
      state.focus[k] = focusSecs(k) + secs;
      focusDirty = true;
      if (now - (timer.lastSave || 0) > 5000) { saveFocus(); timer.lastSave = now; }
    }
  }
  timer.lastTick = now;
  timer.remaining = Math.max(0, (timer.endAt - now) / 1000);
  renderTimer();
  if (timer.remaining <= 0) completeTimer();
}
function startTimer() {
  if (timer.running) return;
  if (timer.remaining <= 0) timer.remaining = timer.duration;
  timer.running = true;
  timer.endAt = Date.now() + timer.remaining * 1000;
  timer.lastTick = Date.now();
  timer.carry = 0;
  $('#timerState').textContent = timer.kind === 'focus' ? 'Focusing… stay on track' : 'Break time — relax';
  clearInterval(timer.int);
  timer.int = setInterval(tick, 250);
  renderTimer();
}
function pauseTimer(label = 'Paused') {
  if (timer.running) tick();
  timer.running = false;
  clearInterval(timer.int);
  saveFocus();
  $('#timerState').textContent = label;
  renderTimer();
}
function resetTimer() {
  pauseTimer(timer.kind === 'focus' ? 'Ready to focus' : 'Ready for a break');
  timer.remaining = timer.duration;
  renderTimer();
}
function completeTimer() {
  const finishedKind = timer.kind, finishedMin = Math.max(1, Math.round(timer.duration / 60));
  timer.running = false;
  clearInterval(timer.int);
  saveFocus();
  playEffect('Done-task-sound.mp3');
  if (timer.kind === 'focus') {
    const k = keyDate(new Date());
    state.sessions[k] = (state.sessions[k] || 0) + 1;
    store.set(KEYS.sessions, state.sessions);
    $('#timerState').textContent = 'Session complete! Take a break';
  } else {
    $('#timerState').textContent = 'Break over — ready to focus?';
  }
  timer.remaining = 0;
  renderTimer();
  if (state.page === 'progress') renderProgress();
  if (desktopLayout.matches && state.page === 'home') renderHomeSummary();
  showCelebration(finishedKind, finishedMin);
}
function setMode(minutes, kind) {
  timer.kind = kind;
  timer.duration = minutes * 60;
  $$('.timer-mode').forEach(b => b.classList.toggle('active', Number(b.dataset.min) === minutes && b.dataset.kind === kind));
  resetTimer();
}
$$('.timer-mode').forEach(b => (b.onclick = () => setMode(Number(b.dataset.min), b.dataset.kind)));
$('#timerToggle').onclick = () => (timer.running ? pauseTimer() : startTimer());
$('#timerReset').onclick = resetTimer;
$('#timerSet').onclick = () => {
  let m = parseInt($('#timerCustom').value, 10);
  if (!Number.isFinite(m)) m = 25;
  m = Math.min(180, Math.max(1, m));
  $('#timerCustom').value = m;
  store.set(KEYS.custom, String(m));
  setMode(m, 'focus');
  toast(`Focus timer set to ${m} min`);
};
$('#timerCustom').addEventListener('keydown', e => { if (e.key === 'Enter') { e.preventDefault(); $('#timerSet').click(); } });
$('#timerBtn').onclick = () => { closeOverlay(menu); renderTimer(); openOverlay($('#timerOverlay'), '#timerToggle'); };
document.addEventListener('visibilitychange', () => { if (!document.hidden && timer.running) tick(); });
window.addEventListener('pagehide', saveFocus);

/* ======================================================================
   Music — one persistent <audio> element, real visualizer, Media Session,
   sleep timer, mute, queue and remembered durations
   ====================================================================== */
music.el = new Audio();
music.el.preload = 'auto';
music.el.volume = state.volume;
music.durations = store.get(KEYS.durations, {}) || {};
const IS_IOS = /iP(hone|ad|od)/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

function ensureAnalyser() {
  // iOS suspends Web Audio in the background, so keep native playback there.
  if (music.analyser || IS_IOS || music.audioFailed) return;
  try {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    music.ctx = new Ctx();
    const src = music.ctx.createMediaElementSource(music.el);
    music.analyser = music.ctx.createAnalyser();
    music.analyser.fftSize = 128;
    music.analyser.smoothingTimeConstant = 0.8;
    src.connect(music.analyser);
    music.analyser.connect(music.ctx.destination);
    music.freq = new Uint8Array(music.analyser.frequencyBinCount);
  } catch { music.audioFailed = true; }
}

const trackDur = i => music.durations[TRACKS[i].file] || 0;
function rememberDuration() {
  const t = TRACKS[music.index];
  if (t && Number.isFinite(music.el.duration) && music.el.duration > 0 && music.durations[t.file] !== Math.round(music.el.duration)) {
    music.durations[t.file] = Math.round(music.el.duration);
    store.set(KEYS.durations, music.durations);
    renderTrackLists();
  }
}

function trackRow(t, i) {
  const row = document.createElement('div');
  row.className = 'song';
  row.dataset.i = i;
  row.tabIndex = 0;
  row.setAttribute('role', 'button');
  row.setAttribute('aria-label', `${t.title} — ${t.desc}`);
  row.innerHTML = `<span class="num">${i + 1}</span><span class="eq" aria-hidden="true"><i></i><i></i><i></i></span>
    <img src="${asset(t.cover)}" alt="">
    <div class="tmeta"><strong>${esc(t.title)}</strong><p>${esc(t.desc)}</p></div>
    <span class="dur">${trackDur(i) ? fmtTime(trackDur(i)) : ''}</span>
    <button class="play-btn" type="button" aria-label="Play ${esc(t.title)}">${ic('play')}</button>`;
  const act = () => (music.index === i ? togglePlayback() : playTrack(i));
  row.querySelector('.play-btn').onclick = e => { e.stopPropagation(); act(); };
  row.onclick = () => { if (music.index === i) showPage('player'); else playTrack(i); };
  row.onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); act(); } };
  return row;
}
function renderTrackLists() {
  const main = $('#musicList'), queue = $('#queueList');
  main.innerHTML = ''; queue.innerHTML = '';
  TRACKS.forEach((t, i) => { main.append(trackRow(t, i)); queue.append(trackRow(t, i)); });
  const total = TRACKS.reduce((s, _, i) => s + trackDur(i), 0);
  $('#trackCount').textContent = `${TRACKS.length} tracks${total ? ' · ' + Math.round(total / 60) + ' min' : ''}`;
  updateMusicUI();
}
function renderMusic() {
  const list = $('#musicList');
  // Some navigation/layout patches can reveal Music without completing its first render.
  // Rebuild whenever the list is empty or its rendered rows no longer match TRACKS.
  if (!list.dataset.ready || list.children.length !== TRACKS.length) {
    list.dataset.ready = '1';
    renderTrackLists();
    if (!music.durationsProbed) {
      music.durationsProbed = true;
      (window.requestIdleCallback || (f => setTimeout(f, 900)))(probeDurations);
    }
  }
  updateMusicUI();
}
/* Read durations once (metadata only) so the list can show track lengths */
function probeDurations() {
  TRACKS.forEach((t, i) => {
    if (trackDur(i) || music['probing' + i]) return;
    const src = asset(t.file);
    if (!src) return;
    music['probing' + i] = true;
    const probe = new Audio(); probe.preload = 'metadata';
    probe.onloadedmetadata = () => { if (Number.isFinite(probe.duration)) { music.durations[t.file] = Math.round(probe.duration); store.set(KEYS.durations, music.durations); renderTrackLists(); } probe.removeAttribute('src'); };
    probe.src = src;
  });
}

function playTrack(i) {
  if (!asset(TRACKS[i].file)) { if (!assetsReady) { pendingTrack = i; toast('Loading music…'); } return; }
  ensureAnalyser();
  music.ctx?.state === 'suspended' && music.ctx.resume();
  if (music.index !== i || !music.el.src) {
    music.index = i;
    music.el.src = asset(TRACKS[i].file);
    music.el.currentTime = 0;
  }
  music.el.play().catch(() => toast('Tap play to start music'));
  setMediaSession();
  updateMusicUI();
}
// Report real playback failures instead of leaving the Music controls appearing dead.
music.el.addEventListener('error', () => {
  const code = music.el.error?.code;
  const message = code === 4 ? 'Audio file could not be loaded' : 'Music playback failed. Tap a track to retry.';
  if (typeof toast === 'function') toast(message);
});
function togglePlayback() {
  if (music.index < 0) return playTrack(0);
  if (music.el.paused) { music.ctx?.state === 'suspended' && music.ctx.resume(); music.el.play().catch(() => {}); }
  else music.el.pause();
}
function changeTrack(step) {
  // "Previous" restarts the current track if we're more than 3 s in (like most players)
  if (step < 0 && music.el.currentTime > 3) { music.el.currentTime = 0; return; }
  playTrack(((music.index < 0 ? 0 : music.index) + step + TRACKS.length) % TRACKS.length);
}
function stopMusic() {
  music.el.pause();
  music.el.removeAttribute('src'); music.el.load();
  music.index = -1;
  setSleep(0, true);
  if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
  if (state.page === 'player') showPage('music');
  updateMusicUI();
}
['timeupdate', 'play', 'pause', 'loadedmetadata', 'volumechange'].forEach(ev => music.el.addEventListener(ev, updateMusicUI));
music.el.addEventListener('loadedmetadata', rememberDuration);
music.el.addEventListener('play', startVisualizer);
music.el.addEventListener('ended', () => {
  if (music.repeat === 'one') { music.el.currentTime = 0; music.el.play(); }
  else changeTrack(1);
});

function setIcon(btn, name) { if (btn.dataset.icon !== name) { btn.innerHTML = ic(name) + (btn.querySelector('.tag-mini')?.outerHTML || ''); btn.dataset.icon = name; } }
function setRange(el, pct) { el.style.setProperty('--pct', pct + '%'); }

function updateMusicUI() {
  const el = music.el, has = music.index >= 0;
  const playing = has && !el.paused;
  document.body.classList.toggle('music-playing', playing);
  const showMini = has && state.page !== 'player' && state.page !== 'music';
  $('#miniPlayer').hidden = !showMini;
  document.body.classList.toggle('has-mini', showMini);
  const cur = has ? el.currentTime : 0;
  const dur = has && Number.isFinite(el.duration) && el.duration > 0 ? el.duration : (has ? trackDur(music.index) : 0);
  const pct = dur ? Math.min(100, cur / dur * 100) : 0;

  $$('.song').forEach(r => {
    const i = Number(r.dataset.i), on = has && i === music.index;
    r.classList.toggle('current', on);
    r.classList.toggle('playing', on && playing);
    const b = r.querySelector('.play-btn');
    setIcon(b, on && playing ? 'pause' : 'play');
    b.setAttribute('aria-label', `${on && playing ? 'Pause' : 'Play'} ${TRACKS[i].title}`);
  });

  const t = TRACKS[has ? music.index : 0];
  // Hero card on the music page
  $('#heroCover').src = asset(t.cover);
  $('#heroKicker').textContent = has ? (playing ? 'NOW PLAYING' : 'PAUSED') : 'FOCUS PLAYLIST';
  $('#heroTitle').textContent = has ? t.title : 'Calm Focus Mix';
  $('#heroSub').textContent = has ? `${t.desc} · ${fmtTime(cur)} / ${fmtTime(dur)}` : 'Play relaxing music while you manage your tasks.';
  setIcon($('#heroPlay'), playing ? 'pause' : 'play');
  $('#heroPlay').setAttribute('aria-label', playing ? 'Pause' : 'Play');

  // Full player
  if ($('#playerCover').dataset.src !== t.cover) {
    $('#playerCover').src = $('#miniCover').src = asset(t.cover);
    $('#playerBg').style.backgroundImage = `url("${asset(t.cover)}")`;
    $('#playerCover').dataset.src = t.cover;
  }
  $('#playerTitle').textContent = has ? t.title : 'Choose a track';
  $('#playerDesc').textContent = has ? t.desc : 'Your calm listening space';
  $('#playerFrom').textContent = has ? `Track ${music.index + 1} of ${TRACKS.length}` : 'Calm Focus Mix';
  if (!music.seeking) { $('#playerSeek').value = String(Math.round(pct * 10)); setRange($('#playerSeek'), pct); }
  $('#playerCur').textContent = fmtTime(cur);
  $('#playerDur').textContent = '-' + fmtTime(Math.max(0, dur - cur));
  setIcon($('#playerToggle'), playing ? 'pause' : 'play');
  $('#playerToggle').setAttribute('aria-label', playing ? 'Pause' : 'Play');
  const vol = el.muted ? 0 : el.volume;
  setRange($('#playerVolume'), vol * 100);
  $('#volPct').textContent = Math.round(vol * 100) + '%';
  setIcon($('#muteBtn'), vol === 0 ? 'mute' : 'volume');

  // Mini player
  $('#miniTitle').textContent = t.title;
  $('#miniStatus').textContent = `${playing ? 'Playing' : 'Paused'} · ${fmtTime(cur)} / ${fmtTime(dur)}${music.sleepAt ? ' · ☾ ' + sleepLeft() : ''}`;
  $('#miniBar').style.width = pct + '%';
  setIcon($('#miniToggle'), playing ? 'pause' : 'play');
  $('#miniToggle').setAttribute('aria-label', playing ? 'Pause' : 'Play');

  if ('mediaSession' in navigator && has) {
    navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    try { if (dur) navigator.mediaSession.setPositionState({ duration: dur, position: Math.min(cur, dur), playbackRate: 1 }); } catch {}
  }
}

/* Visualizer — real frequency bars where Web Audio is available, gentle animation otherwise */
function startVisualizer() {
  if (music.vizRunning) return;
  music.vizRunning = true;
  const cv = $('#visualizer'), g = cv.getContext('2d');
  const BARS = 36;
  const levels = new Array(BARS).fill(0);
  const draw = ts => {
    const visible = state.page === 'player' && !document.hidden;
    const playing = !music.el.paused;
    if (!playing && levels.every(v => v < 0.02)) { music.vizRunning = false; g.clearRect(0, 0, cv.width, cv.height); return; }
    music.vizFrame = (music.vizFrame || 0) + 1;
    if (visible && !(isLite() && music.vizFrame % 2)) {
      if (music.analyser && playing) music.analyser.getByteFrequencyData(music.freq);
      for (let b = 0; b < BARS; b++) {
        let target = 0;
        if (playing) {
          if (music.analyser) {
            const idx = Math.floor(Math.pow(b / BARS, 1.4) * (music.freq.length * 0.75));
            target = music.freq[idx] / 255;
          } else {
            target = 0.25 + 0.35 * Math.abs(Math.sin(ts / 420 + b * 0.55)) * Math.abs(Math.cos(ts / 730 + b * 0.31));
          }
        }
        levels[b] += (target - levels[b]) * 0.25;
      }
      const w = cv.width, h = cv.height, gap = 6, bw = (w - gap * (BARS - 1)) / BARS;
      g.clearRect(0, 0, w, h);
      if (!music.vizGrad || ts - (music.vizGradAt || 0) > 1000) {
        const css = getComputedStyle(document.documentElement);
        const grad = g.createLinearGradient(0, h, 0, 0);
        grad.addColorStop(0, css.getPropertyValue('--blue').trim() || '#4f97f5');
        grad.addColorStop(1, css.getPropertyValue('--blue-light').trim() || '#8bb5ff');
        music.vizGrad = grad; music.vizGradAt = ts;
      }
      g.fillStyle = music.vizGrad;
      for (let b = 0; b < BARS; b++) {
        const bh = Math.max(4, levels[b] * h);
        const x = b * (bw + gap), y = (h - bh) / 2;
        g.beginPath();
        g.roundRect ? g.roundRect(x, y, bw, bh, bw / 2) : g.rect(x, y, bw, bh);
        g.fill();
      }
    }
    requestAnimationFrame(draw);
  };
  requestAnimationFrame(draw);
}

/* Sleep timer: Off → 15 → 30 → 60 min */
function sleepLeft() { const m = Math.max(0, Math.ceil((music.sleepAt - Date.now()) / 60000)); return `${m}m`; }
function setSleep(min, silent) {
  clearInterval(music.sleepInt);
  music.sleepAt = min ? Date.now() + min * 60000 : 0;
  $('#sleepBtn').classList.toggle('on', !!min);
  $('#sleepTag').textContent = min ? `${min}m` : '';
  $('#sleepBtn').setAttribute('aria-label', `Sleep timer: ${min ? min + ' minutes' : 'off'}`);
  if (min) {
    music.sleepInt = setInterval(() => {
      if (Date.now() >= music.sleepAt) { music.el.pause(); setSleep(0, true); toast('Sleep timer — music paused'); }
      else $('#sleepTag').textContent = sleepLeft();
    }, 5000);
  }
  if (!silent) toast(min ? `Music will stop in ${min} min` : 'Sleep timer off');
  updateMusicUI();
}
$('#sleepBtn').onclick = () => {
  const steps = [0, 15, 30, 60];
  const curMin = music.sleepAt ? Math.round((music.sleepAt - Date.now()) / 60000) : 0;
  const curStep = music.sleepAt ? steps.findIndex(s => s >= curMin) : 0;
  setSleep(steps[(Math.max(0, curStep) + 1) % steps.length]);
};

/* Media Session — lock-screen / headset / keyboard media keys */
function setMediaSession() {
  if (!('mediaSession' in navigator) || music.index < 0) return;
  const t = TRACKS[music.index];
  try {
    navigator.mediaSession.metadata = new MediaMetadata({ title: t.title, artist: 'FocusFlow', album: 'Calm Focus Mix', artwork: [{ src: asset(t.cover), sizes: '512x512', type: 'image/jpeg' }] });
    navigator.mediaSession.setActionHandler('play', () => togglePlayback());
    navigator.mediaSession.setActionHandler('pause', () => music.el.pause());
    navigator.mediaSession.setActionHandler('previoustrack', () => changeTrack(-1));
    navigator.mediaSession.setActionHandler('nexttrack', () => changeTrack(1));
    navigator.mediaSession.setActionHandler('seekto', d => { if (Number.isFinite(d.seekTime)) music.el.currentTime = d.seekTime; });
  } catch {}
}

/* Controls */
$('#miniOpen').onclick = () => showPage('player');
$('#miniOpen').onkeydown = e => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); showPage('player'); } };
$('#miniCover').onclick = () => showPage('player');
$('#miniToggle').onclick = togglePlayback;
$('#miniPrev').onclick = () => changeTrack(-1);
$('#miniNext').onclick = () => changeTrack(1);
$('#miniClose').onclick = stopMusic;
$('#heroPlay').onclick = () => togglePlayback();
$('#musicHero').onclick = e => { if (!e.target.closest('#heroPlay') && music.index >= 0) showPage('player'); };
$('#playerToggle').onclick = togglePlayback;
$('#playerPrev').onclick = () => changeTrack(-1);
$('#playerNext').onclick = () => changeTrack(1);
$('#playerBack').onclick = () => showPage('music');
$('#playerList').onclick = () => $('#upNext').scrollIntoView({ behavior: 'smooth', block: 'start' });
const seek = $('#playerSeek');
seek.addEventListener('pointerdown', () => (music.seeking = true));
seek.addEventListener('input', () => {
  const pct = seek.value / 10;
  setRange(seek, pct);
  const dur = Number.isFinite(music.el.duration) ? music.el.duration : 0;
  $('#playerCur').textContent = fmtTime(pct / 100 * dur);
});
seek.addEventListener('change', () => {
  music.seeking = false;
  if (music.index < 0) return;
  if (Number.isFinite(music.el.duration)) music.el.currentTime = seek.value / 1000 * music.el.duration;
});
window.addEventListener('pointerup', () => { if (music.seeking) seek.dispatchEvent(new Event('change')); });
$('#playerVolume').value = String(state.volume);
$('#playerVolume').oninput = e => {
  state.volume = Number(e.target.value);
  music.el.volume = state.volume;
  music.el.muted = state.volume === 0;
  store.set(KEYS.volume, String(state.volume));
};
// Volume only changes by DRAGGING the slider (knob). Single accidental taps are
// restored, so brushing the volume row while scrolling never jumps the volume.
// Keyboard arrows and the mute button still work as usual.
{
  const vol = $('#playerVolume');
  let tap = null;
  vol.addEventListener('pointerdown', e => { tap = { x: e.clientX, v: Number(vol.value) }; });
  vol.addEventListener('pointerup', e => {
    if (tap && Math.abs(e.clientX - tap.x) < 8) {
      vol.value = String(tap.v);
      state.volume = tap.v;
      music.el.volume = tap.v;
      store.set(KEYS.volume, String(tap.v));
      updateMusicUI();
    }
    tap = null;
  });
  vol.addEventListener('pointercancel', () => (tap = null));
}
$('#muteBtn').onclick = () => {
  if (music.el.muted || music.el.volume === 0) { music.el.muted = false; if (music.el.volume === 0) music.el.volume = state.volume = 0.5; }
  else music.el.muted = true;
  $('#playerVolume').value = String(music.el.muted ? 0 : music.el.volume);
};
$('#repeatBtn').onclick = () => {
  music.repeat = music.repeat === 'all' ? 'one' : 'all';
  $('#repeatBtn').classList.toggle('on', music.repeat === 'one');
  $('#repeatTag').textContent = music.repeat === 'one' ? 'ONE' : '';
  $('#repeatBtn').setAttribute('aria-label', music.repeat === 'one' ? 'Repeat this track' : 'Repeat playlist');
  toast(music.repeat === 'one' ? 'Repeating this track' : 'Repeating playlist');
};

/* ======================================================================
   Menu / theme / sound / data
   ====================================================================== */
const menu = $('#menuOverlay');
$('#menuBtn').onclick = () => openOverlay(menu);

function currentPalette() { return PALETTES.find(p => p.id === document.documentElement.dataset.palette) || PALETTES[0]; }
function currentDarkPalette() { return DARK_PALETTES.find(p => p.id === document.documentElement.dataset.dpalette) || DARK_PALETTES[0]; }
function applyTheme(name, persist = true) {
  const dark = name === 'dark';
  document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  document.querySelector('meta[name="theme-color"]').content = dark ? currentDarkPalette().bg : currentPalette().bg;
  if (persist) store.set(KEYS.theme, dark ? 'dark' : 'light');
  $('#themeBtn').innerHTML = `${ic(dark ? 'sun' : 'moon')}<span>${dark ? 'Light theme' : 'Dark theme'}</span>`;
  updateEmptyArt(true);
}
function paletteCard(p, selected, inMode) {
  return `
    <button class="palette${selected ? (inMode ? ' active' : ' chosen') : ''}" type="button" role="radio" aria-checked="${selected}" data-id="${p.id}" title="${p.name}">
      <span class="theme-orb" aria-hidden="true" style="${p.colors.map((c, i) => `--orb-${i + 1}:${c}`).join(';')}"></span>
      <span class="palette-caption">${p.name}<b class="tick">${ic('check')}</b></span>
    </button>`;
}
function renderPalettes() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const options = dark ? DARK_PALETTES : PALETTES;
  const selected = dark ? currentDarkPalette().id : currentPalette().id;
  $('#themeModeLabel').textContent = dark ? 'Dark mode themes' : 'Light mode themes';
  $('#themePaletteGrid').setAttribute('aria-label', dark ? 'Available dark mode themes' : 'Available light mode themes');
  $('#themePaletteGrid').innerHTML = options.map(p => paletteCard(p, p.id === selected, true)).join('');
  $$('#themePaletteGrid .palette').forEach(b => (b.onclick = () => dark ? applyDarkPalette(b.dataset.id) : applyPalette(b.dataset.id)));
}
function applyDarkPalette(id) {
  const p = DARK_PALETTES.find(x => x.id === id) || DARK_PALETTES[0];
  document.documentElement.dataset.dpalette = p.id;
  store.set(KEYS.darkPalette, p.id);
  if (document.documentElement.dataset.theme !== 'dark') applyTheme('dark');
  else document.querySelector('meta[name="theme-color"]').content = p.bg;
  renderPalettes();
  updateEmptyArt(true);
  if (state.page === 'progress') renderProgress();
  toast(`${p.name} dark theme applied`);
}
function applyPalette(id) {
  const p = PALETTES.find(x => x.id === id) || PALETTES[0];
  document.documentElement.dataset.palette = p.id;
  store.set(KEYS.palette, p.id);
  if (document.documentElement.dataset.theme === 'dark') applyTheme('light');
  else document.querySelector('meta[name="theme-color"]').content = p.bg;
  renderPalettes();
  updateEmptyArt(true);
  if (state.page === 'progress') renderProgress();
  toast(`${p.name} theme applied`);
}

const financeEntries=store.get(KEYS.finance,[]) instanceof Array?store.get(KEYS.finance,[]):[];
let financeMonthlyIncome=Math.max(0,Number(store.get(KEYS.financeIncome,0))||0);
let financeMonthlyIncomeCurrency=store.get(KEYS.financeIncomeCurrency,appLanguage==='fa'?'IRR':'USD')==='USD'?'USD':'IRR';
const FINANCE_MONTH_HISTORY_KEY='focusflow-finance-month-history-v1';
let financeMonthHistory=store.get(FINANCE_MONTH_HISTORY_KEY,{});
if(!financeMonthHistory||typeof financeMonthHistory!=='object'||Array.isArray(financeMonthHistory))financeMonthHistory={};
let financeIncomeCurrencyChosen=store.get(KEYS.financeIncomeCurrencyChosen,financeMonthlyIncome>0&&!!store.get(KEYS.financeIncomeCurrency,null));
let financeAccessGranted=false,financeEntryDestination='page',financeSecurityOrigin='entry',financeIncomeOrigin='settings';
window.addEventListener('pagehide',()=>{financeAccessGranted=false;});
const FINANCE_CATEGORIES=[{id:'transport',name:'Transport',color:'#3b82f6'},{id:'food',name:'Food',color:'#22a06b'},{id:'clothing',name:'Clothing',color:'#a855f7'},{id:'office',name:'Office',color:'#f59e0b'},{id:'internet',name:'Internet',color:'#06b6d4'},{id:'personal',name:'Personal',color:'#ec4899'},{id:'repairs',name:'Repairs',color:'#ef4444'},{id:'other',name:'Other',color:'#94a3b8'}];
financeEntries.forEach(item=>{if(item&&!['USD','IRR'].includes(item.currency))item.currency=financeIncomeCurrencyChosen?financeMonthlyIncomeCurrency:(appLanguage==='fa'?'IRR':'USD');if(item?.type==='expense'&&!item.category)item.category='other';});
store.set(KEYS.finance,financeEntries);
let localeDateTarget=null,localeDateMonth=noon(new Date());
function renderLocaleDatePicker(){if(appLanguage!=='fa')return;const start=calendarMonthStart(localeDateMonth),parts=jalaliParts(start),offset=(start.getDay()+1)%7,today=keyDate(new Date()),selected=localeDateTarget?.value||'';$('#localeDateMonth').textContent=start.toLocaleDateString('fa-IR',{month:'long',year:'numeric'});const weekStart=new Date(2026,0,3,12);$('#localeDateWeekdays').innerHTML=Array.from({length:7},(_,i)=>{const d=new Date(weekStart);d.setDate(weekStart.getDate()+i);return `<span>${d.toLocaleDateString('fa-IR',{weekday:'short'})}</span>`}).join('');const root=$('#localeDateDays');root.replaceChildren();for(let i=0;i<42;i++){const date=noon(start);date.setDate(start.getDate()+i-offset);const p=jalaliParts(date),key=keyDate(date),button=document.createElement('button');button.type='button';button.className='date-picker-day'+(p.month!==parts.month||p.year!==parts.year?' muted':'')+(key===today?' today':'')+(key===selected?' selected':'');button.textContent=calendarDayNumber(date);button.setAttribute('aria-label',date.toLocaleDateString('fa-IR',{weekday:'long',year:'numeric',month:'long',day:'numeric'}));button.setAttribute('aria-pressed',String(key===selected));button.onclick=()=>{if(!localeDateTarget)return;localeDateTarget.value=key;localeDateTarget.dispatchEvent(new Event('input',{bubbles:true}));localeDateTarget.dispatchEvent(new Event('change',{bubbles:true}));closeOverlay($('#localeDatePicker'));};root.append(button);}}
function openLocalizedDatePicker(input){localeDateTarget=input;localeDateMonth=input.value?parseKey(input.value):noon(new Date());renderLocaleDatePicker();openOverlay($('#localeDatePicker'),'#localeDatePrev');}
$('#localeDatePrev').onclick=()=>{localeDateMonth=shiftCalendarMonth(localeDateMonth,-1);renderLocaleDatePicker();};$('#localeDateNext').onclick=()=>{localeDateMonth=shiftCalendarMonth(localeDateMonth,1);renderLocaleDatePicker();};
function refreshLocalizedDateInputs(){document.querySelectorAll('input[type="date"]').forEach(input=>{if(!input.dataset.requiredLocaleCaptured){input.dataset.requiredLocaleCaptured='1';input.dataset.requiredLocale=String(input.required);}let trigger=input.nextElementSibling;if(!trigger||!trigger.classList.contains('localized-date-trigger')){trigger=document.createElement('button');trigger.type='button';trigger.className='localized-date-trigger';input.insertAdjacentElement('afterend',trigger);trigger.onclick=e=>{e.preventDefault();openLocalizedDatePicker(input);};}trigger.hidden=appLanguage!=='fa';trigger.textContent=input.value?parseKey(input.value).toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{year:'numeric',month:'long',day:'numeric'}):(appLanguage==='fa'?'انتخاب تاریخ':'Choose date');if(appLanguage==='fa'){input.classList.add('localized-date-native');input.required=false;input.setAttribute('aria-hidden','true');input.tabIndex=-1;trigger.setAttribute('aria-label',appLanguage==='fa'?`انتخاب تاریخ${input.value?'، '+trigger.textContent:''}`:(input.value?trigger.textContent:'Choose a date'));trigger.setAttribute('aria-required',input.dataset.requiredLocale);}else{input.classList.remove('localized-date-native');input.required=input.dataset.requiredLocale==='true';input.removeAttribute('aria-hidden');input.removeAttribute('tabindex');trigger.removeAttribute('aria-required');}});}
document.addEventListener('input',e=>{if(e.target.matches?.('input[type="date"]'))refreshLocalizedDateInputs();});document.addEventListener('change',e=>{if(e.target.matches?.('input[type="date"]'))refreshLocalizedDateInputs();});document.addEventListener('submit',e=>{if(appLanguage!=='fa')return;const missing=[...e.target.querySelectorAll('input[type="date"][data-required-locale="true"]')].find(input=>!input.value);if(missing){e.preventDefault();openLocalizedDatePicker(missing);}},true);
function activeFinanceCurrency(){return financeIncomeCurrencyChosen?financeMonthlyIncomeCurrency:(appLanguage==='fa'?'IRR':'USD');}
function financeCurrencyLabelText(currency=activeFinanceCurrency()){return currency==='IRR'?(appLanguage==='fa'?'(تومان)':'(Toman)'):'(USD)';}
function formatMoney(amount,currency=activeFinanceCurrency()){const n=Number(amount)||0;if(currency==='IRR'){const value=new Intl.NumberFormat(appLanguage==='fa'?'fa-IR':'en-US',{maximumFractionDigits:0}).format(n);return `${value} ${appLanguage==='fa'?'تومان':'Toman'}`;}const value=new Intl.NumberFormat(appLanguage==='fa'?'fa-IR':'en-US',{minimumFractionDigits:2,maximumFractionDigits:2}).format(n);return `${appLanguage==='fa'?'دلار آمریکا':'USD'} ${value}`;}
function financeTransactionCurrency(item){return ['USD','IRR'].includes(item?.currency)?item.currency:activeFinanceCurrency();}
function financeCanCompare(currency=activeFinanceCurrency()){return financeMonthlyIncome>0&&financeMonthlyIncomeCurrency===currency;}
function financePeriodKey(dateKey){const d=parseKey(dateKey);if(appLanguage!=='fa')return `${d.getFullYear()}-${pad(d.getMonth()+1)}`;const parts=new Intl.DateTimeFormat('en-u-ca-persian-nu-latn',{year:'numeric',month:'numeric'}).formatToParts(d);const p=Object.fromEntries(parts.filter(x=>x.type!=='literal').map(x=>[x.type,x.value]));return `${p.year}-${pad(Number(p.month))}`;}
function financeCurrentMonth(){return financePeriodKey(keyDate(new Date()));}
function financeCategory(id){return FINANCE_CATEGORIES.find(c=>c.id===id)||FINANCE_CATEGORIES[FINANCE_CATEGORIES.length-1];}
function financePercent(amount,currency=activeFinanceCurrency()){return financeCanCompare(currency)?new Intl.NumberFormat(appLanguage==='fa'?'fa-IR':'en-US',{maximumFractionDigits:1}).format(Number(amount)/financeMonthlyIncome*100):'';}
function financePieMarkup(monthExpenses){const totals=new Map(FINANCE_CATEGORIES.map(c=>[c.id,0]));monthExpenses.forEach(x=>totals.set(financeCategory(x.category).id,totals.get(financeCategory(x.category).id)+Number(x.amount||0)));const active=FINANCE_CATEGORIES.map(c=>({...c,amount:totals.get(c.id)})).filter(c=>c.amount>0);const sum=active.reduce((a,c)=>a+c.amount,0);let angle=0;const stops=active.map(c=>{const from=angle;angle+=sum?c.amount/sum*360:0;return `${c.color} ${from.toFixed(2)}deg ${angle.toFixed(2)}deg`;}).join(',');const background=stops?`conic-gradient(${stops})`:'conic-gradient(var(--line) 0deg 360deg)';const circumference=2*Math.PI*42;let sliceOffset=0;const slices=active.map(c=>{const rawLength=sum?c.amount/sum*circumference:0;const gap=Math.min(2.4,rawLength*.2);const dash=Math.max(0,rawLength-gap);const offset=-sliceOffset;const midAngle=((sliceOffset+dash/2)/circumference)*Math.PI*2;sliceOffset+=rawLength;const label=appLanguage==='fa'?financeCategoryFa(c.id):c.name;return `<g data-category-id="${c.id}"><title>${esc(label)} · ${esc(formatMoney(c.amount,activeFinanceCurrency()))}</title><circle data-category-id="${c.id}" data-mid-angle="${midAngle}" cx="50" cy="50" r="42" fill="none" stroke="${c.color}" stroke-width="14" stroke-linecap="butt" stroke-dasharray="${dash.toFixed(3)} ${(circumference-dash).toFixed(3)}" stroke-dashoffset="${offset.toFixed(3)}"></circle></g>`;}).join('');const chart=`<div class="finance-pie-chart" role="img" aria-label="${esc(appLanguage==='fa'?'نمودار حلقه‌ای هزینه‌های ماهانه؛ برای دیدن دسته روی هر بخش بروید':'Monthly expense donut chart; hover a segment to see its category')}"><svg viewBox="0 0 100 100" aria-hidden="false" focusable="false">${slices}<circle cx="50" cy="50" r="33" fill="var(--panel)"/><text x="50" y="48" text-anchor="middle" fill="var(--ink)" font-size="7" font-weight="700">${esc(appLanguage==='fa'?'هزینه‌ها':'Expenses')}</text><text x="50" y="57" text-anchor="middle" fill="var(--muted)" font-size="5">${esc(formatMoney(sum,activeFinanceCurrency()))}</text></svg></div>`;const legend=active.length?`<div class="finance-pie-legend">${active.map(c=>`<div class="finance-pie-legend-row" data-category-id="${c.id}"><i style="--pie-color:${c.color}"></i><span>${esc(appLanguage==='fa'?financeCategoryFa(c.id):c.name)}</span><strong>${formatMoney(c.amount,activeFinanceCurrency())}</strong><small>${financeCanCompare()?`${financePercent(c.amount)}% ${appLanguage==='fa'?'از درآمد ماهانه':'of monthly income'}`:`${new Intl.NumberFormat(appLanguage==='fa'?'fa-IR':'en-US',{maximumFractionDigits:1}).format(sum?c.amount/sum*100:0)}% ${appLanguage==='fa'?'از هزینه‌ها':'of expenses'}`}</small></div>`).join('')}</div>`:`<p class="finance-pie-empty">${appLanguage==='fa'?'هنوز هزینه‌ای برای این ماه ثبت نشده است.':'No expenses recorded this month yet.'}</p>`;return `<div class="finance-pie-layout">${chart}${legend}</div>`;}
function financeCategoryFa(id){return ({transport:'رفت‌وآمد',food:'خوراک',clothing:'پوشاک',office:'اداری',internet:'اینترنت',personal:'شخصی',repairs:'تعمیرات',other:'غیره'})[id]||'غیره';}
function wireFinancePieConnectors(root){
  if(!root)return;
  const layout=root.querySelector('.finance-pie-layout');
  const chart=root.querySelector('.finance-pie-chart');
  const svg=chart?.querySelector('svg');
  const legend=root.querySelector('.finance-pie-legend');
  if(!layout||!chart||!svg||!legend)return;
  let overlay=layout.querySelector('.finance-pie-connector');
  if(!overlay){
    overlay=document.createElementNS('http://www.w3.org/2000/svg','svg');
    overlay.setAttribute('class','finance-pie-connector');
    overlay.setAttribute('aria-hidden','true');
    overlay.setAttribute('preserveAspectRatio','none');
    layout.append(overlay);
  }
  const clear=()=>{
    overlay.replaceChildren();
    overlay.style.removeProperty('--connector-color');
    legend.querySelectorAll('.is-linked').forEach(n=>n.classList.remove('is-linked'));
    svg.querySelectorAll('.is-linked').forEach(n=>n.classList.remove('is-linked'));
  };
  const rows=[...legend.querySelectorAll('.finance-pie-legend-row')];
  const groups=[...svg.querySelectorAll('g[data-category-id]')];
  const connect=(categoryId)=>{
    const row=rows.find(n=>n.dataset.categoryId===categoryId);
    const group=groups.find(n=>n.dataset.categoryId===categoryId);
    const circle=group?.querySelector('circle[data-mid-angle]');
    const title=row?.querySelector('span');
    const targetDot=row?.querySelector('i');
    if(!row||!group||!circle||!title||!targetDot)return;
    clear();
    row.classList.add('is-linked');
    group.classList.add('is-linked');
    const layoutRect=layout.getBoundingClientRect();
    const titleRect=title.getBoundingClientRect();
    const dotRect=targetDot.getBoundingClientRect();
    const matrix=svg.getScreenCTM();
    if(!matrix||!layoutRect.width||!layoutRect.height)return;
    const angle=Number(circle.dataset.midAngle);
    // Each data-mid-angle is the midpoint of its own visible arc. Place the start
    // on the outer stroke edge of that arc rather than aiming at an arbitrary side
    // of the circle (which could land on a different category segment).
    const ringPoint=svg.createSVGPoint();
    ringPoint.x=50+Math.cos(angle)*49;
    ringPoint.y=50+Math.sin(angle)*49;
    const screenPoint=ringPoint.matrixTransform(matrix);
    const x1=screenPoint.x-layoutRect.left;
    const y1=screenPoint.y-layoutRect.top;
    // Attach directly to the center of the colored dot beside the category title.
    const chartRect=chart.getBoundingClientRect();
    const x2=(dotRect.left+dotRect.width/2)-layoutRect.left;
    const y2=(dotRect.top+dotRect.height/2)-layoutRect.top;
    const elbowX=x1+(x2-x1)*.56;
    overlay.setAttribute('viewBox',`0 0 ${Math.max(1,layoutRect.width)} ${Math.max(1,layoutRect.height)}`);
    const color=circle.getAttribute('stroke')||getComputedStyle(circle).stroke||'var(--blue)';
    overlay.style.setProperty('--connector-color',color);
    const path=document.createElementNS('http://www.w3.org/2000/svg','path');
    path.setAttribute('d',`M ${x1.toFixed(2)} ${y1.toFixed(2)} L ${elbowX.toFixed(2)} ${y1.toFixed(2)} L ${elbowX.toFixed(2)} ${y2.toFixed(2)} L ${x2.toFixed(2)} ${y2.toFixed(2)}`);
    path.style.stroke=color;
    overlay.replaceChildren(path);
  };
  groups.forEach(group=>{
    const id=group.dataset.categoryId;
    group.onmouseenter=()=>connect(id);
    group.onfocusin=()=>connect(id);
    group.setAttribute('tabindex','0');
    group.setAttribute('role','button');
    group.setAttribute('aria-label',group.querySelector('title')?.textContent||id);
  });
  rows.forEach(row=>{
    const id=row.dataset.categoryId;
    row.onmouseenter=()=>connect(id);
    row.onmouseleave=clear;
    row.onfocusin=()=>connect(id);
    row.onfocusout=clear;
    row.tabIndex=0;
  });
  chart.onmouseleave=clear;
  if(!layout.dataset.connectorResizeBound){
    layout.dataset.connectorResizeBound='1';
    window.addEventListener('resize',()=>{
      const active=rows.find(r=>r.classList.contains('is-linked'));
      if(active)connect(active.dataset.categoryId);
    });
  }
}

function renderFinance(){
 const month=financeCurrentMonth(),monthRows=financeEntries.filter(x=>financePeriodKey(x.date)===month),viewRows=monthRows.filter(x=>financeTransactionCurrency(x)===activeFinanceCurrency()),monthIncome=viewRows.filter(x=>x.type==='income').reduce((a,x)=>a+Number(x.amount||0),0),monthExpenses=viewRows.filter(x=>x.type==='expense'),totalOut=monthExpenses.reduce((a,x)=>a+Number(x.amount||0),0),accountBalances=['USD','IRR'].map(currency=>{const rows=financeEntries.filter(x=>financeTransactionCurrency(x)===currency);const monthly=financeMonthlyIncomeCurrency===currency?financeMonthlyIncome:0;return {currency,records:rows.length+(monthly>0?1:0),balance:rows.filter(x=>x.type==='income').reduce((a,x)=>a+Number(x.amount||0),0)-rows.filter(x=>x.type==='expense').reduce((a,x)=>a+Number(x.amount||0),0)+monthly};}).filter(x=>x.records);
 const contexts=[{summary:$('#financeSummary'),list:$('#financeList'),pie:$('#financePieContent'),budget:$('#financeBudgetValue')},{summary:$('#plannerFinanceSummary'),list:$('#plannerFinanceList'),pie:$('#plannerFinancePieContent'),budget:$('#plannerFinanceBudgetValue')}].filter(x=>x.summary);
 contexts.forEach(({summary,list,pie,budget})=>{
  if(budget)budget.textContent=financeMonthlyIncome>0?formatMoney(financeMonthlyIncome,financeMonthlyIncomeCurrency):(appLanguage==='fa'?'ثبت نشده':'Not set');
  summary.innerHTML=`<div class="finance-stat income"><small>${appLanguage==='fa'?'درآمد این ماه':'Income this month'}</small><strong>${formatMoney(monthIncome)}</strong></div><div class="finance-stat expense"><small>${appLanguage==='fa'?'هزینه‌های این ماه':'Expenses this month'}</small><strong>${formatMoney(totalOut)}</strong></div><div class="finance-stat"><small>${appLanguage==='fa'?'ماندهٔ این ماه <span class="finance-net-note">(بدون درآمد ماهیانه)</span>':'Net this month <span class="finance-net-note">(excluding monthly income)</span>'}</small><strong>${formatMoney(monthIncome-totalOut)}</strong></div><div class="finance-stat balance"><small>${appLanguage==='fa'?'مانده کل حساب':'Total account balance'}</small><strong>${(accountBalances.length?accountBalances:[{currency:activeFinanceCurrency(),balance:0}]).map(x=>`<span>${formatMoney(x.balance,x.currency)}</span>`).join('')}</strong></div>`;
  if(pie){pie.innerHTML=financePieMarkup(monthExpenses);wireFinancePieConnectors(pie);}
  list.replaceChildren();
  if(!financeEntries.length){list.innerHTML=`<div class="finance-empty">${appLanguage==='fa'?'هنوز تراکنشی ثبت نشده است. اولین مورد را اضافه کنید.':'No transactions yet. Add your first one.'}</div>`;return;}
  const ordered=financeEntries.slice().sort((a,b)=>String(b.date||'').localeCompare(String(a.date||''))||Number(b.createdAt||0)-Number(a.createdAt||0));
  let lastDateKey='',group=null;
  ordered.forEach(item=>{
    const dateKey=/^\d{4}-\d{2}-\d{2}$/.test(String(item.date||''))?item.date:keyDate(new Date(Number(item.createdAt)||Date.now()));
    const date=parseKey(dateKey).toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{year:'numeric',month:'long',day:'numeric'});
    if(dateKey!==lastDateKey){
      group=document.createElement('section');group.className='finance-date-group';group.dataset.date=dateKey;
      const heading=document.createElement('h3');heading.className='finance-date-heading';heading.textContent=date;group.append(heading);list.append(group);lastDateKey=dateKey;
    }
    const row=document.createElement('article');row.className='finance-row';
    const cat=financeCategory(item.category);
    const expenseMeta=item.type==='expense'?`<span class="finance-row-tags"><span class="finance-category-tag" style="--pie-color:${cat.color}">${esc(appLanguage==='fa'?financeCategoryFa(cat.id):cat.name)}</span>${financeCanCompare(financeTransactionCurrency(item))?`<span class="finance-ratio">${financePercent(item.amount,financeTransactionCurrency(item))}% ${appLanguage==='fa'?'از درآمد ماهانه':'of monthly income'}</span>`:financeMonthlyIncome>0?`<span class="finance-ratio currency-mismatch">${appLanguage==='fa'?'ارز درآمد با این تراکنش متفاوت است':'Income currency differs from transaction'}</span>`:`<span class="finance-ratio">${appLanguage==='fa'?'درآمد ماهانه تنظیم نشده':'Monthly income not set'}</span>`}</span>`:'';
    row.innerHTML=`<span class="finance-kind ${item.type}">${ic(item.type==='income'?'trend-up':'down')}</span><span class="finance-detail"><strong>${esc(item.title)}</strong><small>${item.type==='income'?(appLanguage==='fa'?'درآمد':'Income'):(appLanguage==='fa'?'هزینه':'Expense')}</small>${expenseMeta}</span><strong class="finance-amount ${item.type}">${item.type==='income'?'+':'−'}${formatMoney(item.amount,financeTransactionCurrency(item))}</strong><button class="finance-edit" type="button" aria-label="${appLanguage==='fa'?'ویرایش تراکنش':'Edit transaction'}">${ic('edit')}</button><button class="finance-remove" type="button" aria-label="${appLanguage==='fa'?'حذف تراکنش':'Delete transaction'}">${ic('trash')}</button>`;
    row.querySelector('.finance-edit').onclick=()=>openFinanceTransactionEditor(item);
    row.querySelector('.finance-remove').onclick=()=>{financeEntries.splice(financeEntries.indexOf(item),1);store.set(KEYS.finance,financeEntries);renderFinance();};
    group.append(row);
    if(window.gsap&&!reduceMotion())gsap.fromTo(row,{y:12,opacity:0,scale:.98},{y:0,opacity:1,scale:1,duration:.3,ease:'power3.out',clearProps:'transform,opacity'});
  });
 });
}
function setFinanceIncome(value,currency=activeFinanceCurrency()){financeMonthlyIncome=Math.max(0,Number(value)||0);financeMonthlyIncomeCurrency=currency==='USD'?'USD':'IRR';financeIncomeCurrencyChosen=true;store.set(KEYS.financeIncome,financeMonthlyIncome);store.set(KEYS.financeIncomeCurrency,financeMonthlyIncomeCurrency);store.set(KEYS.financeIncomeCurrencyChosen,true);}
function openFinanceIncomeEditor(origin='settings'){financeIncomeOrigin=origin;$('#financeMonthlyIncomeInput').value=financeMonthlyIncome||'';$('#financeMonthlyIncomeCurrency').value=financeMonthlyIncomeCurrency|| (appLanguage==='fa'?'IRR':'USD');$('#financeIncomeTitle').textContent=financeMonthlyIncome>0?(appLanguage==='fa'?'ویرایش درآمد ماهانه':'Edit monthly income'):(appLanguage==='fa'?'درآمد ماهانه':'Monthly income');$('#financeIncomeSkip').textContent=origin==='entry'?(appLanguage==='fa'?'فعلاً نه':'Not now'):(appLanguage==='fa'?'لغو':'Cancel');openOverlay($('#financeIncomeOverlay'),'#financeMonthlyIncomeInput');}
function enterFinanceDestination(){if(financeMonthlyIncome<=0&&!store.get(KEYS.financeIncomePrompted,false)){openFinanceIncomeEditor('entry');return;}completeFinanceEntry();}
function completeFinanceEntry(){financeAccessGranted=true;if(financeEntryDestination==='planner'){if(planner.view!=='finance')planner.returnView=planner.view;planner.view='finance';if(state.page!=='planner')showPage('planner');else renderPlanner(true);}else showPage('finance');}
function showFinanceSecurityMode(mode){$('#financeSecurityChoice').hidden=mode!=='choice';$('#financePasswordForm').hidden=mode!=='password';$('#financeUnlockForm').hidden=mode!=='unlock';$('#financeSecurityManage').hidden=mode!=='manage';const titles={choice:'Finance password',password:financeSecurityOrigin==='entry'?'Set a Finance password':'Set or change Finance password',unlock:'Unlock Finance',manage:'Finance password settings'};$('#financeSecurityTitle').textContent=titles[mode];$('#financePasswordError').textContent='';$('#financeUnlockError').textContent='';$('#financePasswordInput').value='';$('#financePasswordConfirm').value='';$('#financeUnlockInput').value='';}
function requestFinanceAccess(destination='page'){financeEntryDestination=destination;if(financeAccessGranted){enterFinanceDestination();return;}const record=store.get(KEYS.financePassword,null);if(record?.hash){financeSecurityOrigin='entry';showFinanceSecurityMode('unlock');openOverlay($('#financeSecurityOverlay'),'#financeUnlockInput');return;}if(store.getRaw(KEYS.financeSecurityChoice,'')==='off'){enterFinanceDestination();return;}financeSecurityOrigin='entry';showFinanceSecurityMode('choice');openOverlay($('#financeSecurityOverlay'),'#financeSecurityEnable');}
function manageFinanceSecurity(){financeSecurityOrigin='settings';showFinanceSecurityMode('manage');$('#financeSecurityRemove').hidden=!store.get(KEYS.financePassword,null)?.hash;openOverlay($('#financeSecurityOverlay'),'#financeSecuritySetNew');}
function bytesHex(bytes){return [...bytes].map(b=>b.toString(16).padStart(2,'0')).join('');}
async function financePasswordHash(password,salt,iterations=120000){if(window.crypto?.subtle){const key=await crypto.subtle.importKey('raw',new TextEncoder().encode(password),'PBKDF2',false,['deriveBits']);const bits=await crypto.subtle.deriveBits({name:'PBKDF2',salt:new Uint8Array(salt.match(/.{2}/g).map(x=>parseInt(x,16))),iterations,hash:'SHA-256'},key,256);return bytesHex(new Uint8Array(bits));}let h=2166136261;for(const c of `${salt}:${password}`){h^=c.charCodeAt(0);h=Math.imul(h,16777619);}return (h>>>0).toString(16).padStart(8,'0').repeat(8);}
async function makeFinancePasswordRecord(password){const random=new Uint8Array(16);if(window.crypto?.getRandomValues)crypto.getRandomValues(random);else for(let i=0;i<random.length;i++)random[i]=Math.floor(Math.random()*256);const salt=bytesHex(random),iterations=120000;return {salt,iterations,hash:await financePasswordHash(password,salt,iterations)};}
async function verifyFinancePassword(password,record){try{return !!record&&await financePasswordHash(password,record.salt,record.iterations||120000)===record.hash;}catch{return false;}}
$('#financeSecurityEnable').onclick=()=>{financeSecurityOrigin='entry';showFinanceSecurityMode('password');$('#financePasswordHelp').textContent='Choose a password with at least 6 characters, then confirm it.';$('#financePasswordInput').focus();};
$('#financeSecuritySkip').onclick=()=>{store.set(KEYS.financeSecurityChoice,'off');closeOverlay($('#financeSecurityOverlay'));financeAccessGranted=true;enterFinanceDestination();};
$('#financePasswordForm').onsubmit=async e=>{e.preventDefault();const password=$('#financePasswordInput').value,confirm=$('#financePasswordConfirm').value;if(password.length<6){$('#financePasswordError').textContent='Password must be at least 6 characters.';return;}if(password!==confirm){$('#financePasswordError').textContent='Passwords do not match.';return;}const origin=financeSecurityOrigin;const record=await makeFinancePasswordRecord(password);if(!store.set(KEYS.financePassword,record)){ $('#financePasswordError').textContent='Could not save the password on this device.';return;}store.set(KEYS.financeSecurityChoice,'on');closeOverlay($('#financeSecurityOverlay'));if(origin==='entry'){financeAccessGranted=true;enterFinanceDestination();}else toast(appLanguage==='fa'?'رمز امور مالی ذخیره شد':'Finance password saved');};
$('#financeUnlockForm').onsubmit=async e=>{e.preventDefault();const ok=await verifyFinancePassword($('#financeUnlockInput').value,store.get(KEYS.financePassword,null));if(!ok){$('#financeUnlockError').textContent='Incorrect password.';$('#financeUnlockInput').select();return;}closeOverlay($('#financeSecurityOverlay'));financeAccessGranted=true;enterFinanceDestination();};
$('#financeForgotPassword').onclick=()=>{closeOverlay($('#financeSecurityOverlay'));showPage('settings');requestAnimationFrame(manageFinanceSecurity);};
$('#financeSecuritySettings').onclick=manageFinanceSecurity;
$('#financeSecuritySetNew').onclick=()=>{financeSecurityOrigin='settings';showFinanceSecurityMode('password');$('#financePasswordHelp').textContent='Set a new password here. The previous password is not required in Settings.';$('#financePasswordInput').focus();};
$('#financeSecurityRemove').onclick=async()=>{const ok=await confirmDialog({title:'Remove Finance password?',text:'Finance will open without a password on this device.',ok:'Remove password'});if(!ok)return;store.set(KEYS.financePassword,null);store.set(KEYS.financeSecurityChoice,'off');closeOverlay($('#financeSecurityOverlay'));toast(appLanguage==='fa'?'رمز امور مالی حذف شد':'Finance password removed');};
$('#financeIncomeForm').onsubmit=e=>{e.preventDefault();const amount=Number($('#financeMonthlyIncomeInput').value);if(!Number.isFinite(amount)||amount<=0)return;const origin=financeIncomeOrigin;setFinanceIncome(amount,$('#financeMonthlyIncomeCurrency').value);store.set(KEYS.financeIncomePrompted,true);closeOverlay($('#financeIncomeOverlay'));renderFinance();if(origin==='entry')completeFinanceEntry();else toast(appLanguage==='fa'?'درآمد ماهانه ذخیره شد':'Monthly income saved');};
$('#financeIncomeSkip').onclick=()=>{const origin=financeIncomeOrigin;if(origin==='entry')store.set(KEYS.financeIncomePrompted,true);closeOverlay($('#financeIncomeOverlay'));if(origin==='entry')completeFinanceEntry();};
document.querySelectorAll('[data-finance-edit-income]').forEach(b=>b.onclick=()=>openFinanceIncomeEditor('settings'));
function openFinanceTransactionEditor(item=null){$('#financeForm').reset();$('#financeEditId').value=item?.id||'';$('#financeDialogTitle').textContent=item?(appLanguage==='fa'?'ویرایش تراکنش':'Edit transaction'):(appLanguage==='fa'?'تراکنش جدید':'Add transaction');$('#financeSubmit').textContent=item?(appLanguage==='fa'?'ذخیره تغییرات':'Save changes'):(appLanguage==='fa'?'ذخیره تراکنش':'Save transaction');$('#financeTitle').value=item?.title||'';$('#financeType').value=item?.type||'expense';$('#financeAmount').value=item?.amount??'';$('#financeCategory').value=item?.category||'other';$('#financeDate').value=item?.date||keyDate(new Date());$('#financeCategoryField').hidden=(item?.type||'expense')==='income';$('#financeCurrencyLabel').textContent=financeCurrencyLabelText(item?.currency||activeFinanceCurrency());refreshLocalizedDateInputs();openOverlay($('#financeOverlay'),'#financeTitle');}
document.querySelectorAll('[data-finance-add]').forEach(b=>b.onclick=()=>openFinanceTransactionEditor());
$('#financeType').onchange=()=>{$('#financeCategoryField').hidden=$('#financeType').value==='income';};
$('#financeForm').onsubmit=e=>{e.preventDefault();const amount=Number($('#financeAmount').value),type=$('#financeType').value;if(!Number.isFinite(amount)||amount<=0)return;const editId=$('#financeEditId').value,existing=financeEntries.find(x=>String(x.id)===editId),record={id:existing?.id||'fin-'+Date.now().toString(36),title:$('#financeTitle').value.trim(),type,amount,currency:existing?financeTransactionCurrency(existing):activeFinanceCurrency(),category:type==='expense'?$('#financeCategory').value:'',date:$('#financeDate').value||keyDate(new Date()),createdAt:existing?.createdAt||Date.now()};if(existing){Object.assign(existing,record);toast(appLanguage==='fa'?'تراکنش به‌روزرسانی شد':'Transaction updated');}else{financeEntries.push(record);toast(appLanguage==='fa'?'تراکنش ذخیره شد':'Transaction saved');}store.set(KEYS.finance,financeEntries);closeOverlay($('#financeOverlay'));renderFinance();};
$$('[data-language-choice]').forEach(b=>b.onclick=()=>setLanguage(b.dataset.languageChoice));

$('#themeBtn').onclick = () => {
  const toDark = document.documentElement.dataset.theme !== 'dark';
  applyTheme(toDark ? 'dark' : 'light');
  renderPalettes();
  playEffect('Changing-background-sound.mp3');
};
function renderSoundBtn() {
  $('#soundBtn').innerHTML = `${ic(state.sound ? 'volume' : 'mute')}<span>Sound effects</span><span class="end">${state.sound ? 'On' : 'Off'}</span>`;
}
$('#soundBtn').onclick = () => {
  state.sound = !state.sound;
  store.set(KEYS.sound, String(state.sound));
  renderSoundBtn();
  toast(state.sound ? 'Sound effects on' : 'Sound effects off');
};

$('#exportBtn').onclick = () => {
  const data = { app: 'FocusFlow', version: 52, exportDate: new Date().toISOString(), tasks: state.tasks, plannerEntries: planner.entries, plannerBuckets: planner.buckets, plannerProjects: planner.projects, financeMonthlyIncome, financeMonthlyIncomeCurrency, financeMonthHistory, finance: financeEntries, goal: state.goal, focusSecondsByDay: state.focus, sessionsByDay: state.sessions };
  const url = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }));
  const a = document.createElement('a');
  a.href = url; a.download = `FocusFlow-backup-${keyDate(new Date())}.json`;
  document.body.append(a); a.click(); a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  toast('Backup downloaded');
};
$('#importBtn').onclick = () => $('#importFile').click();
$('#importFile').onchange = e => {
  const file = e.target.files[0];
  e.target.value = '';
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const data = JSON.parse(reader.result);
      const taskData = Array.isArray(data) ? data : data?.tasks;
      const list = (Array.isArray(taskData) ? taskData : []).map(sanitizeTask).filter(Boolean);
      const planData = !Array.isArray(data) && Array.isArray(data?.plannerEntries) ? data.plannerEntries : [];
      const planList = planData.map(sanitizePlan).filter(Boolean);
      const projectList=(!Array.isArray(data)&&Array.isArray(data?.plannerProjects)?data.plannerProjects:[]).map(sanitizeProject).filter(Boolean);
      const financeList=!Array.isArray(data)&&Array.isArray(data?.finance)?data.finance.filter(x=>x&&typeof x.title==='string'&&Number.isFinite(Number(x.amount))&&/^\d{4}-\d{2}-\d{2}$/.test(x.date)&&['income','expense'].includes(x.type)):[];
      if (!list.length && !planList.length && !projectList.length && !financeList.length) return toast('No valid tasks or planner entries found in this file');
      // Merge (never destroys existing data): skip tasks that already exist.
      const ids = new Set(state.tasks.map(t => t.id));
      const fresh = list.filter(t => !ids.has(t.id));
      state.tasks.push(...fresh);
      const planIds = new Set(planner.entries.map(p => p.id));
      const freshPlans = planList.filter(p => { if (planIds.has(p.id)) return false; planIds.add(p.id); return true; });
      let freshProjectCount=0;projectList.forEach(project=>{if(!planner.projects.some(p=>p.id===project.id)){planner.projects.push(project);freshProjectCount++;}});
      const bucketData = !Array.isArray(data) && Array.isArray(data?.plannerBuckets) ? data.plannerBuckets : [];
      bucketData.map(sanitizeBucket).filter(Boolean).forEach(bucket => {if(!planner.buckets.some(b=>b.id===bucket.id))planner.buckets.push(bucket);});
      planner.entries.push(...freshPlans);const financeIds=new Set(financeEntries.map(x=>x.id));const freshFinance=financeList.filter(x=>{if(financeIds.has(x.id))return false;financeIds.add(x.id);return true;}).map(x=>({id:String(x.id||'fin-'+Date.now().toString(36)),title:String(x.title).slice(0,100),type:x.type,category:FINANCE_CATEGORIES.some(c=>c.id===x.category)?x.category:(x.type==='expense'?'other':''),currency:['USD','IRR'].includes(x.currency)?x.currency:activeFinanceCurrency(),amount:Math.max(0,Number(x.amount)),date:x.date,createdAt:Number(x.createdAt)||Date.now()}));financeEntries.push(...freshFinance);if(freshFinance.length)store.set(KEYS.finance,financeEntries);if(Number(data?.financeMonthlyIncome)>0)setFinanceIncome(Number(data.financeMonthlyIncome),data.financeMonthlyIncomeCurrency);if(data?.financeMonthHistory&&typeof data.financeMonthHistory==='object'&&!Array.isArray(data.financeMonthHistory)){Object.entries(data.financeMonthHistory).forEach(([k,v])=>{if(/^(fa|en):\d{4}-\d{2}-\d{2}$/.test(k)&&v&&Number.isFinite(Number(v.amount))&&Number(v.amount)>=0&&['USD','IRR'].includes(v.currency))financeMonthHistory[k]={amount:Number(v.amount),currency:v.currency,periodStart:String(v.periodStart||k.split(':')[1]),periodEnd:String(v.periodEnd||''),recordedAt:String(v.recordedAt||'')};});store.set(FINANCE_MONTH_HISTORY_KEY,financeMonthHistory);}normalizePlannerRelations();
      if (freshPlans.length || bucketData.length || projectList.length) savePlanner();
      if (!Array.isArray(data)) {
        if (data.focusSecondsByDay) Object.entries(sanitizeDayMap(data.focusSecondsByDay)).forEach(([k, v]) => (state.focus[k] = Math.max(focusSecs(k), v)));
        if (data.sessionsByDay) Object.entries(sanitizeDayMap(data.sessionsByDay)).forEach(([k, v]) => (state.sessions[k] = Math.max(state.sessions[k] || 0, v)));
        if (data.goal && !state.goal) { state.goal = String(data.goal).slice(0, 160); store.set(KEYS.goal, state.goal); }
        store.set(KEYS.focus, state.focus); store.set(KEYS.sessions, state.sessions);
      }
      save(); refreshAll();
      closeOverlay(menu);
      toast(fresh.length || freshPlans.length || freshProjectCount || freshFinance.length ? `Restored ${fresh.length} tasks · ${freshPlans.length} planner items · ${freshProjectCount} plans · ${freshFinance.length} transactions` : 'All entries in this backup already exist');
    } catch { toast('Could not read this backup file'); }
  };
  reader.readAsText(file);
};
$('#clearDoneBtn').onclick = async () => {
  const done = state.tasks.filter(t => t.done);
  if (!done.length) return toast('No completed tasks to clear');
  const ok = await confirmDialog({ title: 'Clear completed tasks?', text: `${done.length} completed task${done.length > 1 ? 's' : ''} will be removed. You can undo right after.`, ok: 'Clear' });
  if (!ok) return;
  const before = state.tasks.slice();
  closeOverlay(menu);
  const rows = state.page === 'home' ? $$('#taskList .task.done') : [];
  if (rows.length && hasGSAP && !reduceMotion()) gsap.to('#taskList .list-label', { opacity: 0, duration: 0.3, delay: 0.25 });
  await Promise.all(rows.map((r, i) => animateDelete(r, { delay: 0.3 + i * 0.09 })));
  state.tasks = state.tasks.filter(t => !t.done);
  save(); refreshAll();
  toast(`Cleared ${done.length} task${done.length > 1 ? 's' : ''}`, 'Undo', () => { state.tasks = before; save(); flipRefresh(); toast('Tasks restored'); });
};
$('#settingsInfo').onclick = () => { closeOverlay(menu); showPage('settings'); };
$('#themePageOpen').onclick = () => showPage('theme');
$('#financeSettingsOpen').onclick = () => showPage('finance');
$('#financeIncomeSettings').onclick=()=>openFinanceIncomeEditor('settings');
$('#menuThemePage').onclick = () => { closeOverlay(menu); renderPalettes(); showPage('theme'); };
$('#financeOpen').onclick = () => { closeOverlay(menu); showPage('finance'); };
$$('[data-settings-back]').forEach(button => (button.onclick = () => showPage('settings')));
$('#settingsPage [data-settings-home]').onclick = () => showPage('home');
$('#financePage [data-settings-home]').onclick = () => showPage('home');
$('#vipInfo').onclick = () => toast('VIP lifetime plan active');
$('#donateInfo').onclick = () => toast('Thank you for supporting FocusFlow!');

/* ======================================================================
   Keyboard
   ====================================================================== */
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && openStack.length) { e.preventDefault(); closeOverlay(openStack[openStack.length - 1]); return; }
  const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement?.tagName) || document.activeElement?.isContentEditable;
  if (typing || openStack.length || e.metaKey || e.ctrlKey || e.altKey) return;
  if (e.key === ' ' && (state.page === 'player' || state.page === 'music') && !e.target.closest('button,[role=button]')) { e.preventDefault(); togglePlayback(); }
  else if (e.key === 'p' || e.key === 'P') { e.preventDefault(); showPage('planner'); }
  else if (e.key === 'n' || e.key === 'N') { e.preventDefault(); handleAdd(); }
  else if (e.key === '/') { e.preventDefault(); if (desktopLayout.matches) $('#desktopSearchInput').focus(); else $('#searchBtn').click(); }
  else if (state.page === 'home' && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
    const d = new Date(state.selected); d.setDate(d.getDate() + (e.key === 'ArrowRight' ? 1 : -1)); selectDate(d, 'smooth');
  }
});

/* ======================================================================
   Midnight rollover — keep "today" correct if the app stays open
   ====================================================================== */
let lastToday = keyDate(new Date());
setInterval(() => {
  const now = keyDate(new Date());
  if (now !== lastToday) {
    const wasToday = keyDate(state.selected) === lastToday;
    lastToday = now;
    if (wasToday) state.selected = noon(new Date());
    refreshAll();
  }
}, 60000);

/* ======================================================================
   Theme-aware illustrations — the category / empty-state SVGs are
   recoloured on the fly from the active palette (light + dark).
   ====================================================================== */
const artCache = new Map();
const hexRgb = h => { h = String(h).trim().replace('#', ''); if (h.length === 3) h = [...h].map(c => c + c).join(''); const n = parseInt(h.slice(0, 6), 16); return Number.isFinite(n) ? [n >> 16 & 255, n >> 8 & 255, n & 255] : [128, 128, 128]; };
const rgbHex = a => '#' + a.map(v => Math.round(Math.max(0, Math.min(255, v))).toString(16).padStart(2, '0')).join('');
const mixHex = (a, b, t) => { const A = hexRgb(a), B = hexRgb(b); return rgbHex(A.map((v, i) => v + (B[i] - v) * t)); };
function artPalette() {
  const dark = document.documentElement.dataset.theme === 'dark';
  const v = n => cssVar(n) || '#888888';
  const accent = v('--blue'), light = v('--blue-light'), deepA = v('--blue-dark'), ink = v('--ink'), muted = v('--muted');
  const panel = v('--panel'), panel2 = v('--panel-2'), heat = v('--heat-0');
  const deep = dark ? mixHex(deepA, panel, 0.2) : mixHex(ink, accent, 0.18);
  const map = {
    '#6c63ff': accent,                                             // unDraw primary
    '#ff6584': dark ? light : deepA, '#ff6582': dark ? light : deepA, // secondary accent
    '#2f2e41': deep, '#3f3d56': deep, '#3a3768': deep, '#4c4c56': deep, '#444052': deep, '#444053': deep,
    '#67647e': mixHex(deep, panel, 0.3),
    '#090814': dark ? mixHex(muted, panel, 0.15) : ink,            // outlines / hair / ground
    '#e6e6e6': mixHex(heat, accent, 0.12), '#e4e4e4': mixHex(heat, accent, 0.12), '#d6d6e3': mixHex(heat, accent, 0.2), '#cccccc': mixHex(heat, accent, 0.25),
    '#f2f2f2': panel2, '#fafafa': panel2, '#eaecf0': panel2, '#dfe6f5': mixHex(panel2, accent, 0.1), '#e2e7f0': mixHex(panel2, accent, 0.08),
    '#ffffff': dark ? mixHex(panel2, ink, 0.12) : panel
  };
  return { map, sig: Object.values(map).join('') };
}
function themedArt(key) {
  const raw = assetRaw(key);
  if (!raw || !raw.startsWith('data:image/svg+xml')) return raw || '';
  let svg = artCache.get('src:' + key);
  if (!svg) {
    try { svg = new TextDecoder().decode(Uint8Array.from(atob(raw.split(',')[1]), c => c.charCodeAt(0))); }
    catch { return raw; }
    artCache.set('src:' + key, svg);
  }
  const pal = artPalette(), id = key + '|' + pal.sig;
  if (!artCache.has(id)) {
    const out = svg.replace(/#([0-9a-f]{6}|[0-9a-f]{3})\b/gi, m => {
      let h = m.toLowerCase(); if (h.length === 4) h = '#' + [...h.slice(1)].map(c => c + c).join('');
      return pal.map[h] || m;
    });
    artCache.set(id, 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(out));
  }
  return artCache.get(id);
}
let artFloat = null;
function updateEmptyArt(fade = false) {
  const img = $('#emptyArt'), key = img?.dataset.key;
  if (!key) return;
  img.src = themedArt(key);
  if (!hasGSAP || reduceMotion()) return;
  if (!artFloat && !isLite()) artFloat = gsap.to(img, { yPercent: -4, rotation: 0.6, duration: 2.4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  if (fade) gsap.fromTo(img, { opacity: 0.25, scale: 0.94 }, { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out', clearProps: 'opacity,scale' });
}

/* ======================================================================
   Section intros (GSAP) — every page and sheet gets its own entrance
   ====================================================================== */
if (hasGSAP) { gsap.config({ nullTargetWarn: false }); document.documentElement.classList.add('gsap-ready'); }
const isDoneRow = el => el.classList.contains('done');
const rowOpacity = (i, el) => (isDoneRow(el) ? 0.78 : 1);
const titleIn = tl => tl.fromTo('.section-title > *', { y: -14, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, stagger: 0.07, clearProps: 'transform,opacity' }, 0);

const PAGE_INTROS = {
  settings(){gsap.timeline({defaults:{ease:'power3.out'}}).fromTo('#settingsPage .section-title, #settingsPage .settings-intro', {y:16,opacity:0},{y:0,opacity:1,duration:.4,stagger:.06,clearProps:'transform,opacity'}).fromTo('#settingsPage .settings-block, #settingsPage .settings-option',{y:22,opacity:0,scale:.97},{y:0,opacity:1,scale:1,duration:.45,stagger:.09,ease:'back.out(1.3)',clearProps:'transform,opacity'},.12);},
  theme(){gsap.timeline({defaults:{ease:'power3.out'}}).fromTo('#themePage .section-title, #themeModeLabel',{y:14,opacity:0},{y:0,opacity:1,duration:.38,stagger:.06,clearProps:'transform,opacity'}).fromTo('#themePaletteGrid .palette',{y:22,scale:.88,opacity:0},{y:0,scale:1,opacity:1,duration:.48,ease:'back.out(1.5)',stagger:.055,clearProps:'transform,opacity'},.1);},
  finance(){gsap.timeline({defaults:{ease:'power3.out'}}).fromTo('#financePage .section-title, #financePage .settings-intro',{y:14,opacity:0},{y:0,opacity:1,duration:.38,stagger:.06,clearProps:'transform,opacity'}).fromTo('#financePage .finance-income-strip, #financeSummary .finance-stat, #financePage .finance-pie-card',{y:20,opacity:0,scale:.96},{y:0,opacity:1,scale:1,duration:.48,ease:'back.out(1.4)',stagger:.07,clearProps:'transform,opacity'},.12).fromTo('#financePage .finance-toolbar, #financeList .finance-row, #financeList .finance-empty',{y:18,opacity:0},{y:0,opacity:1,duration:.42,stagger:.06,clearProps:'transform,opacity'},.28);},
  planner(){gsap.timeline({defaults:{ease:'power3.out'}}).fromTo('#plannerPage .pl-workspace-head, #plannerPage .pl-projectbar, #plannerPage .pl-viewbar, #plannerFinanceView .finance-income-strip, #plannerFinanceView .finance-pie-card, #plannerFinanceView .finance-stat',{y:16,opacity:0},{y:0,opacity:1,duration:.4,stagger:.055,clearProps:'transform,opacity'}).fromTo('#plannerPage .pl-list-table tbody tr, #plannerPage .pl-bucket, #plannerPage .planner-day, #plannerPage .pl-chart-panel, #plannerPage .pl-chart-stat',{y:18,opacity:0},{y:0,opacity:1,duration:.42,stagger:.045,clearProps:'transform,opacity'},.17);},
  home() {
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.day-head > *', { x: -16, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.06, clearProps: 'transform,opacity' }, 0)
      .fromTo('#dateStrip .day', { y: 22, opacity: 0, scale: 0.8 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)', stagger: { each: 0.016, from: 'center' }, clearProps: 'transform,opacity' }, 0.05)
      .fromTo('#tagStrip .tag', { x: 34, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, stagger: 0.035, clearProps: 'transform,opacity' }, 0.15)
      .fromTo('#taskList > *', { y: 26, opacity: 0 }, { y: 0, opacity: rowOpacity, duration: 0.5, ease: 'back.out(1.4)', stagger: 0.06, clearProps: 'transform,opacity' }, 0.25)
      .fromTo('#emptyState:not([hidden]) > *', { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.6)', stagger: 0.08, clearProps: 'y,opacity' }, 0.25);
  },
  calendar() {
    if (desktopLayout.matches) { gsap.fromTo('.calendar-months .calendar-card', {y:12, opacity:0}, {y:0, opacity:1, duration:.35, stagger:.07, clearProps:'transform,opacity'}); return; }
    const cells = $$('#calendarGrid .calday');
    const sel = cells.findIndex(c => c.classList.contains('selected'));
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    titleIn(tl)
      .fromTo('#calendarCard', { y: 34, opacity: 0, scale: 0.95 }, { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: 'back.out(1.3)', clearProps: 'transform,opacity' }, 0.05)
      .fromTo('.month-head button', { scale: 0, rotation: i => (i ? 120 : -120) }, { scale: 1, rotation: 0, duration: 0.55, ease: 'back.out(2.5)', stagger: 0.06, clearProps: 'transform' }, 0.25)
      .fromTo('#monthTitle', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, clearProps: 'transform,opacity' }, 0.3)
      .fromTo('.weekdays span', { y: -10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, stagger: 0.035, clearProps: 'transform,opacity' }, 0.32)
      .fromTo(cells, { scale: 0, opacity: 0, rotation: -25 }, { scale: 1, opacity: (i, el) => (el.classList.contains('muted') ? 0.45 : 1), rotation: 0, duration: 0.5, ease: 'back.out(2)', stagger: { grid: [6, 7], from: sel >= 0 ? sel : 'center', amount: 0.55 }, clearProps: 'transform,opacity' }, 0.36)
      .fromTo('#calHint', { opacity: 0 }, { opacity: 1, duration: 0.4, clearProps: 'opacity' }, 0.85);
  },
  progress() {
    if (desktopLayout.matches) {
      gsap.fromTo('#progressPage .progress-ring-wrap, #progressPage .metric, #progressPage > .card:not(.stats-top)', {y:12, opacity:0}, {y:0, opacity:1, duration:.35, stagger:.04, clearProps:'transform,opacity'});
      return;
    }
    const pct = Number($('#ring').style.getPropertyValue('--p')) || 0;
    const tpct = Number($('#todayRing').style.getPropertyValue('--p')) || 0;
    const bars = $$('#catStats .track span'), widths = bars.map(b => b.style.width);
    const metricVals = ['#totalMetric', '#completedMetric', '#remainingMetric'].map(s => Number($(s).textContent) || 0);
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    titleIn(tl)
      .fromTo('.card', { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, stagger: 0.08, clearProps: 'transform,opacity' }, 0.05)
      .fromTo('#todayRing', { '--p': 0, rotation: -90 }, { '--p': tpct, rotation: 0, duration: 1.1, ease: 'power2.out', clearProps: 'transform' }, 0.15)
      .add(countUp($('#todayPct'), tpct, v => Math.round(v) + '%'), 0.15)
      .fromTo('#todayBar', { width: '0%' }, { width: tpct + '%', duration: 1, ease: 'power2.out' }, 0.25)
      .fromTo('#todayChips span', { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(2.5)', stagger: 0.07, clearProps: 'transform,opacity' }, 0.5)
      .fromTo('#ring', { '--p': 0, scale: 0.85 }, { '--p': pct, scale: 1, duration: 1.3, ease: 'power2.out', clearProps: 'transform' }, 0.25)
      .add(countUp($('#percent'), pct, v => Math.round(v) + '%'), 0.25)
      .fromTo('.metric', { y: 20, scale: 0.7, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.55, ease: 'back.out(2.2)', stagger: 0.08, clearProps: 'transform,opacity' }, 0.4)
      .add(countUp($('#totalMetric'), metricVals[0]), 0.45)
      .add(countUp($('#completedMetric'), metricVals[1]), 0.5)
      .add(countUp($('#remainingMetric'), metricVals[2]), 0.55)
      .fromTo('.goal-card .gi', { scale: 0, rotation: -180 }, { scale: 1, rotation: 0, duration: 0.75, ease: 'back.out(2)', clearProps: 'transform' }, 0.5)
      .fromTo('#focusChart path:not(.line)', { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.75)
      .fromTo('#focusChart .line', window.DrawSVGPlugin ? { drawSVG: '0%' } : { opacity: 0 }, window.DrawSVGPlugin ? { drawSVG: '100%', duration: 1.1, ease: 'power2.inOut' } : { opacity: 1, duration: 0.6 }, 0.6)
      .fromTo('#focusChart .pt', { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.45, ease: 'back.out(3)', stagger: 0.12 }, 0.7)
      .fromTo('#focusChart .val', { y: 6, opacity: 0 }, { y: 0, opacity: 1, duration: 0.35, stagger: 0.12 }, 0.85)
      .fromTo('#heatmap .hm-cell', { scale: 0 }, { scale: 1, duration: 0.35, ease: 'back.out(2)', stagger: { amount: 0.9, from: 'end' }, clearProps: 'transform' }, 0.7)
      .fromTo('.cat-row', { x: -24, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, stagger: 0.07, clearProps: 'transform,opacity' }, 0.8)
      .fromTo('.cat-row .ci', { scale: 0, rotation: -90 }, { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(2.4)', stagger: 0.07, clearProps: 'transform' }, 0.85)
      .fromTo(bars, { width: '0%' }, { width: i => widths[i], duration: 0.9, ease: 'power2.out', stagger: 0.07 }, 0.9);
  },
  stats() {
    const n = Number($('#statsCount').textContent) || 0;
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    titleIn(tl)
      .fromTo('.stats-summary', { y: 24, opacity: 0, scale: 0.96 }, { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.6)', clearProps: 'transform,opacity' }, 0.05)
      .add(countUp($('#statsCount'), n), 0.15)
      .fromTo('#statsList .task', { x: -36, opacity: 0 }, { x: 0, opacity: rowOpacity, duration: 0.45, ease: 'back.out(1.4)', stagger: 0.05, clearProps: 'transform,opacity' }, 0.2)
      .fromTo('#statsEmpty:not([hidden]) > *', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.08, clearProps: 'transform,opacity' }, 0.2);
  },
  music() {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    titleIn(tl)
      .fromTo('#musicHero', { y: 34, opacity: 0, scale: 0.94 }, { y: 0, opacity: 1, scale: 1, duration: 0.65, ease: 'back.out(1.4)', clearProps: 'transform,opacity' }, 0.05)
      .fromTo('#heroCover', { scale: 1.4 }, { scale: 1.05, duration: 1.5, ease: 'power2.out', clearProps: 'transform' }, 0.05)
      .fromTo('#musicHero > small, #musicHero > h2, #musicHero > p', { y: 18, opacity: 0 }, { y: 0, opacity: (i, el) => (el.tagName === 'H2' ? 1 : 0.85), duration: 0.45, stagger: 0.08, clearProps: 'transform,opacity' }, 0.3)
      .fromTo('#heroPlay', { scale: 0, rotation: -140 }, { scale: 1, rotation: 0, duration: 0.75, ease: 'back.out(2.6)', clearProps: 'transform' }, 0.45)
      .fromTo('#musicPage .list-head', { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, clearProps: 'transform,opacity' }, 0.45)
      .fromTo('#musicList .song', { x: 50, opacity: 0 }, { x: 0, opacity: 1, duration: 0.55, ease: 'back.out(1.5)', stagger: 0.08, clearProps: 'transform,opacity' }, 0.5)
      .fromTo('#musicList .song img', { scale: 0.5, rotation: -20 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(2.2)', stagger: 0.08, clearProps: 'transform' }, 0.55);
  },
  player() {
    const end = document.body.classList.contains('music-playing') ? 1 : 0.9;
    gsap.timeline({ defaults: { ease: 'power3.out' } })
      .fromTo('.player-top > *', { y: -18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.06, clearProps: 'transform,opacity' }, 0)
      .fromTo('.player-art', { scale: 0.55, rotation: -12, opacity: 0 }, { scale: end, rotation: 0, opacity: 1, duration: 1, ease: 'elastic.out(1,0.6)', clearProps: 'transform,opacity' }, 0.05)
      .fromTo('#visualizer', { scaleY: 0, opacity: 0 }, { scaleY: 1, opacity: 1, duration: 0.5, clearProps: 'transform,opacity' }, 0.45)
      .fromTo('.player-info > *', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, stagger: 0.07, clearProps: 'transform,opacity' }, 0.35)
      .fromTo('.player-seek', { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, clearProps: 'transform,opacity' }, 0.45)
      .fromTo('.player-controls > .pc', { y: 26, opacity: 0, scale: 0.6 }, { y: 0, opacity: 1, scale: 1, duration: 0.55, ease: 'back.out(2.2)', stagger: { each: 0.06, from: 'center' }, clearProps: 'transform,opacity' }, 0.5)
      .fromTo('.player-volume', { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, clearProps: 'transform,opacity' }, 0.65)
      .fromTo('#upNext:not([hidden]) .song', { x: 40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.45, stagger: 0.07, clearProps: 'transform,opacity' }, 0.75);
  }
};
let pageCtx = null;
function animatePage(name) {
  pageCtx?.revert(); pageCtx = null;
  const page = $('#' + name + 'Page'), intro = PAGE_INTROS[name];
  if (name !== 'home') artFloat?.pause();
  if (!page || !intro || !hasGSAP || reduceMotion()) return;
  probeDuring(1.4);
  const lite = isLite();
  page.classList.add('intro-run');
  pageCtx = gsap.context(() => { (lite ? liteIntro : intro)(page); gsap.delayedCall(lite ? 0.8 : 2.2, () => page.classList.remove('intro-run')); }, page);
}

/* Month swap — the grid slides in from the side you swiped to */
function animateMonthSwap(step) {
  if (!hasGSAP || reduceMotion() || state.page !== 'calendar') return;
  if (desktopLayout.matches) { gsap.fromTo('.calendar-months .calendar-card', {x:Math.sign(step)*12, opacity:0}, {x:0, opacity:1, duration:.25, stagger:.04, clearProps:'transform,opacity'}); return; }
  if (isLite()) { gsap.fromTo('#calendarGrid', { x: step * 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.3, ease: 'power2.out', clearProps: 'transform,opacity' }); return; }
  const cells = $$('#calendarGrid .calday');
  gsap.fromTo('#monthTitle', { x: step * 36, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out', clearProps: 'transform,opacity' });
  gsap.fromTo(cells, { x: step * 40, opacity: 0, scale: 0.85 }, { x: 0, scale: 1, opacity: (i, el) => (el.classList.contains('muted') ? 0.45 : 1), duration: 0.45, ease: 'power3.out', stagger: { grid: [6, 7], from: step > 0 ? 'start' : 'end', axis: 'x', amount: 0.22 }, clearProps: 'transform,opacity' });
}

/* Sheets / drawer intros */
const OVERLAY_INTROS = {
  menuOverlay(el) {
    gsap.fromTo(el.querySelectorAll('.drawer .sheet-head, .menu-group > *, .app-version'), { x: -28, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.025, delay: 0.08, clearProps: 'transform,opacity' });
  },
  taskOverlay(el) {
    gsap.fromTo(el.querySelectorAll('.sheet-head, #taskForm > .field, #taskForm > .switch-row, #taskForm > .primary'), { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.06, delay: 0.08, clearProps: 'transform,opacity' });
    gsap.fromTo(el.querySelectorAll('.chip-group label'), { scale: 0.6, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2.4)', stagger: 0.025, delay: 0.2, clearProps: 'transform,opacity' });
  },
  timerOverlay(el) {
    gsap.fromTo(el.querySelectorAll('.timer-mode'), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(2)', stagger: 0.06, delay: 0.08, clearProps: 'transform,opacity' });
    if (!timer.running) gsap.fromTo('#timerRing', { scale: 0.8, rotation: -30, opacity: 0 }, { scale: 1, rotation: 0, opacity: 1, duration: 0.8, ease: 'elastic.out(1,0.6)', delay: 0.12, clearProps: 'transform,opacity' });
    gsap.fromTo(el.querySelectorAll('.timer-custom, .timer-controls > *, .timer-sessions'), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'power3.out', stagger: 0.06, delay: 0.25, clearProps: 'transform,opacity' });
  },
  searchOverlay(el) {
    gsap.fromTo(el.querySelector('.search-panel'), { y: -24, scale: 0.96, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.45, ease: 'back.out(1.8)', clearProps: 'transform,opacity' });
  },
  goalOverlay(el) {
    gsap.fromTo(el.querySelectorAll('.sheet-head, .sheet-copy, #goalForm > *'), { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45, ease: 'power3.out', stagger: 0.08, delay: 0.1, clearProps: 'transform,opacity' });
  },
  financeSecurityOverlay(el) { gsap.fromTo(el.querySelectorAll('.sheet-head, #financeSecurityChoice > *, #financePasswordForm > *, #financeUnlockForm > *, #financeSecurityManage > *'),{y:16,opacity:0},{y:0,opacity:1,duration:.38,ease:'power3.out',stagger:.045,clearProps:'transform,opacity'}); },
  financeIncomeOverlay(el) { gsap.fromTo(el.querySelectorAll('.sheet-head, .sheet-copy, #financeIncomeForm > *'),{y:15,opacity:0},{y:0,opacity:1,duration:.38,ease:'power3.out',stagger:.06,clearProps:'transform,opacity'}); },
  financeOverlay(el) { gsap.fromTo(el.querySelectorAll('.sheet-head, #financeForm > *'),{y:18,opacity:0},{y:0,opacity:1,duration:.4,ease:'power3.out',stagger:.055,delay:.06,clearProps:'transform,opacity'}); },
  localeDatePicker(el) { gsap.fromTo(el.querySelectorAll('.sheet-head, .date-picker-month, .date-picker-weekdays span, .date-picker-day'),{y:12,opacity:0,scale:.94},{y:0,opacity:1,scale:1,duration:.35,ease:'power3.out',stagger:.018,clearProps:'transform,opacity'}); },
  plannerOverlay(el) { gsap.fromTo(el.querySelectorAll('.sheet-head, #plannerForm > *'),{y:16,opacity:0},{y:0,opacity:1,duration:.38,ease:'power3.out',stagger:.04,clearProps:'transform,opacity'}); },
  plannerProjectOverlay(el) { gsap.fromTo(el.querySelectorAll('.sheet-head, #plannerProjectForm > *'),{y:16,opacity:0},{y:0,opacity:1,duration:.38,ease:'power3.out',stagger:.05,clearProps:'transform,opacity'}); },
  plannerBucketOverlay(el) { gsap.fromTo(el.querySelectorAll('.sheet-head, #plannerBucketForm > *'),{y:16,opacity:0},{y:0,opacity:1,duration:.38,ease:'power3.out',stagger:.05,clearProps:'transform,opacity'}); },
  confirmOverlay(el) {
    gsap.fromTo(el.querySelector('.sym'), { scale: 0, rotation: -30 }, { scale: 1, rotation: 0, duration: 0.6, ease: 'back.out(3)', delay: 0.05, clearProps: 'transform' });
    gsap.fromTo(el.querySelector('.sym svg'), { rotation: 0 }, { rotation: 14, duration: 0.55, ease: window.CustomWiggle ? 'ffWiggle' : 'sine.inOut', delay: 0.35, clearProps: 'transform' });
  }
};
function overlayIntro(el) { if (hasGSAP && !reduceMotion() && !isLite()) OVERLAY_INTROS[el.id]?.(el); }
/* ---- frame-rate probe: if intros run choppy, Auto mode switches to Lite ---- */
const perfProbe = { frames: [], active: false, done: true }; // frame probe removed: animation level is a simple user setting
function probeDuring(seconds) {
  if (perfProbe.done || perfProbe.active || perfMode() !== 'auto' || isLite() || !hasGSAP || document.hidden || !assetsReady) return;
  perfProbe.active = true;
  let last = 0;
  const until = performance.now() + seconds * 1000;
  const fn = () => {
    const now = performance.now();
    if (last && now - last < 250) perfProbe.frames.push(now - last);
    last = now;
    if (now > until || document.hidden) { gsap.ticker.remove(fn); perfProbe.active = false; evaluateProbe(); }
  };
  gsap.ticker.add(fn);
}
function evaluateProbe() {
  const f = perfProbe.frames;
  if (f.length < 45) return; // keep collecting during the next intro
  perfProbe.done = true;
  const med = [...f].sort((a, b) => a - b)[Math.floor(f.length / 2)];
  const slow = f.filter(d => d > 34).length / f.length;
  if (med > 22 || slow > 0.2) {
    store.set(PERF.detectedKey, 'lite');
    setPerf('auto', true);
    toast('Lite mode on for smoother performance', 'Keep full', () => setPerf('full'));
  }
}
function renderPerfBtn() {
  const lite = isLite();
  const fa = appLanguage === 'fa';
  const label = fa ? (lite ? 'کاهش‌یافته' : 'کامل') : (lite ? 'Reduced' : 'Full');
  const title = fa ? 'عملکرد' : 'Performance';
  const animations = fa ? 'انیمیشن‌ها' : 'Animations';
  const detail = fa ? (lite ? 'انیمیشن کمتر و اجرای سریع‌تر برای گوشی‌های ضعیف' : 'همهٔ انیمیشن‌ها و جلوه‌ها فعال هستند') : (lite ? 'Fewer animations, faster on weaker phones' : 'All animations and effects');
  $('#perfBtn').innerHTML = `${ic('zap')}<span>${title}<small>${detail}</small></span><span class="end">${label}</span>`;
  if ($('#settingsPerfBtn')) $('#settingsPerfBtn').innerHTML = `${ic('zap')}<span class="settings-option-copy"><strong>${animations}</strong><small>${detail}</small></span><span class="end">${label}</span>`;
}
function setPerf(mode, silent = false) {
  store.set(PERF.key, mode);
  store.set(PERF.detectedKey, '');
  const lite = applyPerf();
  if (lite && artFloat) { artFloat.kill(); artFloat = null; gsap.set('#emptyArt', { clearProps: 'transform' }); }
  if (!lite) updateEmptyArt();
  calBgCache = null;
  if (state.page === 'calendar') renderCalendar();
  renderPerfBtn();
  if (!silent) toast(lite ? 'Reduced animations' : 'Full animations');
}
$('#perfBtn').onclick = () => setPerf(isLite() ? 'full' : 'lite');
$('#settingsPerfBtn').onclick = () => setPerf(isLite() ? 'full' : 'lite');
$('#settingsExportBtn').onclick = () => $('#exportBtn').click();
$('#settingsImportBtn').onclick = () => $('#importBtn').click();
$('#settingsManageDataBtn').onclick = () => $('#clearDoneBtn').click();

/* Simple, cheap intro used in Lite mode */
function liteIntro(page) {
  gsap.fromTo(page.children, { y: 12, opacity: 0 }, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out', stagger: 0.04, clearProps: 'transform,opacity' });
  if (page.id === 'progressPage') {
    const pct = Number($('#ring').style.getPropertyValue('--p')) || 0;
    gsap.fromTo('#ring', { '--p': 0 }, { '--p': pct, duration: 0.8, ease: 'power2.out' });
    countUp($('#percent'), pct, v => Math.round(v) + '%');
  }
}

/* ---- called by the asset blocks at the end of the file as they finish parsing ---- */
let pendingTrack = -1;
window.__ffAssets = stage => {
  if (stage === 'all') assetsReady = true;
  calBgCache = null;
  if (!$('#emptyState').hidden) { $('#emptyArt').dataset.key = emptyArtKey(); updateEmptyArt(); }
  if ($('#musicList').dataset.ready) renderTrackLists();
  delete $('#playerCover').dataset.src;
  updateMusicUI();
  if (state.page === 'calendar') renderCalendar();
  if (stage === 'all') {
    if ($('#musicList').dataset.ready) probeDurations();
    if (pendingTrack >= 0) { const i = pendingTrack; pendingTrack = -1; playTrack(i); }
  }
};



/* ======================================================================
   Init
   ====================================================================== */
document.documentElement.dataset.palette = PALETTES.some(p => p.id === store.getRaw(KEYS.palette, '')) ? store.getRaw(KEYS.palette, '') : 'ocean';
document.documentElement.dataset.dpalette = DARK_PALETTES.some(p => p.id === store.getRaw(KEYS.darkPalette, '')) ? store.getRaw(KEYS.darkPalette, '') : 'midnight';
const savedTheme = store.getRaw(KEYS.theme, null);
applyTheme(savedTheme || 'light', !!savedTheme);
renderSoundBtn();
appLanguage=store.getRaw(KEYS.language,'en')==='fa'?'fa':'en';document.documentElement.lang=appLanguage;document.documentElement.dir=appLanguage==='fa'?'rtl':'ltr';refreshLocalizedDateInputs();APP_MUTATIONS.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','aria-description','title','placeholder','alt']});translateDom();updateLanguageButtons();
applyPerf();
renderPerfBtn();
renderPalettes();
renderFinance();
renderDates();
renderTags();
renderTasks();
updateStreak();
renderTimer();
syncHomeLayout();
animatePage('home');
if (!state.goal.trim() && localStorage.getItem('focusflow-goal-skipped') !== '1') openGoal();

/* asd-ste104: cross-calendar week stability, category-based data cleanup, monthly close prompt, transaction date groups. */
const financeMonthPromptDismissed = new Set();
let financeMonthPromptActive = false;
const financeMonthCheckpointKey = () => `focusflow-finance-month-checkpoint-${appLanguage}`;
const financeMonthHistoryId = startKey => `${appLanguage}:${startKey}`;
const activeMonthStart = (d=new Date()) => keyDate(calendarMonthStart(noon(d)));
const monthTitleFromStart = startKey => parseKey(startKey).toLocaleDateString(appLanguage==='fa'?'fa-IR':'en-US',{month:'long',year:'numeric'});

/* Re-label the legacy menu action as the entry point to categorized cleanup. */
const manageDataButton=$('#clearDoneBtn');
if(manageDataButton){const label=manageDataButton.querySelector('span');if(label)label.textContent=appLanguage==='fa'?'مدیریت داده‌ها':'Manage data';manageDataButton.classList.add('data-manager-trigger');}

const dataManagerOverlay=document.createElement('div');
dataManagerOverlay.id='dataManagerOverlay';dataManagerOverlay.className='overlay';dataManagerOverlay.setAttribute('aria-hidden','true');
dataManagerOverlay.innerHTML=`<div class="sheet data-manager-sheet" role="dialog" aria-modal="true" aria-labelledby="dataManagerTitle"><div class="sheet-head"><h2 id="dataManagerTitle"></h2><button class="iconbtn" type="button" data-close aria-label="Close">${ic('close')}</button></div><p class="sheet-copy" id="dataManagerCopy"></p><div id="dataManagerGroups"></div></div>`;
document.body.append(dataManagerOverlay);
dataManagerOverlay.addEventListener('click',e=>{if(e.target===dataManagerOverlay||e.target.closest('[data-close]'))closeOverlay(dataManagerOverlay);});
const dataActionLabels={
 en:{title:'Manage data',copy:'Choose exactly which records to remove. Every action asks for confirmation and can be undone immediately.',tasks:'Tasks',plans:'Plans',finance:'Finance',completed:'Delete completed',incomplete:'Delete not completed',allTasks:'Delete all tasks',allPlans:'Delete all plans',allFinance:'Delete all finance records',close:'Close',empty:'There is nothing to delete in this category.'},
 fa:{title:'مدیریت داده‌ها',copy:'مشخص کن چه اطلاعاتی حذف شود. هر عملیات قبل از اجرا تأیید می‌گیرد و بلافاصله امکان واگرد دارد.',tasks:'تسک‌ها',plans:'پلن‌ها',finance:'امور مالی',completed:'حذف موارد انجام‌شده',incomplete:'حذف موارد انجام‌نشده',allTasks:'حذف تمام تسک‌ها',allPlans:'حذف تمام پلن‌ها',allFinance:'حذف تمام اطلاعات مالی',close:'بستن',empty:'در این دسته اطلاعاتی برای حذف وجود ندارد.'}
};
function renderDataManager(){
 const t=dataActionLabels[appLanguage==='fa'?'fa':'en'];
 $('#dataManagerTitle').textContent=t.title;$('#dataManagerCopy').textContent=t.copy;
 const deleteAction=(scope,label,danger=false)=>`<button type="button" data-clear-scope="${scope}" class="${danger?'danger':''}"><span class="data-action-icon" aria-hidden="true">${ic('trash')}</span><span>${label}</span></button>`;
 $('#dataManagerGroups').innerHTML=`<section class="data-manager-group"><h3>${t.tasks}</h3><div class="data-manager-actions">${deleteAction('tasks-done',t.completed)}${deleteAction('tasks-open',t.incomplete)}${deleteAction('tasks-all',t.allTasks,true)}</div></section><section class="data-manager-group"><h3>${t.plans}</h3><div class="data-manager-actions">${deleteAction('plans-done',t.completed)}${deleteAction('plans-open',t.incomplete)}${deleteAction('plans-all',t.allPlans,true)}</div></section><section class="data-manager-group"><h3>${t.finance}</h3><div class="data-manager-actions">${deleteAction('finance-all',t.allFinance,true)}</div></section>`;
 $('#dataManagerGroups').querySelectorAll('[data-clear-scope]').forEach(b=>b.onclick=()=>clearDataScope(b.dataset.clearScope));
}
manageDataButton.onclick=()=>{closeOverlay(menu);renderDataManager();openOverlay(dataManagerOverlay,'[data-clear-scope]');};
async function clearDataScope(scope){
 const taskCount=state.tasks.length,doneTasks=state.tasks.filter(t=>t.done).length,openTasks=taskCount-doneTasks;
 const planCount=planner.entries.length,donePlans=planner.entries.filter(p=>p.done||p.status==='completed').length,openPlans=planCount-donePlans;
 const financeCount=financeEntries.length+(financeMonthlyIncome>0?1:0)+Object.keys(financeMonthHistory).length;
 const counts={'tasks-done':doneTasks,'tasks-open':openTasks,'tasks-all':taskCount,'plans-done':donePlans,'plans-open':openPlans,'plans-all':planCount,'finance-all':financeCount};
 const count=counts[scope]||0;
 if(!count){toast(dataActionLabels[appLanguage==='fa'?'fa':'en'].empty);return;}
 const names={en:{'tasks-done':'completed tasks','tasks-open':'not-completed tasks','tasks-all':'all tasks','plans-done':'completed plans','plans-open':'not-completed plans','plans-all':'all plans','finance-all':'all finance records'},fa:{'tasks-done':'تسک‌های انجام‌شده','tasks-open':'تسک‌های انجام‌نشده','tasks-all':'تمام تسک‌ها','plans-done':'پلن‌های انجام‌شده','plans-open':'پلن‌های انجام‌نشده','plans-all':'تمام پلن‌ها','finance-all':'تمام اطلاعات مالی'}};
 const lang=appLanguage==='fa'?'fa':'en',name=names[lang][scope];
 closeOverlay(dataManagerOverlay);
 const ok=await confirmDialog({title:lang==='fa'?'تأیید حذف اطلاعات':'Confirm data removal',text:lang==='fa'?`تعداد ${count} مورد از «${name}» حذف می‌شود. می‌توانی بلافاصله واگرد کنی.`:`${count} record(s) from ${name} will be removed. You can undo immediately.`,ok:lang==='fa'?'حذف':'Delete'});
 if(!ok){renderDataManager();openOverlay(dataManagerOverlay,'[data-clear-scope]');return;}
 const before={tasks:state.tasks.slice(),plans:planner.entries.slice(),finance:financeEntries.slice(),income:financeMonthlyIncome,incomeCurrency:financeMonthlyIncomeCurrency,incomeChosen:financeIncomeCurrencyChosen,history:{...financeMonthHistory},incomePrompted:store.get(KEYS.financeIncomePrompted,false),checkpointFa:store.getRaw('focusflow-finance-month-checkpoint-fa',''),checkpointEn:store.getRaw('focusflow-finance-month-checkpoint-en','')};
 if(scope==='tasks-done')state.tasks=state.tasks.filter(t=>!t.done);
 else if(scope==='tasks-open')state.tasks=state.tasks.filter(t=>t.done);
 else if(scope==='tasks-all')state.tasks=[];
 else if(scope==='plans-done')planner.entries=planner.entries.filter(p=>!(p.done||p.status==='completed'));
 else if(scope==='plans-open')planner.entries=planner.entries.filter(p=>p.done||p.status==='completed');
 else if(scope==='plans-all')planner.entries=[];
 else if(scope==='finance-all'){
   financeEntries.splice(0,financeEntries.length);financeMonthlyIncome=0;financeMonthlyIncomeCurrency=appLanguage==='fa'?'IRR':'USD';financeIncomeCurrencyChosen=false;financeMonthHistory={};
   store.set(KEYS.financeIncome,0);store.set(KEYS.financeIncomeCurrency,financeMonthlyIncomeCurrency);store.set(KEYS.financeIncomeCurrencyChosen,false);store.set(KEYS.financeIncomePrompted,false);store.set(FINANCE_MONTH_HISTORY_KEY,financeMonthHistory);store.set(KEYS.finance,financeEntries);try{localStorage.removeItem('focusflow-finance-month-checkpoint-fa');localStorage.removeItem('focusflow-finance-month-checkpoint-en');}catch{}financeMonthPromptDismissed.clear();
 }
 if(scope.startsWith('tasks-'))save();
 if(scope.startsWith('plans-'))savePlanner();
 if(state.page==='planner')renderPlanner();
 refreshAll();renderFinance();
 const msg=lang==='fa'?`«${name}» حذف شد`:`Removed ${name}`;
 toast(msg,lang==='fa'?'واگرد':'Undo',()=>{
   state.tasks=before.tasks;planner.entries=before.plans;financeEntries.splice(0,financeEntries.length,...before.finance);financeMonthlyIncome=before.income;financeMonthlyIncomeCurrency=before.incomeCurrency;financeIncomeCurrencyChosen=before.incomeChosen;financeMonthHistory={...before.history};
   save();savePlanner();store.set(KEYS.finance,financeEntries);store.set(KEYS.financeIncome,financeMonthlyIncome);store.set(KEYS.financeIncomeCurrency,financeMonthlyIncomeCurrency);store.set(KEYS.financeIncomeCurrencyChosen,financeIncomeCurrencyChosen);store.set(KEYS.financeIncomePrompted,before.incomePrompted);store.set(FINANCE_MONTH_HISTORY_KEY,financeMonthHistory);try{if(before.checkpointFa)localStorage.setItem('focusflow-finance-month-checkpoint-fa',before.checkpointFa);else localStorage.removeItem('focusflow-finance-month-checkpoint-fa');if(before.checkpointEn)localStorage.setItem('focusflow-finance-month-checkpoint-en',before.checkpointEn);else localStorage.removeItem('focusflow-finance-month-checkpoint-en');}catch{}refreshAll();renderFinance();toast(lang==='fa'?'اطلاعات بازگردانده شد':'Data restored');
 });
}

/* Monthly income closeout uses the selected calendar system: Gregorian in EN, Solar Hijri in FA.
   A local HTML app can ask while open or on the next launch; it cannot run while fully closed. */
function checkFinanceMonthClosePrompt(){
 if(financeMonthPromptActive)return;
 const currentStart=activeMonthStart(),checkpointName=financeMonthCheckpointKey();
 let checkpoint=store.getRaw(checkpointName,'');
 if(!checkpoint){store.set(checkpointName,currentStart);return;}
 if(checkpoint===currentStart)return;
 const nextStartDate=shiftCalendarMonth(parseKey(checkpoint),1),nextStart=keyDate(nextStartDate);
 if(nextStart>currentStart){store.set(checkpointName,currentStart);return;}
 const historyId=financeMonthHistoryId(checkpoint);
 if(financeMonthHistory[historyId]){store.set(checkpointName,nextStart);setTimeout(checkFinanceMonthClosePrompt,500);return;}
 if(financeMonthPromptDismissed.has(historyId))return;
 if(openStack.length||document.querySelector('.overlay.show'))return;
 financeMonthPromptActive=true;
 const startTitle=monthTitleFromStart(checkpoint),endDate=noon(parseKey(nextStart));endDate.setDate(endDate.getDate()-1);const endKey=keyDate(endDate);
 const modal=document.createElement('div');modal.className='overlay finance-month-close-overlay';modal.id='financeMonthCloseOverlay';modal.setAttribute('aria-hidden','true');
 const t=appLanguage==='fa'?{heading:`درآمد ${startTitle} چقدر بود؟`,copy:`ماه ${startTitle} به پایان رسیده است. مجموع درآمد واقعی این ماه را ثبت کن.`,amount:'مجموع درآمد ماه',currency:'واحد پول',save:'ثبت درآمد ماه',later:'فعلاً نه',close:'بستن'}:{heading:`How much income did you receive in ${startTitle}?`,copy:`${startTitle} has ended. Record the total income for that month.`,amount:'Total income for the month',currency:'Currency',save:'Save monthly total',later:'Not now',close:'Close'};
 modal.innerHTML=`<div class="sheet" role="dialog" aria-modal="true" aria-labelledby="financeMonthCloseTitle"><div class="sheet-head"><h2 id="financeMonthCloseTitle">${esc(t.heading)}</h2><button class="iconbtn" type="button" data-close aria-label="${esc(t.close)}">${ic('close')}</button></div><p class="sheet-copy">${esc(t.copy)}</p><form id="financeMonthCloseForm"><label class="field">${esc(t.amount)}<input id="financeMonthCloseAmount" type="number" inputmode="decimal" min="0" step="0.01" required value="0"></label><label class="field">${esc(t.currency)}<select id="financeMonthCloseCurrency"><option value="IRR">${appLanguage==='fa'?'تومان (IRR)':'Toman (IRR)'}</option><option value="USD">${appLanguage==='fa'?'دلار آمریکا (USD)':'US dollars (USD)'}</option></select></label><div class="finance-security-actions"><button class="primary" type="submit">${esc(t.save)}</button><button class="secondary" id="financeMonthCloseLater" type="button">${esc(t.later)}</button></div></form></div>`;
 document.body.append(modal);
 const dismiss=()=>{financeMonthPromptDismissed.add(historyId);closeOverlay(modal);modal.remove();financeMonthPromptActive=false;};
 modal.addEventListener('click',e=>{if(e.target===modal||e.target.closest('[data-close]'))dismiss();});
 modal.querySelector('#financeMonthCloseLater').onclick=dismiss;
 modal.querySelector('#financeMonthCloseCurrency').value=financeMonthlyIncomeCurrency|| (appLanguage==='fa'?'IRR':'USD');
 modal.querySelector('#financeMonthCloseForm').onsubmit=e=>{
   e.preventDefault();const amount=Number($('#financeMonthCloseAmount').value),currency=$('#financeMonthCloseCurrency').value;if(!Number.isFinite(amount)||amount<0)return;
   financeMonthHistory[historyId]={amount,currency,periodStart:checkpoint,periodEnd:endKey,recordedAt:new Date().toISOString()};
   if(!store.set(FINANCE_MONTH_HISTORY_KEY,financeMonthHistory)){toast(appLanguage==='fa'?'ثبت درآمد این ماه ذخیره نشد':'Could not save monthly income');return;}
   store.set(checkpointName,nextStart);financeMonthPromptDismissed.delete(historyId);closeOverlay(modal);modal.remove();financeMonthPromptActive=false;renderFinance();
   toast(appLanguage==='fa'?`درآمد ${startTitle} ثبت شد`:`Income recorded for ${startTitle}`);
   setTimeout(checkFinanceMonthClosePrompt,700);
 };
 openOverlay(modal,'#financeMonthCloseAmount');
}
// First-run initializes a baseline. Month changes are detected while open and on subsequent launches.
if(!store.getRaw(financeMonthCheckpointKey(),''))store.set(financeMonthCheckpointKey(),activeMonthStart());
setTimeout(checkFinanceMonthClosePrompt,2200);
setInterval(checkFinanceMonthClosePrompt,45000);

/* Public bridges for the small standalone add-ons that follow this app script. */
window.__ffI18N = APP_I18N;
window.__ffCalendar = {
  getMonth: () => state.month,
  setMonth: date => { state.month = date; renderCalendar(); },
  selectMonth: (date, step=1) => { state.month = date; renderCalendar(); animateMonthSwap(step); },
  isFa: () => appLanguage === 'fa',
  jalaliParts,
  shiftCalendarMonth,
  keyDate,
  calendarDayNumber,
  dayStats,
  calBgList,
  assetRaw
};

})();


