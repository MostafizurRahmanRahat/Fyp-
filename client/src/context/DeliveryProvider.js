import React, { createContext, useState } from 'react';

export const DeliveryContext = createContext();

const DeliveryProvider = ({ children }) => {
    const [deliveryOption, setDeliveryOption] = useState("7 days");
    const [customColor, setCustomColor] = useState(null);
    const [customSize, setCustomSize] = useState(null);
    const [comment, setcomment] = useState(null);

    const value = {
        deliveryOption, setDeliveryOption, customColor, setCustomColor, customSize, setCustomSize, comment, setcomment
    }

    return (
        <DeliveryContext.Provider value={value}>
            {children}
        </DeliveryContext.Provider>
    );
};

export default DeliveryProvider;