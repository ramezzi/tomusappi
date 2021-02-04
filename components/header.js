const e = React.createElement;

class TomusHeader extends React.Component {
    /*column-start-1
    column-span-12
    row-span-1"
    style="background:red; min-height: 100px;}*/
    constructor(props) {
        super(props);
        //this.state = { liked: false };
    }

    render() {
        return ('div', null, `Hello ${this.props.toWhat}`)
            ;
        }

}


document.querySelectorAll('.header1')
    .forEach(domContainer => {
        // Read the comment ID from a data-* attribute.
        const commentID = parseInt(domContainer.dataset.commentid, 10);
        ReactDOM.render(
            e(TomusHeader, {}),
            domContainer
        );
    });