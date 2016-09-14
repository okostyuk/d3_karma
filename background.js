chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log("Test intercepted: " + details.requestBody.raw);
        var raw = details.requestBody.raw;
        var arrayBuffer = raw[0].bytes;

        var dataView = new DataView(arrayBuffer);
        var decoder = new TextDecoder("utf-8");
        var decodedString = decoder.decode(dataView);

        console.log("formadata=" + decodedString);

    },
    // filters
    {
        urls: [
            "https://dirty.ru/ajax/user/karma/list/"
        ],
        //types: ["image", "xmlhttprequest", "main_frame", "object", "other"]
    },
    // extraInfoSpec
    ["blocking", "requestBody"]);

