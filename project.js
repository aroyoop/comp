let caces = {
    "Burn":[
        [
            "Cool the burn with running water <br>(برد الحرق بالمياه الجارية)",
            "Remove tight items like rings or clothes<br> (شيل أي حاجة ضيقة زي الخواتم أو الملابس)",
            "Cover the burn with a clean cloth <br>(غطي الحرق بقطعة قماش نظيفة)",
            "Do not apply ice or toothpaste<br> (ما تحطش تلج أو معجونننن)",
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
    ]
}

function show_aid(){
    let ol = document.getElementById("ol")
    let p = document.getElementById("p")
    let t = document.getElementById("t")
    let frm = document.getElementById("frm")
    let ui = document.getElementById("ui")

    ol.innerHTML = ""
    p.innerHTML = ""

    for(let i = 0; i < caces[ui.value][0].length; i++){
        ol.innerHTML += `<li>${caces[ui.value][0][i]}</li>`
    }

    t.innerHTML = caces[ui.value][1]
    frm.setAttribute("src", caces[ui.value][2])
}


// تسجيل الـ Service Worker
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(() => console.log("SW Registered"))
    .catch((err) => console.log("SW Error:", err));
}
