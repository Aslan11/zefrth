var executeOnLoad, isInDOMTree;

isInDOMTree = function() {
    return document.getElementById("create-issue-dialog") !== null &&
        document.getElementById("description") !== null;
};

executeOnLoad = function(func) {
    if (isInDOMTree()) {
        func();
    }
    return setTimeout(
        function() {
            return executeOnLoad(func);
        },
        100
    );
};

executeOnLoad(function() {
    var element;
    element = document.getElementById("description");
    if (!element.value && element.tagName.toLowerCase() === "textarea") {
        return element.value = '{panel:title=(on) TASK |titleBGColor=#E3F09B|bgColor=#EEE}\n_What is the task to be completed? What are the requirements? E.g. API format, JSON snippets, error formats, schema details, file locations, UX mocks, edge cases, etc._\n\n_<INSERT TASK DETAILS HERE>_\n{panel}\n{panel:title=(/) DEFINITION OF DONE |titleBGColor=#F79F79|bgColor=#EEE}\n_What needs to be delivered for this work to be considered "Done"? What is the acceptance criteria for the work?_\n\n_<INSERT DEFINITION of DONE DETAILS HERE>_\n{panel}\n{panel:title=(i) PURPOSE|titleBGColor=#87B6A7|bgColor=#EEE}\n_Why are you doing this work? Why is it useful/needed? What is the proposed value?_\n\n_<INSERT PURPOSE DETAILS HERE>_\n{panel}\n{panel:title=(?) NOTES|titleBGColor=#8097B6|bgColor=#EEE}\n_Anything else?_\n\n_<INSERT NOTES DETAILS HERE>_\n{panel}';
    }
});
