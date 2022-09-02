---
to: <%=root%>/<%=typeIdentifier%>/imsPciCreator.json
---
{
    "model": "IMSPCI",
    "typeIdentifier": "<%=typeIdentifier%>",
    "label": "<%=label%>",
    "description": "<%=description%>",
    "version": "0.1.0",
    "author": "OAT SA",
    "email": "contact@taotesting.com",
    "tags": [],
    "icon": "./icon.svg",
    "short": "<%=label%>",
    "response": {
        "baseType": "<%=baseType%>",
        "cardinality": "<%=cardinality%>"
    },
    "runtime" : {
        "hook" : "./runtime/<%=typeIdentifier%>.js",
        "modules" : {
            "<%=typeIdentifier%>/runtime/<%=typeIdentifier%>" : [
                "runtime/<%=typeIdentifier%>.js"
            ]
        },
        "libraries" : [],
        "src" : [
            "./runtime/<%=typeIdentifier%>.js"
        ]
    },
     "creator" : {
        "icon": "./icon.svg",
        "hook": "./imsPciCreator.js",
        "src" : [
            "./imsPciCreator.js",
            "./creator/widget/Widget.js",
            "./creator/widget/states/states.js",
            "./creator/widget/states/Question.js"
        ]
    }

}
