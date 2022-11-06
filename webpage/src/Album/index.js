import './index.scss'
import { useState } from "react";
import Gallery from "react-photo-gallery";
import Photo from "../Photo/index.js";
import { arrayMoveImmutable } from "array-move";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import { campingPhotos, firePhotos, foodPhotos, forestPhotos, nightPhotos, peoplePhotos, plantPhotos, sunsetPhotos, woodPhotos} from "../Photos/index.js";



const SortablePhoto = SortableElement(item => <Photo {...item} />);
const SortableGallery = SortableContainer(({ items }) => (
  <Gallery photos={items} renderImage={props => <SortablePhoto {...props} />} />
));


function Album() {

    const [campingItems, setCampingItems] = useState(campingPhotos);
    const [fireItems, setFireItems] = useState(firePhotos);
    const [foodItems, setFoodItems] = useState(foodPhotos);
    const [forestItems, setForestItems] = useState(forestPhotos);
    const [nightItems, setNightItems] = useState(nightPhotos);
    const [peopleItems, setPeopleItems] = useState(peoplePhotos);
    const [plantItems, setPlantItems] = useState(plantPhotos);
    const [sunsetItems, setSunsetItems] = useState(sunsetPhotos);
    const [woodItems, setWoodItems] = useState(woodPhotos);

    const onCampingSortEnd = ({ oldIndex, newIndex }) => {
        setCampingItems(arrayMoveImmutable(campingItems, oldIndex, newIndex));
    };

    const onFireSortEnd = ({ oldIndex, newIndex }) => {
        setFireItems(arrayMoveImmutable(fireItems, oldIndex, newIndex));
    };

    const onFoodSortEnd = ({ oldIndex, newIndex }) => {
        setFoodItems(arrayMoveImmutable(foodItems, oldIndex, newIndex));
    };

    const onForestSortEnd = ({ oldIndex, newIndex }) => {
        setForestItems(arrayMoveImmutable(forestItems, oldIndex, newIndex));
    };

    const onNightSortEnd = ({ oldIndex, newIndex }) => {
        setNightItems(arrayMoveImmutable(nightItems, oldIndex, newIndex));
    };

    const onPeopleSortEnd = ({ oldIndex, newIndex }) => {
        setPeopleItems(arrayMoveImmutable(peopleItems, oldIndex, newIndex));
    };

    const onPlantSortEnd = ({ oldIndex, newIndex }) => {
        setPlantItems(arrayMoveImmutable(plantItems, oldIndex, newIndex));
    };

    const onSunsetSortEnd = ({ oldIndex, newIndex }) => {
        setSunsetItems(arrayMoveImmutable(sunsetItems, oldIndex, newIndex));
    };

    const onWoodSortEnd = ({ oldIndex, newIndex }) => {
        setWoodItems(arrayMoveImmutable(woodItems, oldIndex, newIndex));
    };


    return (
        <div className='album'>
            <h3>Camping</h3>
            <SortableGallery items={campingItems} onSortEnd={onCampingSortEnd} axis={"xy"} />
            <h3>Fire</h3>
            <SortableGallery items={fireItems} onSortEnd={onFireSortEnd} axis={"xy"} />
            <h3>Food</h3>
            <SortableGallery items={foodItems} onSortEnd={onFoodSortEnd} axis={"xy"} />
            <h3>Forest</h3>
            <SortableGallery items={forestItems} onSortEnd={onForestSortEnd} axis={"xy"} />
            <h3>Night</h3>
            <SortableGallery items={nightItems} onSortEnd={onNightSortEnd} axis={"xy"} />
            <h3>People</h3>
            <SortableGallery items={peopleItems} onSortEnd={onPeopleSortEnd} axis={"xy"} />
            <h3>Plant</h3>
            <SortableGallery items={plantItems} onSortEnd={onPlantSortEnd} axis={"xy"} />
            <h3>Sunset</h3>
            <SortableGallery items={sunsetItems} onSortEnd={onSunsetSortEnd} axis={"xy"} />
            <h3>Wood</h3>
            <SortableGallery items={woodItems} onSortEnd={onWoodSortEnd} axis={"xy"} />
        </div>
    );
}

export default Album;