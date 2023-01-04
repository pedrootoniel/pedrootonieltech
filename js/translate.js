function ChangeLang(t) {

    var e, n = "";

    if (document.createEvent) {

        var a = document.createEvent("HTMLEvents");

        a.initEvent("click", !0, !0)

    }

    if ("pt" == t) n = $(".goog-te-banner-frame:eq(0)").contents().find("button[id*='restore']");

    else {

        switch (t) {

            case "en":

                e = "ngl";

                break;

            case "es":

                e = "spanhol"

        }

        n = $(".goog-te-menu-frame:eq(0)").contents().find("span:contains('" + e + "')")

    }

    n.length > 0 && (document.createEvent ? n[0].dispatchEvent(a) : n[0].click())

}



function googleTranslateElementInit() {

    new google.translate.TranslateElement({

        pageLanguage: "pt",

        autoDisplay: !1,

        includedLanguages: "en,es",

        layout: google.translate.TranslateElement.InlineLayout.SIMPLE

    }, "google_translate_element")

}

 jQuery(function(t) {

        t("html").on("click", "#jq_term", function(e) {

            e.preventDefault(), t("#term").css("margin-top", "10px").slideToggle()

        })

    }), jQuery(function(t) {

        t.getScript("https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit")

    });