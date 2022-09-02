export const createOrder = async({name, phone, state, province, address, total, PaymentMethod}) => {
    const res = await fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            phone: phone,
            state: state,
            province: province,
            address: address,
            total: parseFloat(total),
            method: PaymentMethod,
            status: 1,
        }),
    });
    const id = await res.json();
    return id;
}