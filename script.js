document.addEventListener('DOMContentLoaded', function() {
    const courseData = {
        units: [
            {
                id: 'unit1',
                title: 'الوحدة 1: مدخل إلى عالم التداول',
                content: `
                    <p class="mb-8 text-lg text-gray-600">في هذه الوحدة، سنكتشف ماهية التداول ولماذا يجذب الكثيرين. ستتعرف على الأنواع المختلفة للأسواق المالية وكيف تعمل من خلال هذه البطاقات التفاعلية.</p>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-400">
                            <h3 class="font-bold text-xl mb-2">📊 تداول الأسهم</h3>
                            <p>شراء وبيع حصص في الشركات. هدفك هو الربح من ارتفاع قيمة السهم.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-400">
                            <h3 class="font-bold text-xl mb-2">💱 تداول الفوركس</h3>
                            <p>أكبر سوق مالي في العالم، حيث يتم تداول أزواج العملات الأجنبية.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-400">
                            <h3 class="font-bold text-xl mb-2">🪙 تداول العملات الرقمية</h3>
                            <p>شراء وبيع العملات الرقمية مثل البيتكوين والإيثيريوم في سوق شديد التقلب.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-400">
                            <h3 class="font-bold text-xl mb-2">🛢️ تداول السلع</h3>
                            <p>يشمل تداول المواد الخام مثل الذهب، النفط، والمنتجات الزراعية.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-400">
                            <h3 class="font-bold text-xl mb-2">📈 المؤشرات</h3>
                            <p>تداول أداء سلة من الأسهم تمثل قطاعًا أو سوقًا معينًا.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-400">
                            <h3 class="font-bold text-xl mb-2">🧺 الصناديق المتداولة</h3>
                            <p>سلة من الأصول (أسهم، سندات) يتم تداولها كوحدة واحدة.</p>
                        </div>
                    </div>
                `
            },
            {
                id: 'unit2',
                title: 'الوحدة 2: المفاهيم الأساسية',
                content: `
                    <p class="mb-8 text-lg text-gray-600">قبل أن تبدأ، يجب أن تفهم اللغة التي تتحدث بها الأسواق. هذه الوحدة ستزودك بالمصطلحات الأساسية. انقر على كل مفهوم لعرض الشرح.</p>
                    <div id="accordion-container" class="space-y-4">
                        <!-- Accordion items will be generated here -->
                    </div>
                    <h3 class="text-2xl font-bold mt-12 mb-4">تشريح الشمعة اليابانية</h3>
                    <div class="bg-white p-6 rounded-xl shadow-lg flex flex-col md:flex-row items-center justify-around gap-8">
                        <!-- Bullish Candle -->
                        <div class="flex items-center gap-4">
                            <div class="w-12">
                                <div class="h-8 w-full bg-green-200 flex justify-center items-center">
                                    <div class="h-20 w-1 bg-green-500"></div>
                                </div>
                                <div class="h-20 w-full bg-green-500 rounded"></div>
                                <div class="h-8 w-full bg-green-200 flex justify-center items-center">
                                    <div class="h-20 w-1 bg-green-500"></div>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg text-green-600">شمعة صاعدة</h4>
                                <p class="text-sm">سعر الإغلاق أعلى من سعر الفتح.</p>
                                <p class="text-sm mt-2"><span class="font-semibold">الجسم:</span> الفرق بين الفتح والإغلاق.</p>
                                <p class="text-sm"><span class="font-semibold">الظلال:</span> أعلى وأدنى سعر.</p>
                            </div>
                        </div>
                        <!-- Bearish Candle -->
                        <div class="flex items-center gap-4">
                            <div class="w-12">
                                <div class="h-8 w-full bg-red-200 flex justify-center items-center">
                                    <div class="h-20 w-1 bg-red-500"></div>
                                </div>
                                <div class="h-20 w-full bg-red-500 rounded"></div>
                                <div class="h-8 w-full bg-red-200 flex justify-center items-center">
                                    <div class="h-20 w-1 bg-red-500"></div>
                                </div>
                            </div>
                            <div>
                                <h4 class="font-bold text-lg text-red-600">شمعة هابطة</h4>
                                <p class="text-sm">سعر الإغلاق أقل من سعر الفتح.</p>
                                <p class="text-sm mt-2"><span class="font-semibold">الجسم:</span> الفرق بين الفتح والإغلاق.</p>
                                <p class="text-sm"><span class="font-semibold">الظلال:</span> أعلى وأدنى سعر.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'unit3',
                title: 'الوحدة 3: التحليل الفني والأساسي',
                content: `
                    <p class="mb-8 text-lg text-gray-600">لتتخذ قرارات تداول مستنيرة، ستحتاج إلى أدوات تحليلية. إليك مقارنة بين الطريقتين الرئيسيتين لتحليل الأسواق.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-500">
                            <h3 class="text-2xl font-bold mb-4">التحليل الفني 🧑‍💻</h3>
                            <p class="mb-4">دراسة الرسوم البيانية وأنماط الأسعار للتنبؤ بالحركات المستقبلية. يعتمد على أن "السعر يخصم كل شيء".</p>
                            <h4 class="font-semibold mb-2">أدوات رئيسية:</h4>
                            <ul class="list-disc list-inside space-y-2">
                                <li>خطوط الاتجاه</li>
                                <li>الدعم والمقاومة</li>
                                <li>المتوسطات المتحركة (MA)</li>
                                <li>مؤشر القوة النسبية (RSI)</li>
                                <li>مؤشر الماكد (MACD)</li>
                            </ul>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-lg border-l-4 border-amber-500">
                            <h3 class="text-2xl font-bold mb-4">التحليل الأساسي 📰</h3>
                            <p class="mb-4">تقييم القيمة الجوهرية للأصل بناءً على العوامل الاقتصادية والسياسية والمالية. يهدف لتحديد ما إذا كان السعر عادلاً.</p>
                            <h4 class="font-semibold mb-2">أدوات رئيسية:</h4>
                            <ul class="list-disc list-inside space-y-2">
                                <li>المفكرة الاقتصادية</li>
                                <li>تقارير أرباح الشركات</li>
                                <li>الأخبار العالمية</li>
                                <li>سياسات البنوك المركزية</li>
                                <li>البيانات الاقتصادية (التضخم، البطالة)</li>
                            </ul>
                        </div>
                    </div>
                    <div class="mt-8 bg-blue-50 border-r-4 border-blue-500 p-4 rounded-lg">
                        <p><span class="font-bold">نصيحة المحترفين:</span> أفضل نهج هو الجمع بين التحليلين. استخدم التحليل الأساسي لتحديد "ماذا" تتداول، والتحليل الفني لتحديد "متى" تتداول.</p>
                    </div>
                `
            },
            {
                id: 'unit4',
                title: 'الوحدة 4: استراتيجيات تداول',
                content: `
                    <p class="mb-8 text-lg text-gray-600">بعد فهم الأساسيات، حان وقت التطبيق. إليك استراتيجيات بسيطة مناسبة للمبتدئين مع أمثلة تطبيقية. تذكر دائمًا اختبارها على حساب تجريبي أولاً.</p>
                    <div class="space-y-4">
                        <div class="accordion-item bg-white rounded-lg shadow-md">
                            <button class="accordion-header w-full text-right p-4 font-semibold flex justify-between items-center">
                                <span>استراتيجية الاتجاه (Trend Following)</span>
                                <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="accordion-content p-4 border-t">
                                <p class="mb-2"><strong>المفهوم:</strong> تهدف إلى "ركوب الموجة" عبر الدخول في صفقات في نفس اتجاه السوق السائد.</p>
                                <p><strong>مثال:</strong> إذا كان زوج EUR/USD في اتجاه صاعد، انتظر تصحيحًا هابطًا مؤقتًا ثم اشترِ عندما يبدأ السعر في الارتفاع مرة أخرى.</p>
                            </div>
                        </div>
                        <div class="accordion-item bg-white rounded-lg shadow-md">
                            <button class="accordion-header w-full text-right p-4 font-semibold flex justify-between items-center">
                                <span>استراتيجية التداول المتأرجح (Swing Trading)</span>
                                <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="accordion-content p-4 border-t">
                                <p class="mb-2"><strong>المفهوم:</strong> تهدف للاستفادة من التقلبات متوسطة المدى، والاحتفاظ بالصفقات لأيام أو أسابيع.</p>
                                <p><strong>مثال:</strong> اشترِ سهمًا عند مستوى دعم قوي، وبعْه عند مستوى مقاومة رئيسي تالي.</p>
                            </div>
                        </div>
                        <div class="accordion-item bg-white rounded-lg shadow-md">
                            <button class="accordion-header w-full text-right p-4 font-semibold flex justify-between items-center">
                                <span>استراتيجية التداول اليومي (Day Trading)</span>
                                <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                            </button>
                            <div class="accordion-content p-4 border-t">
                                <p class="mb-2"><strong>المفهوم:</strong> فتح وإغلاق جميع الصفقات في نفس اليوم للاستفادة من التحركات السعرية الصغيرة.</p>
                                <p class="text-red-600 font-semibold">ملاحظة: هذه الاستراتيجية عالية المخاطر ولا ينصح بها للمبتدئين تمامًا.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'unit5',
                title: 'الوحدة 5: إدارة رأس المال والمخاطر',
                content: `
                    <p class="mb-8 text-lg text-gray-600">هذه الوحدة هي الأهم لنجاحك على المدى الطويل. حماية رأس مالك هي الأولوية القصوى.</p>
                    <div class="bg-white p-6 rounded-xl shadow-lg mb-8">
                        <h3 class="text-2xl font-bold mb-4">القاعدة الذهبية لإدارة المخاطر</h3>
                        <p class="text-lg">لا تخاطر بأكثر من <span class="font-bold text-red-600">1% إلى 2%</span> من إجمالي رأس مالك في أي صفقة واحدة.</p>
                        <p class="mt-2 text-gray-500">مثال: إذا كان حسابك 1000 دولار، يجب ألا تتجاوز خسارتك المحتملة في أي صفقة 10 أو 20 دولارًا.</p>
                    </div>
                    <h3 class="text-2xl font-bold mt-12 mb-4">فهم نسبة المخاطرة إلى المكافأة</h3>
                    <p class="mb-6 text-gray-600">استهدف دائمًا أن تكون مكافأتك المحتملة ضعف مخاطرتك على الأقل (نسبة 1:2). هذا المخطط يوضح الفكرة:</p>
                    <div class="chart-container">
                        <canvas id="riskRewardChart"></canvas>
                    </div>
                `
            },
            {
                id: 'unit6',
                title: 'الوحدة 6: علم النفس في التداول',
                content: `
                    <p class="mb-8 text-lg text-gray-600">التداول لعبة عقلية بقدر ما هو تحليل فني. التحكم في عواطفك هو مفتاح النجاح.</p>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div class="bg-red-50 border-r-4 border-red-500 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2 text-red-800">الخوف 😨</h3>
                            <p class="text-red-700">يجعلك تغلق الصفقات الرابحة مبكرًا أو تتجنب الفرص الجيدة. عالجه بالثقة في خطتك ووضع وقف الخسارة.</p>
                        </div>
                        <div class="bg-green-50 border-r-4 border-green-500 p-6 rounded-lg">
                            <h3 class="text-xl font-bold mb-2 text-green-800">الطمع 🤑</h3>
                            <p class="text-green-700">يدفعك للمخاطرة المفرطة أو مطاردة الأسعار. عالجه بالانضباط والالتزام بحجم الصفقة وأهداف الربح المحددة مسبقًا.</p>
                        </div>
                    </div>
                     <div class="bg-white p-6 rounded-xl shadow-lg">
                        <h3 class="text-2xl font-bold mb-4">ركائز العقلية الناجحة</h3>
                        <ul class="space-y-3">
                            <li class="flex items-start"><span class="text-blue-500 font-bold mr-2">✓</span> <div><strong>الانضباط والصبر:</strong> التزم بخطتك وانتظر الفرص المناسبة.</div></li>
                            <li class="flex items-start"><span class="text-blue-500 font-bold mr-2">✓</span> <div><strong>تقبل الخسائر:</strong> الخسارة جزء من اللعبة. تعلم منها ولا تتداول بانتقام.</div></li>
                            <li class="flex items-start"><span class="text-blue-500 font-bold mr-2">✓</span> <div><strong>التركيز على العملية:</strong> ركز على تنفيذ خطتك بشكل صحيح، وليس فقط على الربح والخسارة.</div></li>
                            <li class="flex items-start"><span class="text-blue-500 font-bold mr-2">✓</span> <div><strong>احتفظ بيوميات تداول:</strong> سجل صفقاتك وعواطفك لتتعلم وتتحسن.</div></li>
                        </ul>
                    </div>
                `
            },
            {
                id: 'unit7',
                title: 'الوحدة 7: منصات وأدوات التداول',
                content: `
                    <p class="mb-8 text-lg text-gray-600">ستحتاج إلى الأدوات المناسبة لتنفيذ صفقاتك وتحليل الأسواق. إليك أشهرها:</p>
                    <div class="space-y-6">
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <h3 class="font-bold text-xl mb-2">MetaTrader 4/5 (MT4/5)</h3>
                            <p>المنصة الأكثر شعبية لتداول الفوركس والعقود مقابل الفروقات. تتميز بأدوات تحليل قوية وتوفرها معظم شركات الوساطة.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <h3 class="font-bold text-xl mb-2">TradingView</h3>
                            <p>منصة تحليل رسوم بيانية متقدمة للغاية مع أدوات رسم ومؤشرات لا حصر لها ومجتمع كبير من المتداولين. ممتازة لتعلم التحليل.</p>
                        </div>
                        <div class="bg-white p-6 rounded-xl shadow-md">
                            <h3 class="font-bold text-xl mb-2">المفكرة الاقتصادية</h3>
                            <p>أداة لا غنى عنها لمتابعة مواعيد إصدار البيانات الاقتصادية الهامة التي تؤثر على الأسواق، مثل بيانات التضخم وأسعار الفائدة.</p>
                        </div>
                    </div>
                `
            },
             {
                id: 'unit8',
                title: 'الوحدة 8: خطوات فتح حساب تداول',
                content: `
                    <p class="mb-8 text-lg text-gray-600">سنرشدك خلال عملية فتح الحسابات، بدءًا من التدريب وصولاً إلى التداول الحقيقي. اتبع هذه الخطوات بالترتيب.</p>
                    <div class="relative pl-8 border-r-2 border-gray-300">
                        <!-- Step 1 -->
                        <div class="mb-10">
                            <div class="absolute w-6 h-6 bg-blue-500 rounded-full -right-3 border-4 border-white"></div>
                            <div class="bg-white p-4 rounded-lg shadow-md">
                                <h4 class="font-bold text-lg">1. اختيار الوسيط المناسب</h4>
                                <p class="text-sm">تأكد من أنه مرخص ومنظم، وله سمعة جيدة، ويوفر رسومًا معقولة.</p>
                            </div>
                        </div>
                        <!-- Step 2 -->
                        <div class="mb-10">
                            <div class="absolute w-6 h-6 bg-blue-500 rounded-full -right-3 border-4 border-white"></div>
                            <div class="bg-white p-4 rounded-lg shadow-md">
                                <h4 class="font-bold text-lg">2. فتح حساب تجريبي (Demo)</h4>
                                <p class="text-sm">خطوة إلزامية! تدرب لمدة شهرين إلى ثلاثة أشهر على الأقل لاختبار استراتيجيتك والتعرف على المنصة بدون مخاطر.</p>
                            </div>
                        </div>
                        <!-- Step 3 -->
                        <div class="mb-10">
                            <div class="absolute w-6 h-6 bg-blue-500 rounded-full -right-3 border-4 border-white"></div>
                            <div class="bg-white p-4 rounded-lg shadow-md">
                                <h4 class="font-bold text-lg">3. فتح حساب حقيقي</h4>
                                <p class="text-sm">بعد تحقيق نجاح متسق في الحساب التجريبي، يمكنك فتح حساب حقيقي وتقديم وثائق إثبات الهوية والعنوان.</p>
                            </div>
                        </div>
                        <!-- Step 4 -->
                        <div>
                            <div class="absolute w-6 h-6 bg-blue-500 rounded-full -right-3 border-4 border-white"></div>
                            <div class="bg-white p-4 rounded-lg shadow-md">
                                <h4 class="font-bold text-lg">4. إيداع الأموال وبدء التداول</h4>
                                <p class="text-sm">ابدأ بمبلغ صغير يمكنك تحمل خسارته، واستخدم أصغر حجم ممكن للصفقات في البداية.</p>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                id: 'unit9',
                title: 'الوحدة 9: أخطاء المبتدئين الشائعة',
                content: `
                    <p class="mb-8 text-lg text-gray-600">تعلم من أخطاء الآخرين لتتجنبها بنفسك. تجنب هذه الأخطاء سيساعدك على البقاء في السوق.</p>
                    <ol class="list-decimal list-inside space-y-4 text-gray-800">
                        <li><strong>المخاطرة بأكثر من اللازم:</strong> لا تخاطر بأكثر من 1-2% من حسابك في صفقة واحدة.</li>
                        <li><strong>عدم استخدام وقف الخسارة:</strong> هذا هو الخطأ الأكثر تدميرًا. ضع دائمًا وقف خسارة.</li>
                        <li><strong>التداول الانتقامي:</strong> لا تحاول تعويض الخسائر بصفقات متسرعة. خذ قسطًا من الراحة.</li>
                        <li><strong>مطاردة الأسعار (FOMO):</strong> لا تدخل صفقة بعد فوات الأوان. انتظر فرصة أخرى.</li>
                        <li><strong>الإفراط في التداول:</strong> الجودة أهم من الكمية. تداول فقط عندما تستوفي شروط خطتك.</li>
                        <li><strong>عدم وجود خطة تداول:</strong> التداول بدون خطة هو مجرد قمار.</li>
                    </ol>
                `
            },
            {
                id: 'unit10',
                title: 'الوحدة 10: خطة التعلم المقترحة',
                content: `
                    <p class="mb-8 text-lg text-gray-600">لتطبيق هذا الكورس بفعالية، ستحتاج إلى خطة واضحة وجدول زمني. هذا المخطط يوضح المراحل المقترحة لرحلتك التعليمية.</p>
                     <div class="chart-container">
                        <canvas id="learningPlanChart"></canvas>
                    </div>
                    <div class="mt-8 bg-green-50 border-r-4 border-green-500 p-4 rounded-lg">
                        <p><span class="font-bold">نصيحة أخيرة:</span> التداول رحلة مستمرة من التعلم. كن صبورًا ومنضبطًا، والنتائج ستأتي مع الوقت والخبرة.</p>
                    </div>
                `
            }
        ],
        accordionData: {
            unit2: [
                { title: 'العرض والطلب', content: 'المبدأ الأساسي الذي يحرك الأسعار. عندما يزيد الطلب عن العرض، ترتفع الأسعار، والعكس صحيح.' },
                { title: 'السيولة', content: 'مدى سهولة شراء وبيع أصل دون التأثير على سعره. الأسواق عالية السيولة أفضل للمتداولين.' },
                { title: 'الفوليوم (حجم التداول)', content: 'عدد الوحدات المتداولة من أصل معين. الفوليوم العالي يؤكد قوة الاتجاه.' },
                { title: 'البيب واللوت (للفوركس)', content: 'البيب هو أصغر وحدة لقياس حركة السعر، واللوت هو وحدة قياس حجم الصفقة. فهمهما ضروري لحساب الأرباح والخسائر.' },
                { title: 'الهامش والرافعة المالية', content: 'الرافعة المالية تسمح لك بالتحكم في مبلغ كبير باستخدام مبلغ صغير، لكنها تضخم الأرباح والخسائر على حد سواء. يجب استخدامها بحذر شديد.' }
            ]
        }
    };
    
    const sidebar = document.querySelector('#sidebar ul');
    const contentContainer = document.getElementById('content-container');
    const menuToggle = document.getElementById('menu-toggle');
    const mainSidebar = document.getElementById('sidebar');

    // Populate navigation and content
    courseData.units.forEach((unit, index) => {
        // Nav link
        const li = document.createElement('li');
        li.innerHTML = `<a href="#${unit.id}" data-unit="${unit.id}" class="nav-link block p-4 text-sm font-medium ${index === 0 ? 'active' : ''}">${unit.title}</a>`;
        sidebar.appendChild(li);

        // Content section
        const section = document.createElement('section');
        section.id = unit.id;
        section.className = `content-section p-2 ${index === 0 ? 'active' : ''}`;
        section.innerHTML = `
            <h2 class="text-3xl font-bold mb-2 text-[#3D352E]">${unit.title}</h2>
            <div class="w-16 h-1 bg-[#D4A373] mb-8"></div>
            ${unit.content}
        `;
        contentContainer.appendChild(section);
    });

    function showUnit(unitId) {
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.toggle('active', link.dataset.unit === unitId);
        });
        document.querySelectorAll('.content-section').forEach(section => {
            section.classList.toggle('active', section.id === unitId);
        });
        
        // Lazy-load charts
        if(unitId === 'unit5' && !window.riskRewardChartInstance) {
            createRiskRewardChart();
        }
        if(unitId === 'unit10' && !window.learningPlanChartInstance) {
            createLearningPlanChart();
        }
    }

    sidebar.addEventListener('click', function(e) {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const unitId = e.target.dataset.unit;
            showUnit(unitId);
            if (window.innerWidth < 768) {
                mainSidebar.classList.add('-translate-x-full');
            }
        }
    });

    // Mobile menu toggle
    menuToggle.addEventListener('click', function() {
        mainSidebar.classList.toggle('-translate-x-full');
    });
    
    // Accordion functionality
    function initializeAccordions(unitId, data) {
        const container = document.querySelector(`#${unitId} #accordion-container`);
        if (!container) return;
        container.innerHTML = '';
        data.forEach(item => {
            const div = document.createElement('div');
            div.className = 'accordion-item bg-white rounded-lg shadow-md';
            div.innerHTML = `
                <button class="accordion-header w-full text-right p-4 font-semibold flex justify-between items-center">
                    <span>${item.title}</span>
                    <svg class="w-5 h-5 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                <div class="accordion-content p-4 border-t text-gray-600">
                    <p>${item.content}</p>
                </div>
            `;
            container.appendChild(div);
        });
    }
    
    initializeAccordions('unit2', courseData.accordionData.unit2);

    contentContainer.addEventListener('click', function(e) {
        const header = e.target.closest('.accordion-header');
        if (header) {
            const content = header.nextElementSibling;
            const icon = header.querySelector('svg');
            const item = header.closest('.accordion-item');

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                icon.classList.remove('rotate-180');
                item.classList.remove('shadow-xl');

            } else {
                // Close other accordions
                document.querySelectorAll('.accordion-content').forEach(el => {
                    el.style.maxHeight = null;
                    el.previousElementSibling.querySelector('svg').classList.remove('rotate-180');
                    el.closest('.accordion-item').classList.remove('shadow-xl');

                });
                content.style.maxHeight = content.scrollHeight + "px";
                icon.classList.add('rotate-180');
                item.classList.add('shadow-xl');
            }
        }
    });


    // Chart.js Implementations
    function createRiskRewardChart() {
        const ctx = document.getElementById('riskRewardChart').getContext('2d');
        window.riskRewardChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['صفقة بنسبة 1:2', 'صفقة بنسبة 1:3'],
                datasets: [
                    {
                        label: 'مخاطرة',
                        data: [1, 1],
                        backgroundColor: 'rgba(239, 68, 68, 0.6)', // Red
                        borderColor: 'rgba(239, 68, 68, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'مكافأة محتملة',
                        data: [2, 3],
                        backgroundColor: 'rgba(34, 197, 94, 0.6)', // Green
                        borderColor: 'rgba(34, 197, 94, 1)',
                        borderWidth: 1
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        stacked: false,
                        title: { display: true, text: 'وحدات (مثال: دولار أو نقاط)' }
                    },
                    y: {
                        stacked: false
                    }
                },
                plugins: {
                    title: {
                        display: true,
                        text: 'مقارنة نسبة المخاطرة إلى المكافأة',
                        font: { size: 16 }
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                label += context.raw + ' وحدة';
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    function createLearningPlanChart() {
        const ctx = document.getElementById('learningPlanChart').getContext('2d');
        window.learningPlanChartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['المرحلة 1: الأساسيات', 'المرحلة 2: تدريب تجريبي', 'المرحلة 3: التحضير للحقيقي', 'المرحلة 4: تداول حقيقي'],
                datasets: [{
                    label: 'المدة بالأسابيع',
                    data: [2, 6, 2, 4], // Example durations
                    backgroundColor: [
                        'rgba(59, 130, 246, 0.6)',
                        'rgba(249, 115, 22, 0.6)',
                        'rgba(139, 92, 246, 0.6)',
                        'rgba(22, 163, 74, 0.6)'
                    ],
                    borderColor: [
                        'rgba(59, 130, 246, 1)',
                        'rgba(249, 115, 22, 1)',
                        'rgba(139, 92, 246, 1)',
                        'rgba(22, 163, 74, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        title: { display: true, text: 'الأسابيع' }
                    }
                },
                plugins: {
                    legend: { display: false },
                    title: {
                        display: true,
                        text: 'الجدول الزمني المقترح لرحلة التعلم',
                        font: { size: 16 }
                    }
                }
            }
        });
    }
    
    // Initialize first unit
    showUnit('unit1');
});
