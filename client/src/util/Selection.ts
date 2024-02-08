import rangy from 'rangy';

export const selectAndGetText = () => {

    const selection = rangy.getSelection().getRangeAt(0)
    window.getSelection()?.removeAllRanges();

    const startNode = selection.startContainer.nodeValue === " " ? selection.startContainer.nextSibling as HTMLElement: selection.startContainer.parentElement;
    const endNode = selection.endContainer.nodeValue === " " ? selection.endContainer.previousSibling as HTMLElement: selection.endContainer.parentElement;
    const containerNode = startNode?.parentElement;

    if(!startNode || !endNode || !containerNode) return;

    // if selection starts within a selected text
    if(containerNode.id === "selected-text"){
        return startNode.parentElement?.replaceWith(...startNode.parentElement.childNodes);
    }

    const highlight = _createAndReturnHighlight();

    _highlightText(startNode, endNode, containerNode, highlight);

    return formatWord(highlight.textContent);
}


export const formatWord = (str:string | null) => {
    if(!str) return "";
    return str.replace(/[^a-z0-9 āēīōū]/gi, '').toLowerCase();
};


export const removeHighlight = () => {
    const currenthighlight = document.getElementById("selected-text");
    if(currenthighlight){
        currenthighlight?.replaceWith(...currenthighlight.childNodes);
    }
};


const _createAndReturnHighlight = () => {
    const highlight = document.createElement("span")
    highlight.classList.add("selected-text");
    highlight.id = "selected-text"

    return highlight
}


const _highlightText = (startNode:HTMLElement, endNode: HTMLElement, containerNode:HTMLElement, highlight:HTMLElement) => {
   
    const maxPhraseLength = 10;

    console.log("start: ", startNode.id)
    console.log("end: ", endNode.id)

    // get ids as integers "w1" -> 1
    let startIndex = parseInt(startNode.id.substring(1));
    let endIndex = parseInt(endNode.id.substring(1));

    if(endIndex > (startIndex + maxPhraseLength)){
        endIndex = startIndex + maxPhraseLength;
    }

    if(endIndex < startIndex){
        endIndex = startIndex;
    }

    // insert
    containerNode.insertBefore(highlight, startNode)

    // pack children
    for(let i:number=startIndex;i<=endIndex;i++){
        const toAppend = document.getElementById("w"+i)
        const nextSibling = toAppend?.nextSibling;

        if(toAppend && toAppend?.parentElement?.id === containerNode.id){
            highlight.appendChild(toAppend)
        }else{
            return removeHighlight();
        };

        if(nextSibling && i !== endIndex){
            highlight.appendChild(nextSibling)
        }
    }
};
