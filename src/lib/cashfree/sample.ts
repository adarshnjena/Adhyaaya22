export const sample_make_order = {
    order_id: `order_${Date.now()}`, // This is of the format userid-eventcode
    order_amount: 150, // Needs to confirm prices
    order_currency: 'INR', // const
    customer_details: {
        customer_id: '12345', // Firebase User ID
        customer_email: 'techsupport@cashfree.com', // Adhyaaya Support Email
        customer_phone: '9816512345', // Check Phone number inside the dashboard
    }, 
};

// USE UPI ID FOR TESTING
// testsuccess@gocash for success
// testfailure@gocash for failure