var executeOnLoad, isInDOMTree;

isInDOMTree = function() {
  return document.getElementById('description') !== null;
};

executeOnLoad = function(func) {
  if (isInDOMTree()) {
    func();
  } else {
    setTimeout((function() {
      executeOnLoad(func);
    }), 100);
  }
};

executeOnLoad(function() {
  var element;
  element = document.getElementById('description');
  console.log(element.tagName);
  if (!element.value && element.tagName.toLowerCase() === 'textarea') {
    return element.value = "{panel:title=(on) TASK |titleBGColor=#E3F09B|bgColor=#EEE}{panel}\n* _What is the task that should be completed?_\n* _Requirements (including edge cases), API format, JSON snippets, error formats, schema details, file locations, UX mocks etc_\n\n<INSERT TASK DETAILS HERE>\n\n----\n{panel:title=(/) DEFINITION OF DONE |titleBGColor=#F79F79|bgColor=#EEE}{panel}\n * _What needs to be present for this work to be considered \"Done\"?_\n* _Acceptance Criteria for the Work_\n\n<INSERT DEFINITION of DONE HERE>\n\n\n----\n{panel:title=(i) PURPOSE|titleBGColor=#87B6A7|bgColor=#EEE}{panel}\n* _Why are you doing this work? Why is it useful/needed?_\n\n<INSERT CONTEXT  HERE>";
  }
});
