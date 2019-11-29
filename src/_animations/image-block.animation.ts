import posed from 'react-pose';

export const ImageBlockAnimation = posed.img({
    visible: {opacity: 1, transition: {duration: 500}, applyAtStart: {display: 'block'}},
    hidden: {opacity: 0, transition: {duration: 500}, applyAtStart: {display: 'none'}}
});