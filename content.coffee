isInDOMTree = () ->
  return (document.getElementById('create-issue-dialog') isnt null and document.getElementById('description') isnt null)

executeOnLoad = (func) ->
  # This function will check, every tenth of a second, to see if
  # our element description is a part of the DOM tree - as soon as we know
  # that it is, we execute the provided function.
  if isInDOMTree()
    func()
  setTimeout (->
    executeOnLoad func
  ), 100

executeOnLoad( ->
    element = document.getElementById('description')
    if not element.value and element.tagName.toLowerCase() is 'textarea'
      element.value = """
{panel:title=(on) TASK |titleBGColor=#E3F09B|bgColor=#EEE}
_What is the task to be completed? What are the requirements? E.g. API format, JSON snippets, error formats, schema details, file locations, UX mocks, edge cases, etc._

_<INSERT TASK DETAILS HERE>_
{panel}
{panel:title=(/) DEFINITION OF DONE |titleBGColor=#F79F79|bgColor=#EEE}
_What needs to be delivered for this work to be considered "Done"? What is the acceptance criteria for the work?_

_<INSERT DEFINITION of DONE DETAILS HERE>_
{panel}
{panel:title=(i) PURPOSE|titleBGColor=#87B6A7|bgColor=#EEE}
_Why are you doing this work? Why is it useful/needed? What is the proposed value?_

_<INSERT PURPOSE DETAILS HERE>_
{panel}
{panel:title=(?) NOTES|titleBGColor=#8097B6|bgColor=#EEE}
_Anything else?_

_<INSERT NOTES DETAILS HERE>_
{panel}
      """
)
