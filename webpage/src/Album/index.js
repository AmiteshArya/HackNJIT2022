import './index.scss'
import { useState } from "react";
import Gallery from "react-photo-gallery";
import Photo from "../Photo/index.js";
import { arrayMoveImmutable } from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { photos } from "../Photos/index.js";


const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));


function Album() {

    const [items, setItems] = useState(photos);

    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMoveImmutable(items, oldIndex, newIndex));
    };


    return (
        <div className='album'>
            <h2>Sortable Gallery</h2>
            <h3>Drag photo to rearrange</h3>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
    );
}

export default Album;