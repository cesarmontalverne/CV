'use strict';

const e = React.createElement;

function TextSelector(text_list, id) {
    return e("div",null,
    e('button',
      null,
      'Like'
    ),
    e('button',
      null,
      'Like'
    )
    );
}
const domContainer = document.querySelector('#text_selector_container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(TextSelector));