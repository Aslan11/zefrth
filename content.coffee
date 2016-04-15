isInDOMTree = () ->
  return document.getElementById('description') != null

executeOnLoad = (func) ->
  # This function will check, every tenth of a second, to see if
  # our element description is a part of the DOM tree - as soon as we know
  # that it is, we execute the provided function.
  if isInDOMTree()
    func()
  else
    setTimeout (->
      executeOnLoad func
      return
    ), 100
  return

executeOnLoad( ->
    element = document.getElementById('description')
    if not element.value and element.tagName.toLowerCase() is 'textarea'
      element.value = """
{panel:title=(on) TASK |titleBGColor=#E3F09B|bgColor=#EEE}{panel}
* _What is the task that should be completed?_
* _Requirements (including edge cases), API format, JSON snippets, error formats, schema details, file locations, UX mocks etc_

<INSERT TASK DETAILS HERE>

----
{panel:title=(/) DEFINITION OF DONE |titleBGColor=#F79F79|bgColor=#EEE}{panel}
 * _What needs to be present for this work to be considered "Done"?_
* _Acceptance Criteria for the Work_

<INSERT DEFINITION of DONE HERE>


----
{panel:title=(i) PURPOSE|titleBGColor=#87B6A7|bgColor=#EEE}{panel}
* _Why are you doing this work? Why is it useful/needed?_

<INSERT CONTEXT  HERE>
      """
)
