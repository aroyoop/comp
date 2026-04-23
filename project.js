


let caces = {
    "Burn":[
        [
            "Cool the burn with running water <br>(برد الحرق بالمياه الجارية)",
            "Remove tight items like rings or clothes<br> (شيل أي حاجة ضيقة زي الخواتم أو الملابس)",
            "Cover the burn with a clean cloth <br>(غطي الحرق بقطعة قماش نظيفة)",
            "Do not apply ice or toothpaste<br> (ما تحطش تلج أو معجون)",
            "Seek medical help if severe <br>(اطلب مساعدة طبية لو الحالة خطيرة)"
        ],
        "Burn First Aid (إسعافات الحروق)",
        "https://www.youtube.com/embed/o_aPMLEqeI8"
    ],

    "Bleeding":[
        [
            "Apply direct pressure on the wound <br>(اضغط مباشرة على الجرح)",
            "Use a clean cloth or bandage<br> (استخدم قماشة أو شاش نظيف)",
            "Raise the injured area <br>(ارفع الجزء المصاب)",
            "Do not remove soaked cloth, add more <br>(ما تشيلش القماشة لو اتملت دم، زوّد عليها)",
            "Seek help if bleeding continues <br>(اطلب مساعدة لو النزيف مستمر)"
        ],
        "Bleeding First Aid (إسعافات النزيف)",
        "https://www.youtube.com/embed/f-icmfh97Es"
    ],

    "Fracture":[
        [
            "Keep the area still <br>(ثبّت الجزء المصاب)",
            "Do not move the bone <br>(ما تحاولش تحرك العضم)",
            "Use a splint if possible <br>(استخدم جبيرة لو تقدر)",
            "Apply ice to reduce swelling <br>(حط تلج لتقليل الورم)",
            "Get medical help immediately <br>(روح لدكتور فورًا)"
        ],
        "Fracture First Aid (إسعافات الكسور)",
        "https://www.youtube.com/embed/2v8vlXgGXwE"
    ],

    "Heart":[
        [
            "Call emergency services <br>(اتصل بالإسعاف فورًا)",
            "Help the person stay calm <br>(خلي المصاب هادي)",
            "Loosen tight clothes<br> (فك الملابس الضيقة)",
            "Give aspirin if safe <br>(ادي أسبرين لو ينفع)",
            "Start CPR if unconscious<br> (ابدأ إنعاش قلبي لو فقد الوعي)"
        ],
        "Heart Attack First Aid (إسعافات الأزمة القلبية)",
        "https://www.youtube.com/embed/W2WJ7z0uK6o"
    ],

    "Sprain":[
        [
            "Rest the injured area<br> (ريح الجزء المصاب)",
            "Apply ice <br> (حط تلج)",
            "Use compression bandage <br> (لف رباط ضاغط)",
            "Elevate the area <br> (ارفع الجزء المصاب)",
            "Avoid movement <br> (ما تحركش الجزء)"
        ],
        "Sprain First Aid (إسعافات الالتواء)",
        "https://www.youtube.com/embed/3GyZ0c5y4rA"
    ]
}

function show_aid(){
    ol.innerHTML=``
    p.innerHTML=``
    for(i=0;i<caces[ui.value][0].length;i++){
        
        ol.innerHTML+=`<li> ${caces[ui.value][0][i]}</li> `
    }
    t.innerHTML=caces[ui.value][1]
    frm.setAttribute("src" , caces[ui.value][2])
}

self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("site-cache").then(cache => {
            return cache.addAll([
                "/",
                "/index.html",
                "/project.css",
                "/index2.css",
                "/project.js"
            ])
        })
    )
})

self.addEventListener("fetch", e => {
    e.respondWith(
        caches.match(e.request).then(res => {
            return res || fetch(e.request)
        })
    )
})
