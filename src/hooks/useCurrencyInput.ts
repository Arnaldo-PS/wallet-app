import { useState, useEffect } from "react";

export function useCurrencyInput(initialValue = 0) {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        setValue(initialValue);
    }, [initialValue]);

    function formatCurrency(cents: number) {

        return (cents / 100).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL'
        });

    }

    function handleChange(text: string) {
        const numeric = text.replace(/\D/g, '');
        const cents = parseInt(numeric || '0', 10);
        setValue(cents);
    }

    return {
        value,
        formatted: formatCurrency(value),
        onChangeText: handleChange
    };
}
