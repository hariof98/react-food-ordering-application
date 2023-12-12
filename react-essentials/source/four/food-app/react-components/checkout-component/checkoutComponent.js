import { MOCK_USER_DETAILS } from "../../../../../utilities/constants.js";
import { useParams } from "react-router-dom";
import CartComponent from "../cart-component/cartComponent.js";

const CheckoutComponent = () => {
    /* 
        - Address
        - Estimated Delivery Time
        - Cart Details
        - Delivery Instructions (optional)
        - Coupons Section
        - Total Amount
        - Payment Methods
    */

    const { userName, mobile, address, swiggyMember } = MOCK_USER_DETAILS[0];
    const { name, count } = useParams();

    const checkoutLayout = (
        <div className="checkout-container">
            <div className="checkout">Checkout Now!</div>

            <div className="cart-box user-address">
                <div className="checkout-details">Address:</div>
                <div className="address-name">{userName}</div>
                <div className="address-mobile">{mobile}</div>
                <div className="address-text">{address}</div>
            </div>

            <div className="cart-box eta">
                <div className="checkout-details">Estimated Time Of Delivery:</div>
                <div className="eta-text">30 Mins</div>
            </div>

            <div className="cart-box cart">
                <CartComponent itemName={name} itemCount={count} />
            </div>
        </div>
    );

    return checkoutLayout;
};

export default CheckoutComponent;
