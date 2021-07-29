import "../css/index.css";
import {buttonEventBinder} from "./modules/buttonEventBinder/buttonEventBinder";
import {addOrRemoveProperty} from "./modules/addRemoveProperty/addRemoveProperty";

//On page load, below methods will trigger
window.onload = function() {
    addOrRemoveProperty();
    buttonEventBinder();
};
