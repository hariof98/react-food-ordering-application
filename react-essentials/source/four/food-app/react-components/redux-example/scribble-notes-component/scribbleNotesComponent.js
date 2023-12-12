/* 
    This scribble/note component demonstrates the working of Redux in our application. 
    This component can be used to keep notes of your diet plans.
    Since I have built the “Add to Cart” functionality using React's Context, I'm using this example for Redux.
*/

import dietPlan from "../../../../../../utilities/redux-store/slices/dietPlan";
import { useDispatch, useSelector } from "react-redux";

const ScribbleNotesComponent = () => {
    let value = "";

    //console.log(dietPlan);
    const { addPlan, clearAllPlan } = dietPlan.actions; // addPlan is one of the reducer function that we have.

    const dispatch = useDispatch();

    const selector = useSelector((store) => {
        return store.diet;
    });

    const scribbleNotesLayout = (
        <div>
            <div className="scribble-filters">
                <input
                    type="text"
                    className="search-restraunts"
                    onChange={(event) => {
                        value = event.target.value;
                    }}></input>

                <button className="btn-contanier" onClick={() => updateReduxStore()}>
                    Add+
                </button>

                <button className="btn-contanier" onClick={() => clearReduxStore()}>
                    Clear List
                </button>
            </div>

            <div className="scribble-container">
                {/* data from redux store */}
                {selector.list.length === 0 ? (
                    <div>
                        <p>Add Your Diet Plans!</p>
                    </div>
                ) : (
                    selector.list.map((data, index) => {
                        return (
                            <div key={index}>
                                <div>{data}</div>
                                <button onClick={() => {}}>Delete</button>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );

    const updateReduxStore = () => {
        dispatch(addPlan(value)); // the dispatch event will call the reducer function to modify the slice of data in Redux store.
        document.getElementsByClassName("search-restraunts")[0].value = "";
    };

    const clearReduxStore = () => {
        dispatch(clearAllPlan());
    };

    return scribbleNotesLayout;
};

export default ScribbleNotesComponent;
