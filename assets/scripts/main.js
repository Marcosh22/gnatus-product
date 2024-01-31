function generateUpdatedJson() {
    return {
        "embedAtTimestamp": Date.now().toString(),
        "formDefinitionUpdatedAt": Date.now().toString(),
        "lang": "pt-br",
        "embedType": "SHAREABLE",
        "disableCookieSubmission": "true",
        "notifyHubSpotOwner": "true",
        "userAgent": navigator.userAgent,
        "pageTitle": "Consultório Reformado Gnatus Syncrus",
        "pageUrl": "https://equipamentosodontologicos.com.br",
        "referrer": "https://equipamentosodontologicos.com.br/index.html",
        "isHubSpotCmsGeneratedPage": false,
        "formTarget": "#hbspt-form-ab0975bd-3fb4-434d-9e36-3042ec815476",
        "rumScriptExecuteTime": 203.29999999701977,
        "rumTotalRequestTime": 221.79999999701977,
        "rumTotalRenderTime": 277.79999999701977,
        "rumServiceResponseTime": 18.5,
        "rumFormRenderTime": 56,
        "connectionType": "4g",
        "firstContentfulPaint": 0,
        "largestContentfulPaint": 0,
        "locale": "pt-br",
        "timestamp": Date.now(),
        "originalEmbedContext": {
            "portalId": "45104194",
            "formId": "45e00bd1-bdfe-4074-baad-8b1977bac748",
            "region": "na1",
            "target": "#hbspt-form-ab0975bd-3fb4-434d-9e36-3042ec815476",
            "isBuilder": false,
            "isTestPage": false,
            "isPreview": false,
            "isMobileResponsive": true,
            "isInsideFrame": true,
            "shellId": 0,
            "pageTitle": "Consultório Reformado Gnatus Syncrus",
            "pageUrl": "https://equipamentosodontologicos.com.br",
            "referrer": "https://equipamentosodontologicos.com.br/index.html"
        },
        "correlationId": "ab0975bd-3fb4-434d-9e36-3042ec815476",
        "renderedFieldsIds": ["email", "firstname"],
        "captchaStatus": "NOT_APPLICABLE",
        "emailResubscribeStatus": "NOT_APPLICABLE",
        "isInsideCrossOriginFrame": false,
        "source": "forms-embed-1.4595",
        "sourceName": "forms-embed",
        "sourceVersion": "1.4595",
        "sourceVersionMajor": "1",
        "sourceVersionMinor": "4595",
        "allPageIds": {},
        "_debug_embedLogLines": [{
                "clientTimestamp": Date.now(),
                "level": "INFO",
                "message": "Retrieved pageContext values which may be overriden by the embed context: {\"pageTitle\":\"Consultório Reformado Gnatus Syncrus\",\"pageUrl\":\"https://equipamentosodontologicos.com.br\",\"referrer\":\"https://equipamentosodontologicos.com.br/index.html\",\"userAgent\":\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36\",\"isHubSpotCmsGeneratedPage\":false}"
            },
            {
                "clientTimestamp": Date.now(),
                "level": "INFO",
                "message": "Retrieved countryCode property from normalized embed definition response: \"BR\""
            }
        ]
    };
}

function generateWhatsAppLink(name) {
    const boldName = `*${name}*`;
    const message = `Olá, meu nome é ${boldName} e gostaria de saber mais sobre a cadeira Gnatus.`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/5516996466353?text=${encodedMessage}`;
}

$(document).ready(() => {
    let ctas = document.querySelectorAll('.js-scroll');
    let nameInput = document.getElementById('name');
    let loader = document.getElementById('loader');
    
    if(ctas) ctas.forEach(cta => {
        cta.addEventListener('click', () => {
            if(nameInput) {
                setTimeout(() => {
                    nameInput.focus();
                  }, 0);
            }
        })
    })

    let form = document.getElementById('hsForm');

    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if(loader) {
                loader.style.display = 'grid';
                document.querySelector('body').style.overflow = 'hidden';
            }

            const formData = new FormData(form);
            formData.append('hs_context', JSON.stringify(generateUpdatedJson()));

            let name = formData.get('firstname');
            let whatsappLink = generateWhatsAppLink(name);

            let actionUrl = e.target.getAttribute('action');

            fetch(actionUrl, {
                method: 'POST',
                body: formData
            })
            .then((data) => data)
            .then(() => {
                window.location.href = whatsappLink;
            })
        })
    }
})