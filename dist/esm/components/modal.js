import React from 'react';
export default function Modal(_a) {
    var title = _a.title, content = _a.content, onClick = _a.onClick;
    return (React.createElement("div", { id: 'modal', tabIndex: -1, "aria-hidden": 'true', className: 'bg-black/75 p-5 overflow-auto text-center fixed top-0 right-0 left-0 bottom-0 z-1 w-full h-full before:content-[""] before:inline-block before:h-full before:align-middle' },
        React.createElement("div", { className: 'relative inline-block p-4 w-full max-w-xl h-full md:h-auto align-middle' },
            React.createElement("div", { className: 'relative bg-white rounded-lg shadow dark:bg-gray-700' },
                React.createElement("div", { className: 'flex justify-between items-start p-4 rounded-t' },
                    React.createElement("h3", { className: 'text-2xl font-semibold text-gray-900 dark:text-white' }, title),
                    React.createElement("button", { type: 'button', className: 'text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white', "data-modal-toggle": 'modal', onClick: onClick },
                        React.createElement("svg", { "aria-hidden": 'true', className: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 20 20', xmlns: 'http://www.w3.org/2000/svg' },
                            React.createElement("path", { fillRule: 'evenodd', d: 'M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z', clipRule: 'evenodd' })),
                        React.createElement("span", { className: 'sr-only' }, "Close modal"))),
                React.createElement("div", { className: 'p-6 space-y-6' },
                    React.createElement("p", { className: 'text-2xl text-center leading-relaxed text-gray-700 dark:text-gray-400' }, content)),
                React.createElement("div", { className: 'flex items-center justify-center p-6 space-x-2 rounded-b' },
                    React.createElement("button", { onClick: onClick, "data-modal-toggle": 'modal', type: 'button' }, "Close"))))));
}
//# sourceMappingURL=Modal.js.map