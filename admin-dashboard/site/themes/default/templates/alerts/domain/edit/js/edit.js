var saveConfiguration = function (domainName, templateType, configurationName, description, parameters) {
    // if(!validateInputs()){
    //     return;
    // }

    jagg.post("/site/blocks/alerts/domain/edit/ajax/alerts-domain-edit.jag", {
        action:"saveConfiguration",
        domainName:domainName,
        templateType:templateType,
        configurationName:configurationName,
        description:description,
        parameters:parameters
        }, function (result) {
            if (result.error == false) {
                location.href = 'site/pages/alerts-domain-manage.jag?domainName='+domainName;
            } else {
                jagg.message({content:result.message,type:"error"});
            }
        },
    "json");
};



