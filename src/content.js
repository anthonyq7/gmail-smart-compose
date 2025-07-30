const composeContainer = document.body;

const observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
        for (let node of mutation.addedNodes) {

            if (node.nodeType == 1) {
                const composeArea = node.querySelector(".gU.UP") || node.querySelector("[role='dialog']");
                
                if (composeArea) {
                    injectSmartReplyToolbar(composeArea);
                }
            }
        }

    }
});

observer.observe(composeContainer, { childList: true, subtree: true });

function injectSmartReplyToolbar(composeElem) {
    if (composeElem.querySelector(".smart-reply-toolbar")) {
        return;
    }

    const toolbar = document.createElement("div");
    toolbar.id = "smart-reply-toolbar";
    toolbar.style.margin = "8px 0";
    toolbar.style.border = "1px solid #ccc";
    toolbar.style.padding = "8px";
    toolbar.style.backgroundColor = "#f9f9f9";

    const actions = ["Accept", "Decline", "Reschedule", "Thank", "Shorten", "Custom"];
    actions.forEach(action => {
        const btn = document.createElement("button");
        btn.innerText = action;
        btn.className = "smart-reply-btn";
        btn.style.margin = "0 4px";
        btn.style.padding = "4px 8px";
        toolbar.appendChild(btn);
        btn.addEventListener("click", () => onToolbarButtonClick(action, composeElem));
    });

    composeElem.appendChild(toolbar);
}

const quickReplies = {
    "Accept": "I'll be there!",
    "Decline": "Sorry, I can't make it.",
    "Reschedule": "Let's find a new time.",
    "Thank": "Thanks for the invite!",
}

function onToolbarButtonClick(action, composeElem) {
    if (quickReplies[action]) {
        insertIntoCompose(action, composeElem);
    } else {
        alert("No quick reply found for this action.");
    }
}

function insertIntoCompose(action, composeElem) {
    const composeArea = composeElem.querySelector(".Am.Al.editable");
    if (composeArea) {
       composeArea.innerText = quickReplies[action];
    }
}

