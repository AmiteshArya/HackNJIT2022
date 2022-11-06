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
            <div>
                <h2>Forestry</h2>
            </div>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
            <div>
                <h2>Bonfire</h2>
            </div>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
            <div>
                <h2>Landscape</h2>
            </div>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
            <div>
                <h2>People</h2>
            </div>
            <SortableGallery items={items} onSortEnd={onSortEnd} axis={"xy"} />
        </div>
    );
}

export default Album;